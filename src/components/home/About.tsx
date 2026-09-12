import Link from "next/link";
import Accordion, { type AccordionItem } from "@/components/ui/Accordion";
import Media from "@/components/ui/Media";
import Reveal from "@/components/ui/Reveal";
import { aboutValues } from "@/lib/content";
import { ArrowRight } from "@/components/ui/icons";

export default function About() {
  const items: AccordionItem[] = aboutValues.map((v) => ({
    header: <span className="text-h6">{v.title}</span>,
    content: v.body ? (
      <p className="max-w-[520px] text-[15px] leading-relaxed text-ink/65">
        {v.body}
      </p>
    ) : undefined,
  }));

  return (
    <section className="section-pad">
      <div className="container-site grid gap-10 lg:grid-cols-2 lg:gap-16">
        <div>
          <Reveal>
            <p className="eyebrow mb-6">Design Leadership (about)</p>
          </Reveal>
          <Reveal variant="mask">
            <h2 className="text-h4 lg:text-h3">
              Hanza is more than a portfolio — it&apos;s a reflection of a
              design built on purpose.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-[560px] text-[16px] leading-relaxed text-ink/65">
              Hanza is more than a portfolio — it&apos;s a vision to shape the
              future of digital experiences through timeless design and
              meaningful impact. I believe great design isn&apos;t decoration;
              it&apos;s strategy in motion.
            </p>
          </Reveal>

          <div className="mt-8">
            <Accordion items={items} defaultOpen={1} iconSize={20} variant="card" />
          </div>
        </div>

        <Reveal delay={0.1} className="h-full">
          <div className="relative h-full min-h-[440px] overflow-hidden rounded-card">
            <Media
              src="/images/design.webp"
              alt="HanzaLabs design leadership"
              className="absolute inset-0 h-full w-full"
            />
            <div className="absolute inset-x-0 bottom-0 p-4">
              <Link
                href="/contact"
                data-cursor="hover"
                className="group flex h-16 w-full items-center justify-center gap-2 rounded-xl bg-primary text-[15px] font-medium text-ink"
              >
                Let&apos;s Talk
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
