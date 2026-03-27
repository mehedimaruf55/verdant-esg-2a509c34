import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import leafImg from "@/assets/leaf.png";

const CtaSection = () => {
  return (
    <section id="contact" className="relative py-28 lg:py-36 bg-brand-grey-light overflow-hidden">
      {/* Leaf cropped on right edge */}
      <img
        src={leafImg}
        alt=""
        className="absolute top-1/2 -translate-y-1/2 -right-[18%] w-[400px] opacity-[0.06] rotate-[-10deg] select-none pointer-events-none"
      />

      <div className="mx-auto max-w-7xl px-6 relative z-10">
        <motion.div className="flex flex-col items-center text-center" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.7 }}>
          <h2 className="text-4xl md:text-5xl lg:text-[4rem] font-heading font-bold leading-[1.05] tracking-[-0.02em] text-brand-black max-w-3xl">Ready to build a sustainable future?</h2>
          <p className="mt-6 text-[15px] text-brand-grey max-w-md leading-relaxed">Let's start a conversation about your ESG goals and how we can help you achieve them.</p>
          <a href="mailto:hello@verdantesg.com" className="mt-10 group inline-flex items-center gap-3">
            <span className="px-7 py-4 text-[13px] font-semibold tracking-wide bg-brand-green-dark text-brand-white rounded-full group-hover:bg-brand-green-light transition-colors">Contact Us</span>
            <span className="w-12 h-12 rounded-full border border-brand-green-dark/20 flex items-center justify-center group-hover:border-brand-green-dark/40 transition-colors">
              <ArrowRight size={16} className="text-brand-green-dark" />
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaSection;
