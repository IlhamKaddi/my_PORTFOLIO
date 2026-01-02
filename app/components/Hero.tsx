"use client";
import React, { useState, useEffect } from "react";
import { Mail, Github, Linkedin, Code2, Sparkles } from "lucide-react";
import { motion, useMotionValue, useTransform, useSpring, type Variants } from "framer-motion";

interface MousePosition {
  x: number;
  y: number;
}

interface Skill {
  name: string;
  delay: number;
}

interface Particle {
  id: number;
  left: string;
  top: string;
  duration: number;
  delay: number;
}

const Hero: React.FC = () => {
  const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 });
  const [windowSize, setWindowSize] = useState(() => ({
    width: typeof window !== "undefined" ? window.innerWidth : 0,
    height: typeof window !== "undefined" ? window.innerHeight : 0,
  }));

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  const skills: Skill[] = [
    { name: "React", delay: 0 },
    { name: "TypeScript", delay: 0.2 },
    { name: "Next.js", delay: 0.4 },
    { name: "Tailwind", delay: 0.6 },
    { name: "Framer Motion", delay: 0.8 },
  ];

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useTransform(
    useSpring(mouseY, { stiffness: 300, damping: 30 }),
    [-300, 300],
    [15, -15]
  );

  const rotateY = useTransform(
    useSpring(mouseX, { stiffness: 300, damping: 30 }),
    [-300, 300],
    [-15, 15]
  );

  useEffect(() => {
    if (windowSize.width > 0) {
      mouseX.set((mousePosition.x - windowSize.width / 2) / 20);
      mouseY.set((mousePosition.y - windowSize.height / 2) / 20);
    }
  }, [mousePosition, windowSize, mouseX, mouseY]);

  const [particles] = useState<Particle[]>(() =>
    Array.from({ length: 20 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      duration: 3 + Math.random() * 2,
      delay: Math.random() * 2,
    }))
  );



  const socials = [
    { Icon: Github, link: "https://github.com/IlhamKaddi" },
    { Icon: Linkedin, link: "https://www.linkedin.com/in/ilhame-kaddi-ab2267244/" },
 
  ];


  return (
    <div className="relative bg-black overflow-hidden py-8">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-20 hidden md:block">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(248, 92, 112, 0.1) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(248, 92, 112, 0.1) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Gradient Orbs */}
      <motion.div
        className="absolute top-20 left-20 w-96 h-96 bg-[#f85c70] rounded-full filter blur-[120px] opacity-20 hidden md:block"
        animate={{ x: [0, 50, 0], y: [0, 30, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500 rounded-full filter blur-[120px] opacity-20 hidden md:block"
        animate={{ x: [0, -50, 0], y: [0, -30, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Floating Particles */}
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute w-1 h-1 bg-white rounded-full"
          style={{ left: p.left, top: p.top }}
          animate={{ y: [0, -30, 0], opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: p.duration, repeat: Infinity, delay: p.delay }}
        />
      ))}

      <div className="relative container mx-auto px-6 md:px-14 py-2 md:py-12 flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
          {/* Left Content */}
          <motion.div
            className="space-y-6 md:space-y-8 z-10 order-2 lg:order-1"
            variants={containerVariants}
            initial="hidden"
            animate="show"
          >
            {/* Badge */}
            <motion.div variants={itemVariants}>
              <motion.div
                className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2"
                whileHover={{ scale: 1.05 }}
              >
                <Sparkles className="w-4 h-4 text-[#f85c70]" />
                <span className="text-white/80 text-sm">Available for freelance</span>
              </motion.div>
            </motion.div>

            {/* Main Heading */}
            <motion.div variants={itemVariants} className="space-y-2 sm:space-y-3">
              <p className="text-white/60 text-base sm:text-lg font-medium">
                Hey, I am <span className="text-[#ebb1b9] font-bold">ILHAME KADDI</span>
              </p>
              <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold text-white leading-tight">
                <span className="block">Creative</span>
                <span className="block bg-gradient-to-r from-[#f85c70] to-purple-500 bg-clip-text text-transparent">
                  Web Developer
                </span>
              </h1>
            </motion.div>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-gray-400 text-sm sm:text-base md:text-lg max-w-md leading-relaxed"
            >
              Crafting beautiful, responsive, and interactive web experiences with modern technologies and pixel-perfect animations.
            </motion.p>

            {/* Skills Pills */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <motion.span
                  key={skill.name}
                  className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-white/70 text-sm backdrop-blur-sm"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1 + skill.delay }}
                  whileHover={{
                    scale: 1.1,
                    backgroundColor: "rgba(248, 92, 112, 0.2)",
                    borderColor: "rgba(248, 92, 112, 0.5)",
                  }}
                >
                  {skill.name}
                </motion.span>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4 items-center mt-4"
            >
              <motion.a
                href="#contact"
                className="bg-[#f85c70] hover:bg-[#ff5269] text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-[#f85c70]/50 relative overflow-hidden group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">Hire me</span>
                <motion.div
                  className="absolute inset-0 bg-white/20"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.5 }}
                />
              </motion.a>

              <motion.a
                href="mailto:ilhamkaddi2004@gmail.com"
                className="border-2 border-white/30 hover:border-[#f85c70] text-white px-6 py-3 rounded-full transition-all duration-300 flex items-center justify-center backdrop-blur-sm"
                whileHover={{ scale: 1.05, borderColor: "#f85c70" }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail className="w-5 h-5" />
              </motion.a>

              {/* Social Icons */}
              <div className="flex gap-3 ml-0 sm:ml-2">
                {socials.map(({ Icon, link }, index) => (
                  <motion.a
                    key={index}
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-[#f85c70] transition-all backdrop-blur-sm"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Icon className="w-4 h-4" />
                  </motion.a>
                ))}

              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Profile Image */}
          <div className="relative flex justify-center lg:justify-end items-center order-1 lg:order-2">
            <img
              src="/profile (2).png"
              alt="Profile"
              className="w-full max-w-[350px] md:max-w-[400px] h-auto rounded-2xl object-cover -mt-16 md:-mt-32"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
