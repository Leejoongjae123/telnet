import React from "react";
import Image from "next/image";

function PromotionDetails() {
  return (
    <>
      <div className="flex flex-row w-full bg-amber-300 h-full">
        <div className="w-1/2 flex flex-col justify-between items-center">
          <div className="w-full h-1/4 flex justify-center items-center">
            <div className="w-[80%] h-[80%] relative z-50 flex justify-center items-center">
              <img
                src="/leftup.png"
                alt=""
                className="absolute left-0 top-[-80%] w-18 h-18 z-0"
              />
              <img
                src="/center.png"
                alt=""
                className="w-[70%] h-[80%] self-center z-20"
              />
              <img
                src="/rightup.png"
                alt=""
                className="absolute right-0 top-[-80%] w-18 h-18 z-0"
              />
            </div>
          </div>
          <div className="w-full h-full flex justify-center items-center">
            <div className="w-[60%] h-[60%] md:w-[80%] md:h-[80%] relative">
              <img
                src="/light.png"
                alt=""
                className="absolute left-[40%] top-[-20%] w-24 h-24"
              />
              <img src="/money.png" alt="" className="w-full h-full" />
              <img
                src="/light.png"
                alt=""
                className="absolute left-[-10%] bottom-[-20%] w-24 h-24"
              />
            </div>
          </div>
        </div>
        <div className="w-1/2 flex flex-col justify-between items-center">
          <img
            loading="lazy"
            src="/thumb.png"
            className="object-contain z-10 self-end mt-0 max-w-full aspect-[1.4] w-[411px] max-md:mt-0"
            alt=""
          />
        </div>
      </div>
      <div className="w-full h-full flex flex-row bg-amber-300 p-4 md:p-8">
        <div className="w-1/2 h-full flex justify-evenly items-center">
          <img src="/sk.png" alt="" className="w-12 h-12 md:w-20 md:h-20 object-contain" />
          <img src="/lg.png" alt="" className="w-10 h-10 md:w-16 md:h-16 object-cover" />
          <img src="/kt.png" alt="" className="w-12 h-12 md:w-24 md:h-24 object-cover" />
        </div>
        <div className="w-1/2 h-full flex justify-center items-center"></div>
      </div>
    </>
  );
}

export default PromotionDetails;
