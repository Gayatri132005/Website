import React from "react";
import { FeatureTitle } from "../features/title";
import { Step1, Step2, Step3, Step4 } from "../features/card";
import { HandCoins, Handshake, MonitorSmartphone } from "lucide-react";
import Image from "next/image";

export const HowWeDoIt = [
  {
    id: "1",
    title: "STEP-1",
    desc: "Collaborate with companies and get knowledge transfer  for technology,  maintainence to select technicians. The magic start once drone is deliverd,",
    card: Step1,
    icon: <Handshake width={80} height={80} />,
    gradient: "from-[#f7f0ff] to-[#a78afe]",
  },
  {
    id: "2",
    title: "STEP-2",
    desc: " We do commisioning while you monitor the complete process, with our app user can rate the experience, then comes the service part.",
    card: Step2,
    icon: <MonitorSmartphone width={80} height={80} />,
    gradient: "from-[#f5fbff] to-[#addeff]",
  },
  {
    id: "3",
    title: "STEP-3",
    desc: "User can track there service reports, and immediately ask for service request via droneBuddy software.",
    card: Step3,
    icon: (
      <Image src="/customer-care-icon.svg" alt="step2" width={80} height={80} />
    ),
    gradient: "from-[#f5fff7] to-[#adf8ff]",
  },
  {
    id: "4",
    title: "STEP-4",
    desc: "We take care of Insurance*, spare parts, software reports, and make sure your customers get the best experience.",
    card: Step4,
    icon: <HandCoins width={80} height={80} />,
    gradient: "from-[#f7fff5] to-[#adffd8]",
  },
];

function Steps(): JSX.Element {
  return (
    <>
      <section className="mx-auto hidden md:block  max-w-6xl px-4">
        {/* <h2 className="text-start self-start font-bold">How do we do it?</h2> */}
        <div className="flex w-full items-start gap-20">
          <div className="w-full py-[50vh] ">
            <ul>
              <h2 className=" font-bold pb-40">How do we do it?</h2>
              {HowWeDoIt.map((item) => (
                <li key={item.title}>
                  <FeatureTitle id={item.title}>{item.desc}</FeatureTitle>
                  {/* <p>{item.desc}</p> */}
                </li>
              ))}
            </ul>
          </div>
          <div className=" sticky  top-0 flex items-center justify-center h-screen w-full">
            <div className=" relative aspect-square  w-[50%] h-[30%]  rounded-2xl">
              {HowWeDoIt.map((item) => (
                <item.card key={item.title} id={item.title} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Steps;
