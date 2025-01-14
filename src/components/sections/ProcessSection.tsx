import React, { useRef, useEffect } from "react";
import { features } from "@/data/featutes";
import InfoCard from "@/components/ui/InfoCard";
import Lenis from "@studio-freight/lenis";
import { useScroll } from "framer-motion";

function ProcessSection() {
  const container = useRef(null);

  useEffect(() => {
    const lenis = new Lenis();
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <section ref={container} className="pt-16 w-full h-full bg-pastelGreen">
      {/* Section Title */}
      <h2 className="font-bold text-center text-[1.5rem] sm:text-[2rem] md:text-[2.5rem] lg:text-[3rem]  text-gray-900">
        Process
      </h2>
      {/* Section Description */}
      <p className="text-center text-base sm:text-lg lg:text-xl xl:text-2xl font-medium text-gray-700 mt-4">
        Streamline processes and empower your team with our products.
      </p>

      {/* Features List */}
      <div className="mt-8 space-y-6">
        {features.map((feature, i) => {
          const targetScale = 1 - (features.length - i) * 0.05;
          return (
            <InfoCard
              key={`p_${i}`}
              i={i}
              {...feature}
              progress={scrollYProgress}
              range={[i * 0.25, 1]}
              targetScale={targetScale}
            />
          );
        })}
      </div>
    </section>
  );
}

export default ProcessSection;
