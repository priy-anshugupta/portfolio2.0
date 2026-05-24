"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { education } from "@/data/portfolio";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { fadeUp, staggerContainer } from "@/lib/animations";

export function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <SectionWrapper
      id="education"
      label="Education"
      title="Academic Foundation"
      subtitle="A strong information technology foundation with a focused academic interest in AI/ML."
    >
      <motion.div
        ref={ref}
        variants={staggerContainer}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="grid gap-5 lg:grid-cols-[1.25fr_0.75fr]"
      >
        <motion.article
          variants={fadeUp}
          className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.025] p-7 backdrop-blur-md sm:p-8"
          data-cursor
        >
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-emerald-400/10 via-white/[0.025] to-transparent" />
          <div className="relative z-10">
            <div className="mb-8 flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <p className="mb-3 text-xs font-medium uppercase tracking-[0.25em] text-white/35">
                  {education.location}
                </p>
                <h3 className="text-2xl font-medium tracking-tight text-white md:text-3xl">
                  {education.institute}
                </h3>
                <p className="mt-3 text-lg font-light text-white/62">
                  {education.degree}
                </p>
              </div>
              <span className="w-fit rounded-lg border border-white/[0.12] bg-black/30 px-4 py-2 font-mono text-sm text-white/62">
                {education.duration}
              </span>
            </div>

            <p className="max-w-3xl text-sm font-light leading-relaxed text-white/52 md:text-base">
              {education.summary}
            </p>

            <div className="mt-8 inline-flex rounded-full border border-white/[0.1] bg-black/35 px-4 py-2 text-sm font-medium text-white/70 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
              {education.focus}
            </div>
          </div>
        </motion.article>

        <motion.aside
          variants={fadeUp}
          className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-gradient-to-br from-white/[0.05] to-transparent p-7 backdrop-blur-md sm:p-8"
          data-cursor
        >
          <div className="pointer-events-none absolute -right-14 -top-14 h-40 w-40 rounded-full bg-white/[0.04] blur-3xl" />
          <div className="relative z-10 flex h-full flex-col justify-between gap-10">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.28em] text-white/35">
                Current CGPA
              </p>
              <p className="mt-5 font-mono text-6xl font-light tracking-tight text-white md:text-7xl">
                {education.cgpa}
              </p>
            </div>

            <div className="border-t border-white/[0.08] pt-6">
              <p className="text-sm font-light leading-relaxed text-white/50">
                Academic performance paired with applied AI and engineering projects for recruiter-ready technical depth.
              </p>
            </div>
          </div>
        </motion.aside>
      </motion.div>
    </SectionWrapper>
  );
}
