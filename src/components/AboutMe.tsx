/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import React from "react";
const AboutMe = () => {
  return (
    <div className=" bg-[#F8F8F8] px-4 dark:bg-[#23232369] py-[40px]  sm:py-[140px] items-center flex gap-[40px] flex-col sm:flex-row   justify-center w-full ">
      <div className="md:w-[563px] md:h-[547px] sm:w-[400px] w-[300px] sm:h-[400px]  h-[300px]  relative">
        <Image
          layout="fill"
          alt="Dinaka is A Good Dev Hire Him"
          objectFit="cover"
          src="/dinakapicture.jpg"
        />
      </div>
      <div className="pt-[48px] w-auto sm:w-[400px] lg:w-auto max-w-[614px]">
        <h1 className="text-[24px] lg:text-[86px] font-bold text-center sm:text-left">ABOUT ME</h1>
        <p className="font-outfit text-[18px] sm:mt-[30px] text-center sm:text-left text-[#BDBDBD]">
          Hey there! 👋 I'm Dinaka, a Full stack engineer who loves building applications across both frontend and backend. Beyond software development, I’m always exploring AI and its real world applications, finding ways to integrate intelligent systems into innovative products. I thrive on tackling complex challenges, learning new technologies, and staying ahead in the ever-evolving tech landscape
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
