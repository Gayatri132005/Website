"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
function Header(): JSX.Element {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className="sticky inset-x-0 top-0 z-20">
      {/* For Large Screen */}
      <div className="flex flex-row justify-around  border-b-2   border-slate-300 items-center w-screen  bg-baige shadow-black">
        <Link href={"/"} className="hidden md:flex">
          <h2 className="py-6 font-bold mx-2 ">DB</h2>
        </Link>
        <div className="hidden md:flex flex-col text-lg items-center md:flex-row gap-8">
          <p className="font-semibold">Home</p>
          <p className="font-semibold">Lifecycle</p>
          <p className="font-semibold">Features</p>
          <p className="font-semibold">FAQ</p>
          <p
            className="font-semibold"
            onClick={() => window.open("tel:9322418319")}
          >
            Contact Us
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
      <div className="flex bg-cover bg-no-repeat bg-center bg-baige    shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] h-20  flex-row justify-between md:hidden">
        <div className="flex absolute w-full z-50 p-5  justify-between items-center">
          <Link href={"/"}>
            <h2 className="font-bold">DB</h2>
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
            <p className="font-semibold">Home</p>
            <p className="font-semibold">Lifecycle</p>
            <p className="font-semibold">Features</p>
            <p className="font-semibold">FAQ</p>
            <p
              className="font-semibold"
              onClick={() => window.open("tel:9322418319")}
            >
              Contact Us
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
