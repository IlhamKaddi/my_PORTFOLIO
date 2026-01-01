"use client";
import React, { useRef } from "react";
import { motion, useInView, Variants, useMotionValue, useTransform } from "framer-motion";


// tilt card compenent
type TiltCardProps = {
  children: React.ReactNode;
};

const TiltCard = ({ children }: TiltCardProps) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-50, 50], [8, -8]);
  const rotateY = useTransform(x, [-50, 50], [-8, 8]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const posX = e.clientX - rect.left - rect.width / 2;
    const posY = e.clientY - rect.top - rect.height / 2;

    x.set(posX);
    y.set(posY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      style={{
        perspective: 1000,
        rotateX,
        rotateY,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="h-full"
    >
      {children}
    </motion.div>
  );
};


const About = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const highlights = [
    { icon: "🎯", title: "User-Centric", description: "Creating intuitive interfaces that users love" },
    { icon: "⚡", title: "Clean Code", description: "Writing maintainable and scalable solutions" },
    { icon: "🎨", title: "Pixel Perfect", description: "Attention to detail in every design element" },
    { icon: "🚀", title: "Modern Stack", description: "Leveraging cutting-edge technologies" },
  ];

  /* -------------------- ANIMATION VARIANTS -------------------- */

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  // up and down floating effect
  const floatingVariants: Variants = {
    animate: {
      y: [0, -8, 0],
      transition: {
        duration: 4,
        ease: "easeInOut",
        repeat: Infinity,
      },
    },
  };
  const cardVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1],
      },
    },
    animate: floatingVariants.animate,
  };



  /* ------------------------------------------------------------ */

  return (
    <section
      ref={ref}
      className=" bg-black py-8 md:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      style={{
        backgroundImage: `
          linear-gradient(rgba(248, 92, 112, 0.05) 1px, transparent 1px),
          linear-gradient(90deg, rgba(248, 92, 112, 0.05) 1px, transparent 1px)
        `,
        backgroundSize: "50px 50px",
      }}
    >
      {/* Animated Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.3, 1], rotate: [0, 180, 360] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          style={{
            background: "radial-gradient(circle, rgba(248, 92, 112, 0.1) 0%, rgba(248, 92, 112, 0.05) 50%, transparent 100%)",
          }}
          className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ scale: [1.3, 1, 1.3], rotate: [360, 180, 0] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          style={{
            background: "radial-gradient(circle, rgba(255, 122, 138, 0.1) 0%, rgba(248, 92, 112, 0.05) 50%, transparent 100%)",
          }}
          className="absolute bottom-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-16"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center space-y-6">
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
              transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
              className="inline-block"
            >
              <span
                className="px-5 py-2 rounded-full text-sm font-semibold backdrop-blur-sm"
                style={{
                  background: "linear-gradient(to right, rgba(248, 92, 112, 0.1), rgba(248, 92, 112, 0.15))",
                  border: "1px solid rgba(248, 92, 112, 0.2)",
                  color: "#f85c70",
                }}
              >
                ABOUT ME
              </span>
            </motion.div>

            <h2 className="text-3xl sm:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="block bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
                Hi, I m a Front-End Developer
              </span>
              <span
                className="block mt-2 block bg-gradient-to-r from-[#f85c70] to-purple-500 bg-clip-text text-transparent"
              
              >
                Who Loves to Create
              </span>
            </h2>

            <motion.p
              variants={itemVariants}
              className="text-xl sm:text-2xl text-slate-400 max-w-3xl mx-auto leading-relaxed"
            >
              Passionate about crafting beautiful, functional, and user-friendly web experiences that make a difference.
            </motion.p>
          </motion.div>

          {/* Highlights */}
          <motion.div variants={containerVariants} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {highlights.map((item, index) => (
              <TiltCard key={item.title}>
                <motion.div
                  variants={cardVariants}
                  initial="hidden"
                  animate={isInView ? ["visible", "animate"] : "hidden"}
                  whileHover={{ scale: 1.07 }}
                  className="bg-slate-900/50 border rounded-2xl p-6 backdrop-blur-sm hover:border-[#f85c70]/50 transition-colors duration-300"
                  style={{ borderColor: "rgb(51, 65, 85)" }}
                >

                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
                    transition={{ delay: index * 0.1 + 0.5, type: "spring", bounce: 0.5 }}
                    className="text-5xl mb-4"
                  >
                    {item.icon}
                  </motion.div>
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-slate-400 text-sm">{item.description}</p>
                </motion.div>
              </TiltCard>
            ))}

          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;