// "use client";

// import { motion } from "framer-motion";
// import Link from "next/link";

// const MotionLink = motion(Link);
// import {
//   FiCode,
//   FiCpu,
//   FiLayers,
//   FiCheckCircle,
//   FiZap,
// } from "react-icons/fi";

// // Main/most-used stack listed first, on request: Next.js, React, JavaScript,
// // TypeScript, Node.js, MongoDB, Mongoose — the rest follow after.
// const coreStack = [
//   "Next.js",
//   "React.js",
//   "JavaScript (ES6+)",
//   "TypeScript",
//   "Node.js",
//   "MongoDB",
//   "Mongoose",
//   "Express.js",
//   "Tailwind CSS",
//   "PostgreSQL",
//   "SQL",
//   "Git & GitHub",
//   "HTML5 & CSS3",
// ];

// const advancedTech = [
//   "REST API Development & Integration",
//   "Database Architecture & CRUD Operations",
//   "Responsive & Scalable Web Applications",
//   "AI Tools & Third-party Integrations",
//   "Authentication & Authorization Systems",
//   "Reusable Component-based UI Design",
//   "Project Deployment & Optimization",
//   "Role-based Dashboard Architecture",
// ];

// const highlights = [
//   { icon: FiCode, label: "12+ Projects", color: "text-emerald-400" },
//   { icon: FiZap, label: "Modern Stack", color: "text-cyan-400" },
//   { icon: FiCpu, label: "AI Integration", color: "text-purple-400" },
// ];

// export default function About() {
//   return (
//     <section className="relative overflow-hidden bg-black py-20 sm:py-24 lg:py-28">
//       {/* Background */}
//       <div className="absolute inset-0 bg-[linear-gradient(to_right,#0a0a0a_1px,transparent_1px),linear-gradient(to_bottom,#0a0a0a_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />

//       <div className="absolute left-0 top-1/4 h-72 w-72 rounded-full bg-emerald-500/10 blur-[120px]" />
//       <div className="absolute bottom-1/4 right-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px]" />

//       <div className="container relative z-10 mx-auto px-5 sm:px-8 lg:px-20">
//         {/* Section Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="mb-14 text-center sm:mb-16"
//         >


//           {/* SIMPLE TITLE */}
//           <h2 className="text-3xl font-bold text-white sm:text-5xl lg:text-6xl">
//             About{" "}
//             <span className="bg-gradient-to-r from-emerald-400 to-cyan-500 bg-clip-text text-transparent">
//               Me
//             </span>
//           </h2>

//           <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500" />
//         </motion.div>

//         {/* Main Content */}
//         <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
//           {/* Left Side */}
//           <div className="space-y-8 lg:col-span-7">
//             {/* Intro */}
//             <motion.div
//               initial={{ opacity: 0, y: 25 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               className="space-y-5"
//             >
//               <h3 className="text-2xl font-bold leading-snug text-white sm:text-3xl">
//                 Hi, I'm{" "}
//                 <span className="rounded-lg border border-emerald-500/30 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 px-3 py-1 text-emerald-400">
//                   Kouser Ahamed
//                 </span>
//               </h3>

//               <p className="text-base leading-relaxed text-gray-400 sm:text-lg">
//                 I am a{" "}
//                 <span className="font-semibold text-emerald-400">
//                   Full-Stack Web Developer
//                 </span>{" "}
//                 focused on building modern, scalable, and user-friendly web
//                 applications with clean architecture and smooth user
//                 experiences.
//               </p>

//               <p className="text-sm leading-relaxed text-gray-400 sm:text-base">
//                 My expertise includes frontend development with React and
//                 Next.js, backend development using Node.js and Express.js,
//                 database management, REST API integration, and deployment
//                 workflows. I enjoy solving real-world problems through
//                 performance-focused and maintainable code.
//               </p>
//             </motion.div>

