"use client";
import { motion } from "framer-motion";
import { FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin, FiSend } from "react-icons/fi";

export default function Contact() {
  return (
    <section className="py-20 bg-black text-white relative overflow-hidden mt-10">
      {/* Background Grid matching image_91a47f.jpg */}
      <div className="absolute inset-0 opacity-10" 
           style={{ backgroundImage: `radial-gradient(#1e293b 1px, transparent 1px)`, backgroundSize: '40px 40px' }} 
      />

      <div className="container mx-auto px-6 lg:px-20 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Contact Me</h2>
          <p className="text-gray-400 text-sm md:text-base">
            Let's connect and discuss how we can work together on your next project
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          
          {/* Left Column: Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-[#0f1115] border border-white/5 rounded-3xl p-8 md:p-10 flex flex-col justify-between"
          >
            <div>
              <p className="text-gray-400 leading-relaxed mb-8">
                I'm always open to new opportunities, exciting projects, or conversations about technology and development. Feel free to reach out!
              </p>

              <div className="space-y-4">
                {/* Email */}
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/5 group hover:border-green-500/30 transition-all">
                  <div className="p-3 rounded-xl bg-green-500/10 text-green-400 group-hover:bg-green-500 group-hover:text-black transition-all">
                    <FiMail size={20} />
                  </div>
                  <span className="text-gray-300 text-sm md:text-base">n.i.nahid02@gmail.com</span>
                </div>

                {/* Phone */}
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/5 group hover:border-green-500/30 transition-all">
                  <div className="p-3 rounded-xl bg-green-500/10 text-green-400 group-hover:bg-green-500 group-hover:text-black transition-all">
                    <FiPhone size={20} />
                  </div>
                  <span className="text-gray-300 text-sm md:text-base">+8801787087017</span>
                </div>

                {/* Location */}
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/5 group hover:border-green-500/30 transition-all">
                  <div className="p-3 rounded-xl bg-green-500/10 text-green-400 group-hover:bg-green-500 group-hover:text-black transition-all">
                    <FiMapPin size={20} />
                  </div>
                  <span className="text-gray-300 text-sm md:text-base">Kishoreganj, Bangladesh (Remote Available)</span>
                </div>
              </div>
            </div>

            {/* Social Connect */}
            <div className="mt-10">
              <p className="text-sm text-gray-500 mb-4 uppercase tracking-widest font-semibold">Connect with me:</p>
              <div className="flex gap-4">
                <a href="#" className="p-3 rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 transition-all">
                  <FiGithub size={20} />
                </a>
                <a href="#" className="p-3 rounded-xl bg-blue-600/20 border border-blue-600/30 text-blue-400 hover:bg-blue-600 hover:text-white transition-all">
                  <FiLinkedin size={20} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-[#0f1115] border border-white/5 rounded-3xl p-8 md:p-10"
          >
            <h3 className="text-2xl font-bold mb-2">Initiate Contact</h3>
            <p className="text-gray-500 text-sm mb-8">
              I'm currently available for full-stack (MERN) web development roles and exciting project collaborations.
            </p>

            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                <input 
                  type="text" 
                  placeholder="Enter your full name"
                  className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-green-500/50 transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                <input 
                  type="email" 
                  placeholder="Enter your email address"
                  className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-green-500/50 transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                <textarea 
                  rows={4}
                  placeholder="Tell me about your project, idea, or collaboration opportunity..."
                  className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-green-500/50 transition-all resize-none"
                />
              </div>

              <button className="w-full py-4 bg-white text-black font-bold rounded-xl hover:bg-gray-200 transition-all flex items-center justify-center gap-2 group">
                Send Message
                <FiSend className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}