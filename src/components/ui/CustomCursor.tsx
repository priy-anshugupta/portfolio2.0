"use client";

import { useEffect, useState } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  AnimatePresence,
} from "framer-motion";

export function CustomCursor() {
  const [visible, setVisible] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [clicking, setClicking] = useState(false);
  const [label, setLabel] = useState<string | null>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const ringX = useSpring(mouseX, { stiffness: 150, damping: 22, mass: 0.5 });
  const ringY = useSpring(mouseY, { stiffness: 150, damping: 22, mass: 0.5 });
  const haloX = useSpring(mouseX, { stiffness: 80, damping: 24, mass: 0.8 });
  const haloY = useSpring(mouseY, { stiffness: 80, damping: 24, mass: 0.8 });
  const dotX = useSpring(mouseX, { stiffness: 500, damping: 35, mass: 0.2 });
  const dotY = useSpring(mouseY, { stiffness: 500, damping: 35, mass: 0.2 });

  useEffect(() => {
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    if (isTouch) return;

    document.documentElement.classList.add("custom-cursor-active");

    const onMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!visible) setVisible(true);
    };

    const onLeave = () => setVisible(false);
    const onEnter = () => setVisible(true);
    const onDown = () => setClicking(true);
    const onUp = () => setClicking(false);

    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const interactive = target.closest(
        "a, button, [data-cursor], input, textarea, label"
      );
      if (interactive) {
        setHovering(true);
        const cursorLabel = interactive.getAttribute("data-cursor-label");
        setLabel(cursorLabel);
      } else {
        setHovering(false);
        setLabel(null);
      }
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    window.addEventListener("mouseleave", onLeave);
    window.addEventListener("mouseenter", onEnter);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);

    return () => {
      document.documentElement.classList.remove("custom-cursor-active");
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      window.removeEventListener("mouseleave", onLeave);
      window.removeEventListener("mouseenter", onEnter);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
    };
  }, [mouseX, mouseY, visible]);

  return (
    <>
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[198] hidden md:block"
        style={{ x: haloX, y: haloY }}
        animate={{
          opacity: visible ? (hovering ? 0.26 : 0.16) : 0,
          scale: clicking ? 0.72 : hovering ? 1.05 : 1,
        }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="h-12 w-12 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.05] blur-xl" />
      </motion.div>

      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[200] hidden md:block"
        style={{ x: ringX, y: ringY }}
        animate={{
          opacity: visible ? 1 : 0,
          scale: clicking ? 0.82 : hovering ? 1.08 : 1,
        }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      >
        <div
          className="relative -translate-x-1/2 -translate-y-1/2"
          style={{ width: hovering ? 46 : 30, height: hovering ? 46 : 30 }}
        >
          <motion.div
            className="absolute inset-0 rounded-full"
            style={{
              background:
                "conic-gradient(from 90deg, rgba(255,255,255,0.18), rgba(255,255,255,0.72), rgba(142,220,255,0.6), rgba(255,255,255,0.18))",
              padding: "1px",
            }}
            animate={{
              rotate: hovering ? 90 : 0,
            }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="h-full w-full rounded-full bg-black/55 shadow-[inset_0_0_18px_rgba(255,255,255,0.08)] backdrop-blur-sm" />
          </motion.div>
          <motion.div
            className="absolute inset-[7px] rounded-full border border-white/[0.16] bg-white/[0.035]"
            animate={{ opacity: hovering ? 0.75 : 0.55 }}
          />
          <span className="absolute left-1/2 top-[-4px] h-[6px] w-px -translate-x-1/2 bg-white/40" />
          <span className="absolute bottom-[-4px] left-1/2 h-[6px] w-px -translate-x-1/2 bg-white/25" />
          <span className="absolute left-[-4px] top-1/2 h-px w-[6px] -translate-y-1/2 bg-white/25" />
          <span className="absolute right-[-4px] top-1/2 h-px w-[6px] -translate-y-1/2 bg-white/40" />
          <AnimatePresence>
            {label && (
              <motion.span
                initial={{ opacity: 0, x: -5, scale: 0.92 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -5, scale: 0.92 }}
                className="absolute left-full top-1/2 ml-4 -translate-y-1/2 whitespace-nowrap rounded-full border border-white/[0.12] bg-black/70 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-white/70 shadow-[0_10px_30px_rgba(0,0,0,0.35)] backdrop-blur-md"
              >
                {label}
              </motion.span>
            )}
          </AnimatePresence>
        </div>
      </motion.div>

      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[201] hidden md:block"
        style={{ x: dotX, y: dotY }}
        animate={{ opacity: visible ? 1 : 0, scale: clicking ? 0.6 : hovering ? 1.05 : 1 }}
      >
        <div className="relative -translate-x-1/2 -translate-y-1/2">
          <div className="h-1.5 w-1.5 rounded-full bg-white shadow-[0_0_14px_rgba(255,255,255,0.85),0_0_24px_rgba(142,220,255,0.3)]" />
          <div className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.14]" />
        </div>
      </motion.div>
    </>
  );
}
