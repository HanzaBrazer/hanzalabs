import type { Metadata } from "next";
import PricingDetail from "@/components/pricing/PricingDetail";
import Faq from "@/components/home/Faq";
import Reveal from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Standard Plan",
  description:
    "The Standard Plan — clarity is the new luxury. A balance of strategy, aesthetics, and simplicity built to make your brand unforgettable.",
};

export default function PricingSinglePage() {
  return (
    <>
      <section className="container-site pt-[130px] lg:pt-[150px]">
        <div className="mx-auto max-w-[920px]">
          <Reveal variant="mask">
            <h1 className="text-h2">Standard</h1>
          </Reveal>

          <Reveal className="mt-8" delay={0.05}>
            <PricingDetail />
          </Reveal>

          {/* editorial */}
          <div className="mt-16 flex flex-col gap-14 lg:mt-20">
            <div>
              <Reveal variant="mask">
                <h2 className="text-h4">For those who seek more</h2>
              </Reveal>
              <Reveal delay={0.05}>
                <p className="mt-5 text-[16px] leading-relaxed text-ink/65">
                  Because design should be more than decoration — it should
                  define how your brand feels, functions, and connects. The
                  Standard Plan is built for those who believe clarity is the new
                  luxury: a balance of strategy, aesthetics, and simplicity.
                  Every layout, every interaction, every font weight serves a
                  single purpose — to make your brand unforgettable. It&apos;s
                  for brands that are ready to look premium &amp; perform better.
                </p>
              </Reveal>
            </div>

            <div>
              <Reveal variant="mask">
                <h2 className="text-h4">Refined benefits overview</h2>
              </Reveal>
              <Reveal delay={0.05}>
                <p className="mt-5 text-[16px] leading-relaxed text-ink/65">
                  Refinement isn&apos;t about excess — it&apos;s about essence.
                  Every element in this plan delivers clarity, beauty, and
                  performance, designed to elevate your brand&apos;s story with
                  effortless sophistication.
                </p>
              </Reveal>
              <ul className="mt-6 flex flex-col gap-3 border-t border-ink/10 pt-6">
                {[
                  "Designed to feel timeless, modern, and emotionally alive.",
                  "Created for brands that value emotion and performance equally.",
                  "Driven by research, shaped by creativity, finished with elegance.",
                ].map((l) => (
                  <li key={l} className="flex items-start gap-3 text-[16px] text-ink/80">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    {l}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <Reveal variant="mask">
                <h2 className="text-h4">Benefits</h2>
              </Reveal>
              <Reveal delay={0.05}>
                <p className="mt-5 text-[16px] leading-relaxed text-ink/65">
                  The Standard Plan gives you more than a website — it gives you
                  a foundation built for growth and clarity. It brings together
                  design precision, brand alignment, and user experience to
                  create something that feels intentionally crafted, not just
                  assembled. Every layout is designed to guide, every interaction
                  has meaning, and every visual decision reflects your
                  brand&apos;s true personality. The biggest benefit is peace of
                  mind.
                </p>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-4 text-[16px] leading-relaxed text-ink/65">
                  It adapts gracefully across screens, loads fast, and leaves a
                  lasting impression through simplicity and flow. A design that
                  doesn&apos;t just look premium — it feels intelligent,
                  effortless, and timeless.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <Faq />
    </>
  );
}
