import React from "react";
import { ModeToggle } from "./modeToggle";
import { ArrowDownLeftIcon } from "lucide-react";
import Link from "next/link";
const Navbar = () => {
  return (
    <div className="font-outfit   dark:bg-[#0D0d0d] dark:shadow-gray-900 shadow-lg text-[19px] z-[99]
            items-center sticky top-0 bg-white  dark:text-white flex flex-row justify-between  w-full px-8 py-4">
      <h1>Dinaka. </h1>{" "}
      <div className="flex gap-3 items-center justify-center">
        <Link
          href="#"
          className="group flex items-center relative hover:text-[#2962EF] transition-transform gap-2"
        >
          Hire Me{" "}
          <ArrowDownLeftIcon className="w-[18px] h-[18px] text-black dark:text-white transition group-hover:text-[#2962EF] transform  rotate-0 group-hover:-rotate-180" />
          <span className="absolute bottom-0 left-0 w-full h-[3px] bg-[#2962EF] transform scale-x-0 origin-left transition-transform duration-700 group-hover:scale-x-75"></span>
        </Link>
        <ModeToggle />{" "}
      </div>{" "}
    </div>
  );
};

export default Navbar;
