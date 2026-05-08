"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { cn } from "@/lib/utils";

const techStack = [
  { name: "React", color: "text-blue-400", gradient: "from-blue-500/20 to-blue-600/5" },
  { name: "Next.js", color: "text-purple-400", gradient: "from-purple-500/20 to-purple-600/5" },
  { name: "Node.js", color: "text-green-400", gradient: "from-green-500/20 to-green-600/5" },
  { name: "Express", color: "text-gray-400", gradient: "from-gray-500/20 to-gray-600/5" },
  { name: "MongoDB", color: "text-emerald-500", gradient: "from-emerald-500/20 to-emerald-600/5" },
  { name: "REST APIs", color: "text-cyan-400", gradient: "from-cyan-500/20 to-cyan-600/5" },
];

const containerVariants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const floatingVariants = {
  initial: { y: 0 },
  animate: {
    y: [-10, 10],
    transition: {
      duration: 3,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut",
    },
  },
};

const socialVariants = {
  initial: { opacity: 0, scale: 0 },
  animate: (i) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: 0.8 + i * 0.1,
      duration: 0.5,
      type: "spring",
      stiffness: 100,
    },
  }),
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-linear-to-br from-black via-slate-950 to-blue-950">
      <motion.div
        animate={{ x: [0, 100, 0], y: [0, 50, 0] }}
        transition={{ duration: 12, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
        className="absolute top-1/4 -left-1/4 w-125 h-125 bg-linear-to-r from-emerald-500/40 to-green-600/20 rounded-full blur-[150px] -z-5"
      />
      <motion.div
        animate={{ x: [0, -100, 0], y: [0, -50, 0] }}
        transition={{ duration: 14, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
        className="absolute bottom-1/4 -right-1/4 w-125 h-125 bg-linear-to-l from-blue-600/40 to-purple-500/30 rounded-full blur-[150px] -z-5"
      />
      <motion.div
        animate={{ x: [0, 50, -50, 0], y: [0, -50, 50, 0] }}
        transition={{ duration: 16, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
        className="absolute top-1/2 right-1/3 w-100 h-100 bg-linear-to-b from-cyan-500/20 to-blue-500/10 rounded-full blur-[120px] -z-5"
      />

      <div className="container mx-auto px-6 lg:px-20 z-10 grid md:grid-cols-2 gap-12 items-center">
        <motion.div variants={containerVariants} initial="initial" animate="animate">
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/40 text-green-400 text-xs mb-6 hover:bg-green-500/15 transition-all cursor-pointer"
          >
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-2 h-2 rounded-full bg-green-500"
            />
            Available for New Opportunities
          </motion.div>

          <motion.div variants={itemVariants} className="overflow-hidden">
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              <motion.span
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8, type: "spring" }}
                className="inline-block"
              >
                Kouser
              </motion.span>
              {" "}
              <motion.span
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8, type: "spring" }}
                className="inline-block bg-linear-to-r from-green-400 to-emerald-600 text-transparent bg-clip-text"
              >
                Ahamed
              </motion.span>
            </h1>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-lg lg:text-xl text-gray-300 mb-8 max-w-lg leading-relaxed"
          >
            Building Scalable and Responsive Web Applications with Modern Technologies.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap gap-3 mb-10">
            {techStack.map((tech, i) => (
              <motion.span
                key={tech.name}
                custom={i}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 + i * 0.05, duration: 0.5 }}
                whileHover={{ scale: 1.1, y: -5 }}
                className={cn(
                  `px-4 py-2 rounded-lg bg-linear-to-br ${tech.gradient} border border-white/10 text-sm font-medium ${tech.color} hover:border-white/30 transition-all cursor-pointer`
                )}
              >
                {tech.name}
              </motion.span>
            ))}
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center gap-4 mb-12">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(34, 197, 94, 0.5)" }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto bg-linear-to-r from-green-500 to-emerald-600 text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg transition-all"
            >
              View Projects
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto bg-white/5 text-white border border-white/20 px-8 py-3 rounded-xl font-semibold hover:border-white/40 transition-all"
            >
              Download Resume
            </motion.button>
          </motion.div>

          <motion.div variants={itemVariants} className="flex gap-4">
            {[
              { Icon: FiGithub, href: "#" },
              { Icon: FiLinkedin, href: "#" },
              { Icon: FiMail, href: "#" },
            ].map(({ Icon, href }, i) => (
              <motion.a
                key={href + i}
                custom={i}
                variants={socialVariants}
                initial="initial"
                animate="animate"
                href={href}
                whileHover={{
                  scale: 1.15,
                  backgroundColor: "rgba(34, 197, 94, 0.2)",
                  borderColor: "rgba(34, 197, 94, 0.8)",
                }}
                whileTap={{ scale: 0.9 }}
                className="p-3 rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:text-green-400 transition-all duration-300"
              >
                <Icon size={20} />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.4, type: "spring", stiffness: 50 }}
          className="relative flex justify-center"
        >
          <motion.div
            variants={floatingVariants}
            initial="initial"
            animate="animate"
            className="relative w-72 h-72 lg:w-96 lg:h-96"
          >
            <motion.div
              animate={{ scale: [1, 1.1, 1], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute inset-0 bg-linear-to-r from-green-500/30 to-emerald-600/30 rounded-full blur-[80px]"
            />

            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full border-2 border-transparent bg-linear-to-r from-green-500 to-emerald-600 bg-clip-border p-0.5"
            >
              <div className="absolute inset-0 bg-[#0a0a0a] rounded-full" />
            </motion.div>

            <motion.div
              className="relative w-full h-full rounded-full overflow-hidden border-4 border-green-500/40 p-1"
              whileHover={{ borderColor: "rgba(34, 197, 94, 0.8)" }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src="/IMG_2839.JPG"
                alt="Kouser Ahamed Profile"
                fill
                className="object-cover rounded-full"
                priority
              />
            </motion.div>

            {[
              { top: 0, left: 0, rotate: 0 },
              { top: 0, right: 0, rotate: 90 },
              { bottom: 0, right: 0, rotate: 180 },
              { bottom: 0, left: 0, rotate: 270 },
            ].map((pos, i) => (
              <motion.div
                key={i}
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
                style={{
                  top: pos.top !== undefined ? `${pos.top}px` : "auto",
                  bottom: pos.bottom !== undefined ? `${pos.bottom}px` : "auto",
                  left: pos.left !== undefined ? `${pos.left}px` : "auto",
                  right: pos.right !== undefined ? `${pos.right}px` : "auto",
                  transform: `rotate(${pos.rotate}deg)`,
                }}
                className="absolute w-6 h-6 border-2 border-green-500/60"
              />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}