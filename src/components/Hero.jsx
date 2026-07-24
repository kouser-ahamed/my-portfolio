"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiGithub,
  FiLinkedin,
  FiArrowUpRight,
} from "react-icons/fi";
import { FaFacebookF } from "react-icons/fa";

const rotatingTitles = [
  "B.Sc. in Computer Science & Engineering",
  "Full-Stack Web Developer",
  "MERN Stack Developer @ CodeOnix",
];

// Main/most-used stack first, on request: Next.js, React, JavaScript,
// TypeScript, Node.js, MongoDB, Mongoose — then the rest.
const techStack = [
  {
    name: "Next.js",
    color: "text-purple-400",
    gradient: "from-purple-500/20 to-purple-600/5",
  },
  {
    name: "React",
    color: "text-blue-400",
    gradient: "from-blue-500/20 to-blue-600/5",
  },
  {
    name: "JavaScript",
    color: "text-yellow-400",
    gradient: "from-yellow-500/20 to-yellow-600/5",
  },
  {
    name: "TypeScript",
    color: "text-blue-300",
    gradient: "from-blue-400/20 to-blue-500/5",
  },
  {
    name: "Node.js",
    color: "text-green-400",
    gradient: "from-green-500/20 to-green-600/5",
  },
  {
    name: "MongoDB",
    color: "text-emerald-400",
    gradient: "from-emerald-500/20 to-emerald-600/5",
  },
  {
    name: "Mongoose",
    color: "text-red-400",
    gradient: "from-red-500/20 to-red-600/5",
  },
  {
    name: "Express",
    color: "text-zinc-300",
    gradient: "from-zinc-500/20 to-zinc-600/5",
  },
  {
    name: "REST APIs",
    color: "text-cyan-400",
    gradient: "from-cyan-500/20 to-cyan-600/5",
  },
];

