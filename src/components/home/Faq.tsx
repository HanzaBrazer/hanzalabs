import Accordion, { type AccordionItem } from "@/components/ui/Accordion";
import Reveal from "@/components/ui/Reveal";
import { faqs } from "@/lib/content";

export default function Faq() {
  const items: AccordionItem[] = faqs.map((f) => ({
    header: <span className="text-[18px] font-medium lg:text-[20px]">{f.q}</span>,
    content: (
      <p className="max-w-[640px] text-[15px] leading-relaxed text-ink/65">
        {f.a}
      </p>
    ),
  }));

  return (
    <section className="section-pad">
      <div className="container-site grid gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-16">
        <div className="lg:sticky lg:top-24 lg:self-start">
          <Reveal>
            <p className="eyebrow mb-6">FAQ</p>
          </Reveal>
          <Reveal variant="mask">
            <h2 className="text-h3 lg:text-h2">What you should know</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-[380px] text-[15px] text-ink/60">
              Everything you might want to ask before we start working together.
            </p>
          </Reveal>
        </div>

        <div>
          <Accordion items={items} defaultOpen={1} iconSize={22} />
        </div>
      </div>
    </section>
  );
}
