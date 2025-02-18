import React from "react";
import Image from "next/image";

function PromotionDetails() {
  return (
    <div className="flex flex-col self-stretch w-full bg-amber-300 max-md:max-w-full">
      <div className="flex z-10 flex-col items-start pl-8 w-full max-md:pl-5 max-md:max-w-full relative">
        <div className="w-1/2 h-16 flex justify-between items-center relative px-12">
          <img
            src="/leftup.png"
            alt=""
            className="absolute left-0 top-[-80%] w-24 h-24"
          />
          <img
            src="/center.png"
            alt=""
            className="w-full h-full self-center z-50"
          />
          <img
            src="/rightup.png"
            alt=""
            className=" absolute right-0 top-[-100%] w-24 h-24"
          />
        </div>
        
      </div>
      

      <div className="w-full flex justify-between items-center">
          <div className="w-1/2 flex justify-center items-center h-32 relative">
            <img
              src="/light.png"
              alt=""
              className="absolute left-[40%] top-[-30%] w-24 h-24"
            />
            <img src="/money.png" alt="" className="w-full h-full" />
            <img
              src="/light.png"
              alt=""
              className="absolute left-[-20%] bottom-[-30%] w-24 h-24"
            />
          </div>
          <div className="w-1/2 flex justify-center items-center h-32 relative">
            <img
              loading="lazy"
              src="/thumb.png"
              className="object-contain z-10 self-end mt-0 max-w-full aspect-[1.4] w-[411px] max-md:mt-0"
              alt=""
            />
          </div>
        </div>
        <div className="w-full h-full flex flex-row">
          <div className="w-1/2 h-full flex justify-between items-center">
            <img src="/sk.png" alt="" className="w-full h-full" />
            <img src="/lg.png" alt="" className="w-full h-full" />
            <img src="/kt.png" alt="" className="w-full h-full" />
          </div>
          <div className="w-1/2 h-full flex justify-center items-center"> 
          </div>
        </div>
    </div>
  );
}

export default PromotionDetails;
