import type { Metadata } from "next";
import StudioHero from "@/components/studio/StudioHero";
import Numbers from "@/components/studio/Numbers";
import Awards from "@/components/studio/Awards";
import Values from "@/components/studio/Values";
import Team from "@/components/studio/Team";
import Faq from "@/components/home/Faq";

export const metadata: Metadata = {
  title: "Studio",
  description:
    "We create what tomorrow looks like — a studio blending strategy, craft, and motion for ambitious brands.",
};

export default function StudioPage() {
  return (
    <>
      <StudioHero />
      <Numbers />
      <Awards />
      <Values />
      <Team />
      <Faq />
    </>
  );
}
