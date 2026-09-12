"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import Magnetic from "./Magnetic";
import { ArrowRight } from "./icons";

type Variant = "solid" | "light" | "outline";
type Size = "md" | "lg";

const base =
  "group/btn relative inline-flex items-center justify-center overflow-hidden rounded-xl font-medium transition-colors duration-300 ease-smooth";

const variants: Record<Variant, string> = {
  solid: "bg-ink text-white",
  light: "bg-white text-ink",
  outline: "border border-ink/20 text-ink",
};

const sizes: Record<Size, string> = {
  md: "h-14 px-6 text-[15px]",
  lg: "h-16 px-8 text-base",
};

// colour the label ends up as once the wipe has covered the button
const hoverText: Record<Variant, string> = {
  solid: "group-hover/btn:text-ink",
  light: "group-hover/btn:text-white",
  outline: "group-hover/btn:text-white",
};

// the wipe colour
const wipe: Record<Variant, string> = {
  solid: "bg-primary",
  light: "bg-ink",
  outline: "bg-ink",
};

export default function Button({
  children,
  href,
  onClick,
  variant = "solid",
  size = "md",
  className,
  arrow = true,
  magnetic = true,
}: {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: Variant;
  size?: Size;
  className?: string;
  arrow?: boolean;
  magnetic?: boolean;
}) {
  const inner = (
    <>
      <span
        className={cn(
          "relative z-10 flex items-center gap-2 whitespace-nowrap transition-colors duration-300 ease-smooth",
          hoverText[variant]
        )}
      >
        {children}
        {arrow && (
          <span className="relative flex h-5 w-5 items-center justify-center overflow-hidden">
            <ArrowRight className="h-[18px] w-[18px] transition-transform duration-500 ease-smooth group-hover/btn:translate-x-6 group-hover/btn:-translate-y-6" />
            <ArrowRight className="absolute h-[18px] w-[18px] -translate-x-6 translate-y-6 transition-transform duration-500 ease-smooth group-hover/btn:translate-x-0 group-hover/btn:translate-y-0" />
          </span>
        )}
      </span>
      <span
        aria-hidden
        className={cn(
          "absolute inset-0 z-0 translate-y-[101%] rounded-xl transition-transform duration-500 ease-smooth group-hover/btn:translate-y-0",
          wipe[variant]
        )}
      />
    </>
  );

  const classes = cn(base, variants[variant], sizes[size], className);

  const el = href ? (
    <Link href={href} className={classes} data-cursor="hover">
      {inner}
    </Link>
  ) : (
    <button type="button" onClick={onClick} className={classes} data-cursor="hover">
      {inner}
    </button>
  );

  if (!magnetic) return el;
  return (
    <Magnetic strength={0.25} className="inline-flex">
      {el}
    </Magnetic>
  );
}
