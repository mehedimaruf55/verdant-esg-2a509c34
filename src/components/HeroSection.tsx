import { motion } from "framer-motion";
import { ArrowDownRight } from "lucide-react";
import leafImg from "@/assets/leaf.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-[100dvh] flex flex-col justify-end overflow-hidden pt-16 bg-brand-green-dark">
      {/* Background leaf */}
      <img
        src={leafImg}
        alt=""
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] opacity-[0.07] select-none pointer-events-none"
      />
      <div className="absolute top-[25%] right-[10%] w-[500px] h-[500px] rounded-full bg-brand-green-light/[0.07] blur-[140px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl w-full px-6 pb-16 lg:pb-24">
        <div className="grid lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex items-center gap-3 mb-8">
                <span className="inline-block w-2 h-2 rounded-full bg-brand-green-light glow-dot" />
                <span className="text-xs font-medium tracking-[0.2em] uppercase text-brand-white/50">
                  ESG Consultancy
                </span>
              </div>
              <h1 className="text-[clamp(2.8rem,7vw,6.5rem)] font-heading font-bold leading-[0.92] tracking-[-0.03em] text-brand-white">
                Sustainable
                <br />
                Strategy<span className="text-brand-green-light">.</span>
                <br />
                <span className="text-brand-green-light">Measurable</span>
                <br />
                Impact.
              </h1>
            </motion.div>
          </div>

          <motion.div
            className="lg:col-span-4 flex flex-col gap-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-[15px] leading-relaxed text-brand-white/60 max-w-sm">
              We help organizations integrate ESG into their core strategy with clarity and precision — turning compliance into competitive advantage.
            </p>
            <a href="#contact" className="group inline-flex items-center gap-3 self-start">
              <span className="px-6 py-3.5 text-[13px] font-semibold tracking-wide bg-brand-white text-brand-green-dark rounded-full group-hover:bg-brand-grey-light transition-colors">
                Get Started
              </span>
              <span className="w-11 h-11 rounded-full border border-brand-white/20 flex items-center justify-center group-hover:border-brand-white/40 transition-colors">
                <ArrowDownRight size={16} className="text-brand-white" />
              </span>
            </a>
          </motion.div>
        </div>

        <motion.div
          className="mt-16 pt-6 border-t border-brand-white/10 flex items-center justify-between text-xs text-brand-white/40 tracking-wide"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <span>Scroll to explore</span>
          <div className="flex gap-8">
            <span>Environmental</span>
            <span>Social</span>
            <span>Governance</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