//             {/* Highlights */}
//             <motion.div
//               initial={{ opacity: 0, y: 25 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               className="grid grid-cols-1 gap-4 sm:grid-cols-3"
//             >
//               {highlights.map((item, i) => (
//                 <motion.div
//                   key={item.label}
//                   initial={{ opacity: 0, scale: 0.8 }}
//                   whileInView={{ opacity: 1, scale: 1 }}
//                   viewport={{ once: true }}
//                   transition={{ delay: i * 0.1 }}
//                   whileHover={{ y: -5 }}
//                   className="group rounded-2xl border border-white/10 bg-white/5 p-5 text-center backdrop-blur-sm transition-all hover:border-emerald-500/30"
//                 >
//                   <item.icon
//                     className={`${item.color} mx-auto mb-3 transition-transform group-hover:scale-110`}
//                     size={30}
//                   />

//                   <p className="text-sm font-semibold text-gray-300">
//                     {item.label}
//                   </p>
//                 </motion.div>
//               ))}
//             </motion.div>

//             {/* Core Technologies */}
//             <motion.div
//               initial={{ opacity: 0, y: 25 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//             >
//               <div className="mb-5 flex items-center gap-3">
//                 <FiCode className="text-emerald-400" size={24} />

//                 <h4 className="text-xl font-bold text-white">
//                   Core Technologies
//                 </h4>
//               </div>

//               <div className="flex flex-wrap gap-3">
//                 {coreStack.map((tech, i) => (
//                   <motion.span
//                     key={tech}
//                     initial={{ opacity: 0, scale: 0.8 }}
//                     whileInView={{ opacity: 1, scale: 1 }}
//                     viewport={{ once: true }}
//                     transition={{ delay: i * 0.03 }}
//                     whileHover={{ scale: 1.05, y: -2 }}
//                     className="cursor-default rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-xs text-gray-300 backdrop-blur-sm transition-all hover:border-emerald-500/30 hover:text-emerald-400 sm:text-sm"
//                   >
//                     {tech}
//                   </motion.span>
//                 ))}
//               </div>
//             </motion.div>

//             {/* Advanced Skills */}
//             <motion.div
//               initial={{ opacity: 0, y: 25 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//             >
//               <div className="mb-5 flex items-center gap-3">
//                 <FiCpu className="text-cyan-400" size={24} />

//                 <h4 className="text-xl font-bold text-white">
//                   Advanced Capabilities
//                 </h4>
//               </div>

//               <div className="grid gap-4 sm:grid-cols-2">
//                 {advancedTech.map((skill, i) => (
//                   <motion.div
//                     key={skill}
//                     initial={{ opacity: 0, x: -20 }}
//                     whileInView={{ opacity: 1, x: 0 }}
//                     viewport={{ once: true }}
//                     transition={{ delay: i * 0.05 }}
//                     className="group flex items-start gap-3"
//                   >
//                     <FiCheckCircle
//                       className="mt-1 shrink-0 text-emerald-500 transition-transform group-hover:scale-110"
//                       size={16}
//                     />

//                     <span className="text-sm leading-relaxed text-gray-400 transition-colors group-hover:text-gray-200">
//                       {skill}
//                     </span>
//                   </motion.div>
//                 ))}
//               </div>
//             </motion.div>
//           </div>

//           {/* Right Side */}
//           <motion.div
//             initial={{ opacity: 0, x: 25 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             className="lg:col-span-5"
//           >
//             <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-6 shadow-2xl backdrop-blur-xl sm:p-8">
//               <div className="mb-8 flex items-center gap-4">
//                 <div className="rounded-2xl border border-emerald-500/30 bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 p-4">
//                   <FiLayers className="text-emerald-400" size={28} />
//                 </div>

//                 <div>
//                   <h3 className="text-xl font-bold text-white sm:text-2xl">
//                     Development Journey
//                   </h3>

//                   <p className="text-sm text-gray-400">
//                     Consistently learning & improving
//                   </p>
//                 </div>
//               </div>

