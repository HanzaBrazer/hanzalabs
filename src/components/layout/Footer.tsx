"use client";

import { useState } from "react";
import Link from "next/link";
import { footerColumns, socials, site } from "@/lib/content";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import { Chat } from "@/components/ui/icons";

function FLink({ href, label }: { href: string; label: string }) {
  const disabled = href === "#";
  return (
    <Link
      href={disabled ? "#" : href}
      onClick={(e) => disabled && e.preventDefault()}
      data-cursor="hover"
      className="text-[15px] text-ink/60 transition-colors hover:text-ink"
    >
      {label}
    </Link>
  );
}

export default function Footer() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  return (
    <footer className="bg-bg pt-16 lg:pt-24">
      <div className="container-site">
        {/* CTA row */}
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <div className="text-[19px] font-medium">{site.logo}</div>
            <p className="mt-3 flex items-center gap-2 text-[14px] text-ink/60">
              <Chat className="h-[18px] w-[18px]" />
              {site.tagline}
            </p>
          </div>
          <div className="flex flex-col items-start justify-between gap-8 lg:col-span-8 lg:flex-row lg:items-start">
            <Reveal variant="mask" className="max-w-[680px]">
              <h2 className="text-h3 lg:text-h2">
                Start your next big creative journey with HanzaLabs
              </h2>
            </Reveal>
            <div className="shrink-0">
              <Button href="/contact">Let&apos;s Talk</Button>
            </div>
          </div>
        </div>

        {/* newsletter + link columns */}
        <div className="mt-16 grid gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <div className="border-t border-ink/12 pt-6">
              <h3 className="text-h6">Newsletter</h3>
              <p className="mt-2 max-w-[280px] text-[15px] text-ink/55">
                Get the latest insights on design & product.
              </p>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  if (email) setSent(true);
                }}
                className="mt-5 flex h-[48px] w-full max-w-[360px] items-center rounded-pill bg-ink/[0.06] pl-4 pr-1"
              >
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="eg. support@hanza.co"
                  className="h-full flex-1 bg-transparent text-[14px] outline-none placeholder:text-ink/40"
                />
                <button
                  type="submit"
                  data-cursor="hover"
                  className="flex h-[38px] items-center rounded-pill bg-ink px-4 text-[13px] font-medium text-white transition-colors hover:bg-ink/85"
                >
                  {sent ? "Joined ✓" : "Subscribe"}
                </button>
              </form>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 lg:col-span-8">
            {footerColumns.map((col) => (
              <div key={col.title} className="flex flex-col gap-3 border-t border-ink/12 pt-6">
                {col.links.map((l) => (
                  <FLink key={l.label} href={l.href} label={l.label} />
                ))}
              </div>
            ))}
            <div className="flex flex-col gap-3 border-t border-ink/12 pt-6">
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

      <div className="container-site mt-14 border-t border-ink/10 py-6 text-center text-[14px] text-ink/50">
        © {new Date().getFullYear()} HanzaLabs — Licensed Template | Built with Next.js
      </div>
    </footer>
  );
}
