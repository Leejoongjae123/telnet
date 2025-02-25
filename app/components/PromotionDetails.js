import React from "react";
import Image from "next/image";

const rainbowStyle = `
  @keyframes rainbow {
    0% { color: #ff0000; }
    17% { color: #ff00ff; }
    33% { color: #0000ff; }
    50% { color: #00ffff; }
    67% { color: #00ff00; }
    83% { color: #ffff00; }
    100% { color: #ff0000; }
  }

  .rainbow-text {
    animation: rainbow 4s linear infinite;
  }
`;

function PromotionDetails() {
  return (
    <>
      <style>{rainbowStyle}</style>
      <div className="flex flex-row w-full bg-amber-300 h-full">
        <div className="w-3/5 flex flex-col justify-between items-center">
          <div className="w-full h-1/4 flex justify-center items-center">
            <div className="w-[80%] h-[80%] relative z-50 flex justify-center items-center">
              {/* <img
                src="/center.png"
                alt=""
                className="w-[70%] h-[80%] self-center z-20"
              /> */}
              <div
                style={{
                  textShadow: `-1px -1px 0 black,  
                   1px -1px 0 black,
                   -1px 1px 0 black,
                   1px 1px 0 black`,
                  fontFamily: "PartialSansKR",
                  fontWeight: "300",
                }}
                className=" text-[#FFF600] md:text-[35px] text-xl relative"
              >
                <img
                  src="/leftup.png"
                  alt=""
                  className="absolute left-[-20%] top-[-110%] w-12 h-12 md:w-[88px] md:h-[42px] -z-10"
                />
                <p className="text-xl md:text-[35px] relative z-20">
                  인터넷+TV
                </p>
                <img
                  src="/rightup.png"
                  alt=""
                  className="absolute right-[-15%] top-[-120%] w-12 h-12 md:w-18 md:h-18 -z-10"
                />
              </div>
            </div>
          </div>
          <div className="w-full h-full flex flex-col justify-center items-center text-center">
            <div
              style={{
                textShadow: `-1px -1px 0 black,  
                          1px -1px 0 black,
                          -1px 1px 0 black,
                          1px 1px 0 black,
                          5px 5px 0 black`,
                fontFamily: "PartialSansKR",
                fontWeight: "700",
              }}
              className="w-full h-[60%] md:w-full md:h-full flex flex-col justify-center items-center relative"
            >
              <img
                src="/light.png"
                alt=""
                className="w-16 h-16 absolute left-[30%] top-[-30%] md:top-[-10%] z-10"
              />
              <div className="text-xl md:text-[45px] text-white font-bold mb-2 md:mb-12">
                현금{" "}
                <span className="text-3xl md:text-[65px] text-[#1E96FC] rainbow-text animate-rainbow">
                  48만원
                </span>
              </div>
              <div className="text-xl md:text-[45px] text-white font-bold">
                +
                <span className="text-3xl md:text-[65px] rainbow-text animate-rainbow">
                  비밀지원금
                </span>
              </div>
              <img
                src="/light.png"
                alt=""
                className="w-16 h-16 absolute left-[10%] bottom-[20%] md:bottom-[20%] z-10"
              />
            </div>
          </div>
        </div>
        <div className="w-2/5 flex flex-col justify-center items-center">
          <img
            loading="lazy"
            src="/thumb.png"
            className="object-contain z-10 self-end mt-0 max-w-full aspect-[1.4] w-[411px] max-md:mt-0"
            alt=""
          />
        </div>
      </div>
      <div className="w-full h-full flex flex-row bg-amber-300 p-4 md:p-8">
        <div className="w-3/5 h-full flex justify-evenly items-center">
          <img
            src="/sk.png"
            alt=""
            className="w-12 h-12 md:w-20 md:h-20 object-contain"
          />
          <img
            src="/lg.png"
            alt=""
            className="w-10 h-10 md:w-16 md:h-16 object-cover"
          />
          <img
            src="/kt.png"
            alt=""
            className="w-12 h-12 md:w-24 md:h-24 object-cover"
          />
        </div>
        <div className="w-1/2 h-full flex justify-center items-center"></div>
      </div>
    </>
  );
}

export default PromotionDetails;