const socials = [
  {
    Icon: FiGithub,
    href: "https://github.com/kouser-ahamed",
    label: "GitHub",
  },
  {
    Icon: FiLinkedin,
    href: "https://www.linkedin.com/in/kouser-ahamed",
    label: "LinkedIn",
  },
  {
    Icon: FaFacebookF,
    href: "https://www.facebook.com/kouserahamed420",
    label: "Facebook",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const MotionLink = motion(Link);

export default function Hero() {
  const [currentTitle, setCurrentTitle] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitle((prev) => (prev + 1) % rotatingTitles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative flex min-h-[80vh] items-start overflow-hidden bg-black pt-14 text-white md:pt-16">
      {/* Ambient Background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, 60, 0],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute -left-1/4 top-0 h-[350px] w-[350px] md:h-[500px] md:w-[500px] rounded-full bg-emerald-500/20 blur-[120px]"
        />

        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, -60, 0],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute -right-1/4 bottom-0 h-[350px] w-[350px] md:h-[500px] md:w-[500px] rounded-full bg-cyan-500/20 blur-[120px]"
        />

        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "radial-gradient(rgba(255,255,255,0.15) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="container relative z-10 mx-auto grid items-start justify-items-center gap-8 px-5 sm:px-8 lg:grid-cols-2 lg:px-20 py-14">
        {/* Left Side */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center lg:text-left self-start"
        >
          {/* Badge */}
          <motion.div
            variants={itemVariants}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-2 text-[11px] sm:text-xs font-medium text-emerald-400 backdrop-blur-xl"
          >
            <motion.span
              animate={{ scale: [1, 1.3, 1] }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
              className="h-2 w-2 rounded-full bg-emerald-400"
            />

            Available For New Opportunities
          </motion.div>

          {/* Heading */}
          <motion.div variants={itemVariants}>
            <h1 className="text-4xl font-black leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              <span className="text-white">Kouser </span>

              <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Ahamed
              </span>
            </h1>
          </motion.div>

          {/* Rotating Titles */}
          <motion.div
            variants={itemVariants}
            className="mt-5 h-[52px] overflow-hidden md:h-[40px]"
          >
            <AnimatePresence mode="wait">
              <motion.p
                key={currentTitle}
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -25 }}
                transition={{ duration: 0.5 }}
                className="text-base font-medium leading-relaxed text-zinc-300 sm:text-lg md:text-xl"
              >
                {rotatingTitles[currentTitle]}
              </motion.p>
            </AnimatePresence>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-zinc-400 sm:text-[15px] md:text-base lg:mx-0"
          >
            Passionate about building scalable, high-performance and visually
            refined web applications using React, Next.js, Node.js and modern
            backend technologies. Focused on clean architecture, smooth user
            experience and real-world problem solving.
          </motion.p>

          {/* Tech Stack */}
          <motion.div
            variants={itemVariants}
            className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start"
          >
            {techStack.map((tech) => (
              <motion.div
                key={tech.name}
                whileHover={{
                  y: -5,
                  scale: 1.05,
                }}
                transition={{
                  duration: 0.2,
                }}
                className={`group rounded-2xl border border-white/10 bg-gradient-to-br ${tech.gradient} px-4 py-2 backdrop-blur-xl`}
              >
                <span
                  className={`text-xs sm:text-sm font-medium ${tech.color} transition-colors duration-300 group-hover:text-white`}
                >
                  {tech.name}
                </span>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div
            variants={itemVariants}
            className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start"
          >
            <MotionLink
              href="/projects"
              whileHover={{
                scale: 1.03,
              }}
              whileTap={{
                scale: 0.97,
              }}
              className="group flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-emerald-500 to-cyan-500 px-7 py-4 text-sm sm:text-base font-semibold text-white shadow-[0_15px_40px_rgba(16,185,129,0.35)] transition-all duration-300"
            >
              View Projects

              <FiArrowUpRight className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
            </MotionLink>

            <motion.a
              href="https://drive.google.com/file/d/1xxupwdPETHo-NA4hVYtlz10-znilHhIi/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                scale: 1.03,
              }}
              whileTap={{
                scale: 0.97,
              }}
              className="rounded-2xl border border-white/10 bg-white/[0.03] px-7 py-4 text-sm sm:text-base font-semibold text-white backdrop-blur-xl transition-all duration-300 hover:border-white/20 hover:bg-white/[0.06]"
            >
              Download Resume
            </motion.a>
          </motion.div>

          {/* Socials */}
          <motion.div
            variants={itemVariants}
            className="mt-10 flex items-center justify-center gap-4 lg:justify-start"
          >
            {socials.map(({ Icon, href, label }, i) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                initial={{
                  opacity: 0,
                  scale: 0,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                transition={{
                  delay: 1 + i * 0.1,
                  type: "spring",
                }}
                whileHover={{
                  scale: 1.12,
                  y: -4,
                }}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-3 sm:p-4 text-zinc-400 backdrop-blur-xl transition-all duration-300 hover:border-emerald-500/30 hover:text-emerald-400"
              >
                <Icon size={20} />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Side */}
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.7,
            rotate: -8,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            rotate: 0,
          }}
          transition={{
            duration: 1,
            type: "spring",
          }}
          className="relative flex justify-center self-start"
        >
          <motion.div
            initial={{ y: 0 }}
            animate={{
              y: [0, 8],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
            className="relative h-[260px] w-[260px] sm:h-[320px] sm:w-[320px] md:h-[380px] md:w-[380px] lg:h-[420px] lg:w-[420px]"
          >
            {/* Outer Glow */}
            <div className="absolute inset-0 rounded-full bg-emerald-500/20 blur-[90px]" />

            {/* Animated Border */}
            <div className="absolute inset-0 overflow-hidden rounded-full p-[3px]">
              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute inset-0 rounded-full"
                style={{
                  background:
                    "conic-gradient(from 0deg, #10b981, #06b6d4, #3b82f6, #10b981)",
                }}
              />

              <div className="absolute inset-[3px] rounded-full bg-black" />
            </div>

            {/* Image */}
            <motion.div
              whileHover={{
                scale: 1.02,
              }}
              className="relative h-full w-full overflow-hidden rounded-full border-4 border-emerald-500/30 p-1"
            >
              <Image
                src="/imggg.jpg"
                alt="Kouser Ahamed"
                fill
                priority
                className="rounded-full object-cover"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
