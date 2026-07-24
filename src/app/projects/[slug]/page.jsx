// "use client";

// import { useState, useEffect } from "react";
// import { useParams, notFound } from "next/navigation";
// import Image from "next/image";
// import Link from "next/link";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   FiArrowLeft,
//   FiExternalLink,
//   FiGithub,
//   FiAlertTriangle,
//   FiTrendingUp,
//   FiLayers,
// } from "react-icons/fi";
// import { getProjectBySlug } from "../../../../public/data/projects";

// export default function ProjectDetailPage() {
//   const { slug } = useParams();
//   const project = getProjectBySlug(slug);
//   const [current, setCurrent] = useState(0);

//   useEffect(() => {
//     if (!project) return;
//     const interval = setInterval(() => {
//       setCurrent((prev) => (prev + 1) % project.images.length);
//     }, 3500);
//     return () => clearInterval(interval);
//   }, [project]);

//   if (!project) {
//     notFound();
//     return null;
//   }

//   return (
//     <section className="relative min-h-screen bg-[#040508] text-white overflow-hidden py-14 md:py-20">
//       {/* Background Glow */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         <div className="absolute top-0 left-1/4 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-emerald-500/10 blur-[120px] rounded-full" />
//         <div className="absolute bottom-0 right-1/4 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-cyan-500/10 blur-[120px] rounded-full" />
//       </div>

//       <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
//         {/* Back Link */}
//         <Link
//           href="/projects"
//           className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-emerald-400 transition-colors mb-8"
//         >
//           <FiArrowLeft /> Back to all projects
//         </Link>

//         {/* Image */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           className="relative aspect-[16/9] w-full overflow-hidden rounded-3xl border border-white/10 bg-[#0b0d11] mb-8"
//         >
//           <AnimatePresence initial={false}>
//             <motion.div
//               key={current}
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               transition={{ duration: 0.4 }}
//               className="absolute inset-0 w-full h-full"
//             >
//               <Image
//                 src={project.images[current]}
//                 alt={project.title}
//                 fill
//                 priority
//                 className="object-contain p-2"
//               />
//             </motion.div>
//           </AnimatePresence>

//           <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-20">
//             {project.images.map((_, i) => (
//               <button
//                 key={i}
//                 onClick={() => setCurrent(i)}
//                 className={`h-1.5 rounded-full transition-all duration-300 ${
//                   current === i ? "w-5 bg-emerald-400" : "w-1.5 bg-white/30"
//                 }`}
//                 aria-label={`Show image ${i + 1}`}
//               />
//             ))}
//           </div>
//         </motion.div>

//         {/* Title + description */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5, delay: 0.1 }}
//         >
//           <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4">
//             {project.title}
//           </h1>
//           <p className="text-gray-400 leading-relaxed text-sm sm:text-base md:text-lg mb-8 max-w-3xl">
//             {project.description}
//           </p>
//         </motion.div>

//         {/* Live + GitHub buttons */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5, delay: 0.15 }}
//           className="flex flex-col sm:flex-row gap-3 mb-12 max-w-md"
//         >
//           <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex-1">
//             <button className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-emerald-400 to-cyan-500 text-black text-sm sm:text-base font-bold shadow-[0_10px_30px_rgba(16,185,129,0.25)] hover:scale-[1.02] active:scale-95 transition-transform">
//               <FiExternalLink size={16} />
//               Live Preview
//             </button>
//           </a>
//           <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex-1">
//             <button className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-white/[0.05] border border-white/10 text-white text-sm sm:text-base font-semibold hover:bg-white/[0.09] hover:border-cyan-400/30 transition-all">
//               <FiGithub size={16} />
//               Source Code
//             </button>
//           </a>
//         </motion.div>

//         {/* Tech stack */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="mb-12"
//         >
//           <div className="flex items-center gap-3 mb-5">
//             <FiLayers className="text-emerald-400" size={22} />
//             <h2 className="text-xl sm:text-2xl font-bold text-white">Tech Stack</h2>
//           </div>
//           <div className="flex flex-wrap gap-2">
//             {project.mainTech.map((t) => (
//               <span
//                 key={t}
//                 className="px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-xs sm:text-sm tracking-wide uppercase text-emerald-300 font-medium"
//               >
//                 {t}
//               </span>
//             ))}
//             {project.tech
//               .filter((t) => !project.mainTech.includes(t))
//               .map((t) => (
//                 <span
//                   key={t}
//                   className="px-3 py-1.5 rounded-lg bg-white/[0.05] border border-white/10 text-xs sm:text-sm tracking-wide uppercase text-gray-300"
//                 >
//                   {t}
//                 </span>
//               ))}
//           </div>
//         </motion.div>

