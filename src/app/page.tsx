"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React, { useEffect, useState } from "react";
import ProcessSection from "@/components/sections/ProcessSection";
import FAQSection from "@/components/sections/FAQSection";
import HeroSection from "@/components/sections/HeroSection";
import ContactUsSection from "@/components/sections/ContactUsSection";
import WhyDB from "@/components/sections/WhyDB";
import Steps, { HowWeDoIt } from "@/components/sections/Steps";
import Advantages from "@/components/sections/Advantages";
import useMediaQuery from "@/utils/useMediaQuery";
import DronebuddyCenters from "@/components/sections/DronebuddyCenters";
import GalleryImages from "@/components/sections/GalleryImages";

export default function Home() {
  const [isClient, setIsClient] = useState(false);

  const md = useMediaQuery("(min-width: 800px)");
  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // or a loading spinner, etc.
  }
  return (
    <main className="min-h-screen">
      <Header />
      <section id="hero">
        <HeroSection />
      </section>
      <section id="process">
        <ProcessSection />
      </section>
      <section id="why-db">
        <WhyDB />
      </section>
      <section id="steps">
        <Steps />
        {!md && (
          <section className="flex md:hidden px-6 flex-col py-16">
            <h2 className="font-bold">How do we do it?</h2>
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
      </section>
      <section id="advantages">
        <Advantages />
      </section>
      <section id="dronebuddy-centers">
        <DronebuddyCenters />
      </section>
      <section id="gallery">
        <GalleryImages />
      </section>
      <section id="faq">
        <FAQSection />
      </section>
      <section id="contact">
        <ContactUsSection />
      </section>
      <Footer />
    </main>
  );
}
