"use client";

import { useRef, useState } from "react";
import {
  motion,
  useInView,
  useMotionValue,
  useAnimationFrame,
} from "framer-motion";
import { projects } from "@/data/portfolio";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { fadeUp } from "@/lib/animations";

const duplicatedProjects = [...projects, ...projects];

function ProjectCard({
  project,
  index,
  onOpen,
}: {
  project: (typeof projects)[0];
  index: number;
  onOpen: (project: (typeof projects)[0]) => void;
}) {
  const floatOffset = index % 3;
  const floatDelay = (index % 4) * 0.5;

  return (
    <article
      className="group relative w-[min(340px,85vw)] shrink-0 snap-center md:w-[400px]"
      style={{
        animation: `project-float ${5 + floatOffset}s ease-in-out ${floatDelay}s infinite`,
      }}
      data-cursor
      data-cursor-label="View"
      role="button"
      tabIndex={0}
      onClick={() => onOpen(project)}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          onOpen(project);
        }
      }}
    >
      <div className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.02] p-8 shadow-cinematic backdrop-blur-sm transition-all duration-700 group-hover:border-white/[0.15] group-hover:shadow-glow-sm">
        <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-white/[0.03] blur-3xl transition-opacity duration-700 group-hover:opacity-100" />

        <div className="relative z-10">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-medium uppercase tracking-[0.25em] text-white/40">
              {project.highlight}
            </span>
            <span className="font-mono text-[10px] text-white/20">
              {String((index % projects.length) + 1).padStart(2, "0")}
            </span>
          </div>

          <h3 className="mt-5 text-xl font-light tracking-tight text-white md:text-2xl">
            {project.title}
          </h3>
          <p className="mt-4 line-clamp-4 text-sm font-light leading-relaxed text-accent-muted">
            {project.description}
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="rounded-full border border-white/[0.06] bg-white/[0.02] px-2.5 py-1 text-[10px] text-white/45"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="mt-8">
            <MagneticButton
              variant="secondary"
              onClick={() => onOpen(project)}
            >
              Open Dossier
            </MagneticButton>
          </div>
        </div>
      </div>
    </article>
  );
}

export function Projects() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });
  const [isPaused, setIsPaused] = useState(false);
  const [activeProject, setActiveProject] = useState<(typeof projects)[0] | null>(null);
  const isDragging = useRef(false);

  const x = useMotionValue(0);

  useAnimationFrame((_, delta) => {
    if (isPaused || isDragging.current || !trackRef.current) return;
    const halfWidth = trackRef.current.scrollWidth / 2;
    if (halfWidth <= 0) return;

    let next = x.get() - delta * 0.04;
    if (next <= -halfWidth) next = 0;
    x.set(next);
  });

  return (
    <div ref={sectionRef}>
      <SectionWrapper
        id="projects"
        label="Work"
        title="Selected Projects"
        subtitle="Drag to explore - projects float in an infinite cinematic stream."
      >
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="relative overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-16 bg-gradient-to-r from-surface to-transparent md:w-28" />
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-full max-w-28 bg-gradient-to-l from-surface to-transparent" />

          <motion.div
            ref={trackRef}
            className="flex cursor-grab gap-6 py-6 active:cursor-grabbing"
            style={{ x }}
            drag="x"
            dragElastic={0.05}
            dragMomentum
            onDragStart={() => {
              isDragging.current = true;
            }}
            onDragEnd={() => {
              isDragging.current = false;
            }}
          >
            {duplicatedProjects.map((project, i) => (
              <ProjectCard
                key={`${project.id}-${i}`}
                project={project}
                index={i}
                onOpen={setActiveProject}
              />
            ))}
          </motion.div>

          <p className="mt-4 text-center text-[10px] uppercase tracking-[0.3em] text-white/25">
            {"<- Drag or hover to pause ->"}
          </p>
        </motion.div>
      </SectionWrapper>

      {activeProject ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-6 py-10 backdrop-blur-sm"
          onClick={() => setActiveProject(null)}
        >
          <div
            className="relative w-full max-w-5xl rounded-3xl border border-white/[0.08] bg-[#0c0b0b] shadow-[0_40px_120px_rgba(0,0,0,0.55)]"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.12] text-white/60 transition hover:text-white"
              aria-label="Close project details"
              onClick={() => setActiveProject(null)}
            >
              X
            </button>

            <div className="grid gap-10 px-8 py-10 md:grid-cols-[1.2fr_0.8fr] md:px-12">
              <div>
                <p className="text-[10px] font-medium uppercase tracking-[0.35em] text-red-400">
                  {activeProject.category ?? activeProject.highlight}
                </p>
                <div className="mt-3 flex flex-wrap items-center gap-3">
                  <h3 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
                    {activeProject.title}
                  </h3>
                  {activeProject.agents ? (
                    <span className="rounded-full border border-white/[0.15] px-3 py-1 text-[11px] uppercase tracking-[0.25em] text-white/60">
                      {activeProject.agents}
                    </span>
                  ) : null}
                </div>

                <p className="mt-5 max-w-2xl text-sm leading-relaxed text-white/60">
                  {activeProject.longDescription ?? activeProject.description}
                </p>

                <p className="mt-10 text-[11px] font-medium uppercase tracking-[0.35em] text-red-400">
                  Key Highlights
                </p>
                <div className="mt-4 space-y-3">
                  {(activeProject.highlights ?? []).map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-white/[0.08] bg-white/[0.02] px-4 py-3 text-sm text-white/60"
                    >
                      {item}
                    </div>
                  ))}
                  {activeProject.highlights?.length ? null : (
                    <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] px-4 py-3 text-sm text-white/60">
                      {activeProject.description}
                    </div>
                  )}
                </div>
              </div>

              <div className="rounded-2xl border border-white/[0.08] bg-white/[0.015] p-6">
                <p className="text-[11px] font-medium uppercase tracking-[0.35em] text-red-400">
                  Tech Stack
                </p>
                <div className="mt-4 grid grid-cols-2 gap-3">
                  {activeProject.tech.map((item) => (
                    <span
                      key={item}
                      className="rounded-xl border border-white/[0.08] bg-black/40 px-3 py-2 text-xs text-white/60"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                {activeProject.repoUrl ? (
                  <a
                    href={activeProject.repoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-6 inline-flex w-full items-center justify-center rounded-xl border border-red-400/60 bg-red-500/90 px-4 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-black transition hover:bg-red-400"
                  >
                    Open Repo
                  </a>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
