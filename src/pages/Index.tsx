import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import MissionVisionSection from "@/components/MissionVisionSection";
import ServicesSection from "@/components/ServicesSection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <MissionVisionSection />
      <ServicesSection />
      <CtaSection />
      <Footer />
    </div>
  );
};

export default Index;
