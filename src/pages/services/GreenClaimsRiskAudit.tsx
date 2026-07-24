import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import leafImg from "@/assets/leaf.png";

const focusCards = [
  {
    title: "Digital Presence",
    body: "We dive deep into website copy, landing pages, and long-form 'sustainability' or 'impact' sections where vague terminology can slowly pile up.",
  },
  {
    title: "Campaign and Social Language",
    body: "Our review covers high-visibility advertising, social media hooks, and influencer content where qualifiers may not always be included.",
  },
  {
    title: "Packaging and Labels",
    body: "We analyse on-pack claims, symbols, and logos that may imply a broader environmental benefit than the evidence shows.",
  },
  {
    title: "Product Descriptions",
    body: "The audit ensures technical specifications and eco-features meet the standards for consumer understanding and clarity.",
  },
  {
    title: "Investor and Public Reports",
    body: "We stress-test your ESG disclosures and public-facing reports to ensure they are supported by evidence and follow the guidelines consistently.",
  },
  {
    title: "Comparative Assertions",
    body: "We review claims like 'Greenest,' 'Better for the Planet,' or 'Lower Impact' claims to ensure they meet strict fairness and meaningful comparison requirements.",
  },
];

const framework = [
  {
    title: "Clarity and Ambiguity",
    body: "Does the claim use absolute language (e.g., Sustainable, eco-friendly) that implies no environmental impact? We find and fix the terms that may be considered vague or misleading.",
  },
  {
    title: "Qualification",
    body: "Is the basis of your claim clearly explained? We ensure that limitations, such as a claim that applies only to specific aspects of a product, are prominently displayed to avoid \"omission\" liabilities.",
  },
  {
    title: "Substantiation",
    body: "Does the evidence exist now? We audit your evidence packs to ensure they are current, relevant, and can adequately defend specific claims.",
  },
  {
    title: "Life-Cycle Limitations",
    body: "Does the claim focus on one 'green' aspect while ignoring a 'net negative' in another area? We check for the 'Halo Effect' where a minor improvement is used to mask a larger environmental impact.",
  },
  {
    title: "Supply Chain Support",
    body: "We verify that marketing assertions are supported by the realities of procurement. If you claim 'Responsibly Sourced,' we check if the underlying supplier data actually supports the assertion.",
  },
  {
    title: "Consumer Understanding",
    body: "We assess how a 'reasonable consumer' would understand your claims, ensuring that technical jargon does not mask a lack of matching action.",
  },
];

const deliverables = [
  {
    title: "Risk Triage",
    body: "High, medium, and low-risk flags for all reviewed material.",
  },
  {
    title: "Strategic Rewrites",
    body: "Specific adjustments to language to maintain commercial impact while satisfying the regulators.",
  },
  {
    title: "Evidentiary Gap Analysis",
    body: "Identifying where your claims outpace your data and what specific evidence is needed to bridge the gap.",
  },
  {
    title: "Governance Recommendations",
    body: "Suggestions for internal sign-off processes to ensure future claims adhere to regulatory guidelines.",
  },
];

const claimStandards = [
  "Clearly explained",
  "Properly qualified",
  "Reflective of the context",
  "Supported by credible and current evidence",
];

