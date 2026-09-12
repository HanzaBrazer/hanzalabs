"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

export type AccordionItem = {
  header: React.ReactNode;
  content?: React.ReactNode;
};

const ease = [0.22, 1, 0.36, 1] as const;

function PlusMinus({ open, size = 24 }: { open: boolean; size?: number }) {
  return (
    <span
      className="relative flex shrink-0 items-center justify-center"
      style={{ width: size, height: size }}
    >
      <span className="absolute h-[2px] w-full rounded-full bg-current" />
      <motion.span
        className="absolute h-full w-[2px] rounded-full bg-current"
        animate={{ scaleY: open ? 0 : 1 }}
        transition={{ duration: 0.35, ease }}
      />
    </span>
  );
}

export default function Accordion({
  items,
  defaultOpen = -1,
  headerClassName,
  iconSize = 24,
  variant = "line",
}: {
  items: AccordionItem[];
  defaultOpen?: number;
  headerClassName?: string;
  iconSize?: number;
  variant?: "line" | "card";
}) {
  const [open, setOpen] = useState(defaultOpen);
  const isCard = variant === "card";

  return (
    <ul className={cn(isCard && "flex flex-col gap-3")}>
      {items.map((it, i) => {
        const isOpen = open === i;
        return (
          <li
            key={i}
            className={cn(
              isCard
                ? "overflow-hidden rounded-2xl bg-white"
                : "border-b border-ink/10"
            )}
          >
            <button
              type="button"
              data-cursor="hover"
              onClick={() => setOpen(isOpen ? -1 : i)}
              className={cn(
                "flex w-full items-center gap-5 text-left",
                isCard ? "px-6 py-5 lg:px-7 lg:py-6" : "py-6 lg:py-8"
              )}
            >
              <PlusMinus open={isOpen} size={iconSize} />
              <span className={cn("flex-1", headerClassName)}>{it.header}</span>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && it.content && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.5, ease }}
                  className="overflow-hidden"
                >
                  <div
                    className={cn(
                      isCard
                        ? "px-6 pb-6 pl-[calc(1.25rem+20px)] lg:px-7 lg:pb-7 lg:pl-[calc(1.75rem+20px)]"
                        : "pb-8 pl-[calc(1.25rem+24px)] pr-2"
                    )}
                  >
                    {it.content}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </li>
        );
      })}
    </ul>
  );
}
