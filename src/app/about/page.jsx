"use client";
import { motion } from "framer-motion";
import { FiCode, FiCpu, FiLayers, FiPlay } from "react-icons/fi";
import { cn } from "@/lib/utils";

const coreStack = [
  "HTML, CSS", "Tailwind CSS", "JavaScript (ES6+)", "React.js", 
  "Next.js", "Node.js", "Express.js", "MongoDB", "PostgreSQL", 
  "SQL", "Git & GitHub"
];

const advancedTech = [
  "REST API Development & Integration",
  "Database Design & CRUD Operations",
  "Responsive Web Application Development",
  "AI Tools Integration",
  "Authentication & Authorization",
  "Component-based UI Architecture",
  "Project Deployment (Vercel)",
  "Multi-role based architecture"
];

const experiencePoints = [
  "Built multiple responsive web applications",
  "Developed full-stack projects using React, Next.js & Node.js",
  "Integrated APIs to create dynamic applications",
  "Designed and managed database structures",
  "Implemented authentication systems",
  "CI/CD pipeline understanding",
  "Worked on real-world project-based learning",
  "Improving system design and backend understanding"
];

export default function About() {
  return (
    <section className="py-20 bg-black text-white relative overflow-hidden mt-10">
      {/* Background Grid Effect from image_923306.jpg */}
      <div className="absolute inset-0 opacity-20" 
           style={{ backgroundImage: `radial-gradient(#1e293b 1px, transparent 1px)`, backgroundSize: '40px 40px' }} 
      />

      <div className="container mx-auto px-6 lg:px-20 relative z-10">
        {/* Section Heading */}
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-2">About Me</h2>
          <div className="w-20 h-1 bg-green-500 rounded-full" />
        </div>

        <div className="grid lg:grid-cols-12 gap-12">
          {/* Left Column: Info & Skills */}
          <div className="lg:col-span-7 space-y-10">
            <div>
              <h3 className="text-xl md:text-2xl mb-4">
                Hi, I'm <span className="px-2 py-1 bg-white/10 border border-white/20 rounded text-white font-medium">Kouser Ahamed</span>, a <span className="text-green-400 font-semibold">Full-Stack Web Developer.</span>
              </h3>
              <p className="text-gray-400 leading-relaxed text-lg">
                I enjoy building modern and responsive web applications using React, Next.js, Node.js, and MongoDB. 
                I focus on writing clean code, building REST APIs, and creating practical real-world projects 
                while continuously improving my backend and system design skills.
              </p>
            </div>

            {/* Core Stack */}
            <div>
              <div className="flex items-center gap-2 text-green-400 mb-6">
                <FiCode className="text-xl" />
                <h4 className="text-xl font-bold text-white">Core Stack</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {coreStack.map((tech) => (
                  <span key={tech} className="px-4 py-1.5 bg-white/5 border border-white/10 rounded-md text-sm text-gray-300 hover:border-green-500/50 transition-colors">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Advanced Technologies */}
            <div>
              <div className="flex items-center gap-2 text-green-400 mb-6">
                <FiCpu className="text-xl" />
                <h4 className="text-xl font-bold text-white">Advanced Technologies</h4>
              </div>
              <div className="grid md:grid-cols-2 gap-y-3 gap-x-6">
                {advancedTech.map((item) => (
                  <div key={item} className="flex items-center gap-3 group">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500 group-hover:scale-150 transition-transform" />
                    <span className="text-gray-400 text-sm group-hover:text-gray-200">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Experience Card */}
          <div className="lg:col-span-5">
            <div className="bg-[#0f1115] border border-white/5 rounded-3xl p-8 sticky top-24 shadow-2xl">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2 bg-green-500/10 rounded-lg text-green-400">
                  <FiLayers size={24} />
                </div>
                <h3 className="text-2xl font-bold">Development Experience</h3>
              </div>

              <div className="space-y-4 mb-10">
                {experiencePoints.map((point) => (
                  <div key={point} className="flex items-start gap-3">
                    <FiPlay className="text-green-500 mt-1 shrink-0" size={14} />
                    <span className="text-gray-300 text-[15px] leading-tight">{point}</span>
                  </div>
                ))}
              </div>

              <button className="w-full py-4 bg-white text-black font-bold rounded-xl hover:bg-gray-200 transition-all flex items-center justify-center gap-2">
                Let's Work Together
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}