import React from "react";
import {  Mail, Navigation, Phone } from "lucide-react";

function ContactUsSection() {
  return (
    <section className=" flex py-20 px-6 flex-col items-center bg-baige w-full">
      <h1 className="font-bold text-center leading-tight">
        Get in touch today
        <span className="text-pastelGreen font-extrabold text-6xl">.</span>
      </h1>
      <p className="text-center mt-4 ">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque ea hic
        repudiandae
        <br /> sapiente doloribus veniam praesentium, doloremque ab aliquid
      </p>
      <div className=" gap-16  md:gap-24 pt-16  flex text-center items-center justify-center flex-col md:flex-row">
        <div className="flex flex-col items-center justify-center gap-4">
          <Navigation className="h-12 w-12 self-center" />
          <div>
            <h3 className="font-medium">Office</h3>
            <p>
              Choriya Layout, Wani,
              <br /> Yavatmal, India
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <Mail className="h-12 w-12 self-center" />

          <div>
            <h3 className="font-medium">Email</h3>
            <p>bordedheeraj.77@gmail.com</p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <Phone className="h-12 w-12 self-center" />

          <div>
            <h3 className="font-medium">Email</h3>
            <p>+91 9730554790</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactUsSection;