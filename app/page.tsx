"use client";

import Header from "@/components/_common/header";
import HeroSection from "@/components/hero-section";
import ProblemSection from "@/components/problem-section";
import SolutionSection from "@/components/solution-section";
import FeaturesSection from "@/components/features-section";
import HowItWorksSection from "@/components/how-it-works-section";
import PricingSection from "@/components/pricing-section";
import FaqSection from "@/components/faq-section";
import CtaSection from "@/components/cta-section";
import FooterSection from "@/components/footer-section";

export default function Home() {
  return (
    <>
      <main className="max-w-full overflow-x-clip">
        <Header />
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <FeaturesSection />
        <HowItWorksSection />
        <PricingSection />
        <FaqSection />
        <CtaSection />
        <FooterSection />
      </main>
    </>
  );
}
