"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion";

/**
 * Custom cursor: a small precise dot plus a soft trailing ring that lags
 * behind with spring physics. Grows and can show a label when hovering
 * elements marked with `data-cursor` / `data-cursor-text`.
 */
export default function Cursor() {
  const [enabled, setEnabled] = useState(false);
  const [variant, setVariant] = useState<"default" | "hover" | "text">("default");
  const [label, setLabel] = useState("");
  const [hidden, setHidden] = useState(true);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);

  const ringX = useSpring(x, { stiffness: 350, damping: 34, mass: 0.6 });
  const ringY = useSpring(y, { stiffness: 350, damping: 34, mass: 0.6 });

  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (!fine) return;
    setEnabled(true);
    document.body.classList.add("has-custom-cursor");

    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      setHidden(false);

      const target = (e.target as HTMLElement)?.closest<HTMLElement>(
        "[data-cursor]"
      );
      if (target) {
        const kind = target.getAttribute("data-cursor");
        const text = target.getAttribute("data-cursor-text") || "";
        if (text) {
          setVariant("text");
          setLabel(text);
        } else if (kind === "hover") {
          setVariant("hover");
          setLabel("");
        } else {
          setVariant("default");
          setLabel("");
        }
      } else {
        setVariant("default");
        setLabel("");
      }
    };

    const leave = () => setHidden(true);

    window.addEventListener("mousemove", move);
    document.addEventListener("mouseleave", leave);
    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseleave", leave);
      document.body.classList.remove("has-custom-cursor");
    };
  }, [x, y]);

  if (!enabled) return null;

  const ringSize = variant === "text" ? 84 : variant === "hover" ? 56 : 34;

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[9999]"
      style={{ opacity: hidden ? 0 : 1, transition: "opacity 0.25s" }}
    >
      {/* trailing ring */}
      <motion.div
        className="fixed left-0 top-0 flex items-center justify-center rounded-full"
        style={{
          x: ringX,
          y: ringY,
          width: ringSize,
          height: ringSize,
          translateX: "-50%",
          translateY: "-50%",
          backgroundColor:
            variant === "text" ? "#0E0E0E" : "rgba(14,14,14,0.10)",
          border:
            variant === "text" ? "none" : "1px solid rgba(14,14,14,0.35)",
          backdropFilter: variant === "text" ? "none" : "invert(4%)",
        }}
        transition={{ type: "spring", stiffness: 260, damping: 24 }}
      >
        <AnimatePresence>
          {variant === "text" && label && (
            <motion.span
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.6 }}
              className="select-none text-[12px] font-medium text-white"
            >
              {label}
            </motion.span>
          )}
        </AnimatePresence>
      </motion.div>

      {/* precise dot */}
      {variant !== "text" && (
        <motion.div
          className="fixed left-0 top-0 h-[6px] w-[6px] rounded-full bg-ink"
          style={{ x, y, translateX: "-50%", translateY: "-50%" }}
        />
      )}
    </div>
  );
}
