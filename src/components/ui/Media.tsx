"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

/**
 * Image with a graceful gradient fallback (no broken-image icon) so layouts
 * read correctly before/without the real asset.
 */
export default function Media({
  src,
  alt = "",
  className,
  imgClassName,
  priority = false,
}: {
  src?: string;
  alt?: string;
  className?: string;
  imgClassName?: string;
  priority?: boolean;
}) {
  const [ok, setOk] = useState(true);
  const show = src && ok;
  return (
    <div className={cn("relative overflow-hidden bg-ink/[0.06]", className)}>
      {!show && (
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg,#e2e4e6 0%,#d2d6da 45%,#c3c8cd 100%)",
          }}
        />
      )}
      {src && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          alt={alt}
          onError={() => setOk(false)}
          loading={priority ? "eager" : "lazy"}
          className={cn(
            "h-full w-full object-cover transition-opacity duration-700",
            ok ? "opacity-100" : "opacity-0",
            imgClassName
          )}
        />
      )}
    </div>
  );
}
