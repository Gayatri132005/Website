"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";
import ProcessSection from "@/components/sections/ProcessSection";
import FAQSection from "@/components/sections/FAQSection";
import HeroSection from "@/components/sections/HeroSection";
import ContactUsSection from "@/components/sections/ContactUsSection";
import WhyDB from "@/components/sections/WhyDB";
import Steps from "@/components/sections/Steps";

export default function Home() {
  return (
    <main className=" min-h-screen ">
      <Header />
      <HeroSection />
      <ProcessSection />
      <WhyDB />
      <Steps />
      <FAQSection />
      <ContactUsSection />
      <Footer />
    </main>
  );
}
