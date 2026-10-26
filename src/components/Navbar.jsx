"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Experience", href: "/experience" },
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
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Lock background scroll while the drawer is open so it always
  // renders fixed and full-height, no matter where the page was scrolled.
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const linkVariants = {
    initial: {
      opacity: 0,
      y: -10,
    },
    animate: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: index * 0.05,
        duration: 0.4,
      },
    }),
  };

  return (
    <nav
      className={cn(
        "sticky top-0 z-50 w-full bg-black py-6 transition-all duration-500",
        scrolled
          ? "border-b border-green-500/20 bg-black shadow-lg shadow-green-500/10 backdrop-blur-xl"
          : "bg-black"
      )}
    >
      {/* Same width and horizontal padding as Footer */}
      <div className="container mx-auto flex items-center justify-between px-6 lg:px-20">
        {/* Logo */}
        <Link href="/">
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.5,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 0.5,
            }}
            className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border-2 border-green-500/50 bg-linear-to-br from-green-500/20 to-green-600/10 font-bold text-white transition-all hover:border-green-500"
            aria-label="Home"
          >
            K
          </motion.div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/5 px-6 py-2 backdrop-blur-md md:flex">
          {NAV_LINKS.map((link, index) => {
            const isActive =
              pathname === link.href ||
              (link.href !== "/" && pathname?.startsWith(link.href));

            return (
              <motion.div
                key={link.label}
                custom={index}
                initial="initial"
                animate="animate"
                variants={linkVariants}
              >
                <Link
                  href={link.href}
                  className={
                    "group relative rounded-md px-3 py-2 text-sm transition-all duration-300 " +
                    (isActive
                      ? "font-semibold text-green-400"
                      : "text-gray-400 hover:text-green-400")
                  }
                >
                  {link.label}

                  <span
                    className={
                      "absolute bottom-1 left-0 h-0.5 rounded-full bg-green-400 transition-all duration-300 " +
                      (isActive ? "w-full" : "w-0 group-hover:w-full")
                    }
                  />
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* Desktop Resume Link */}
        <motion.a
          href="https://drive.google.com/file/d/1bxcdN7Cbs-Mtljb2jhlYseOKgpiWwohZ/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          initial={{
            opacity: 0,
            x: 20,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.5,
            delay: 0.2,
          }}
          whileHover={{
            scale: 1.05,
          }}
          whileTap={{
            scale: 0.95,
          }}
          className="hidden rounded-lg bg-linear-to-r from-green-500 to-green-600 px-6 py-2 font-medium text-white transition-all duration-300 hover:shadow-lg hover:shadow-green-500/50 md:inline-block"
        >
          Resume
        </motion.a>

        {/* Mobile Menu Button */}
        <motion.button
          type="button"
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.5,
          }}
          onClick={() => setMobileOpen((prev) => !prev)}
          className="rounded-lg p-2 transition-all hover:bg-white/10 md:hidden"
          aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? (
            <HiOutlineX size={24} className="text-white" />
          ) : (
            <HiOutlineMenu size={24} className="text-white" />
          )}
        </motion.button>
      </div>

      {/* Mobile Menu — slides in from the right.
          Rendered through a portal straight into <body> so it is always
          positioned relative to the real viewport, even if the page was
          scrolled first — no ancestor (sticky nav, blur, etc.) can offset it. */}
      {typeof document !== "undefined" &&
        createPortal(
          <AnimatePresence>
            {mobileOpen && (
              <>
                {/* Backdrop */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  onClick={() => setMobileOpen(false)}
                  className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
                />

                {/* Drawer panel */}
                <motion.div
                  initial={{ x: "100%" }}
                  animate={{ x: 0 }}
                  exit={{ x: "100%" }}
                  transition={{ type: "tween", duration: 0.35, ease: "easeInOut" }}
                  className="fixed top-0 right-0 z-50 flex h-full w-[78%] max-w-xs flex-col border-l border-white/10 bg-black shadow-2xl shadow-black/60 md:hidden"
                >
                  {/* Panel header */}
                  <div className="flex items-center justify-between border-b border-white/10 px-6 py-6">
                    <span className="text-xs font-semibold uppercase tracking-widest text-gray-500">
                      Menu
                    </span>
                    <button
                      type="button"
                      onClick={() => setMobileOpen(false)}
                      className="rounded-lg p-2 transition-all hover:bg-white/10"
                      aria-label="Close navigation menu"
                    >
                      <HiOutlineX size={22} className="text-white" />
                    </button>
                  </div>

                  {/* Links */}
                  <div className="flex flex-1 flex-col gap-2 overflow-y-auto px-6 py-6">
                    {NAV_LINKS.map((link, index) => {
                      const isActive =
                        pathname === link.href ||
                        (link.href !== "/" &&
                          pathname?.startsWith(link.href));

                      return (
                        <motion.div
                          key={link.label}
                          initial={{ opacity: 0, x: 24 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.05, duration: 0.3 }}
                        >
                          <Link
                            href={link.href}
                            onClick={() => setMobileOpen(false)}
                            className={
                              "block rounded-xl px-4 py-3 text-center transition-all hover:bg-white/5 " +
                              (isActive
                                ? "font-semibold text-green-400 bg-green-500/10"
                                : "text-gray-400 hover:text-green-400")
                            }
                          >
                            {link.label}
                          </Link>
                        </motion.div>
                      );
                    })}
                  </div>

                  {/* Resume button pinned to the bottom of the drawer */}
                  <div className="border-t border-white/10 px-6 py-6">
                    <motion.a
                      href="https://drive.google.com/file/d/1bxcdN7Cbs-Mtljb2jhlYseOKgpiWwohZ/view?usp=sharing"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      className="block rounded-lg bg-linear-to-r from-green-500 to-green-600 px-6 py-3 text-center font-medium text-white transition-all duration-300 hover:shadow-lg hover:shadow-green-500/50"
                    >
                      Resume
                    </motion.a>
                  </div>
                </motion.div>
              </>
            )}
          </AnimatePresence>,
          document.body
        )}
    </nav>
  );
}