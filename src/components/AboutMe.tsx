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
          Hey there! 👋 I'm Dinaka, a dedicated full-stack engineer with over 3
          years of experience crafting exceptional web applications. I'm really
          passionate about leveraging technology to solve real-world problems
          and deliver seamless user experiences, My goal is to not only meet but
          surpass the expectations placed upon me. I possess a strong passion
          for continuous learning and thrive on effective collaboration with my
          team members. By night, you'll find me cheering on Manchester
          United—win or lose, my loyalty runs deep! Let's connect and chat about
          tech, football, or anything in between!
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
