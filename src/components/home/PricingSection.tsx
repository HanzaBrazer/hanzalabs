import Reveal from "@/components/ui/Reveal";
import PricingPlans from "@/components/pricing/PricingPlans";

export default function PricingSection() {
  return (
    <section className="section-pad">
      <div className="container-site">
        <div className="mb-10 lg:mb-14">
          <Reveal>
            <p className="eyebrow mb-6">Pricing</p>
          </Reveal>
          <Reveal variant="mask">
            <h2 className="max-w-[620px] text-h3 lg:text-h2">
              Simple plans designed to scale
            </h2>
          </Reveal>
        </div>
        <Reveal delay={0.05}>
          <PricingPlans ctaHref="/pricing-single" />
        </Reveal>
      </div>
    </section>
  );
}
