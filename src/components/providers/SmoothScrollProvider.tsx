"use client";

import { useEffect, type ReactNode } from "react";

/**
 * Lightweight smooth scroll — avoids Lenis+GSAP scrollerProxy which can hang dev server.
 */
export function SmoothScrollProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    let lenis: { destroy: () => void; raf: (time: number) => void } | null = null;
    let frame = 0;

    const init = async () => {
      try {
        const Lenis = (await import("lenis")).default;
        lenis = new Lenis({ duration: 0.68, smoothWheel: true });

        const loop = (time: number) => {
          lenis?.raf(time);
          frame = requestAnimationFrame(loop);
        };
        frame = requestAnimationFrame(loop);
      } catch {
        // Native scroll fallback — site still works
      }
    };

    init();

    return () => {
      cancelAnimationFrame(frame);
      lenis?.destroy();
    };
  }, []);

  return <>{children}</>;
}
