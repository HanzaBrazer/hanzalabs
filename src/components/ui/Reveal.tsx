"use client";

import { motion, type Variants } from "framer-motion";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  once?: boolean;
  variant?: "rise" | "fade" | "mask";
  as?: "div" | "span" | "li" | "h2" | "p";
};

const easeSmooth = [0.22, 1, 0.36, 1] as const;

export default function Reveal({
  children,
  className,
  delay = 0,
  y = 28,
  once = true,
  variant = "rise",
  as = "div",
}: RevealProps) {
  const MotionTag = motion[as] as typeof motion.div;

  if (variant === "mask") {
    return (
      <span className={`block overflow-hidden ${className ?? ""}`}>
        <motion.span
          className="block"
          initial={{ y: "110%", opacity: 0 }}
          whileInView={{ y: "0%", opacity: 1 }}
          viewport={{ once, margin: "-10% 0px" }}
          transition={{ duration: 0.9, ease: easeSmooth, delay }}
        >
          {children}
        </motion.span>
      </span>
    );
  }

  const variants: Variants = {
    hidden: {
      opacity: 0,
      y: variant === "fade" ? 0 : y,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: easeSmooth, delay },
    },
  };

  return (
    <MotionTag
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once, margin: "-8% 0px" }}
    >
      {children}
    </MotionTag>
  );
}
