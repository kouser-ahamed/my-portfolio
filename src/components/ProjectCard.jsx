"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

export default function ProjectCard({ project, index = 0 }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % project.images.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [project.images.length]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="group relative rounded-[22px] overflow-hidden
                 border border-white/10
                 bg-white/[0.04]
                 backdrop-blur-xl
                 shadow-[0_10px_50px_rgba(0,0,0,0.35)]
                 hover:border-cyan-400/40
                 hover:shadow-[0_20px_80px_rgba(34,211,238,0.14)]
                 transition-all duration-500 w-full box-border flex flex-col"
    >
      {/* Premium Glow */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-emerald-500/5 to-purple-500/10 blur-3xl" />
      </div>

      {/* Image Section */}
      <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#0b0d11]">
        <AnimatePresence initial={false}>
          <motion.div
            key={current}
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "tween", ease: "linear", duration: 0.45 }}
            className="absolute inset-0 w-full h-full"
          >
            <Image
              src={project.images[current]}
              alt={project.title}
              fill
              priority={index < 2}
              className="object-contain p-1 sm:p-2"
            />
          </motion.div>
        </AnimatePresence>

        {/* LIVE Badge */}
        <div className="absolute top-3 left-3 z-30">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/50 backdrop-blur-md border border-white/10">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400" />
            </span>
            <span className="text-[11px] sm:text-xs font-semibold tracking-wider text-emerald-300">
              LIVE
            </span>
          </div>
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-[#05060a] via-transparent to-transparent pointer-events-none" />

        {/* Dots */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {project.images.map((_, imgIndex) => (
            <motion.div
              key={imgIndex}
              animate={{ width: current === imgIndex ? 20 : 6 }}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                current === imgIndex ? "bg-emerald-400" : "bg-white/30"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Content Section */}
      <div className="relative z-10 p-4 sm:p-5 md:p-5 lg:p-6 box-border flex flex-col flex-1">
        <h3 className="text-xl sm:text-2xl font-bold mb-3 group-hover:text-cyan-300 transition-colors duration-300">
          {project.title}
        </h3>

        <p className="text-gray-400 leading-relaxed mb-5 text-sm sm:text-[15px] line-clamp-3">
          {project.description}
        </p>

        {/* Main Tech first, then the rest */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.mainTech.map((t) => (
            <span
              key={t}
              className="px-2.5 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/30
                         text-[10px] sm:text-[11px] tracking-wider uppercase text-emerald-300"
            >
              {t}
            </span>
          ))}
          {project.tech
            .filter((t) => !project.mainTech.includes(t))
            .slice(0, 3)
            .map((t) => (
              <span
                key={t}
                className="px-2.5 py-1 rounded-lg bg-white/[0.05] border border-white/10
                           text-[10px] sm:text-[11px] tracking-wider uppercase text-gray-300"
              >
                {t}
              </span>
            ))}
        </div>

        <Link href={`/projects/${project.slug}`} className="mt-auto w-full">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.96 }}
            className="w-full flex items-center justify-center gap-2
                       py-2.5 sm:py-3 rounded-xl
                       bg-gradient-to-r from-emerald-400 to-cyan-500
                       text-black text-sm sm:text-base font-bold
                       shadow-[0_10px_30px_rgba(16,185,129,0.25)]"
          >
            View Details
            <FiArrowRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </motion.button>
        </Link>
      </div>
    </motion.div>
  );
}
