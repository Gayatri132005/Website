import { Users } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";

function ObjectiveCard({
  index,
  icon,
  title,
  desc,
}: {
  index: number;
  icon: React.ReactNode;
  title: string;
  desc: string;
}): JSX.Element {
  return (
    <motion.div
      initial={{
        opacity: 0,
        // if odd index card,slide from right instead of left
        x: index % 2 === 0 ? 50 : -50,
      }}
      whileInView={{
        opacity: 1,
        x: 0, // Slide in to its original position
        transition: {
          duration: 0.75, // Animation duration
        },
      }}
      viewport={{ once: true }}
      className="  rounded-xl md:w-[40%]  flex flex-col gap-2  "
    >
      {icon}
      <h3 className="font-bold">{title}</h3>
      <p>{desc}</p>
    </motion.div>
  );
}

export default ObjectiveCard;
