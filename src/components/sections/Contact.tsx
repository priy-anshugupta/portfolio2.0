"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { siteConfig } from "@/data/portfolio";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { fadeUp, staggerContainer } from "@/lib/animations";

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="contact"
      className="section-padding relative overflow-hidden"
    >
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="h-96 w-96 rounded-full bg-white/[0.02] blur-[120px]" />
      </div>

      <motion.div
        ref={ref}
        className="relative mx-auto max-w-4xl text-center"
        variants={staggerContainer}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.p variants={fadeUp} className="section-label">
          Get in Touch
        </motion.p>
        <motion.h2
          variants={fadeUp}
          className="section-title text-balance"
        >
          Let&apos;s Build Intelligent Systems Together
        </motion.h2>
        <motion.p
          variants={fadeUp}
          className="mx-auto mt-6 max-w-xl text-lg font-light text-accent-muted"
        >
          Open to AI engineering opportunities, collaborations, and ambitious
          projects.
        </motion.p>

        <motion.div
          variants={fadeUp}
          className="mt-12 flex flex-wrap items-center justify-center gap-4"
        >
          <MagneticButton href={siteConfig.email} variant="primary">
            Email
          </MagneticButton>
          <MagneticButton href={siteConfig.github} variant="secondary">
            GitHub
          </MagneticButton>
          <MagneticButton href={siteConfig.linkedin} variant="secondary">
            LinkedIn
          </MagneticButton>
        </motion.div>
      </motion.div>
    </section>
  );
}
