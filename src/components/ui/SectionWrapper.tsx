"use client";

import { useRef, type ReactNode } from "react";
import { motion, useInView } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  children: ReactNode;
  id?: string;
  className?: string;
  label?: string;
  title?: string;
  subtitle?: string;
}

export function SectionWrapper({
  children,
  id,
  className,
  label,
  title,
  subtitle,
}: SectionWrapperProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id={id}
      ref={ref}
      className={cn("section-padding relative", className)}
    >
      {(label || title) && (
        <motion.div
          className="mb-16 max-w-3xl"
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {label && (
            <motion.p variants={fadeUp} className="section-label">
              {label}
            </motion.p>
          )}
          {title && (
            <motion.h2 variants={fadeUp} className="section-title text-balance">
              {title}
            </motion.h2>
          )}
          {subtitle && (
            <motion.p
              variants={fadeUp}
              className="mt-6 text-lg font-light leading-relaxed text-accent-muted"
            >
              {subtitle}
            </motion.p>
          )}
        </motion.div>
      )}
      {children}
    </section>
  );
}
