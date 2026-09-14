"use client";

import { motion } from "framer-motion";
import Media from "@/components/ui/Media";
import Reveal from "@/components/ui/Reveal";
import { testimonials, stats } from "@/lib/content";

const ease = [0.22, 1, 0.36, 1] as const;

function reveal(delay: number) {
  return {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-10% 0px" },
    transition: { duration: 0.7, ease, delay },
  } as const;
}

function Avatar() {
  return (
    <span className="h-[46px] w-[46px] shrink-0 overflow-hidden rounded-full">
      <Media src="/images/user.webp" alt="" className="h-full w-full rounded-full" />
    </span>
  );
}

export default function Testimonials() {
  return (
    <section className="section-pad">
      <div className="container-site">
        <div className="mb-10 lg:mb-14">
          <Reveal>
            <p className="eyebrow mb-6">Testimonials</p>
          </Reveal>
          <Reveal variant="mask">
            <h2 className="max-w-[1180px] text-h3 lg:text-h2">
              Discover how brands grew faster by trusting our design.
            </h2>
          </Reveal>
        </div>

        {/* cards — right-aligned on desktop like the Figma */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:ml-auto lg:h-[520px] lg:w-[75%] lg:grid-cols-3">
          {/* Column 1 — 48% (lime, top) + Wilson quote (no card, bottom) */}
          <div className="flex flex-col justify-between gap-6 lg:h-[520px]">
            <motion.div
              {...reveal(0)}
              className="flex flex-col justify-center rounded-card bg-primary p-7 lg:h-[232px]"
            >
              <span className="text-[64px] font-medium leading-none tracking-tightest text-ink lg:text-[72px]">
                {stats[0].value}
              </span>
              <span className="mt-4 text-[15px] text-ink/70">{stats[0].label}</span>
            </motion.div>

            <motion.div {...reveal(0.15)} className="px-1 pb-1">
              <p className="text-[18px] leading-snug text-ink/90">
                &ldquo;{testimonials[0].quote}&rdquo;
              </p>
              <div className="mt-6 flex items-center gap-3">
                <Avatar />
                <div>
                  <p className="text-[15px] font-medium">{testimonials[0].name}</p>
                  <p className="text-[13px] text-ink/50">{testimonials[0].role}</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Column 2 — Madelyn (dark, tall) + 3.8x (white) */}
          <div className="flex flex-col gap-4 lg:h-[520px]">
            <motion.div
              {...reveal(0.1)}
              className="flex flex-1 flex-col justify-between rounded-card bg-fill-dark p-7 text-white"
            >
              <p className="text-[18px] leading-snug text-white/90">
                &ldquo;{testimonials[1].quote}&rdquo;
              </p>
              <div className="mt-8 flex items-center gap-3">
                <Avatar />
                <div>
                  <p className="text-[15px] font-medium">{testimonials[1].name}</p>
                  <p className="text-[13px] text-white/55">{testimonials[1].role}</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              {...reveal(0.25)}
              className="flex flex-col justify-center rounded-card bg-white p-7 lg:h-[212px]"
            >
              <span className="text-[64px] font-medium leading-none tracking-tightest text-ink lg:text-[72px]">
                {stats[1].value}
              </span>
              <span className="mt-4 text-[15px] text-ink/70">{stats[1].label}</span>
            </motion.div>
          </div>

          {/* Column 3 — Carter (image card, full height) */}
          <motion.div
            {...reveal(0.2)}
            className="relative flex min-h-[420px] flex-col justify-end overflow-hidden rounded-card p-7 text-white md:col-span-2 lg:col-span-1 lg:h-[520px] lg:min-h-0"
          >
            <Media
              src="/images/testimonial.jpg"
              alt={testimonials[2].name}
              className="absolute inset-0 h-full w-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
            <div className="relative">
              <p className="text-[18px] leading-snug">
                &ldquo;{testimonials[2].quote}&rdquo;
              </p>
              <div className="mt-5">
                <p className="text-[15px] font-medium">{testimonials[2].name}</p>
                <p className="text-[13px] text-white/70">{testimonials[2].role}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
