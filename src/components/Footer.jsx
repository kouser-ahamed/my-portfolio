// "use client";
// import { motion } from "framer-motion";
// import { FiGithub, FiLinkedin, FiTwitter, FiInstagram, FiArrowUp } from "react-icons/fi";

// export default function Footer() {
//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   const socialLinks = [
//     { icon: FiGithub, href: "#", color: "hover:text-white" },
//     { icon: FiLinkedin, href: "#", color: "hover:text-blue-400" },
//     { icon: FiTwitter, href: "#", color: "hover:text-cyan-400" },
//     { icon: FiInstagram, href: "#", color: "hover:text-pink-400" },
//   ];

//   return (
//     <footer className="bg-black border-t border-white/5 pt-16 pb-8 relative overflow-hidden">
//       {/* Background Glow Effect */}
//       <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-green-500/50 to-transparent blur-sm" />

//       <div className="container mx-auto px-6 lg:px-20 relative z-10">
//         <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          
//           {/* Logo & Info */}
//           <div className="text-center md:text-left">
//             <h2 className="text-2xl font-bold bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent mb-2">
//               Kouser<span className="text-green-500">.</span>
//             </h2>
//             <p className="text-gray-500 text-sm max-w-xs">
//               Building modern web experiences with the MERN stack and Next.js.
//             </p>
//           </div>

//           {/* Social Links */}
//           <div className="flex gap-6">
//             {socialLinks.map((social, index) => (
//               <motion.a
//                 key={index}
//                 href={social.href}
//                 whileHover={{ y: -5 }}
//                 className={`text-gray-500 text-xl transition-colors ${social.color}`}
//               >
//                 <social.icon />
//               </motion.a>
//             ))}
//           </div>

//           {/* Scroll to Top Button */}
//           <motion.button
//             onClick={scrollToTop}
//             whileHover={{ scale: 1.1 }}
//             whileTap={{ scale: 0.9 }}
//             className="p-4 rounded-full bg-white/5 border border-white/10 text-green-500 hover:bg-white/10 transition-all shadow-[0_0_15px_rgba(34,197,94,0.1)]"
//           >
//             <FiArrowUp size={20} />
//           </motion.button>
//         </div>

//         {/* Divider */}
//         <div className="w-full h-[1px] bg-white/5 mb-8" />

//         {/* Copyright Section */}
//         <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs uppercase tracking-[0.2em] text-gray-600 font-medium">
//           <p>© {new Date().getFullYear()} ALL RIGHTS RESERVED</p>
//           <div className="flex gap-8">
//             <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
//             <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
//           </div>
//           <p>DESIGNED BY <span className="text-gray-400">Kouser</span></p>
//         </div>
//       </div>
//     </footer>
//   );
// }








"use client";

import { motion } from "framer-motion";
import {
  FiGithub,
  FiLinkedin,
  FiTwitter,
  FiInstagram,
  FiArrowUp,
  FiCode,
} from "react-icons/fi";
import { FaFacebookF } from "react-icons/fa";