//               <div className="mb-8 space-y-4">
//                 {[
//                   "Developed 12+ responsive full-stack applications",
//                   "Built scalable MERN stack projects",
//                   "Integrated APIs for dynamic user experiences",
//                   "Designed optimized database structures",
//                   "Implemented secure authentication systems",
//                   "Hands-on experience with deployment workflows",
//                   "Focused on clean architecture & maintainable code",
//                   "Continuously improving backend & system design skills",
//                 ].map((point, i) => (
//                   <motion.div
//                     key={i}
//                     initial={{ opacity: 0, x: -10 }}
//                     whileInView={{ opacity: 1, x: 0 }}
//                     viewport={{ once: true }}
//                     transition={{ delay: i * 0.05 }}
//                     className="group flex items-start gap-3"
//                   >
//                     <div className="mt-1 rounded-full bg-emerald-500/20 p-1">
//                       <div className="h-2 w-2 rounded-full bg-emerald-500 transition-transform group-hover:scale-150" />
//                     </div>

//                     <span className="text-sm leading-relaxed text-gray-300 transition-colors group-hover:text-white">
//                       {point}
//                     </span>
//                   </motion.div>
//                 ))}
//               </div>

//               <MotionLink
//                 href="/contact"
//                 whileHover={{ scale: 1.02 }}
//                 whileTap={{ scale: 0.98 }}
//                 className="inline-flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-emerald-500 to-green-600 py-4 text-sm font-bold text-white shadow-lg shadow-emerald-500/25 transition-all hover:shadow-emerald-500/40 sm:text-base"
//               >
//                 Let's Work Together
//               </MotionLink>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }



//=============================



// "use client";

// import { motion } from "framer-motion";
// import Link from "next/link";
// import {
//   FiCode,
//   FiCpu,
//   FiCheckCircle,
//   FiTerminal,
//   FiGitCommit,
// } from "react-icons/fi";

// const MotionLink = motion(Link);

// const coreStack = [
//   "Next.js",
//   "React.js",
//   "JavaScript (ES6+)",
//   "TypeScript",
//   "Node.js",
//   "MongoDB",
//   "Mongoose",
//   "Express.js",
//   "Tailwind CSS",
//   "PostgreSQL",
//   "SQL",
//   "Git & GitHub",
//   "HTML5 & CSS3",
// ];

// const advancedTech = [
//   "REST API Development & Integration",
//   "Database Architecture & CRUD Operations",
//   "Responsive & Scalable Web Applications",
//   "AI Tools & Third-party Integrations",
//   "Authentication & Authorization Systems",
//   "Reusable Component-based UI Design",
//   "Project Deployment & Optimization",
//   "Role-based Dashboard Architecture",
// ];

// const journeyLog = [
//   {
//     hash: "a3f9c1e",
//     msg: "feat: ship 12+ full-stack applications",
//   },
//   {
//     hash: "7b2d40a",
//     msg: "feat: build scalable MERN stack projects",
//   },
//   {
//     hash: "e91c882",
//     msg: "feat: integrate REST APIs for dynamic UX",
//   },
//   {
//     hash: "1f6a3bd",
//     msg: "refactor: optimize database schema design",
//   },
//   {
//     hash: "c04e7f1",
//     msg: "feat: add JWT + Better Auth sessions",
//   },
//   {
//     hash: "9d3b6a0",
//     msg: "chore: automate deployment workflows",
//   },
//   {
//     hash: "5a1c9e2",
//     msg: "refactor: clean, maintainable architecture",
//   },
//   {
//     hash: "0e7f4d8",
//     msg: "study: backend & system design, ongoing",
//   },
// ];

// export default function About() {
//   return (
//     <section className="relative overflow-hidden bg-black py-8 md:py-12">
//       {/* Background Glow */}
//       <div className="pointer-events-none absolute left-0 top-1/4 h-72 w-72 rounded-full bg-emerald-500/10 blur-[120px]" />

//       <div className="pointer-events-none absolute bottom-1/4 right-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px]" />

