"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { achievements } from "@/data/portfolio";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { fadeUp, staggerContainer } from "@/lib/animations";

export function Achievements() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <SectionWrapper
      id="achievements"
      label="Recognition"
      title="Competitive Achievements"
      subtitle="High-pressure hackathon and AI competition results across agentic systems, code intelligence, and applied software products."
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
            className="group relative min-h-[260px] overflow-hidden rounded-2xl border border-white/[0.08] bg-gradient-to-br from-white/[0.045] via-white/[0.018] to-transparent p-7 backdrop-blur-md transition-all duration-700 hover:border-white/[0.16] sm:p-8"
            whileHover={{ y: -8, scale: 1.01 }}
            data-cursor
          >
            <div className="absolute left-0 top-0 h-full w-[3px] bg-gradient-to-b from-white/55 via-white/20 to-transparent opacity-70 transition-opacity group-hover:opacity-100" />
            <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-white/[0.025] blur-3xl transition-opacity duration-700 group-hover:bg-white/[0.05]" />

            <div className="relative z-10 flex h-full flex-col">
              <div className="mb-10 flex items-start justify-between gap-5">
                <div>
                  <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.24em] text-white/28">
                    {item.meta}
                  </p>
                  <h3 className="max-w-[21rem] text-xl font-medium tracking-tight text-white md:text-2xl">
                    {item.title}
                  </h3>
                </div>

                <span className="shrink-0 rounded-lg border border-white/[0.14] bg-white/[0.08] px-3 py-2 text-right font-mono text-xs font-semibold uppercase tracking-[0.08em] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
                  {item.position}
                </span>
              </div>

              <p className="text-sm font-light leading-relaxed text-white/50 transition-colors group-hover:text-white/68">
                {item.description}
              </p>

              <div className="mt-auto flex items-center justify-between pt-8 text-[10px] uppercase tracking-[0.25em] text-white/25 transition-colors group-hover:text-white/42">
                <span className="h-px w-8 bg-white/20" />
                <span>{String(index + 1).padStart(2, "0")}</span>
              </div>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}
