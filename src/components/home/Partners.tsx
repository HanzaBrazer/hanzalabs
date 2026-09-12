import Marquee from "@/components/ui/Marquee";
import Reveal from "@/components/ui/Reveal";
import { partners } from "@/lib/content";

export default function Partners() {
  return (
    <section className="section-pad">
      <div className="container-site">
        <div className="mx-auto max-w-[720px] text-center">
          <Reveal>
            <p className="eyebrow mx-auto w-fit">be the partner of</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-6 text-h4 lg:text-h3">
              We collaborate with ambitious brands to craft powerful partners
            </h2>
          </Reveal>
        </div>
      </div>

      <div className="mt-12 lg:mt-16">
        <Marquee duration={28} pauseOnHover>
          {partners.map((p) => (
            <div
              key={p}
              className="mx-4 flex h-[120px] w-[200px] items-center justify-center rounded-2xl border border-ink/10 lg:h-[160px] lg:w-[240px]"
            >
              <span className="text-[22px] font-medium tracking-tight text-ink/70 lg:text-[26px]">
                {p}
              </span>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