//       <div className="container relative z-10 mx-auto px-5 sm:px-8 lg:px-20">
//         {/* Section Header */}
//         <motion.div
//           initial={{
//             opacity: 0,
//             y: 20,
//           }}
//           whileInView={{
//             opacity: 1,
//             y: 0,
//           }}
//           viewport={{
//             once: true,
//           }}
//           className="mb-8 text-center md:mb-10"
//         >
//           <p className="font-mono text-sm text-cyan-400">
//             $ whoami
//           </p>

//           <h2 className="mt-2 text-4xl font-bold tracking-tight text-white md:text-6xl">
//             About{" "}
//             <span className="bg-gradient-to-r from-emerald-400 to-cyan-500 bg-clip-text text-transparent">
//               Me
//             </span>
//           </h2>

//           <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-gradient-to-r from-emerald-400 to-cyan-500" />
//         </motion.div>

//         <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
//           {/* Left Side */}
//           <div className="space-y-8 lg:col-span-7">
//             {/* Introduction */}
//             <motion.div
//               initial={{
//                 opacity: 0,
//                 y: 25,
//               }}
//               whileInView={{
//                 opacity: 1,
//                 y: 0,
//               }}
//               viewport={{
//                 once: true,
//               }}
//               className="space-y-5"
//             >
//               <h3 className="text-2xl font-bold leading-snug text-[#C9D1D9] sm:text-3xl">
//                 Hi, I&apos;m{" "}
//                 <span className="rounded-md border border-cyan-400/30 bg-gradient-to-r from-emerald-500/10 via-cyan-500/10 to-blue-500/10 px-3 py-1 font-mono">
//                   <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
//                     Kouser Ahamed
//                   </span>
//                 </span>
//               </h3>

//               <p className="text-base leading-relaxed text-[#8B949E] sm:text-lg">
//                 I am a{" "}
//                 <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 bg-clip-text font-semibold text-transparent">
//                   Full-Stack Web Developer
//                 </span>{" "}
//                 focused on building modern, scalable, and user-friendly web
//                 applications with clean architecture and smooth user
//                 experiences.
//               </p>

//               <p className="text-sm leading-relaxed text-[#8B949E] sm:text-base">
//                 My expertise includes frontend development with React and
//                 Next.js, backend development using Node.js and Express.js,
//                 database management, REST API integration, and deployment
//                 workflows. I enjoy solving real-world problems through
//                 performance-focused and maintainable code.
//               </p>
//             </motion.div>

//             {/* Core Technologies */}
//             <motion.div
//               initial={{
//                 opacity: 0,
//                 y: 25,
//               }}
//               whileInView={{
//                 opacity: 1,
//                 y: 0,
//               }}
//               viewport={{
//                 once: true,
//               }}
//             >
//               <div className="mb-5 flex items-center gap-3">
//                 <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-emerald-400/20 bg-gradient-to-br from-emerald-500/15 to-cyan-500/10">
//                   <FiCode
//                     className="text-emerald-400"
//                     size={22}
//                   />
//                 </div>

//                 <h4 className="text-xl font-bold text-[#C9D1D9]">
//                   Core Technologies
//                 </h4>
//               </div>

//               <div className="flex flex-wrap gap-3">
//                 {coreStack.map((tech, index) => (
//                   <motion.span
//                     key={tech}
//                     initial={{
//                       opacity: 0,
//                       scale: 0.85,
//                     }}
//                     whileInView={{
//                       opacity: 1,
//                       scale: 1,
//                     }}
//                     viewport={{
//                       once: true,
//                     }}
//                     transition={{
//                       delay: index * 0.03,
//                     }}
//                     whileHover={{
//                       y: -2,
//                       borderColor: "#06B6D4",
//                     }}
//                     className="cursor-default rounded-md border border-[#30363D] bg-[#161B22] px-4 py-2 font-mono text-xs text-[#8B949E] transition-colors hover:text-cyan-400 sm:text-sm"
//                   >
//                     {tech}
//                   </motion.span>
//                 ))}
//               </div>
//             </motion.div>

