"use client";

import { motion } from "framer-motion";
import Media from "@/components/ui/Media";
import Reveal from "@/components/ui/Reveal";
import { team } from "@/lib/content";
import { ArrowUpRight } from "@/components/ui/icons";

const ease = [0.22, 1, 0.36, 1] as const;

function SocialDot({ label }: { label: string }) {
  return (
    <a
      href="#"
      onClick={(e) => e.preventDefault()}
      data-cursor="hover"
      aria-label={label}
      className="flex h-8 w-8 items-center justify-center rounded-full border border-ink/15 text-ink/60 transition-colors hover:border-ink hover:bg-ink hover:text-white"
    >
      <ArrowUpRight className="h-4 w-4" />
    </a>
  );
}

export default function Team() {
  return (
    <section className="container-site section-pad">
      <Reveal>
        <p className="eyebrow mb-6">Team</p>
      </Reveal>
      <Reveal variant="mask">
        <h2 className="mb-12 max-w-[700px] text-h3 lg:text-h2">
          Our talented team blends creativity
        </h2>
      </Reveal>

      <div className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
        {team.map((m, i) => (
          <motion.div
            key={m.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.6, ease, delay: (i % 3) * 0.08 }}
            className="group flex items-stretch gap-4"
          >
            <div className="flex flex-1 flex-col justify-between py-1">
              <div className="flex items-start gap-2">
                <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-primary" />
                <div>
                  <p className="text-[17px] font-medium leading-tight">{m.name}</p>
                  <p className="mt-1 text-[14px] text-ink/55">{m.role}</p>
                </div>
              </div>
              <div className="mt-6 flex gap-2">
                <SocialDot label={`${m.name} profile`} />
                <SocialDot label={`${m.name} link`} />
                <SocialDot label={`${m.name} social`} />
              </div>
            </div>
            <div className="w-[46%] overflow-hidden rounded-2xl">
              <Media
                src={m.image}
                alt={m.name}
                className="aspect-[216/225] w-full transition-transform duration-700 ease-smooth group-hover:scale-105"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
