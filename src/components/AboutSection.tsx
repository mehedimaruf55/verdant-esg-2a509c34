import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import leafImg from "@/assets/leaf.png";
import aboutHero from "@/assets/about-hero.jpg";

const stats = [
  { value: "3", label: "Core Exposure Risks" },
  { value: "6", label: "CMA Principles" },
  { value: "100%", label: "Substantiation Required" },
];

const scrutiny = [
  "The clarity of claims",
  "The context in which they are presented",
  "How they are understood by consumers",
  "The evidence supporting them",
];

const standards = [
  "Clear and unambiguous",
  "Avoid misleading by omission",
  "Reflect the appropriate scope of the product or service",
  "Based on verifiable, contemporaneous evidence",
];

const exposures = [
  {
    title: "The Substantiation Trap",
    text: "Broad, aspirational statements such as \u201CNet Zero\u201D or \u201CSustainable\u201D made without an internal evidence repository that survives an audit are being flagged by regulators as inherently deceptive. Every claim must be supported by data accessible at the point of sale.",
  },
  {
    title: "Misleading by Omission",
    text: "Highlighting a single 'green' feature while ignoring significant environmental impacts elsewhere in the supply chain is no longer viable. Total lifecycle transparency is becoming the new legal baseline.",
  },
  {
    title: "Compliance Lag",
    text: "Marketing cycles move quicker than legal and ESG teams can verify data, leading to unqualified claims that can attract ASA/CAP sanctions. Alignment between creative and compliance teams is now a strategic necessity.",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="relative py-20 lg:py-32 bg-brand-white overflow-hidden">
      <img
        src={leafImg}
        alt=""
        className="absolute top-[8%] -right-[5%] w-[35vw] max-w-[450px] min-w-[200px] opacity-[0.05] select-none pointer-events-none rotate-[15deg] hidden sm:block"
      />

      <div className="mx-auto max-w-6xl px-5 lg:px-10 relative z-10">
        {/* Eyebrow + main title */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8 lg:mb-10"
        >
          <div className="flex items-center gap-3 mb-5">
            <span className="inline-block w-8 h-[2px] rounded-full bg-brand-green-dark" />
            <span className="text-xs lg:text-sm font-semibold tracking-[0.2em] uppercase text-brand-green-dark">
              The Problem
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold tracking-[-0.02em] leading-[1.05] text-brand-black">
            A Gap in Scrutiny
          </h2>
        </motion.div>

        {/* Hero image card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-3xl overflow-hidden shadow-xl"
        >
          <img
            src={aboutHero}
            alt="Environmental accountability"
            width={1600}
            height={1000}
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(135deg, hsl(var(--brand-green-dark) / 0.88) 0%, hsl(var(--brand-green-dark) / 0.72) 55%, hsl(var(--brand-green-dark) / 0.85) 100%)",
            }}
          />

          <div className="relative z-10 p-8 md:p-12 lg:p-16 min-h-[440px] lg:min-h-[520px] flex flex-col justify-between gap-10">
            <div className="max-w-2xl">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold leading-[1.15] tracking-[-0.01em] text-brand-white">
                Why Greenwashing is Now
                <br />
                a Boardroom Risk.
              </h3>
              <p className="mt-5 text-sm lg:text-base leading-[1.75] text-brand-white/85 max-w-xl">
                Regulators are increasingly categorising environmental claims as greenwashing where they are{" "}
                <span className="font-semibold text-brand-white">vague</span>,{" "}
                <span className="font-semibold text-brand-white">exaggerated</span>, or{" "}
                <span className="font-semibold text-brand-white">unsubstantiated</span> — closing the gap between corporate ambition and verifiable action.
              </p>
            </div>

            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
              {/* Stats */}
              <div className="flex flex-wrap gap-8 lg:gap-14">
                {stats.map((s) => (
                  <div key={s.label}>
                    <div className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-brand-white leading-none">
                      {s.value}
                    </div>
                    <div className="mt-2 text-[11px] lg:text-xs font-semibold tracking-[0.18em] uppercase text-brand-white/70 max-w-[140px]">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>

              <a
                href="#framework"
                className="group inline-flex items-center gap-3 self-start md:self-end rounded-full bg-brand-white pl-6 pr-2 py-2 text-sm font-semibold text-brand-green-dark hover:bg-brand-green-light hover:text-brand-black transition-colors duration-300 shrink-0"
              >
                More Details
                <span className="w-9 h-9 rounded-full bg-brand-green-dark group-hover:bg-brand-black flex items-center justify-center transition-colors duration-300">
                  <ArrowRight size={15} className="text-brand-white" />
                </span>
              </a>
            </div>
          </div>
        </motion.div>

        {/* Two-column body */}
        <div className="mt-20 lg:mt-28 grid md:grid-cols-2 gap-12 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-10 h-10 rounded-xl bg-brand-green-dark/5 flex items-center justify-center text-brand-green-dark">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>
              </div>
              <h4 className="text-xl lg:text-2xl font-heading font-bold text-brand-black">
                Regulatory Focus
              </h4>
            </div>
            <p className="text-base lg:text-lg text-brand-grey leading-relaxed mb-8">
              Regulators such as the CMA and ASA are shifting from voluntary guidance to strictly enforced disclosure. They now scrutinise:
            </p>
            <ul className="grid gap-4">
              {scrutiny.map((s) => (
                <li key={s} className="group flex items-center gap-4 p-4 rounded-2xl bg-brand-grey-light/30 border border-transparent hover:border-brand-green-light/30 hover:bg-white hover:shadow-lg hover:shadow-brand-green-dark/5 transition-all duration-300">
                  <span className="w-2 h-2 rounded-full bg-brand-green-dark shrink-0 group-hover:scale-125 transition-transform" />
                  <span className="text-sm lg:text-base text-brand-black/80 font-semibold">{s}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-10 h-10 rounded-xl bg-brand-green-dark/5 flex items-center justify-center text-brand-green-dark">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              </div>
              <h4 className="text-xl lg:text-2xl font-heading font-bold text-brand-black">
                The Compliance Standard
              </h4>
            </div>
            <p className="text-base lg:text-lg text-brand-grey leading-relaxed mb-8">
              It is no longer enough for a claim to be technically true. Environmental communication must be:
            </p>
            <div className="space-y-4">
              {standards.map((s, i) => (
                <motion.div 
                  key={s} 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative p-5 rounded-2xl bg-brand-white border-l-4 border-brand-green-light shadow-sm hover:shadow-md transition-shadow"
                >
                  <span className="text-sm lg:text-base text-brand-black/90 font-bold leading-snug">
                    {s}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Exposure risks */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="mt-16 lg:mt-24"
        >
          <div className="flex items-center gap-3 mb-8">
            <span className="inline-block w-8 h-[2px] rounded-full bg-brand-green-dark" />
            <span className="text-xs lg:text-sm font-semibold tracking-[0.2em] uppercase text-brand-green-dark">
              Your Exposure
            </span>
          </div>
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {exposures.map((e, i) => (
              <motion.div
                key={e.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -5, borderColor: "hsl(var(--brand-green-light) / 0.5)" }}
                className="group relative rounded-[2rem] border border-black/5 p-8 lg:p-9 bg-brand-white shadow-sm hover:shadow-xl hover:shadow-brand-green-dark/5 transition-all duration-500"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-brand-green-light/10 rounded-bl-[4rem] opacity-0 group-hover:opacity-100 transition-all duration-500" />
                
                <div className="relative z-10">
                  <div className="mb-6 w-12 h-12 rounded-2xl bg-brand-pale-green/30 flex items-center justify-center text-brand-green-dark">
                    <span className="text-lg font-bold">0{i + 1}</span>
                  </div>
                  <h5 className="text-xl lg:text-2xl font-heading font-bold text-brand-black mb-4 group-hover:text-brand-green-dark transition-colors duration-300">
                    {e.title}
                  </h5>
                  <p className="text-sm lg:text-base text-brand-grey leading-relaxed group-hover:text-brand-black transition-colors duration-300">
                    {e.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Pull quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
          className="mt-16 lg:mt-20 relative overflow-hidden rounded-2xl lg:rounded-3xl p-10 lg:p-14"
          style={{ background: "linear-gradient(135deg, #3a7a5a 0%, #499167 100%)" }}
        >
          <img
            src={leafImg}
            alt=""
            className="absolute -bottom-[20%] -right-[8%] w-[260px] opacity-[0.12] select-none pointer-events-none rotate-[25deg]"
          />
          <p className="relative z-10 text-2xl md:text-3xl lg:text-4xl font-heading font-bold leading-[1.15] tracking-[-0.01em] text-brand-white">
            Greenwashing is a Governance Failure,
            <br />
            <span className="text-brand-green-light">Not a Marketing Choice.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
