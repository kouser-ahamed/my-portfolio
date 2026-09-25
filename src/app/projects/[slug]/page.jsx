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


//==================================




// "use client";

// import { useState, useEffect } from "react";
// import { useParams, notFound } from "next/navigation";
// import Image from "next/image";
// import Link from "next/link";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   FiArrowLeft,
//   FiArrowRight,
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

//   const goPrev = () =>
//     setCurrent((prev) => (prev - 1 + project.images.length) % project.images.length);
//   const goNext = () => setCurrent((prev) => (prev + 1) % project.images.length);

//   return (
//     <section className="relative min-h-screen bg-[#040508] text-white overflow-hidden py-14 md:py-20">
//       {/* Background Glow */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         <div className="absolute top-0 left-1/4 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-emerald-500/10 blur-[120px] rounded-full" />
//         <div className="absolute bottom-0 right-1/4 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-cyan-500/10 blur-[120px] rounded-full" />
//         <div
//           className="absolute inset-0 opacity-[0.03]"
//           style={{
//             backgroundImage:
//               "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
//             backgroundSize: "48px 48px",
//           }}
//         />
//       </div>

//       <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
//         {/* Back Link */}
//         <Link
//           href="/projects"
//           className="group inline-flex items-center gap-2 text-sm text-gray-400 hover:text-emerald-400 transition-colors mb-8"
//         >
//           <FiArrowLeft className="transition-transform group-hover:-translate-x-1" />
//           Back to all projects
//         </Link>

//         {/* Image */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           className="group relative aspect-[16/9] w-full overflow-hidden rounded-3xl border border-white/10 bg-[#0b0d11] mb-10 shadow-[0_20px_60px_rgba(0,0,0,0.45)]"
//         >
//           <AnimatePresence initial={false}>
//             <motion.div
//               key={current}
//               initial={{ opacity: 0, scale: 1.02 }}
//               animate={{ opacity: 1, scale: 1 }}
//               exit={{ opacity: 0 }}
//               transition={{ duration: 0.5, ease: "easeOut" }}
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

//           {/* subtle vignette so dots/arrows sit on a readable surface */}
//           <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/60 to-transparent" />

//           {/* Prev / Next arrows — appear on hover (desktop), always visible on mobile via opacity-100 md:opacity-0 */}
//           {project.images.length > 1 && (
//             <>
//               <button
//                 onClick={goPrev}
//                 aria-label="Previous image"
//                 className="absolute left-3 top-1/2 -translate-y-1/2 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-black/40 border border-white/10 text-white backdrop-blur-sm opacity-0 md:opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/60"
//               >
//                 <FiArrowLeft size={16} />
//               </button>
//               <button
//                 onClick={goNext}
//                 aria-label="Next image"
//                 className="absolute right-3 top-1/2 -translate-y-1/2 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-black/40 border border-white/10 text-white backdrop-blur-sm opacity-0 md:opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/60"
//               >
//                 <FiArrowRight size={16} />
//               </button>
//             </>
//           )}

//           <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
//             {project.images.map((_, i) => (
//               <button
//                 key={i}
//                 onClick={() => setCurrent(i)}
//                 className={`h-1.5 rounded-full transition-all duration-300 ${
//                   current === i
//                     ? "w-6 bg-gradient-to-r from-emerald-400 to-cyan-400"
//                     : "w-1.5 bg-white/30 hover:bg-white/50"
//                 }`}
//                 aria-label={`Show image ${i + 1}`}
//               />
//             ))}
//           </div>
//         </motion.div>

//         {/* Eyebrow + Title + description */}
//         {/* <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5, delay: 0.1 }}
//         >
//           <span className="inline-flex items-center gap-2 text-[11px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-emerald-400/90 mb-3">
//             <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
//             Project Case Study
//           </span>

//           <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-5 bg-gradient-to-br from-white via-white to-white/60 bg-clip-text text-transparent tracking-tight">
//             {project.title}
//           </h1>

//           <p
//             className="text-gray-400 leading-[1.8] text-sm sm:text-base md:text-lg mb-8 max-w-3xl"
//             style={{ textWrap: "pretty", hyphens: "auto" }}
//           >
//             {project.description}
//           </p>
//         </motion.div> */}


