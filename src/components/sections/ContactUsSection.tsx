"use client";

import { Mail, Navigation, Phone } from "lucide-react";
import "../../styles/ContactUsSection.css";

export default function ContactSection() {
  return (
    <section className="flex flex-col justify-between w-full max-w-[1200px] mx-auto py-20 px-6">
      {/* Title with responsive font size */}
      <h1 className="font-bold text-[1.5rem] sm:text-[2rem] md:text-[2.5rem] lg:text-[3rem]  text-green-600 text-center">
        Get in touch today
      </h1>

      {/* Right Section - Form */}
      <div id="ff-compose"></div>
      <script
        async
        defer
        src="https://formfacade.com/include/100008665769197071428/form/1FAIpQLSdpDjN5SudOMl7jEDnG54EAVEoZiBelnPecw26mN8WDFXwE8w/classic.js?div=ff-compose"
      ></script>
    </section>
  );
}
