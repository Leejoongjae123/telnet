"use client";
import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@heroui/react";
import { useState, useEffect } from "react";
import { Checkbox } from "@heroui/react";
import useAgreeStore from "./agreeStore";
function PrivacyPolicy() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const { isChecked, setIsChecked } = useAgreeStore();

  return (
    <div className="flex gap-2 mt-16 max-w-full text-xl w-full max-md:mt-10 justify-center items-center">
      <div>
        <Checkbox
          id="privacyPolicy"
          isSelected={isChecked}
          onChange={() => {
            setIsChecked(!isChecked);
          }}
        />
        <label htmlFor="privacyPolicy" className="flex-auto w-[254px]">
          <span className="font-medium text-black">개인정보처리방침</span>{" "}
          <span
            className="font-medium hover:cursor-pointer text-sky-700"
            onClick={onOpen}
          >
            [자세히보기]
          </span>
        </label>
      </div>

      <Modal size="5xl" isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 text-3xl">
                개인정보처리방침
              </ModalHeader>
              <ModalBody className="max-h-[70vh] overflow-y-auto scrollbar-hide">
                <p>
                  <strong>
                    테라넷(이하 '테라넷'라 한다)는 개인정보 보호법 제30조에 따라
                    정보 주체의 개인정보를 보호하고 이와 관련한 고충을 신속하고
                    원활하게 처리할 수 있도록 하기 위하여 다음과 같이 개인정보
                    처리지침을 수립, 공개합니다.
                  </strong>
                </p>

                <p>
                  <strong>제1조 (개인정보의 처리목적)</strong>
                </p>
                <p>
                  회사는 다음의 목적을 위하여 개인정보를 처리합니다. 처리하고
                  있는 개인정보는 다음의 목적 이외의 용도로는 이용되지 않으며,
                  <br />
                  이용 목적이 변경되는 경우에는 개인정보보호법 제18조에 따라
                  별도의 동의를 받는 등 필요한 조치를 이행할 예정입니다.
                </p>
                <p>
                  1. 홈페이지 회원 가입 및 관리
                  <br />
                  회원 가입 의사 확인, 회원제 서비스 제공에 따른 본인 식별․인증,
                  회원자격 유지․관리, 제한적 본인확인제 시행에 따른
                  <br />
                  본인확인, 서비스 부정 이용 방지, 만 14세 미만 아동의
                  개인정보처리 시 법정대리인의 동의 여부 확인, 각종 고지․통지,
                  <br />
                  고충 처리 등을 목적으로 개인정보를 처리합니다.
                </p>
                <p>
                  2. 재화 또는 서비스 제공
                  <br />
                  물품 배송, 서비스 제공, 계약서 및 청구서 발송, 콘텐츠 제공,
                  맞춤서비스 제공, 본인인증, 연령인증, 요금 결제 및 정산,
                  <br />
                  채권추심 등을 목적으로 개인정보를 처리합니다.
                </p>
                <p>
                  3. 고충 처리
                  <br />
                  민원인의 신원 확인, 민원사항 확인, 사실조사를 위한 연락․통지,
                  처리 결과 통보 등의 목적으로 개인정보를 처리합니다.
                </p>

                <p>
                  <strong>제2조 (개인정보의 처리 및 보유기간)</strong>
                </p>
                <p>
                  ① 회사는 법령에 따른 개인정보 보유, 이용 기간 또는
                  정보주체로부터 개인정보를 수집 시에 동의 받은 개인정보 보유,
                  이용 기간
                  <br />
                  내에서 개인정보를 처리, 보유합니다.
                  <br />② 각각의 개인정보 처리 및 보유 기간은 다음과 같습니다.
                </p>
                <p>
                  1. 홈페이지 회원 가입 및 관리 : 사업자/단체 홈페이지 탈퇴
                  시까지
                  <br />
                  다만, 다음의 사유에 해당하는 경우에는 해당 사유 종료 시까지
                  <br />
                  1) 관계 법령 위반에 따른 수사, 조사 등이 진행 중인 경우에는
                  해당 수사, 조사 종료 시까지
                  <br />
                  2) 홈페이지 이용에 따른 채권 및 채무관계 잔존 시에는 해당
                  채권, 채무 관계 정산 시까지
                </p>
                <p>
                  2. 재화 또는 서비스 제공 : 재화․서비스 공급완료 및
                  요금결제․정산 완료 시까지
                  <br />
                  다만, 다음의 사유에 해당하는 경우에는 해당 기간 종료 시까지
                  <br />
                  1) "전자상거래 등에서의 소비자 보호에 관한 법률"에 따른
                  표시․광고, 계약내용 및 이행 등 거래에 관한 기록
                  <br />
                  - 표시․광고에 관한 기록 : 6월
                  <br />
                  - 계약 또는 청약 철회, 대금결제, 재화 등의 공급기록 : 5년
                  <br />
                  - 소비자 불만 또는 분쟁 처리에 관한 기록 : 3년
                  <br />
                  2) "통신비밀보호법" 제41조에 따른 통신사실확인자료 보관
                  <br />
                  - 가입자 전기통신일시, 개시․종료 시간, 상대방 가입자 번호,
                  사용도수, 발신기지국 위치추적자료 : 1년
                  <br />- 컴퓨터 통신, 인터넷 로그 기록자료, 접속지 추적자료 :
                  3개월
                </p>

                <p>
                  <strong>제3조 (개인정보의 제3자 제공)</strong>
                </p>
                <p>
                  ① 회사는 정보주체의 개인정보를 제1조(개인정보의 처리목적)에서
                  명시한 범위 내에서만 처리하며,
                  <br />
                  정보주체의 동의, 법률의 특별한 규정 등 개인정보 보호법
                  제17조에 해당하는 경우에만 개인정보를 제3자에게 제공합니다.
                  <br />
                  ② 회사는 다음과 같이 개인정보를 제3자에게 제공하고 있습니다.
                  <br />
                  - 개인정보를 제공받는 자 : &lt;예) (주) OOO 카드&gt;
                  <br />
                  - 제공받는 자의 개인정보 이용목적 : &lt;예) 이벤트 공동개최 등
                  업무제휴 및 제휴 신용카드 발급&gt;
                  <br />
                  - 제공하는 개인정보 항목 : &lt;예) 성명, 주소, 전화번호,
                  이메일주소, 카드결제계좌정보&gt;
                  <br />- 제공받는 자의 보유, 이용기간 : &lt;예) 신용카드
                  발급계약에 따른 거래기간동안&gt;
                </p>

                <p>
                  <strong>
                    제4조(이용자 및 법정대리인의 권리와 그 행사 방법)
                  </strong>
                </p>
                <p>
                  ① 정보주체는 회사에 대해 언제든지 다음 각 호의 개인정보 보호
                  관련 권리를 행사할 수 있습니다.
                  <br />
                  1. 개인정보 열람 요구
                  <br />
                  2. 오류 등이 있을 경우 정정 요구
                  <br />
                  3. 삭제 요구
                  <br />
                  4. 처리정지 요구
                  <br />
                  ② 제1항에 따른 권리 행사는 회사에 대해 서면, 전화, 전자우편,
                  모사전송(FAX) 등을 통하여 하실 수 있으며
                  <br />
                  회사는 이에 대해 지체없이 조치하겠습니다.
                  <br />
                  ③ 정보주체가 개인정보의 오류 등에 대한 정정 또는 삭제를 요구한
                  경우에는
                  <br />
                  회사는 정정 또는 삭제를 완료할 때까지 당해 개인정보를
                  이용하거나 제공하지 않습니다.
                  <br />
                  ④ 제1항에 따른 권리 행사는 정보주체의 법정대리인이나 위임을
                  받은 자 등 대리인을 통하여 하실 수 있습니다.
                  <br />
                  이 경우 개인정보 보호법 시행규칙 별지 제11호 서식에 따른
                  위임장을 제출하셔야 합니다.
                  <br />
                  ⑤ 정보주체는 개인정보 보호법 등 관계 법령을 위반하여 회사가
                  처리하고 있는 정보주체 본인이나
                  <br />
                  타인의 개인정보 및 사생활을 침해하여서는 아니 됩니다.
                </p>

                <p>
                  <strong>제5조(처리하는 개인정보 항목)</strong>
                </p>
                <p>회사는 다음의 개인정보 항목을 처리하고 있습니다.</p>
                <p>
                  1. 홈페이지 회원 가입 및 관리
                  <br />
                  필수항목 : &lt;예) 성명, 생년월일, 아이디, 비밀번호, 주소,
                  전화번호, 성별, 이메일주소, 아이핀번호&gt;
                </p>
                <p>
                  2. 재화 또는 서비스 제공
                  <br />
                  필수항목 : &lt;예) 성명, 생년월일, 아이디, 비밀번호, 주소,
                  전화번호, 이메일주소, 아이핀번호, 신용카드번호,
                  <br />
                  은행계좌정보 등 결제정보&gt;
                </p>
              </ModalBody>
              <ModalFooter>
                <Button
                  color="primary"
                  onPress={() => {
                    setIsChecked(true);
                    onClose();
                  }}
                >
                  동의하기
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}

export default PrivacyPolicy;
