/* eslint-disable react/no-unescaped-entities */
"use client";
import React from "react";
import { Github, TwitterIcon, LinkedinIcon } from "lucide-react";
import { Typewriter } from "react-simple-typewriter";
import { Button } from "./ui/button";
import Link from "next/link";
const Hero = () => {
  return (
    <div className="dark:bg-[#121212] px-4 flex-col flex items-center py-[99px]">
      <div className="flex gap-6">
        <Link href="https://twitter.com/realdinaka" target="_blank">
          <TwitterIcon className="text-[#999999] fill-[#999999]" />
        </Link>
        {""}
        {/* Linkedin Icon */}
        <Link
          href="https://www.linkedin.com/in/dinaka-nwamu-489683234/"
          target="_blank"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M20.8205 1.5H3.29437C2.33672 1.5 1.5 2.18906 1.5 3.13547V20.7005C1.5 21.652 2.33672 22.5 3.29437 22.5H20.8153C21.7781 22.5 22.5 21.6464 22.5 20.7005V3.13547C22.5056 2.18906 21.7781 1.5 20.8205 1.5ZM8.00953 19.0045H5.00109V9.65063H8.00953V19.0045ZM6.60938 8.22844H6.58781C5.625 8.22844 5.00156 7.51172 5.00156 6.61453C5.00156 5.70094 5.64141 5.00109 6.62578 5.00109C7.61016 5.00109 8.2125 5.69578 8.23406 6.61453C8.23359 7.51172 7.61016 8.22844 6.60938 8.22844ZM19.0045 19.0045H15.9961V13.89C15.9961 12.6647 15.5583 11.8275 14.4698 11.8275C13.6383 11.8275 13.1461 12.39 12.9272 12.938C12.8452 13.1348 12.8231 13.403 12.8231 13.6767V19.0045H9.81469V9.65063H12.8231V10.9523C13.2609 10.3289 13.9448 9.43172 15.5363 9.43172C17.5111 9.43172 19.005 10.7334 19.005 13.5398L19.0045 19.0045Z"
              fill="#999999"
            />
          </svg>
        </Link>

        {/* Github Icon */}

        <Link href="https://github.com/alexnwamu" target="_blank">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M12 1.5C6.20156 1.5 1.5 6.32344 1.5 12.2672C1.5 17.025 4.50937 21.0562 8.68125 22.4812C8.73977 22.494 8.79949 22.5002 8.85938 22.5C9.24844 22.5 9.39844 22.2141 9.39844 21.9656C9.39844 21.7078 9.38906 21.0328 9.38437 20.1328C9.03705 20.2142 8.68173 20.2567 8.325 20.2594C6.30469 20.2594 5.84531 18.6891 5.84531 18.6891C5.36719 17.4469 4.67813 17.1141 4.67813 17.1141C3.76406 16.4719 4.67344 16.4531 4.74375 16.4531H4.74844C5.80313 16.5469 6.35625 17.5687 6.35625 17.5687C6.88125 18.4875 7.58437 18.7453 8.2125 18.7453C8.62783 18.737 9.03673 18.6412 9.4125 18.4641C9.50625 17.7703 9.77812 17.2969 10.0781 17.025C7.74844 16.7531 5.29688 15.8297 5.29688 11.7047C5.29688 10.5281 5.70469 9.56719 6.375 8.81719C6.26719 8.54531 5.90625 7.44844 6.47812 5.96719C6.55483 5.94883 6.63368 5.94095 6.7125 5.94375C7.09219 5.94375 7.95 6.08906 9.36563 7.07344C11.0857 6.59218 12.9049 6.59218 14.625 7.07344C16.0406 6.08906 16.8984 5.94375 17.2781 5.94375C17.3569 5.94095 17.4358 5.94883 17.5125 5.96719C18.0844 7.44844 17.7234 8.54531 17.6156 8.81719C18.2859 9.57187 18.6937 10.5328 18.6937 11.7047C18.6937 15.8391 16.2375 16.7484 13.8984 17.0156C14.2734 17.3484 14.6109 18.0047 14.6109 19.0078C14.6109 20.4469 14.5969 21.6094 14.5969 21.9609C14.5969 22.2141 14.7422 22.5 15.1312 22.5C15.1942 22.5003 15.2571 22.494 15.3187 22.4812C19.4953 21.0562 22.5 17.0203 22.5 12.2672C22.5 6.32344 17.7984 1.5 12 1.5Z"
              fill="#999999"
            />
          </svg>
        </Link>
      </div>
      <div className=" text-[32px] sm:text-[64px] lg:text-[100px] mt-4 text-center font-bold lg:leading-[100px]">
        Hi, I'm Nwamu Dinaka <br /> Alexander
      </div>
      <span className="sm:text-[24px] text-[#9999] mt-1">
        <Typewriter
          words={[
            "Software Engineer",
            "Full Stack Developer",
            "Builder of Great Applications :)",
          ]}
          loop={false}
          cursor
          cursorStyle="|"
          typeSpeed={100}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </span>
      <div className="flex sm:flex-row flex-col  mt-[40px] gap-[35px] ">
        <Link
          href="https://drive.google.com/file/d/1GpIorBl2OcXsVCPH8NQ_x8RRTwrauthb/view"
          target="_blank"
          className="bg-[#2962EF] flex items-center justify-center w-[245px] sm:py-[24px] py-4  sm:text-[18px] text-white dark:text-white rounded-[40px]"
        >
          Download Resume
        </Link>

        <Link
          href="/contact"
          className=" w-[245px] flex items-center justify-center py-4 sm:py-[24px] sm:text-[18px] border-black  border-2 dark:border-white text-black dark:text-white rounded-[40px]"
        >
          Hire Me
        </Link>
      </div>
    </div>
  );
};

export default Hero;
