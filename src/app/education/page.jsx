"use client";

import { motion } from "framer-motion";
import { FiBookOpen } from "react-icons/fi";
import { FaGraduationCap } from "react-icons/fa";
import { cn } from "@/lib/utils";

const educationData = [
  {
    year: "2022 – 2025",
    gpa: "3.36 / 4.00",
    degree: "B.Sc. in Computer Science & Engineering",
    institution: "Daffodil International University",
    description:
      "Focused on advanced software engineering principles, full-stack web development, system design, databases, and scalable architecture. Built strong expertise in solving real-world engineering problems through modern technologies.",
    side: "right",
  },
  {
    year: "2018 – 2019",
    gpa: "4.92 / 5.00",
    degree: "Higher Secondary Certificate (Science)",
    institution: "Sara Marwari School And College",
    description:
      "Developed a strong foundation in mathematics, physics, and computer science fundamentals. Strengthened analytical thinking and problem-solving skills essential for engineering studies.",
    side: "left",
  },
  {
    year: "2016 – 2017",
    gpa: "4.56 / 5.00",
    degree: "Secondary School Certificate (Science)",
    institution: "Bansherbada High School",
    description:
      "Discovered early passion for technology and logical reasoning. Built discipline in academic learning and developed curiosity toward computing and programming concepts.",
    side: "right",
  },
];

export default function Education() {
  return (
    <section className="relative bg-[#05060a] text-white py-8 md:py-12 overflow-hidden">

      {/* ===== BACKGROUND ===== */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/4 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-emerald-500/10 blur-[120px] md:blur-[180px] rounded-full animate-pulse" />
        <div className="absolute bottom-1/3 right-1/4 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-cyan-500/10 blur-[120px] md:blur-[180px] rounded-full animate-pulse" />

        <div className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,0.12) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 lg:px-12">

        {/* ===== HEADER ===== */}
        <div className="text-center mb-6 md:mb-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold tracking-tight"
          >
            Academic{" "}
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-500 bg-clip-text text-transparent">
              Journey
            </span>
          </motion.h2>

          <p className="mt-2 md:mt-3 max-w-2xl mx-auto text-gray-400 text-sm md:text-base leading-relaxed">
            A structured overview of my academic background, showcasing continuous growth,
            discipline, and a strong foundation in computer science and engineering.
          </p>
        </div>

        {/* ===== TIMELINE ===== */}
        <div className="relative">

          {/* RESPONSIVE LINE (Small এ বামে, Medium/Large এ সেন্টারে) */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] -translate-x-1/2
                          bg-gradient-to-b from-emerald-500/20 via-white/10 to-cyan-500/20
                          shadow-[0_0_25px_rgba(16,185,129,0.15)]" />

          <div className="space-y-8 md:space-y-12">

            {educationData.map((item, index) => (
              <div
                key={index}
                className="relative flex items-center justify-start md:justify-normal"
              >

                {/* RESPONSIVE DOT (Small এ বামে লাইনের উপর, Medium এ সেন্টারে) */}
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 z-20">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 200 }}
                    className="w-8 h-8 md:w-12 md:h-12 rounded-full
                               bg-[#0b0c10]
                               border border-emerald-500/40
                               flex items-center justify-center
                               shadow-[0_0_20px_rgba(16,185,129,0.2)] md:shadow-[0_0_40px_rgba(16,185,129,0.25)]
                               backdrop-blur-xl"
                  >
                    <FaGraduationCap className="text-emerald-400 text-[12px] md:text-[18px]" />
                  </motion.div>
                </div>

                {/* CARD (Small এ পুরো জায়গা নিবে এবং বামে মার্জিন থাকবে আইকনের জন্য) */}
                <div
                  className={cn(
                    "w-full pl-12 md:pl-0 md:w-[45%]",
                    item.side === "right"
                      ? "md:ml-auto"
                      : "md:mr-auto"
                  )}
                >
                  <motion.div
                    initial={{
                      opacity: 0,
                      y: 30,
                      // মোবাইল স্ক্রিনে শুধু নিচ থেকে উপরে আসবে (X-axis অ্যানিমেশন অফ রাখা হয়েছে ক্লিন লুকের জন্য)
                      x: typeof window !== "undefined" && window.innerWidth < 768 ? 0 : (item.side === "right" ? 40 : -40),
                    }}
                    whileInView={{ opacity: 1, y: 0, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="relative p-4 md:p-6 rounded-2xl md:rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-2xl transition-all duration-300 hover:border-emerald-500/40 hover:shadow-[0_25px_90px_rgba(16,185,129,0.15)] group overflow-hidden"
                  >

                    {/* HOVER GLOW LAYER */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500
                                    bg-gradient-to-br from-emerald-500/10 via-transparent to-cyan-500/10" />

                    {/* META */}
                    <div className="flex flex-wrap gap-2 mb-3">
                      <span className="px-2.5 py-0.5 md:px-3 md:py-1 rounded-full text-[11px] md:text-xs bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-medium">
                        {item.year}
                      </span>

                      <span className="px-2.5 py-0.5 md:px-3 md:py-1 rounded-full text-[11px] md:text-xs bg-white/5 border border-white/10 text-gray-400">
                        GPA: {item.gpa}
                      </span>
                    </div>

                    {/* TITLE */}
                    <h3 className="text-lg md:text-2xl font-semibold text-white group-hover:text-emerald-400 transition-colors duration-300">
                      {item.degree}
                    </h3>

                    {/* INSTITUTION */}
                    <div className="flex items-center gap-2 text-xs md:text-sm text-emerald-400/80 mt-1 mb-2.5">
                      <FiBookOpen className="flex-shrink-0" size={14} />
                      <span className="line-clamp-1">{item.institution}</span>
                    </div>

                    {/* DESCRIPTION */}
                    <p className="text-xs md:text-sm leading-relaxed text-gray-400">
                      {item.description}
                    </p>

                  </motion.div>
                </div>

              </div>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
}