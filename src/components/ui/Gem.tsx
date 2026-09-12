"use client";

import { motion } from "framer-motion";

/**
 * Original abstract faceted "gem" accent, drawn from scratch as SVG.
 * Gently floats + rotates. Used as the pricing highlight graphic.
 */
export default function Gem({ className }: { className?: string }) {
  return (
    <motion.div
      className={className}
      animate={{ y: [0, -14, 0], rotate: [0, 4, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
    >
      <svg viewBox="0 0 200 220" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
        <defs>
          <linearGradient id="gemA" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#ecffc0" />
            <stop offset="1" stopColor="#b6f24a" />
          </linearGradient>
          <linearGradient id="gemB" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#d7ff87" />
            <stop offset="1" stopColor="#8fd120" />
          </linearGradient>
          <linearGradient id="gemC" x1="0" y1="1" x2="1" y2="0">
            <stop offset="0" stopColor="#a6e63c" />
            <stop offset="1" stopColor="#e6ffb0" />
          </linearGradient>
          <radialGradient id="glow" cx="0.5" cy="0.5" r="0.5">
            <stop offset="0" stopColor="#d7ff87" stopOpacity="0.55" />
            <stop offset="1" stopColor="#d7ff87" stopOpacity="0" />
          </radialGradient>
        </defs>

        <ellipse cx="100" cy="120" rx="95" ry="95" fill="url(#glow)" />

        {/* crown */}
        <polygon points="100,20 55,74 145,74" fill="url(#gemA)" />
        <polygon points="55,74 25,74 100,20" fill="url(#gemC)" opacity="0.9" />
        <polygon points="145,74 175,74 100,20" fill="url(#gemB)" opacity="0.85" />
        <polygon points="25,74 55,74 40,110" fill="url(#gemB)" opacity="0.7" />
        <polygon points="175,74 145,74 160,110" fill="url(#gemC)" opacity="0.7" />

        {/* pavilion */}
        <polygon points="25,74 175,74 100,200" fill="url(#gemB)" />
        <polygon points="55,74 145,74 100,200" fill="url(#gemA)" opacity="0.55" />
        <polygon points="25,74 100,200 40,110" fill="url(#gemC)" opacity="0.5" />
        <polygon points="175,74 100,200 160,110" fill="url(#gemB)" opacity="0.6" />
        <polygon points="100,74 100,200 145,74" fill="#ffffff" opacity="0.12" />
      </svg>
    </motion.div>
  );
}