const socialLinks = [
  {
    icon: FiGithub,
    href: "https://github.com/kouser-ahamed",
    label: "GitHub",
    hoverColor: "hover:text-white",
    hoverBorder: "hover:border-white/30",
    hoverBackground: "hover:bg-white/10",
  },
  {
    icon: FiLinkedin,
    href: "https://www.linkedin.com/in/kouser-ahamed",
    label: "LinkedIn",
    hoverColor: "hover:text-blue-400",
    hoverBorder: "hover:border-blue-400/40",
    hoverBackground: "hover:bg-blue-500/10",
  },
  {
    icon: FiTwitter,
    href: "https://x.com/KouserAhamedOpu",
    label: "X / Twitter",
    hoverColor: "hover:text-cyan-400",
    hoverBorder: "hover:border-cyan-400/40",
    hoverBackground: "hover:bg-cyan-500/10",
  },
  {
    icon: FiInstagram,
    href: "https://www.instagram.com/kouserahamed420",
    label: "Instagram",
    hoverColor: "hover:text-pink-400",
    hoverBorder: "hover:border-pink-400/40",
    hoverBackground: "hover:bg-pink-500/10",
  },
  {
    icon: FaFacebookF,
    href: "https://www.facebook.com/kouserahamed420",
    label: "Facebook",
    hoverColor: "hover:text-blue-500",
    hoverBorder: "hover:border-blue-500/40",
    hoverBackground: "hover:bg-blue-500/10",
  },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-black pt-12 text-white sm:pt-14 lg:pt-16">
      {/* Background Effects */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -bottom-32 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-emerald-500/10 blur-[120px] sm:h-80 sm:w-80" />

        <div className="absolute -left-20 top-10 h-48 w-48 rounded-full bg-cyan-500/5 blur-[100px]" />

        <div className="absolute -right-20 top-10 h-48 w-48 rounded-full bg-emerald-500/5 blur-[100px]" />

        <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent blur-sm" />

        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "radial-gradient(rgba(255,255,255,0.25) 1px, transparent 1px)",
            backgroundSize: "36px 36px",
          }}
        />
      </div>

      <div className="container relative z-10 mx-auto px-6 lg:px-20">
        {/* Main Footer Content */}
        <div className="flex flex-col items-center justify-between gap-10 pb-10 md:flex-row md:items-start lg:pb-12">
          {/* Brand Information */}
          <div className="max-w-md text-center md:text-left">
            <motion.h2
              initial={{
                opacity: 0,
                y: 15,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              className="mb-3 text-2xl font-bold sm:text-3xl"
            >
              <span className="bg-gradient-to-r from-white via-gray-200 to-gray-500 bg-clip-text text-transparent">
                Kouser
              </span>

              <span className="bg-gradient-to-r from-emerald-400 to-cyan-500 bg-clip-text text-transparent">
                .
              </span>
            </motion.h2>

            <p className="text-sm leading-relaxed text-gray-500 sm:text-base">
              Building modern, scalable and user-friendly web experiences with
              the MERN stack, Next.js and modern backend technologies.
            </p>

            {/* Availability Status */}
            <motion.div
              initial={{
                opacity: 0,
                y: 10,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              className="mt-5 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-2"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />

                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>

              <span className="text-xs font-medium text-emerald-400 sm:text-sm">
                Available for new opportunities
              </span>
            </motion.div>
          </div>

          {/* Social Links */}
          <div className="text-center">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-gray-600">
              Connect With Me
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
              {socialLinks.map((social, index) => {
                const SocialIcon = social.icon;

                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    title={social.label}
                    initial={{
                      opacity: 0,
                      scale: 0.8,
                    }}
                    whileInView={{
                      opacity: 1,
                      scale: 1,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      delay: index * 0.08,
                    }}
                    whileHover={{
                      y: -5,
                      scale: 1.08,
                    }}
                    whileTap={{
                      scale: 0.95,
                    }}
                    className={`group relative flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-lg text-gray-500 backdrop-blur-xl transition-all duration-300 sm:h-12 sm:w-12 sm:text-xl ${social.hoverColor} ${social.hoverBorder} ${social.hoverBackground}`}
                  >
                    <SocialIcon />

                    {/* Tooltip */}
                    <span className="pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md border border-white/10 bg-[#111318] px-2.5 py-1 text-[10px] font-medium text-gray-300 opacity-0 shadow-xl transition-all duration-300 group-hover:-top-9 group-hover:opacity-100">
                      {social.label}
                    </span>
                  </motion.a>
                );
              })}
            </div>
          </div>

          {/* Scroll to Top */}
          <div className="flex flex-col items-center gap-3 md:items-end">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-600">
              Back To Top
            </p>

            <motion.button
              type="button"
              onClick={scrollToTop}
              whileHover={{
                scale: 1.08,
                y: -4,
              }}
              whileTap={{
                scale: 0.92,
              }}
              aria-label="Scroll to top"
              className="group flex h-12 w-12 items-center justify-center rounded-xl border border-emerald-500/20 bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 text-emerald-400 shadow-[0_0_25px_rgba(16,185,129,0.12)] transition-all duration-300 hover:border-emerald-400/40 hover:shadow-[0_0_30px_rgba(16,185,129,0.2)]"
            >
              <FiArrowUp
                size={20}
                className="transition-transform duration-300 group-hover:-translate-y-1"
              />
            </motion.button>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* Copyright Section */}
        <div className="flex flex-col items-center justify-between gap-5 py-7 text-center md:flex-row md:text-left">
          <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-gray-600 sm:text-xs sm:tracking-[0.2em]">
            © {new Date().getFullYear()} All Rights Reserved
          </p>

          {/* Built With */}
          <div className="flex flex-col items-center gap-2 sm:flex-row sm:gap-4">
            <div className="flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.14em] text-gray-600 sm:text-xs">
              <FiCode className="text-cyan-500" />

              <span>Built with Next.js</span>
            </div>

            <span className="hidden h-1 w-1 rounded-full bg-gray-700 sm:block" />

            <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-gray-600 sm:text-xs sm:tracking-[0.2em]">
              Designed by{" "}
              <span className="bg-gradient-to-r from-emerald-400 to-cyan-500 bg-clip-text font-semibold text-transparent">
                Kouser
              </span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}