"use client";
import React, { useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@heroui/react";
import { ToastContainer, toast,Bounce } from "react-toastify";
import useNameStore from "./nameStore";
import usePhoneStore from "./phoneStore";
function ContactForm() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [selectedCarrier, setSelectedCarrier] = useState("");
  const { name, setName } = useNameStore();
  const { phone, setPhone } = usePhoneStore();
  const handleCarrierSelect = (carrier) => {
    setSelectedCarrier(carrier);
  };

  return (
    <div className="w-full flex flex-col gap-5 justify-between items-center">
      <ToastContainer
        position="top-center"
        autoClose={2000}
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
      <div style={{ fontFamily: 'GongGothicMedium' }} className="flex gap-2 md:gap-10 mt-1 md:mt-10 text-xl  md:text-3xl font-bold text-black justify-between items-center text-center w-[90%] md:w-full h-[55px]">
        <label htmlFor="name" className="w-1/3 ">
          이름
        </label>
        <input
          id="name"
          type="text"
          className="w-4/5 bg-white rounded-xl border border-black border-solid h-10 md:h-[55px]"
          aria-label="이름"
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div style={{ fontFamily: 'GongGothicMedium' }} className="flex gap-2 md:gap-10 mt-1 md:mt-7 text-xl  md:text-3xl font-bold text-black justify-between items-center text-center w-[90%] md:w-full h-[55px]">
        <label htmlFor="contact" className="w-1/3">
          연락처
        </label>
        <input
          id="contact"
          type="tel"
          className="w-4/5 bg-white rounded-xl border border-black border-solid h-10 md:h-[55px]"
          aria-label="연락처"
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>
      {/* <div className="flex gap-10 mt-7 text-lg md:text-3xl font-bold text-black justify-between items-center text-center w-[90%] md:w-full h-[55px]">
        <label htmlFor="contact" className="w-1/5">
          통신사
        </label>
        <div className="w-4/5 bg-white rounded-xl h-[55px] flex gap-10">
          <div 
            onClick={() => handleCarrierSelect('SKT')}
            className={`w-1/3 border rounded-lg border-solid border-black flex items-center justify-center cursor-pointer
              ${selectedCarrier === 'SKT' ? 'bg-black text-white' : ''}`}
          >
            SKT
          </div>
          <div 
            onClick={() => handleCarrierSelect('KT')}
            className={`w-1/3 border rounded-lg border-solid border-black flex items-center justify-center cursor-pointer
              ${selectedCarrier === 'KT' ? 'bg-black text-white' : ''}`}
          >
            KT
          </div>
          <div 
            onClick={() => handleCarrierSelect('LG')}
            className={`w-1/3 border rounded-lg border-solid border-black flex items-center justify-center cursor-pointer
              ${selectedCarrier === 'LG' ? 'bg-black text-white' : ''}`}
          >
            LG
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default ContactForm;