//         <div className="grid gap-10 md:grid-cols-2">
//           {/* Challenges */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//           >
//             <div className="flex items-center gap-3 mb-5">
//               <FiAlertTriangle className="text-orange-400" size={22} />
//               <h2 className="text-xl sm:text-2xl font-bold text-white">
//                 Challenges Faced
//               </h2>
//             </div>
//             <ul className="space-y-3">
//               {project.challenges.map((c, i) => (
//                 <li
//                   key={i}
//                   className="flex items-start gap-3 text-sm sm:text-base text-gray-400 leading-relaxed"
//                 >
//                   <span className="mt-2 h-1.5 w-1.5 rounded-full bg-orange-400 shrink-0" />
//                   {c}
//                 </li>
//               ))}
//             </ul>
//           </motion.div>

//           {/* Future plans */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//           >
//             <div className="flex items-center gap-3 mb-5">
//               <FiTrendingUp className="text-cyan-400" size={22} />
//               <h2 className="text-xl sm:text-2xl font-bold text-white">
//                 Future Improvements
//               </h2>
//             </div>
//             <ul className="space-y-3">
//               {project.futurePlans.map((c, i) => (
//                 <li
//                   key={i}
//                   className="flex items-start gap-3 text-sm sm:text-base text-gray-400 leading-relaxed"
//                 >
//                   <span className="mt-2 h-1.5 w-1.5 rounded-full bg-cyan-400 shrink-0" />
//                   {c}
//                 </li>
//               ))}
//             </ul>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }





"use client";

import { useState, useEffect } from "react";
import { useParams, notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiArrowLeft,
  FiArrowRight,
  FiExternalLink,
  FiGithub,
  FiAlertTriangle,
  FiTrendingUp,
  FiLayers,
} from "react-icons/fi";
import { getProjectBySlug } from "../../../../public/data/projects";

