import type { Metadata } from "next";
import PricingTable from "@/components/home/PricingTable";
import Faq from "@/components/home/Faq";
import Testimonials from "@/components/home/Testimonials";
import Reveal from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Simple plans designed to scale — transparent pricing for websites, product design, and brand systems.",
};

export default function PricingPage() {
  return (
    <>
      <section className="container-site pt-[130px] lg:pt-[160px]">
        <Reveal>
          <p className="eyebrow mb-6">Pricing</p>
        </Reveal>
        <Reveal variant="mask">
          <h1 className="max-w-[640px] text-h2">
            Simple plans designed to scale
          </h1>
        </Reveal>
        <div className="mt-12 lg:mt-16">
          <PricingTable />
        </div>
      </section>
      <Faq />
      <Testimonials />
    </>
  );
}
