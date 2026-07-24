"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import ProjectCard from "./ProjectCard";
import { projects } from "../../public/data/projects";

// Only the first 2 projects show up on the homepage.
// The rest live on the dedicated /projects page.
const featured = projects.slice(0, 2);

export default function ProjectsPreview() {
  return (
    <section className="relative py-4 md:py-8 bg-[#040508] overflow-hidden text-white w-full">
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[250px] sm:w-[300px] md:w-[500px] h-[250px] sm:h-[300px] md:h-[500px] bg-emerald-500/10 blur-[100px] md:blur-[120px] rounded-full" />
        <div className="absolute bottom-0 right-1/4 w-[250px] sm:w-[300px] md:w-[500px] h-[250px] sm:h-[300px] md:h-[500px] bg-cyan-500/10 blur-[100px] md:blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Header */}
        <div className="text-center mb-6 md:mb-10">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-4xl md:text-5xl font-extrabold mb-2"
          >
            Featured{" "}
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-500 bg-clip-text text-transparent">
              Projects
            </span>
          </motion.h2>

          <p className="max-w-2xl mx-auto text-gray-400 leading-relaxed text-sm sm:text-base md:text-lg px-2">
            A couple of my best full-stack builds. Explore the full list to
            see everything I've shipped.
          </p>
        </div>

        {/* Grid - only 2 cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start w-full">
          {featured.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>

        {/* Explore More button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center mt-10 md:mt-14"
        >
          <Link href="/projects">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="group flex items-center gap-2 rounded-2xl border border-white/10
                         bg-white/[0.03] px-7 py-4 text-sm sm:text-base font-semibold text-white
                         backdrop-blur-xl transition-all duration-300
                         hover:border-emerald-500/40 hover:bg-white/[0.06]"
            >
              Explore More Projects
              <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
