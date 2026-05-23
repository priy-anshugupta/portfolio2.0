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
          "mx-auto flex max-w-7xl items-center justify-between rounded-full border px-6 py-3 transition-all duration-700",
          scrolled || menuOpen
            ? "border-white/[0.08] bg-black/60 backdrop-blur-xl shadow-cinematic"
            : "border-transparent bg-transparent"
        )}
      >
        <a
          href="#"
          data-cursor
          className="text-sm font-medium tracking-tight text-white transition-opacity hover:opacity-70"
        >
          {siteConfig.name.split(" ")[0]}
          <span className="text-white/40">.</span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                data-cursor
                data-cursor-label={link.label}
                className="text-xs font-medium uppercase tracking-[0.15em] text-white/50 transition-colors duration-300 hover:text-white"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            data-cursor
            data-cursor-label="Contact"
            className="hidden rounded-full border border-white/15 bg-white/[0.055] px-5 py-2 text-xs font-medium uppercase tracking-wider text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] transition-all duration-500 hover:border-white/30 hover:bg-white/[0.09] hover:shadow-[0_12px_34px_rgba(255,255,255,0.08)] md:inline-flex"
          >
            Contact
          </a>

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
