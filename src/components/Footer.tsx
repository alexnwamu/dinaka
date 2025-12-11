"use client";

import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Mail, Heart, Terminal } from "lucide-react";
import Link from "next/link";
import { socialLinks } from "@/data";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 border-t border-border">
      <div className="absolute inset-0 grid-bg opacity-20" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-center justify-between gap-6"
          >
            {/* Logo & Copyright */}
            <div className="flex flex-col items-center md:items-start gap-2">
              <Link href="#" className="flex items-center gap-2 group">
                <div className="p-1.5 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Terminal className="w-4 h-4 text-primary" />
                </div>
                <span className="font-mono text-base font-semibold text-foreground">
                  dinaka<span className="text-primary">.</span>
                </span>
              </Link>
              <p className="text-sm text-muted-foreground font-mono">
                © {currentYear} Dinaka Nwamu. All rights reserved.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <Link
                href={socialLinks.github}
                target="_blank"
                className="p-2 text-muted-foreground hover:text-foreground hover:bg-secondary/50 
                         rounded-lg transition-colors"
              >
                <Github className="w-5 h-5" />
              </Link>
              <Link
                href={socialLinks.linkedin}
                target="_blank"
                className="p-2 text-muted-foreground hover:text-foreground hover:bg-secondary/50 
                         rounded-lg transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link
                href={socialLinks.twitter}
                target="_blank"
                className="p-2 text-muted-foreground hover:text-foreground hover:bg-secondary/50 
                         rounded-lg transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </Link>
              <Link
                href={socialLinks.email}
                className="p-2 text-muted-foreground hover:text-foreground hover:bg-secondary/50 
                         rounded-lg transition-colors"
              >
                <Mail className="w-5 h-5" />
              </Link>
            </div>

            {/* Built With */}
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <span>Built with</span>
              <Heart className="w-4 h-4 text-primary fill-primary" />
              <span>using Next.js</span>
            </div>
          </motion.div>

          {/* Terminal-style credit */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-8 pt-6 border-t border-border/50 text-center"
          >
            <p className="font-mono text-xs text-muted-foreground">
              <span className="text-accent">$</span> echo &quot;Thanks for
              visiting!&quot;
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
