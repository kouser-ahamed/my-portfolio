"use client";
import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiTwitter, FiInstagram, FiArrowUp } from "react-icons/fi";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialLinks = [
    { icon: FiGithub, href: "#", color: "hover:text-white" },
    { icon: FiLinkedin, href: "#", color: "hover:text-blue-400" },
    { icon: FiTwitter, href: "#", color: "hover:text-cyan-400" },
    { icon: FiInstagram, href: "#", color: "hover:text-pink-400" },
  ];

  return (
    <footer className="bg-black border-t border-white/5 pt-16 pb-8 relative overflow-hidden">
      {/* Background Glow Effect */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-green-500/50 to-transparent blur-sm" />

      <div className="container mx-auto px-6 lg:px-20 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          
          {/* Logo & Info */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent mb-2">
              Kouser<span className="text-green-500">.</span>
            </h2>
            <p className="text-gray-500 text-sm max-w-xs">
              Building modern web experiences with the MERN stack and Next.js.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex gap-6">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                whileHover={{ y: -5 }}
                className={`text-gray-500 text-xl transition-colors ${social.color}`}
              >
                <social.icon />
              </motion.a>
            ))}
          </div>

          {/* Scroll to Top Button */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-4 rounded-full bg-white/5 border border-white/10 text-green-500 hover:bg-white/10 transition-all shadow-[0_0_15px_rgba(34,197,94,0.1)]"
          >
            <FiArrowUp size={20} />
          </motion.button>
        </div>

        {/* Divider */}
        <div className="w-full h-[1px] bg-white/5 mb-8" />

        {/* Copyright Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs uppercase tracking-[0.2em] text-gray-600 font-medium">
          <p>© {new Date().getFullYear()} ALL RIGHTS RESERVED</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
          <p>DESIGNED BY <span className="text-gray-400">Kouser</span></p>
        </div>
      </div>
    </footer>
  );
}