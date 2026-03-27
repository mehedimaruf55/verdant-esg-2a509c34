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
    <section id="why" className="relative py-32 lg:py-40 overflow-hidden">
      <img
        src={leafImg}
        alt=""
        className="absolute bottom-0 left-[10%] w-[400px] opacity-[0.03] rotate-[-15deg] select-none pointer-events-none"
      />

      <div className="mx-auto max-w-7xl px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs font-medium tracking-[0.2em] uppercase text-secondary mb-4 block">
            Advantage
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-heading font-bold leading-[1.05] tracking-[-0.02em] text-foreground max-w-2xl">
            Why Verdant
          </h2>
        </motion.div>

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
          {points.map((point, i) => (
            <motion.div
              key={i}
              className="bg-background p-8 lg:p-10 group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="w-8 h-8 rounded-full border border-border flex items-center justify-center text-xs font-mono text-muted-foreground mb-6 group-hover:border-primary group-hover:text-primary transition-colors">
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="text-lg font-heading font-semibold text-foreground mb-3">
                {point.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
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
