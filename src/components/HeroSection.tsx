import { motion } from "framer-motion";
import { ArrowDownRight } from "lucide-react";
import leafImg from "@/assets/leaf.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-[100dvh] flex flex-col justify-end overflow-hidden pt-16">
      {/* Background leaf — super subtle */}
      <img
        src={leafImg}
        alt=""
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] opacity-[0.035] select-none pointer-events-none"
      />

      {/* Glow orb */}
      <div className="absolute top-[30%] right-[15%] w-[400px] h-[400px] rounded-full bg-verdant-glow/[0.06] blur-[120px] pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl w-full px-6 pb-16 lg:pb-24">
        <div className="grid lg:grid-cols-12 gap-8 items-end">
          {/* Headline */}
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex items-center gap-3 mb-8">
                <span className="inline-block w-2 h-2 rounded-full bg-secondary glow-dot" />
                <span className="text-xs font-medium tracking-[0.2em] uppercase text-muted-foreground">
                  ESG Consultancy
                </span>
              </div>

              <h1 className="text-[clamp(2.8rem,7vw,6.5rem)] font-heading font-bold leading-[0.92] tracking-[-0.03em] text-foreground">
                Sustainable
                <br />
                Strategy<span className="text-gradient">.</span>
                <br />
                <span className="text-gradient">Measurable</span>
                <br />
                Impact.
              </h1>
            </motion.div>
          </div>

          {/* Right column — subtext + CTA */}
          <motion.div
            className="lg:col-span-4 flex flex-col gap-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-[15px] leading-relaxed text-muted-foreground max-w-sm">
              We help organizations integrate ESG into their core strategy with clarity and precision — turning compliance into competitive advantage.
            </p>
            <a
              href="#contact"
              className="group inline-flex items-center gap-3 self-start"
            >
              <span className="px-6 py-3.5 text-[13px] font-semibold tracking-wide bg-foreground text-background rounded-full group-hover:bg-foreground/85 transition-colors">
                Get Started
              </span>
              <span className="w-11 h-11 rounded-full border border-foreground/20 flex items-center justify-center group-hover:border-foreground/40 transition-colors">
                <ArrowDownRight size={16} className="text-foreground" />
              </span>
            </a>
          </motion.div>
        </div>

        {/* Bottom line */}
        <motion.div
          className="mt-16 pt-6 border-t border-border flex items-center justify-between text-xs text-muted-foreground tracking-wide"
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
