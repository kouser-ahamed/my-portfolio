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
import { FaFacebookF } from "react-icons/fa";

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
    cyan: true,
  },
  {
    Icon: FaFacebookF,
    href: "https://www.facebook.com/kouserahamed420",
    label: "Facebook",
  },
];

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

          <p className="mt-5 text-gray-400 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
  Have a project in mind, a job opportunity, or just want to say hello? 
  Feel free to reach out — I’m always open to discussing new ideas, 
  collaborations, and meaningful opportunities.
</p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 rounded-3xl p-7 sm:p-9 
            bg-white/[0.04] backdrop-blur-xl border border-white/10 
            transition-all duration-500 
            hover:border-emerald-500/40 
            hover:shadow-[0_0_80px_-20px_rgba(16,185,129,0.35)] 
            hover:-translate-y-1
            flex flex-col justify-between"
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
                {socials.map(({ Icon, href, label, cyan }) => (
                  <SocialIcon
                    key={label}
                    icon={<Icon size={18} />}
                    href={href}
                    label={label}
                    cyan={cyan}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 rounded-3xl p-7 sm:p-9 
            bg-white/[0.04] backdrop-blur-xl border border-white/10 
            transition-all duration-500 
            hover:border-cyan-500/40 
            hover:shadow-[0_0_80px_-20px_rgba(34,211,238,0.35)] 
            hover:-translate-y-1"
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
                className="w-full py-4 rounded-xl font-bold text-sm 
                bg-gradient-to-r from-emerald-500 to-cyan-500 
                text-black flex items-center justify-center gap-2
                transition-all duration-300
                hover:from-emerald-400 hover:to-cyan-400
                hover:shadow-[0_10px_40px_-10px_rgba(16,185,129,0.6)]
                hover:-translate-y-0.5
                active:scale-95"
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

/* ===== SUB COMPONENTS ===== */

function ContactItem({ icon, label, value, href }) {
  const Wrapper = href ? "a" : "div";

  return (
    <Wrapper
      href={href}
      className="flex items-center gap-4 p-4 rounded-2xl 
      bg-white/[0.03] border border-white/10 
      transition-all duration-300 
      hover:border-emerald-500/40 
      hover:bg-emerald-500/[0.04]
      hover:scale-[1.02]"
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
    </Wrapper>
  );
}

function SocialIcon({ icon, href, label, cyan }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={`p-3 rounded-xl border transition-all duration-300 
      hover:-translate-y-1 hover:scale-110 hover:shadow-lg
      ${
        cyan
          ? "bg-cyan-500/10 border-cyan-500/20 text-cyan-400 hover:bg-cyan-500/20 hover:shadow-cyan-500/30"
          : "bg-white/5 border-white/10 text-gray-400 hover:text-white hover:border-white/30"
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