"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Media from "@/components/ui/Media";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";

const ease = [0.22, 1, 0.36, 1] as const;

export default function StudioHero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-4%", "8%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.08, 1]);

  return (
    <section className="container-site pt-[130px] lg:pt-[160px]">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <h1 className="max-w-[16ch] text-h2">
          <Reveal variant="mask">We Create What</Reveal>
          <Reveal variant="mask" delay={0.08}>
            Tomorrow Looks Like.
          </Reveal>
        </h1>
        <div className="shrink-0">
          <Button href="/contact">Let&apos;s Talk</Button>
        </div>
      </div>

      <Reveal className="mt-8" delay={0.1}>
        <span className="eyebrow">Let&apos;s make coll projects</span>
      </Reveal>

      <div ref={ref} className="mt-10 overflow-hidden rounded-card">
        <motion.div
          initial={{ clipPath: "inset(0 0 100% 0)" }}
          whileInView={{ clipPath: "inset(0 0 0% 0)" }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, ease }}
        >
          <motion.div style={{ y, scale }}>
            <Media
              src="/images/studio-hero.jpg"
              alt="HanzaLabs studio"
              priority
              className="aspect-[1061/650] w-full"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
