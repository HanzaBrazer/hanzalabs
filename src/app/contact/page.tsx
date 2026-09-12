import type { Metadata } from "next";
import Media from "@/components/ui/Media";
import Reveal from "@/components/ui/Reveal";
import ContactForm from "@/components/contact/ContactForm";
import { Mail, Phone } from "@/components/ui/icons";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Let's make something together — get in touch with HanzaLabs across Dubai, London, and Tokyo.",
};

const offices = [
  {
    city: "London, UK",
    image: "/images/office-london.jpg",
    blurb:
      "Where design philosophy meets innovation. Our London HQ is where ideas evolve into timeless visual systems through strategy and emotion-driven craftsmanship.",
    email: "london@hanzalabs.studio",
    phone: "(+44) 203 874 1295",
  },
  {
    city: "Tokyo, Japan",
    image: "/images/office-tokyo.jpg",
    blurb:
      "Precision and beauty coexist here. Our Tokyo office captures minimal perfection through balance, innovation, and subtle design emotion rooted in Japanese aesthetics.",
    email: "tokyo@hanzalabs.studio",
    phone: "(+81) 3 4520 7894",
  },
];

function Contactlet({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div>
      <div className="flex items-center gap-2 text-ink/60">
        {icon}
        <span className="text-[14px]">{label}</span>
      </div>
      <p className="mt-2 text-[15px]">{value}</p>
    </div>
  );
}

export default function ContactPage() {
  return (
    <>
      <section className="container-site pt-[130px] lg:pt-[150px]">
        <Reveal variant="mask">
          <h1 className="mx-auto max-w-[14ch] text-center text-h2">
            Let&apos;s make something together
          </h1>
        </Reveal>

        <div className="mt-14 grid gap-8 lg:grid-cols-[minmax(0,0.42fr)_minmax(0,0.58fr)] lg:gap-12">
          {/* left info */}
          <Reveal>
            <div className="flex h-full flex-col rounded-card border border-ink/10 bg-white p-6 lg:p-8">
              <div>
                <p className="text-h5">Dubai, UAE</p>
                <p className="mt-2 text-[15px] text-ink/55">
                  Downtown Dubai, Burj Gate Tower
                </p>
              </div>
              <div className="mt-6 flex flex-wrap gap-x-12 gap-y-5">
                <Contactlet
                  icon={<Mail className="h-5 w-5" />}
                  label="Email Address"
                  value="dubai@hanzalabs.studio"
                />
                <Contactlet
                  icon={<Phone className="h-5 w-5" />}
                  label="Phone Number"
                  value="+971 4 221 6791"
                />
              </div>
              <div className="mt-6 flex-1 overflow-hidden rounded-2xl">
                <Media
                  src="/images/contact-map.jpg"
                  alt="HanzaLabs Dubai location"
                  className="h-full min-h-[220px] w-full"
                />
              </div>
            </div>
          </Reveal>

          {/* right form */}
          <Reveal delay={0.08}>
            <div className="rounded-card border border-ink/10 bg-white p-6 lg:p-8">
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </section>

      {/* offices */}
      <section className="container-site section-pad">
        <Reveal variant="mask">
          <h2 className="max-w-[520px] text-h3 lg:text-h2">
            Find our creative pulse across global
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-10 lg:grid-cols-2">
          {offices.map((o, i) => (
            <Reveal key={o.city} delay={i * 0.1}>
              <div className="group">
                <div className="overflow-hidden rounded-card">
                  <Media
                    src={o.image}
                    alt={o.city}
                    className="aspect-[682/460] w-full transition-transform duration-[900ms] ease-smooth group-hover:scale-[1.04]"
                  />
                </div>
                <h3 className="mt-6 text-h4">{o.city}</h3>
                <p className="mt-3 max-w-[560px] text-[15px] leading-relaxed text-ink/60">
                  {o.blurb}
                </p>
                <div className="mt-5 flex flex-wrap gap-x-12 gap-y-5 border-t border-ink/10 pt-5">
                  <Contactlet
                    icon={<Mail className="h-5 w-5" />}
                    label="Email Address"
                    value={o.email}
                  />
                  <Contactlet
                    icon={<Phone className="h-5 w-5" />}
                    label="Phone Number"
                    value={o.phone}
                  />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
