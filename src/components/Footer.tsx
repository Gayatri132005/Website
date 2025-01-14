"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

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
      { threshold: 0.1 }
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
    <footer className="bg-customBlack text-white bg-cover bg-no-repeat flex flex-col md:flex-row w-full md:py-24 md:px-24 px-10 py-16">
      <>
        {/* Left Section */}
        <motion.div
          ref={footerRef}
          initial={{ opacity: 0 }}
          animate={controls}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col md:w-[40%] md:mr-28"
        >
          <Image
            className="mb-4"
            src={"/dbGreen.svg"}
            alt="DB Logo"
            width={70}
            height={70}
          />
          <p>India&apos;s first integrated drone service company.</p>
          <hr className="border-white my-4" />
          <div className="flex flex-col gap-2">
            <p>Choriya Layout, Wani, Yavatmal, India</p>
            <p>dheeraj@mamaapp.live</p>
       
          </div>
          <hr className="border-white my-4" />
        </motion.div>

        {/* Middle Section - Social Media */}
        <motion.div
          ref={footerRef}
          initial={{ opacity: 0 }}
          animate={controls}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col mt-4 gap-4 md:mr-28"
        >
          <h4 className="font-bold">Social Media</h4>
          <div className="flex flex-col gap-4">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.facebook.com/profile.php?id=100091867800906"
              className="flex items-center gap-2"
            >
              <FaFacebook className="h-6 w-6" />
              Facebook
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.instagram.com/mamadrones_/"
              className="flex items-center gap-2"
            >
              <FaInstagram className="h-6 w-6" />
              Instagram
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://twitter.com/mamaapp_"
              className="flex items-center gap-2"
            >
              <FaTwitter className="h-6 w-6" />
              Twitter
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/company/91104942/admin/feed/posts/"
              className="flex items-center gap-2"
            >
              <FaLinkedin className="h-6 w-6" />
              Linkedin
            </a>
          </div>
        </motion.div>
       <br></br>
       <br></br>
        {/* Right Section - Additional Information */}
        <motion.div
          ref={footerRef}
          initial={{ opacity: 0 }}
          animate={controls}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-col gap-8"
        >
          <div className="icon flex flex-col items-start gap-3">
            <div className="flex items-center gap-3">
              <FaMapMarkerAlt className="h-6 w-6" />
              <h3 className="font-medium">Office</h3>
            </div>
            <p>Choriya Layout, Wani, Maharashtra, India 445 304</p>
          </div>

          <div className="icon flex flex-col items-start gap-3">
            <div className="flex items-center gap-3">
              <FaEnvelope className="h-6 w-6" />
              <h3 className="font-medium">Email</h3>
            </div>
            <p>bordedheeraj.77@gmail.com</p>
          </div>

          <div className="icon flex flex-col items-start gap-3">
            <div className="flex items-center gap-3">
              <FaPhoneAlt className="h-6 w-6" />
              <h3 className="font-medium">Phone Number</h3>
            </div>
            <p
              onClick={() => window.open("tel:9322418319")}
              className="cursor-pointer"
            >
              +91 9322418319
            </p>
          </div>
        </motion.div>
      </>
    </footer>
  );
}

export default Footer;
