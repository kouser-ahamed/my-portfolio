"use client";

import { motion } from "framer-motion";
import { FiBriefcase, FiExternalLink, FiLinkedin } from "react-icons/fi";
import { SiPrisma, SiNestjs } from "react-icons/si";
import { cn } from "@/lib/utils";

// NOTE: double-check the exact spelling of the company name below (CodeOnix)
// before publishing — update it here if it's spelled differently.
// Add more objects to this array whenever a new job is added — the timeline
// below builds itself from this data, same pattern as the Education page.
const experienceData = [
  {
    duration: "27 June 2026 – 26 September 2026",
    status: "Internship",
    role: "MERN Stack Developer (Intern)",
    company: "CodeOnix",
    companyLink: "https://www.codeonix.tech/portfolio",
    linkedin: "https://www.linkedin.com/company/codeonix-software/people",
    description:
      "Working as a MERN Stack Developer, building and maintaining full-stack web applications with the MERN stack (MongoDB, Express.js, React.js, Node.js). Collaborating with the team on real-world features, API development, and database design while continuously sharpening backend and frontend skills.",
    responsibilities: [
      "Developing and maintaining full-stack features using React.js / Next.js on the frontend and Node.js / Express.js on the backend.",
      "Designing and working with MongoDB schemas for scalable, production-ready data models.",
      "Collaborating with the team on code reviews, feature planning, and day-to-day problem solving.",
      "Writing clean, maintainable, and reusable code following modern best practices.",
    ],
    currentlyLearning: [
      { name: "Prisma ORM", Icon: SiPrisma, color: "text-teal-400", bg: "bg-teal-500/10" },
      { name: "NestJS", Icon: SiNestjs, color: "text-red-400", bg: "bg-red-500/10" },
    ],
    side: "right",
  },
];

export default function ExperiencePage() {
  return (
    <section className="relative bg-[#05060a] text-white py-8 md:py-12 overflow-hidden min-h-screen">
      {/* ===== BACKGROUND ===== */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/4 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-emerald-500/10 blur-[120px] md:blur-[180px] rounded-full animate-pulse" />
        <div className="absolute bottom-1/3 right-1/4 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-cyan-500/10 blur-[120px] md:blur-[180px] rounded-full animate-pulse" />

        <div
          className="absolute inset-0 opacity-[0.05]"
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
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold tracking-tight"
          >
            Work{" "}
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-500 bg-clip-text text-transparent">
              Experience
            </span>
          </motion.h1>

          <p className="mt-2 md:mt-3 max-w-2xl mx-auto text-gray-400 text-sm md:text-base leading-relaxed">
            Professional experience gained while building real production
            features as part of a development team.
          </p>
        </div>

        {/* ===== TIMELINE ===== */}
        <div className="relative">
          {/* RESPONSIVE LINE */}
          <div
            className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] -translate-x-1/2
                       bg-gradient-to-b from-emerald-500/20 via-white/10 to-cyan-500/20
                       shadow-[0_0_25px_rgba(16,185,129,0.15)]"
          />

          <div className="space-y-8 md:space-y-12">
            {experienceData.map((item, index) => (
              <div
                key={index}
                className="relative flex items-center justify-start md:justify-normal"
              >
                {/* RESPONSIVE DOT */}
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
                    <FiBriefcase className="text-emerald-400 text-[12px] md:text-[18px]" />
                  </motion.div>
                </div>

                {/* CARD */}
                <div
                  className={cn(
                    "w-full pl-12 md:pl-0 md:w-[45%]",
                    item.side === "right" ? "md:ml-auto" : "md:mr-auto"
                  )}
                >
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="relative p-4 md:p-6 rounded-2xl md:rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-2xl transition-all duration-300 hover:border-emerald-500/40 hover:shadow-[0_25px_90px_rgba(16,185,129,0.15)] group overflow-hidden"
                  >
                    {/* HOVER GLOW LAYER */}
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500
                                 bg-gradient-to-br from-emerald-500/10 via-transparent to-cyan-500/10 pointer-events-none"
                    />

                    {/* META */}
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <span className="px-2.5 py-0.5 md:px-3 md:py-1 rounded-full text-[11px] md:text-xs bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-medium">
                        {item.duration}
                      </span>

                      <span className="flex items-center gap-1.5 px-2.5 py-0.5 md:px-3 md:py-1 rounded-full text-[11px] md:text-xs bg-white/5 border border-white/10 text-gray-300">
                        <span className="relative flex h-1.5 w-1.5">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                          <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-400" />
                        </span>
                        {item.status}
                      </span>

                      {item.joinDate && (
                        <span className="px-2.5 py-0.5 md:px-3 md:py-1 rounded-full text-[11px] md:text-xs bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 font-medium">
                          {item.joinDate}
                        </span>
                      )}
                    </div>

                    {/* TITLE */}
                    <h3 className="text-lg md:text-2xl font-semibold text-white group-hover:text-emerald-400 transition-colors duration-300">
                      {item.role}
                    </h3>

                    {/* COMPANY + LINKS */}
                    <div className="relative z-20 flex flex-wrap items-center gap-2.5 mt-2 mb-4">
                      <a
                        href={item.companyLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative z-20 flex items-center gap-2 px-3.5 py-2 rounded-xl
                                   bg-emerald-500/10 border border-emerald-500/30
                                   text-sm md:text-base font-semibold text-emerald-300
                                   hover:bg-emerald-500/20 hover:border-emerald-500/50
                                   transition-all duration-300"
                      >
                        {item.company}
                        <FiExternalLink size={15} />
                      </a>

                      {item.linkedin && (
                        <a
                          href={item.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${item.company} on LinkedIn`}
                          className="relative z-20 flex items-center justify-center w-10 h-10 rounded-xl
                                     bg-white/5 border border-white/10 text-gray-300
                                     hover:text-cyan-300 hover:bg-cyan-500/10 hover:border-cyan-500/40
                                     transition-all duration-300"
                        >
                          <FiLinkedin size={18} />
                        </a>
                      )}
                    </div>

                    {/* DESCRIPTION */}
                    <p className="text-xs md:text-sm leading-relaxed text-gray-400 mb-4">
                      {item.description}
                    </p>

                    {/* RESPONSIBILITIES */}
                    {item.responsibilities?.length > 0 && (
                      <ul className="space-y-2 mb-4">
                        {item.responsibilities.map((r, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2 text-xs md:text-sm text-gray-400 leading-relaxed"
                          >
                            <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-emerald-500 shrink-0" />
                            {r}
                          </li>
                        ))}
                      </ul>
                    )}

                    {/* CURRENTLY LEARNING */}
                    {item.currentlyLearning?.length > 0 && (
                      <div>
                        <p className="text-[11px] md:text-xs uppercase tracking-widest text-gray-500 font-bold mb-2">
                          Currently Learning
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {item.currentlyLearning.map(({ name, Icon, color, bg }) => (
                            <div
                              key={name}
                              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-white/10 ${bg} backdrop-blur-sm`}
                            >
                              <Icon className={`${color} text-sm`} />
                              <span className="text-xs font-medium text-gray-200">
                                {name}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
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