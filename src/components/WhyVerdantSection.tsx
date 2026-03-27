import { motion } from "framer-motion";
import leafImg from "@/assets/leaf.png";

const points = [
  { title: "Data-Driven Approach", description: "Every recommendation grounded in rigorous analysis and real-world benchmarks." },
  { title: "Industry Expertise", description: "Deep knowledge across finance, energy, real estate, and manufacturing sectors." },
  { title: "Measurable Results", description: "Clear KPIs and impact metrics that demonstrate tangible progress to stakeholders." },
  { title: "Long-Term Focus", description: "Strategies designed for enduring value — not just short-term compliance." },
];

const WhyVerdantSection = () => {
  return (
    <section id="why" className="relative py-28 lg:py-36 bg-brand-green-dark overflow-hidden">
      <img
        src={leafImg}
        alt=""
        className="absolute bottom-0 right-[5%] w-[450px] opacity-[0.07] rotate-[-15deg] select-none pointer-events-none"
      />

      <div className="mx-auto max-w-7xl px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs font-medium tracking-[0.2em] uppercase text-brand-green-light mb-4 block">Advantage</span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold leading-[1.05] tracking-[-0.02em] text-brand-white">
            Why Verdant
          </h2>
        </motion.div>

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {points.map((point, i) => (
            <motion.div
              key={i}
              className="group border border-brand-white/10 rounded-sm p-8 hover:border-brand-green-light/30 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="w-8 h-8 rounded-full border border-brand-white/20 flex items-center justify-center text-xs font-mono text-brand-white/50 mb-6 group-hover:border-brand-green-light group-hover:text-brand-green-light transition-colors">
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="text-lg font-heading font-semibold text-brand-white mb-3">{point.title}</h3>
              <p className="text-sm text-brand-white/55 leading-relaxed">{point.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyVerdantSection;
