"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Skills", href: "/skills" },
  { label: "Education", href: "/education" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkVariants = {
    initial: { opacity: 0, y: -10 },
    animate: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.05, duration: 0.4 },
    }),
  };

  return (
    <nav className={cn(
      "sticky top-0 w-full z-50 transition-all duration-500 px-6 py-6",
      scrolled ? "bg-black backdrop-blur-xl border-b border-green-500/20 shadow-lg shadow-green-500/10" : "bg-black"
    )}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="w-10 h-10 rounded-full border-2 border-green-500/50 flex items-center justify-center font-bold text-white bg-linear-to-br from-green-500/20 to-green-600/10 hover:border-green-500 transition-all cursor-pointer"
            aria-label="Home"
          >
            K
          </motion.div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-1 bg-white/5 px-6 py-2 rounded-full border border-white/10 backdrop-blur-md">
          {NAV_LINKS.map((link, i) => {
            const isActive = pathname === link.href || (link.href !== "/" && pathname?.startsWith(link.href));
            return (
              <motion.div
                key={link.label}
                custom={i}
                initial="initial"
                animate="animate"
                variants={linkVariants}
              >
                <Link
                  href={link.href}
                  className={"text-sm px-3 py-2 rounded-md transition-all duration-300 relative group " + (isActive ? "text-green-400 font-semibold" : "text-gray-400 hover:text-green-400")}
                >
                  {link.label}
                  <span className={"absolute bottom-1 left-0 h-0.5 bg-green-400 transition-all duration-300 rounded-full " + (isActive ? "w-full" : "w-0 group-hover:w-full")} />
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* Desktop Resume Button */}
        <motion.button
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="hidden md:block bg-linear-to-r from-green-500 to-green-600 text-white px-6 py-2 rounded-lg font-medium hover:shadow-lg hover:shadow-green-500/50 transition-all duration-300"
        >
          Resume
        </motion.button>

        {/* Mobile Menu Button */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-all"
        >
          {mobileOpen ? (
            <HiOutlineX size={24} className="text-white" />
          ) : (
            <HiOutlineMenu size={24} className="text-white" />
          )}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden mt-4 pt-4 border-t border-white/10"
          >
            <div className="flex flex-col gap-3">
              {NAV_LINKS.map((link, i) => {
                const isActive = pathname === link.href || (link.href !== "/" && pathname?.startsWith(link.href));
                return (
                  <motion.div
                    key={link.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05, duration: 0.3 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className={"px-4 py-2 rounded-md hover:bg-white/5 transition-all " + (isActive ? "text-green-400 font-semibold" : "text-gray-400 hover:text-green-400")}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                );
              })}
              <motion.button
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.3 }}
                className="mt-2 bg-linear-to-r from-green-500 to-green-600 text-white px-6 py-2 rounded-lg font-medium w-full hover:shadow-lg hover:shadow-green-500/50"
              >
                Resume
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}