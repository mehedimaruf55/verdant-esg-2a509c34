import { motion } from "framer-motion";
import leafImg from "@/assets/leaf.png";

const points = [
  { title: "Data-Driven Approach", description: "Every recommendation grounded in rigorous analysis, real-world benchmarks, and industry-leading frameworks." },
  { title: "Industry Expertise", description: "Deep knowledge across finance, energy, real estate, and manufacturing — tailored to your sector's unique challenges." },
  { title: "Measurable Results", description: "Clear KPIs and impact metrics that demonstrate tangible progress to boards, investors, and stakeholders." },
  { title: "Long-Term Focus", description: "Strategies designed for enduring value and resilience — not just short-term compliance or box-ticking." },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const cardFade = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
};

const WhyVerdantSection = () => {
  return (
    <section id="why" className="relative py-20 lg:py-36 overflow-hidden" style={{ background: "linear-gradient(135deg, #326234 0%, #3a7a3a 60%, #6ABA45 100%)" }}>
      <img
        src={leafImg}
        alt=""
        className="absolute bottom-[5%] -left-[6%] w-[45vw] max-w-[600px] min-w-[200px] opacity-[0.15] select-none pointer-events-none rotate-[-20deg] hidden sm:block"
      />
      <div className="absolute top-[20%] right-[10%] w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] rounded-full bg-brand-green-light opacity-[0.06] blur-[140px] pointer-events-none" />

      <div className="mx-auto max-w-6xl px-5 lg:px-10 relative z-10">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-16 items-end mb-10 lg:mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-3 mb-4 lg:mb-6">
              <motion.span className="inline-block w-8 h-[2px] rounded-full bg-brand-green-light origin-left" initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }} />
              <span className="text-xs lg:text-sm font-semibold tracking-[0.18em] uppercase text-brand-green-light">Advantage</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold leading-[1.08] tracking-[-0.02em] text-brand-white">
              Why Verdant
            </h2>
          </motion.div>
          <motion.p
            className="text-sm lg:text-base text-brand-white/70 leading-[1.75] max-w-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            We deliver practical sustainability solutions grounded in expertise, precision, and a commitment to long-term impact across every engagement.
          </motion.p>
        </div>

        <motion.div
          className="grid md:grid-cols-2 gap-4 lg:gap-5"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {points.map((point, i) => (
            <motion.div
              key={i}
              className="group relative overflow-hidden glass-dark rounded-2xl lg:rounded-3xl p-6 md:p-8 lg:p-12 hover:bg-brand-white/10 transition-all duration-500 cursor-pointer"
              variants={cardFade}
              whileHover={{ y: -4, transition: { duration: 0.25 } }}
            >
              <div className="flex items-start justify-between gap-4 lg:gap-6">
                <div>
                  <h3 className="text-lg lg:text-2xl font-heading font-bold text-brand-white mb-3 lg:mb-4 group-hover:text-brand-green-light transition-colors duration-300">
                    {point.title}
                  </h3>
                  <p className="text-sm lg:text-base text-brand-white/60 leading-relaxed max-w-md">
                    {point.description}
                  </p>
                </div>
                <span className="shrink-0 text-xs lg:text-sm tracking-[0.2em] text-brand-white/30 mt-1 font-medium">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-brand-green-light group-hover:w-full transition-all duration-500 rounded-full" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyVerdantSection;
