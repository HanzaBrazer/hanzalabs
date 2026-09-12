"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Media from "@/components/ui/Media";

export default function VideoStrip() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.12, 1, 1.05]);
  const y = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);

  return (
    <section
      ref={ref}
      className="relative left-1/2 right-1/2 -mx-[50vw] w-screen overflow-hidden"
    >
      <div className="h-[60vw] max-h-[760px] min-h-[320px] w-full overflow-hidden">
        <motion.div style={{ scale, y }} className="h-full w-full">
          <Media
            src="/images/video-strip.jpg"
            alt="Studio showreel"
            className="h-full w-full"
          />
        </motion.div>
      </div>

      {/* play badge */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <motion.div
          initial={{ scale: 0.6, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex h-20 w-20 items-center justify-center rounded-full bg-bg/85 backdrop-blur lg:h-28 lg:w-28"
        >
          <span className="flex items-center gap-2 text-[12px] font-medium uppercase tracking-wide">
            <span className="block h-0 w-0 border-y-[6px] border-l-[10px] border-y-transparent border-l-ink" />
            Reel
          </span>
        </motion.div>
      </div>
    </section>
  );
}
