"use client";

import React from "react";
import { motion } from "framer-motion";
import { projects } from "@/data";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const FeaturedProjects = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section id="projects" className="py-20 relative">
      <div className="absolute inset-0 grid-bg opacity-30" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-end justify-between mb-12"
          >
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
                Selected
                <br />
                <span className="text-primary">work</span>
              </h2>
            </div>
            <Link
              href="#experience"
              className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-full bg-foreground 
                       text-background text-sm font-medium hover:bg-foreground/90 transition-colors"
            >
              See All
            </Link>
          </motion.div>

          {/* Projects Grid - Bento Style */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-6"
          >
            {/* Featured Project - Large */}
            {projects[0] && (
              <motion.div
                variants={itemVariants}
                className="lg:col-span-8 group"
              >
                <Link href={projects[0].href} target="_blank" className="block">
                  <div
                    className="relative h-[300px] sm:h-[400px] lg:h-[500px] rounded-2xl overflow-hidden 
                                bg-card border border-border hover:border-primary/50 transition-all duration-500"
                  >
                    {/* Background Image */}
                    <div className="absolute inset-0">
                      <Image
                        src={projects[0].img}
                        alt={projects[0].title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-card via-card/60 to-transparent" />
                    </div>

                    {/* Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                      <div className="flex items-end justify-between">
                        <div>
                          <div className="flex gap-2 mb-3">
                            {projects[0].tags.map((tag) => (
                              <span
                                key={tag}
                                className="px-3 py-1 text-xs font-mono rounded-full 
                                         bg-primary/20 text-primary border border-primary/30"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground mb-2">
                            {projects[0].title}
                          </h3>
                          <p className="text-sm text-muted-foreground max-w-md line-clamp-2">
                            {projects[0].des}
                          </p>
                        </div>
                        <div className="hidden sm:flex items-center gap-3">
                          {projects[0].github && (
                            <Link
                              href={projects[0].github}
                              target="_blank"
                              onClick={(e) => e.stopPropagation()}
                              className="p-3 rounded-full bg-secondary/80 text-foreground 
                                       hover:bg-primary hover:text-primary-foreground transition-colors"
                            >
                              <Github className="w-5 h-5" />
                            </Link>
                          )}
                          <div
                            className="p-3 rounded-full bg-primary text-primary-foreground 
                                        group-hover:bg-accent transition-colors"
                          >
                            <ArrowUpRight className="w-5 h-5" />
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center justify-between mt-4 pt-4 border-t border-border/50">
                        <div className="flex gap-2">
                          {projects[0].tech.slice(0, 3).map((tech) => (
                            <span
                              key={tech}
                              className="text-xs text-muted-foreground font-mono"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                        <span className="text-xs text-muted-foreground font-mono">
                          {projects[0].year}
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            )}

            <div className="lg:col-span-4 flex flex-col gap-6">
              {projects.slice(1, 3).map((project, index) => (
                <motion.div
                  key={project.id}
                  variants={itemVariants}
                  className="group flex-1"
                >
                  <Link
                    href={project.href}
                    target="_blank"
                    className="block h-full"
                  >
                    <div
                      className="relative h-full min-h-[200px] rounded-2xl overflow-hidden 
                                  bg-card border border-border hover:border-primary/50 transition-all duration-500"
                    >
                      <div className="absolute inset-0">
                        <Image
                          src={project.img}
                          alt={project.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/80 to-card/40" />
                      </div>

                      {/* Content */}
                      <div className="absolute bottom-0 left-0 right-0 p-5">
                        <div className="flex items-start justify-between gap-3">
                          <div>
                            <div className="flex gap-1.5 mb-2">
                              {project.tags.slice(0, 1).map((tag) => (
                                <span
                                  key={tag}
                                  className="px-2 py-0.5 text-[10px] font-mono rounded-full 
                                           bg-primary/20 text-primary border border-primary/30"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                            <h3 className="text-base sm:text-lg font-semibold text-foreground mb-1">
                              {project.title}
                            </h3>
                            <span className="text-xs text-muted-foreground font-mono">
                              {project.year}
                            </span>
                          </div>
                          <div
                            className="p-2 rounded-full bg-secondary/80 text-foreground 
                                        group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                          >
                            <ArrowUpRight className="w-4 h-4" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Bottom Row Projects */}
            {projects.slice(3).map((project, index) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                className="lg:col-span-6 group"
              >
                <Link href={project.href} target="_blank" className="block">
                  <div
                    className="relative h-[250px] sm:h-[300px] rounded-2xl overflow-hidden 
                                bg-card border border-border hover:border-primary/50 transition-all duration-500"
                  >
                    {/* Background */}
                    <div className="absolute inset-0">
                      <Image
                        src={project.img}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-card via-card/70 to-transparent" />
                    </div>

                    {/* Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
                      <div className="flex items-end justify-between">
                        <div>
                          <div className="flex gap-2 mb-2">
                            {project.tags.map((tag) => (
                              <span
                                key={tag}
                                className="px-2 py-0.5 text-xs font-mono rounded-full 
                                         bg-primary/20 text-primary border border-primary/30"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                          <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-1">
                            {project.title}
                          </h3>
                          <p className="text-sm text-muted-foreground line-clamp-1">
                            {project.des}
                          </p>
                        </div>
                        <div
                          className="p-2.5 rounded-full bg-secondary/80 text-foreground 
                                      group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                        >
                          <ArrowUpRight className="w-4 h-4" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {/* Mobile See All Button */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="sm:hidden mt-8 text-center"
          >
            <Link
              href="#experience"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-foreground 
                       text-background text-sm font-medium hover:bg-foreground/90 transition-colors"
            >
              See All Projects
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
