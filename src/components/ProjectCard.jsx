// "use client";

// import { useEffect, useState } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { motion, AnimatePresence } from "framer-motion";
// import { FiArrowRight } from "react-icons/fi";

// export default function ProjectCard({ project, index = 0 }) {
//   const [current, setCurrent] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrent((prev) => (prev + 1) % project.images.length);
//     }, 3500);
//     return () => clearInterval(interval);
//   }, [project.images.length]);

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 60 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       whileHover={{ y: -6 }}
//       transition={{ duration: 0.4, delay: index * 0.05 }}
//       className="group relative rounded-[22px] overflow-hidden
//                  border border-white/10
//                  bg-white/[0.04]
//                  backdrop-blur-xl
//                  shadow-[0_10px_50px_rgba(0,0,0,0.35)]
//                  hover:border-cyan-400/40
//                  hover:shadow-[0_20px_80px_rgba(34,211,238,0.14)]
//                  transition-all duration-500 w-full box-border flex flex-col"
//     >
//       {/* Premium Glow */}
//       <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 pointer-events-none">
//         <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-emerald-500/5 to-purple-500/10 blur-3xl" />
//       </div>

//       {/* Image Section */}
//       <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#0b0d11]">
//         <AnimatePresence initial={false}>
//           <motion.div
//             key={current}
//             initial={{ x: "100%" }}
//             animate={{ x: 0 }}
//             exit={{ x: "-100%" }}
//             transition={{ type: "tween", ease: "linear", duration: 0.45 }}
//             className="absolute inset-0 w-full h-full"
//           >
//             <Image
//               src={project.images[current]}
//               alt={project.title}
//               fill
//               priority={index < 2}
//               className="object-contain p-1 sm:p-2"
//             />
//           </motion.div>
//         </AnimatePresence>

//         {/* LIVE Badge */}
//         <div className="absolute top-3 left-3 z-30">
//           <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/50 backdrop-blur-md border border-white/10">
//             <span className="relative flex h-2.5 w-2.5">
//               <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
//               <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400" />
//             </span>
//             <span className="text-[11px] sm:text-xs font-semibold tracking-wider text-emerald-300">
//               LIVE
//             </span>
//           </div>
//         </div>

//         <div className="absolute inset-0 bg-gradient-to-t from-[#05060a] via-transparent to-transparent pointer-events-none" />

//         {/* Dots */}
//         <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-20">
//           {project.images.map((_, imgIndex) => (
//             <motion.div
//               key={imgIndex}
//               animate={{ width: current === imgIndex ? 20 : 6 }}
//               className={`h-1.5 rounded-full transition-all duration-300 ${
//                 current === imgIndex ? "bg-emerald-400" : "bg-white/30"
//               }`}
//             />
//           ))}
//         </div>
//       </div>

//       {/* Content Section */}
//       <div className="relative z-10 p-4 sm:p-5 md:p-5 lg:p-6 box-border flex flex-col flex-1">
//         <h3 className="text-xl sm:text-2xl font-bold mb-3 group-hover:text-cyan-300 transition-colors duration-300">
//           {project.title}
//         </h3>

//         <p className="text-gray-400 leading-relaxed mb-5 text-sm sm:text-[15px] line-clamp-3">
//           {project.description}
//         </p>

//         {/* Main Tech first, then the rest */}
//         <div className="flex flex-wrap gap-2 mb-6">
//           {project.mainTech.map((t) => (
//             <span
//               key={t}
//               className="px-2.5 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/30
//                          text-[10px] sm:text-[11px] tracking-wider uppercase text-emerald-300"
//             >
//               {t}
//             </span>
//           ))}
//           {project.tech
//             .filter((t) => !project.mainTech.includes(t))
//             .slice(0, 3)
//             .map((t) => (
//               <span
//                 key={t}
//                 className="px-2.5 py-1 rounded-lg bg-white/[0.05] border border-white/10
//                            text-[10px] sm:text-[11px] tracking-wider uppercase text-gray-300"
//               >
//                 {t}
//               </span>
//             ))}
//         </div>

