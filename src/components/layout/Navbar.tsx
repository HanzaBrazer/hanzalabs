"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { primaryNav, site } from "@/lib/content";
import { Cart, Chat, Menu as MenuIcon, Close } from "@/components/ui/icons";
import Magnetic from "@/components/ui/Magnetic";
import MenuOverlay from "./MenuOverlay";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);

  // close the overlay on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // show/hide + condense the bar on scroll
  useEffect(() => {
    let last = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 24);
      if (y > last && y > 320) setHidden(true);
      else setHidden(false);
      last = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // lock scroll while the overlay is open
  useEffect(() => {
    const lenis = (window as unknown as { __lenis?: { stop: () => void; start: () => void } }).__lenis;
    if (open) {
      lenis?.stop();
      document.documentElement.style.overflow = "hidden";
    } else {
      lenis?.start();
      document.documentElement.style.overflow = "";
    }
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <motion.header
        initial={{ y: 0 }}
        animate={{ y: hidden && !open ? "-110%" : 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-x-0 top-0 z-[100]"
      >
        <div
          className={cn(
            "transition-colors duration-500",
            open
              ? "bg-bg"
              : scrolled
                ? "bg-bg/80 backdrop-blur-md"
                : "bg-transparent"
          )}
        >
          <div className="container-site flex h-[64px] items-center justify-between gap-4">
            {/* left: logo */}
            <div className="flex items-center gap-8">
              <Link
                href="/"
                data-cursor="hover"
                className="text-[17px] font-medium tracking-tight"
              >
                {site.logo}
              </Link>
              <span className="hidden items-center gap-2 text-[14px] text-ink/70 lg:flex">
                <Chat className="h-[18px] w-[18px]" />
                {site.tagline}
              </span>
            </div>

            {/* right: cart + links + menu */}
            <div className="flex items-center gap-6">
              <button
                aria-label="Cart"
                data-cursor="hover"
                className="relative"
                onClick={() => setOpen(false)}
              >
                <Cart className="h-[22px] w-[22px]" />
                <span className="absolute -right-2 -top-2 flex h-[16px] min-w-[16px] items-center justify-center rounded-full bg-ink px-1 text-[10px] font-medium text-primary">
                  2
                </span>
              </button>

              <nav className="hidden items-center gap-7 lg:flex">
                {primaryNav.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    data-cursor="hover"
                    className={cn(
                      "relative text-[15px] text-ink/80 transition-colors hover:text-ink",
                      pathname === l.href && "text-ink"
                    )}
                  >
                    {l.label}
                    {pathname === l.href && (
                      <span className="absolute -bottom-1 left-0 h-px w-full bg-ink" />
                    )}
                  </Link>
                ))}
              </nav>

              <Magnetic strength={0.2}>
                <button
                  aria-label={open ? "Close menu" : "Open menu"}
                  data-cursor="hover"
                  onClick={() => setOpen((v) => !v)}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-ink/15 bg-white/60"
                >
                  <AnimatePresence mode="wait" initial={false}>
                    {open ? (
                      <motion.span
                        key="close"
                        initial={{ rotate: -90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: 90, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Close className="h-5 w-5" />
                      </motion.span>
                    ) : (
                      <motion.span
                        key="menu"
                        initial={{ rotate: 90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: -90, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <MenuIcon className="h-5 w-5" />
                      </motion.span>
                    )}
                  </AnimatePresence>
                </button>
              </Magnetic>
            </div>
          </div>
          <div
            className={cn(
              "h-px w-full origin-left bg-ink/10 transition-opacity duration-500",
              scrolled && !open ? "opacity-100" : "opacity-100"
            )}
          />
        </div>
      </motion.header>

      <AnimatePresence>
        {open && <MenuOverlay onClose={() => setOpen(false)} />}
      </AnimatePresence>
    </>
  );
}
