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
    accent: "from-cyan-500/20",
    skills: [
      { name: "React.js", icon: SiReact, color: "text-cyan-400" },
      { name: "Next.js", icon: SiNextdotjs, color: "text-white" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-teal-400" },
      { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
    ],
  },
  {
    title: "Backend Development",
    accent: "from-green-500/20",
    skills: [
      { name: "Node.js", icon: SiNodedotjs, color: "text-green-500" },
      { name: "Express.js", icon: SiExpress, color: "text-gray-300" },
      { name: "REST APIs", icon: FiServer, color: "text-blue-400" },
      { name: "Authentication", icon: FiLock, color: "text-purple-400" },
    ],
  },
  {
    title: "Databases & Architecture",
    accent: "from-orange-500/20",
    skills: [
      { name: "MongoDB", icon: SiMongodb, color: "text-emerald-500" },
      { name: "MySQL", icon: SiMysql, color: "text-orange-500" },
      { name: "Database Design", icon: FiDatabase, color: "text-yellow-500" },
      { name: "API Integration", icon: FiLayers, color: "text-cyan-500" },
    ],
  },
  {
    title: "Advanced Technologies",
    accent: "from-purple-500/20",
    skills: [
      { name: "QR Systems", icon: FiGrid, color: "text-gray-100" },
      { name: "Real-time Apps", icon: FiZap, color: "text-yellow-400" },
      { name: "CI/CD", icon: FiRefreshCw, color: "text-green-400" },
      { name: "AI Tools", icon: FiCpu, color: "text-purple-500" },
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 }
};

export default function Skills() {
  return (
    <section className="py-24 bg-black text-white relative overflow-hidden">
      {/* Subtle Background Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-green-500/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-[120px]" />

      <div className="container mx-auto px-6 lg:px-20 relative z-10">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Technical <span className="text-green-500">Expertise</span>
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            className="h-1 bg-green-500 mx-auto rounded-full mb-6"
          />
          <p className="text-gray-400 max-w-xl mx-auto text-sm md:text-base italic">
            "Turning complex problems into elegant, scalable code solutions."
          </p>
        </div>

        <div className="grid gap-16">
          {skillCategories.map((category) => (
            <motion.div 
              key={category.title}
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="relative"
            >
              <div className="flex items-center gap-4 mb-8">
                <h3 className="text-xs uppercase tracking-[0.3em] font-bold text-gray-500 whitespace-nowrap">
                  {category.title}
                </h3>
                <div className="h-[1px] w-full bg-gradient-to-r from-white/10 to-transparent" />
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                {category.skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    variants={itemVariants}
                    whileHover={{ y: -8, scale: 1.02 }}
                    className="group relative p-6 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-white/20 hover:bg-white/[0.05] transition-all duration-300"
                  >
                    {/* Hover Glow Effect */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${category.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`} />
                    
                    <div className="relative z-10 flex flex-col items-center">
                      {/* Original Brand Colors applied here */}
                      <skill.icon className={`text-4xl mb-4 transition-transform duration-300 group-hover:scale-110 ${skill.color}`} />
                      <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 group-hover:text-white transition-colors">
                        {skill.name}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Improved Stats Section */}
        <div className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {[
            { label: "Core Technologies", value: "08+" },
            { label: "Years Experience", value: "01+" },
            { label: "Projects Delivered", value: "12+" },
          ].map((stat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative p-[1px] rounded-3xl bg-gradient-to-b from-white/10 to-transparent"
            >
              <div className="bg-[#0a0a0a] rounded-[23px] p-8 text-center">
                <div className="text-4xl font-black bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-[10px] text-green-500 uppercase tracking-[0.2em] font-bold">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}