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
    <section id="why" className="relative py-28 lg:py-36 bg-brand-green-dark overflow-hidden">
      {/* Cropped leaf — 70% visible, anchored left */}
      <img
        src={leafImg}
        alt=""
        className="absolute top-1/2 -translate-y-1/2 -left-[12%] w-[450px] opacity-[0.06] select-none pointer-events-none"
      />

      <div className="mx-auto max-w-7xl px-6 lg:px-10 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-end mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-brand-green-light" />
              <span className="text-[12px] font-medium tracking-[0.15em] uppercase text-brand-green-light">Advantage</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold leading-[1.08] text-brand-white">
              Why Verdant
            </h2>
          </motion.div>
          <motion.p
            className="text-[16px] text-brand-white/60 leading-[1.7] max-w-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            We deliver practical sustainability solutions grounded in expertise, precision, and a commitment to long-term impact across every engagement.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-px bg-brand-white/10 overflow-hidden">
          {points.map((point, i) => (
            <motion.div
              key={i}
              className="group relative bg-brand-green-dark p-10 lg:p-12 cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <span className="text-[11px] tracking-[0.2em] text-brand-white/20 font-medium">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-5 text-xl lg:text-2xl font-heading font-bold text-brand-white group-hover:text-brand-green-light transition-colors duration-300">
                {point.title}
              </h3>
              <p className="mt-4 text-[15px] text-brand-white/45 leading-relaxed">
                {point.description}
              </p>
              {/* Bottom accent on hover */}
              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-brand-green-light group-hover:w-full transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyVerdantSection;
