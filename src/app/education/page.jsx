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
    <section className="relative bg-[#05060a] text-white py-28 overflow-hidden">

      {/* ===== BACKGROUND (UPGRADED ONLY VISUAL) ===== */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-emerald-500/10 blur-[180px] rounded-full animate-pulse" />
        <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-cyan-500/10 blur-[180px] rounded-full animate-pulse" />

        <div className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,0.12) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-16">

        {/* ===== HEADER (SAME CONTENT, BETTER STYLE) ===== */}
        <div className="text-center mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold"
          >
            Academic{" "}
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-500 bg-clip-text text-transparent">
              Journey
            </span>
          </motion.h2>

          <p className="mt-6 max-w-2xl mx-auto text-gray-400 text-sm md:text-base leading-relaxed">
            A structured overview of my academic background, showcasing continuous growth,
            discipline, and a strong foundation in computer science and engineering.
          </p>
        </div>

        {/* ===== TIMELINE ===== */}
        <div className="relative">

          {/* CENTER LINE (MORE GLOW) */}
          <div className="absolute hidden md:block left-1/2 top-0 bottom-0 w-[2px]
                          bg-gradient-to-b from-emerald-500/20 via-white/10 to-cyan-500/20
                          shadow-[0_0_25px_rgba(16,185,129,0.15)]" />

          <div className="space-y-20">

            {educationData.map((item, index) => (
              <div
                key={index}
                className="relative flex items-center md:justify-normal"
              >

                {/* DOT (MORE PREMIUM) */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 z-20">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 200 }}
                    className="w-12 h-12 rounded-full
                               bg-[#0b0c10]
                               border border-emerald-500/40
                               flex items-center justify-center
                               shadow-[0_0_40px_rgba(16,185,129,0.25)]
                               backdrop-blur-xl"
                  >
                    <FaGraduationCap className="text-emerald-400" size={18} />
                  </motion.div>
                </div>

                {/* CARD */}
                <div
                  className={cn(
                    "w-full md:w-[45%]",
                    item.side === "right"
                      ? "md:ml-auto"
                      : "md:mr-auto md:text-right"
                  )}
                >
                  <motion.div
                    initial={{
                      opacity: 0,
                      y: 40,
                      x: item.side === "right" ? 40 : -40,
                    }}
                    whileInView={{ opacity: 1, y: 0, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: index * 0.15 }}
                    className="relative p-8 rounded-3xl
                               bg-white/[0.03]
                               border border-white/10
                               backdrop-blur-2xl
                               transition-all duration-300
                               hover:border-emerald-500/40
                               hover:shadow-[0_25px_90px_rgba(16,185,129,0.15)]
                               group overflow-hidden"
                  >

                    {/* HOVER GLOW LAYER */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500
                                    bg-gradient-to-br from-emerald-500/10 via-transparent to-cyan-500/10" />

                    {/* META */}
                    <div
                      className={cn(
                        "flex flex-wrap gap-2 mb-5",
                        item.side === "left" && "md:justify-end"
                      )}
                    >
                      <span className="px-3 py-1 rounded-full text-xs bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                        {item.year}
                      </span>

                      <span className="px-3 py-1 rounded-full text-xs bg-white/5 border border-white/10 text-gray-400">
                        GPA: {item.gpa}
                      </span>
                    </div>

                    {/* TITLE */}
                    <h3 className="text-xl md:text-2xl font-semibold text-white group-hover:text-emerald-400 transition-colors">
                      {item.degree}
                    </h3>

                    {/* INSTITUTION */}
                    <div
                      className={cn(
                        "flex items-center gap-2 text-sm text-emerald-400/80 mt-2 mb-4",
                        item.side === "left" && "md:justify-end"
                      )}
                    >
                      <FiBookOpen size={14} />
                      <span>{item.institution}</span>
                    </div>

                    {/* DESCRIPTION */}
                    <p className="text-sm leading-relaxed text-gray-400">
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