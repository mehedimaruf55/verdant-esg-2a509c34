import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import leafImg from "@/assets/leaf.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-[100dvh] flex items-center overflow-hidden bg-brand-green-dark">
      {/* Cropped leaf — 70% visible, anchored right */}
      <img
        src={leafImg}
        alt=""
        className="absolute top-1/2 -translate-y-1/2 -right-[15%] w-[650px] opacity-[0.07] select-none pointer-events-none"
      />

      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-brand-green-light" />

      <div className="relative z-10 mx-auto max-w-7xl w-full px-6 lg:px-10 py-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-8 h-px bg-brand-green-light" />
            <p className="text-brand-green-light text-[13px] font-medium tracking-[0.15em] uppercase">
              ESG Consultancy
            </p>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-[5.5rem] font-heading font-bold leading-[0.95] tracking-[-0.03em] text-brand-white">
            A New Direction<br />
            for a Balanced<br />
            <span className="text-brand-green-light">Future</span>
          </h1>
          <p className="mt-10 text-[17px] text-brand-white/60 max-w-lg leading-[1.7]">
            We help organizations integrate ESG into their core strategy with clarity and precision — turning compliance into competitive advantage.
          </p>
          <div className="mt-12 flex items-center gap-6">
            <a
              href="#services"
              className="px-8 py-3.5 bg-brand-white text-brand-green-dark text-[14px] font-bold tracking-wide rounded-sm hover:bg-brand-grey-light transition-colors duration-300"
            >
              Find Out More
            </a>
            <a
              href="#contact"
              className="px-8 py-3.5 border border-brand-white/30 text-brand-white text-[14px] font-medium rounded-sm hover:border-brand-white/60 transition-colors duration-300"
            >
              Contact Us
            </a>
          </div>
        </motion.div>

        {/* Bottom bar */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 border-t border-brand-white/10 py-6 px-6 lg:px-10 flex items-center justify-between"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <div className="flex gap-10 text-[12px] tracking-[0.15em] uppercase text-brand-white/30">
            <span>Environmental</span>
            <span>Social</span>
            <span>Governance</span>
          </div>
          <a href="#about" className="text-brand-white/30 hover:text-brand-white/60 transition-colors">
            <ArrowDown size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
