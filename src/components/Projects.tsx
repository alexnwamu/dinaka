import React from "react";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";
const Projects = () => {
  return (
    <div className="container gap-[120px] pl-[120px]  py-[140px] flex">
      <div className="flex flex-col  justify-center">
        <h1 className="text-2xl font-bold text-[32px] sm:text-[64px] lg:text-[84px] lg:leading-[100px]">
          MY <br /> PROJECTS
        </h1>

        <div className="flex items-center  gap-4">
          <button className="flex items-center group hover:bg-[#2962EF] justify-center rounded-full bg-[#ECECEC] w-[78px] h-[78px] ">
            <ArrowLeftIcon className="text-[#00000059] group-hover:text-white w-[42px] h-[42px]" />
          </button>
          <button className="flex group items-center justify-center rounded-full hover:bg-[#2962EF] bg-[#ECECEC] w-[78px] h-[78px] ">
            <ArrowRightIcon className="text-[#00000059] group-hover:bg-[#2962EF] group-hover:text-white w-[42px] h-[42px]" />
          </button>
        </div>
      </div>
<div className="flex ">
<div className="bg-[#F0F0F0] w-[540px] p-10 relative h-[620px] rounded-[20px]">
                    <div className=" ">
<h1 className="text-[63px] text-[#999] font-bold">AI VSA</h1>
                        <p className="font-outfit mt-[34px] text-[#BDBDBD] text-[18px]">
An AI tool that allows students upload their own notes and slides and chat with the information there built with Next JS, TypeScript,Postgresql, AWS S3, Langchain 
                        </p>
                    </div>

                </div>


            </div>

    </div>
  );
};

export default Projects;
