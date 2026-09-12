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
      className="text-[16px] text-ink transition-opacity hover:opacity-60"
    >
      {label}
    </Link>
  );
}

export default function Footer() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  return (
    <footer className="bg-bg pb-6 pt-10">
      <div className="container-site">
        <div className="rounded-[24px] bg-white px-6 py-10 lg:rounded-[32px] lg:px-12 lg:py-14">
          {/* Row 1 — brand + CTA */}
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-4">
              <div className="text-[19px] font-medium">{site.logo}</div>
              <p className="mt-3 flex items-center gap-2 text-[14px] text-ink/60">
                <Chat className="h-[18px] w-[18px]" />
                {site.tagline}
              </p>
            </div>
            <div className="flex flex-col items-start justify-between gap-8 lg:col-span-8 lg:flex-row lg:items-center">
              <Reveal variant="mask" className="max-w-[600px]">
                <h2 className="text-h3">
                  Start your next big creative journey with HanzaLabs
                </h2>
              </Reveal>
              <div className="shrink-0">
                <Button href="/contact">Let&apos;s Talk</Button>
              </div>
            </div>
          </div>

          {/* Row 2 — newsletter + link columns */}
          <div className="mt-14 grid gap-10 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-4">
              <div className="border-t border-ink/12 pt-6">
                <h3 className="text-h6">Newsletter</h3>
                <p className="mt-2 max-w-[280px] text-[15px] text-ink/55">
                  Get the latest insights on payments.
                </p>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    if (email) setSent(true);
                  }}
                  className="mt-5 flex h-[48px] w-full max-w-[360px] items-center rounded-xl bg-ink/[0.05] pl-4 pr-1"
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
                    className="flex h-[38px] items-center rounded-lg bg-ink px-4 text-[13px] font-medium text-white transition-colors hover:bg-ink/85"
                  >
                    {sent ? "Joined ✓" : "Subscribe"}
                  </button>
                </form>
              </div>
            </div>

            <div className="lg:col-span-8">
              <div className="grid grid-cols-2 gap-x-6 gap-y-8 border-t border-ink/12 pt-6 sm:grid-cols-4">
                {footerColumns.map((col) => (
                  <div key={col.title} className="flex flex-col gap-3">
                    {col.links.map((l) => (
                      <FLink key={l.label} href={l.href} label={l.label} />
                    ))}
                  </div>
                ))}
                <div className="flex flex-col gap-3">
                  {socials.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noreferrer"
                      data-cursor="hover"
                      className="text-[16px] text-ink transition-opacity hover:opacity-60"
                    >
                      {s.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-12 border-t border-ink/12 pt-6 text-center text-[14px] text-ink/50">
            Made By Flownix- License | Powered By Webflow
          </div>
        </div>
      </div>
    </footer>
  );
}
