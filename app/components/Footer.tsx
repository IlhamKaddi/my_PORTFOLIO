"use client";
import React from "react";
import { motion, type Variants } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  Code2,
  Sparkles,
  MessageCircle,
} from "lucide-react";
import Image from "next/image";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  /* ---------------- VARIANTS ---------------- */

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: {
      y: 20,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  /* ---------------- SOCIAL LINKS ---------------- */

  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: MessageCircle, href: "#", label: "WhatsApp" },
    { icon: Mail, href: "#", label: "Email" },
  ];

  return (
    <footer className="relative bg-black text-white overflow-hidden border-t border-t-fuchsia-500 ">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-1/2 -left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute -bottom-1/2 -right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center space-y-8"
        >
          {/* Brand */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col items-center text-center"
          >
            <div className="flex items-center gap-2 mb-4">
              <Image src="/logoo-removebg-preview.png" alt="Logo" width={150} height={150} />
            </div>

            <p className="text-slate-400 max-w-md leading-relaxed">
              Crafting beautiful digital experiences with modern web technologies
            </p>
          </motion.div>

          {/* Social Icons */}
          <motion.div variants={itemVariants} className="flex gap-4">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                aria-label={social.label}
                className="w-12 h-12 rounded-lg bg-slate-800/50 backdrop-blur-sm flex items-center justify-center border border-slate-700/50 hover:border-blue-400/50 transition-colors"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <social.icon className="w-5 h-5 text-slate-400 hover:text-blue-400 transition-colors" />
              </motion.a>
            ))}
          </motion.div>

          {/* Copyright */}
          <motion.div
            variants={itemVariants}
            className="pt-8 border-t border-slate-800 w-full text-center"
          >
            <p className="text-slate-400 text-sm">
              © {currentYear} IlhameKaddi. All rights reserved. Built with ❤️
            </p>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
