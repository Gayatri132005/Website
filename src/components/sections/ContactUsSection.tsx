"use client";

import { Mail, Navigation, Phone } from "lucide-react";
import "../../styles/ContactUsSection.css";

export default function ContactSection() {
  return (
    
    <section className="flex flex-col justify-between  w-full max-w-[1200px] mx-auto py-20 px-6 ">
     <h1 className="font-bold text-3xl md:text-4xl text-green-600 justify-center items-center text-center">
            Get in touch today
          </h1>
      {/* Right Section - Form */}
   
      <div id="ff-compose"></div>
      <script async defer src="https://formfacade.com/include/100008665769197071428/form/1FAIpQLSdpDjN5SudOMl7jEDnG54EAVEoZiBelnPecw26mN8WDFXwE8w/classic.js?div=ff-compose"></script>
    </section>
  );
}
