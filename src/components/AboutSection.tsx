import { motion } from "framer-motion";
import aboutImage from "@/assets/about-image.jpg";
import leafImg from "@/assets/leaf.png";

const AboutSection = () => {
  return (
    <section id="about" className="relative py-28 lg:py-36 bg-brand-white overflow-hidden mesh-gradient">
      <img
        src={leafImg}
        alt=""
        className="absolute top-1/2 -translate-y-1/2 -left-[15%] w-[500px] opacity-[0.05] select-none pointer-events-none"
      />

      <div className="mx-auto max-w-7xl px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-xs font-medium tracking-[0.2em] uppercase text-brand-green-light mb-4 block">About</span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold leading-[1.05] tracking-[-0.02em] text-brand-black">Who We Are</h2>
            <div className="mt-8 space-y-5 text-[15px] leading-[1.8] text-brand-grey">
              <p>Verdant ESG is a professional sustainability consultancy dedicated to helping organizations navigate the complexities of Environmental, Social, and Governance standards. We combine deep industry expertise with data-driven insights to deliver strategies that drive measurable, long-term impact.</p>
              <p>Our team works alongside leadership to embed sustainability into decision-making — turning ambition into action and compliance into competitive advantage.</p>
            </div>
            <div className="mt-10 flex gap-8">
              {[{ num: "50+", label: "Clients served" }, { num: "12", label: "Industries" }, { num: "98%", label: "Retention rate" }].map((s) => (
                <div key={s.label} className="glass rounded-xl px-5 py-4 text-center">
                  <div className="text-2xl font-heading font-bold text-gradient">{s.num}</div>
                  <div className="text-[11px] text-brand-grey mt-1 tracking-wide">{s.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 30, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="overflow-hidden rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.1)]">
              <img src={aboutImage} alt="Verdant ESG team" loading="lazy" width={1024} height={768} className="w-full object-cover aspect-[4/5] lg:aspect-[3/4]" />
            </div>
            <div className="absolute -bottom-4 -left-4 glass rounded-xl px-4 py-3 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-brand-green-light glow-dot" />
              <span className="text-xs font-medium text-brand-green-dark">Active since 2019</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
