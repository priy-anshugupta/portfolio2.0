"use client";

type GsapModule = typeof import("gsap");
type ScrollTriggerModule = typeof import("gsap/ScrollTrigger");

let gsapRef: GsapModule["gsap"] | null = null;
let scrollTriggerRef: ScrollTriggerModule["ScrollTrigger"] | null = null;
let loadPromise: Promise<{
  gsap: GsapModule["gsap"];
  ScrollTrigger: ScrollTriggerModule["ScrollTrigger"];
}> | null = null;

export async function loadGsap() {
  if (gsapRef && scrollTriggerRef) {
    return { gsap: gsapRef, ScrollTrigger: scrollTriggerRef };
  }

  if (!loadPromise) {
    loadPromise = (async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);
      gsapRef = gsap;
      scrollTriggerRef = ScrollTrigger;
      return { gsap, ScrollTrigger };
    })();
  }

  return loadPromise;
}
