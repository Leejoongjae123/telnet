import React from "react";
import Image from "next/image";
function Header() {
  return (
    <div className="flex flex-col self-stretch pt-8 w-full bg-amber-300 max-md:max-w-full">
      <div className="flex z-10 flex-col items-start w-full max-md:max-w-full">
        <div className="flex flex-col w-full justify-center items-center gap-y-6">
          <div className="text-5xl text-black border-sky-700 border-solid h-12 md:h-16 w-[90%] relative">
            <Image src="/header.png" alt="logo" fill />
          </div>
          <div className="text-medium md:text-3xl text-black border-sky-700 border-solid h-12 md:h-24 w-[90%] relative">
          13년의 노하우로 최고의 혜택을 드립니다.
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Header;