"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/data/portfolio";

const roles = [
  "AI Engineer",
  "Full Stack Developer",
  "Multi-Agent Systems Builder",
];

export function AnimatedRoleText() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 3200);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col gap-1">
      <span className="text-sm font-medium uppercase tracking-[0.25em] text-accent-muted md:text-xs">
        {siteConfig.role.split("|")[0]?.trim() || "AI Engineer"}
      </span>
      <div className="relative h-8 overflow-hidden md:h-9">
        <AnimatePresence mode="wait">
          <motion.span
            key={roles[index]}
            className="absolute text-lg font-light text-white/80 md:text-xl"
            initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -20, filter: "blur(4px)" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            {roles[index]}
          </motion.span>
        </AnimatePresence>
      </div>
    </div>
  );
}
