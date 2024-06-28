"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";
import ProcessSection from "@/components/sections/ProcessSection";
import FAQSection from "@/components/sections/FAQSection";
import HeroSection from "@/components/sections/HeroSection";
import ContactUsSection from "@/components/sections/ContactUsSection";
import WhyDB from "@/components/sections/WhyDB";
import Steps, { HowWeDoIt } from "@/components/sections/Steps";
import Advantages from "@/components/sections/Advantages";
import useMediaQuery from "@/utils/useMediaQuery";

export default function Home() {
  const md = useMediaQuery("(min-width: 800px)");
  return (
    <main className=" min-h-screen ">
      <Header />
      <HeroSection />
      <ProcessSection />
      <WhyDB />
      {md ? (
        <>
          <Steps />
        </>
      ) : (
        <section className="flex px-4 flex-col py-16">
          <h2 className=" font-bold ">How do we do it?</h2>
          {HowWeDoIt.map((item) => (
            <div
              className="flex flex-col items-center justify-center py-6 gap-6"
              key={item.title}
            >
              {item.icon}
              <h3 className="font-bold">{item.title}</h3>
              <p className="text-center">{item.desc}</p>
            </div>
          ))}
        </section>
      )}

      <Advantages />
      <FAQSection />
      <ContactUsSection />
      <Footer />
    </main>
  );
}
