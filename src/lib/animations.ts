"use client";

import type { Variants, Transition } from "framer-motion";

export const cinematicEase = [0.16, 1, 0.3, 1] as const;
export const premiumEase = [0.22, 1, 0.36, 1] as const;

export const cinematicTransition: Transition = {
  duration: 1.2,
  ease: cinematicEase,
};

export const staggerTransition: Transition = {
  staggerChildren: 0.12,
  delayChildren: 0.2,
};

export const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 48,
    filter: "blur(8px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 1.1,
      ease: cinematicEase,
    },
  },
};

export const fadeDown: Variants = {
  hidden: { opacity: 0, y: -24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: cinematicEase },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 1.4, ease: premiumEase },
  },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1, ease: cinematicEase },
  },
};

export const slideReveal: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1, ease: cinematicEase },
  },
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.15,
    },
  },
};

export const staggerContainerSlow: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.3,
    },
  },
};

export const heroStagger: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.5,
    },
  },
};

export const floatVariant: Variants = {
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export const cardHover = {
  scale: 1.02,
  transition: { duration: 0.5, ease: cinematicEase },
};
