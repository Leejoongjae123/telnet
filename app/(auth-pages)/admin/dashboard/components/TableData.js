"use client";
import React from "react";
import {
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell,
  Input,
  Select,
  SelectItem,
  Button,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Pagination,
  Spinner,
} from "@heroui/react";
import { createClient } from "@/utils/supabase/client";
import { useState, useEffect } from "react";
import { SearchIcon } from "lucide-react";
import { debounce } from "lodash";
import { ToastContainer, toast, Bounce } from "react-toastify";
export default function TableData() {
  const [selectedFilter, setSelectedFilter] = useState("name");
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(10);
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const pageSize = 10;

  // debounced 검색 함수 생성
  const debouncedSearch = debounce((value) => {
    setSearchTerm(value);
  }, 500); // 500ms 딜레이

  // Input onChange 핸들러 수정
  const handleSearchChange = (e) => {
    debouncedSearch(e.target.value);
  };
  const fetchData = async () => {
    const supabase = await createClient();
    let query = supabase
      .from("information")
      .select("*", { count: "exact" })
      .eq("available", true);

    // 검색어가 있을 경우 필터 적용
    if (searchTerm) {
      query = query.ilike(selectedFilter, `%${searchTerm}%`);
    }

    const { data, error, count } = await query.range(
      pageSize * (page - 1),
      pageSize * page - 1
    );

    console.log("count:", count);
    setData(data);
    setTotal(Math.ceil(count / pageSize));
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, [page, searchTerm, selectedFilter]);

  const handleDelete = async (id) => {
    const supabase = await createClient();
    const { error } = await supabase
      .from("information")
      .update({ available: false })
      .eq("id", id);
    if (error) {
      console.error("Error deleting data:", error);
    }
    fetchData();  
    toast.success("삭제되었습니다.");
  };

  const handleDownload = async () => {  
    const supabase = await createClient();
    const { data, error } = await supabase.from("information").select("*").eq('available',true);
    if (error) {
      console.error("Error downloading data:", error);
      return;
    }
    
    // 현재 날짜와 시간 포맷팅
    const now = new Date();
    const dateStr = now.getFullYear() + '_' + 
                   String(now.getMonth() + 1).padStart(2, '0') + '_' + 
                   String(now.getDate()).padStart(2, '0') + '_' +
                   String(now.getHours()).padStart(2, '0') + '_' +
                   String(now.getMinutes()).padStart(2, '0') + '_' +
                   String(now.getSeconds()).padStart(2, '0');
    
    // CSV 헤더 생성
    const headers = ["이름", "연락처", "통신사", "플랫폼"];
    
    // 데이터를 CSV 형식으로 변환
    const csvData = data.map(item => 
      [item.name, item.phone, item.company, item.platform].join(',')
    );
    
    // 헤더와 데이터 결합
    const csvContent = [headers.join(','), ...csvData].join('\n');
    
    // CSV 파일 생성 및 다운로드
    const blob = new Blob(['\ufeff' + csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    
    link.setAttribute('href', url);
    link.setAttribute('download', `고객정보_${dateStr}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div className="flex flex-col gap-2 w-full h-full gap-y-4">
      <ToastContainer
        position="top-center"
        autoClose={2000}
        limit={5}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        transition={Bounce}
      />
      <div className="flex gap-2 flex-row">
        <Input
          defaultValue={searchTerm}
          onChange={handleSearchChange}
          endContent={<SearchIcon />}
          label="검색어를 입력하세요"
        ></Input>
        <Select
          selectedKeys={[selectedFilter]}
          onChange={(e) => setSelectedFilter(e.target.value)}
          label="검색 기준"
        >
          <SelectItem value="name" key="name">
            이름
          </SelectItem>
          <SelectItem value="phone" key="phone">
            연락처
          </SelectItem>
          <SelectItem value="company" key="company">
            통신사
          </SelectItem>
          <SelectItem value="platform" key="platform">
            플랫폼
          </SelectItem>
        </Select>
        <Button
          onPress={handleDownload}
          className="w-full h-full"
          color="primary"
        >
          엑셀로 다운로드
        </Button>
      </div>
      <div>
        <Table
          classNames={{ wrapper: "p-0" }}
          aria-label="Example static collection table overflow-x-auto"
          shadow="none"
        >
          <TableHeader>
            <TableColumn className="text-center">이름</TableColumn>
            <TableColumn className="text-center">연락처</TableColumn>
            <TableColumn className="text-center">통신사</TableColumn>
            <TableColumn className="text-center">플랫폼</TableColumn>
            <TableColumn className="text-center">삭제</TableColumn>
          </TableHeader>
          <TableBody>
            {isLoading ? (
              <TableRow>
                <TableCell colSpan={5} className="text-center">
                  <Spinner />
                </TableCell>
              </TableRow>
            ) : (
              data?.map((item) => (
                <TableRow key={item.id}>
                  <TableCell className="text-center whitespace-nowrap">
                    {item.name}
                  </TableCell>
                  <TableCell className="text-center whitespace-nowrap">
                    {item.phone}
                  </TableCell>
                  <TableCell className="text-center whitespace-nowrap">
                    {item.company}
                  </TableCell>
                  <TableCell className="text-center whitespace-nowrap">
                    {item.platform}
                  </TableCell>
                  <TableCell className="text-center whitespace-nowrap">
                    <Button
                      onPress={() => handleDelete(item.id)}
                      color="danger"
                    >
                      삭제
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
        <div className="flex justify-center items-center w-full h-full">
          <Pagination
            onChange={(page) => setPage(page)}
            page={page}
            total={total}
            initialPage={page}
          />
        </div>
      </div>
    </div>
  );
}
