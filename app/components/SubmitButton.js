"use client";
import React from "react";
import useAgreeStore from "./agreeStore";
import useNameStore from "./nameStore";
import usePhoneStore from "./phoneStore";
import { ToastContainer, toast, Bounce } from "react-toastify";
import { createClient } from "@/utils/supabase/client";
import { Spinner } from "@heroui/spinner";
import { useState, useEffect } from "react";
function SubmitButton() {
  const { isChecked } = useAgreeStore();
  const { name } = useNameStore();
  const { phone } = usePhoneStore();
  const [isLoading, setIsLoading] = useState(false);
  const supabase = createClient();

  const handleSubmit = async () => {
    setIsLoading(true);



    if (!name) {
      toast.error("이름을 입력해주세요.");
      setIsLoading(false);
      return;
    }
    if (!phone) {
      toast.error("전화번호를 입력해주세요.");
      setIsLoading(false);
      return;
    }
    if (!isChecked) {
      toast.error("개인정보 수집에 동의해주세요.");
      setIsLoading(false);
      return;
    }

    const { data: checkData, error: checkError } = await supabase
      .from("information")
      .select("*")
      .eq("phone", phone);
    if (checkData.length > 0) {
      toast.error("이미 지원금 확인 요청을 보낸 전화번호입니다.");
      setIsLoading(false);
      return;
    }

    const { data, error } = await supabase.from("information").insert({
      name,
      phone,
      platform: "테라넷",
    });
    if (error) {
      toast.error("지원금 확인 요청에 실패했습니다. 다시 시도해주세요.");
      return;
    }
    setIsLoading(false);
    toast.success(
      "지원금 확인 요청이 완료되었습니다. 빠른 시일내에 검토하여 연락드리겠습니다."
    );
  };
  return (
    <>
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
      <button
        onClick={handleSubmit}
        className="px-8 py-2 text-xl md:text-[30px] flex items-center justify-center mt-4 rounded-xl w-fit whitespace-nowrap max-md:px-5 transition-transform hover:scale-105 font-['SBAggroB'] text-[#002748] complementary-bg h-[50px] md:h-[70px]"
      >
        <span className="flex items-center justify-center">{isLoading ? <Spinner /> : "지원금 확인하기"}</span>
      </button>
    </>
  );
}

export default SubmitButton;
