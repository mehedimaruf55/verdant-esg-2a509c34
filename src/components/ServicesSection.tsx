import { motion } from "framer-motion";
import leafImg from "@/assets/leaf.png";

const redZoneTerms = [
  "Net Zero",
  "Carbon Neutral",
  "Sustainable",
  "Eco-Friendly",
  "Responsibly Sourced",
];

const requirements = [
  "Refining the scope and boundaries",
  "Transparent methodology",
  "Evidentiary support",
  "Clearly explaining limitations",
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
};

const ServicesSection = () => {
  return (
    <section id="red-zone" className="relative py-20 lg:py-36 overflow-hidden" style={{ background: "linear-gradient(135deg, #3a7a5a 0%, #499167 60%, #76f7bf 100%)" }}>
      <motion.img
        src={leafImg}
        alt=""
        className="absolute bottom-[5%] -left-[6%] w-[45vw] max-w-[600px] min-w-[200px] select-none pointer-events-none rotate-[-20deg] hidden sm:block opacity-[0.20]"
        initial={{ opacity: 0, rotate: -25 }}
        whileInView={{ opacity: 0.20, rotate: -20 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      />
      <div className="hidden lg:block absolute top-[20%] right-[10%] w-[400px] h-[400px] rounded-full bg-brand-green-light opacity-[0.06] blur-[140px] pointer-events-none" />

      <div className="mx-auto max-w-6xl px-5 lg:px-10 relative z-10">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-16 items-end mb-10 lg:mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-3 mb-4 lg:mb-6">
              <motion.span className="inline-block w-8 h-[2px] rounded-full bg-brand-green-light origin-left" initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }} />
              <span className="text-xs lg:text-sm font-semibold tracking-[0.18em] uppercase text-brand-green-light">
                The 'Red Zone' Terminology
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold leading-[1.08] tracking-[-0.02em] text-brand-white">
              Is your vocabulary creating liability?
            </h2>
          </motion.div>
          <motion.p
            className="text-sm lg:text-base text-brand-white/70 leading-[1.75] max-w-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            In the current regulatory environment, "absolute" claims must be accompanied by absolute proof. We specialise in de-risking high-stakes terminology.
          </motion.p>
        </div>

        {/* Red zone terms */}
        <motion.div
          className="flex flex-wrap gap-3 lg:gap-4 mb-10 lg:mb-14"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {redZoneTerms.map((term) => (
            <motion.span
              key={term}
              variants={fadeUp}
              className="px-5 py-3 lg:px-7 lg:py-4 glass-dark rounded-full text-sm lg:text-base font-heading font-bold text-brand-white border border-brand-white/20 hover:border-brand-white/40 transition-colors duration-300"
            >
              {term}
            </motion.span>
          ))}
        </motion.div>

        {/* Requirements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
          className="glass-dark rounded-2xl lg:rounded-3xl p-6 md:p-8 lg:p-12"
        >
          <p className="text-sm lg:text-base text-brand-white/80 leading-relaxed mb-6">
            Such terms often call for:
          </p>
          <div className="grid sm:grid-cols-2 gap-4 lg:gap-5">
            {requirements.map((req, i) => (
              <motion.div
                key={req}
                className="flex items-start gap-3"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
              >
                <span className="mt-2 w-2 h-2 rounded-full bg-brand-green-light shrink-0" />
                <span className="text-sm lg:text-base text-brand-white/90 font-medium leading-relaxed">
                  {req}
                </span>
              </motion.div>
            ))}
          </div>
          <p className="mt-6 text-sm text-brand-white/60 leading-relaxed italic">
            Without this, they may be considered misleading due to ambiguity or lack of substantiation.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
