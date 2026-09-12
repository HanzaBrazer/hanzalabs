"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Media from "@/components/ui/Media";
import Reveal from "@/components/ui/Reveal";
import { services } from "@/lib/content";

const ease = [0.22, 1, 0.36, 1] as const;

const serviceImages = [
  ["/images/svc-1a.webp", "/images/svc-1b.webp"],
  ["/images/svc-2a.webp", "/images/svc-2b.webp"],
  ["/images/svc-3a.webp", "/images/svc-3b.webp"],
  ["/images/svc-4a.webp", "/images/svc-4b.webp"],
  ["/images/svc-5a.webp", "/images/svc-5b.webp"],
  ["/images/svc-1a.webp", "/images/svc-6b.webp"],
  ["/images/svc-2a.webp", "/images/svc-3b.webp"],
];

function PlusMinus({ open }: { open: boolean }) {
  return (
    <span className="relative flex h-9 w-9 shrink-0 items-center justify-center">
      <span className="absolute h-[2px] w-6 rounded-full bg-current" />
      <motion.span
        className="absolute h-6 w-[2px] rounded-full bg-current"
        animate={{ scaleY: open ? 0 : 1 }}
        transition={{ duration: 0.35, ease }}
      />
    </span>
  );
}

export default function Services() {
  const [open, setOpen] = useState(0);

  return (
    <section className="section-pad">
      <div className="container-site">
        <Reveal>
          <p className="eyebrow mb-8">Service</p>
        </Reveal>

        <ul className="flex flex-col gap-3">
          {services.map((s, i) => {
            const isOpen = open === i;
            const imgs = serviceImages[i] ?? serviceImages[0];
            return (
              <li key={s.title} className="overflow-hidden rounded-2xl bg-white">
                <div className="grid items-start gap-6 px-6 py-6 lg:grid-cols-2 lg:gap-10 lg:px-8 lg:py-7">
                  <button
                    type="button"
                    data-cursor="hover"
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    className="flex items-center gap-5 text-left"
                  >
                    <PlusMinus open={isOpen} />
                    <span className="text-h5 lg:text-h4">{s.title}</span>
                  </button>

                  <div>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.5, ease }}
                          className="overflow-hidden"
                        >
                          <p className="text-[15px] leading-relaxed text-ink/70">
                            {s.description}
                          </p>
                          <div className="mt-5 flex flex-wrap gap-2">
                            {s.tags.map((t) => (
                              <span
                                key={t}
                                className="rounded-pill bg-ink/[0.06] px-3 py-1.5 text-[13px] text-ink/70"
                              >
                                {t}
                              </span>
                            ))}
                          </div>
                          <div className="mt-6 grid grid-cols-2 gap-4">
                            {imgs.map((img, k) => (
                              <Media
                                key={k}
                                src={img}
                                alt={s.title}
                                className="aspect-[201/111] w-full rounded-xl"
                              />
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
