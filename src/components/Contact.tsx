"use client";

import React from "react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send, Github, Linkedin, Twitter, Mail, MapPin } from "lucide-react";
import Link from "next/link";
import { socialLinks } from "@/data";

const schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(50),
  email: z.string().email("Please enter a valid email"),
  message: z.string().min(5, "Message must be at least 5 characters").max(500),
});

type FormData = z.infer<typeof schema>;

export default function Contact() {
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    try {
      const response = await fetch("/api/sendmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast.success("Message sent successfully!");
        reset();
      } else {
        toast.error("Failed to send message. Please try again.");
      }
    } catch {
      toast.error("Something went wrong. Please try again.");
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="absolute inset-0 grid-bg opacity-30" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Get in <span className="text-primary">touch</span>
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto">
              Have a project in mind or want to collaborate? Feel free to reach
              out. I&apos;m always open to discussing new opportunities.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12"
          >
            {/* Contact Info */}
            <motion.div
              variants={itemVariants}
              className="lg:col-span-2 space-y-8"
            >
              {/* Terminal-style info card */}
              <div className="p-6 rounded-xl bg-card border border-border">
                <div className="flex items-center gap-2 mb-4 pb-3 border-b border-border">
                  <div className="w-3 h-3 rounded-full bg-destructive" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-accent" />
                  <span className="ml-2 text-xs text-muted-foreground font-mono">
                    contact_info.sh
                  </span>
                </div>

                <div className="space-y-4 font-mono text-sm">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-primary mt-1" />
                    <div>
                      <p className="text-muted-foreground">{"//"} Timezone</p>
                      <p className="text-foreground">UTC +1</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="w-4 h-4 text-primary mt-1" />
                    <div>
                      <p className="text-muted-foreground">{"//"} email</p>
                      <Link
                        href={socialLinks.email}
                        className="text-foreground hover:text-primary transition-colors"
                      >
                        dinakanwamu@gmail.com
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="p-6 rounded-xl bg-card border border-border">
                <h3 className="text-lg font-semibold text-foreground mb-4">
                  Connect with me
                </h3>
                <div className="flex flex-wrap gap-3">
                  <Link
                    href={socialLinks.github}
                    target="_blank"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary 
                             text-foreground hover:bg-secondary/80 hover:text-primary transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    <span className="text-sm">GitHub</span>
                  </Link>
                  <Link
                    href={socialLinks.linkedin}
                    target="_blank"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary 
                             text-foreground hover:bg-secondary/80 hover:text-primary transition-colors"
                  >
                    <Linkedin className="w-4 h-4" />
                    <span className="text-sm">LinkedIn</span>
                  </Link>
                  <Link
                    href={socialLinks.twitter}
                    target="_blank"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary 
                             text-foreground hover:bg-secondary/80 hover:text-primary transition-colors"
                  >
                    <Twitter className="w-4 h-4" />
                    <span className="text-sm">Twitter</span>
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={itemVariants} className="lg:col-span-3">
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="p-6 sm:p-8 rounded-xl bg-card border border-border"
              >
                {/* Terminal header */}
                <div className="flex items-center gap-2 mb-6 pb-4 border-b border-border">
                  <div className="w-3 h-3 rounded-full bg-destructive" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-accent" />
                  <span className="ml-2 text-xs text-muted-foreground font-mono">
                    send_message.sh
                  </span>
                </div>

                <div className="space-y-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-mono text-muted-foreground mb-2"
                    >
                      <span className="text-accent">$</span> name
                    </label>
                    <input
                      {...register("name")}
                      id="name"
                      type="text"
                      placeholder="Your name"
                      className="w-full px-4 py-3 rounded-lg bg-secondary border border-border 
                               text-foreground placeholder:text-muted-foreground font-mono text-sm
                               focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary
                               transition-colors"
                    />
                    {errors.name && (
                      <p className="mt-1 text-xs text-destructive font-mono">
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-mono text-muted-foreground mb-2"
                    >
                      <span className="text-accent">$</span> email
                    </label>
                    <input
                      {...register("email")}
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 rounded-lg bg-secondary border border-border 
                               text-foreground placeholder:text-muted-foreground font-mono text-sm
                               focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary
                               transition-colors"
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs text-destructive font-mono">
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-mono text-muted-foreground mb-2"
                    >
                      <span className="text-accent">$</span> message
                    </label>
                    <textarea
                      {...register("message")}
                      id="message"
                      rows={5}
                      placeholder="Your message..."
                      className="w-full px-4 py-3 rounded-lg bg-secondary border border-border 
                               text-foreground placeholder:text-muted-foreground font-mono text-sm
                               focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary
                               transition-colors resize-none"
                    />
                    {errors.message && (
                      <p className="mt-1 text-xs text-destructive font-mono">
                        {errors.message.message}
                      </p>
                    )}
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    className="w-full flex items-center justify-center gap-2 px-6 py-3 
                             bg-primary text-primary-foreground rounded-lg font-medium
                             hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed
                             transition-colors"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Send Message
                      </>
                    )}
                  </motion.button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
