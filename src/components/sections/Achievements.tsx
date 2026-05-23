"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { achievements } from "@/data/portfolio";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { fadeUp, staggerContainer } from "@/lib/animations";

const achievementIcons = ["⚡", "◈", "◆", "◎"];

export function Achievements() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <SectionWrapper
      label="Recognition"
      title="Achievements"
      subtitle="Milestones across hackathons, AI architecture, and product delivery."
    >
      <motion.div
        ref={ref}
        className="grid gap-5 md:grid-cols-2"
        variants={staggerContainer}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {achievements.map((item, index) => (
          <motion.article
            key={item.title}
            variants={fadeUp}
            className="group relative overflow-hidden rounded-2xl border border-white/[0.07] bg-gradient-to-br from-white/[0.04] to-transparent p-8 backdrop-blur-md transition-all duration-700 hover:border-white/[0.14]"
            whileHover={{ y: -8, scale: 1.01 }}
            data-cursor
          >
            <div className="absolute left-0 top-0 h-full w-[3px] bg-gradient-to-b from-white/50 via-white/20 to-transparent opacity-60 transition-opacity group-hover:opacity-100" />

            <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-white/[0.02] blur-3xl transition-opacity duration-700 group-hover:bg-white/[0.04]" />

            <div className="relative z-10 flex gap-6">
              <div className="flex shrink-0 flex-col items-center gap-3">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/[0.1] bg-white/[0.04] text-lg text-white/50 transition-colors group-hover:border-white/20 group-hover:text-white/70">
                  {achievementIcons[index % achievementIcons.length]}
                </span>
                <span className="font-mono text-2xl font-light text-white/10 transition-colors group-hover:text-white/25">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <div className="min-w-0 flex-1">
                <h3 className="text-xl font-medium tracking-tight text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm font-light leading-relaxed text-white/45 transition-colors group-hover:text-white/60">
                  {item.description}
                </p>

                <div className="mt-6 flex items-center gap-2 text-[10px] uppercase tracking-[0.25em] text-white/25 transition-colors group-hover:text-white/40">
                  <span className="h-px w-6 bg-white/20" />
                  Milestone
                </div>
              </div>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}
