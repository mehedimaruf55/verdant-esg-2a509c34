import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const CtaSection = () => {
  return (
    <section id="contact" className="py-28 lg:py-36 bg-brand-grey-light">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <motion.div
          className="bg-brand-green-dark rounded-lg p-12 lg:p-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-[1.1] text-brand-white max-w-3xl mx-auto">
            Ready to build a sustainable future?
          </h2>
          <p className="mt-6 text-[16px] text-brand-white/70 max-w-md mx-auto leading-relaxed">
            Let's start a conversation about your ESG goals and how we can help you achieve them.
          </p>
          <a
            href="mailto:hello@verdantesg.com"
            className="mt-10 inline-flex items-center gap-2 px-8 py-3.5 border-2 border-brand-white text-brand-white text-[14px] font-semibold rounded-full hover:bg-brand-white hover:text-brand-green-dark transition-all duration-300"
          >
            Contact Us
            <ArrowRight size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaSection;
