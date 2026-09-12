"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Reveal from "@/components/ui/Reveal";
import { studioValues } from "@/lib/content";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Values() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setI((v) => (v + 1) % studioValues.length), 4200);
    return () => clearInterval(t);
  }, [paused]);

  const v = studioValues[i];

  return (
    <section className="container-site section-pad">
      <Reveal>
        <p className="eyebrow mb-6">Values</p>
      </Reveal>
      <Reveal variant="mask">
        <h2 className="mb-16 max-w-[900px] text-h3 lg:text-h2">
          What Inspires and Drives Our Work Every Day
        </h2>
      </Reveal>

      <div className="flex justify-center">
        <div
          className="relative flex aspect-square w-full max-w-[560px] items-center justify-center"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* concentric rings */}
          <motion.div
            className="absolute inset-0 rounded-full border border-ink/12"
            animate={{ rotate: 360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          >
            {[
              "left-1/2 top-0 -translate-x-1/2 -translate-y-1/2",
              "right-0 top-1/2 translate-x-1/2 -translate-y-1/2",
              "bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2",
              "left-0 top-1/2 -translate-x-1/2 -translate-y-1/2",
            ].map((pos, k) => (
              <span
                key={k}
                className={`absolute h-3 w-3 rotate-45 bg-primary ${pos}`}
              />
            ))}
          </motion.div>
          <div className="absolute inset-[15%] rounded-full border border-ink/10" />
          <div className="absolute inset-[15%] rounded-full bg-gradient-to-br from-primary/10 to-transparent" />

          {/* center content */}
          <div className="relative z-10 max-w-[62%] text-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.5, ease }}
              >
                <h3 className="text-h5 lg:text-h4">{v.title}</h3>
                <p className="mx-auto mt-4 text-[14px] leading-relaxed text-ink/60 lg:text-[15px]">
                  {v.body}
                </p>
              </motion.div>
            </AnimatePresence>

            <div className="mt-6 flex justify-center gap-2">
              {studioValues.map((_, k) => (
                <button
                  key={k}
                  data-cursor="hover"
                  aria-label={`Value ${k + 1}`}
                  onClick={() => setI(k)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    k === i ? "w-6 bg-ink" : "w-1.5 bg-ink/25"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
