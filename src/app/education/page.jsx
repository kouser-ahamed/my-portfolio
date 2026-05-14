"use client";
import { motion } from "framer-motion";
import { FiBookOpen } from "react-icons/fi";
import { cn } from "@/lib/utils";

const educationData = [
  {
    year: "2022 - 2026",
    gpa: "3.52 / 4.00",
    degree: "BSc in Computer Science & Engineering",
    institution: "Daffodil International University",
    description: "Focused on software engineering, full-stack web development, databases, and modern application architecture.",
    side: "right"
  },
  {
    year: "2017 - 2019",
    gpa: "4.17 / 5.00",
    degree: "Higher Secondary Certificate",
    institution: "Govt. Gurudayal College",
    description: "Completed higher secondary education with a Science background.",
    side: "left"
  },
  {
    year: "2015 - 2017",
    gpa: "4.82 / 5.00",
    degree: "Secondary School Certificate",
    institution: "Gobindapur High School",
    description: "Built strong interest in technology, computers, and problem solving.",
    side: "right"
  }
];

export default function Education() {
  return (
    <section className="pt-10 pb-20 bg-black text-white relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-20 relative z-10">
        
        {/* Section Heading matching image_91c280.png */}
        <div className="flex flex-col items-center mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 relative">
            Education
            <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-12 h-1 bg-green-500 rounded-full blur-[2px]" />
          </h2>
          <p className="text-gray-500 max-w-2xl text-sm md:text-base mt-4">
            My academic journey and continuous growth in computer science, software engineering, and modern web technologies.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-5xl mx-auto">
          
          {/* Central Vertical Line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 bg-white/10 hidden md:block" />

          <div className="space-y-12">
            {educationData.map((item, index) => (
              <div key={index} className="relative flex items-center justify-between md:justify-normal group">
                
                {/* Central Icon Node */}
                <div className="absolute left-1/2 -translate-x-1/2 hidden md:flex items-center justify-center z-20">
                  <motion.div 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    className="w-10 h-10 rounded-full bg-[#0f1115] border-2 border-green-500/50 flex items-center justify-center text-green-500 shadow-[0_0_15px_rgba(34,197,94,0.3)] group-hover:shadow-[0_0_20px_rgba(34,197,94,0.6)] transition-all"
                  >
                    <FiBookOpen size={18} />
                  </motion.div>
                </div>

                {/* Content Card */}
                <div className={cn(
                  "w-full md:w-[45%] z-10",
                  item.side === "right" ? "md:ml-auto" : "md:mr-auto text-left md:text-right"
                )}>
                  <motion.div
                    initial={{ opacity: 0, x: item.side === "right" ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-[#0f1115] border border-white/5 p-6 md:p-8 rounded-3xl hover:border-green-500/30 transition-all duration-300"
                  >
                    {/* Tags */}
                    <div className={cn(
                      "flex flex-wrap gap-2 mb-4",
                      item.side === "left" && "md:justify-end"
                    )}>
                      <span className="px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-medium">
                        {item.year}
                      </span>
                      <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-400 text-xs font-medium">
                        GPA: {item.gpa}
                      </span>
                    </div>

                    {/* Header Info */}
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-green-400 transition-colors">
                      {item.degree}
                    </h3>
                    <div className={cn(
                      "flex items-center gap-2 text-green-500/80 mb-4 text-sm font-medium",
                      item.side === "left" && "md:justify-end"
                    )}>
                      <FiBookOpen size={14} className={item.side === "left" ? "order-2" : "order-1"} />
                      <span className={item.side === "left" ? "order-1" : "order-2"}>{item.institution}</span>
                    </div>

                    {/* Description */}
                    <p className="text-gray-400 text-sm leading-relaxed">
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