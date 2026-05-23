"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/data/portfolio";
import { fadeUp } from "@/lib/animations";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/[0.06] px-6 py-12 md:px-12">
      <motion.div
        className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 md:flex-row"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <p className="text-sm text-accent-muted">
          © {year} {siteConfig.name}. Crafted with precision.
        </p>
        <div className="flex gap-8">
          <a
            href={siteConfig.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs uppercase tracking-widest text-white/40 transition-colors hover:text-white"
          >
            GitHub
          </a>
          <a
            href={siteConfig.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs uppercase tracking-widest text-white/40 transition-colors hover:text-white"
          >
            LinkedIn
          </a>
          <a
            href={siteConfig.email}
            className="text-xs uppercase tracking-widest text-white/40 transition-colors hover:text-white"
          >
            Email
          </a>
        </div>
      </motion.div>
    </footer>
  );
}
