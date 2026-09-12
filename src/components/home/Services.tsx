import Accordion, { type AccordionItem } from "@/components/ui/Accordion";
import Media from "@/components/ui/Media";
import Reveal from "@/components/ui/Reveal";
import { services } from "@/lib/content";

export default function Services() {
  const items: AccordionItem[] = services.map((s) => ({
    header: <span className="text-h5 lg:text-h4">{s.title}</span>,
    content: (
      <div className="grid gap-8 lg:grid-cols-2">
        <div>
          <p className="max-w-[480px] text-[15px] leading-relaxed text-ink/70">
            {s.description}
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {s.tags.map((t) => (
              <span
                key={t}
                className="rounded-pill border border-ink/15 px-2.5 py-1 text-[13px] text-ink/70"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {s.images.map((img, i) => (
            <Media
              key={i}
              src={img}
              alt={s.title}
              className="aspect-[3/2] w-full rounded-xl"
            />
          ))}
        </div>
      </div>
    ),
  }));

  return (
    <section className="section-pad">
      <div className="container-site">
        <Reveal>
          <p className="eyebrow mb-10">Service</p>
        </Reveal>
        <Accordion items={items} defaultOpen={0} iconSize={36} />
      </div>
    </section>
  );
}
