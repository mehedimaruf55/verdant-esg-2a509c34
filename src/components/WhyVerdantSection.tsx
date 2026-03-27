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
      <img
        src={leafImg}
        alt=""
        className="absolute top-1/2 -translate-y-1/2 -left-[12%] w-[450px] opacity-[0.08] select-none pointer-events-none"
      />

      <div className="mx-auto max-w-7xl px-6 relative z-10">
        {/* Header area */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-end">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs font-medium tracking-[0.2em] uppercase text-brand-green-light mb-4 block">
              Advantage
            </span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold leading-[1.05] tracking-[-0.02em] text-brand-white">
              Why Verdant
            </h2>
          </motion.div>
          <motion.p
            className="text-[15px] text-brand-white/60 leading-relaxed max-w-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            We deliver practical sustainability solutions grounded in expertise, precision, and a commitment to long-term impact across every engagement.
          </motion.p>
        </div>

        {/* Cards grid */}
        <div className="mt-14 grid md:grid-cols-2 gap-4">
          {points.map((point, i) => (
            <motion.div
              key={i}
              className="group relative border border-brand-white/10 rounded-sm p-10 lg:p-12 hover:border-brand-green-light/30 hover:bg-brand-white/[0.04] transition-all duration-300 cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="flex items-start justify-between gap-6">
                <div>
                  <h3 className="text-xl lg:text-2xl font-heading font-bold text-brand-white mb-4 group-hover:text-brand-green-light transition-colors">
                    {point.title}
                  </h3>
                  <p className="text-sm text-brand-white/50 leading-relaxed max-w-md">
                    {point.description}
                  </p>
                </div>
                <span className="shrink-0 text-xs font-mono text-brand-white/25 mt-1">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              {/* Bottom accent line on hover */}
              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-brand-green-light to-brand-green-dark group-hover:w-full transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyVerdantSection;
