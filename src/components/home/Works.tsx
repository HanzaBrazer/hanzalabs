"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Marquee from "@/components/ui/Marquee";
import Media from "@/components/ui/Media";
import { projects } from "@/lib/content";

const ease = [0.22, 1, 0.36, 1] as const;

function Tag({ label }: { label: string }) {
  return (
    <span className="rounded-pill bg-ink/[0.06] px-3 py-1.5 text-[14px] text-ink">
      {label}
    </span>
  );
}

function MarqueeText() {
  return (
    <Marquee duration={30}>
      <div className="flex items-center">
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className="flex items-center">
            <span className="whitespace-nowrap px-6 text-[13vw] font-medium leading-none tracking-tightest lg:px-9 lg:text-[9.5vw]">
              Studio Portfolio
            </span>
            {/* diagonal slash separator (sized to the font, matches Figma) */}
            <span className="h-[11vw] w-[1.6vw] shrink-0 -skew-x-[18deg] rounded-[2px] bg-ink/25 lg:h-[8vw] lg:w-[1.1vw]" />
          </div>
        ))}
      </div>
    </Marquee>
  );
}

export default function Works() {
  return (
    <section className="relative py-16 lg:py-24">
      <div className="container-site relative z-20">
        <p className="eyebrow mb-8 lg:mb-10">Works</p>
      </div>

      <div className="relative">
        {/* pinned, centered marquee that stays put while cards scroll */}
        <div className="pointer-events-none absolute inset-0 z-0">
          <div className="sticky top-1/2 w-full -translate-y-1/2">
            <MarqueeText />
          </div>
        </div>

        {/* work cards on top */}
        <div className="container-site relative z-10">
          <div className="mx-auto flex max-w-[880px] flex-col gap-14 lg:gap-20">
            {projects.map((p) => (
              <motion.article
                key={p.slug}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-12% 0px" }}
                transition={{ duration: 0.8, ease }}
              >
                <Link
                  href="/work"
                  data-cursor="hover"
                  data-cursor-text="View"
                  className="group block overflow-hidden rounded-card bg-white"
                >
                  <Media
                    src={p.image}
                    alt={p.name}
                    className="aspect-[914/490] w-full transition-transform duration-[900ms] ease-smooth group-hover:scale-[1.04]"
                  />
                  <div className="flex flex-col gap-5 p-6 lg:flex-row lg:items-start lg:justify-between lg:p-8">
                    <h3 className="text-h4">{p.name}</h3>
                    <div className="lg:max-w-[380px]">
                      <p className="text-[16px] text-ink">{p.description}</p>
                      <div className="mt-4 flex flex-nowrap gap-2">
                        {p.tags.map((t) => (
                          <Tag key={t} label={t} />
                        ))}
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
