import React from "react";

function PrivacyPolicy() {
  return (
    <div className="flex gap-3.5 mt-16 max-w-full text-xl text-black w-[294px] max-md:mt-10">
      <input
        type="checkbox"
        id="privacyPolicy"
        className="flex shrink-0 h-6 bg-white rounded border border-black border-solid w-[22px]"
      />
      <label htmlFor="privacyPolicy" className="flex-auto w-[254px]">
        <span className="font-medium text-black">개인정보처리방침</span>{" "}
        <span className="font-medium text-sky-700">[자세히보기]</span>
      </label>
    </div>
  );
}

export default PrivacyPolicy;