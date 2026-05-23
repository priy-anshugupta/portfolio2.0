"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cinematicEase } from "@/lib/animations";

export function PageLoader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          key="loader"
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: { duration: 1, ease: cinematicEase },
          }}
        >
          <motion.div
            className="absolute h-64 w-64 rounded-full bg-white/[0.03] blur-[100px]"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: cinematicEase }}
          />
          <motion.div
            className="h-px w-24 bg-gradient-to-r from-transparent via-white/40 to-transparent"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, ease: cinematicEase, delay: 0.3 }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
