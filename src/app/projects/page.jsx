"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FiExternalLink, FiGithub } from "react-icons/fi";

const projects = [
  {
    title: "BinaryBooks",

    description:
      "A modern full-stack online book borrowing platform designed to provide users with a seamless digital library experience through smart book exploration, secure authentication, protected borrowing workflows, and responsive UI design.",

    images: [
      "/assets/binarybooks/im-1.png",
      "/assets/binarybooks/im-2.png",
      "/assets/binarybooks/im-3.png",
    ],

    tech: [
      "Next.js",
      "React.js",
      "Tailwind CSS",
      "HeroUI",
      "MongoDB",
      "BetterAuth",
      "SwiperJS",
      "React Toastify",
    ],

    live: "https://binary-books.vercel.app/",
    github: "https://github.com/kouser-ahamed/binary-books",
  },
];

export default function Projects() {
  const [currentImages, setCurrentImages] = useState(
    projects.map(() => 0)
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImages((prev) =>
        prev.map((imgIndex, projectIndex) => {
          const totalImages = projects[projectIndex].images.length;

          return (imgIndex + 1) % totalImages;
        })
      );
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-5 bg-[#040508] overflow-hidden text-white">

      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-emerald-500/10 blur-[160px] rounded-full" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-cyan-500/10 blur-[160px] rounded-full" />
      </div>

      <div className="container relative z-10 mx-auto px-6 lg:px-20">

        {/* Header */}
        <div className="text-center mb-5">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-extrabold mb-6"
          >
            Featured{" "}
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-500 bg-clip-text text-transparent">
              Projects
            </span>
          </motion.h2>

          <p className="max-w-2xl mx-auto text-gray-400 leading-relaxed text-lg">
            Modern, scalable and visually polished full-stack applications
            crafted with performance and premium user experience in mind.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-12">

          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.5 }}
              className="group relative rounded-[34px] overflow-hidden
                         border border-white/10
                         bg-white/[0.04]
                         backdrop-blur-2xl
                         shadow-[0_20px_80px_rgba(0,0,0,0.45)]
                         hover:border-cyan-400/40
                         hover:shadow-[0_25px_100px_rgba(34,211,238,0.18)]
                         transition-all duration-500"
            >

              {/* Premium Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700">
                <div
                  className="absolute inset-0
                             bg-gradient-to-br
                             from-cyan-500/10
                             via-emerald-500/5
                             to-purple-500/10
                             blur-3xl"
                />
              </div>

              {/* Image Section */}
              <div className="relative aspect-[16/9] overflow-hidden bg-[#0b0d11]">

                <AnimatePresence initial={false}>

                  <motion.div
                    key={currentImages[index]}
                    initial={{ x: "100%" }}
                    animate={{ x: 0 }}
                    exit={{ x: "-100%" }}
                    transition={{
                      type: "tween",
                      ease: "linear",
                      duration: 0.5,
                    }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={project.images[currentImages[index]]}
                      alt={project.title}
                      fill
                      priority
                      className="object-contain p-2"
                    />
                  </motion.div>

                </AnimatePresence>

                {/* LIVE Badge */}
                <div className="absolute top-4 left-4 z-30">
                  <div
                    className="flex items-center gap-2 px-4 py-2 rounded-full
                               bg-black/50 backdrop-blur-md
                               border border-white/10"
                  >

                    {/* Animated Dot */}
                    <span className="relative flex h-3 w-3">

                      {/* Ping */}
                      <span
                        className="animate-ping absolute inline-flex h-full w-full rounded-full
                                   bg-emerald-400 opacity-75"
                      />

                      {/* Solid Dot */}
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-400" />

                    </span>

                    {/* Text */}
                    <span className="text-sm font-semibold tracking-wide text-emerald-300">
                      LIVE
                    </span>

                  </div>
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#05060a] via-transparent to-transparent" />

                {/* Dots */}
                <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                  {project.images.map((_, imgIndex) => (
                    <motion.div
                      key={imgIndex}
                      animate={{
                        width:
                          currentImages[index] === imgIndex ? 26 : 8,
                      }}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        currentImages[index] === imgIndex
                          ? "bg-emerald-400"
                          : "bg-white/30"
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Content */}
              <div className="relative z-10 p-8">

                {/* Title */}
                <h3 className="text-3xl font-bold mb-4 group-hover:text-cyan-300 transition-colors duration-300">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 leading-relaxed mb-8">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-3 mb-8">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-4 py-2 rounded-xl
                                 bg-white/[0.05]
                                 border border-white/10
                                 text-xs tracking-widest uppercase
                                 text-gray-300
                                 hover:border-cyan-400/30
                                 hover:text-cyan-300
                                 hover:bg-cyan-500/10
                                 transition-all duration-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">

                  {/* Live Preview */}
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1"
                  >
                    <motion.button
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.96 }}
                      className="w-full flex items-center justify-center gap-2
                                 py-3 rounded-2xl
                                 bg-gradient-to-r from-emerald-400 to-cyan-500
                                 text-black font-bold
                                 shadow-[0_10px_40px_rgba(16,185,129,0.35)]"
                    >
                      <FiExternalLink size={18} />
                      Live Preview
                    </motion.button>
                  </a>

                  {/* GitHub */}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1"
                  >
                    <motion.button
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.96 }}
                      className="w-full flex items-center justify-center gap-2
                                 py-3 rounded-2xl
                                 bg-white/[0.05]
                                 border border-white/10
                                 text-white font-semibold
                                 hover:bg-white/[0.09]
                                 hover:border-cyan-400/30
                                 transition-all duration-300"
                    >
                      <FiGithub size={18} />
                      Source Code
                    </motion.button>
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