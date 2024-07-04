"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { motion } from "framer-motion";
function Header(): JSX.Element {
  const [showMenu, setShowMenu] = useState(false);
  const handleScroll = (event: any) => {
    event.preventDefault();
    setShowMenu(false);
    const targetId = event.currentTarget.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className=" inset-x-0 top-0 z-20 ">
      {/* For Large Screen */}
      <div className="flex flex-row justify-around shadow-2 p-4   border-slate-300 items-center   bg-baige shadow-black">
        <Link href={"/"} className="hidden md:flex">
          <Image src={"/dbGreen.svg"} alt="DB Logo" width={70} height={70} />
        </Link>
        <div className="hidden md:flex cursor-pointer flex-col text-lg items-center md:flex-row gap-8">
          {/* <a className="font-semibold">Home</a> */}
          <a onClick={handleScroll} href="#process" className="font-semibold">
            Process
          </a>
          <a onClick={handleScroll} href="#why-db" className="font-semibold">
            Why us?
          </a>
          <a onClick={handleScroll} href="#steps" className="font-semibold">
            Steps
          </a>
          <a
            onClick={handleScroll}
            href="#advantages"
            className="font-semibold"
          >
            Advantages
          </a>
          <a onClick={handleScroll} href={"#faq"} className="font-semibold">
            FAQ
          </a>
          <a onClick={handleScroll} href={"#contact"} className="font-semibold">
            Contact Us
          </a>
          <p
            className="font-semibold"
            onClick={() => window.open("tel:9322418319")}
          >
            Call Us
          </p>
          {/* <Select>
            <SelectTrigger className="w-[180px] border-none outline-none ">
              <SelectValue placeholder="Select a language" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup className=" border-none outline-none">
                <SelectLabel>Language</SelectLabel>
                <SelectItem value="en">English</SelectItem>
                <SelectItem value="hi">Hindi</SelectItem>
                <SelectItem value="mr">Marathi</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select> */}
        </div>
      </div>
      {/* For small screen  */}
      <div className="flex bg-cover bg-no-repeat bg-center bg-baige     shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] h-20  flex-row justify-between md:hidden">
        <div className="flex absolute w-full z-50 p-5  justify-between items-center">
          <Link href={"/"}>
            <Image src={"/dbGreen.svg"} alt="DB Logo" width={70} height={70} />
          </Link>
          <div
            onClick={() => setShowMenu(!showMenu)}
            className={`w-10 h-10 flex flex-col p-2 justify-around cursor-pointer`}
          >
            <div className="h-0.5  bg-black w-full"></div>
            <div className="h-0.5  bg-black w-full"></div>
            <div className="h-0.5  bg-black w-full"></div>
          </div>
        </div>

        <div
          className={`${
            showMenu ? "h-screen" : "h-0"
          } transition-all  duration-700 ease-in-out text-2xl bg-heading  fixed z-40 w-full bg-baige`}
        >
          <div
            className={`${
              showMenu ? "translate-y-60" : "-translate-y-60 opacity-0"
            } flex justify-center flex-col gap-6 items-center text-center transition-all duration-700 ease-in-out`}
          >
            {/* <a className="font-semibold">Home</a>
            <a href="#process" className="font-semibold">
              Process
            </a>
            <a className="font-semibold">Features</a>
            <a className="font-semibold">FAQ</a> */}
            <a onClick={handleScroll} href="#process" className="font-semibold">
              Process
            </a>
            <a onClick={handleScroll} href="#why-db" className="font-semibold">
              Why us?
            </a>
            <a onClick={handleScroll} href="#steps" className="font-semibold">
              Steps
            </a>
            <a
              onClick={handleScroll}
              href="#advantages"
              className="font-semibold"
            >
              Advantages
            </a>
            <a onClick={handleScroll} href={"#faq"} className="font-semibold">
              FAQ
            </a>
            <a
              onClick={handleScroll}
              href={"#contact"}
              className="font-semibold"
            >
              Contact Us
            </a>
            <p
              className="font-semibold"
              onClick={() => window.open("tel:9322418319")}
            >
              Call Us
            </p>
            {/* <Button className="bg-[#15D783]"  variant="outline"> Contact us!</Button> */}

            {/* <Select>
              <SelectTrigger className="w-[180px] border-none outline-none ">
                <SelectValue placeholder="Select a language" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup className=" border-none outline-none">
                  <SelectLabel>Language</SelectLabel>
                  <SelectItem value="en">English</SelectItem>
                  <SelectItem value="hi">Hindi</SelectItem>
                  <SelectItem value="mr">Marathi</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select> */}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
