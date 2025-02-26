import React from "react";
import Image from "next/image";
export default function Banner() {
  return (
    <div
      style={{ fontFamily: "PartialSansKR" }}
      className="w-full h-full flex justify-center items-center relative my-5 md:my-8 "
    >
      <div className="px-2 py-1 md:p-4 bg-amber-300 text-[18px] md:text-[26px] ">
        <p>
          비밀 지원금 <span className="text-animate">무료 견적</span>받기
        </p>
        <img
          src="/light.png"
          alt=""
          className="w-16 h-16 absolute right-[45%] top-[-50%] md:top-[-20%]"
        />
      </div>
    </div>
  );
}