//             {/* Advanced Capabilities */}
//             <motion.div
//               initial={{
//                 opacity: 0,
//                 y: 25,
//               }}
//               whileInView={{
//                 opacity: 1,
//                 y: 0,
//               }}
//               viewport={{
//                 once: true,
//               }}
//             >
//               <div className="mb-5 flex items-center gap-3">
//                 <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-blue-400/20 bg-gradient-to-br from-cyan-500/15 to-blue-500/10">
//                   <FiCpu
//                     className="text-cyan-400"
//                     size={22}
//                   />
//                 </div>

//                 <h4 className="text-xl font-bold text-[#C9D1D9]">
//                   Advanced Capabilities
//                 </h4>
//               </div>

//               <div className="grid gap-4 sm:grid-cols-2">
//                 {advancedTech.map((skill, index) => (
//                   <motion.div
//                     key={skill}
//                     initial={{
//                       opacity: 0,
//                       x: -20,
//                     }}
//                     whileInView={{
//                       opacity: 1,
//                       x: 0,
//                     }}
//                     viewport={{
//                       once: true,
//                     }}
//                     transition={{
//                       delay: index * 0.05,
//                     }}
//                     className="group flex items-start gap-3"
//                   >
//                     <FiCheckCircle
//                       className="mt-1 shrink-0 text-cyan-400 transition-colors group-hover:text-blue-400"
//                       size={16}
//                     />

//                     <span className="text-sm leading-relaxed text-[#8B949E] transition-colors group-hover:text-[#C9D1D9]">
//                       {skill}
//                     </span>
//                   </motion.div>
//                 ))}
//               </div>
//             </motion.div>
//           </div>

//           {/* Right Side */}
//           <motion.div
//             initial={{
//               opacity: 0,
//               x: 25,
//             }}
//             whileInView={{
//               opacity: 1,
//               x: 0,
//             }}
//             viewport={{
//               once: true,
//             }}
//             className="lg:col-span-5"
//           >
//             <div className="overflow-hidden rounded-xl border border-[#30363D] bg-[#161B22] shadow-2xl">
//               {/* Terminal Title Bar */}
//               <div className="flex items-center gap-2 border-b border-[#30363D] bg-[#0D1117] px-4 py-3">
//                 <span className="h-3 w-3 rounded-full bg-[#FF7B72]" />
//                 <span className="h-3 w-3 rounded-full bg-[#F0B429]" />
//                 <span className="h-3 w-3 rounded-full bg-cyan-400" />

//                 <span className="ml-3 flex items-center gap-2 font-mono text-xs text-[#8B949E]">
//                   <FiTerminal
//                     className="text-cyan-400"
//                     size={12}
//                   />

//                   git log --oneline
//                 </span>
//               </div>

//               {/* Terminal Log Body */}
//               <div className="space-y-3 p-5 sm:p-6">
//                 {journeyLog.map((entry, index) => (
//                   <motion.div
//                     key={entry.hash}
//                     initial={{
//                       opacity: 0,
//                       x: -10,
//                     }}
//                     whileInView={{
//                       opacity: 1,
//                       x: 0,
//                     }}
//                     viewport={{
//                       once: true,
//                     }}
//                     transition={{
//                       delay: index * 0.05,
//                     }}
//                     className="group flex items-start gap-3 font-mono text-xs sm:text-sm"
//                   >
//                     <FiGitCommit
//                       className="mt-0.5 shrink-0 text-cyan-400"
//                       size={14}
//                     />

//                     <span className="text-blue-400">
//                       {entry.hash}
//                     </span>

//                     <span className="text-[#8B949E] transition-colors group-hover:text-[#C9D1D9]">
//                       {entry.msg}
//                     </span>
//                   </motion.div>
//                 ))}

//                 <div className="flex items-center gap-1 pt-1 font-mono text-xs text-cyan-400">
//                   <span>$</span>

