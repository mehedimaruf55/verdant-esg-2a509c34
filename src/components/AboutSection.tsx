import { motion } from "framer-motion";
import aboutImage from "@/assets/about-image.jpg";
import leafImg from "@/assets/leaf.png";

const AboutSection = () => {
  return (
    <section id="about" className="relative py-28 lg:py-36 bg-brand-white overflow-hidden">
      {/* Leaf cropped on left edge */}
      <img
        src={leafImg}
        alt=""
        className="absolute top-1/2 -translate-y-1/2 -left-[15%] w-[500px] opacity-[0.06] select-none pointer-events-none"
      />

      <div className="mx-auto max-w-7xl px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-xs font-medium tracking-[0.2em] uppercase text-brand-green-light mb-4 block">About</span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold leading-[1.05] tracking-[-0.02em] text-brand-black">Who We Are</h2>
            <div className="mt-8 space-y-5 text-[15px] leading-[1.8] text-brand-grey">
              <p>Verdant ESG is a professional sustainability consultancy dedicated to helping organizations navigate the complexities of Environmental, Social, and Governance standards. We combine deep industry expertise with data-driven insights to deliver strategies that drive measurable, long-term impact.</p>
              <p>Our team works alongside leadership to embed sustainability into decision-making — turning ambition into action and compliance into competitive advantage.</p>
            </div>
            <div className="mt-10 flex gap-12">
              {[{ num: "50+", label: "Clients served" }, { num: "12", label: "Industries" }, { num: "98%", label: "Retention rate" }].map((s) => (
                <div key={s.label}>
                  <div className="text-3xl font-heading font-bold text-brand-green-dark">{s.num}</div>
                  <div className="text-xs text-brand-grey mt-1 tracking-wide">{s.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div className="relative" initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}>
            <div className="overflow-hidden rounded-sm">
              <img src={aboutImage} alt="Verdant ESG team" loading="lazy" width={1024} height={768} className="w-full object-cover aspect-[4/5] lg:aspect-[3/4]" />
            </div>
            <div className="absolute -bottom-3 -left-3 w-1 h-24 bg-gradient-to-b from-brand-green-dark to-brand-green-light rounded-full" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
