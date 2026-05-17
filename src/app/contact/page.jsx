"use client";

import { motion } from "framer-motion";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiGithub,
  FiLinkedin,
  FiSend,
} from "react-icons/fi";

export default function Contact() {
  return (
    <section className="relative bg-[#05060a] text-white py-20 lg:py-28 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-[420px] h-[420px] bg-emerald-500/10 blur-[160px] rounded-full" />
        <div className="absolute bottom-1/4 left-1/4 w-[420px] h-[420px] bg-cyan-500/10 blur-[160px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-16">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold"
          >
            Let’s Build Something{" "}
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-500 bg-clip-text text-transparent">
              Great Together
            </span>
          </motion.h2>

          <p className="mt-5 text-gray-400 text-sm sm:text-base max-w-xl mx-auto">
            Open for MERN stack roles, freelance projects, and collaborations.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 rounded-3xl p-7 sm:p-9 bg-white/[0.04] backdrop-blur-xl border border-white/10 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3">
                Contact Information
              </h3>
              <p className="text-gray-400 text-sm mb-8">
                Feel free to reach me through any of these.
              </p>

              <div className="space-y-4">
                <ContactItem
                  icon={<FiMail size={18} />}
                  label="Email"
                  value="kouserahamed.cse.diu@gmail.com"
                  href="mailto:kouserahamed.cse.diu@gmail.com"
                />
                <ContactItem
                  icon={<FiPhone size={18} />}
                  label="Phone"
                  value="+880 1322 699296"
                  href="tel:+8801322699296"
                />
                <ContactItem
                  icon={<FiMapPin size={18} />}
                  label="Location"
                  value="Uttara-11, Dhaka, Bangladesh"
                />
              </div>
            </div>

            {/* Socials */}
            <div className="mt-10 pt-6 border-t border-white/10 flex items-center justify-between">
              <span className="text-[11px] uppercase tracking-widest text-gray-500 font-bold">
                Social Profiles
              </span>
              <div className="flex gap-3">
                <SocialIcon icon={<FiGithub size={18} />} />
                <SocialIcon icon={<FiLinkedin size={18} />} cyan />
              </div>
            </div>
          </motion.div>

          {/* Right Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 rounded-3xl p-7 sm:p-9 bg-white/[0.04] backdrop-blur-xl border border-white/10"
          >
            <h3 className="text-xl sm:text-2xl font-bold mb-2">
              Send a Message
            </h3>
            <p className="text-gray-400 text-sm mb-8">
              I usually reply within 24 hours.
            </p>

            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <Input label="Name" placeholder="Your name" />
                <Input label="Email" placeholder="example@gmail.com" />
              </div>

              <Textarea label="Message" />

              <button
                type="submit"
                className="w-full py-4 rounded-xl font-bold text-sm bg-gradient-to-r from-emerald-500 to-cyan-500 text-black flex items-center justify-center gap-2"
              >
                Send Message <FiSend size={16} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ===== SUB COMPONENTS (JS SAFE) ===== */

function ContactItem({ icon, label, value, href }) {
  if (href) {
    return (
      <a
        href={href}
        className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-emerald-500/30 transition"
      >
        <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400">
          {icon}
        </div>
        <div className="min-w-0">
          <p className="text-[10px] uppercase tracking-widest text-emerald-400 font-bold">
            {label}
          </p>
          <p className="text-sm text-gray-300 break-all">{value}</p>
        </div>
      </a>
    );
  }

  return (
    <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.03] border border-white/10">
      <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400">
        {icon}
      </div>
      <div>
        <p className="text-[10px] uppercase tracking-widest text-cyan-400 font-bold">
          {label}
        </p>
        <p className="text-sm text-gray-300">{value}</p>
      </div>
    </div>
  );
}

function SocialIcon({ icon, cyan }) {
  return (
    <a
      href="#"
      className={`p-3 rounded-xl border transition hover:-translate-y-0.5 ${
        cyan
          ? "bg-cyan-500/10 border-cyan-500/20 text-cyan-400"
          : "bg-white/5 border-white/10 text-gray-400"
      }`}
    >
      {icon}
    </a>
  );
}

function Input({ label, placeholder }) {
  return (
    <div>
      <label className="block text-[11px] uppercase tracking-widest text-gray-400 mb-2 font-bold">
        {label}
      </label>
      <input
        placeholder={placeholder}
        className="w-full rounded-xl bg-[#090b11] border border-white/10 px-4 py-3.5 text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-emerald-500/40"
      />
    </div>
  );
}

function Textarea({ label }) {
  return (
    <div>
      <label className="block text-[11px] uppercase tracking-widest text-gray-400 mb-2 font-bold">
        {label}
      </label>
      <textarea
        rows={4}
        placeholder="Write your message..."
        className="w-full rounded-xl bg-[#090b11] border border-white/10 px-4 py-3.5 text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-cyan-500/40 resize-none"
      />
    </div>
  );
}