//                   <span className="h-4 w-2 animate-pulse bg-gradient-to-b from-emerald-400 via-cyan-400 to-blue-500" />
//                 </div>
//               </div>

//               {/* CTA Button */}
//               <div className="border-t border-[#30363D] p-5 sm:p-6">
//                 <MotionLink
//                   href="/contact"
//                   whileHover={{
//                     scale: 1.02,
//                     y: -2,
//                   }}
//                   whileTap={{
//                     scale: 0.98,
//                   }}
//                   className="group flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-emerald-500 to-cyan-500 px-7 py-4 text-sm font-semibold text-white shadow-[0_15px_40px_rgba(16,185,129,0.35)] transition-all duration-300 sm:text-base"
//                 >
//                   git push origin collaboration
//                 </MotionLink>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }














"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  FiCode,
  FiCpu,
  FiCheckCircle,
  FiTerminal,
  FiGitCommit,
  FiLayers,
  FiCompass,
} from "react-icons/fi";

const MotionLink = motion(Link);

const coreStack = [
  "Next.js",
  "React.js",
  "JavaScript (ES6+)",
  "TypeScript",
  "Node.js",
  "MongoDB",
  "Mongoose",
  "Express.js",
  "Tailwind CSS",
  "PostgreSQL",
  "SQL",
  "Git & GitHub",
  "HTML5 & CSS3",
];

const advancedTech = [
  "REST API Development & Integration",
  "Database Architecture & CRUD Operations",
  "Responsive & Scalable Web Applications",
  "AI Tools & Third-party Integrations",
  "Authentication & Authorization Systems",
  "Reusable Component-based UI Design",
  "Project Deployment & Optimization",
  "Role-based Dashboard Architecture",
];

const personalHighlights = [
  {
    title: "My Programming Journey",
    description:
      "My journey began with a curiosity about how websites work. I started with HTML, CSS, and JavaScript, then gradually moved into React, Next.js, backend development, databases, APIs, authentication, and complete full-stack application development.",
    icon: FiCode,
    iconColor: "text-emerald-400",
    iconBackground: "from-emerald-500/20 to-cyan-500/10",
    borderColor: "hover:border-emerald-500/30",
  },
  {
    title: "Work I Enjoy",
    description:
      "I enjoy transforming ideas into practical digital products. I especially like developing responsive interfaces, creating secure backend systems, designing scalable database structures, and solving real-world problems with clean and maintainable code.",
    icon: FiLayers,
    iconColor: "text-cyan-400",
    iconBackground: "from-cyan-500/20 to-blue-500/10",
    borderColor: "hover:border-cyan-500/30",
  },
  {
    title: "Beyond Programming",
    description:
      "Outside programming, I enjoy travelling and discovering new places. Exploring different environments, cultures, and experiences helps me stay refreshed, curious, creative, and open to new ideas.",
    icon: FiCompass,
    iconColor: "text-blue-400",
    iconBackground: "from-blue-500/20 to-purple-500/10",
    borderColor: "hover:border-blue-500/30",
  },
];

const journeyLog = [
  {
    hash: "b7c2a10",
    msg: "start: explore HTML, CSS & JavaScript",
  },
  {
    hash: "84ac91f",
    msg: "learn: build interactive React interfaces",
  },
  {
    hash: "7b2d40a",
    msg: "feat: build scalable MERN stack projects",
  },
  {
    hash: "a3f9c1e",
    msg: "feat: ship 12+ full-stack applications",
  },
  {
    hash: "e91c882",
    msg: "feat: integrate REST APIs for dynamic UX",
  },
  {
    hash: "1f6a3bd",
    msg: "refactor: optimize database schema design",
  },
  {
    hash: "c04e7f1",
    msg: "feat: add JWT + Better Auth sessions",
  },
  {
    hash: "9d3b6a0",
    msg: "chore: automate deployment workflows",
  },
  {
    hash: "5a1c9e2",
    msg: "refactor: clean, maintainable architecture",
  },
  {
    hash: "0e7f4d8",
    msg: "study: backend & system design, ongoing",
  },
];

