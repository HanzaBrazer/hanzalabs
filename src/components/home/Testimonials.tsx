import Media from "@/components/ui/Media";
import Reveal from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";
import { testimonials, stats } from "@/lib/content";

function StatCard({
  value,
  label,
  tone,
}: {
  value: string;
  label: string;
  tone: "lime" | "white";
}) {
  return (
    <div
      className={cn(
        "flex flex-col justify-center rounded-card p-7",
        tone === "lime" ? "bg-primary text-ink" : "border border-ink/10 bg-white text-ink"
      )}
    >
      <span className="text-[64px] font-medium leading-none tracking-tightest lg:text-[76px]">
        {value}
      </span>
      <span className="mt-4 text-[15px] text-ink/70">{label}</span>
    </div>
  );
}

function Avatar() {
  return (
    <span className="h-[46px] w-[46px] shrink-0 overflow-hidden rounded-full">
      <Media src="/images/user.webp" alt="" className="h-full w-full rounded-full" />
    </span>
  );
}

function QuoteCard({
  quote,
  name,
  role,
  tone,
}: {
  quote: string;
  name: string;
  role: string;
  tone: "white" | "dark";
}) {
  const dark = tone === "dark";
  return (
    <div
      className={cn(
        "flex flex-col justify-between rounded-card p-7",
        dark ? "bg-fill-dark text-white" : "border border-ink/10 bg-white text-ink"
      )}
    >
      <p className={cn("text-[18px] leading-snug", dark ? "text-white/90" : "text-ink/90")}>
        &ldquo;{quote}&rdquo;
      </p>
      <div className="mt-8 flex items-center gap-3">
        <Avatar />
        <div>
          <p className="text-[15px] font-medium">{name}</p>
          <p className={cn("text-[13px]", dark ? "text-white/55" : "text-ink/50")}>
            {role}
          </p>
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
            <h2 className="max-w-[1180px] text-h3 lg:text-h2">
              Discover how brands grew faster by trusting our design.
            </h2>
          </Reveal>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col gap-4">
            <StatCard value={stats[0].value} label={stats[0].label} tone="lime" />
            <QuoteCard
              quote={testimonials[0].quote}
              name={testimonials[0].name}
              role={testimonials[0].role}
              tone="white"
            />
          </div>
          <div className="flex flex-col gap-4">
            <QuoteCard
              quote={testimonials[1].quote}
              name={testimonials[1].name}
              role={testimonials[1].role}
              tone="dark"
            />
            <StatCard value={stats[1].value} label={stats[1].label} tone="white" />
          </div>
          <div className="md:col-span-2 lg:col-span-1">
            <div className="relative flex min-h-[420px] flex-col justify-end overflow-hidden rounded-card p-7 text-white lg:h-full">
              <Media
                src="/images/testimonial.jpg"
                alt={testimonials[2].name}
                className="absolute inset-0 h-full w-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
              <div className="relative">
                <p className="text-[18px] leading-snug">
                  &ldquo;{testimonials[2].quote}&rdquo;
                </p>
                <div className="mt-5">
                  <p className="text-[15px] font-medium">{testimonials[2].name}</p>
                  <p className="text-[13px] text-white/70">{testimonials[2].role}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
