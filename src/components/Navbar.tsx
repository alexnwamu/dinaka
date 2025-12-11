"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Terminal } from "lucide-react";
import Link from "next/link";
import { socialLinks } from "@/data";
import { ModeToggle } from "./modeToggle";

const navItems = [
  { name: "Home", href: "#" },

  { name: "Experience", href: "#experience" },

  { name: "Skills", href: "#skills" },

  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-background/80 backdrop-blur-lg border-b border-border"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <Link href="#" className="flex items-center gap-2 group">
              <div className="p-1.5 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                <Terminal className="w-5 h-5 text-primary" />
              </div>
              <span className="font-mono text-lg font-semibold text-foreground">
                dinaka<span className="text-primary">.</span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="px-4 py-2 text-sm font-mono text-muted-foreground hover:text-foreground 
                           hover:bg-secondary/50 rounded-lg transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden md:flex items-center gap-3">
              <ModeToggle />
              <Link
                href={socialLinks.resume}
                target="_blank"
                className="px-4 py-2 text-sm font-mono text-muted-foreground hover:text-foreground 
                         hover:bg-secondary/50 rounded-lg transition-colors"
              >
                Resume
              </Link>
              <Link
                href="#contact"
                className="px-5 py-2 text-sm font-medium bg-primary text-primary-foreground 
                         rounded-full hover:bg-primary/90 transition-colors"
              >
                Hire me
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex md:hidden items-center gap-2">
              <ModeToggle />
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 text-foreground hover:bg-secondary/50 rounded-lg transition-colors"
              >
                {isMobileMenuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-16 z-40 md:hidden"
          >
            <div className="bg-background/95 backdrop-blur-lg border-b border-border p-4 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-4 py-3 text-sm font-mono text-muted-foreground hover:text-foreground 
                           hover:bg-secondary/50 rounded-lg transition-colors"
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-2 border-t border-border space-y-2">
                <Link
                  href={socialLinks.resume}
                  target="_blank"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-4 py-3 text-sm font-mono text-muted-foreground hover:text-foreground 
                           hover:bg-secondary/50 rounded-lg transition-colors"
                >
                  Resume
                </Link>
                <Link
                  href="#contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-4 py-3 text-sm font-medium text-center bg-primary text-primary-foreground 
                           rounded-lg hover:bg-primary/90 transition-colors"
                >
                  Hire me
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
