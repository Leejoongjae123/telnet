import React from "react";
import Image from "next/image";
function Header() {
  return (
    <div className="flex flex-col self-stretch md:pt-8 w-full bg-amber-300 max-md:max-w-full">
      <div className="flex z-10 flex-col items-start w-full max-md:max-w-full">
        <div className="flex flex-col w-full justify-center items-center gap-y-2 md:gap-y-6">
          <div
            style={{ fontFamily: "PartialSansKR" }}
            className="text-center  text-5xl text-black border-solid h-12 md:h-16 w-full md:w-[90%] relative"
          >
            <p>
              <span
                style={{
                  textShadow: `-1px -1px 0 #0062B6,  
                   1px -1px 0 #0062B6,
                   -1px 1px 0 #0062B6,
                   1px 1px 0 #0062B6`,
                }}
                className="text-[#1E96FC] text-[26px] md:text-[55px]"
              >
                13년차
              </span>
              <span
                style={{
                  textShadow: `-1px -1px 0 #0062B6,  
                   1px -1px 0 #0062B6,
                   -1px 1px 0 #0062B6,
                   1px 1px 0 #0062B6`,
                }}
                className="text-[#FFF600] text-[14px] md:text-[25px]"
              >
                SINCE 2013
              </span>
              <span
                style={{
                  textShadow: `-1px -1px 0 #0062B6,  
                   1px -1px 0 #0062B6,
                   -1px 1px 0 #0062B6,
                   1px 1px 0 #0062B6`,
                }}
                className="text-[#FFFFFF] text-[26px] md:text-[55px] "
              >
                공식 대리점
              </span>
            </p>
          </div>
          <div style={{ fontFamily: "GongGothicMedium" }} className="pl-[3%] text-small md:text-3xl text-black border-sky-700 border-solid h-12 md:h-24 w-[90%] text-center">
            13년의 노하우로 최고의 혜택을 드립니다.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
