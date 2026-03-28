import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import leafImg from "@/assets/leaf.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-[100dvh] flex items-center overflow-hidden bg-brand-green-dark">
      {/* Background image */}
      <img
        src={leafImg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-[0.08] select-none pointer-events-none"
      />

      <div className="relative z-10 mx-auto max-w-7xl w-full px-6 lg:px-10 py-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl"
        >
          <p className="text-brand-green-light text-sm font-medium tracking-wide mb-6">
            A New Direction for a Balanced Future
          </p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold leading-[1.05] tracking-[-0.02em] text-brand-white">
            Sustainable Strategy,{" "}
            <span className="text-brand-green-light">Measurable</span> Impact
          </h1>
          <p className="mt-8 text-lg text-brand-white/70 max-w-xl leading-relaxed">
            We help organizations integrate ESG into their core strategy with clarity and precision — turning compliance into competitive advantage.
          </p>
          <a
            href="#services"
            className="mt-10 inline-flex items-center gap-2 px-8 py-3.5 border-2 border-brand-white text-brand-white text-[14px] font-semibold rounded-full hover:bg-brand-white hover:text-brand-green-dark transition-all duration-300"
          >
            Find Out More
          </a>
        </motion.div>

        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <a href="#about" className="text-brand-white/40 hover:text-brand-white/70 transition-colors">
            <ArrowDown size={20} className="animate-bounce" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
