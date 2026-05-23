"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { siteConfig } from "@/data/portfolio";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { AnimatedRoleText } from "@/components/ui/AnimatedText";
import { heroStagger, fadeUp } from "@/lib/animations";

export function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      mouseX.set(x * 40);
      mouseY.set(y * 40);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section
      ref={containerRef}
      className="relative flex min-h-screen flex-col justify-center overflow-hidden px-6 pb-24 pt-32 md:px-12 lg:px-20"
    >
      {/* Background gradients */}
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          className="glow-orb -left-32 top-1/4 h-[500px] w-[500px] bg-white/[0.04]"
          style={{ x: springX, y: springY }}
          animate={{ opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="glow-orb -right-32 bottom-1/4 h-[400px] w-[400px] bg-white/[0.03]"
          style={{ x: springX, y: springY }}
          animate={{ opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-surface" />
      </div>

      {/* Mouse-reactive glow */}
      {mounted && (
        <motion.div
          className="pointer-events-none absolute h-96 w-96 rounded-full bg-white/[0.02] blur-[100px]"
          style={{
            left: "50%",
            top: "40%",
            x: springX,
            y: springY,
            translateX: "-50%",
            translateY: "-50%",
          }}
        />
      )}

      <motion.div
        className="relative z-10 mx-auto w-full max-w-7xl"
        variants={heroStagger}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={fadeUp}>
          <AnimatedRoleText />
        </motion.div>

        <motion.h1
          variants={fadeUp}
          className="mt-8 max-w-5xl text-5xl font-light leading-[1.05] tracking-tight text-gradient sm:text-6xl md:text-7xl lg:text-[5.5rem]"
        >
          {siteConfig.name}
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="mt-10 max-w-3xl text-xl font-light leading-relaxed text-white/70 md:text-2xl md:leading-relaxed"
        >
          {siteConfig.headline}
        </motion.p>

        <motion.p
          variants={fadeUp}
          className="mt-6 max-w-2xl text-base font-light leading-relaxed text-accent-muted md:text-lg"
        >
          {siteConfig.subheadline}
        </motion.p>

        <motion.div
          variants={fadeUp}
          className="mt-12 flex flex-wrap gap-4"
        >
          <MagneticButton href="#projects" variant="primary">
            View Projects
          </MagneticButton>
          <MagneticButton href="#contact" variant="secondary">
            Contact Me
          </MagneticButton>
        </motion.div>

        <motion.div
          variants={fadeUp}
          className="mt-24 flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-white/30"
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="h-px w-8 bg-white/20" />
          Scroll to explore
        </motion.div>
      </motion.div>
    </section>
  );
}
