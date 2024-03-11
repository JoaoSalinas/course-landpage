import AboutSection from "./_components/about-section";
import FeatureSection from "./_components/feature-section";
import IntroSection from "./_components/intro-section";
import FaqSection from "./_components/faq-section";
import InvestmentSection from "./_components/investment-section";

export default function Home() {
  return (
    <main className="container">
      <IntroSection />
      <AboutSection />
      <FeatureSection />
      <InvestmentSection />
      <FaqSection />
    </main>
  );
}
