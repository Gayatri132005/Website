import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FaPlus, FaMinus } from "react-icons/fa";

function FAQSection() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-around pb-16 py-16 w-full bg-pastelBlue px-6">
      {/* Title Section */}
      <div className="text-center md:text-left mb-8 md:mb-0">
        <h2 className="font-bold text-[1.5rem] sm:text-[2rem] md:text-[2.5rem] lg:text-[3rem] text-black-400">
          See Common Questions and Answers
        </h2>
      </div>

      {/* Accordion Section */}
      <div className="pt-4 md:pt-0 w-full md:w-2/3">
        <Accordion type="multiple">
          <AccordionItem value="item-1">
            <AccordionTrigger className="flex items-center justify-between text-start font-medium py-4 px-6 rounded-md shadow-md hover:bg-gray-100">
              <span>What is Drone Buddy?</span>
            </AccordionTrigger>
            <AccordionContent className="py-4 px-6 bg-white rounded-md shadow-md">
              <p>One-stop shop for all your agricultural drone needs.</p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger className="flex items-center justify-between text-start font-medium py-4 px-6 rounded-md shadow-md hover:bg-gray-100">
              <span>What services do you offer?</span>
            </AccordionTrigger>
            <AccordionContent className="py-4 px-6 bg-white rounded-md shadow-md">
              <p>
                Drone commissioning, software training, repair & maintenance,
                spare parts management, and logistics.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger className="flex items-center justify-between text-start font-medium py-4 px-6 rounded-md shadow-md hover:bg-gray-100">
              <span>In what languages do you offer customer support?</span>
            </AccordionTrigger>
            <AccordionContent className="py-4 px-6 bg-white rounded-md shadow-md">
              <p>
                We offer multilingual customer support to ensure clear
                communication.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger className="flex items-center justify-between text-start font-medium py-4 px-6 rounded-md shadow-md hover:bg-gray-100">
              <span>Do you help set up new agricultural drones?</span>
            </AccordionTrigger>
            <AccordionContent className="py-4 px-6 bg-white rounded-md shadow-md">
              <p>
                Yes, we offer commissioning services to get your drones
                flight-ready.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5">
            <AccordionTrigger className="flex items-center justify-between text-start font-medium py-4 px-6 rounded-md shadow-md hover:bg-gray-100">
              <span>Do you stock spare parts for agricultural drones?</span>
            </AccordionTrigger>
            <AccordionContent className="py-4 px-6 bg-white rounded-md shadow-md">
              <p>
                Yes, we manage spare parts inventory to ensure fast
                replacements.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-6">
            <AccordionTrigger className="flex items-center justify-between text-start font-medium py-4 px-6 rounded-md shadow-md hover:bg-gray-100">
              <span>How quickly can you repair a drone?</span>
            </AccordionTrigger>
            <AccordionContent className="py-4 px-6 bg-white rounded-md shadow-md">
              <p>We aim for sub-2 day service turnaround time for repairs.</p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}

export default FAQSection;
