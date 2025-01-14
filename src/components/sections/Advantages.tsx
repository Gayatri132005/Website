import React from "react";
import AdvantageCard from "./AdvantageCard";
import { motion } from "framer-motion";

const Advantages: React.FC = () => {
  return (
    <section
      id="advantages"
      className="flex flex-col py-8 sm:py-12 md:py-16 lg:py-24 xl:py-32 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 w-full bg-gradient-to-b bg-blue-50"
    >
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center font-bold text-[1.5rem] sm:text-[2rem] md:text-[2.5rem] lg:text-[3rem]  text-gray-800 mb-2 sm:mb-4 md:mb-6"
      >
       Advantages
      </motion.h2>

      {/* Subheading */}
      <motion.p
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-center text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-gray-600 mt-2 sm:mt-3 md:mt-4 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-3xl mx-auto"
      >
        Experience the future of drone services with our cutting-edge solutions and unparalleled expertise.
      </motion.p>

      {/* Advantage Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mt-8 sm:mt-12 md:mt-16">
        <AdvantageCard
          icon="innovation"
          title="Innovative Solutions"
          description="Focus on product innovation while we handle the operational complexities, allowing you to stay ahead in the drone industry."
          delay={0.3}
          bgColor="bg-blue-100"
          hoverColor="hover:bg-blue-200"
          iconColor="text-blue-600"
          centerContent={true}
        />
        <AdvantageCard
          icon="network"
          title="Pan-India Network"
          description="Launch your services across India from day one, with our extensive network ensuring smooth operations and support."
          delay={0.5}
          bgColor="bg-green-100"
          hoverColor="hover:bg-green-200"
          iconColor="text-green-600"
          centerContent={true}
        />
        <AdvantageCard
          icon="software"
          title="Advanced Software"
          description="Leverage our state-of-the-art software for enhanced accountability, flexibility, and ease of business operations."
          delay={0.7}
          bgColor="bg-purple-100"
          hoverColor="hover:bg-purple-200"
          iconColor="text-purple-600"
          centerContent={true}
        />
      </div>

      {/* Call-to-Action Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="mt-8 sm:mt-12 md:mt-16 text-center"
      >
        <a
          href="#contact"
          className="bg-green-600 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full text-sm sm:text-base md:text-lg font-semibold hover:bg-green-700 transition-colors duration-300"
        >
          Get Started Today
        </a>
      </motion.div>
    </section>
  );
};

export default Advantages;
