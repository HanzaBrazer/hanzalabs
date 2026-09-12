import Accordion, { type AccordionItem } from "@/components/ui/Accordion";
import Media from "@/components/ui/Media";
import Reveal from "@/components/ui/Reveal";
import { aboutValues } from "@/lib/content";

export default function About() {
  const items: AccordionItem[] = aboutValues.map((v) => ({
    header: <span className="text-h6">{v.title}</span>,
    content: v.body ? (
      <p className="max-w-[520px] text-[15px] leading-relaxed text-ink/70">
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
              HanzaLabs is more than a portfolio — it&apos;s a reflection of a
              design built on purpose.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-[560px] text-[16px] leading-relaxed text-ink/65">
              HanzaLabs is more than a portfolio — it&apos;s a vision to shape
              the future of digital experiences through timeless design and
              meaningful impact. I believe great design isn&apos;t decoration;
              it&apos;s strategy in motion.
            </p>
          </Reveal>

          <div className="mt-8">
            <Accordion items={items} defaultOpen={1} iconSize={22} />
          </div>
        </div>

        <Reveal delay={0.1} className="h-full">
          <Media
            src="/images/about.jpg"
            alt="HanzaLabs studio"
            className="aspect-[4/5] w-full rounded-card lg:h-full"
          />
        </Reveal>
      </div>
    </section>
  );
}
