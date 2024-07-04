import { Brain, Computer, Handshake, Users } from "lucide-react";
import React from "react";
import AdvatageCard from "../ui/AdvatageCard";

function Advantages(): JSX.Element {
  return (
    <section
      id="#advantages"
      className="flex flex-col md:py-32 py-16 md:px-60 w-full bg-pastelGreen"
    >
      <h2 className="font-bold text-center">Advantages</h2>
      <p className="text-center">
        Let us take care of the easy part, while you do the innovations.
      </p>

      <div className="flex flex-col md:flex-row item-center justify-between  pt-20">
        <AdvatageCard delay={0.3} bg="bg-[#BBE9FF]">
          <Brain width={60} height={60} />
          <p>
            Clients can focus on innovation of the product and better technology
            while we take care of easy part
          </p>
        </AdvatageCard>
        <AdvatageCard delay={0.6} bg="bg-[#FFFED3]">
          <Users width={60} height={60} />
          <p>
            Clients can focus on innovation of the product and better technology
            while we take care of easy part
          </p>
        </AdvatageCard>
        <AdvatageCard delay={0.9} bg="bg-[#FFE9D0]">
          <Computer width={60} height={60} />
          <p>
            Clients can focus on innovation of the product and better technology
            while we take care of easy part
          </p>
        </AdvatageCard>
      </div>
    </section>
  );
}

export default Advantages;
