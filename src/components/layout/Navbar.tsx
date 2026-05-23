"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks, siteConfig } from "@/data/portfolio";
import { fadeDown } from "@/lib/animations";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <motion.header
      className={cn(
        "fixed left-0 right-0 top-0 z-50 px-6 py-5 transition-all duration-700 md:px-12",
        scrolled && "py-3"
      )}
      variants={fadeDown}
      initial="hidden"
      animate="visible"
      transition={{ delay: 1.8 }}
    >
      <nav
        className={cn(
          "mx-auto flex max-w-7xl items-center justify-between rounded-full border px-6 py-3 shadow-[0_18px_70px_rgba(0,0,0,0.38),inset_0_1px_0_rgba(255,255,255,0.1)] backdrop-blur-xl transition-all duration-700",
          scrolled || menuOpen
            ? "border-cyan-200/[0.14] bg-black/[0.72]"
            : "border-white/[0.1] bg-black/[0.42]"
        )}
      >
        <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-cyan-200/35 to-transparent" />
        <div className="pointer-events-none absolute inset-x-20 bottom-0 h-px bg-gradient-to-r from-transparent via-fuchsia-200/15 to-transparent" />

        <a
          href="#"
          data-cursor
          className="relative text-sm font-semibold tracking-tight text-white transition-opacity hover:opacity-80"
        >
          {siteConfig.name.split(" ")[0]}
          <span className="text-cyan-200/70">.</span>
        </a>

        <ul className="hidden items-center gap-4 md:flex lg:gap-7">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                data-cursor
                data-cursor-label={link.label}
                className="text-[10px] font-medium uppercase tracking-[0.12em] text-white/50 transition-colors duration-300 hover:text-white lg:text-xs lg:tracking-[0.15em]"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <button
            type="button"
            aria-label="Toggle menu"
            className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span
              className={cn(
                "h-px w-5 bg-white transition-all duration-300",
                menuOpen && "translate-y-[3.5px] rotate-45"
              )}
            />
            <span
              className={cn(
                "h-px w-5 bg-white transition-all duration-300",
                menuOpen && "opacity-0"
              )}
            />
            <span
              className={cn(
                "h-px w-5 bg-white transition-all duration-300",
                menuOpen && "-translate-y-[3.5px] -rotate-45"
              )}
            />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto mt-3 max-w-7xl rounded-2xl border border-white/[0.08] bg-black/80 p-6 backdrop-blur-xl md:hidden"
          >
            <ul className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="text-sm font-medium uppercase tracking-[0.15em] text-white/60 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
