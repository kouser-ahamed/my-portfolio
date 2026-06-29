"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FiExternalLink, FiGithub } from "react-icons/fi";

const projects = [
  {
    title: "GymNest",

    description:
      "GymNest is a full-stack Fitness & Gym Management Platform with role-based dashboards for Members, Trainers, and Admins. Members can browse and book classes via Stripe, save favorites, and join the community forum. Trainers manage classes and publish posts. Admins control users, approvals, transactions, and content moderation. Built with Better Auth, JWT HTTPOnly Cookie, MongoDB, Stripe, Recharts, and Framer Motion.",

    images: [
      "/assets/GymNest/i1.png",
      "/assets/GymNest/i2.png",
      "/assets/GymNest/i3.png",
      "/assets/GymNest/i4.png",
      "/assets/GymNest/i5.png",
      "/assets/GymNest/i6.png",
      "/assets/GymNest/i7.png",
      "/assets/GymNest/i8.png",
      "/assets/GymNest/i9.png",
      "/assets/GymNest/i10.png",
      "/assets/GymNest/i11.png",
      "/assets/GymNest/i12.png",
      "/assets/GymNest/i13.png",
      "/assets/GymNest/i14.png",
      "/assets/GymNest/i15.png",
      "/assets/GymNest/i16.png",
      "/assets/GymNest/i17.png",
      
    ],

    tech: [
      "Next.js",
      "React.js",
      "Tailwind CSS",
      "HeroUI",
      "Better Auth",
      "JWT Authentication",
      "MongoDB",
      "Express.js",
      "Node.js",
      "Stripe",
      "Recharts",
      "Framer Motion",
      "React Toastify",
      "Swiper",
    ],

    live: "https://gymnest-client-k88v.vercel.app",
    github: "https://github.com/kouser-ahamed/gymnest-client",
  },
  {
    title: "TurfCraft",

    description:
      "TTurfCraft is a full-stack sports facility booking platform that digitizes venue reservations.Users can browse facilities, book time slots, and manage bookings in real time.JWT-based authentication ensures secure access with protected routes.Facility owners can manage venues, pricing, and availability through a dashboard.",

    images: [
      "/assets/TurfCraft/img-1.png",
      "/assets/TurfCraft/img-2.png",
      "/assets/TurfCraft/img-3.png",
      "/assets/TurfCraft/img-4.png",
      "/assets/TurfCraft/img-5.png",
      "/assets/TurfCraft/img-6.png",
      "/assets/TurfCraft/img-7.png",
      "/assets/TurfCraft/img-8.png",
      "/assets/TurfCraft/img-9.png",
    ],

    tech: [
      "Next.js",
      "React.js",
      "Tailwind CSS",
      "HeroUI",
      "Better Auth",
      "JWT Authentication",
      "MongoDB",
      "Express.js",
      "Node.js",
      "React Toastify",
      "React Icons",
      "Swiper",
    ],

    live: "https://turfcraft.vercel.app",
    github: "https://github.com/kouser-ahamed/turfcraft",
  },
  {
    title: "BinaryBooks",
    description:
      "A modern full-stack online book borrowing platform designed to provide users with a seamless digital library experience through smart book exploration, secure authentication, protected borrowing workflows, and responsive UI design.",
    images: [
      "/assets/binarybooks/im-1.png",
      "/assets/binarybooks/im-2.png",
      "/assets/binarybooks/im-3.png",
      "/assets/binarybooks/im-4.png",
      "/assets/binarybooks/im-5.png",
      "/assets/binarybooks/im-6.png",
      "/assets/binarybooks/im-7.png",
      "/assets/binarybooks/im-8.png",
      "/assets/binarybooks/im-9.png",
      "/assets/binarybooks/im-10.png",
    ],
    tech: [
      "Next.js",
      "React.js",
      "Tailwind CSS",
      "HeroUI",
      "MongoDB",
      "BetterAuth",
      "SwiperJS",
      "React Toastify",
    ],
    live: "https://binary-books.vercel.app/",
    github: "https://github.com/kouser-ahamed/binary-books",
  },
  {
    title: "KeenKeeper",

    description:
      "A modern friendship-tracking web application designed to help users maintain meaningful personal relationships through smart communication tracking, interaction analytics, engagement monitoring, and responsive dashboard experiences.",

    images: [
      "/assets/keen-keeper/p1.png",
      "/assets/keen-keeper/p2.png",
      "/assets/keen-keeper/p3.png",
      "/assets/keen-keeper/p4.png",
      "/assets/keen-keeper/p5.png",
      "/assets/keen-keeper/p6.png",
    ],

    tech: [
      "React.js",
      "React Router",
      "Context API",
      "Tailwind CSS",
      "DaisyUI",
      "Recharts",
      "React Toastify",
      "React Icons",
      "React Spinners",
    ],

    live: "https://superb-panda-c429ef-kouser.netlify.app/",

    github: "https://github.com/kouser-ahamed/B13-A7-keen-keeper",
  },
  {
    title: "GitHub Issues Tracker",

    description:
      "A responsive issue management web application inspired by GitHub, allowing users to track, filter, search, and explore issues through interactive cards, status indicators, and detailed modal-based issue views.",

    images: [
      "/assets/GitHubIssuesPic/git-1.png",
      "/assets/GitHubIssuesPic/git-2.png",
      "/assets/GitHubIssuesPic/git-3.png",
      "/assets/GitHubIssuesPic/git-4.png",
    ],

    tech: [
      "HTML5",
      "JavaScript",
      "Tailwind CSS",
      "DaisyUI",
      "Fetch API",
      "Font Awesome",
    ],

    live: "https://github-issue-tracker-kouser.netlify.app/",

    github:
      "https://github.com/kouser-ahamed/B13-A5-Github-Issue-Tracker-Kouser",
  },
  {
    title: "TechWave Podcast Website",

    description:
      "A modern and responsive podcast landing page designed to showcase technology-focused podcast content through visually engaging layouts, embedded video episodes, clean UI sections, and fully responsive user experience across all devices.",

    images: [
      "/assets/TechWaveDemoPic/tech-1.png",
      "/assets/TechWaveDemoPic/tech-2.png",
      "/assets/TechWaveDemoPic/tech-3.png",
      "/assets/TechWaveDemoPic/tech-4.png",
      "/assets/TechWaveDemoPic/tech-5.png",
    ],

    tech: [
      "HTML5",
      "CSS3",
      "Flexbox",
      "CSS Grid",
      "Font Awesome",
      "Google Fonts",
    ],

    live: "https://kouser-ahamed.github.io/B13-A02-TechWave_Kouser/",

    github: "https://github.com/kouser-ahamed/B13-A02-TechWave_Kouser",
  },
];

