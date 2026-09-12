"use client";

import { cn } from "@/lib/utils";

/**
 * Seamless horizontal marquee. Renders the children twice inside a track
 * that translates -50%, giving an infinite loop. Speed set via `duration`.
 */
export default function Marquee({
  children,
  duration = 30,
  reverse = false,
  className,
  pauseOnHover = false,
}: {
  children: React.ReactNode;
  duration?: number;
  reverse?: boolean;
  className?: string;
  pauseOnHover?: boolean;
}) {
  return (
    <div className={cn("group relative w-full overflow-hidden", className)}>
      <div
        className={cn(
          "flex w-max shrink-0 flex-nowrap animate-marquee-x",
          pauseOnHover && "group-hover:[animation-play-state:paused]"
        )}
        style={{
          animationDuration: `${duration}s`,
          animationDirection: reverse ? "reverse" : "normal",
        }}
      >
        <div className="flex shrink-0 flex-nowrap items-center">{children}</div>
        <div
          className="flex shrink-0 flex-nowrap items-center"
          aria-hidden="true"
        >
          {children}
        </div>
      </div>
    </div>
  );
}
