"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  LocateIcon,
  Mail,
  MailCheckIcon,
  Navigation,
  Phone,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Header />
      {/* Hero section */}
      <section className=" flex flex-col items-center w-full bg-baige pt-16 ">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isVisible ? 1 : 0 }}
          transition={{ duration: 0.35 }}
          className="header-content md:w-[60%] justify-center items-center flex flex-col px-6 "
        >
          <h1 className="text-center font-semibold mb-3  leading-tight">
            India&apos;s first integrated drone service company .
          </h1>
          <h4 className="text-center font-medium mt-4">
            India&apos;s fastest drone network, we deploy agriculture drones in
            remote areas, offering top-notch drone education, repair services,
            and multilingual customer support with unmatched speed and quality.
          </h4>
          <Button
            className=" mt-6 rounded-full w-full md:w-[30%] p-7 text-custom-p-sm md:text-custom-p "
            variant={"outline"}
          >
            Learn More <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isVisible ? 1 : 0 }}
          transition={{ duration: 0.35, delay: 0.4 }}
          className="bg-gradient-to-b from-baige from-30% to-pastelViolet flex flex-col w-full "
        >
          <Image
            width={500} // Use the width and height of your image
            height={512}
            src={"/newFeatures.png"}
            alt={""}
            className="mt-6 md:w-[30%] w-[80%] self-center flex"
          ></Image>
        </motion.div>
      </section>

      {/* FAQ's Section */}
      <section className="flex flex-col md:flex-row items-center justify-around py-16  w-full bg-pastelBlue px-6">
        <div>
          <h2 className="font-bold">See Common Question</h2>
          <h2 className="font-bold">and Answer</h2>
        </div>
        <div className="pt-4 md:pt-0">
          <Accordion className="" type="multiple">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-start">
                What is Drone Buddy
              </AccordionTrigger>
              <AccordionContent>
                <p>One-stop shop for all your agricultural drone needs.</p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-start">
                What services do you offer?
              </AccordionTrigger>
              <AccordionContent>
                <p>
                  Drone commissioning, software training, repair & maintenance,
                  spare parts management, and logistics.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-start">
                In what languages do you offer customer support?
              </AccordionTrigger>
              <AccordionContent>
                <p>
                  We offer multilingual customer support to ensure clear
                  communication
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-start">
                Do you help set up new agricultural drones?
              </AccordionTrigger>
              <AccordionContent>
                <p>
                  Yes, we offer commissioning services to get your drones
                  flight-ready.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger className="text-start">
                Do you stock spare parts for agricultural drones?
              </AccordionTrigger>
              <AccordionContent>
                <p>
                  Yes, we manage spare parts inventory to ensure fast
                  replacements.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6">
              <AccordionTrigger className="text-start">
                How quickly can you repair a drone?
              </AccordionTrigger>
              <AccordionContent>
                <p>We aim for sub-2 day service turnaround time for repairs.</p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Contact Us section */}
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
      <Footer />
    </main>
  );
}
