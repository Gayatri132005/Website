import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
function FAQSection() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-around pb-16 py-16  w-full bg-pastelBlue px-6">
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
  );
}

export default FAQSection;
