import Media from "@/components/ui/Media";
import Reveal from "@/components/ui/Reveal";
import { testimonials, stats } from "@/lib/content";

function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col justify-center rounded-card bg-ink p-7 text-white">
      <span className="text-[64px] font-medium leading-none tracking-tightest text-primary lg:text-[72px]">
        {value}
      </span>
      <span className="mt-4 text-[15px] text-white/70">{label}</span>
    </div>
  );
}

function Avatar({ name }: { name: string }) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("");
  return (
    <div className="flex h-[46px] w-[46px] shrink-0 items-center justify-center rounded-full bg-ink text-[14px] font-medium text-primary">
      {initials}
    </div>
  );
}

function QuoteCard({
  quote,
  name,
  role,
}: {
  quote: string;
  name: string;
  role: string;
}) {
  return (
    <div className="flex flex-col justify-between rounded-card border border-ink/10 bg-white p-7">
      <p className="text-[18px] leading-snug text-ink/90">
        &ldquo;{quote}&rdquo;
      </p>
      <div className="mt-8 flex items-center gap-3">
        <Avatar name={name} />
        <div>
          <p className="text-[15px] font-medium">{name}</p>
          <p className="text-[13px] text-ink/50">{role}</p>
        </div>
      </div>
    </div>
  );
}

function ImageQuoteCard({
  quote,
  name,
  role,
  image,
}: {
  quote: string;
  name: string;
  role: string;
  image: string;
}) {
  return (
    <div className="relative flex min-h-[380px] flex-col justify-end overflow-hidden rounded-card p-7 text-white lg:min-h-full">
      <Media src={image} alt={name} className="absolute inset-0 h-full w-full" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
      <div className="relative">
        <p className="text-[18px] leading-snug">&ldquo;{quote}&rdquo;</p>
        <div className="mt-5">
          <p className="text-[15px] font-medium">{name}</p>
          <p className="text-[13px] text-white/70">{role}</p>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="section-pad">
      <div className="container-site">
        <div className="mb-10 lg:mb-14">
          <Reveal>
            <p className="eyebrow mb-6">Testimonials</p>
          </Reveal>
          <Reveal variant="mask">
            <h2 className="max-w-[900px] text-h3 lg:text-h2">
              Discover how brands grew faster by trusting our design.
            </h2>
          </Reveal>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col gap-4">
            <StatCard value={stats[0].value} label={stats[0].label} />
            <QuoteCard
              quote={testimonials[0].quote}
              name={testimonials[0].name}
              role={testimonials[0].role}
            />
          </div>
          <div className="flex flex-col gap-4">
            <QuoteCard
              quote={testimonials[1].quote}
              name={testimonials[1].name}
              role={testimonials[1].role}
            />
            <StatCard value={stats[1].value} label={stats[1].label} />
          </div>
          <div className="md:col-span-2 lg:col-span-1">
            <ImageQuoteCard
              quote={testimonials[2].quote}
              name={testimonials[2].name}
              role={testimonials[2].role}
              image="/images/testimonial.jpg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
