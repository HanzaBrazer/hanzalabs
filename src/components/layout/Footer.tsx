"use client";

import { useState } from "react";
import Link from "next/link";
import { footerColumns, socials, site } from "@/lib/content";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import Marquee from "@/components/ui/Marquee";
import { Chat, ArrowRight } from "@/components/ui/icons";

function MenuLink({ href, label }: { href: string; label: string }) {
  const disabled = href === "#";
  return (
    <Link
      href={disabled ? "#" : href}
      onClick={(e) => disabled && e.preventDefault()}
      data-cursor="hover"
      className={`text-[15px] text-ink/60 transition-colors hover:text-ink ${
        disabled ? "cursor-default" : ""
      }`}
    >
      {label}
    </Link>
  );
}

export default function Footer() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  return (
    <footer className="relative bg-bg pt-16 lg:pt-24">
      <div className="container-site">
        {/* CTA */}
        <div className="grid gap-10 border-b border-ink/10 pb-14 lg:grid-cols-12 lg:gap-8 lg:pb-20">
          <div className="lg:col-span-5">
            <div className="text-[19px] font-medium">{site.logo}</div>
            <p className="mt-3 flex items-center gap-2 text-[14px] text-ink/60">
              <Chat className="h-[18px] w-[18px]" />
              {site.tagline}
            </p>
          </div>
          <div className="lg:col-span-7">
            <Reveal variant="mask">
              <h2 className="text-h3 lg:text-h2">
                Start your next big creative journey with HanzaLabs
              </h2>
            </Reveal>
            <div className="mt-8">
              <Button href="/contact" size="lg">
                Let&apos;s Talk
              </Button>
            </div>
          </div>
        </div>

        {/* Newsletter + links */}
        <div className="grid gap-12 py-14 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <h3 className="text-h6">Newsletter</h3>
            <p className="mt-2 max-w-[280px] text-[15px] text-ink/60">
              Get the latest insights on design, product & motion.
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (email) setSent(true);
              }}
              className="mt-5 flex h-[46px] w-full max-w-[360px] items-center rounded-pill border border-ink/15 bg-white pl-4 pr-1"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="eg. hello@company.co"
                className="h-full flex-1 bg-transparent text-[14px] outline-none placeholder:text-ink/40"
              />
              <button
                type="submit"
                data-cursor="hover"
                className="flex h-[38px] items-center gap-1 rounded-pill bg-ink px-4 text-[13px] font-medium text-white transition-colors hover:bg-ink/85"
              >
                {sent ? "Joined ✓" : "Subscribe"}
              </button>
            </form>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 lg:col-span-8">
            {footerColumns.map((col) => (
              <div key={col.title} className="flex flex-col gap-3">
                <p className="mb-1 text-[13px] uppercase tracking-wide text-ink/40">
                  {col.title}
                </p>
                {col.links.map((l) => (
                  <MenuLink key={l.label} href={l.href} label={l.label} />
                ))}
              </div>
            ))}
            <div className="flex flex-col gap-3">
              <p className="mb-1 text-[13px] uppercase tracking-wide text-ink/40">
                Social
              </p>
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  data-cursor="hover"
                  className="text-[15px] text-ink/60 transition-colors hover:text-ink"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* giant wordmark marquee */}
      <div className="select-none border-t border-ink/10 py-8">
        <Marquee duration={40}>
          <span className="px-8 text-[16vw] font-medium leading-none tracking-tight text-ink/[0.06] lg:text-[13vw]">
            HanzaLabs® — Design Studio —
          </span>
        </Marquee>
      </div>

      <div className="container-site flex flex-col items-center justify-between gap-3 border-t border-ink/10 py-6 text-[13px] text-ink/50 sm:flex-row">
        <p>© {new Date().getFullYear()} HanzaLabs. All rights reserved.</p>
        <button
          data-cursor="hover"
          onClick={() => {
            const lenis = (window as unknown as { __lenis?: { scrollTo: (t: number) => void } }).__lenis;
            if (lenis) lenis.scrollTo(0);
            else window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="group flex items-center gap-1 hover:text-ink"
        >
          Back to top
          <ArrowRight className="h-4 w-4 -rotate-90 transition-transform group-hover:-translate-y-1" />
        </button>
      </div>
    </footer>
  );
}
