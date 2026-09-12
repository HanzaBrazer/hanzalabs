"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Media from "@/components/ui/Media";
import Button from "@/components/ui/Button";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const imgScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <section
      ref={ref}
      className="container-site relative flex min-h-[90vh] flex-col pb-8 pt-[120px] lg:min-h-[880px] lg:pt-[150px]"
    >
      <div className="mx-auto w-full max-w-[1160px]">
        <h1 className="text-center text-h1">
          <span className="block overflow-hidden pb-[0.12em]">
            <motion.span
              className="block"
              initial={{ y: "110%" }}
              whileInView={{ y: "0%" }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease, delay: 0.1 }}
            >
              Market-leading
            </motion.span>
          </span>
          <span className="block overflow-hidden pb-[0.12em]">
            <motion.span
              className="block"
              initial={{ y: "110%" }}
              whileInView={{ y: "0%" }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease, delay: 0.22 }}
            >
              Realities—<span className="font-bold">visions.</span>
            </motion.span>
          </span>
        </h1>

        {/* portrait — overlaps the heading bottom, extends below */}
        <motion.div
          style={{ y: imgY }}
          className="relative z-10 mx-auto -mt-4 w-[260px] sm:w-[300px] lg:-mt-20 lg:w-[360px]"
        >
          <motion.div
            initial={{ clipPath: "inset(100% 0 0 0)" }}
            whileInView={{ clipPath: "inset(0% 0 0 0)" }}
            viewport={{ once: true }}
            transition={{ duration: 1.1, ease, delay: 0.5 }}
          >
            <motion.div style={{ scale: imgScale }}>
              <Media
                src="/images/hero.jpg"
                alt="HanzaLabs — visionary design"
                priority
                className="aspect-[300/331] w-full lg:aspect-[360/398]"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* bottom row */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease, delay: 0.9 }}
        className="mt-auto flex items-center justify-between gap-4 pt-10"
      >
        <span className="eyebrow">Let&apos;s make coll projects</span>
        <Button href="/contact">Let&apos;s Talk</Button>
      </motion.div>
    </section>
  );
}
