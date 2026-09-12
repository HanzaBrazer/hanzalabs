"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { pricingPlans } from "@/lib/content";
import Gem from "@/components/ui/Gem";
import { ArrowRight } from "@/components/ui/icons";

const ease = [0.22, 1, 0.36, 1] as const;

function Check() {
  return (
    <span className="mt-0.5 flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full bg-primary/15">
      <svg viewBox="0 0 20 20" className="h-3 w-3">
        <path
          d="M4 10.5 8 14.5 16 6"
          stroke="#d7ff87"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

export default function PricingTable() {
  const [active, setActive] = useState(pricingPlans[1].id); // Premium
  const plan = pricingPlans.find((p) => p.id === active) ?? pricingPlans[0];

  return (
    <div className="rounded-[24px] bg-fill-dark p-5 text-white lg:rounded-[32px] lg:p-8">
      {/* toggle */}
      <div className="inline-flex rounded-pill border border-stroke-dark bg-black/20 p-1">
        {pricingPlans.map((p) => (
          <button
            key={p.id}
            data-cursor="hover"
            onClick={() => setActive(p.id)}
            className={cn(
              "relative rounded-pill px-5 py-2 text-[14px] font-medium transition-colors",
              active === p.id ? "text-ink" : "text-white/60 hover:text-white"
            )}
          >
            {active === p.id && (
              <motion.span
                layoutId="pill"
                className="absolute inset-0 rounded-pill bg-primary"
                transition={{ type: "spring", stiffness: 400, damping: 32 }}
              />
            )}
            <span className="relative z-10">{p.name}</span>
          </button>
        ))}
      </div>

      <div className="mt-8 grid gap-8 lg:grid-cols-2 lg:gap-10">
        {/* left */}
        <div className="flex flex-col">
          <AnimatePresence mode="wait">
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35, ease }}
            >
              <h3 className="max-w-[380px] text-h5 lg:text-h4">
                {plan.description}
              </h3>

              <div className="mt-6 flex items-end gap-2">
                <span className="text-h4 lg:text-h3">{plan.price}</span>
                <span className="mb-2 text-[15px] text-white/50">
                  {plan.period}
                </span>
              </div>

              <p className="mt-6 text-[13px] uppercase tracking-wide text-white/40">
                Included Features
              </p>
              <ul className="mt-4 grid gap-x-8 gap-y-3 sm:grid-cols-2">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-[14px] text-white/80">
                    <Check />
                    {f}
                  </li>
                ))}
              </ul>
            </motion.div>
          </AnimatePresence>

          <div className="mt-8 lg:mt-auto lg:pt-8">
            <Link
              href="/pricing-single"
              data-cursor="hover"
              className="group inline-flex h-14 items-center gap-2 rounded-pill bg-primary px-7 text-[15px] font-medium text-ink"
            >
              Get Started
              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* right */}
        <div className="relative flex min-h-[300px] items-center justify-center overflow-hidden rounded-[18px] border border-stroke-dark bg-black/30 lg:min-h-[380px]">
          <span className="pointer-events-none absolute inset-x-0 top-6 text-center text-[64px] font-medium leading-none tracking-tight text-white/[0.05] lg:text-[92px]">
            {plan.name}
          </span>
          <Gem className="relative h-[220px] w-[200px] lg:h-[280px] lg:w-[260px]" />
        </div>
      </div>
    </div>
  );
}
