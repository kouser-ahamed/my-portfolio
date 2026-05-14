"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { FiExternalLink, FiGithub } from "react-icons/fi";

const projects = [
  {
    title: "SunCart",
    description: "A modern and responsive summer-themed e-commerce web application that demonstrates authentication, protected routing, product browsing, and user profile management.",
    image: "/project1.jpg", // Replace with your image paths
    tech: ["Next.js", "Tailwind CSS", "Firebase", "Context API", "Redux Toolkit"],
    live: "#",
    github: "#"
  },
  {
    title: "GitHub Issues Tracker",
    description: "A web application that lets users browse, search, and filter GitHub-style issues, view their status, and explore data in a modal.",
    image: "/project2.jpg",
    tech: ["HTML5", "Tailwind CSS", "Daisy UI", "JavaScript"],
    live: "#",
    github: "#"
  },
  {
    title: "KeenKeeper",
    description: "It acts as a personal relationship manager, helping users track interactions, stay connected with friends, and view communication history with basic analytics.",
    image: "/project3.jpg",
    tech: ["Next.js", "Tailwind CSS", "React-Hook-Form", "TanStack"],
    live: "#",
    github: "#"
  },
  {
    title: "English Janala",
    description: "A vocabulary learning web app that helps users learn English words through structured lessons, with features like pronunciation, search, and saved words for practice.",
    image: "/project4.jpg",
    tech: ["HTML5", "Tailwind CSS", "Daisy UI", "React JS", "REST API"],
    live: "#",
    github: "#"
  }
];

export default function Projects() {
  return (
    <section className="py-20 bg-black text-white">
      <div className="container mx-auto px-6 lg:px-20">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-green-500 mx-auto rounded-full" />
        </div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#0f1115] border border-white/5 rounded-3xl overflow-hidden group hover:border-white/20 transition-all duration-300"
            >
              {/* Image Preview Container */}
              <div className="relative aspect-video overflow-hidden bg-white/5">
                {/* Simulated Image - Replace with <Image /> when files are ready */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20" />
                <div className="flex items-center justify-center h-full text-gray-700 font-bold italic">
                  Preview: {project.title}
                </div>
                
                {/* Pagination Dots Overlay from image_91b6a2.jpg */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                  <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
                  <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
                </div>
              </div>

              {/* Content Section */}
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4 group-hover:text-green-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-3">
                  {project.description}
                </p>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((t) => (
                    <span key={t} className="px-3 py-1 bg-white/5 border border-white/10 rounded text-[10px] uppercase tracking-wider text-gray-400">
                      {t}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4">
                  <a 
                    href={project.live}
                    className="flex-1 flex items-center justify-center gap-2 py-3 bg-white text-black text-sm font-bold rounded-xl hover:bg-gray-200 transition-all"
                  >
                    <FiExternalLink size={16} /> Live System
                  </a>
                  <a 
                    href={project.github}
                    className="flex-1 flex items-center justify-center gap-2 py-3 bg-white/5 border border-white/10 text-white text-sm font-bold rounded-xl hover:bg-white/10 transition-all"
                  >
                    <FiGithub size={16} /> Source Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}