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
      {/* Ambient mesh */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[20%] right-[10%] w-[400px] h-[400px] rounded-full bg-brand-green-light/[0.06] blur-[140px]" />
        <div className="absolute bottom-[15%] left-[5%] w-[350px] h-[350px] rounded-full bg-brand-green-dark/[0.2] blur-[100px]" />
      </div>

      <img
        src={leafImg}
        alt=""
        className="absolute top-1/2 -translate-y-1/2 -left-[12%] w-[450px] opacity-[0.06] select-none pointer-events-none"
      />

      <div className="mx-auto max-w-7xl px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-end">
          <motion.div
            initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
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

        <div className="mt-14 grid md:grid-cols-2 gap-4">
          {points.map((point, i) => (
            <motion.div
              key={i}
              className="group relative glass-dark rounded-2xl p-10 lg:p-12 hover:bg-brand-white/[0.08] transition-all duration-500 cursor-pointer hover:shadow-[0_16px_48px_rgba(0,0,0,0.2)]"
              initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
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
                <span className="shrink-0 text-xs font-mono text-brand-white/20 mt-1">
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
