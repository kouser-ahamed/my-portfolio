"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const MotionLink = motion(Link);
import {
  FiCode,
  FiCpu,
  FiLayers,
  FiCheckCircle,
  FiZap,
} from "react-icons/fi";

const coreStack = [
  "HTML5 & CSS3",
  "Tailwind CSS",
  "JavaScript (ES6+)",
  "React.js",
  "Next.js",
  "Node.js",
  "Express.js",
  "MongoDB",
  "PostgreSQL",
  "SQL",
  "Git & GitHub",
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

const highlights = [
  { icon: FiCode, label: "12+ Projects", color: "text-emerald-400" },
  { icon: FiZap, label: "Modern Stack", color: "text-cyan-400" },
  { icon: FiCpu, label: "AI Integration", color: "text-purple-400" },
];

export default function About() {
  return (
    <section className="relative overflow-hidden bg-black py-20 sm:py-24 lg:py-28">
      {/* Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0a0a0a_1px,transparent_1px),linear-gradient(to_bottom,#0a0a0a_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />

      <div className="absolute left-0 top-1/4 h-72 w-72 rounded-full bg-emerald-500/10 blur-[120px]" />
      <div className="absolute bottom-1/4 right-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="container relative z-10 mx-auto px-5 sm:px-8 lg:px-20">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14 text-center sm:mb-16"
        >
        

          {/* SIMPLE TITLE */}
          <h2 className="text-3xl font-bold text-white sm:text-5xl lg:text-6xl">
            About{" "}
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-500 bg-clip-text text-transparent">
              Me
            </span>
          </h2>

          <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500" />
        </motion.div>

        {/* Main Content */}
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left Side */}
          <div className="space-y-8 lg:col-span-7">
            {/* Intro */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-5"
            >
              <h3 className="text-2xl font-bold leading-snug text-white sm:text-3xl">
                Hi, I'm{" "}
                <span className="rounded-lg border border-emerald-500/30 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 px-3 py-1 text-emerald-400">
                  Kouser Ahamed
                </span>
              </h3>

              <p className="text-base leading-relaxed text-gray-400 sm:text-lg">
                I am a{" "}
                <span className="font-semibold text-emerald-400">
                  Full-Stack Web Developer
                </span>{" "}
                focused on building modern, scalable, and user-friendly web
                applications with clean architecture and smooth user
                experiences.
              </p>

              <p className="text-sm leading-relaxed text-gray-400 sm:text-base">
                My expertise includes frontend development with React and
                Next.js, backend development using Node.js and Express.js,
                database management, REST API integration, and deployment
                workflows. I enjoy solving real-world problems through
                performance-focused and maintainable code.
              </p>
            </motion.div>

            {/* Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 gap-4 sm:grid-cols-3"
            >
              {highlights.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="group rounded-2xl border border-white/10 bg-white/5 p-5 text-center backdrop-blur-sm transition-all hover:border-emerald-500/30"
                >
                  <item.icon
                    className={`${item.color} mx-auto mb-3 transition-transform group-hover:scale-110`}
                    size={30}
                  />

                  <p className="text-sm font-semibold text-gray-300">
                    {item.label}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            {/* Core Technologies */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="mb-5 flex items-center gap-3">
                <FiCode className="text-emerald-400" size={24} />

                <h4 className="text-xl font-bold text-white">
                  Core Technologies
                </h4>
              </div>

              <div className="flex flex-wrap gap-3">
                {coreStack.map((tech, i) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.03 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="cursor-default rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-xs text-gray-300 backdrop-blur-sm transition-all hover:border-emerald-500/30 hover:text-emerald-400 sm:text-sm"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* Advanced Skills */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="mb-5 flex items-center gap-3">
                <FiCpu className="text-cyan-400" size={24} />

                <h4 className="text-xl font-bold text-white">
                  Advanced Capabilities
                </h4>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {advancedTech.map((skill, i) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="group flex items-start gap-3"
                  >
                    <FiCheckCircle
                      className="mt-1 shrink-0 text-emerald-500 transition-transform group-hover:scale-110"
                      size={16}
                    />

                    <span className="text-sm leading-relaxed text-gray-400 transition-colors group-hover:text-gray-200">
                      {skill}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5"
          >
            <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-6 shadow-2xl backdrop-blur-xl sm:p-8">
              <div className="mb-8 flex items-center gap-4">
                <div className="rounded-2xl border border-emerald-500/30 bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 p-4">
                  <FiLayers className="text-emerald-400" size={28} />
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white sm:text-2xl">
                    Development Journey
                  </h3>

                  <p className="text-sm text-gray-400">
                    Consistently learning & improving
                  </p>
                </div>
              </div>

              <div className="mb-8 space-y-4">
                {[
                  "Developed 12+ responsive full-stack applications",
                  "Built scalable MERN stack projects",
                  "Integrated APIs for dynamic user experiences",
                  "Designed optimized database structures",
                  "Implemented secure authentication systems",
                  "Hands-on experience with deployment workflows",
                  "Focused on clean architecture & maintainable code",
                  "Continuously improving backend & system design skills",
                ].map((point, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="group flex items-start gap-3"
                  >
                    <div className="mt-1 rounded-full bg-emerald-500/20 p-1">
                      <div className="h-2 w-2 rounded-full bg-emerald-500 transition-transform group-hover:scale-150" />
                    </div>

                    <span className="text-sm leading-relaxed text-gray-300 transition-colors group-hover:text-white">
                      {point}
                    </span>
                  </motion.div>
                ))}
              </div>

              <MotionLink
                href="/contact"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-emerald-500 to-green-600 py-4 text-sm font-bold text-white shadow-lg shadow-emerald-500/25 transition-all hover:shadow-emerald-500/40 sm:text-base"
              >
                Let’s Work Together
              </MotionLink>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}