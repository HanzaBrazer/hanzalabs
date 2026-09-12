"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import Reveal from "@/components/ui/Reveal";
import { studioStats } from "@/lib/content";
import { ArrowUpRight } from "@/components/ui/icons";

function CountUp({ to, duration = 1.6 }: { to: number; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-15%" });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let raf = 0;
    const start = performance.now();
    const tick = (t: number) => {
      const p = Math.min((t - start) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(eased * to));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to, duration]);

  return <span ref={ref}>{n}</span>;
}

export default function Numbers() {
  return (
    <section className="container-site section-pad">
      <Reveal variant="mask">
        <p className="ml-auto max-w-[1030px] text-h5 leading-tight lg:text-h4">
          Born from curiosity and shaped by culture, I see design as a dialogue
          between clarity and emotion. I don&apos;t follow trends — I build
          languages that last. Every project begins with intent and evolves
          with precision.
        </p>
      </Reveal>

      <div className="mt-14 grid gap-x-10 gap-y-12 border-t border-ink/10 pt-12 sm:grid-cols-2 lg:mt-20 lg:grid-cols-3">
        {studioStats.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.08}>
            <div>
              <div className="flex items-start">
                <span className="text-[clamp(4rem,7vw,6.5rem)] font-medium leading-none tracking-tightest">
                  <CountUp to={s.value} />
                </span>
                <span className="mt-2 text-[2rem] font-medium leading-none text-ink/50">
                  {s.suffix}
                </span>
              </div>
              <div className="mt-6 flex items-center justify-between border-t border-ink/10 pt-4">
                <span className="text-[16px] text-ink/70">{s.label}</span>
                <span className="flex h-8 w-8 items-center justify-center rounded-full border border-ink/20">
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
