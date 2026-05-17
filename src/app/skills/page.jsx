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
  SiGit,
  SiVercel,
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
} from "react-icons/fi";

const skillCategories = [
  {
    title: "Frontend Engineering",
    description: "Building responsive, modern & high-performance interfaces.",
    gradient: "from-cyan-500/20 via-blue-500/10 to-transparent",
    borderColor: "group-hover:border-cyan-500/50",
    skills: [
      { name: "React.js", icon: SiReact, color: "text-cyan-400", bg: "bg-cyan-500/10" },
      { name: "Next.js", icon: SiNextdotjs, color: "text-white", bg: "bg-white/10" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-teal-400", bg: "bg-teal-500/10" },
      { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400", bg: "bg-yellow-500/10" },
    ],
  },
  {
    title: "Backend Systems",
    description: "Scalable APIs, authentication & server-side architecture.",
    gradient: "from-emerald-500/20 via-green-500/10 to-transparent",
    borderColor: "group-hover:border-emerald-500/50",
    skills: [
      { name: "Node.js", icon: SiNodedotjs, color: "text-green-500", bg: "bg-green-500/10" },
      { name: "Express.js", icon: SiExpress, color: "text-gray-300", bg: "bg-gray-500/10" },
      { name: "REST APIs", icon: FiServer, color: "text-blue-400", bg: "bg-blue-500/10" },
      { name: "Authentication", icon: FiLock, color: "text-purple-400", bg: "bg-purple-500/10" },
    ],
  },
  {
    title: "Database & Storage",
    description: "Optimized data architecture & seamless integrations.",
    gradient: "from-orange-500/20 via-yellow-500/10 to-transparent",
    borderColor: "group-hover:border-orange-500/50",
    skills: [
      { name: "MongoDB", icon: SiMongodb, color: "text-emerald-500", bg: "bg-emerald-500/10" },
      { name: "MySQL", icon: SiMysql, color: "text-orange-500", bg: "bg-orange-500/10" },
      { name: "Database Design", icon: FiDatabase, color: "text-yellow-500", bg: "bg-yellow-500/10" },
      { name: "API Integration", icon: FiLayers, color: "text-cyan-500", bg: "bg-cyan-500/10" },
    ],
  },
  {
    title: "Tools & Workflow",
    description: "Modern tools powering intelligent digital products.",
    gradient: "from-purple-500/20 via-pink-500/10 to-transparent",
    borderColor: "group-hover:border-purple-500/50",
    skills: [
      { name: "Git & GitHub", icon: SiGit, color: "text-orange-500", bg: "bg-orange-500/10" },
      { name: "Vercel", icon: SiVercel, color: "text-white", bg: "bg-white/10" },
      { name: "CI/CD", icon: FiRefreshCw, color: "text-green-400", bg: "bg-green-500/10" },
      { name: "AI Tools", icon: FiCpu, color: "text-purple-400", bg: "bg-purple-500/10" },
    ],
  },
];

const stats = [
  { label: "Technologies", value: "15+", color: "from-emerald-400 to-green-600", icon: FiZap },
  { label: "Experience", value: "2+ Yrs", color: "from-cyan-400 to-blue-600", icon: FiCpu },
  { label: "Projects", value: "12+", color: "from-purple-400 to-pink-600", icon: FiGrid },
];

export default function Skills() {
  return (
    <section className="relative py-15 bg-black overflow-hidden">
      
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0a0a0a_1px,transparent_1px),linear-gradient(to_bottom,#0a0a0a_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-[128px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 10, repeat: Infinity, delay: 1 }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500/20 rounded-full blur-[128px]"
        />
      </div>

      <div className="container relative z-10 mx-auto px-6 lg:px-20">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-6"
          >
            <FiZap className="text-emerald-400" />
            <span className="text-sm font-medium text-gray-400 tracking-wider">TECHNICAL EXPERTISE</span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Skills & <span className="bg-gradient-to-r from-emerald-400 to-cyan-500 bg-clip-text text-transparent">Technologies</span>
          </h2>
          
          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Passionate about building scalable, high-performance and visually refined web applications using modern technologies.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              {/* Card Container */}
              <div className="relative h-full p-8 rounded-3xl bg-white/[0.02] border border-white/10 backdrop-blur-xl overflow-hidden transition-all duration-500 hover:border-white/20">
                
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                {/* Content */}
                <div className="relative z-10">
                  
                  {/* Header */}
                  <div className="flex items-start justify-between mb-8">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">
                        {category.title}
                      </h3>
                      <p className="text-sm text-gray-400 max-w-xs leading-relaxed">
                        {category.description}
                      </p>
                    </div>
                    
                    <motion.div
                      whileHover={{ rotate: 45 }}
                      className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 group-hover:text-emerald-400 group-hover:border-emerald-500/30 transition-all"
                    >
                      <FiZap size={20} />
                    </motion.div>
                  </div>

                  {/* Skills Grid */}
                  <div className="grid grid-cols-2 gap-4">
                    {category.skills.map((skill, i) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: idx * 0.1 + i * 0.05 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -5, scale: 1.02 }}
                        className="relative group/card"
                      >
                        <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/10 backdrop-blur-sm hover:bg-white/[0.05] hover:border-white/20 transition-all duration-300 text-center">
                          
                          {/* Icon Container */}
                          <div className={`w-14 h-14 rounded-xl ${skill.bg} border border-white/10 flex items-center justify-center mb-4 mx-auto group-hover/card:scale-110 transition-transform`}>
                            <skill.icon className={`text-2xl ${skill.color}`} />
                          </div>

                          {/* Skill Name */}
                          <span className="text-sm font-semibold text-gray-300 group-hover/card:text-white transition-colors">
                            {skill.name}
                          </span>

                          {/* Hover Glow */}
                          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity pointer-events-none" />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative"
            >
              <div className="relative p-10 rounded-3xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 backdrop-blur-xl overflow-hidden">
                
                {/* Gradient Glow */}
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />

                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="relative z-10 mb-6"
                >
                  <stat.icon className="text-4xl text-gray-600 group-hover:text-emerald-400 transition-colors" />
                </motion.div>

                {/* Value */}
                <h3 className={`relative z-10 text-5xl font-black bg-gradient-to-br ${stat.color} bg-clip-text text-transparent mb-3`}>
                  {stat.value}
                </h3>

                {/* Label */}
                <p className="relative z-10 text-xs font-semibold uppercase tracking-[0.2em] text-gray-500 group-hover:text-gray-400 transition-colors">
                  {stat.label}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}