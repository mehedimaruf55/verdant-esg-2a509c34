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
        className="absolute top-1/2 -translate-y-1/2 -left-[15%] w-[350px] opacity-[0.05] select-none pointer-events-none"
      />

      <div className="mx-auto max-w-7xl px-6 lg:px-10 relative z-10">
        <motion.div
          className="bg-brand-green-dark rounded-[2rem] p-12 lg:p-20 flex flex-col items-center text-center relative overflow-hidden"
          initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          {/* Subtle glow inside */}
          <div className="absolute top-0 right-[20%] w-[300px] h-[300px] rounded-full bg-brand-green-light opacity-[0.06] blur-[100px] pointer-events-none" />

          <h2 className="text-4xl md:text-5xl lg:text-[4rem] font-heading font-bold leading-[1.05] tracking-[-0.02em] text-brand-white max-w-3xl relative z-10">
            Ready to build a sustainable future?
          </h2>
          <p className="mt-6 text-[15px] text-brand-white/70 max-w-md leading-relaxed relative z-10">
            Let's start a conversation about your ESG goals and how we can help you achieve them.
          </p>
          <a href="mailto:hello@verdantesg.com" className="mt-10 group inline-flex items-center gap-3 relative z-10">
            <span className="px-7 py-4 text-[13px] font-bold tracking-wide bg-brand-white text-brand-green-dark rounded-full group-hover:bg-brand-grey-light transition-colors">
              Contact Us
            </span>
            <span className="w-12 h-12 rounded-full glass-dark flex items-center justify-center group-hover:bg-brand-white/20 transition-all duration-300">
              <ArrowRight size={16} className="text-brand-white" />
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaSection;