//         <Link href={`/projects/${project.slug}`} className="mt-auto w-full">
//           <motion.button
//             whileHover={{ scale: 1.02 }}
//             whileTap={{ scale: 0.96 }}
//             className="w-full flex items-center justify-center gap-2
//                        py-2.5 sm:py-3 rounded-xl
//                        bg-gradient-to-r from-emerald-400 to-cyan-500
//                        text-black text-sm sm:text-base font-bold
//                        shadow-[0_10px_30px_rgba(16,185,129,0.25)]"
//           >
//             View Details
//             <FiArrowRight
//               size={16}
//               className="transition-transform duration-300 group-hover:translate-x-1"
//             />
//           </motion.button>
//         </Link>
//       </div>
//     </motion.div>
//   );
// }



















"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiArrowRight,
  FiImage,
  FiLayers,
} from "react-icons/fi";

export default function ProjectCard({ project, index = 0 }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (project.images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrent(
        (previous) =>
          (previous + 1) % project.images.length
      );
    }, 3500);

    return () => clearInterval(interval);
  }, [project.images.length]);

  const additionalTech = project.tech
    .filter(
      (technology) =>
        !project.mainTech.includes(technology)
    )
    .slice(0, 3);

  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 60,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.15,
      }}
      whileHover={{
        y: -8,
      }}
      transition={{
        duration: 0.45,
        delay: index * 0.05,
      }}
      className="group relative flex h-full w-full flex-col overflow-hidden rounded-[26px] bg-gradient-to-br from-white/15 via-white/[0.05] to-cyan-500/15 p-px shadow-[0_14px_55px_rgba(0,0,0,0.4)] transition-all duration-500 hover:shadow-[0_24px_90px_rgba(34,211,238,0.15)]"
    >
      {/* Main Card */}
      <div className="relative flex h-full w-full flex-col overflow-hidden rounded-[25px] border border-white/[0.04] bg-[#080a0e]/95 backdrop-blur-xl">
        {/* Premium Hover Glow */}
        <div className="pointer-events-none absolute inset-0 z-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100">
          <div className="absolute -left-20 top-1/4 h-56 w-56 rounded-full bg-emerald-500/10 blur-[90px]" />

          <div className="absolute -right-20 bottom-1/4 h-56 w-56 rounded-full bg-cyan-500/10 blur-[90px]" />
        </div>

        {/* Top Accent */}
        <div className="pointer-events-none absolute left-1/2 top-0 z-20 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        {/* Image Section */}
        <div className="relative p-2 sm:p-2.5">
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-[18px] border border-white/10 bg-[#0b0d11] shadow-[0_10px_35px_rgba(0,0,0,0.35)] sm:rounded-[20px]">
            <AnimatePresence
              initial={false}
              mode="popLayout"
            >
              <motion.div
                key={current}
                initial={{
                  x: "100%",
                  opacity: 0.4,
                  scale: 1.015,
                }}
                animate={{
                  x: 0,
                  opacity: 1,
                  scale: 1,
                }}
                exit={{
                  x: "-100%",
                  opacity: 0.4,
                  scale: 0.99,
                }}
                transition={{
                  type: "tween",
                  ease: "easeInOut",
                  duration: 0.5,
                }}
                className="absolute inset-0"
              >
                <Image
                  src={project.images[current]}
                  alt={`${project.title} screenshot ${
                    current + 1
                  }`}
                  fill
                  priority={index < 2}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="rounded-[16px] object-contain p-1.5 transition-transform duration-700 group-hover:scale-[1.015] sm:rounded-[18px] sm:p-2"
                />
              </motion.div>
            </AnimatePresence>

            {/* Image Overlay */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-[#05060a]/80" />

            <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-black/20 to-transparent" />

            <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-black/20 to-transparent" />

            {/* Live Badge */}
            <div className="absolute left-3 top-3 z-30">
              <div className="flex items-center gap-2 rounded-full border border-white/10 bg-black/55 px-3 py-1.5 shadow-lg backdrop-blur-xl">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70" />

                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
                </span>

                <span className="text-[10px] font-semibold tracking-[0.16em] text-emerald-300 sm:text-[11px]">
                  LIVE
                </span>
              </div>
            </div>

            {/* Image Counter */}
            <div className="absolute right-3 top-3 z-30">
              <div className="flex items-center gap-1.5 rounded-full border border-white/10 bg-black/55 px-3 py-1.5 font-mono text-[10px] text-gray-300 shadow-lg backdrop-blur-xl sm:text-[11px]">
                <FiImage className="text-cyan-400" />

                <span>
                  {String(current + 1).padStart(2, "0")}
                </span>

                <span className="text-gray-600">/</span>

                <span>
                  {String(project.images.length).padStart(
                    2,
                    "0"
                  )}
                </span>
              </div>
            </div>

            {/* Slider Dots */}
            {project.images.length > 1 && (
              <div className="absolute bottom-3 left-1/2 z-30 max-w-[80%] -translate-x-1/2 rounded-full border border-white/10 bg-black/45 px-3 py-2 shadow-lg backdrop-blur-xl">
                <div className="flex min-w-max items-center justify-center gap-1.5">
                  {project.images.map(
                    (_, imageIndex) => (
                      <button
                        type="button"
                        key={imageIndex}
                        onClick={() =>
                          setCurrent(imageIndex)
                        }
                        aria-label={`Show image ${
                          imageIndex + 1
                        }`}
                        aria-current={
                          current === imageIndex
                            ? "true"
                            : undefined
                        }
                        className={`h-1.5 rounded-full transition-all duration-300 ${
                          current === imageIndex
                            ? "w-6 bg-gradient-to-r from-emerald-400 to-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.5)]"
                            : "w-1.5 bg-white/30 hover:bg-white/60"
                        }`}
                      />
                    )
                  )}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Content Section */}
        <div className="relative z-10 flex flex-1 flex-col px-5 pb-5 pt-3 sm:px-6 sm:pb-6 sm:pt-4">
          {/* Project Heading */}
          <div className="mb-3 flex items-start justify-between gap-4">
            <h3 className="text-xl font-bold tracking-tight text-white transition-colors duration-300 group-hover:text-cyan-300 sm:text-2xl">
              {project.title}
            </h3>

            <div className="mt-0.5 flex shrink-0 items-center gap-1.5 rounded-lg border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-gray-500">
              <FiLayers
                size={11}
                className="text-emerald-400"
              />

              {project.tech.length} Tech
            </div>
          </div>

          {/* Description */}
          <p
            className="mb-5 line-clamp-3 text-sm leading-[1.75] text-gray-400 sm:text-[15px]"
            style={{
              textWrap: "pretty",
            }}
          >
            {project.description}
          </p>

          {/* Divider */}
          <div className="mb-5 h-px w-full bg-gradient-to-r from-white/[0.08] via-white/[0.04] to-transparent" />

          {/* Technologies */}
          <div className="mb-6 flex flex-wrap gap-2">
            {project.mainTech.map((technology) => (
              <span
                key={technology}
                className="rounded-lg border border-emerald-500/30 bg-gradient-to-br from-emerald-500/15 to-cyan-500/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-emerald-300 shadow-[0_2px_8px_rgba(16,185,129,0.08)] sm:text-[11px]"
              >
                {technology}
              </span>
            ))}

            {additionalTech.map((technology) => (
              <span
                key={technology}
                className="rounded-lg border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[10px] uppercase tracking-wider text-gray-300 transition-colors duration-300 hover:border-cyan-400/25 hover:text-cyan-300 sm:text-[11px]"
              >
                {technology}
              </span>
            ))}
          </div>

          {/* View Details */}
          <Link
            href={`/projects/${project.slug}`}
            className="mt-auto block w-full"
          >
            <motion.div
              whileHover={{
                scale: 1.015,
                y: -2,
              }}
              whileTap={{
                scale: 0.97,
              }}
              className="relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-emerald-400 to-cyan-500 px-5 py-2.5 text-sm font-bold text-black shadow-[0_10px_30px_rgba(16,185,129,0.25)] transition-shadow duration-300 hover:shadow-[0_15px_40px_rgba(34,211,238,0.35)] sm:py-3 sm:text-base"
            >
              <span className="relative z-10">
                View Details
              </span>

              <FiArrowRight
                size={17}
                className="relative z-10 transition-transform duration-300 group-hover:translate-x-1"
              />

              <span className="absolute inset-y-0 -left-1/3 w-1/3 skew-x-[-18deg] bg-white/25 blur-sm transition-all duration-700 group-hover:left-[120%]" />
            </motion.div>
          </Link>
        </div>
      </div>
    </motion.article>
  );
}
