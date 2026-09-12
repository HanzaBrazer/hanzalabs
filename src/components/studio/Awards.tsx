"use client";

import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import Media from "@/components/ui/Media";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import { awards } from "@/lib/content";
import { ArrowUpRight } from "@/components/ui/icons";

export default function Awards() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState<number | null>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 300, damping: 28, mass: 0.5 });
  const sy = useSpring(y, { stiffness: 300, damping: 28, mass: 0.5 });

  const onMove = (e: React.MouseEvent) => {
    const rect = wrapRef.current?.getBoundingClientRect();
    if (!rect) return;
    x.set(e.clientX - rect.left);
    y.set(e.clientY - rect.top);
  };

  return (
    <section className="container-site section-pad">
      <Reveal>
        <p className="eyebrow mb-6">Award</p>
      </Reveal>
      <Reveal variant="mask">
        <h2 className="mb-12 text-h3 lg:text-h2">Awards &amp; Recognition</h2>
      </Reveal>

      <div ref={wrapRef} onMouseMove={onMove} className="relative">
        {/* floating hover image */}
        <motion.div
          className="pointer-events-none absolute left-0 top-0 z-20 hidden h-[220px] w-[170px] overflow-hidden rounded-2xl lg:block"
          style={{ x: sx, y: sy, translateX: "-50%", translateY: "-50%" }}
          initial={false}
          animate={{
            opacity: active !== null ? 1 : 0,
            scale: active !== null ? 1 : 0.7,
          }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          {active !== null && (
            <Media
              src={awards[active].image}
              alt={awards[active].title}
              className="h-full w-full"
            />
          )}
        </motion.div>

        <ul>
          {awards.map((a, i) => (
            <li
              key={a.n}
              onMouseEnter={() => setActive(i)}
              onMouseLeave={() => setActive(null)}
              className="group border-t border-ink/12 last:border-b"
            >
              <div
                data-cursor="hover"
                className="flex items-center gap-5 py-6 transition-all duration-500 ease-smooth group-hover:pl-4 lg:py-8"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-ink/20 transition-colors duration-500 group-hover:border-ink group-hover:bg-ink group-hover:text-white">
                  <ArrowUpRight className="h-4 w-4" />
                </span>
                <span className="eyebrow !gap-2 text-ink/50">{a.n}</span>
                <span className="flex-1 text-h5 transition-opacity duration-500 group-hover:opacity-100 lg:text-h4 lg:opacity-60">
                  {a.title}
                </span>
                <span className="hidden text-[15px] text-ink/50 sm:block">
                  {a.year}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-14 flex justify-center">
        <Button href="/contact" size="lg">
          Let&apos;s Talk
        </Button>
      </div>
    </section>
  );
}
