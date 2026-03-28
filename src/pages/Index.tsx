import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import MissionVisionSection from "@/components/MissionVisionSection";
import ServicesSection from "@/components/ServicesSection";
import WhyVerdantSection from "@/components/WhyVerdantSection";
import ClientsSection from "@/components/ClientsSection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";

const blurFade = {
  hidden: { opacity: 0, filter: "blur(12px)", y: 30 },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] },
  },
};

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      {[
        HeroSection,
        AboutSection,
        MissionVisionSection,
        ServicesSection,
        WhyVerdantSection,
        ClientsSection,
        CtaSection,
        Footer,
      ].map((Section, i) => (
        <motion.div
          key={i}
          variants={blurFade}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          <Section />
        </motion.div>
      ))}
    </div>
  );
};

export default Index;
