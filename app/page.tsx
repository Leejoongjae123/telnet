import React from "react";
import Header from "./components/Header";
import PromotionDetails from "./components/PromotionDetails";
import ContactForm from "./components/ContactForm";
import { Divider } from "@heroui/react";
import CarrierSelection from "./components/CarrierSelection";
import PrivacyPolicy from "./components/PrivacyPolicy";
import SubmitButton from "./components/SubmitButton";
import ContactInfo from "./components/ContactInfo";
import Banner from "./components/Banner";
function InternetTVPromotion() {
  return (
    <div className="flex flex-col items-center w-[100vw] md:w-[50vw] bg-white justify-between h-full relative">
      <Header />
      <PromotionDetails />
      <Banner></Banner>
      <Divider className="w-full h-1 bg-stone-300" />
      <ContactForm />
      {/* <CarrierSelection /> */}
      <PrivacyPolicy />
      <SubmitButton />
      
        <ContactInfo />
      
    </div>
  );
}

export default InternetTVPromotion;