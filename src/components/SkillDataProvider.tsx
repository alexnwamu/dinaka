"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

interface Props {
  src: string;
  width?: number;
  height?: number;
  index: number;
  name?: string;
}

const SkillDataProvider = ({ src, name, width, height, index }: Props) => {
  const { ref, inView } = useInView({
    triggerOnce: false,
  });

  const imageVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const animationDelay = 0.3;
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      variants={imageVariants}
      animate={inView ? "visible" : "hidden"}
            className="flex flex-col items-center"
      custom={index}
      transition={{ delay: index * animationDelay }}
    >
      <div className=" sm:w-[80px] sm:h-[80px] w-[40px] h-[40px]  relative">
        <Image src={src}  objectFit="contain" layout="fill" alt="skill image" />
      </div>
      <p className="sm:text-center dark:text-white font-outfit">{name}</p>
    </motion.div>
  );
};

export default SkillDataProvider;
