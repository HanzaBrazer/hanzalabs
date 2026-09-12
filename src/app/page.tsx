import Hero from "@/components/home/Hero";
import VideoStrip from "@/components/home/VideoStrip";
import Partners from "@/components/home/Partners";
import Works from "@/components/home/Works";
import About from "@/components/home/About";
import Services from "@/components/home/Services";
import PricingSection from "@/components/home/PricingSection";
import Testimonials from "@/components/home/Testimonials";
import Faq from "@/components/home/Faq";
import Blog from "@/components/home/Blog";

export default function HomePage() {
  return (
    <>
      <Hero />
      <VideoStrip />
      <Partners />
      <Works />
      <About />
      <Services />
      <PricingSection />
      <Testimonials />
      <Faq />
      <Blog />
    </>
  );
}
