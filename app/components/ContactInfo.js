import React from "react";

function ContactInfo() {
  return (
    <div className="w-screen flex flex-col items-center justify-center py-1 mt-12 text-lg md:text-3xl text-black bg-amber-300 text-center h-[50px]">
      <a 
        href="tel:1522-3074" 
        className="contact-number text-[#002748] animate-pulse font-['PartialSansKR']"
      >
        바로상담 1522-3074 (전화문의)
      </a>
    </div>
  );
}

export default ContactInfo;