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
import { fadeUp } from "@/lib/animations";

type Project = (typeof projects)[number];

function ProjectCard({
  project,
  index,
  onOpen,
}: {
  project: Project;
  index: number;
  onOpen: (project: Project) => void;
}) {
  const floatOffset = index % 3;
  const floatDelay = (index % 4) * 0.5;

  return (
    <article
      className="group relative w-[min(340px,85vw)] shrink-0 snap-center md:w-[400px] will-change-transform backface-hidden transform-gpu"
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
      <div className="relative min-h-[390px] overflow-hidden rounded-2xl border border-white/[0.07] bg-[linear-gradient(145deg,rgba(255,255,255,0.055),rgba(255,255,255,0.018)_45%,rgba(255,255,255,0.035))] p-7 shadow-card backdrop-blur-glass transition-all duration-700 group-hover:-translate-y-1 group-hover:border-white/[0.16] group-hover:bg-white/[0.055] group-hover:shadow-glow-sm">
        <div className="pointer-events-none absolute inset-x-7 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        <div className="pointer-events-none absolute bottom-0 left-7 h-px w-16 bg-red-400/45 transition-all duration-700 group-hover:w-28 group-hover:bg-red-300/70" />

        <div className="relative z-10">
          <div className="flex items-start justify-between gap-5">
            <span className="max-w-[220px] text-[10px] font-medium uppercase tracking-[0.32em] text-white/45 transition-colors duration-500 group-hover:text-red-300/80">
              {project.highlight}
            </span>
            <span className="shrink-0 rounded-full border border-white/[0.1] bg-black/20 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-white/45">
              {project.agents || String((index % projects.length) + 1).padStart(2, "0")}
            </span>
          </div>

          <h3 className="mt-6 text-2xl font-light tracking-tight text-white md:text-3xl">
            {project.title}
          </h3>
          <p className="mt-6 line-clamp-4 text-sm font-light leading-8 text-accent-muted">
            {project.description}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {project.tech.map((t) => (
              <span
                key={t}
                className="rounded-full border border-white/[0.07] bg-white/[0.025] px-3 py-1.5 font-mono text-[11px] font-semibold text-white/42"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="mt-9 flex flex-wrap items-center gap-6 text-[11px] font-semibold uppercase tracking-[0.28em]">
            {project.repoUrl ? (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noreferrer"
                className="text-white/80 transition hover:text-white"
                onClick={(event) => event.stopPropagation()}
                data-cursor
                data-cursor-label="Repo"
              >
                Repository ↗
              </a>
            ) : null}
            <button
              type="button"
              className="text-red-300/80 transition hover:text-red-200"
              onClick={(event) => {
                event.stopPropagation();
                onOpen(project);
              }}
            >
              Open Dossier
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}

function ProjectTrack({
  items,
  level,
  reverse = false,
  onOpen,
}: {
  items: Project[];
  level: number;
  reverse?: boolean;
  onOpen: (project: Project) => void;
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const [isPaused, setIsPaused] = useState(false);
  const x = useMotionValue(reverse ? -160 : 0);
  const duplicatedProjects = [...items, ...items];

  useAnimationFrame((_, delta) => {
    if (isPaused || isDragging.current || !trackRef.current) return;
    const halfWidth = trackRef.current.scrollWidth / 2;
    if (halfWidth <= 0) return;

    const speed = 0.03 + level * 0.006;
    let next = x.get() + (reverse ? delta * speed : -delta * speed);

    if (!reverse && next <= -halfWidth) next = 0;
    if (reverse && next >= 0) next = -halfWidth;

    x.set(next);
  });

  return (
    <motion.div
      className="relative overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-16 bg-gradient-to-r from-surface to-transparent md:w-28" />
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-full max-w-28 bg-gradient-to-l from-surface to-transparent" />

      <motion.div
        ref={trackRef}
        className="flex cursor-grab gap-6 py-5 active:cursor-grabbing will-change-transform backface-hidden transform-gpu"
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
            key={`${project.id}-${level}-${i}`}
            project={project}
            index={i}
            onOpen={onOpen}
          />
        ))}
      </motion.div>
    </motion.div>
  );
}

export function Projects() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const projectLevels = [
    projects.filter((_, index) => index % 2 === 0),
    projects.filter((_, index) => index % 2 === 1),
  ];

  return (
    <div ref={sectionRef}>
      <SectionWrapper
        id="projects"
        label="Work"
        title="Selected Projects"
        subtitle="Drag either level to explore the project archive."
      >
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-4"
        >
          {projectLevels.map((levelProjects, index) => (
            <ProjectTrack
              key={`project-level-${index}`}
              items={levelProjects}
              level={index}
              reverse={index === 1}
              onOpen={setActiveProject}
            />
          ))}

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
            className="relative max-h-[90vh] w-full max-w-6xl overflow-y-auto rounded-2xl border border-white/[0.09] bg-[linear-gradient(145deg,#0d0d0d,#070707)] shadow-[0_40px_120px_rgba(0,0,0,0.55)]"
            onClick={(event) => event.stopPropagation()}
            data-lenis-prevent
          >
            <button
              type="button"
              className="absolute right-3 top-3 flex h-12 w-12 items-center justify-center rounded-full border border-white/[0.12] bg-white/[0.03] text-xl text-white/70 transition hover:border-white/25 hover:text-white"
              aria-label="Close project details"
              onClick={() => setActiveProject(null)}
            >
              ×
            </button>

            <div className="grid gap-10 px-8 py-12 md:grid-cols-[1.35fr_0.9fr] md:px-12">
              <div>
                <p className="text-[10px] font-medium uppercase tracking-[0.35em] text-red-300/80">
                  {activeProject.category ?? activeProject.highlight}
                </p>
                <div className="mt-3 flex flex-wrap items-start justify-between gap-4 border-b border-white/[0.08] pb-8">
                  <h3 className="text-5xl font-semibold uppercase tracking-[0.02em] text-white md:text-7xl">
                    {activeProject.title}
                  </h3>
                  {activeProject.agents ? (
                    <span className="mr-14 rounded-full border border-white/[0.12] bg-white/[0.03] px-5 py-3 text-[11px] uppercase tracking-[0.25em] text-white/60">
                      {activeProject.agents}
                    </span>
                  ) : null}
                </div>

                <p className="mt-10 max-w-3xl text-lg font-light leading-10 text-white/80">
                  {activeProject.longDescription ?? activeProject.description}
                </p>

                <p className="mt-10 text-[11px] font-medium uppercase tracking-[0.35em] text-red-300/80">
                  Key Highlights
                </p>
                <div className="mt-4 space-y-3">
                  {(activeProject.highlights ?? []).map((item) => (
                    <div
                      key={item}
                      className="rounded-xl border border-white/[0.08] bg-white/[0.025] px-5 py-4 text-sm leading-7 text-white/65"
                    >
                      {item}
                    </div>
                  ))}
                  {activeProject.highlights?.length ? null : (
                    <div className="rounded-xl border border-white/[0.08] bg-white/[0.025] px-5 py-4 text-sm leading-7 text-white/65">
                      {activeProject.description}
                    </div>
                  )}
                </div>
              </div>

              <div className="rounded-2xl border border-white/[0.08] bg-white/[0.025] p-6">
                <p className="text-[11px] font-medium uppercase tracking-[0.35em] text-red-300/80">
                  Tech Stack
                </p>
                <div className="mt-4 grid grid-cols-2 gap-3">
                  {activeProject.tech.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/[0.08] bg-black/30 px-3 py-2 font-mono text-xs font-semibold text-white/60"
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
                    className="mt-10 inline-flex w-full items-center justify-center rounded-full border border-white/20 bg-white px-4 py-5 text-sm font-semibold uppercase tracking-[0.2em] text-black transition hover:bg-white/90"
                    data-cursor
                    data-cursor-label="Repo"
                  >
                    Open Repo ↗
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
