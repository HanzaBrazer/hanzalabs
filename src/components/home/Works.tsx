"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Marquee from "@/components/ui/Marquee";
import Media from "@/components/ui/Media";
import { projects } from "@/lib/content";

const ease = [0.22, 1, 0.36, 1] as const;

function Tag({ label }: { label: string }) {
  return (
    <span className="rounded-pill border border-ink/15 px-2.5 py-1 text-[13px] text-ink/70">
      {label}
    </span>
  );
}

export default function Works() {
  return (
    <section className="overflow-hidden py-14 lg:py-20">
      {/* scrolling headline */}
      <div className="border-y border-ink/10 py-6 lg:py-8">
        <Marquee duration={26}>
          <div className="flex items-center">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="flex items-center">
                <span className="whitespace-nowrap px-6 text-[13vw] font-medium leading-none tracking-tightest lg:text-[9vw]">
                  Studio Portfolio
                </span>
                <span className="mx-2 h-[0.7em] w-[0.7em] rotate-45 bg-primary lg:mx-4" />
              </div>
            ))}
          </div>
        </Marquee>
      </div>

      <div className="container-site mt-14 lg:mt-20">
        <p className="eyebrow mb-10">Works</p>

        <div className="mx-auto flex max-w-[980px] flex-col gap-16 lg:gap-24">
          {projects.map((p, i) => (
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
                className="group block"
              >
                <div className="overflow-hidden rounded-card">
                  <Media
                    src={p.image}
                    alt={p.name}
                    className="aspect-[914/490] w-full transition-transform duration-[900ms] ease-smooth group-hover:scale-[1.04]"
                  />
                </div>
                <div className="mt-6 flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
                  <h3 className="text-h4">
                    <span className="text-ink/40 mr-3 text-[0.5em] align-top">
                      0{i + 1}
                    </span>
                    {p.name}
                  </h3>
                  <div className="lg:max-w-[300px]">
                    <p className="text-[15px] text-ink/60">{p.description}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
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
    </section>
  );
}
