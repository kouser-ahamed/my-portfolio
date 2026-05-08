"use client";
import Image from "next/image";
import { motion } from "framer-motion";
// Lucide এর বদলে আমরা React Icons ব্যবহার করছি যা অনেক বেশি স্টেবল
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi"; 
import { cn } from "@/lib/utils"; 

const techStack = [
  { name: "React", color: "text-blue-400" },
  { name: "Next.js", color: "text-purple-400" },
  { name: "Node.js", color: "text-green-400" },
  { name: "Express", color: "text-gray-400" },
  { name: "MongoDB", color: "text-emerald-500" },
  { name: "REST APIs", color: "text-cyan-400" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-[#0a0a0a] flex items-center pt-20 overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 z-0 opacity-20" 
           style={{ backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>

      <div className="container mx-auto px-6 lg:px-20 z-10 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-500 text-xs mb-6">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            Available for New Opportunities
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6">
            Kouser Ahamed
          </h1>
          
          <p className="text-xl text-gray-400 mb-8 max-w-lg">
            Building Scalable and Responsive Web Applications.
          </p>

          <div className="flex flex-wrap gap-3 mb-10">
            {techStack.map((tech) => (
              <span key={tech.name} className={cn("px-4 py-1.5 rounded-md bg-white/5 border border-white/10 text-sm font-medium", tech.color)}>
                {tech.name}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-4 mb-12">
            <button className="bg-white text-black px-8 py-3 rounded-xl font-semibold hover:scale-105 transition-transform">
              View Projects
            </button>
            <button className="bg-white/5 text-white border border-white/10 px-8 py-3 rounded-xl font-semibold hover:bg-white/10 transition-all">
              Download Resume
            </button>
          </div>

          {/* Social Icons using Fi prefix */}
          <div className="flex gap-4">
            <a href="#" className="p-3 rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:text-white transition-all">
              <FiGithub size={20} />
            </a>
            <a href="#" className="p-3 rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:text-white transition-all">
              <FiLinkedin size={20} />
            </a>
            <a href="#" className="p-3 rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:text-white transition-all">
              <FiMail size={20} />
            </a>
          </div>
        </motion.div>

        {/* Right Content */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative flex justify-center"
        >
          <div className="relative w-72 h-72 lg:w-96 lg:h-96">
            <div className="absolute inset-0 bg-green-500/20 rounded-full blur-[100px]" />
            <div className="relative w-full h-full rounded-full border-4 border-green-500/30 p-2 overflow-hidden">
              <Image
                src="/IMG_2839.JPG"
                alt="Kouser Ahamed Profile"
                fill
                className="object-cover rounded-full"
                priority
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}