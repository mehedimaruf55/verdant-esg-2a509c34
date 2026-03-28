import { motion } from "framer-motion";
import aboutImage from "@/assets/about-image.jpg";
import leafImg from "@/assets/leaf.png";

const AboutSection = () => {
  return (
    <section id="about" className="relative py-28 lg:py-36 bg-brand-white overflow-hidden">
      {/* Cropped leaf — 70% visible, anchored left */}
      <img
        src={leafImg}
        alt=""
        className="absolute top-1/2 -translate-y-1/2 -left-[15%] w-[500px] opacity-[0.04] select-none pointer-events-none"
      />

      <div className="mx-auto max-w-7xl px-6 lg:px-10 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-brand-green-light" />
              <span className="text-[12px] font-medium tracking-[0.15em] uppercase text-brand-green-light">About Us</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold leading-[1.08] tracking-[-0.01em] text-brand-green-dark">
              Delivering Holistic and Credible Sustainable Solutions
            </h2>
            <div className="mt-8 space-y-5 text-[15px] leading-[1.85] text-brand-grey">
              <p>
                Verdant ESG is a professional sustainability consultancy dedicated to helping organizations navigate the complexities of Environmental, Social, and Governance standards. We combine deep industry expertise with data-driven insights to deliver strategies that drive measurable, long-term impact.
              </p>
              <p>
                Our team works alongside leadership to embed sustainability into decision-making — turning ambition into action and compliance into competitive advantage.
              </p>
            </div>
            <a
              href="#services"
              className="mt-8 inline-flex items-center gap-2 text-brand-green-dark font-semibold text-[14px] tracking-wide hover:text-brand-green-light transition-colors duration-300 group"
            >
              Learn More
              <span className="w-6 h-px bg-brand-green-dark group-hover:w-10 group-hover:bg-brand-green-light transition-all duration-300" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative">
              <div className="overflow-hidden">
                <img
                  src={aboutImage}
                  alt="Verdant ESG team"
                  loading="lazy"
                  width={1024}
                  height={768}
                  className="w-full object-cover aspect-[4/5] lg:aspect-[3/4]"
                />
              </div>
              {/* Accent corner */}
              <div className="absolute -bottom-3 -left-3 w-16 h-16 border-l-[3px] border-b-[3px] border-brand-green-light" />
            </div>
            <div className="mt-10 grid grid-cols-3 gap-0 border-t border-border">
              {[
                { num: "50+", label: "Clients served" },
                { num: "12", label: "Industries" },
                { num: "98%", label: "Retention rate" },
              ].map((s, i) => (
                <div key={s.label} className={`py-6 text-center ${i > 0 ? "border-l border-border" : ""}`}>
                  <div className="text-3xl font-heading font-bold text-brand-green-dark">{s.num}</div>
                  <div className="text-[12px] text-brand-grey mt-1 tracking-wide uppercase">{s.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
