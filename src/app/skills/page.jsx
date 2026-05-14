"use client";

import { motion } from "framer-motion";
import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiJavascript,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
} from "react-icons/si";

import {
  FiLock,
  FiServer,
  FiDatabase,
  FiLayers,
  FiCpu,
  FiZap,
  FiRefreshCw,
  FiGrid,
  FiArrowUpRight,
} from "react-icons/fi";

const skillCategories = [
  {
    title: "Frontend Engineering",
    description: "Building responsive, modern & high-performance interfaces.",
    accent: "from-cyan-500/20 via-cyan-400/5",
    skills: [
      { name: "React.js", icon: SiReact, color: "text-cyan-400" },
      { name: "Next.js", icon: SiNextdotjs, color: "text-white" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-teal-400" },
      { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
    ],
  },

  {
    title: "Backend Systems",
    description: "Scalable APIs, authentication & server-side architecture.",
    accent: "from-emerald-500/20 via-green-400/5",
    skills: [
      { name: "Node.js", icon: SiNodedotjs, color: "text-green-500" },
      { name: "Express.js", icon: SiExpress, color: "text-zinc-300" },
      { name: "REST APIs", icon: FiServer, color: "text-blue-400" },
      { name: "Authentication", icon: FiLock, color: "text-purple-400" },
    ],
  },

  {
    title: "Database & APIs",
    description: "Optimized data architecture & seamless integrations.",
    accent: "from-orange-500/20 via-yellow-400/5",
    skills: [
      { name: "MongoDB", icon: SiMongodb, color: "text-emerald-500" },
      { name: "MySQL", icon: SiMysql, color: "text-orange-500" },
      { name: "Database Design", icon: FiDatabase, color: "text-yellow-500" },
      { name: "API Integration", icon: FiLayers, color: "text-cyan-500" },
    ],
  },

  {
    title: "Advanced Solutions",
    description: "Modern tools powering intelligent digital products.",
    accent: "from-purple-500/20 via-pink-400/5",
    skills: [
      { name: "QR Systems", icon: FiGrid, color: "text-zinc-300" },
      { name: "Real-time Apps", icon: FiZap, color: "text-yellow-400" },
      { name: "CI/CD", icon: FiRefreshCw, color: "text-green-400" },
      { name: "AI Tools", icon: FiCpu, color: "text-purple-400" },
    ],
  },
];

const stats = [
  {
    label: "Technologies",
    value: "08+",
    color: "from-emerald-400 to-green-600",
  },
  {
    label: "Experience",
    value: "01+",
    color: "from-cyan-400 to-blue-600",
  },
  {
    label: "Projects",
    value: "12+",
    color: "from-purple-400 to-pink-600",
  },
];

export default function Skills() {
  return (
    <section className="relative overflow-hidden bg-black py-20 text-white">
      {/* Ambient Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[140px]" />
        <div className="absolute bottom-0 right-1/4 h-[500px] w-[500px] rounded-full bg-emerald-500/10 blur-[140px]" />
      </div>

      <div className="container relative z-10 mx-auto px-6 lg:px-20">
        {/* Header */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-5 py-2 text-[10px] font-semibold uppercase tracking-[0.35em] text-emerald-400 backdrop-blur-xl"
          >
            Technical Expertise
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-black leading-tight tracking-tight md:text-5xl"
          >
            Crafting Digital
            <span className="block bg-gradient-to-r from-white to-zinc-500 bg-clip-text text-transparent">
              Experiences
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-zinc-400 md:text-base"
          >
            Passionate about building scalable, high-performance and visually
            refined web applications using modern technologies.
          </motion.p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl"
            >
              {/* Glow */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${category.accent} opacity-0 transition duration-700 group-hover:opacity-100`}
              />

              {/* Header */}
              <div className="relative z-10 mb-10 flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-bold tracking-tight">
                    {category.title}
                  </h3>

                  <p className="mt-2 max-w-sm text-sm leading-relaxed text-zinc-400">
                    {category.description}
                  </p>
                </div>

                <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-zinc-400 transition duration-500 group-hover:rotate-45 group-hover:text-white">
                  <FiArrowUpRight size={16} />
                </div>
              </div>

              {/* Skills */}
              <div className="grid grid-cols-2 gap-4">
                {category.skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.2 }}
                    className="group/card relative overflow-hidden rounded-3xl border border-white/10 bg-black/30 p-5 transition-all duration-500 hover:border-white/20"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-white/[0.04] to-transparent opacity-0 transition duration-500 group-hover/card:opacity-100" />

                    <div className="relative z-10 flex flex-col items-center text-center">
                      <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] mx-auto">
                        <skill.icon
                          className={`text-[28px] ${skill.color}`}
                        />
                      </div>

                      <span className="text-sm font-semibold tracking-wide text-zinc-300 transition-colors duration-300 group-hover/card:text-white">
                        {skill.name}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-1 gap-6 md:grid-cols-3">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.03] p-10 backdrop-blur-xl"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

              <div className="relative z-10 text-center">
                <h3
                  className={`bg-gradient-to-br ${stat.color} bg-clip-text text-5xl font-black text-transparent`}
                >
                  {stat.value}
                </h3>

                <p className="mt-4 text-[10px] font-semibold uppercase tracking-[0.35em] text-zinc-500">
                  {stat.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}