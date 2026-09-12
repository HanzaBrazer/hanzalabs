"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ArrowRight } from "@/components/ui/icons";

const features = [
  "Custom website design & strategy",
  "Premium UI/UX experience",
  "Responsive & mobile-first layout",
  "Brand identity alignment",
  "Conversion-optimized structure",
  "Creative direction & art guidance",
  "SEO-ready build foundation",
  "Modern animation & micro-interactions",
  "Dedicated design manager",
  "Lifetime update support",
];

const plans = [
  { id: "standard", name: "Standard", price: "$2,499" },
  { id: "premium", name: "Premium", price: "$9,999" },
];

function Check() {
  return (
    <span className="mt-0.5 flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full bg-ink text-primary">
      <svg viewBox="0 0 20 20" className="h-3 w-3">
        <path d="M4 10.5 8 14.5 16 6" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}

export default function PricingDetail() {
  const [active, setActive] = useState("standard");
  const [added, setAdded] = useState(false);

  return (
    <div className="rounded-[24px] border border-ink/12 bg-white p-5 lg:rounded-[28px] lg:p-8">
      {/* toggle */}
      <div className="mx-auto flex w-fit rounded-pill border border-ink/12 bg-bg p-1">
        {plans.map((p) => (
          <button
            key={p.id}
            data-cursor="hover"
            onClick={() => setActive(p.id)}
            className="relative rounded-pill px-6 py-2.5 text-[14px] font-medium"
          >
            {active === p.id && (
              <motion.span
                layoutId="ps-pill"
                className="absolute inset-0 rounded-pill bg-ink"
                transition={{ type: "spring", stiffness: 400, damping: 32 }}
              />
            )}
            <span className={cn("relative z-10", active === p.id ? "text-white" : "text-ink/70")}>
              {p.name}
            </span>
          </button>
        ))}
      </div>

      {/* prices */}
      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {plans.map((p) => (
          <button
            key={p.id}
            onClick={() => setActive(p.id)}
            data-cursor="hover"
            className={cn(
              "flex items-baseline justify-center gap-2 rounded-2xl border p-6 transition-colors",
              active === p.id
                ? "border-ink bg-primary/15"
                : "border-ink/12 hover:border-ink/25"
            )}
          >
            <span className="text-h4 font-medium">{p.price}</span>
            <span className="text-[15px] text-ink/50">/ Project</span>
          </button>
        ))}
      </div>

      {/* features */}
      <div className="mt-10">
        <p className="text-[13px] uppercase tracking-wide text-ink/40">
          Included Features
        </p>
        <ul className="mt-5 grid gap-x-10 gap-y-4 sm:grid-cols-2">
          {features.map((f) => (
            <li key={f} className="flex items-start gap-3 text-[15px] text-ink/80">
              <Check />
              {f}
            </li>
          ))}
        </ul>
      </div>

      <button
        onClick={() => setAdded(true)}
        data-cursor="hover"
        className="group mt-10 flex h-14 w-full items-center justify-center gap-2 rounded-pill bg-ink text-[15px] font-medium text-white transition-colors hover:bg-ink/90"
      >
        {added ? "Added to cart ✓" : "Add to cart"}
        {!added && (
          <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
        )}
      </button>
    </div>
  );
}