export default function About() {
  return (
    <section className="relative overflow-hidden bg-black py-8 md:py-12">
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-0 top-1/4 h-72 w-72 rounded-full bg-emerald-500/10 blur-[120px]" />

      <div className="pointer-events-none absolute bottom-1/4 right-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="container relative z-10 mx-auto px-5 sm:px-8 lg:px-20">
        {/* Section Header */}
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
          className="mb-8 text-center md:mb-10"
        >
          <p className="font-mono text-sm text-cyan-400">
            $ whoami
          </p>

          <h2 className="mt-2 text-4xl font-bold tracking-tight text-white md:text-6xl">
            About{" "}
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-500 bg-clip-text text-transparent">
              Me
            </span>
          </h2>

          <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-gradient-to-r from-emerald-400 to-cyan-500" />
        </motion.div>

        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left Side */}
          <div className="space-y-8 lg:col-span-7">
            {/* Introduction */}
            <motion.div
              initial={{
                opacity: 0,
                y: 25,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              className="space-y-5"
            >
              <h3 className="text-2xl font-bold leading-snug text-[#C9D1D9] sm:text-3xl">
                Hi, I&apos;m{" "}
                <span className="rounded-md border border-cyan-400/30 bg-gradient-to-r from-emerald-500/10 via-cyan-500/10 to-blue-500/10 px-3 py-1 font-mono">
                  <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                    Kouser Ahamed
                  </span>
                </span>
              </h3>

              <p className="text-base leading-relaxed text-[#8B949E] sm:text-lg">
                I am a{" "}
                <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 bg-clip-text font-semibold text-transparent">
                  Full-Stack Web Developer
                </span>{" "}
                who enjoys turning ideas into modern, scalable, and
                user-friendly web applications. I focus on clean architecture,
                thoughtful design, smooth user experiences, and dependable
                backend systems.
              </p>

              <p className="text-sm leading-relaxed text-[#8B949E] sm:text-base">
                I am naturally curious, detail-oriented, and always interested
                in learning something new. I enjoy taking on challenging
                problems, understanding how different parts of an application
                work together, and continuously improving the quality of my
                code and development process.
              </p>
            </motion.div>

            {/* Personal Highlights */}
            <motion.div
              initial={{
                opacity: 0,
                y: 25,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              className="grid gap-4 sm:grid-cols-2"
            >
              {personalHighlights.map((item, index) => (
                <motion.div
                  key={item.title}
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
                  transition={{
                    delay: index * 0.08,
                  }}
                  whileHover={{
                    y: -4,
                  }}
                  className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.025] p-5 backdrop-blur-xl transition-all duration-300 ${item.borderColor} ${
                    index === personalHighlights.length - 1
                      ? "sm:col-span-2"
                      : ""
                  }`}
                >
                  <div className="relative z-10 flex items-start gap-4">
                    <div
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-gradient-to-br ${item.iconBackground}`}
                    >
                      <item.icon
                        className={item.iconColor}
                        size={21}
                      />
                    </div>

                    <div>
                      <h4 className="mb-2 text-base font-semibold text-[#C9D1D9] transition-colors group-hover:text-white">
                        {item.title}
                      </h4>

                      <p className="text-sm leading-relaxed text-[#8B949E]">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.04] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </motion.div>
              ))}
            </motion.div>

            {/* Core Technologies */}
            <motion.div
              initial={{
                opacity: 0,
                y: 25,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
            >
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-emerald-400/20 bg-gradient-to-br from-emerald-500/15 to-cyan-500/10">
                  <FiCode
                    className="text-emerald-400"
                    size={22}
                  />
                </div>

                <h4 className="text-xl font-bold text-[#C9D1D9]">
                  Core Technologies
                </h4>
              </div>

              <div className="flex flex-wrap gap-3">
                {coreStack.map((tech, index) => (
                  <motion.span
                    key={tech}
                    initial={{
                      opacity: 0,
                      scale: 0.85,
                    }}
                    whileInView={{
                      opacity: 1,
                      scale: 1,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      delay: index * 0.03,
                    }}
                    whileHover={{
                      y: -2,
                      borderColor: "#06B6D4",
                    }}
                    className="cursor-default rounded-md border border-[#30363D] bg-[#161B22] px-4 py-2 font-mono text-xs text-[#8B949E] transition-colors hover:text-cyan-400 sm:text-sm"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* Advanced Capabilities */}
            <motion.div
              initial={{
                opacity: 0,
                y: 25,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
            >
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-blue-400/20 bg-gradient-to-br from-cyan-500/15 to-blue-500/10">
                  <FiCpu
                    className="text-cyan-400"
                    size={22}
                  />
                </div>

                <h4 className="text-xl font-bold text-[#C9D1D9]">
                  Advanced Capabilities
                </h4>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {advancedTech.map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{
                      opacity: 0,
                      x: -20,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      delay: index * 0.05,
                    }}
                    className="group flex items-start gap-3"
                  >
                    <FiCheckCircle
                      className="mt-1 shrink-0 text-cyan-400 transition-colors group-hover:text-blue-400"
                      size={16}
                    />

                    <span className="text-sm leading-relaxed text-[#8B949E] transition-colors group-hover:text-[#C9D1D9]">
                      {skill}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Side */}
          <motion.div
            initial={{
              opacity: 0,
              x: 25,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            className="lg:col-span-5"
          >
            <div className="overflow-hidden rounded-xl border border-[#30363D] bg-[#161B22] shadow-2xl">
              {/* Terminal Title Bar */}
              <div className="flex items-center gap-2 border-b border-[#30363D] bg-[#0D1117] px-4 py-3">
                <span className="h-3 w-3 rounded-full bg-[#FF7B72]" />
                <span className="h-3 w-3 rounded-full bg-[#F0B429]" />
                <span className="h-3 w-3 rounded-full bg-cyan-400" />

                <span className="ml-3 flex items-center gap-2 font-mono text-xs text-[#8B949E]">
                  <FiTerminal
                    className="text-cyan-400"
                    size={12}
                  />
                  git log --oneline
                </span>
              </div>

              {/* Terminal Log Body */}
              <div className="space-y-3 p-5 sm:p-6">
                {journeyLog.map((entry, index) => (
                  <motion.div
                    key={entry.hash}
                    initial={{
                      opacity: 0,
                      x: -10,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      delay: index * 0.05,
                    }}
                    className="group flex items-start gap-3 font-mono text-xs sm:text-sm"
                  >
                    <FiGitCommit
                      className="mt-0.5 shrink-0 text-cyan-400"
                      size={14}
                    />

                    <span className="text-blue-400">
                      {entry.hash}
                    </span>

                    <span className="text-[#8B949E] transition-colors group-hover:text-[#C9D1D9]">
                      {entry.msg}
                    </span>
                  </motion.div>
                ))}

                <div className="flex items-center gap-1 pt-1 font-mono text-xs text-cyan-400">
                  <span>$</span>

                  <span className="h-4 w-2 animate-pulse bg-gradient-to-b from-emerald-400 via-cyan-400 to-blue-500" />
                </div>
              </div>

              {/* CTA Button */}
              <div className="border-t border-[#30363D] p-5 sm:p-6">
                <MotionLink
                  href="/contact"
                  whileHover={{
                    scale: 1.02,
                    y: -2,
                  }}
                  whileTap={{
                    scale: 0.98,
                  }}
                  className="group flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-emerald-500 to-cyan-500 px-7 py-4 text-sm font-semibold text-white shadow-[0_15px_40px_rgba(16,185,129,0.35)] transition-all duration-300 sm:text-base"
                >
                  git push origin collaboration
                </MotionLink>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}