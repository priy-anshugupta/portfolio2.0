"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { skillCategories, allSkills } from "@/data/portfolio";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { fadeUp, staggerContainer } from "@/lib/animations";

const categoryMeta: Record<
  string,
  { icon: string; accent: string; span?: string }
> = {
  "AI/ML": {
    icon: "◆",
    accent: "from-white/20 via-white/5 to-transparent",
    span: "md:col-span-2 md:row-span-2",
  },
  Frontend: {
    icon: "◇",
    accent: "from-blue-500/10 via-transparent to-transparent",
  },
  Backend: {
    icon: "○",
    accent: "from-emerald-500/10 via-transparent to-transparent",
  },
  Databases: {
    icon: "▣",
    accent: "from-violet-500/10 via-transparent to-transparent",
  },
  DevOps: {
    icon: "⚙",
    accent: "from-amber-500/10 via-transparent to-transparent",
  },
  "Robotics & Vision": {
    icon: "◎",
    accent: "from-cyan-500/10 via-transparent to-transparent",
    span: "md:col-span-2",
  },
};

function CategoryCard({
  title,
  skills,
  index,
}: {
  title: string;
  skills: string[];
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const meta = categoryMeta[title] ?? { icon: "•", accent: "from-white/10 to-transparent" };

  return (
    <motion.div
      ref={ref}
      variants={fadeUp}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={{ delay: index * 0.08 }}
      className={`group relative overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.02] p-7 backdrop-blur-md transition-all duration-700 hover:border-white/[0.14] hover:bg-white/[0.04] ${meta.span ?? ""}`}
      whileHover={{ y: -6 }}
      data-cursor
    >
      <div
        className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${meta.accent} opacity-0 transition-opacity duration-700 group-hover:opacity-100`}
      />
      <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-white/[0.03] blur-2xl transition-opacity group-hover:opacity-100" />

      <div className="relative z-10">
        <div className="mb-6 flex items-start justify-between">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.04] text-sm text-white/60">
              {meta.icon}
            </span>
            <div>
              <h3 className="text-lg font-medium tracking-tight text-white">
                {title}
              </h3>
              <p className="text-[10px] uppercase tracking-[0.2em] text-white/30">
                {skills.length} technologies
              </p>
            </div>
          </div>
          <span className="font-mono text-xs text-white/15">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>

        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span
              key={skill}
              className="rounded-lg border border-white/[0.06] bg-black/30 px-3 py-1.5 text-xs text-white/55 transition-all duration-500 group-hover:border-white/[0.12] group-hover:text-white/80"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-white/40 to-transparent transition-all duration-700 group-hover:w-full" />
    </motion.div>
  );
}

export function Skills() {
  const gridRef = useRef(null);
  const marqueeRef = useRef(null);
  const isInView = useInView(gridRef, { once: true, margin: "-80px" });

  return (
    <SectionWrapper
      id="skills"
      label="Expertise"
      title="Skills & Technologies"
      subtitle="A curated stack for building intelligent, scalable AI products."
    >
      <motion.div
        ref={gridRef}
        className="mb-14 grid auto-rows-fr gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-5"
        variants={staggerContainer}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {skillCategories.map((cat, i) => (
          <CategoryCard
            key={cat.title}
            title={cat.title}
            skills={cat.skills}
            index={i}
          />
        ))}
      </motion.div>

      <motion.div
        ref={marqueeRef}
        variants={fadeUp}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="relative overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.015] py-6"
      >
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-surface to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-surface to-transparent" />

        <div className="flex animate-marquee gap-3 whitespace-nowrap px-4">
          {[...allSkills, ...allSkills].map((skill, i) => (
            <span
              key={`${skill}-${i}`}
              className="inline-flex shrink-0 items-center rounded-full border border-white/[0.08] bg-white/[0.03] px-5 py-2 text-sm font-light text-white/50"
            >
              {skill}
            </span>
          ))}
        </div>
      </motion.div>
    </SectionWrapper>
  );
}
