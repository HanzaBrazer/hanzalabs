"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { megaMenu, socials, site } from "@/lib/content";
import Button from "@/components/ui/Button";
import { ArrowUpRight } from "@/components/ui/icons";

const ease = [0.22, 1, 0.36, 1] as const;

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.045, delayChildren: 0.15 },
  },
};

const item = {
  hidden: { y: "115%" },
  show: { y: "0%", transition: { duration: 0.7, ease } },
};

function MenuLink({
  href,
  label,
  large = false,
  onClose,
}: {
  href: string;
  label: string;
  large?: boolean;
  onClose: () => void;
}) {
  const disabled = href === "#";
  return (
    <div className="overflow-hidden">
      <motion.div variants={item}>
        <Link
          href={disabled ? "#" : href}
          onClick={(e) => {
            if (disabled) e.preventDefault();
            else onClose();
          }}
          data-cursor="hover"
          className={`group/link inline-flex items-center gap-3 ${
            large
              ? "text-[26px] leading-[1.15] tracking-tight lg:text-[clamp(2rem,3.2vw,3.1rem)]"
              : "text-[17px] text-ink/70 hover:text-ink lg:text-[19px]"
          } transition-colors ${disabled ? "opacity-45" : ""}`}
        >
          <span className="relative">
            {label}
            <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-ink transition-all duration-500 ease-smooth group-hover/link:w-full" />
          </span>
          {large && (
            <ArrowUpRight className="h-6 w-6 -translate-x-3 opacity-0 transition-all duration-500 ease-smooth group-hover/link:translate-x-0 group-hover/link:opacity-100" />
          )}
        </Link>
      </motion.div>
    </div>
  );
}

export default function MenuOverlay({ onClose }: { onClose: () => void }) {
  const [pageCol, innerCol, utilCol] = megaMenu;

  return (
    <motion.div
      initial={{ clipPath: "inset(0 0 100% 0)" }}
      animate={{ clipPath: "inset(0 0 0% 0)" }}
      exit={{ clipPath: "inset(0 0 100% 0)" }}
      transition={{ duration: 0.7, ease }}
      className="fixed inset-0 z-[90] bg-bg"
    >
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="container-site flex h-[100dvh] flex-col overflow-y-auto pb-8 pt-[84px] no-scrollbar"
      >
        <div className="grid flex-1 grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-12 lg:gap-10">
          {/* Primary pages — large */}
          <div className="col-span-2 lg:col-span-5">
            <div className="overflow-hidden">
              <motion.p variants={item} className="eyebrow mb-6 lg:mb-8">
                {pageCol.title}
              </motion.p>
            </div>
            <ul className="flex flex-col gap-3 lg:gap-4">
              {pageCol.links.map((l) => (
                <li key={l.label}>
                  <MenuLink href={l.href} label={l.label} large onClose={onClose} />
                </li>
              ))}
            </ul>
          </div>

          {/* Inner pages */}
          <div className="col-span-1 lg:col-span-3">
            <div className="overflow-hidden">
              <motion.p variants={item} className="eyebrow mb-6 lg:mb-8">
                {innerCol.title}
              </motion.p>
            </div>
            <ul className="flex flex-col gap-3">
              {innerCol.links.map((l) => (
                <li key={l.label}>
                  <MenuLink href={l.href} label={l.label} onClose={onClose} />
                </li>
              ))}
            </ul>
          </div>

          {/* Utility */}
          <div className="col-span-1 lg:col-span-2">
            <div className="overflow-hidden">
              <motion.p variants={item} className="eyebrow mb-6 lg:mb-8">
                {utilCol.title}
              </motion.p>
            </div>
            <ul className="flex flex-col gap-3">
              {utilCol.links.map((l) => (
                <li key={l.label}>
                  <MenuLink href={l.href} label={l.label} onClose={onClose} />
                </li>
              ))}
            </ul>
          </div>

          {/* Contact / CTA card */}
          <div className="col-span-2 flex flex-col justify-between gap-8 lg:col-span-2">
            <div className="overflow-hidden">
              <motion.div variants={item}>
                <p className="text-[15px] text-ink/60">Have a project in mind?</p>
                <a
                  href={`mailto:${site.email}`}
                  data-cursor="hover"
                  className="mt-1 inline-block text-[17px] underline decoration-ink/30 underline-offset-4 transition-colors hover:decoration-ink"
                >
                  {site.email}
                </a>
              </motion.div>
            </div>
            <div className="overflow-hidden">
              <motion.div variants={item}>
                <Button href="/contact" size="lg" className="w-full">
                  Let&apos;s Talk
                </Button>
              </motion.div>
            </div>
          </div>
        </div>

        {/* bottom row */}
        <div className="mt-10 flex flex-col gap-4 border-t border-ink/10 pt-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="overflow-hidden">
            <motion.p variants={item} className="text-[14px] text-ink/60">
              {site.tagline}
            </motion.p>
          </div>
          <div className="overflow-hidden">
            <motion.ul variants={item} className="flex flex-wrap gap-x-6 gap-y-2">
              {socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    data-cursor="hover"
                    className="text-[14px] text-ink/70 transition-colors hover:text-ink"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </motion.ul>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
