"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";
import ProcessSection from "@/components/sections/ProcessSection";
import FAQSection from "@/components/sections/FAQSection";
import HeroSection from "@/components/sections/HeroSection";
import ContactUsSection from "@/components/sections/ContactUsSection";
import WhyDB from "@/components/sections/WhyDB";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Header />
      <HeroSection />
      <ProcessSection />
      {/* Why us section */}
      <WhyDB />
      <FAQSection />
      <ContactUsSection />
      <Footer />
    </main>
  );
}
