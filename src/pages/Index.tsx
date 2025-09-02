import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { TrustBar } from "@/components/TrustBar";
import { LearningPaths } from "@/components/LearningPaths";
import { FeaturesShowcase } from "@/components/FeaturesShowcase";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <TrustBar />
        <LearningPaths />
        <FeaturesShowcase />
      </main>
      <Footer />
    </div>
  );
};

export default Index;