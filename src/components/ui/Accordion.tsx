"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Plus } from "./icons";

export type AccordionItem = {
  header: React.ReactNode;
  content?: React.ReactNode;
};

const ease = [0.22, 1, 0.36, 1] as const;

export default function Accordion({
  items,
  defaultOpen = -1,
  headerClassName,
  iconSize = 24,
}: {
  items: AccordionItem[];
  defaultOpen?: number;
  headerClassName?: string;
  iconSize?: number;
}) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <ul className="w-full">
      {items.map((it, i) => {
        const isOpen = open === i;
        return (
          <li key={i} className="border-b border-ink/10">
            <button
              type="button"
              data-cursor="hover"
              onClick={() => setOpen(isOpen ? -1 : i)}
              className="flex w-full items-center gap-6 py-6 text-left lg:py-8"
            >
              <span
                className="relative flex shrink-0 items-center justify-center"
                style={{ width: iconSize, height: iconSize }}
              >
                <Plus
                  className={cn(
                    "transition-transform duration-500 ease-smooth",
                    isOpen ? "rotate-[135deg]" : "rotate-0"
                  )}
                  style={{ width: iconSize, height: iconSize }}
                />
              </span>
              <span className={cn("flex-1", headerClassName)}>{it.header}</span>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && it.content && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.55, ease }}
                  className="overflow-hidden"
                >
                  <div className="pb-8 pl-[calc(1.5rem+24px)] pr-2">
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