const GreenClaimsRiskAudit = () => (
  <PageLayout>
    {/* HERO */}
    <section className="relative pt-36 lg:pt-44 pb-20 lg:pb-28 overflow-hidden bg-gradient-to-br from-[hsl(154,40%,96%)] via-white to-[hsl(150,30%,94%)]">
      <img
        src={leafImg}
        alt=""
        className="absolute -right-20 -top-10 w-[320px] lg:w-[500px] opacity-[0.07] pointer-events-none select-none"
      />
      <div className="max-w-6xl mx-auto px-5 lg:px-10 relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-brand-green-dark font-bold text-xs uppercase tracking-[0.16em] mb-4"
        >
          Service
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-3xl lg:text-5xl font-heading font-bold text-brand-black leading-tight max-w-4xl"
        >
          Green Claims Risk Audit
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-4 text-brand-green-dark font-heading font-semibold text-lg lg:text-xl"
        >
          Rigorous. Clear. Defensible.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 space-y-4 text-brand-grey text-base lg:text-lg max-w-3xl leading-relaxed"
        >
          <p>
            Environmental claims now carry real regulatory weight. What you say, and how you say it, matters.
          </p>
          <p>
            At Verdant ESG, we review your sustainability messaging with the same level of scrutiny a
            regulator applies. The aim is to stress-test your claims against the CMA Green Claims Code and
            ASA/CAP rules and pinpoint regulatory triggers and gaps before they lead to enforcement action.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8"
        >
          <Link
            to="/contact"
            className="group inline-flex items-center gap-2 px-6 lg:px-8 py-3.5 lg:py-4 rounded-full bg-brand-green-dark text-brand-white font-semibold text-sm lg:text-base hover:bg-brand-green-light hover:text-brand-black transition-colors duration-300"
          >
            Request a Risk Audit
            <ArrowUpRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </motion.div>
      </div>
    </section>

    {/* THE APPROACH */}
    <section className="py-20 lg:py-28 bg-brand-white">
      <div className="max-w-4xl mx-auto px-5 lg:px-10">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-brand-green-dark font-bold text-xs uppercase tracking-[0.16em] mb-4"
        >
          The Approach
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-3xl lg:text-4xl font-heading font-bold text-brand-black leading-tight"
        >
          The Regulators' Stress-Test
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-6 space-y-5 text-brand-grey text-base lg:text-lg leading-relaxed"
        >
          <p>
            In our Green Claims Risk Audit, we are not performing a standard copy-edit or a general
            sustainability review.
          </p>
          <p>
            We take a structured and technical approach to analyse your public-facing environmental claims
            and test them against the standards set by the Competition and Markets Authority (CMA) and
            Advertising Standards Authority (ASA).
          </p>
          <p className="text-brand-black font-medium">Your claims must not only be accurate, but also:</p>
        </motion.div>

        <ul className="mt-6 grid sm:grid-cols-2 gap-3">
          {claimStandards.map((label, i) => (
            <motion.li
              key={label}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="flex items-center gap-3 p-4 rounded-xl bg-[hsl(150,20%,97%)] border border-brand-black/[0.06]"
            >
              <span className="shrink-0 w-8 h-8 rounded-full bg-brand-green-light/40 flex items-center justify-center text-brand-green-dark">
                <Check size={16} strokeWidth={2.5} />
              </span>
              <span className="text-brand-black font-medium text-[15px] lg:text-base">{label}</span>
            </motion.li>
          ))}
        </ul>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-8 text-brand-grey text-base lg:text-lg leading-relaxed"
        >
          Find the vulnerabilities in your entire communications ecosystem and get a practical roadmap to
          strengthen your position.
        </motion.p>
      </div>
    </section>

    {/* OUR FOCUS */}
    <section className="py-20 lg:py-28 bg-[hsl(150,20%,97%)] border-y border-brand-black/[0.06]">
      <div className="max-w-6xl mx-auto px-5 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-12 lg:mb-16"
        >
          <p className="text-brand-green-dark font-bold text-xs uppercase tracking-[0.16em] mb-4">
            Our Focus
          </p>
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-brand-black leading-tight">
            Total Coverage
          </h2>
          <p className="mt-5 text-brand-grey text-base lg:text-lg leading-relaxed">
            Regulatory risk doesn't sit in one place. It is an aggregation that builds across pages,
            campaigns, legacy content, public disclosures, etc. Our review takes a holistic approach,
            reviewing:
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {focusCards.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="p-7 lg:p-8 rounded-2xl bg-brand-white border border-brand-black/[0.06] hover:border-brand-green-dark/40 hover:shadow-[0_20px_50px_-20px_rgba(0,0,0,0.12)] transition-all duration-300"
            >
              <h3 className="text-lg lg:text-xl font-heading font-bold text-brand-black leading-snug">
                {c.title}
              </h3>
              <p className="mt-3 text-brand-grey text-[15px] lg:text-base leading-relaxed">{c.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* METHODOLOGY */}
    <section className="py-20 lg:py-28 bg-brand-white">
      <div className="max-w-6xl mx-auto px-5 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-12 lg:mb-16"
        >
          <p className="text-brand-green-dark font-bold text-xs uppercase tracking-[0.16em] mb-4">
            The Methodology
          </p>
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-brand-black leading-tight">
            The 6-Point Framework
          </h2>
          <p className="mt-5 text-brand-grey text-base lg:text-lg leading-relaxed">
            Our evaluation considers every claim's strength against the framework set out by CMA/CAP/ASA
            guidelines. The following aspects are the core of the framework:
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {framework.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="p-7 lg:p-8 rounded-2xl border border-brand-black/[0.08] hover:border-brand-green-dark/40 hover:shadow-[0_20px_50px_-20px_rgba(0,0,0,0.12)] transition-all duration-300"
            >
              <span className="font-heading font-bold text-2xl lg:text-3xl text-brand-green-dark">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 text-lg lg:text-xl font-heading font-bold text-brand-black leading-snug">
                {f.title}
              </h3>
              <p className="mt-3 text-brand-grey text-[15px] lg:text-base leading-relaxed">{f.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* DELIVERABLES */}
    <section className="py-20 lg:py-28 bg-brand-white">
      <div className="max-w-6xl mx-auto px-5 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-3xl lg:rounded-[2rem] bg-gradient-to-br from-brand-green-dark via-[hsl(154,45%,22%)] to-[hsl(154,50%,14%)] p-10 lg:p-16"
        >
          <img
            src={leafImg}
            alt=""
            className="absolute -right-16 -bottom-16 w-[280px] lg:w-[420px] opacity-[0.08] pointer-events-none select-none"
          />
          <div className="relative z-10">
            <p className="text-brand-green-light font-bold text-xs uppercase tracking-[0.16em] mb-4">
              The Deliverables
            </p>
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-brand-white leading-tight max-w-2xl">
              A Roadmap to De-Risking
            </h2>
            <p className="mt-5 text-brand-white/80 text-base lg:text-lg leading-relaxed max-w-3xl">
              The result of a Green Claims Risk Audit is a detailed Regulatory Exposure Report. In it, we
              include:
            </p>

            <div className="mt-10 grid md:grid-cols-2 gap-4 lg:gap-5">
              {deliverables.map((d, i) => (
                <motion.div
                  key={d.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.06 }}
                  className="p-6 lg:p-7 rounded-2xl bg-brand-white/[0.06] border border-brand-white/10 backdrop-blur-sm"
                >
                  <h3 className="text-lg lg:text-xl font-heading font-bold text-brand-white leading-snug">
                    {d.title}
                  </h3>
                  <p className="mt-3 text-brand-white/75 text-[15px] lg:text-base leading-relaxed">
                    {d.body}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>

    {/* FINAL CTA */}
    <section className="py-20 lg:py-28 bg-brand-white">
      <div className="max-w-6xl mx-auto px-5 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-3xl lg:rounded-[2rem] bg-gradient-to-br from-brand-green-dark via-[hsl(154,45%,22%)] to-[hsl(154,50%,14%)] p-10 lg:p-16 text-center"
        >
          <img
            src={leafImg}
            alt=""
            className="absolute -right-16 -bottom-16 w-[280px] lg:w-[420px] opacity-[0.08] pointer-events-none select-none"
          />
          <div className="relative z-10">
            <h2 className="text-3xl lg:text-5xl font-heading font-bold text-brand-white leading-tight max-w-3xl mx-auto">
              Assess Your Exposure Before It Is Tested
            </h2>
            <Link
              to="/contact"
              className="group mt-8 inline-flex items-center gap-2 px-6 lg:px-8 py-3.5 lg:py-4 rounded-full bg-brand-green-light text-brand-black font-semibold text-sm lg:text-base hover:bg-brand-white transition-colors duration-300"
            >
              Request a Risk Audit
              <ArrowUpRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  </PageLayout>
);

export default GreenClaimsRiskAudit;
