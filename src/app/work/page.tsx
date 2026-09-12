import type { Metadata } from "next";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import WorkList from "@/components/work/WorkList";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected work that makes impact — websites, products, and brand systems by HanzaLabs.",
};

export default function WorkPage() {
  return (
    <section className="container-site pt-[130px] lg:pt-[160px]">
      <div className="grid gap-12 lg:grid-cols-[minmax(0,0.42fr)_minmax(0,0.58fr)] lg:gap-16">
        {/* sticky heading */}
        <div className="lg:sticky lg:top-28 lg:self-start">
          <Reveal>
            <p className="eyebrow mb-6">Work</p>
          </Reveal>
          <Reveal variant="mask">
            <h1 className="max-w-[10ch] text-h2">Works that Make impact</h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-[340px] text-[16px] text-ink/60">
              A selection of projects where strategy, craft, and motion come
              together to move the needle.
            </p>
          </Reveal>
          <Reveal delay={0.15} className="mt-8">
            <Button href="/contact">Let&apos;s Talk</Button>
          </Reveal>
        </div>

        {/* scrolling list */}
        <div className="pb-8">
          <WorkList />
        </div>
      </div>
    </section>
  );
}
