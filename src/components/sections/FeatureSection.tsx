import React from "react";
import { features } from "@/data/featutes";
import Card from "@/components/ui/Card";
import Lenis from "@studio-freight/lenis";
import { useRef, useEffect } from "react";
import { useScroll, useTransform } from "framer-motion";
function FeatureSection() {
  const container = useRef(null);
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);

      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  });
  const { scrollYProgress } = useScroll({
    target: container,

    offset: ["start start", "end end"],
  });
  return (
    <section ref={container} className="py-16 w-full h-full bg-pastelGreen ">
      <h2 className="font-bold text-center">Features</h2>
      <p className="text-center font">
        Streamline HR processes and empower your team with our products.
        <br />
        Effortlessly manage employee data, and more.
      </p>
      {features.map((feature, i) => {
        const targetScale = 1 - (features.length - i) * 0.05;
        return (
          <Card
            key={`p_${i}`}
            i={i}
            {...feature}
            progress={scrollYProgress}
            range={[i * 0.25, 1]}
            targetScale={targetScale}
          />
        );
      })}
    </section>
  );
}

export default FeatureSection;
