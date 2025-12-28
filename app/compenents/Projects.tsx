"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Sparkles, Code2, Zap, Layers } from "lucide-react";

/* =======================
   DATA
======================= */

type Project = {
    id: number;
    title: string;
    description: string;
    image: string;
    tech: string[];
    category: string;
    live: string;
};

const PROJECTS: Project[] = [
    {
        id: 1,
        title: "Gym Website",
        description: "Modern gym website with responsive design and smooth UI.",
        image: "/projects/gym-p.png",
        tech: ["HTML", "CSS", "JavaScript"],
        category: "Web App",
        live: "https://gymy.devaito.com/",
    },
    {
        id: 2,
        title: "Aluminium & Glass Website",
        description: "Business website for aluminium and glass services.",
        image: "/projects/alum-p.png",
        tech: ["React", "Tailwind CSS", "Framer Motion"],
        category: "Business",
        live: "https://web-site-alum.vercel.app/",
    },
    {
        id: 3,
        title: "Fashion E-commerce",
        description: "Online fashion store with modern product layout.",
        image: "/projects/fashion-p.png",
        tech: ["HTML", "CSS", "JavaScript"],
        category: "E-commerce",
        live: "https://fashion1.devaito.com/",
    },
    {
        id: 4,
        title: "House Real Estate Website",
        description: "Property showcase website for houses and real estate.",
        image: "/projects/house-p.png",
        tech: ["HTML", "CSS", "JavaScript"],
        category: "Web App",
        live: "https://homey.devaito.com/",
    },
    {
        id: 5,
        title: "Marketing Brand Website",
        description: "Professional marketing agency website.",
        image: "/projects/agency-p.png",
        tech: ["HTML", "CSS", "JavaScript"],
        category: "Web App",
        live: "https://agency.devaito.com/",
    },

    {
        id: 6,
        title: "Healthy Products E-commerce",
        description: "E-commerce platform for healthy and organic products.",
        image: "/projects/vita-p.png",
        tech: ["HTML", "CSS", "JavaScript"],
        category: "E-commerce",
        live: "https://vitastore.devaito.com/",
    },
    {
        id: 7,
        title: "Men & Women Fashion Store",
        description: "Fashion e-commerce website for men and women clothing.",
        image: "/projects/styly-p.png",
        tech: ["HTML", "CSS", "JavaScript"],
        category: "E-commerce",
        live: "https://styliq.devaito.com/",
    },

];

const CATEGORIES = ["All", "Web App", "E-commerce", "Business"];

/* =======================
   COMPONENT
======================= */

export default function Projects() {
    const [filter, setFilter] = useState("All");
    const [hoveredId, setHoveredId] = useState<number | null>(null);

    const filteredProjects =
        filter === "All"
            ? PROJECTS
            : PROJECTS.filter((project) => project.category === filter);

    return (
        <section className="min-h-screen bg-black text-white py-20 px-12"   
        style={{
        backgroundImage: `
          linear-gradient(rgba(244,114,182,0.05) 1px, transparent 1px),
          linear-gradient(90deg, rgba(244,114,182,0.05) 1px, transparent 1px)
        `,
        backgroundSize: "50px 50px",
      }}>
            <div className="max-w-6xl mx-auto">

                {/* ===== HEADER ===== */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/20 rounded-full px-6 py-2 mb-6">
                        <Sparkles className="w-5 h-5 text-purple-400" />
                        <span className="text-purple-300 font-medium">
                            Featured Work
                        </span>
                    </div>

                    <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                        Projects Portfolio
                    </h2>

                    <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                        A selection of websites and e-commerce projects I’ve built using modern web technologies.
                    </p>
                </motion.div>

                {/* ===== FILTERS ===== */}
                <div className="flex flex-wrap justify-center gap-3 mb-12">
                    {CATEGORIES.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setFilter(cat)}
                            className={`px-6 py-2 rounded-full text-sm font-medium transition-all
                ${filter === cat
                                    ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg"
                                    : "bg-slate-800/60 text-slate-300 hover:bg-slate-800 border border-slate-700"
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* ===== PROJECT GRID ===== */}
                <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <AnimatePresence>
                        {filteredProjects.map((project) => (
                            <motion.div
                                key={project.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.4 }}
                                onHoverStart={() => setHoveredId(project.id)}
                                onHoverEnd={() => setHoveredId(null)}
                                className="group relative bg-slate-800/40 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-700/50 hover:border-purple-500/50"
                            >
                                {/* IMAGE */}
                                <div className="relative h-48 overflow-hidden">
                                    <motion.img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover"
                                        animate={{ scale: hoveredId === project.id ? 1.1 : 1 }}
                                        transition={{ duration: 0.4 }}
                                    />

                                    {/* HOVER OVERLAY */}
                                    <motion.div
                                        animate={{ opacity: hoveredId === project.id ? 1 : 0 }}
                                        className="absolute inset-0 bg-black/70 flex items-center justify-center"
                                    >
                                        <a
                                            href={project.live}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-4 bg-purple-500 rounded-full hover:bg-purple-600 transition"
                                        >
                                            <ExternalLink className="w-6 h-6 text-white" />
                                        </a>
                                    </motion.div>
                                </div>

                                {/* CONTENT */}
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold mb-2 group-hover:text-purple-400">
                                        {project.title}
                                    </h3>
                                    <p className="text-sm text-slate-400 mb-4 line-clamp-2">
                                        {project.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2">
                                        {project.tech.map((tech) => (
                                            <span
                                                key={tech}
                                                className="px-3 py-1 text-xs rounded-lg bg-slate-700/60 border border-slate-600/50"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>


            </div>
        </section>
    );
}
