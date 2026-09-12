"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  pricingPlans,
  pricingFeatures,
  pricingDescription,
} from "@/lib/content";
import { ArrowRight } from "@/components/ui/icons";

type PlanId = "standard" | "premium";
const ease = [0.22, 1, 0.36, 1] as const;

export default function PricingPlans({ ctaHref = "/contact" }: { ctaHref?: string }) {
  const [active, setActive] = useState<PlanId>("standard");
  const plan = pricingPlans[active];

  const left = pricingFeatures.slice(0, 5);
  const right = pricingFeatures.slice(5);

  const included = (f: { standard: boolean }) =>
    active === "premium" ? true : f.standard;

  return (
    <div className="grid gap-6 rounded-[24px] bg-fill-dark p-5 text-white lg:grid-cols-2 lg:gap-12 lg:rounded-[32px] lg:p-8">
      {/* left */}
      <div className="flex flex-col">
        {/* toggle */}
        <div className="inline-flex w-fit gap-1 rounded-pill border border-stroke-dark bg-black/20 p-1">
          {(["standard", "premium"] as PlanId[]).map((id) => (
            <button
              key={id}
              data-cursor="hover"
              onClick={() => setActive(id)}
              className={cn(
                "relative flex items-center gap-2 rounded-pill px-4 py-2 text-[14px] font-medium capitalize transition-colors",
                active === id ? "text-ink" : "text-white/55 hover:text-white"
              )}
            >
              {active === id && (
                <motion.span
                  layoutId="plan-pill"
                  className="absolute inset-0 rounded-pill bg-white"
                  transition={{ type: "spring", stiffness: 400, damping: 32 }}
                />
              )}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={pricingPlans[id].icon}
                alt=""
                className={cn(
                  "relative z-10 h-4 w-4 object-contain transition",
                  active === id ? "opacity-100" : "opacity-60 invert"
                )}
              />
              <span className="relative z-10">{id}</span>
            </button>
          ))}
        </div>

        <h3 className="mt-7 text-h5 lg:text-h4">
          Designed to help ambitious{" "}
          <span className="text-white/40">brands launch faster.</span>
        </h3>

        <p className="eyebrow mt-8 text-white/50">Price Scale</p>

        {/* prices */}
        <div className="mt-4 grid grid-cols-2 overflow-hidden rounded-xl border border-stroke-dark">
          {(["standard", "premium"] as PlanId[]).map((id, i) => (
            <button
              key={id}
              data-cursor="hover"
              onClick={() => setActive(id)}
              className={cn(
                "flex items-baseline justify-center gap-2 py-4 transition-colors",
                i === 0 && "border-r border-stroke-dark",
                active === id ? "bg-white text-ink" : "text-white"
              )}
            >
              <span className="text-[26px] font-medium tracking-tight lg:text-[30px]">
                {pricingPlans[id].price}
              </span>
              <span
                className={cn(
                  "text-[14px]",
                  active === id ? "text-ink/50" : "text-white/45"
                )}
              >
                {pricingPlans[id].period}
              </span>
            </button>
          ))}
        </div>

        {/* features */}
        <p className="mt-7 text-[13px] uppercase tracking-wide text-white/40">
          Included Features
        </p>
        <div className="mt-3 grid gap-x-8 sm:grid-cols-2">
          {[left, right].map((col, ci) => (
            <ul key={ci}>
              {col.map((f) => {
                const on = included(f);
                return (
                  <li
                    key={f.label}
                    className="border-b border-stroke-dark py-3 text-[14px]"
                  >
                    <span className={cn(!on && "text-white/35 line-through")}>
                      {f.label}
                    </span>
                  </li>
                );
              })}
            </ul>
          ))}
        </div>

        <Link
          href={ctaHref}
          data-cursor="hover"
          className="group mt-8 flex h-14 w-full items-center justify-center gap-2 rounded-xl bg-primary text-[15px] font-medium text-ink lg:mt-auto"
        >
          Start Project
          <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>

      {/* right graphic */}
      <div className="relative flex min-h-[320px] items-center justify-center overflow-hidden rounded-[18px] border border-stroke-dark bg-black/30 lg:min-h-full">
        <AnimatePresence mode="wait">
          <motion.span
            key={active + "-label"}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="pointer-events-none absolute inset-x-0 top-8 text-center text-[64px] font-medium leading-none tracking-tight text-white/[0.06] lg:text-[96px]"
          >
            {plan.name}
          </motion.span>
        </AnimatePresence>
        <AnimatePresence mode="wait">
          <motion.img
            key={active}
            src={plan.graphic}
            alt={plan.name}
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1, y: [0, -14, 0] }}
            exit={{ opacity: 0, scale: 0.85 }}
            transition={{
              opacity: { duration: 0.4 },
              scale: { duration: 0.4 },
              y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
            }}
            className="relative h-[220px] w-auto object-contain drop-shadow-2xl lg:h-[300px]"
          />
        </AnimatePresence>
      </div>
    </div>
  );
}