//         <motion.div
//   className="w-full"
//   initial={{ opacity: 0, y: 20 }}
//   animate={{ opacity: 1, y: 0 }}
//   transition={{ duration: 0.5, delay: 0.1 }}
// >
//   <span className="inline-flex items-center gap-2 text-[11px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-emerald-400/90 mb-3">
//     <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
//     Project Case Study
//   </span>

//   <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-5 bg-gradient-to-br from-white via-white to-white/60 bg-clip-text text-transparent tracking-tight">
//     {project.title}
//   </h1>

//   <p
//     className="w-full text-gray-400 leading-[1.8] text-sm sm:text-base md:text-lg mb-8 break-words"
//     style={{
//       textWrap: "pretty",
//       hyphens: "auto",
//       overflowWrap: "break-word",
//     }}
//   >
//     {project.description}
//   </p>
// </motion.div>

//         {/* Live + GitHub buttons */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5, delay: 0.15 }}
//           className="flex flex-col sm:flex-row gap-3 mb-14 max-w-md"
//         >
//           <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex-1">
//             <button className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-emerald-400 to-cyan-500 text-black text-sm sm:text-base font-bold shadow-[0_10px_30px_rgba(16,185,129,0.25)] hover:scale-[1.02] hover:shadow-[0_14px_36px_rgba(16,185,129,0.35)] active:scale-95 transition-all">
//               <FiExternalLink size={16} />
//               Live Preview
//             </button>
//           </a>
//           <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex-1">
//             <button className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-white/[0.05] border border-white/10 text-white text-sm sm:text-base font-semibold hover:bg-white/[0.09] hover:border-cyan-400/30 active:scale-95 transition-all">
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
//           className="mb-14 rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-7"
//         >
//           <div className="flex items-center gap-3 mb-5">
//             <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-500/10 border border-emerald-500/20">
//               <FiLayers className="text-emerald-400" size={18} />
//             </span>
//             <h2 className="text-lg sm:text-xl font-bold text-white">Tech Stack</h2>
//           </div>

//           <div className="flex flex-wrap gap-2 mb-2">
//             {project.mainTech.map((t) => (
//               <span
//                 key={t}
//                 className="px-3.5 py-1.5 rounded-lg bg-gradient-to-br from-emerald-500/15 to-cyan-500/10 border border-emerald-500/30 text-xs sm:text-sm tracking-wide font-semibold text-emerald-300 shadow-[0_2px_10px_rgba(16,185,129,0.08)]"
//               >
//                 {t}
//               </span>
//             ))}
//           </div>

//           {project.tech.filter((t) => !project.mainTech.includes(t)).length > 0 && (
//             <>
//               <div className="h-px bg-white/[0.06] my-4" />
//               <div className="flex flex-wrap gap-2">
//                 {project.tech
//                   .filter((t) => !project.mainTech.includes(t))
//                   .map((t) => (
//                     <span
//                       key={t}
//                       className="px-3 py-1 rounded-lg bg-white/[0.04] border border-white/10 text-xs sm:text-sm tracking-wide text-gray-400"
//                     >
//                       {t}
//                     </span>
//                   ))}
//               </div>
//             </>
//           )}
//         </motion.div>

//         <div className="grid gap-6 md:grid-cols-2">
//           {/* Challenges */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-7 hover:border-orange-400/20 transition-colors"
//           >
//             <div className="flex items-center gap-3 mb-5">
//               <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-orange-500/10 border border-orange-500/20">
//                 <FiAlertTriangle className="text-orange-400" size={18} />
//               </span>
//               <h2 className="text-lg sm:text-xl font-bold text-white">Challenges Faced</h2>
//             </div>
//             <ul className="space-y-4">
//               {project.challenges.map((c, i) => (
//                 <li key={i} className="flex items-start gap-3">
//                   <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-orange-500/10 text-[10px] font-bold text-orange-400">
//                     {i + 1}
//                   </span>
//                   <span
//                     className="text-sm sm:text-base text-gray-400 leading-[1.75]"
//                     style={{ textWrap: "pretty" }}
//                   >
//                     {c}
//                   </span>
//                 </li>
//               ))}
//             </ul>
//           </motion.div>

