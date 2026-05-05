import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/ServicesSection";
import ProcessSection from "./components/ProcessSection";
import PricingSection from "./components/PricingSection";
import SocialProofSection from "./components/SocialProofSection";
import ContactCTASection from "./components/ContactCTASection";

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--color-background)]">
      <HeroSection />
      <ServicesSection />
      <ProcessSection />
      <PricingSection />
      <SocialProofSection />
      <ContactCTASection />
    </main>
  );
}