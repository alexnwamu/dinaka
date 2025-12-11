"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  FileText,
  MessageSquare,
} from "lucide-react";
import { Typewriter } from "react-simple-typewriter";
import Link from "next/link";
import Image from "next/image";
import { socialLinks, skills } from "@/data";

const Hero = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  if (!mounted) return null;

  return (
    <section className="min-h-screen relative overflow-hidden">
      <div className="absolute inset-0 grid-bg" />

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />

      <motion.div
        initial={{ opacity: 0, scale: 0.8, x: 50 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="hidden lg:block absolute right-[8%] top-1/3 -translate-y-1/2 z-20"
      >
        <div className="relative">
          <div className="absolute inset-0 rounded-full bg-primary/20 blur-2xl scale-110" />
          <div className="relative w-32 h-32 xl:w-40 xl:h-40 rounded-full overflow-hidden border-2 border-primary/30 shadow-lg">
            <Image
              src="/dinakapicture.jpg"
              alt="Dinaka Nwamu"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="absolute -inset-2 rounded-full border border-primary/20 animate-pulse" />
        </div>
      </motion.div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-5xl mx-auto"
        >
          <motion.div variants={itemVariants} className="mb-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-accent/30 bg-accent/5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
              </span>
              <span className="text-xs font-mono text-accent uppercase tracking-wider">
                Available for work
              </span>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="mb-8">
            <div className="font-mono text-xs sm:text-sm text-muted-foreground mb-2">
              <span className="text-accent">dinaka</span>
              <span className="text-muted-foreground">@</span>
              <span className="text-primary">portfolio</span>
              <span className="text-muted-foreground"> ~ </span>
            </div>
            <div className="font-mono text-muted-foreground text-sm sm:text-base">
              <span className="text-accent">$</span> git commit -m
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="mb-8">
            <h1 className="text-3xl sm:text-5xl lg:text-7xl font-bold leading-tight">
              <span className="text-muted-foreground">&quot;</span>
              <span className="text-foreground">Full-stack </span>
              <span className="text-primary">engineering</span>
              <br />
              <span className="text-foreground">for </span>
              <span className="text-accent">modern</span>
              <span className="text-foreground"> applications</span>
              <span className="text-muted-foreground">&quot;</span>
            </h1>
          </motion.div>

          <motion.div variants={itemVariants} className="mb-6">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-foreground mb-2">
              Dinaka Alexander Nwamu
            </h2>
            <div className="font-mono text-base sm:text-lg text-muted-foreground">
              I am a{" "}
              <span className="text-primary">
                <Typewriter
                  words={[
                    "Software Engineer",
                    "Full Stack Developer",
                    "Problem Solver",
                    "Builder of Great Apps",
                  ]}
                  loop={true}
                  cursor
                  cursorStyle="_"
                  typeSpeed={80}
                  deleteSpeed={50}
                  delaySpeed={2000}
                />
              </span>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-4 mb-12"
          >
            <Link href="#contact">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground 
                         rounded-full font-medium text-sm sm:text-base hover:bg-primary/90 
                         transition-colors duration-300"
              >
                <MessageSquare className="w-4 h-4" />
                Hire me
              </motion.button>
            </Link>
            <Link href="#experience">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-2 px-6 py-3 border border-border 
                         rounded-full font-medium text-sm sm:text-base hover:border-primary 
                         hover:text-primary transition-colors duration-300"
              >
                View my work
              </motion.button>
            </Link>
            <Link href={socialLinks.resume} target="_blank">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-2 px-6 py-3 border border-border 
                         rounded-full font-medium text-sm sm:text-base hover:border-accent 
                         hover:text-accent transition-colors duration-300"
              >
                <FileText className="w-4 h-4" />
                Resume
              </motion.button>
            </Link>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-4"
          >
            <Link
              href={socialLinks.github}
              target="_blank"
              className="p-2 text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              <Github className="w-5 h-5" />
            </Link>
            <Link
              href={socialLinks.linkedin}
              target="_blank"
              className="p-2 text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              <Linkedin className="w-5 h-5" />
            </Link>
            <Link
              href={socialLinks.twitter}
              target="_blank"
              className="p-2 text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              <Twitter className="w-5 h-5" />
            </Link>
            <Link
              href={socialLinks.email}
              className="p-2 text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              <Mail className="w-5 h-5" />
            </Link>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mt-16 flex items-center gap-2 text-sm text-muted-foreground"
          >
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span>From Nigeria. For the world.</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