//           {/* Future plans */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-7 hover:border-cyan-400/20 transition-colors"
//           >
//             <div className="flex items-center gap-3 mb-5">
//               <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-cyan-500/10 border border-cyan-500/20">
//                 <FiTrendingUp className="text-cyan-400" size={18} />
//               </span>
//               <h2 className="text-lg sm:text-xl font-bold text-white">Future Improvements</h2>
//             </div>
//             <ul className="space-y-4">
//               {project.futurePlans.map((c, i) => (
//                 <li key={i} className="flex items-start gap-3">
//                   <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-cyan-500/10 text-[10px] font-bold text-cyan-400">
//                     {i + 1}
//                   </span>
//                   <span
//                     className="text-sm sm:text-base text-gray-400 leading-[1.75]"
//                     style={{ textWrap: "pretty" }}
//                   >
//                     {c}
//                   </span>
//                 </li>
//               ))}
//             </ul>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }








//==========================














"use client";

import { useEffect, useState } from "react";
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
  FiImage,
} from "react-icons/fi";
import { getProjectBySlug } from "../../../../public/data/projects";

export default function ProjectDetailPage() {
  const params = useParams();

  const slug = Array.isArray(params?.slug)
    ? params.slug[0]
    : params?.slug;

  const project = getProjectBySlug(slug);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!project || project.images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % project.images.length);
    }, 3500);

    return () => clearInterval(interval);
  }, [project]);

  if (!project) {
    notFound();
    return null;
  }

  const goPrev = () => {
    setCurrent(
      (prev) =>
        (prev - 1 + project.images.length) %
        project.images.length
    );
  };

  const goNext = () => {
    setCurrent(
      (prev) => (prev + 1) % project.images.length
    );
  };

  const additionalTech = project.tech.filter(
    (tech) => !project.mainTech.includes(tech)
  );

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#040508] py-10 text-white sm:py-12 md:py-16 lg:py-20">
      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/4 top-0 h-[300px] w-[300px] rounded-full bg-emerald-500/10 blur-[120px] md:h-[500px] md:w-[500px]" />

        <div className="absolute bottom-0 right-1/4 h-[300px] w-[300px] rounded-full bg-cyan-500/10 blur-[120px] md:h-[500px] md:w-[500px]" />

        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        <Link
          href="/projects"
          className="group mb-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-gray-400 backdrop-blur-xl transition-all duration-300 hover:border-emerald-500/30 hover:bg-emerald-500/5 hover:text-emerald-400 sm:mb-8"
        >
          <FiArrowLeft className="transition-transform duration-300 group-hover:-translate-x-1" />

          Back to all projects
        </Link>

        {/* Image Showcase */}
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.5,
          }}
          className="group relative mb-10 w-full rounded-[28px] bg-gradient-to-br from-emerald-500/40 via-white/10 to-cyan-500/40 p-px shadow-[0_25px_80px_rgba(0,0,0,0.55)]"
        >
          {/* Image Card */}
          <div className="relative overflow-hidden rounded-[27px] bg-[#090b0f] p-2 sm:p-3">
            {/* Top Information Bar */}
            <div className="absolute left-5 right-5 top-5 z-30 flex items-center justify-between gap-3">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/50 px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.14em] text-gray-300 shadow-lg backdrop-blur-xl sm:text-xs">
                <FiImage className="text-emerald-400" />

                Project Preview
              </div>

              <div className="rounded-full border border-white/10 bg-black/50 px-3 py-1.5 font-mono text-[10px] text-gray-300 shadow-lg backdrop-blur-xl sm:text-xs">
                {String(current + 1).padStart(2, "0")}
                <span className="mx-1 text-gray-600">/</span>
                {String(project.images.length).padStart(2, "0")}
              </div>
            </div>

            {/* Rounded Inner Image Area */}
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0b0d11] sm:rounded-[22px]">
              <AnimatePresence initial={false} mode="wait">
                <motion.div
                  key={current}
                  initial={{
                    opacity: 0,
                    scale: 1.025,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.99,
                  }}
                  transition={{
                    duration: 0.45,
                    ease: "easeOut",
                  }}
                  className="absolute inset-0"
                >
                  <Image
                    src={project.images[current]}
                    alt={`${project.title} project screenshot ${
                      current + 1
                    }`}
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 1024px"
                    className="rounded-2xl object-contain p-2 sm:rounded-[22px] sm:p-3"
                  />
                </motion.div>
              </AnimatePresence>

              {/* Soft Image Overlay */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/50" />

              {/* Side Shadows */}
              <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-black/30 to-transparent" />

              <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-black/30 to-transparent" />

              {/* Navigation Arrows */}
              {project.images.length > 1 && (
                <>
                  <motion.button
                    type="button"
                    onClick={goPrev}
                    whileHover={{
                      scale: 1.08,
                    }}
                    whileTap={{
                      scale: 0.92,
                    }}
                    aria-label="Previous image"
                    className="absolute left-3 top-1/2 z-30 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/55 text-white opacity-100 shadow-xl backdrop-blur-xl transition-all duration-300 hover:border-emerald-400/40 hover:bg-emerald-500/15 hover:text-emerald-300 md:left-5 md:opacity-0 md:group-hover:opacity-100"
                  >
                    <FiArrowLeft size={17} />
                  </motion.button>

                  <motion.button
                    type="button"
                    onClick={goNext}
                    whileHover={{
                      scale: 1.08,
                    }}
                    whileTap={{
                      scale: 0.92,
                    }}
                    aria-label="Next image"
                    className="absolute right-3 top-1/2 z-30 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/55 text-white opacity-100 shadow-xl backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/40 hover:bg-cyan-500/15 hover:text-cyan-300 md:right-5 md:opacity-0 md:group-hover:opacity-100"
                  >
                    <FiArrowRight size={17} />
                  </motion.button>
                </>
              )}

              {/* Slider Indicators */}
              {project.images.length > 1 && (
                <div className="absolute bottom-4 left-1/2 z-30 max-w-[80%] -translate-x-1/2 overflow-x-auto rounded-full border border-white/10 bg-black/45 px-3 py-2 shadow-xl backdrop-blur-xl">
                  <div className="flex min-w-max items-center justify-center gap-1.5">
                    {project.images.map((_, index) => (
                      <button
                        type="button"
                        key={index}
                        onClick={() => setCurrent(index)}
                        className={`h-1.5 rounded-full transition-all duration-300 ${
                          current === index
                            ? "w-6 bg-gradient-to-r from-emerald-400 to-cyan-400"
                            : "w-1.5 bg-white/30 hover:bg-white/60"
                        }`}
                        aria-label={`Show image ${index + 1}`}
                        aria-current={
                          current === index ? "true" : undefined
                        }
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </motion.div>

        {/* Project Information */}
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.5,
            delay: 0.1,
          }}
          className="w-full"
        >
          <span className="mb-3 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-emerald-400/90 sm:text-xs">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-50" />

              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>

            Project Case Study
          </span>

          <h1 className="mb-5 bg-gradient-to-br from-white via-white to-white/55 bg-clip-text text-3xl font-extrabold tracking-tight text-transparent sm:text-4xl md:text-5xl">
            {project.title}
          </h1>

          <p
            className="mb-8 w-full break-words text-sm leading-[1.8] text-gray-400 sm:text-base md:text-lg"
            style={{
              textWrap: "pretty",
              hyphens: "auto",
              overflowWrap: "break-word",
            }}
          >
            {project.description}
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.5,
            delay: 0.15,
          }}
          className="mb-12 flex max-w-2xl flex-col gap-3 sm:mb-14 sm:flex-row sm:flex-wrap"
        >
          {project.live && (
            <motion.a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                scale: 1.02,
                y: -2,
              }}
              whileTap={{
                scale: 0.97,
              }}
              className="flex flex-1 items-center justify-center gap-2 whitespace-nowrap rounded-xl bg-gradient-to-r from-emerald-400 to-cyan-500 px-5 py-3 text-sm font-bold text-black shadow-[0_10px_30px_rgba(16,185,129,0.25)] transition-shadow duration-300 hover:shadow-[0_14px_36px_rgba(16,185,129,0.38)] sm:text-base"
            >
              <FiExternalLink size={16} />

              Live Preview
            </motion.a>
          )}

          {project.github && (
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                scale: 1.02,
                y: -2,
              }}
              whileTap={{
                scale: 0.97,
              }}
              className="flex flex-1 items-center justify-center gap-2 whitespace-nowrap rounded-xl border border-white/10 bg-white/[0.05] px-5 py-3 text-sm font-semibold text-white backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/30 hover:bg-white/[0.09] sm:text-base"
            >
              <FiGithub size={16} />

              Source Code Client
            </motion.a>
          )}

          {project.githubBackend && (
            <motion.a
              href={project.githubBackend}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                scale: 1.02,
                y: -2,
              }}
              whileTap={{
                scale: 0.97,
              }}
              className="flex flex-1 items-center justify-center gap-2 whitespace-nowrap rounded-xl border border-white/10 bg-white/[0.05] px-5 py-3 text-sm font-semibold text-white backdrop-blur-xl transition-all duration-300 hover:border-emerald-400/30 hover:bg-white/[0.09] sm:text-base"
            >
              <FiGithub size={16} />

              Source Code Server
            </motion.a>
          )}
        </motion.div>

        {/* Tech Stack */}
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          className="group relative mb-12 overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-white/[0.015] p-5 shadow-[0_20px_55px_rgba(0,0,0,0.18)] backdrop-blur-xl transition-all duration-300 hover:border-emerald-500/25 sm:mb-14 sm:p-7"
        >
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-emerald-500/[0.05] via-transparent to-cyan-500/[0.05]" />

          <div className="relative z-10">
            <div className="mb-5 flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-emerald-500/20 bg-gradient-to-br from-emerald-500/15 to-cyan-500/10">
                <FiLayers
                  className="text-emerald-400"
                  size={18}
                />
              </span>

              <div>
                <h2 className="text-lg font-bold text-white sm:text-xl">
                  Tech Stack
                </h2>

                <p className="mt-0.5 text-xs text-gray-500">
                  Technologies used to build this project
                </p>
              </div>
            </div>

            <div className="mb-2 flex flex-wrap gap-2">
              {project.mainTech.map((tech) => (
                <span
                  key={tech}
                  className="rounded-lg border border-emerald-500/30 bg-gradient-to-br from-emerald-500/15 to-cyan-500/10 px-3.5 py-1.5 text-xs font-semibold tracking-wide text-emerald-300 shadow-[0_2px_10px_rgba(16,185,129,0.08)] sm:text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>

            {additionalTech.length > 0 && (
              <>
                <div className="my-4 h-px bg-gradient-to-r from-white/[0.08] via-white/[0.04] to-transparent" />

                <div className="flex flex-wrap gap-2">
                  {additionalTech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-lg border border-white/10 bg-white/[0.04] px-3 py-1 text-xs tracking-wide text-gray-400 transition-all duration-300 hover:border-cyan-400/25 hover:bg-cyan-500/[0.05] hover:text-gray-200 sm:text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </>
            )}
          </div>
        </motion.div>

        {/* Challenges and Future Plans */}
        <div className="grid gap-6 md:grid-cols-2">
          {/* Challenges */}
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.035] to-white/[0.015] p-5 shadow-[0_20px_50px_rgba(0,0,0,0.16)] backdrop-blur-xl transition-all duration-300 hover:border-orange-400/25 sm:p-7"
          >
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-orange-500/[0.05] via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

            <div className="relative z-10">
              <div className="mb-5 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-orange-500/20 bg-orange-500/10">
                  <FiAlertTriangle
                    className="text-orange-400"
                    size={18}
                  />
                </span>

                <div>
                  <h2 className="text-lg font-bold text-white sm:text-xl">
                    Challenges Faced
                  </h2>

                  <p className="mt-0.5 text-xs text-gray-500">
                    Key development challenges
                  </p>
                </div>
              </div>

              <ul className="space-y-4">
                {project.challenges.map((challenge, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3"
                  >
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-orange-500/20 bg-orange-500/10 text-[10px] font-bold text-orange-400">
                      {index + 1}
                    </span>

                    <span
                      className="text-sm leading-[1.75] text-gray-400 sm:text-base"
                      style={{
                        textWrap: "pretty",
                      }}
                    >
                      {challenge}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Future Plans */}
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.035] to-white/[0.015] p-5 shadow-[0_20px_50px_rgba(0,0,0,0.16)] backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/25 sm:p-7"
          >
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-cyan-500/[0.05] via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

            <div className="relative z-10">
              <div className="mb-5 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-500/20 bg-cyan-500/10">
                  <FiTrendingUp
                    className="text-cyan-400"
                    size={18}
                  />
                </span>

                <div>
                  <h2 className="text-lg font-bold text-white sm:text-xl">
                    Future Improvements
                  </h2>

                  <p className="mt-0.5 text-xs text-gray-500">
                    Planned features and enhancements
                  </p>
                </div>
              </div>

              <ul className="space-y-4">
                {project.futurePlans.map((plan, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3"
                  >
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-cyan-500/20 bg-cyan-500/10 text-[10px] font-bold text-cyan-400">
                      {index + 1}
                    </span>

                    <span
                      className="text-sm leading-[1.75] text-gray-400 sm:text-base"
                      style={{
                        textWrap: "pretty",
                      }}
                    >
                      {plan}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
