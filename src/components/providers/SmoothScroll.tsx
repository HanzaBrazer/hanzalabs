"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { MotionConfig } from "framer-motion";

/**
 * Global smooth-scroll driver (Formora-style momentum scrolling).
 * Exposes the Lenis instance on window so anchor links / buttons can use it.
 */
export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.6,
      wheelMultiplier: 1,
    });

    // @ts-expect-error attach for global access (anchor scrolling)
    window.__lenis = lenis;

    let rafId = 0;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      // @ts-expect-error cleanup
      delete window.__lenis;
    };
  }, []);

  // "never" keeps reveal animations (which are transform-based) working even
  // when the OS has "reduce motion" on, so headings never stay hidden.
  return <MotionConfig reducedMotion="never">{children}</MotionConfig>;
}
