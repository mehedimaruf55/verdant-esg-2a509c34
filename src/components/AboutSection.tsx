import { motion } from "framer-motion";
import { AlertTriangle, FileWarning, Clock } from "lucide-react";
import leafImg from "@/assets/leaf.png";
import { useRef } from "react";
import { useInView } from "framer-motion";

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
  visible: { transition: { staggerChildren: 0.1 } },
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

const AboutSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={sectionRef} className="relative py-20 lg:py-36 bg-brand-white overflow-hidden">
      {/* Background leaf */}
      <img
        src={leafImg}
        alt=""
        className="absolute top-[6%] -left-[5%] w-[38vw] max-w-[500px] min-w-[260px] opacity-[0.18] select-none pointer-events-none rotate-[-18deg] hidden sm:block"
      />

      <div className="mx-auto max-w-6xl px-5 lg:px-10 relative z-10">
        {/* Header */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="max-w-3xl mb-10 lg:mb-16"
        >
          <motion.div variants={fadeUp} className="flex items-center gap-3 mb-4 lg:mb-6">
            <motion.span className="inline-block w-8 h-[2px] rounded-full bg-brand-green-light origin-left" initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }} />
            <span className="text-xs lg:text-sm font-semibold tracking-[0.18em] uppercase text-brand-green-dark">
              The Problem
            </span>
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="text-2xl md:text-3xl lg:text-5xl font-heading font-bold leading-[1.08] tracking-[-0.02em] text-brand-black"
          >
            A Gap in Scrutiny
          </motion.h2>
          <motion.h3
            variants={fadeUp}
            className="mt-3 lg:mt-4 text-lg lg:text-2xl font-heading font-bold text-brand-green-dark"
          >
            Why Greenwashing is Now a Boardroom Risk.
          </motion.h3>
        </motion.div>

        {/* Two-column explanation */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid md:grid-cols-2 gap-6 lg:gap-16 mb-12 lg:mb-20"
        >
          <motion.div variants={fadeUp} className="text-sm lg:text-base leading-[1.85] text-brand-grey">
            <p>
              Environmental claims were, for years, seen through the lens of reputation and brand sentiment. This has now shifted to a framework where regulators categorise <span className="font-semibold text-brand-black">vague</span>, <span className="font-semibold text-brand-black">exaggerated</span>, or <span className="font-semibold text-brand-black">unsubstantiated claims</span> as <span className="font-semibold text-brand-black">misleading acts and omissions</span> under consumer protection law.
            </p>
            <p className="mt-4">
              Regulators such as the CMA (Competition and Markets Authority) and the ASA (Advertising Standards Authority), applying the CAP Code, now scrutinise:
            </p>
            <ul className="mt-3 space-y-2">
              {["The clarity of claims", "The context in which they are presented", "How they are understood by consumers", "The evidence supporting them"].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-green-dark shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={fadeUp} className="text-sm lg:text-base leading-[1.85] text-brand-grey">
            <p>
              It is no longer enough for a claim to be technically true in a narrow sense; it must also:
            </p>
            <ul className="mt-3 space-y-2">
              {[
                "Be clear and unambiguous",
                "Avoid misleading by omission",
                "Reflect the appropriate scope of the product or service",
                "Be based on verifiable, contemporaneous evidence",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-green-dark shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* Exposure risks */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="mb-6 lg:mb-8"
        >
          <h3 className="text-lg lg:text-xl font-heading font-bold text-brand-black">
            So, what's your exposure in this?
          </h3>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid md:grid-cols-3 gap-4 lg:gap-5"
        >
          {exposureRisks.map((risk, i) => {
            const Icon = risk.icon;
            return (
              <motion.div
                key={risk.title}
                variants={fadeUp}
                className="group bg-brand-grey-light rounded-2xl lg:rounded-3xl p-6 lg:p-8 border border-transparent hover:border-border hover:shadow-lg transition-all duration-500"
                whileHover={{ y: -4, transition: { duration: 0.25 } }}
              >
                <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-xl bg-brand-green-dark/10 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-brand-green-dark" />
                </div>
                <h4 className="text-base lg:text-lg font-heading font-bold text-brand-black mb-2 group-hover:text-brand-green-dark transition-colors">
                  {risk.title}
                </h4>
                <p className="text-sm text-brand-grey leading-relaxed">
                  {risk.desc}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-10 lg:mt-14 text-center"
        >
          <p className="text-lg lg:text-2xl font-heading font-bold italic text-brand-green-dark">
            Greenwashing is a Governance Failure, Not a Marketing Choice.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