export default function ProjectDetailPage() {
  const { slug } = useParams();
  const project = getProjectBySlug(slug);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!project) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % project.images.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [project]);

  if (!project) {
    notFound();
    return null;
  }

  const goPrev = () =>
    setCurrent((prev) => (prev - 1 + project.images.length) % project.images.length);
  const goNext = () => setCurrent((prev) => (prev + 1) % project.images.length);

  return (
    <section className="relative min-h-screen bg-[#040508] text-white overflow-hidden py-14 md:py-20">
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-emerald-500/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 right-1/4 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-cyan-500/10 blur-[120px] rounded-full" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Back Link */}
        <Link
          href="/projects"
          className="group inline-flex items-center gap-2 text-sm text-gray-400 hover:text-emerald-400 transition-colors mb-8"
        >
          <FiArrowLeft className="transition-transform group-hover:-translate-x-1" />
          Back to all projects
        </Link>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="group relative aspect-[16/9] w-full overflow-hidden rounded-3xl border border-white/10 bg-[#0b0d11] mb-10 shadow-[0_20px_60px_rgba(0,0,0,0.45)]"
        >
          <AnimatePresence initial={false}>
            <motion.div
              key={current}
              initial={{ opacity: 0, scale: 1.02 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="absolute inset-0 w-full h-full"
            >
              <Image
                src={project.images[current]}
                alt={project.title}
                fill
                priority
                className="object-contain p-2"
              />
            </motion.div>
          </AnimatePresence>

          {/* subtle vignette so dots/arrows sit on a readable surface */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/60 to-transparent" />

          {/* Prev / Next arrows — appear on hover (desktop), always visible on mobile via opacity-100 md:opacity-0 */}
          {project.images.length > 1 && (
            <>
              <button
                onClick={goPrev}
                aria-label="Previous image"
                className="absolute left-3 top-1/2 -translate-y-1/2 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-black/40 border border-white/10 text-white backdrop-blur-sm opacity-0 md:opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/60"
              >
                <FiArrowLeft size={16} />
              </button>
              <button
                onClick={goNext}
                aria-label="Next image"
                className="absolute right-3 top-1/2 -translate-y-1/2 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-black/40 border border-white/10 text-white backdrop-blur-sm opacity-0 md:opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/60"
              >
                <FiArrowRight size={16} />
              </button>
            </>
          )}

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
            {project.images.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  current === i
                    ? "w-6 bg-gradient-to-r from-emerald-400 to-cyan-400"
                    : "w-1.5 bg-white/30 hover:bg-white/50"
                }`}
                aria-label={`Show image ${i + 1}`}
              />
            ))}
          </div>
        </motion.div>

        {/* Eyebrow + Title + description */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <span className="inline-flex items-center gap-2 text-[11px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-emerald-400/90 mb-3">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Project Case Study
          </span>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-5 bg-gradient-to-br from-white via-white to-white/60 bg-clip-text text-transparent tracking-tight">
            {project.title}
          </h1>

          <p
            className="text-gray-400 leading-[1.8] text-sm sm:text-base md:text-lg mb-8 max-w-3xl"
            style={{ textWrap: "pretty", hyphens: "auto" }}
          >
            {project.description}
          </p>
        </motion.div> */}


        <motion.div
  className="w-full"
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, delay: 0.1 }}
>
  <span className="inline-flex items-center gap-2 text-[11px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-emerald-400/90 mb-3">
    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
    Project Case Study
  </span>

  <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-5 bg-gradient-to-br from-white via-white to-white/60 bg-clip-text text-transparent tracking-tight">
    {project.title}
  </h1>

  <p
    className="w-full text-gray-400 leading-[1.8] text-sm sm:text-base md:text-lg mb-8 break-words"
    style={{
      textWrap: "pretty",
      hyphens: "auto",
      overflowWrap: "break-word",
    }}
  >
    {project.description}
  </p>
</motion.div>

        {/* Live + GitHub buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="flex flex-col sm:flex-row gap-3 mb-14 max-w-md"
        >
          <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex-1">
            <button className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-emerald-400 to-cyan-500 text-black text-sm sm:text-base font-bold shadow-[0_10px_30px_rgba(16,185,129,0.25)] hover:scale-[1.02] hover:shadow-[0_14px_36px_rgba(16,185,129,0.35)] active:scale-95 transition-all">
              <FiExternalLink size={16} />
              Live Preview
            </button>
          </a>
          <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex-1">
            <button className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-white/[0.05] border border-white/10 text-white text-sm sm:text-base font-semibold hover:bg-white/[0.09] hover:border-cyan-400/30 active:scale-95 transition-all">
              <FiGithub size={16} />
              Source Code
            </button>
          </a>
        </motion.div>

        {/* Tech stack */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14 rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-7"
        >
          <div className="flex items-center gap-3 mb-5">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-500/10 border border-emerald-500/20">
              <FiLayers className="text-emerald-400" size={18} />
            </span>
            <h2 className="text-lg sm:text-xl font-bold text-white">Tech Stack</h2>
          </div>

          <div className="flex flex-wrap gap-2 mb-2">
            {project.mainTech.map((t) => (
              <span
                key={t}
                className="px-3.5 py-1.5 rounded-lg bg-gradient-to-br from-emerald-500/15 to-cyan-500/10 border border-emerald-500/30 text-xs sm:text-sm tracking-wide font-semibold text-emerald-300 shadow-[0_2px_10px_rgba(16,185,129,0.08)]"
              >
                {t}
              </span>
            ))}
          </div>

          {project.tech.filter((t) => !project.mainTech.includes(t)).length > 0 && (
            <>
              <div className="h-px bg-white/[0.06] my-4" />
              <div className="flex flex-wrap gap-2">
                {project.tech
                  .filter((t) => !project.mainTech.includes(t))
                  .map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 rounded-lg bg-white/[0.04] border border-white/10 text-xs sm:text-sm tracking-wide text-gray-400"
                    >
                      {t}
                    </span>
                  ))}
              </div>
            </>
          )}
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Challenges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-7 hover:border-orange-400/20 transition-colors"
          >
            <div className="flex items-center gap-3 mb-5">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-orange-500/10 border border-orange-500/20">
                <FiAlertTriangle className="text-orange-400" size={18} />
              </span>
              <h2 className="text-lg sm:text-xl font-bold text-white">Challenges Faced</h2>
            </div>
            <ul className="space-y-4">
              {project.challenges.map((c, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-orange-500/10 text-[10px] font-bold text-orange-400">
                    {i + 1}
                  </span>
                  <span
                    className="text-sm sm:text-base text-gray-400 leading-[1.75]"
                    style={{ textWrap: "pretty" }}
                  >
                    {c}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Future plans */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-7 hover:border-cyan-400/20 transition-colors"
          >
            <div className="flex items-center gap-3 mb-5">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-cyan-500/10 border border-cyan-500/20">
                <FiTrendingUp className="text-cyan-400" size={18} />
              </span>
              <h2 className="text-lg sm:text-xl font-bold text-white">Future Improvements</h2>
            </div>
            <ul className="space-y-4">
              {project.futurePlans.map((c, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-cyan-500/10 text-[10px] font-bold text-cyan-400">
                    {i + 1}
                  </span>
                  <span
                    className="text-sm sm:text-base text-gray-400 leading-[1.75]"
                    style={{ textWrap: "pretty" }}
                  >
                    {c}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
