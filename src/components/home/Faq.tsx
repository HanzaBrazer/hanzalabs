import Accordion, { type AccordionItem } from "@/components/ui/Accordion";
import Reveal from "@/components/ui/Reveal";
import { faqs } from "@/lib/content";

export default function Faq() {
  const items: AccordionItem[] = faqs.map((f) => ({
    header: <span className="text-[17px] font-medium lg:text-[19px]">{f.q}</span>,
    content: (
      <p className="max-w-[640px] text-[15px] leading-relaxed text-ink/60">
        {f.a}
      </p>
    ),
  }));

  return (
    <section className="section-pad">
      <div className="container-site grid gap-6 lg:grid-cols-[minmax(0,0.42fr)_minmax(0,0.58fr)] lg:gap-8">
        {/* left card */}
        <Reveal className="lg:sticky lg:top-24 lg:self-start">
          <div className="flex h-full flex-col rounded-card bg-white p-6 lg:p-8">
            <p className="eyebrow mb-6">FAQ</p>
            <h2 className="text-h3 lg:text-h2">What you should know</h2>
            <div className="mt-8 flex flex-1 items-center overflow-hidden rounded-2xl bg-ink/[0.04] px-8 py-10">
              <span className="text-[96px] font-medium leading-none tracking-tightest text-ink/[0.07] lg:text-[120px]">
                FAQ
              </span>
            </div>
          </div>
        </Reveal>

        {/* right accordion */}
        <div>
          <Accordion items={items} defaultOpen={1} iconSize={22} variant="card" />
        </div>
      </div>
    </section>
  );
}
