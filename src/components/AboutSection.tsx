import { motion } from "framer-motion";
import { AlertTriangle, FileWarning, Clock, ShieldAlert } from "lucide-react";
import leafImg from "@/assets/leaf.png";
import aboutImage from "@/assets/about-image-new.png";
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
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={sectionRef} className="relative bg-brand-white overflow-hidden">
      {/* Full-width cinematic image with overlay */}
      <div className="relative">
        <motion.div
          className="relative overflow-hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <motion.img
            src={aboutImage}
            alt="Regulatory scrutiny of environmental claims"
            loading="lazy"
            className="w-full object-cover h-[400px] md:h-[500px] lg:h-[620px]"
            initial={{ scale: 1.08 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 8, ease: "easeOut" }}
          />
          {/* Multi-layer overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-brand-green-dark/90 via-brand-green-dark/60 to-brand-green-dark/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-green-dark/80 via-transparent to-transparent" />

          {/* Content overlaid on image */}
          <div className="absolute inset-0 flex flex-col justify-between p-5 md:p-8 lg:p-14">
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="max-w-2xl"
            >
              <motion.div variants={fadeUp} className="flex items-center gap-3 mb-4 lg:mb-6">
                <motion.span className="inline-block w-8 h-[2px] rounded-full bg-brand-green-light origin-left" initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }} />
                <span className="text-xs lg:text-sm font-semibold tracking-[0.18em] uppercase text-brand-green-light">
                  The Problem
                </span>
              </motion.div>
              <motion.h2
                variants={fadeUp}
                className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold leading-[1.08] tracking-[-0.02em] text-brand-white"
              >
                A Gap in Scrutiny
              </motion.h2>
              <motion.h3
                variants={fadeUp}
                className="mt-3 lg:mt-4 text-lg lg:text-2xl font-heading font-bold text-brand-green-light"
              >
                Why Greenwashing is Now a Boardroom Risk.
              </motion.h3>
            </motion.div>

            {/* Bottom: ShieldAlert icon + callout */}
            <motion.div
              className="flex items-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-xl glass-dark flex items-center justify-center shrink-0">
                <ShieldAlert className="w-6 h-6 text-brand-green-light" />
              </div>
              <p className="text-sm lg:text-base text-brand-white/70 max-w-lg leading-relaxed italic">
                Greenwashing is a Governance Failure, Not a Marketing Choice.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Content below image */}
      <div className="py-16 lg:py-28">
        {/* Background leaf */}
        <img
          src={leafImg}
          alt=""
          className="absolute top-[50%] -right-[5%] w-[38vw] max-w-[500px] min-w-[260px] opacity-[0.10] select-none pointer-events-none rotate-[18deg] hidden sm:block"
        />

        <div className="mx-auto max-w-6xl px-5 lg:px-10 relative z-10">
          {/* Two-column explanation */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="grid md:grid-cols-2 gap-8 lg:gap-16 mb-14 lg:mb-20"
          >
            <motion.div variants={fadeUp}>
              <p className="text-sm lg:text-base leading-[1.85] text-brand-grey mb-4">
                Environmental claims were, for years, seen through the lens of reputation and brand sentiment. This has now shifted to a framework where regulators categorise <span className="font-semibold text-brand-black">vague</span>, <span className="font-semibold text-brand-black">exaggerated</span>, or <span className="font-semibold text-brand-black">unsubstantiated claims</span> as <span className="font-semibold text-brand-black">misleading acts and omissions</span> under consumer protection law.
              </p>
              <p className="text-sm lg:text-base leading-[1.85] text-brand-grey mb-4">
                Regulators such as the CMA (Competition and Markets Authority) and the ASA (Advertising Standards Authority), applying the CAP Code, now scrutinise:
              </p>
              <ul className="space-y-2.5">
                {scrutinyPoints.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm lg:text-base text-brand-grey leading-relaxed">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-green-dark shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div variants={fadeUp}>
              <div className="bg-brand-grey-light rounded-2xl lg:rounded-3xl p-6 lg:p-8 border border-border">
                <p className="text-sm lg:text-base leading-[1.85] text-brand-grey mb-4">
                  It is no longer enough for a claim to be technically true in a narrow sense; it must also:
                </p>
                <ul className="space-y-3">
                  {mustAlsoPoints.map((item, i) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-0.5 w-6 h-6 rounded-lg bg-brand-green-dark/10 flex items-center justify-center shrink-0 text-xs font-bold text-brand-green-dark">
                        {i + 1}
                      </span>
                      <span className="text-sm lg:text-base text-brand-grey leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </motion.div>

          {/* Exposure risks heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="mb-8 lg:mb-10"
          >
            <h3 className="text-xl lg:text-2xl font-heading font-bold text-brand-black">
              So, what's your exposure in this?
            </h3>
          </motion.div>

          {/* Exposure risk cards */}
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
                  className="group relative overflow-hidden rounded-2xl lg:rounded-3xl border border-border hover:border-brand-green-dark/20 hover:shadow-xl transition-all duration-500"
                  whileHover={{ y: -4, transition: { duration: 0.25 } }}
                >
                  {/* Top accent gradient */}
                  <div className="h-1 w-full" style={{ background: "linear-gradient(90deg, #499167, #76f7bf)" }} />
                  <div className="p-6 lg:p-8 bg-brand-white">
                    <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-2xl flex items-center justify-center mb-5" style={{ background: "linear-gradient(135deg, rgba(73,145,103,0.12), rgba(118,247,191,0.12))" }}>
                      <Icon className="w-6 h-6 text-brand-green-dark" />
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
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
