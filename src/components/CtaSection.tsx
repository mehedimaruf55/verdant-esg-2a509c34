import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import leafImg from "@/assets/leaf.png";

const CtaSection = () => {
  return (
    <section id="contact" className="relative py-28 lg:py-36 bg-brand-white overflow-hidden">
      {/* Cropped leaf — 70% visible, anchored left */}
      <img
        src={leafImg}
        alt=""
        className="absolute top-1/2 -translate-y-1/2 -left-[15%] w-[350px] opacity-[0.04] select-none pointer-events-none"
      />

      <div className="mx-auto max-w-7xl px-6 lg:px-10 relative z-10">
        <motion.div
          className="relative bg-brand-green-dark p-14 lg:p-24 text-center overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          {/* Top accent */}
          <div className="absolute top-0 left-0 right-0 h-[3px] bg-brand-green-light" />

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-[1.08] text-brand-white max-w-3xl mx-auto">
            Ready to build a sustainable future?
          </h2>
          <p className="mt-6 text-[16px] text-brand-white/60 max-w-md mx-auto leading-[1.7]">
            Let's start a conversation about your ESG goals and how we can help you achieve them.
          </p>
          <div className="mt-10 flex items-center justify-center gap-4">
            <a
              href="mailto:hello@verdantesg.com"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-brand-white text-brand-green-dark text-[14px] font-bold tracking-wide rounded-sm hover:bg-brand-grey-light transition-colors duration-300"
            >
              Contact Us
              <ArrowRight size={16} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaSection;
