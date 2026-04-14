import { motion } from "framer-motion";
import { AlertTriangle, FileWarning, Clock } from "lucide-react";
import leafImg from "@/assets/leaf.png";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const exposureRisks = [
  {
    icon: AlertTriangle,
    title: "The Substantiation Trap",
    desc: "Making broad claims such as \"Net Zero\" or \"Sustainable\" without an internal evidence repository that survives an audit.",
  },
  {
    icon: FileWarning,
    title: "Misleading by Omission",
    desc: "Highlighting a single 'green' feature while ignoring significant environmental impacts elsewhere in the supply chain.",
  },
  {
    icon: Clock,
    title: "The Compliance Lag",
    desc: "Marketing cycles move quicker than legal and ESG teams can verify data, leading to unqualified claims that can attract ASA/CAP sanctions.",
  },
];

const scrutinyPoints = [
  "The clarity of claims",
  "The context in which they are presented",
  "How they are understood by consumers",
  "The evidence supporting them",
];

const mustAlsoPoints = [
  "Be clear and unambiguous",
  "Avoid misleading by omission",
  "Reflect the appropriate scope of the product or service",
  "Be based on verifiable, contemporaneous evidence",
];

const AboutSection = () => {
  return (
    <section id="about" className="relative py-20 lg:py-36 bg-brand-white overflow-hidden">
      {/* Subtle leaf watermark */}
      <img
        src={leafImg}
        alt=""
        className="absolute top-[10%] -right-[5%] w-[35vw] max-w-[450px] min-w-[200px] opacity-[0.06] select-none pointer-events-none rotate-[15deg] hidden sm:block"
      />

      <div className="mx-auto max-w-6xl px-5 lg:px-10 relative z-10">
        {/* Header — asymmetric editorial layout */}
        <div className="grid lg:grid-cols-12 gap-6 lg:gap-10 mb-14 lg:mb-20">
          {/* Left: Title block with vertical accent */}
          <motion.div
            className="lg:col-span-5"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <motion.div variants={fadeUp} className="flex items-center gap-3 mb-4 lg:mb-6">
              <motion.span
                className="inline-block w-8 h-[2px] rounded-full bg-brand-green-dark origin-left"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              />
              <span className="text-xs lg:text-sm font-semibold tracking-[0.18em] uppercase text-brand-green-dark">
                The Problem
              </span>
            </motion.div>
            <motion.h2
              variants={fadeUp}
              className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold leading-[1.08] tracking-[-0.02em] text-brand-black"
            >
              A Gap in Scrutiny
            </motion.h2>
            <motion.div
              variants={fadeUp}
              className="mt-4 lg:mt-6 h-1 w-16 rounded-full"
              style={{ background: "linear-gradient(90deg, hsl(var(--brand-green-dark)), hsl(var(--brand-green-light)))" }}
            />
          </motion.div>

          {/* Right: Subheading + intro text */}
          <motion.div
            className="lg:col-span-7 flex flex-col justify-end"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <motion.h3
              variants={fadeUp}
              className="text-lg lg:text-2xl font-heading font-bold text-brand-green-dark mb-4"
            >
              Why Greenwashing is Now a Boardroom Risk.
            </motion.h3>
            <motion.p variants={fadeUp} className="text-sm lg:text-base leading-[1.85] text-brand-grey max-w-xl">
              Environmental claims were, for years, seen through the lens of reputation and brand sentiment. This has now shifted to a framework where regulators categorise <span className="font-semibold text-brand-black">vague</span>, <span className="font-semibold text-brand-black">exaggerated</span>, or <span className="font-semibold text-brand-black">unsubstantiated claims</span> as <span className="font-semibold text-brand-black">misleading acts and omissions</span> under consumer protection law.
            </motion.p>
          </motion.div>
        </div>

        {/* Two-column detail — editorial split */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid lg:grid-cols-2 gap-6 lg:gap-8 mb-14 lg:mb-20"
        >
          {/* Left: What regulators scrutinise */}
          <motion.div
            variants={fadeUp}
            className="rounded-2xl lg:rounded-3xl border border-border p-6 lg:p-10 bg-brand-grey-light"
          >
            <p className="text-xs font-semibold tracking-[0.18em] uppercase text-brand-green-dark mb-4">
              Regulatory Focus
            </p>
            <p className="text-sm lg:text-base leading-[1.75] text-brand-grey mb-5">
              Regulators such as the CMA and ASA, applying the CAP Code, now scrutinise:
            </p>
            <ul className="space-y-3">
              {scrutinyPoints.map((item, i) => (
                <motion.li
                  key={item}
                  className="flex items-start gap-3 text-sm lg:text-base text-brand-black leading-relaxed"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 + i * 0.06 }}
                >
                  <span className="mt-1.5 w-2 h-2 rounded-full bg-brand-green-dark shrink-0" />
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Right: What claims must be */}
          <motion.div
            variants={fadeUp}
            className="rounded-2xl lg:rounded-3xl p-6 lg:p-10 text-brand-white relative overflow-hidden"
            style={{ background: "linear-gradient(135deg, #3a7a5a 0%, #499167 100%)" }}
          >
            {/* Subtle leaf inside card */}
            <img
              src={leafImg}
              alt=""
              className="absolute -bottom-[15%] -right-[10%] w-[200px] opacity-[0.12] select-none pointer-events-none rotate-[30deg]"
            />
            <p className="text-xs font-semibold tracking-[0.18em] uppercase text-brand-green-light mb-4 relative z-10">
              The New Standard
            </p>
            <p className="text-sm lg:text-base leading-[1.75] text-brand-white/80 mb-5 relative z-10">
              It is no longer enough for a claim to be technically true in a narrow sense; it must also:
            </p>
            <ul className="space-y-3 relative z-10">
              {mustAlsoPoints.map((item, i) => (
                <motion.li
                  key={item}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 + i * 0.06 }}
                >
                  <span className="mt-0.5 w-6 h-6 rounded-lg bg-brand-white/15 flex items-center justify-center shrink-0 text-xs font-bold text-brand-white">
                    {i + 1}
                  </span>
                  <span className="text-sm lg:text-base text-brand-white/90 leading-relaxed font-medium">
                    {item}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* Exposure question + risk cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="mb-8 lg:mb-10"
        >
          <h3 className="text-xl lg:text-3xl font-heading font-bold text-brand-black">
            So, what's your exposure in this?
          </h3>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid md:grid-cols-3 gap-4 lg:gap-5 mb-12 lg:mb-16"
        >
          {exposureRisks.map((risk) => {
            const Icon = risk.icon;
            return (
              <motion.div
                key={risk.title}
                variants={fadeUp}
                className="group relative overflow-hidden rounded-2xl lg:rounded-3xl border border-border bg-brand-white hover:shadow-xl transition-all duration-500"
                whileHover={{ y: -4, transition: { duration: 0.25 } }}
              >
                <div className="h-1 w-full bg-gradient-to-r from-brand-green-dark to-brand-green-light" />
                <div className="p-6 lg:p-8">
                  <div
                    className="w-12 h-12 lg:w-14 lg:h-14 rounded-2xl flex items-center justify-center mb-5"
                    style={{ background: "linear-gradient(135deg, rgba(73,145,103,0.1), rgba(118,247,191,0.1))" }}
                  >
                    <Icon className="w-5 h-5 lg:w-6 lg:h-6 text-brand-green-dark" />
                  </div>
                  <h4 className="text-base lg:text-lg font-heading font-bold text-brand-black mb-3 group-hover:text-brand-green-dark transition-colors duration-300">
                    {risk.title}
                  </h4>
                  <p className="text-sm text-brand-grey leading-[1.75]">
                    {risk.desc}
                  </p>
                </div>
                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-brand-green-light group-hover:w-full transition-all duration-500 rounded-full" />
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom governance callout — premium editorial card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-brand-grey-light via-brand-white to-brand-grey-light p-8 lg:p-12"
        >
          {/* Decorative corner accent */}
          <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-brand-green-dark/10 to-transparent rounded-br-full" />
          <div className="absolute bottom-0 right-0 w-40 h-40 bg-gradient-to-tl from-brand-green-light/10 to-transparent rounded-tl-full" />
          
          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-10">
            {/* Quote mark decoration */}
            <div className="shrink-0">
              <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-2xl bg-gradient-to-br from-brand-green-dark to-brand-green-light flex items-center justify-center">
                <span className="text-3xl lg:text-4xl font-heading font-bold text-brand-white leading-none">"</span>
              </div>
            </div>
            
            {/* Quote content */}
            <div className="flex-1">
              <p className="text-2xl lg:text-3xl xl:text-4xl font-heading font-bold leading-[1.2] tracking-[-0.01em] text-brand-black mb-3">
                Greenwashing is a Governance Failure,{" "}
                <span className="text-brand-green-dark">Not a Marketing Choice.</span>
              </p>
              <div className="h-1 w-24 rounded-full bg-gradient-to-r from-brand-green-dark to-brand-green-light" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
