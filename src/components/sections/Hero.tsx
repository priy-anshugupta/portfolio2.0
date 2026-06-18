"use client";

import Image from "next/image";
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
      className="relative flex min-h-screen flex-col justify-center overflow-hidden px-6 pb-8 pt-16 md:px-12 lg:px-20 lg:pb-24 lg:pt-32"
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
        className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-8 lg:gap-12 lg:grid-cols-[minmax(0,1fr)_390px] xl:grid-cols-[minmax(0,1fr)_430px]"
        variants={heroStagger}
        initial="hidden"
        animate="visible"
      >
        <div>
          <motion.div variants={fadeUp}>
            <AnimatedRoleText />
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="mt-8 max-w-5xl font-display text-5xl font-medium leading-[1.02] tracking-normal text-gradient sm:text-6xl md:text-7xl lg:text-[5.5rem]"
          >
            {siteConfig.name}
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-3xl text-xl font-light leading-relaxed text-white/70 md:text-2xl md:leading-relaxed lg:mt-10"
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
            className="mt-8 flex flex-wrap gap-4 lg:mt-12"
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
            className="hidden items-center gap-3 text-xs uppercase tracking-[0.3em] text-white/30 lg:mt-24 lg:flex"
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="h-px w-8 bg-white/20" />
            Scroll to explore
          </motion.div>
        </div>

        <motion.div
          variants={fadeUp}
          className="relative mx-auto mt-0 w-full max-w-[280px] justify-self-center sm:max-w-[320px] lg:max-w-[340px] lg:justify-self-end xl:max-w-[380px]"
        >
          <div className="absolute -right-5 top-8 h-full w-full rounded-[30px] border border-white/[0.08] bg-white/[0.035] shadow-[0_28px_80px_rgba(255,255,255,0.04)]" />
          <div className="absolute -left-6 bottom-10 h-[78%] w-[74%] rounded-[26px] border border-white/[0.07] bg-gradient-to-br from-emerald-300/[0.08] via-white/[0.03] to-transparent blur-[1px]" />
          <div className="relative overflow-hidden rounded-[30px] border border-white/[0.16] bg-white/[0.045] p-3 shadow-[0_32px_90px_rgba(0,0,0,0.72),inset_0_1px_0_rgba(255,255,255,0.12)] backdrop-blur-md">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[24px] bg-black">
              <Image
                src="/images/profile.jpg"
                alt="Priyanshu Gupta"
                fill
                priority
                sizes="380px"
                className="object-cover object-[50%_38%]"
              />
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,transparent_50%,rgba(0,0,0,0.42)_100%)]" />
              <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/[0.12]" />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
