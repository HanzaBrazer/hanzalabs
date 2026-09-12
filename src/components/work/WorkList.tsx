"use client";

import { motion } from "framer-motion";
import Media from "@/components/ui/Media";
import { workProjects } from "@/lib/content";

const ease = [0.22, 1, 0.36, 1] as const;

export default function WorkList() {
  return (
    <div className="flex flex-col gap-6 lg:gap-8">
      {workProjects.map((p, i) => (
        <motion.article
          key={p.slug}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-12% 0px" }}
          transition={{ duration: 0.8, ease }}
          className="group cursor-pointer"
          data-cursor="hover"
          data-cursor-text="View"
        >
          <div className="overflow-hidden rounded-card">
            <Media
              src={p.image}
              alt={p.name}
              className="aspect-[797/360] w-full transition-transform duration-[900ms] ease-smooth group-hover:scale-[1.04]"
            />
          </div>
          <div className="mt-5 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <h3 className="text-h4">{p.name}</h3>
            <div className="sm:max-w-[300px]">
              <p className="text-[15px] text-ink/60">{p.description}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-pill border border-ink/15 px-2.5 py-1 text-[13px] text-ink/70"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.article>
      ))}
    </div>
  );
}
