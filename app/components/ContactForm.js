import React from "react";

function ContactForm() {
  return (
    <form className="w-full flex flex-col gap-10 justify-between items-center">
      <div className="flex gap-10 mt-7 text-lg md:text-3xl font-bold text-black justify-between items-center text-center w-[90%] md:w-full">
        <label htmlFor="name" className="w-1/5 text-medium">
          이름
        </label>
        <input
          id="name"
          type="text"
          className="w-4/5 bg-white rounded-xl border border-black border-solid h-[55px]"
          aria-label="이름"
        />
      </div>
      <div className="flex gap-10 mt-7 text-lg md:text-3xl font-bold text-black justify-between items-center text-center w-[90%] md:w-full">
        <label htmlFor="contact" className="w-1/5">
          연락처
        </label>
        <input
          id="contact"
          type="tel"
          className="w-4/5 bg-white rounded-xl border border-black border-solid h-[55px]"
          aria-label="연락처"
        />
      </div>
    </form>
  );
}

export default ContactForm;