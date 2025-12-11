"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { experiences, projects } from "@/data";
import { ExternalLink, Github, ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

type TabType = "experience" | "projects";

const Experience = () => {
  const [activeTab, setActiveTab] = useState<TabType>("experience");

  const tabVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 20 },
  };

  return (
    <section id="experience" className="py-20 relative">
      <div className="absolute inset-0 grid-bg opacity-50" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-12"
          >
            <div className="flex items-center gap-6 mb-4 sm:mb-0">
              <button
                onClick={() => setActiveTab("experience")}
                className={`relative text-lg sm:text-xl font-mono transition-colors duration-300 ${
                  activeTab === "experience"
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Experience
                {activeTab === "experience" && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute -bottom-2 left-0 right-0 h-0.5 bg-primary"
                  />
                )}
              </button>
              <button
                onClick={() => setActiveTab("projects")}
                className={`relative text-lg sm:text-xl font-mono transition-colors duration-300 ${
                  activeTab === "projects"
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Projects
                {activeTab === "projects" && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute -bottom-2 left-0 right-0 h-0.5 bg-primary"
                  />
                )}
              </button>
            </div>
          </motion.div>

          {/* Content */}
          <AnimatePresence mode="wait">
            {activeTab === "experience" ? (
              <motion.div
                key="experience"
                variants={tabVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{ duration: 0.3 }}
                className="space-y-8"
              >
                {experiences.map((exp, index) => (
                  <motion.div
                    key={exp.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="relative"
                  >
                    <div className="absolute left-0 top-2 w-2 h-2 rounded-full bg-primary" />

                    <div className="ml-6 border-l border-border pl-6 pb-8">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                        <div>
                          <h3 className="text-lg sm:text-xl font-semibold text-foreground">
                            {exp.company}
                          </h3>
                          <p className="text-primary font-mono text-sm">
                            {exp.role}{" "}
                            <span className="text-muted-foreground">
                              ({exp.type})
                            </span>
                          </p>
                        </div>
                        <span className="text-sm text-muted-foreground font-mono whitespace-nowrap">
                          {exp.period}
                        </span>
                      </div>

                      <ul className="space-y-2">
                        {exp.description.map((item, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2 text-sm text-muted-foreground"
                          >
                            <span className="text-primary mt-1.5">
                              <ChevronRight className="w-3 h-3" />
                            </span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="projects"
                variants={tabVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                {projects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="group relative bg-card border border-border rounded-xl overflow-hidden 
                             hover:border-primary/50 transition-all duration-300 card-glow"
                  >
                    <div className="relative h-48 overflow-hidden bg-secondary">
                      <Image
                        src={project.img}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                    </div>

                    <div className="p-5">
                      <div className="flex items-start justify-between gap-4 mb-3">
                        <div>
                          <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                            {project.title}
                          </h3>
                          <span className="text-xs text-muted-foreground font-mono">
                            {project.year}
                          </span>
                        </div>
                        <div className="flex gap-2">
                          {project.github && (
                            <Link
                              href={project.github}
                              target="_blank"
                              className="p-2 rounded-lg bg-secondary text-muted-foreground 
                                       hover:text-foreground hover:bg-secondary/80 transition-colors"
                            >
                              <Github className="w-4 h-4" />
                            </Link>
                          )}
                          <Link
                            href={project.href}
                            target="_blank"
                            className="p-2 rounded-lg bg-secondary text-muted-foreground 
                                     hover:text-foreground hover:bg-secondary/80 transition-colors"
                          >
                            <ExternalLink className="w-4 h-4" />
                          </Link>
                        </div>
                      </div>

                      <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                        {project.des}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 text-xs font-mono rounded-md 
                                     bg-primary/10 text-primary border border-primary/20"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Experience;
