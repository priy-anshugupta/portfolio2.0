"use client";

import { useEffect, useRef } from "react";
import { aboutContent } from "@/data/portfolio";
import { loadGsap } from "@/lib/gsap";

const focusCards = aboutContent.focusAreas.map((area) => ({ title: area }));

const keyboardRows = [
  { keys: 14, width: "100%", margin: "0%" },
  { keys: 14, width: "98%", margin: "1%" },
  { keys: 13, width: "92%", margin: "4%" },
  { keys: 12, width: "84%", margin: "8%" },
  { keys: 5, width: "42%", margin: "29%" },
];

function KeyboardDeck() {
  return (
    <div className="mx-auto w-[92%]">
      <div className="mb-[clamp(7px,0.9vw,12px)] flex justify-center gap-[clamp(3px,0.4vw,5px)]">
        {Array.from({ length: 42 }).map((_, index) => (
          <span key={index} className="h-[3px] w-[3px] rounded-full bg-white/[0.08]" />
        ))}
      </div>

      <div className="space-y-[clamp(4px,0.55vw,7px)]">
        {keyboardRows.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className="grid gap-[clamp(3px,0.45vw,6px)]"
            style={{
              gridTemplateColumns: `repeat(${row.keys}, minmax(0, 1fr))`,
              marginLeft: row.margin,
              width: row.width,
            }}
          >
            {Array.from({ length: row.keys }).map((_, keyIndex) => (
              <span
                key={keyIndex}
                className="h-[clamp(7px,1vw,12px)] rounded-[3px] border border-white/[0.04] bg-gradient-to-b from-white/[0.22] via-white/[0.12] to-white/[0.035] shadow-[inset_0_1px_0_rgba(255,255,255,0.18),0_2px_4px_rgba(0,0,0,0.45)]"
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export function LaptopScene() {
  const sectionRef = useRef<HTMLElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const laptopRef = useRef<HTMLDivElement>(null);
  const lidRef = useRef<HTMLDivElement>(null);
  const baseRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const shadowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx: ReturnType<typeof import("gsap").gsap.context> | null = null;
    let cancelled = false;

    loadGsap().then(({ gsap }) => {
      if (cancelled) return;

      ctx = gsap.context(() => {
        const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        const isMobile = window.matchMedia("(max-width: 768px)").matches;

        gsap.set(stageRef.current, { opacity: 1 });
        gsap.set(lidRef.current, {
          rotateX: reduceMotion ? 0 : -54,
          y: reduceMotion ? 0 : 44,
          transformOrigin: "50% 100%",
          transformPerspective: 1400,
        });
        gsap.set(baseRef.current, {
          rotateX: reduceMotion ? 58 : 70,
          y: reduceMotion ? 0 : 22,
          transformOrigin: "50% 0%",
          transformPerspective: 1400,
        });
        gsap.set(laptopRef.current, {
          opacity: reduceMotion ? 1 : 0,
          y: reduceMotion ? 0 : 90,
          scale: reduceMotion ? 1 : 0.92,
          rotateX: reduceMotion ? 0 : 10,
          transformPerspective: 1600,
          transformOrigin: "50% 72%",
        });
        gsap.set(contentRef.current, {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
        });
        gsap.set(glowRef.current, { opacity: reduceMotion ? 1 : 0.25 });
        gsap.set(shadowRef.current, { opacity: reduceMotion ? 1 : 0, scaleX: 0.7 });

        if (reduceMotion) return;

        const tl = gsap.timeline({
          defaults: { ease: "power3.out" },
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 78%",
            end: isMobile ? "top 8%" : "top top",
            scrub: 0.7,
            invalidateOnRefresh: true,
          },
        });

        tl.to(
          laptopRef.current,
          {
            opacity: 1,
            y: 0,
            scale: 1,
            rotateX: 0,
            duration: 0.45,
          },
          0
        )
          .to(
            lidRef.current,
            {
              rotateX: 0,
              y: 0,
              duration: 0.58,
              ease: "power2.out",
            },
            0.08
          )
          .to(
            baseRef.current,
            {
              rotateX: isMobile ? 54 : 58,
              y: 0,
              duration: 0.5,
              ease: "power2.out",
            },
            0.1
          )
          .to(shadowRef.current, { opacity: 1, scaleX: 1, duration: 0.35 }, 0.12)
          .to(glowRef.current, { opacity: 1, duration: 0.22 }, 0.3)
          .fromTo(
            contentRef.current,
            { y: 8, filter: "blur(2px)" },
            {
              y: 0,
              filter: "blur(0px)",
              duration: 0.28,
              ease: "power2.out",
            },
            0.34
          );
      }, sectionRef);
    });

    return () => {
      cancelled = true;
      ctx?.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative min-h-screen overflow-hidden bg-surface px-4 py-24 sm:px-8 lg:px-12"
    >
      <div
        ref={stageRef}
        className="relative flex min-h-[calc(100vh-12rem)] items-center justify-center opacity-0"
        style={{ perspective: "1500px", perspectiveOrigin: "50% 42%" }}
      >
        <div className="pointer-events-none absolute inset-x-0 top-[18%] mx-auto h-[34rem] max-w-[64rem] rounded-full bg-white/[0.035] blur-[110px]" />

        <div
          ref={laptopRef}
          className="relative w-full max-w-[980px]"
          style={{ transformStyle: "preserve-3d" }}
        >
          <div
            ref={lidRef}
            className="relative z-20 mx-auto w-[86%]"
            style={{ transformStyle: "preserve-3d" }}
          >
            <div className="rounded-t-[22px] border border-white/[0.16] bg-gradient-to-b from-[#353535] via-[#171717] to-[#060606] p-[clamp(9px,1.2vw,14px)] pb-[clamp(10px,1.3vw,15px)] shadow-[0_26px_80px_rgba(0,0,0,0.72),inset_0_1px_0_rgba(255,255,255,0.18)]">
              <div className="absolute left-1/2 top-[clamp(5px,0.7vw,9px)] z-20 h-[5px] w-[clamp(42px,7vw,74px)] -translate-x-1/2 rounded-full bg-black ring-1 ring-white/[0.08]" />

              <div className="relative aspect-[16/9.4] overflow-hidden rounded-[10px] border border-white/[0.1] bg-[#030303] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.025),inset_0_-30px_80px_rgba(0,0,0,0.45)]">
                <div
                  ref={glowRef}
                  className="pointer-events-none absolute inset-0 z-[1]"
                  style={{
                    background:
                      "radial-gradient(ellipse 82% 58% at 50% 4%, rgba(255,255,255,0.2), rgba(255,255,255,0.055) 43%, transparent 74%)",
                  }}
                />
                <div className="pointer-events-none absolute inset-0 z-[2] bg-[linear-gradient(112deg,rgba(255,255,255,0.11)_0%,transparent_27%,transparent_68%,rgba(255,255,255,0.045)_100%)]" />
                <div className="pointer-events-none absolute inset-0 z-[3] bg-[radial-gradient(circle_at_50%_45%,transparent_0%,rgba(0,0,0,0.1)_58%,rgba(0,0,0,0.58)_100%)]" />

                <div ref={contentRef} className="absolute inset-0 z-[4] flex items-center overflow-hidden py-[3%]">
                  <div className="mx-auto w-[88%] max-w-[760px]">
                    <p className="mb-[clamp(3px,0.5vw,8px)] text-[clamp(0.34rem,0.72vw,0.64rem)] font-semibold uppercase tracking-[0.28em] text-white/45">
                      About Me
                    </p>
                    <h2 className="max-w-[700px] text-[clamp(0.72rem,2.1vw,2.05rem)] font-light leading-[1.08] tracking-normal text-white">
                      {aboutContent.tagline}
                    </h2>
                    <p className="mt-[clamp(4px,1vw,13px)] max-w-[690px] text-[clamp(0.38rem,0.82vw,0.78rem)] leading-relaxed text-white/68">
                      {aboutContent.intro}
                    </p>
                    <p className="mt-[clamp(4px,0.8vw,10px)] hidden max-w-[690px] text-[clamp(0.36rem,0.76vw,0.72rem)] leading-relaxed text-white/52 sm:block">
                      {aboutContent.body}
                    </p>
                    <p className="mt-[clamp(4px,0.8vw,10px)] max-w-[690px] text-[clamp(0.36rem,0.72vw,0.68rem)] leading-relaxed text-white/46">
                      {aboutContent.achievement}
                    </p>

                    <div className="mt-[clamp(7px,1.3vw,16px)] hidden grid-cols-2 gap-[clamp(4px,0.62vw,8px)] sm:grid sm:grid-cols-3">
                      {focusCards.map((card) => (
                        <div
                          key={card.title}
                          className="min-h-[clamp(24px,3vw,36px)] rounded-[7px] border border-white/[0.1] bg-white/[0.06] px-[clamp(7px,0.85vw,11px)] py-[clamp(5px,0.65vw,8px)] shadow-[inset_0_1px_0_rgba(255,255,255,0.07)] backdrop-blur-md"
                        >
                          <span className="block text-[clamp(0.48rem,0.68vw,0.66rem)] font-medium leading-snug text-white/84">
                            {card.title}
                          </span>
                        </div>
                      ))}
                    </div>

                    <p className="mt-[clamp(8px,1vw,12px)] hidden max-w-[650px] text-[clamp(0.48rem,0.68vw,0.64rem)] italic leading-relaxed text-white/38 md:block">
                      {aboutContent.closing}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mx-auto h-[clamp(8px,1vw,12px)] w-[101%] rounded-full bg-gradient-to-b from-[#5d5d5d] via-[#242424] to-[#060606] shadow-[0_7px_20px_rgba(0,0,0,0.9)]">
              <div className="mx-auto h-full w-[24%] rounded-full bg-gradient-to-b from-white/[0.22] to-transparent opacity-70" />
            </div>
          </div>

          <div
            ref={baseRef}
            className="relative z-10 mx-auto -mt-[clamp(2px,0.3vw,4px)] w-full"
            style={{ transformStyle: "preserve-3d" }}
          >
            <div className="relative mx-auto aspect-[16/3.15] w-full rounded-b-[28px] border border-white/[0.12] border-t-white/[0.18] bg-gradient-to-b from-[#353535] via-[#161616] to-[#050505] px-[clamp(12px,1.3vw,18px)] pb-[clamp(13px,1.6vw,22px)] pt-[clamp(12px,1.5vw,20px)] shadow-[0_34px_80px_rgba(0,0,0,0.82),inset_0_1px_0_rgba(255,255,255,0.13)]">
              <KeyboardDeck />
              <div className="mx-auto mt-[clamp(11px,1.5vw,19px)] h-[clamp(29px,4.8vw,52px)] w-[36%] rounded-[10px] border border-white/[0.09] bg-gradient-to-b from-white/[0.055] to-white/[0.01] shadow-[inset_0_2px_10px_rgba(0,0,0,0.55)]" />
              <div className="absolute inset-x-[2%] bottom-[-10px] h-[16px] rounded-b-[28px] bg-gradient-to-b from-[#121212] to-[#040404] shadow-[0_18px_24px_rgba(0,0,0,0.58)]" />
            </div>
          </div>

          <div
            ref={shadowRef}
            className="pointer-events-none absolute left-1/2 top-[89%] h-[14%] w-[90%] -translate-x-1/2 rounded-full opacity-0 blur-[26px]"
            style={{
              background:
                "radial-gradient(ellipse, rgba(255,255,255,0.13) 0%, rgba(255,255,255,0.04) 42%, transparent 72%)",
            }}
          />
        </div>
      </div>
    </section>
  );
}
