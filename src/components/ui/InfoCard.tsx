import Image from "next/image";
import { useTransform, useScroll, motion } from "framer-motion";
import { useRef } from "react";
import useMediaQuery from "@/utils/useMediaQuery";

const InfoCard = ({
  i,
  title,
  description,
  src,
  link,
  color,
  progress,
  range,
  targetScale,
}: {
  i: number;
  title: string;
  description: string;
  src: string;
  link: string;
  color: string;
  progress: any;
  range: any;
  targetScale: any;
}) => {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,

    offset: ["start end", "start start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  const md = useMediaQuery("(min-width: 800px");

  return (
    <div className="flex h-[60vh] items-center justify-center sticky top-0 ">
      <motion.div
        className={`flex flex-col  h-[300px] w-[600px]  rounded-lg p-16 shadow-lg relative origin-top overflow-hidden`}
        style={{
          background: color,
          scale,
          top: `${
            md ? `calc(-5vh + ${i * 90}px)` : `calc(-5vh + ${i * 100}px)`
          }`,
        }}
      >
        <h3 className="text-center">{title}</h3>
        <div className="flex md:flex-row flex-col h-full ">
          <div className="w-full relative top-5">
            <p className=" text-center leading-loose">
              {description}
              {/* <span className="inline-flex items-center gap-2">
                <a
                  href={link}
                  target="_blank"
                  className="text-base font-normal underline hover:text-blue-500"
                >
                  See more
                </a>
                <svg
                  width="22"
                  height="12"
                  viewBox="0 0 22 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="fill-current"
                >
                  <path d="M21.5303 6.53033C21.8232 6.23744 21.8232 5.76256 21.5303 5.46967L16.7574 0.696699C16.4645 0.403806 15.9896 0.403806 15.6967 0.696699C15.4038 0.989592 15.4038 1.46447 15.6967 1.75736L19.9393 6L15.6967 10.2426C15.4038 10.5355 15.4038 11.0104 15.6967 11.3033C15.9896 11.5962 16.4645 11.5962 16.7574 11.3033L21.5303 6.53033ZM0 6.75L21 6.75V5.25L0 5.25L0 6.75Z" />
                </svg>
              </span> */}
            </p>
          </div>
          {/* <div className=" relative overflow-hidden w-[60%] h-[100%] rounded-lg">
            <motion.div className="w-full h-full" style={{ scale: imageScale }}>
              <Image
                src={`/img.jpg`}
                alt="image"
                layout="fill"
                className="object-cover"
              />
            </motion.div>
          </div> */}
        </div>
      </motion.div>
    </div>
  );
};

export default InfoCard;
