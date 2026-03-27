import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const CtaSection = () => {
  return (
    <section id="contact" className="py-32 lg:py-40 bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          className="flex flex-col items-center text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-[4rem] font-heading font-bold leading-[1.05] tracking-[-0.02em] max-w-3xl">
            Ready to build a sustainable future?
          </h2>
          <p className="mt-6 text-[15px] text-background/60 max-w-md leading-relaxed">
            Let's start a conversation about your ESG goals and how we can help you achieve them.
          </p>
          <a
            href="mailto:hello@verdantesg.com"
            className="mt-10 group inline-flex items-center gap-3"
          >
            <span className="px-7 py-4 text-[13px] font-semibold tracking-wide bg-background text-foreground rounded-full group-hover:bg-background/90 transition-colors">
              Contact Us
            </span>
            <span className="w-12 h-12 rounded-full border border-background/20 flex items-center justify-center group-hover:border-background/40 transition-colors">
              <ArrowRight size={16} className="text-background" />
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaSection;
