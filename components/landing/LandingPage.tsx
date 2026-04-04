import LandingNav from "@/components/landing/landing-nav";
import HeroSection from "@/components/landing/hero-section";
import FeaturesSection from "@/components/landing/features-section";
import NichesSection from "@/components/landing/niches-section";
import PricingSection from "@/components/landing/pricing-section";
import CTASection from "@/components/landing/cta-section";
import Footer from "@/components/landing/footer";

export default function LandingPage() {
  return (
    <div className="site-bg min-h-screen">
      <LandingNav />
      <HeroSection />
      <FeaturesSection />
      <NichesSection />
      <PricingSection />
      <CTASection />
      <Footer />
    </div>
  );
}