export default function Projects() {
  const [currentImages, setCurrentImages] = useState(projects.map(() => 0));

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImages((prev) =>
        prev.map((imgIndex, projectIndex) => {
          const totalImages = projects[projectIndex].images.length;
          return (imgIndex + 1) % totalImages;
        }),
      );
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-4 md:py-8 bg-[#040508] overflow-hidden text-white w-full">
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[250px] sm:w-[300px] md:w-[500px] h-[250px] sm:h-[300px] md:h-[500px] bg-emerald-500/10 blur-[100px] md:blur-[120px] rounded-full" />
        <div className="absolute bottom-0 right-1/4 w-[250px] sm:w-[300px] md:w-[500px] h-[250px] sm:h-[300px] md:h-[500px] bg-cyan-500/10 blur-[100px] md:blur-[120px] rounded-full" />
      </div>

      {/* Container */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Header */}
        <div className="text-center mb-6 md:mb-10">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-4xl md:text-5xl font-extrabold mb-2"
          >
            Featured{" "}
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-500 bg-clip-text text-transparent">
              Projects
            </span>
          </motion.h2>

          <p className="max-w-2xl mx-auto text-gray-400 leading-relaxed text-sm sm:text-base md:text-lg px-2">
            Modern, scalable and visually polished full-stack applications
            crafted with performance and premium user experience in mind.
          </p>
        </div>

        {/* Grid Container - allow full width on small screens */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start w-full">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.4 }}
              className="group relative rounded-[22px] overflow-hidden
                         border border-white/10
                         bg-white/[0.04]
                         backdrop-blur-xl
                         shadow-[0_10px_50px_rgba(0,0,0,0.35)]
                         hover:border-cyan-400/40
                         hover:shadow-[0_20px_80px_rgba(34,211,238,0.14)]
                         transition-all duration-500 w-full box-border"
            >
              {/* Premium Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 pointer-events-none">
                <div
                  className="absolute inset-0
                             bg-gradient-to-br
                             from-cyan-500/10
                             via-emerald-500/5
                             to-purple-500/10
                             blur-3xl"
                />
              </div>

              {/* Image Section */}
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#0b0d11]">
                <AnimatePresence initial={false}>
                  <motion.div
                    key={currentImages[index]}
                    initial={{ x: "100%" }}
                    animate={{ x: 0 }}
                    exit={{ x: "-100%" }}
                    transition={{
                      type: "tween",
                      ease: "linear",
                      duration: 0.45,
                    }}
                    className="absolute inset-0 w-full h-full"
                  >
                    <Image
                      src={project.images[currentImages[index]]}
                      alt={project.title}
                      fill
                      priority
                      className="object-contain p-1 sm:p-2"
                    />
                  </motion.div>
                </AnimatePresence>

                {/* LIVE Badge */}
                <div className="absolute top-3 left-3 z-30">
                  <div
                    className="flex items-center gap-2 px-3 py-1.5 rounded-full
                               bg-black/50 backdrop-blur-md
                               border border-white/10"
                  >
                    {/* Animated Dot */}
                    <span className="relative flex h-2.5 w-2.5">
                      <span
                        className="animate-ping absolute inline-flex h-full w-full rounded-full
                                   bg-emerald-400 opacity-75"
                      />
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400" />
                    </span>

                    <span className="text-[11px] sm:text-xs font-semibold tracking-wider text-emerald-300">
                      LIVE
                    </span>
                  </div>
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#05060a] via-transparent to-transparent pointer-events-none" />

                {/* Dots */}
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                  {project.images.map((_, imgIndex) => (
                    <motion.div
                      key={imgIndex}
                      animate={{
                        width: currentImages[index] === imgIndex ? 20 : 6,
                      }}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        currentImages[index] === imgIndex
                          ? "bg-emerald-400"
                          : "bg-white/30"
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Content Section - Adjusted Padding for Screen Safety */}
              <div className="relative z-10 p-4 sm:p-5 md:p-5 lg:p-6 box-border">
                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-bold mb-3 group-hover:text-cyan-300 transition-colors duration-300">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 leading-relaxed mb-5 text-sm sm:text-[15px]">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-lg
                                 bg-white/[0.05]
                                 border border-white/10
                                 text-[10px] sm:text-[11px]
                                 tracking-wider uppercase
                                 text-gray-300
                                 hover:border-cyan-400/30
                                 hover:text-cyan-300
                                 hover:bg-cyan-500/10
                                 transition-all duration-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Buttons - Properly stacking on extra-small mobile screens */}
                <div className="flex flex-col sm:flex-row gap-3 w-full">
                  {/* Live Preview */}
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 w-full"
                  >
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.96 }}
                      className="w-full flex items-center justify-center gap-2
                                 py-2.5 sm:py-3 rounded-xl
                                 bg-gradient-to-r from-emerald-400 to-cyan-500
                                 text-black text-sm sm:text-base font-bold
                                 shadow-[0_10px_30px_rgba(16,185,129,0.25)]"
                    >
                      <FiExternalLink size={16} />
                      Live Preview
                    </motion.button>
                  </a>

                  {/* GitHub */}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 w-full"
                  >
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.96 }}
                      className="w-full flex items-center justify-center gap-2
                                 py-2.5 sm:py-3 rounded-xl
                                 bg-white/[0.05]
                                 border border-white/10
                                 text-white text-sm sm:text-base font-semibold
                                 hover:bg-white/[0.09]
                                 hover:border-cyan-400/30
                                 transition-all duration-300"
                    >
                      <FiGithub size={16} />
                      Source Code
                    </motion.button>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
