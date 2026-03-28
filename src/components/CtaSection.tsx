import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import leafImg from "@/assets/leaf.png";

const CtaSection = () => {
  return (
    <section id="contact" className="relative py-28 lg:py-36 bg-brand-white overflow-hidden mesh-light">
      {/* Cropped leaf — 70% visible, anchored left */}
      <img
        src={leafImg}
        alt=""
        className="absolute top-1/2 -translate-y-1/2 -left-[15%] w-[350px] opacity-[0.04] select-none pointer-events-none"
      />

      <div className="mx-auto max-w-7xl px-6 lg:px-10 relative z-10">
        <motion.div
          className="glass-strong rounded-[2rem] p-12 lg:p-20 flex flex-col items-center text-center"
          initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-[4rem] font-heading font-bold leading-[1.05] tracking-[-0.02em] text-brand-black max-w-3xl">
            Ready to build a sustainable future?
          </h2>
          <p className="mt-6 text-[15px] text-brand-grey max-w-md leading-relaxed">
            Let's start a conversation about your ESG goals and how we can help you achieve them.
          </p>
          <a href="mailto:hello@verdantesg.com" className="mt-10 group inline-flex items-center gap-3">
            <span className="px-7 py-4 text-[13px] font-bold tracking-wide bg-primary text-primary-foreground rounded-full group-hover:bg-secondary transition-colors shadow-[0_4px_24px_hsl(var(--primary)/0.3)]">
              Contact Us
            </span>
            <span className="w-12 h-12 rounded-full glass flex items-center justify-center group-hover:shadow-[0_4px_16px_hsl(var(--primary)/0.2)] transition-all duration-300">
              <ArrowRight size={16} className="text-brand-green-dark" />
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaSection;
