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
          className="group block cursor-pointer overflow-hidden rounded-card bg-white"
          data-cursor="hover"
          data-cursor-text="View"
        >
          <Media
            src={p.image}
            alt={p.name}
            className="aspect-[797/360] w-full transition-transform duration-[900ms] ease-smooth group-hover:scale-[1.04]"
          />
          <div className="flex flex-col gap-4 p-6 sm:flex-row sm:items-start sm:justify-between lg:p-8">
            <h3 className="text-h4">{p.name}</h3>
            <div className="sm:max-w-[380px]">
              <p className="text-[16px] text-ink">{p.description}</p>
              <div className="mt-3 flex flex-nowrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-pill bg-ink/[0.06] px-3 py-1.5 text-[14px] text-ink"
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
