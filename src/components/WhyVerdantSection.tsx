import { motion } from "framer-motion";

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
    <section id="why" className="py-28 lg:py-36 bg-brand-green-dark">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-end">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold leading-[1.1] text-brand-white">
              Why Verdant
            </h2>
          </motion.div>
          <motion.p
            className="text-[16px] text-brand-white/70 leading-relaxed max-w-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            We deliver practical sustainability solutions grounded in expertise, precision, and a commitment to long-term impact across every engagement.
          </motion.p>
        </div>

        <div className="mt-14 grid md:grid-cols-2 gap-px bg-brand-white/10 rounded-lg overflow-hidden">
          {points.map((point, i) => (
            <motion.div
              key={i}
              className="group bg-brand-green-dark p-10 lg:p-12 hover:bg-brand-green-dark/80 transition-colors duration-300 cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <span className="text-xs text-brand-white/30 font-medium">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 text-xl lg:text-2xl font-heading font-bold text-brand-white group-hover:text-brand-green-light transition-colors duration-300">
                {point.title}
              </h3>
              <p className="mt-4 text-[15px] text-brand-white/50 leading-relaxed">
                {point.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyVerdantSection;
