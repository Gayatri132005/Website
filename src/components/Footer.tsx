"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";

function Footer(): JSX.Element {
  const controls = useAnimation();
  const footerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start({ opacity: 1 });
        }
      },
      { threshold: 0.1 } // Adjust the threshold as needed
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current);
      }
    };
  }, [controls]);

  return (
    <footer className=" bg-customBlack text-white bg-cover bg-no-repeat flex flex-col md:flex-row  w-full md:py-24 md:px-24 px-10 py-16 ">
      <>
        <motion.div
          ref={footerRef}
          initial={{ opacity: 0, y: 0 }}
          animate={controls}
          transition={{ duration: 0.5, delay: 0.2, y: 90 }}
          className="flex flex-col  md:w-[40%] md:mr-28"
        >
          <h2 className="font-bold my-4">DB</h2>
          <p>India&apos;s first integrated drone service company.</p>
          <hr className="border-white my-4" />
          <div className="flex flex-col gap-2">
            <p>Choriya Layout, Wani, Yavatmal, India</p>
            <p>dheeraj@mamaapp.live</p>
            <p>+91 9322418319</p>
          </div>
          <hr className="border-white my-4" />
          {/* <p>Shanik Ag Pvt Ltd @{new Date().getFullYear()}</p> */}
        </motion.div>
        <motion.div
          ref={footerRef}
          initial={{ opacity: 0 }}
          animate={controls}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col mt-4 gap-2 md:mr-28"
        >
          <h4 className="font-bold">Social Media</h4>
          <p>Facebook</p>
          <p>Instagram</p>
          <p>Twitter</p>
          <p>Linkedin</p>
        </motion.div>
        <motion.div
          ref={footerRef}
          initial={{ opacity: 0 }}
          animate={controls}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-col gap-2 mt-4"
        >
          <h4 className="font-bold">Help and Support</h4>
          <p>About Us</p>
          <p>Contact Us</p>
          <Link href={"/terms-and-conditions"}>
            <p className=" hover:underline hover:text transition-all  duration-100 ">
              Terms and Conditions
            </p>
          </Link>
        </motion.div>
      </>
    </footer>
  );
}

export default Footer;
