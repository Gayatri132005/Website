import { CalendarCheck, Languages, ShieldCheck, Users } from "lucide-react";
import React from "react";
import ObjectiveCard from "../ui/ObjectiveCard";

function WhyDB(): JSX.Element {
  return (
    <section className="md:pt-56 pt-56 flex flex-col w-full min-h-screen p-10 md:px-60 md:pb-32 gap-10 bg-baige  ">
      <h2 className=" font-bold ">Our Objectives</h2>
      <div className=" flex flex-col md:flex-row items-start justify-between gap-10 md:gap-0 ">
        <ObjectiveCard
          index={1}
          icon={
            <Users
              className="rounded-full bg-pastelGreen p-4"
              color="black"
              width={65}
              height={65}
            />
          }
          title="Objective 01"
          desc="With Drone Buddy you don't have to manage large teams for training, commissioning and service, so you can focus on innovation."
        />
        <ObjectiveCard
          index={2}
          title={"Objective 02"}
          icon={
            <CalendarCheck
              className="rounded-full bg-pastelViolet p-4"
              color="black"
              width={65}
              height={65}
            />
          }
          desc={
            "Give your clients fastest service time, saving huge on economic loss due to accidents."
          }
        />
      </div>
      <div className="flex items-start flex-col md:flex-row justify-between gap-8 md:gap-0">
        <ObjectiveCard
          index={3}
          icon={
            <Languages
              className="rounded-full bg-pastelBlue p-4"
              color="black"
              width={65}
              height={65}
            />
          }
          title={"Objective 03"}
          desc={
            "Become pan India ready from Day 1, multi lingual customer service, pan India service centers, spare parts storage and logistics."
          }
        />
        <ObjectiveCard
          index={4}
          icon={
            <ShieldCheck
              className="rounded-full bg-baige p-4"
              color="black"
              width={65}
              height={65}
            />
          }
          title={"Objective 04"}
          desc={
            "From Insurance , spare parts, configuring drones, managing complete drone information for clients. We do it all."
          }
        />
      </div>
    </section>
  );
}

export default WhyDB;
