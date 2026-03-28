import { motion } from "framer-motion";
import leafImg from "@/assets/leaf.png";

const points = [
  {
    title: "Data-Driven Approach",
    description: "Every recommendation grounded in rigorous analysis, real-world benchmarks, and industry-leading frameworks.",
  },
  {
    title: "Industry Expertise",
    description: "Deep knowledge across finance, energy, real estate, and manufacturing — tailored to your sector's unique challenges.",
  },
  {
    title: "Measurable Results",
    description: "Clear KPIs and impact metrics that demonstrate tangible progress to boards, investors, and stakeholders.",
  },
  {
    title: "Long-Term Focus",
    description: "Strategies designed for enduring value and resilience — not just short-term compliance or box-ticking.",
  },
];

const WhyVerdantSection = () => {
  return (
    <section id="why" className="relative py-28 lg:py-36 bg-brand-green-dark overflow-hidden mesh-dark">
      {/* Cropped leaf — 70% visible, anchored left */}
      <img
        src={leafImg}
        alt=""
        className="absolute top-1/2 -translate-y-1/2 -left-[12%] w-[450px] opacity-[0.06] select-none pointer-events-none"
      />

      <div className="mx-auto max-w-7xl px-6 lg:px-10 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-end mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-brand-green-light glow-dot" />
              <span className="text-[12px] font-medium tracking-[0.15em] uppercase text-brand-green-light">Advantage</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold leading-[1.08] tracking-[-0.02em] text-brand-white">
              Why Verdant
            </h2>
          </motion.div>
          <motion.p
            className="text-[15px] text-brand-white/55 leading-[1.75] max-w-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            We deliver practical sustainability solutions grounded in expertise, precision, and a commitment to long-term impact across every engagement.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {points.map((point, i) => (
            <motion.div
              key={i}
              className="group relative overflow-hidden glass-dark rounded-3xl p-10 lg:p-12 hover:bg-brand-white/[0.06] transition-all duration-500 cursor-pointer hover:shadow-[0_16px_48px_hsla(0,0%,0%,0.2)]"
              initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="flex items-start justify-between gap-6">
                <div>
                  <h3 className="text-xl lg:text-2xl font-heading font-bold text-brand-white mb-4 group-hover:text-brand-green-light transition-colors duration-300">
                    {point.title}
                  </h3>
                  <p className="text-[14px] text-brand-white/45 leading-relaxed max-w-md">
                    {point.description}
                  </p>
                </div>
                <span className="shrink-0 text-[11px] tracking-[0.2em] text-brand-white/15 mt-1 font-medium">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-brand-green-light to-transparent group-hover:w-full transition-all duration-500 rounded-full" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyVerdantSection;
