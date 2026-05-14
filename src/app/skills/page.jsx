"use client";
import { motion } from "framer-motion";
import { 
  SiReact, SiNextdotjs, SiTailwindcss, SiJavascript, 
  SiNodedotjs, SiExpress, SiMongodb, SiMysql 
} from "react-icons/si";
import { 
  FiLock, FiServer, FiDatabase, FiLayers, 
  FiCpu, FiZap, FiRefreshCw, FiGrid 
} from "react-icons/fi";

const skillCategories = [
  {
    title: "Frontend Development",
    skills: [
      { name: "React.js", icon: SiReact, color: "text-cyan-400" },
      { name: "Next.js", icon: SiNextdotjs, color: "text-white" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-teal-400" },
      { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
    ],
  },
  {
    title: "Backend Development",
    skills: [
      { name: "Node.js", icon: SiNodedotjs, color: "text-green-500" },
      { name: "Express.js", icon: SiExpress, color: "text-gray-400" },
      { name: "REST APIs", icon: FiServer, color: "text-blue-400" },
      { name: "Authentication", icon: FiLock, color: "text-purple-400" },
    ],
  },
  {
    title: "Databases & Architecture",
    skills: [
      { name: "MongoDB", icon: SiMongodb, color: "text-emerald-500" },
      { name: "MySQL", icon: SiMysql, color: "text-orange-500" },
      { name: "Database Design", icon: FiDatabase, color: "text-yellow-500" },
      { name: "API Integration", icon: FiLayers, color: "text-cyan-500" },
    ],
  },
  {
    title: "Advanced Technologies",
    skills: [
      { name: "QR Code Systems", icon: FiGrid, color: "text-gray-300" },
      { name: "Real-time Apps", icon: FiZap, color: "text-yellow-400" },
      { name: "CI/CD", icon: FiRefreshCw, color: "text-green-400" },
      { name: "AI Tools", icon: FiCpu, color: "text-purple-500" },
    ],
  },
];

const stats = [
  { label: "Core Technologies", value: "8+" },
  { label: "Years Experience", value: "1+" },
  { label: "Projects Built", value: "10+" },
];

export default function Skills() {
  return (
    <section className="py-20 bg-black text-white">
      <div className="container mx-auto px-6 lg:px-20 text-center">
        <h2 className="text-4xl font-bold mb-2">My Skills</h2>
        <p className="text-gray-500 text-sm mb-16">
          Technologies I use to build modern, scalable and user-friendly web applications
        </p>

        <div className="space-y-16">
          {skillCategories.map((category) => (
            <div key={category.title} className="relative border-t border-white/10 pt-8">
              {/* Category Label on Border */}
              <span className="absolute -top-3 left-0 bg-black pr-4 text-sm font-semibold tracking-wider text-gray-300 uppercase">
                {category.title}
              </span>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {category.skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    whileHover={{ scale: 1.02, backgroundColor: "rgba(255, 255, 255, 0.05)" }}
                    className="flex flex-col items-center justify-center p-8 rounded-xl bg-white/2 border border-white/5 transition-all"
                  >
                    <skill.icon className={`text-4xl mb-4 ${skill.color}`} />
                    <span className="text-xs font-medium text-gray-400 uppercase tracking-tighter">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20 max-w-3xl mx-auto">
          {stats.map((stat) => (
            <div key={stat.label} className="p-8 rounded-2xl bg-white/2 border border-white/5">
              <div className="text-3xl font-bold mb-1">{stat.value}</div>
              <div className="text-xs text-gray-500 uppercase tracking-widest">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}