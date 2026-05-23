"use client";

import { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { timeline } from "@/data/portfolio";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { loadGsap } from "@/lib/gsap";

export function Timeline() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!lineRef.current || !sectionRef.current) return;

    let ctx: ReturnType<typeof import("gsap").gsap.context> | null = null;
    let cancelled = false;

    loadGsap().then(({ gsap }) => {
      if (cancelled) return;

      ctx = gsap.context(() => {
        gsap.fromTo(
          lineRef.current,
          { scaleY: 0, transformOrigin: "top" },
          {
            scaleY: 1,
            ease: "power2.inOut",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 70%",
              end: "bottom 30%",
              scrub: 1,
            },
          }
        );
      }, sectionRef);
    });

    return () => {
      cancelled = true;
      ctx?.revert();
    };
  }, []);

  return (
    <div ref={sectionRef}>
      <SectionWrapper
        id="experience"
        label="Journey"
        title="Experience"
        subtitle="A path through AI systems, full stack engineering, and robotics."
      >
        <div className="relative mx-auto max-w-3xl">
          <div className="absolute left-4 top-0 h-full w-[2px] -translate-x-1/2 bg-white/[0.06] md:left-1/2" />
          <div className="absolute left-4 top-0 z-10 h-4 w-4 -translate-x-1/2 rounded-full border border-white/45 bg-surface shadow-[0_0_22px_rgba(255,255,255,0.22)] md:left-1/2">
            <span className="absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white" />
          </div>
          <div
            ref={lineRef}
            className="absolute left-4 top-0 z-[1] h-full w-[3px] origin-top -translate-x-1/2 scale-y-0 rounded-full bg-gradient-to-b from-white/80 via-white/36 to-white/0 shadow-[0_0_22px_rgba(255,255,255,0.2)] md:left-1/2"
          />

          <motion.ol
            className="space-y-16"
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {timeline.map((item, i) => (
              <motion.li
                key={`${item.year}-${item.title}`}
                variants={fadeUp}
                className={`relative flex flex-col gap-4 pl-12 md:w-1/2 ${
                  i % 2 === 0
                    ? "md:ml-0 md:pr-12 md:pl-0 md:text-right"
                    : "md:ml-auto md:pl-12"
                }`}
              >
                <div
                  className={`absolute top-1 z-10 h-3 w-3 rounded-full border border-white/35 bg-surface shadow-glow-sm ${
                    i % 2 === 0
                      ? "left-2.5 md:left-auto md:right-[-7px]"
                      : "left-2.5 md:left-[-7px]"
                  }`}
                />
                <span className="text-xs font-medium uppercase tracking-[0.25em] text-white/40">
                  {item.year}
                </span>
                <h3 className="text-xl font-light text-white md:text-2xl">
                  {item.title}
                </h3>
                <p className="text-sm font-light leading-relaxed text-accent-muted">
                  {item.description}
                </p>
              </motion.li>
            ))}
          </motion.ol>
        </div>
      </SectionWrapper>
    </div>
  );
}
