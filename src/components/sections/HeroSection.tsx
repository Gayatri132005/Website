"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="flex flex-col items-center w-full bg-baige pt-16">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 0.35 }}
        className="header-content md:w-[70%] justify-center items-center flex flex-col px-6"
      >
        <h1
          className="text-center font-bold text-[1.5rem] sm:text-[2rem] md:text-[2.5rem] lg:text-[3rem] "
        >
          India&apos;s first integrated drone service company.
        </h1>
        <h4 className="text-center font-medium mt-4">
          India&apos;s fastest drone network, we deploy agriculture drones in
          remote areas, offering top-notch drone education, repair services, and
          multilingual customer support with unmatched speed and quality.
        </h4>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 0.35, delay: 0.4 }}
        className="bg-gradient-to-b from-baige from-30% to-pastelViolet flex flex-col w-full"
      >
        <Image
          width={500}
          height={512}
          src={"/newFeatures.png"}
          alt="Drone Features"
          className="mt-6 md:w-[30%] w-[80%] self-center flex"
        />
      </motion.div>
    </section>
  );
}

export default HeroSection;
