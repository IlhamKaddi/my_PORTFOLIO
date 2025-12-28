"use client";

import React from "react";
import Image from "next/image";

interface Skill {
  name: string;
  image: string;
  size: "sm" | "md" | "lg" | "xl";
  position: { top: string; left: string };
}

const Skills: React.FC = () => {
  const skills: Skill[] = [
    { name: "HTML", image: "/skills/r-html.png", size: "md", position: { top: "20%", left: "75%" } },
    { name: "CSS", image: "/skills/r-css.png", size: "md", position: { top: "35%", left: "85%" } },
    { name: "JavaScript", image: "/skills/r-js.png", size: "xl", position: { top: "35%", left: "50%" } },
    { name: "React", image: "/skills/r-react.png", size: "lg", position: { top: "65%", left: "35%" } },
    { name: "TypeScript", image: "/skills/r-ts.png", size: "md", position: { top: "50%", left: "70%" } },
    { name: "Next.js", image: "/skills/r-nextJS.png", size: "lg", position: { top: "70%", left: "75%" } },
    { name: "Bootstrap", image: "/skills/r-bootstrap.png", size: "md", position: { top: "45%", left: "25%" } },
    { name: "Git", image: "/skills/r-git.png", size: "md", position: { top: "60%", left: "8%" } },
    { name: "Tailwind", image: "/skills/r-tail.png", size: "md", position: { top: "15%", left: "55%" } },
    { name: "Framer Motion", image: "/skills/r-motion.png", size: "md", position: { top: "80%", left: "60%" } },
  ];

  const decorativeBalls = [
    { size: "md", top: "10%", left: "45%" },
    { size: "sm", top: "25%", left: "65%" },
    { size: "md", top: "5%", left: "85%" },
    { size: "sm", top: "55%", left: "55%" },
    { size: "md", top: "75%", left: "15%" },
    { size: "sm", top: "80%", left: "60%" },
  ];

  const sizeClasses = {
    sm: "w-14 h-14",
    md: "w-20 h-20",
    lg: "w-28 h-28",
    xl: "w-36 h-36",
  };

  const ballSizeClasses = {
    sm: "w-8 h-8",
    md: "w-16 h-16",
  };

  return (
    <div
      className="relative w-full min-h-screen bg-black overflow-hidden"
      style={{
        backgroundImage: `
          linear-gradient(rgba(244,114,182,0.05) 1px, transparent 1px),
          linear-gradient(90deg, rgba(244,114,182,0.05) 1px, transparent 1px)
        `,
        backgroundSize: "50px 50px",
      }}
    >
      {/* Header */}
      <div className="absolute top-8 left-26 z-20">
        <p className="text-gray-400 text-sm mb-1">About my</p>
        <h1 className="text-white text-3xl font-bold">Skills</h1>
      </div>

      {/* Connection Lines */}
      <svg className="absolute inset-0 w-full h-full z-[1]">
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(244,114,182,0.4)" />
            <stop offset="100%" stopColor="rgba(244,114,182,0.1)" />
          </linearGradient>
        </defs>

        {skills.map((skill, index) => (
          <line
            key={index}
            x1="50%"
            y1="40%"
            x2={skill.position.left}
            y2={skill.position.top}
            stroke="url(#lineGradient)"
            strokeWidth="1"
            opacity="0.5"
          />
        ))}
      </svg>

      {/* Decorative Balls */}
      {decorativeBalls.map((ball, index) => (
        <div
          key={index}
          className={`absolute ${ballSizeClasses[ball.size as "sm" | "md"]} bg-transparent border  border-b-pink-300 rounded-full  animate-pulse`}
          style={{
            top: ball.top,
            left: ball.left,
            transform: "translate(-50%, -50%)",
            animationDelay: `${index * 0.4}s`,
            zIndex: 2,
          }}
        />
      ))}

      {/* Skill Bubbles */}
      {skills.map((skill, index) => (
        <div
          key={skill.name}
          className={`absolute ${sizeClasses[skill.size]} rounded-full bg-black/40 backdrop-blur-md shadow-2xl flex items-center justify-center transition-transform hover:scale-110`}
          style={{
            top: skill.position.top,
            left: skill.position.left,
            transform: "translate(-50%, -50%)",
            zIndex: 10,
            animation: `float ${3 + index * 0.4}s ease-in-out infinite`,
          }}
        >
          <Image
            src={skill.image}
            alt={skill.name}
            fill
            className="object-contain rounded-full p-4"
            priority={skill.size === "xl"}
          />
        </div>
      ))}

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translate(-50%, -50%) translateY(0);
          }
          50% {
            transform: translate(-50%, -50%) translateY(-12px);
          }
        }
      `}</style>
    </div>
  );
};

export default Skills;
