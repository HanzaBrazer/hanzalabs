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
        <Marquee duration={30} pauseOnHover>
          {partners.map((logo, i) => (
            <div
              key={i}
              className="mx-3 flex h-[130px] w-[200px] items-center justify-center rounded-2xl border border-ink/10 lg:h-[160px] lg:w-[240px]"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={logo}
                alt="Partner logo"
                className="h-9 w-auto max-w-[62%] object-contain opacity-60 transition-opacity duration-300 hover:opacity-100 lg:h-11"
              />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
