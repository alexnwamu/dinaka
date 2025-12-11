"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { skillCategories } from "@/data";
import { Code2, Layout, Server, Database, Wrench } from "lucide-react";

const categoryIcons: Record<string, React.ReactNode> = {
  languages: <Code2 className="w-4 h-4" />,
  frontend: <Layout className="w-4 h-4" />,
  backend: <Server className="w-4 h-4" />,
  database: <Database className="w-4 h-4" />,
  tools: <Wrench className="w-4 h-4" />,
};

const SkillsSection = () => {
  const [activeTab, setActiveTab] = useState<string>("languages");
  const categories = Object.entries(skillCategories);

  return (
    <section id="skills" className="py-20 relative">
      <div className="absolute inset-0 grid-bg opacity-20" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              My Skills <span className="text-primary">&amp; Stack</span>
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto">
              Technologies and tools I use to bring ideas to life
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-xl border border-border bg-card overflow-hidden shadow-lg"
          >
            <div className="flex items-center gap-2 px-4 py-3 bg-secondary/50 border-b border-border overflow-x-auto">
              <div className="flex items-center gap-1.5 mr-4 shrink-0">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>

              <div className="flex gap-1">
                {categories.map(([key, category]) => (
                  <button
                    key={key}
                    onClick={() => setActiveTab(key)}
                    className={`relative flex items-center gap-2 px-4 py-2 text-sm font-mono rounded-t-lg transition-all duration-200 whitespace-nowrap ${
                      activeTab === key
                        ? "bg-card text-foreground border-t border-x border-border -mb-px"
                        : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                    }`}
                  >
                    {categoryIcons[key]}
                    <span className="hidden sm:inline">{category.title}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="p-6 sm:p-8 min-h-[200px]">
              <AnimatePresence mode="wait">
                {categories.map(
                  ([key, category]) =>
                    activeTab === key && (
                      <motion.div
                        key={key}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="flex items-center gap-3 mb-6 pb-4 border-b border-border/50">
                          <span className="text-primary">
                            {categoryIcons[key]}
                          </span>
                          <h3 className="text-lg font-semibold text-foreground">
                            {category.title}
                          </h3>
                        </div>

                        <div className="flex flex-wrap gap-3">
                          {category.skills.map((skill, index) => (
                            <motion.div
                              key={skill}
                              initial={{ opacity: 0, scale: 0.9 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: index * 0.05 }}
                              whileHover={{ scale: 1.05, y: -2 }}
                              className="px-4 py-2 rounded-lg bg-secondary/50 border border-border 
                                       text-foreground font-mono text-sm cursor-default
                                       hover:border-primary/50 hover:bg-primary/5 transition-all duration-200"
                            >
                              {skill}
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    )
                )}
              </AnimatePresence>
            </div>

            <div className="flex items-center justify-between px-4 py-2 bg-secondary/30 border-t border-border text-xs font-mono text-muted-foreground">
              <div className="flex items-center gap-4">
                <span>UTF-8</span>
                <span>skills.tsx</span>
              </div>
              <div className="flex items-center gap-4">
                <span>TypeScript React</span>
                <span className="text-primary">● Ready</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-12 rounded-xl border border-border bg-card overflow-hidden"
          >
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border bg-secondary/30">
                    <th className="px-6 py-4 text-left text-sm font-mono text-muted-foreground">
                      Category
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-mono text-muted-foreground">
                      Tools &amp; Tech
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {categories.map(([key, category], index) => (
                    <motion.tr
                      key={key}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="border-b border-border/50 last:border-0 hover:bg-secondary/20 transition-colors"
                    >
                      <td className="px-6 py-5 text-foreground font-medium whitespace-nowrap">
                        <div className="flex items-center gap-2">
                          <span className="text-primary">
                            {categoryIcons[key]}
                          </span>
                          {category.title}
                        </div>
                      </td>
                      <td className="px-6 py-5">
                        <div className="flex flex-wrap gap-2">
                          {category.skills.map((skill) => (
                            <span
                              key={skill}
                              className="text-sm text-muted-foreground hover:text-foreground 
                                       transition-colors cursor-default"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
