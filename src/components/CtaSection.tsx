import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import leafImg from "@/assets/leaf.png";

const CtaSection = () => {
  return (
    <section id="contact" className="relative py-28 lg:py-36 bg-brand-white overflow-hidden">
      <img
        src={leafImg}
        alt=""
        className="absolute -bottom-[8%] -left-[6%] w-[40vw] max-w-[520px] min-w-[280px] opacity-[0.10] select-none pointer-events-none rotate-[160deg]"
      />

      <div className="mx-auto max-w-7xl px-6 lg:px-10 relative z-10">
        <motion.div
          className="bg-brand-green-dark rounded-[2rem] p-12 lg:p-20 flex flex-col items-center text-center relative overflow-hidden"
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="absolute top-0 right-[20%] w-[300px] h-[300px] rounded-full bg-brand-green-light opacity-[0.06] blur-[100px] pointer-events-none" />

          <motion.h2
            className="text-4xl md:text-5xl lg:text-[4rem] font-heading font-bold leading-[1.05] tracking-[-0.02em] text-brand-white max-w-3xl relative z-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Ready to build a sustainable future?
          </motion.h2>
          <motion.p
            className="mt-6 text-[15px] text-brand-white/70 max-w-md leading-relaxed relative z-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            Let's start a conversation about your ESG goals and how we can help you achieve them.
          </motion.p>
          <motion.a
            href="mailto:hello@verdantesg.com"
            className="mt-10 group inline-flex items-center gap-3 relative z-10"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.65, duration: 0.5 }}
            whileHover={{ x: 4, transition: { duration: 0.2 } }}
          >
            <span className="px-7 py-4 text-[13px] font-bold tracking-wide bg-brand-white text-brand-green-dark rounded-full group-hover:bg-brand-grey-light transition-colors">
              Contact Us
            </span>
            <span className="w-12 h-12 rounded-full glass-dark flex items-center justify-center group-hover:bg-brand-white/20 transition-all duration-300">
              <ArrowRight size={16} className="text-brand-white" />
            </span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaSection;
