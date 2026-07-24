import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowLeft, ArrowRight } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import PageFeatureImage from "@/components/PageFeatureImage";
import leafImg from "@/assets/leaf.png";
import featureImg from "@/assets/ai-screening-hero.jpg";

const capabilities = [
  {
    title: "Vague Environmental Terminology",
    body: "Language that implies broad environmental benefits without defined scopes, basis, or limitations is flagged. This could be terms used without qualification (sustainable, eco-friendly, green, natural, etc.) or necessary evidence. They aren't flagged automatically as non-compliant but as requiring substantiation before publication.",
  },
  {
    title: "Absolute Claims",
    body: "Statements presented in absolute terms are likely to need absolute proof. The tool identifies the framing and flags what calls for high evidentiary standards to support.",
  },
  {
    title: "Carbon and Net Zero Language",
    body: "Carbon neutrality and net-zero claims receive some of the highest scrutiny under current enforcement. The tool identifies and flags specific requirements such as boundary definition, methodology transparency, third-party verification, and honest reporting of emissions. Claims lacking these elements present high regulatory risk.",
  },
  {
    title: "Unsupported Comparative Claims",
    body: "Language that implies a product or service is better, greener, cleaner, or more sustainable than it is, with no basis, violates the ASA/CAP framework. The tool identifies comparative framing and flags where the basis for comparison is unclear or missing.",
  },
  {
    title: "Supply Chain Assertions",
    body: "The tool finds claims that depend on supplier-level evidence (such as sourcing statements, manufacturing claims, ethical language, etc.) where the evidentiary chain of custody may be incomplete. The tool flags statements that need supply chain evidence review.",
  },
  {
    title: "Missing or Inadequate Qualifiers",
    body: "Which of your claims would be defensible with appropriate qualification, but currently don't have it? The tool identifies scope limitations, geographic qualifiers, time boundaries, methodology references, etc., to convert a high-risk claim into a defensible one.",
  },
  {
    title: "Life-cycle Red Flags",
    body: "Single-attribute claims that obscure negative impacts elsewhere in a product's life cycle are risky. The CMA's fifth principle requires claims that account for the full picture. The tool flags where framing may create misleading impressions overall.",
  },
  {
    title: "Regulatory Watchlist Terminology",
    body: "The tool maintains a list of specific terms and phrases identified as problematic in ASA adjudication, CMA guidance, or enforcement action. This list is updated as regulatory changes happen.",
  },
];

const reportItems = [
  "The specific language identified",
  "The risk category it falls into",
  "The regulatory basis for its classification as a risk (based on the CMA and ASA/CAP code)",
  "The evidence needed to support the claim",
  "Recommended actions (such as substantiation review, qualification, rewrite, or referral to legal or compliance)",
];

const limits = [
  {
    title: "It Does Not Assess Your Evidence",
    body: "The tool reviews language. It cannot access your substantiation files, supplier documentation, or certification records. A claim that passes the screening tool is not confirmed as compliant, just that it doesn't have obvious language-level indicators. Evidence review is a whole other step.",
  },
  {
    title: "It Is Not a Replacement For Legal Advice",
    body: "Where a claim turns out to have legal risk, particularly if it is part of an existing complaint, enquiry, or high-value commercial commitment, legal advice is indispensable. The screening tool only offers pre-publication review, not legal opinions.",
  },
  {
    title: "It Does Not Replace Human Judgement",
    body: "The tool is calibrated to the regulatory frameworks we work with on a daily basis, but context is crucial. A claim that is flagged as high risk in isolation might be defensible in context, with the right evidence. The tool's report is a starting point for human review, not a compliance verdict.",
  },
  {
    title: "It Does Not Create an Audit Trail by Itself",
    body: "The tool's output should be documented as part of a structured internal claims approval process, alongside the evidence packs and required sign-offs. The tool supports this process rather than constituting it.",
  },
];

const workflow = [
  "Draft",
  "AI Screening",
  "Substantiation Review",
  "Legal / Compliance Sign-Off",
  "Publication",
  "Archiving for Evidentiary and Auditing Purposes",
];

const audience = [
  "Marketing and communications teams who need a fast, structured check before forwarding material to agencies or approving copy.",
  "In-house legal and compliance functions that deal with high volumes of claims across multiple teams and channels.",
  "ESG leads responsible for sustainability reports, investor communications, and public-facing commitments.",
  "Agencies developing sustainability campaigns that want to find and mitigate client-side risk in their briefs.",
  "Businesses in high-scrutiny industries, such as fashion, FMCG, financial services, food, and energy. The volume of publications tends to be high and regulatory attention is always on.",
];

const AIAssistedGreenClaimsScreening = () => (
  <PageLayout>
    {/* HERO */}
    <section className="relative pt-36 lg:pt-44 pb-20 lg:pb-28 overflow-hidden bg-gradient-to-br from-[hsl(154,40%,96%)] via-white to-[hsl(150,30%,94%)]">
      <img
        src={leafImg}
        alt=""
        className="absolute -right-20 -top-10 w-[320px] lg:w-[500px] opacity-[0.07] pointer-events-none select-none"
      />
      <div className="max-w-6xl mx-auto px-5 lg:px-10 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-4"
        >
          <p className="text-brand-green-dark font-bold text-xs uppercase tracking-[0.16em]">
            Service · Tool
          </p>
          <span className="inline-flex items-center px-2 py-1 rounded-md bg-brand-green-dark text-brand-white text-[10px] font-bold tracking-[0.12em]">
            TOOL
          </span>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-3xl lg:text-5xl font-heading font-bold text-brand-black leading-tight max-w-4xl"
        >
          AI-Assisted Green Claims Screening
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-4 text-brand-green-dark font-heading font-semibold text-lg lg:text-xl max-w-3xl"
        >
          Built by Regulatory Specialists. Trained on the Right Risks.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 space-y-4 text-brand-grey text-base lg:text-lg max-w-3xl leading-relaxed"
        >
          <p>
            Most AI tools in the compliance space are built for general legal risk. They flag broad
            categories of concern, produce outputs that require interpretation, and may not be calibrated
            to the specific standards applied to environmental claims.
          </p>
          <p>This tool is different because it was built on more precise foundations.</p>
          <p>
            Verdant ESG's AI screening tool is developed and updated by specialists who work daily with
            the CMA Green Claims Code and ASA/CAP environmental advertising guidance. It scans for the
            specific language patterns, structural weaknesses, and evidentiary gaps that regulators and
            complaint handlers search for.
          </p>
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 text-xl lg:text-2xl font-heading font-semibold text-brand-black max-w-3xl leading-snug border-l-2 border-brand-green-dark pl-5"
        >
          It is not meant to replace legal advice, a structured audit, or human judgement. It is the first
          pass that sets the tone for speed, consistency, and calibration, ensuring that, as the volume of
          work increases, nothing is missed.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 flex flex-wrap items-center gap-4"
        >
          <Link
            to="/contact"
            className="group inline-flex items-center gap-2 px-6 lg:px-8 py-3.5 lg:py-4 rounded-full bg-brand-green-dark text-brand-white font-semibold text-sm lg:text-base hover:bg-brand-green-light hover:text-brand-black transition-colors duration-300"
          >
            Request a Tool Demo
            <ArrowUpRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
          <Link
            to="/services/green-claims-risk-audit"
            className="group inline-flex items-center gap-2 px-6 lg:px-8 py-3.5 lg:py-4 rounded-full border border-brand-black/15 text-brand-black font-semibold text-sm lg:text-base hover:border-brand-green-dark hover:text-brand-green-dark transition-colors duration-300"
          >
            Book a Full Claims Audit
            <ArrowUpRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </motion.div>
      </div>
    </section>

    <PageFeatureImage src={featureImg} alt="AI-assisted screening of environmental claims" caption="An assistive first pass — surfacing risk patterns before a human reviewer applies judgment." />

    {/* THE PROBLEM */}
    <section className="py-20 lg:py-28 bg-brand-white">
      <div className="max-w-4xl mx-auto px-5 lg:px-10">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-brand-green-dark font-bold text-xs uppercase tracking-[0.16em] mb-4"
        >
          The Problem
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-3xl lg:text-4xl font-heading font-bold text-brand-black leading-tight"
        >
          The Problem It Solves
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-6 space-y-5 text-brand-grey text-base lg:text-lg leading-relaxed"
        >
          <p>
            In most organisations, environmental claims are created quickly. Marketing drafts copy, briefs
            to an agency, product description updates, social media posts, and reports might all be done
            under pressure.
          </p>
          <p>
            At each of these points, the question of whether the language used meets the CMA and ASA/CAP
            standards is either asked informally, not asked at all, or deferred to a review process that
            may not have the bandwidth to catch issues.
          </p>
          <p>
            The result is not malicious or structural, but claims accumulate across channels faster than
            compliance functions can review them. This creates new ground for risk.
          </p>
          <p>
            The AI screening tool addresses that structural gap, processes the language quickly, flags
            specific indicators that may invite scrutiny, and produces a report with recommendations for
            what to review and why.
          </p>
        </motion.div>
      </div>
    </section>

    {/* CAPABILITIES */}
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
            Capabilities
          </p>
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-brand-black leading-tight">
            What the Tool Scans For
          </h2>
          <p className="mt-5 text-brand-grey text-base lg:text-lg leading-relaxed">
            The tool is designed to identify common risk categories across ASA adjudications, CMA
            enforcement guidance, and the Green Claims Code.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {capabilities.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.04 }}
              className="p-7 lg:p-8 rounded-2xl bg-brand-white border border-brand-black/[0.06] hover:border-brand-green-dark/40 hover:shadow-[0_20px_50px_-20px_rgba(0,0,0,0.12)] transition-all duration-300"
            >
              <span className="font-heading font-bold text-2xl lg:text-3xl text-brand-green-dark">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 text-lg lg:text-xl font-heading font-bold text-brand-black leading-snug">
                {c.title}
              </h3>
              <p className="mt-3 text-brand-grey text-[15px] lg:text-base leading-relaxed">{c.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* THE REPORT */}
    <section className="py-20 lg:py-28 bg-brand-white">
      <div className="max-w-4xl mx-auto px-5 lg:px-10">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-brand-green-dark font-bold text-xs uppercase tracking-[0.16em] mb-4"
        >
          The Output
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-3xl lg:text-4xl font-heading font-bold text-brand-black leading-tight"
        >
          What Does The Report Look Like?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-6 text-brand-grey text-base lg:text-lg leading-relaxed"
        >
          The tool's review returns a risk report organised by claim. For each flagged item, you get:
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-8 rounded-2xl border border-brand-black/[0.08] bg-[hsl(150,20%,98%)] overflow-hidden"
        >
          <div className="px-6 lg:px-8 py-4 border-b border-brand-black/[0.06] flex items-center gap-2">
            <div className="flex gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-brand-black/15" />
              <span className="w-2.5 h-2.5 rounded-full bg-brand-black/15" />
              <span className="w-2.5 h-2.5 rounded-full bg-brand-black/15" />
            </div>
            <span className="ml-3 text-xs text-brand-grey font-mono tracking-wider uppercase">
              Sample Report Structure
            </span>
          </div>
          <ol className="p-6 lg:p-8 space-y-4">
            {reportItems.map((item, i) => (
              <li key={i} className="flex gap-5">
                <span className="shrink-0 w-9 h-9 rounded-full bg-brand-green-light/40 flex items-center justify-center font-heading font-bold text-brand-green-dark text-sm">
                  {i + 1}
                </span>
                <span className="text-brand-black text-[15px] lg:text-base leading-relaxed pt-1.5">
                  {item}
                </span>
              </li>
            ))}
          </ol>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8 text-brand-grey text-base lg:text-lg leading-relaxed"
        >
          The report is designed to help with decision-making and action by marketing, ESG, or legal teams
          without a specialist on hand for every flag. It tells you what the problem is, why it falls in
          that category, and what actions to take.
        </motion.p>
      </div>
    </section>

    {/* LIMITS */}
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
            The Limits
          </p>
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-brand-black leading-tight">
            What This Tool Does Not Do
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5 lg:gap-6">
          {limits.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="p-7 lg:p-8 rounded-2xl border-2 border-dashed border-brand-black/15 bg-transparent hover:border-brand-green-dark/40 transition-colors duration-300"
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

    {/* WORKFLOW */}
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
              Workflow
            </p>
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-brand-white leading-tight max-w-3xl">
              How Does The Tool Fit Into Your Claims Process
            </h2>
            <p className="mt-5 text-brand-white/80 text-base lg:text-lg leading-relaxed max-w-3xl">
              The screening tool is designed to be at the front end of your internal claims approval
              workflow. It comes after drafting but before substantiation review and sign-off.
            </p>

            <div className="mt-10 flex flex-wrap items-stretch gap-3">
              {workflow.map((step, i) => (
                <div key={step} className="flex items-stretch gap-3">
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                    className={`px-5 py-4 rounded-xl border max-w-[220px] flex flex-col justify-center ${
                      i === 1
                        ? "bg-brand-green-light text-brand-black border-brand-green-light shadow-[0_10px_30px_-10px_rgba(118,247,191,0.4)]"
                        : "bg-brand-white/[0.06] text-brand-white/85 border-brand-white/10 backdrop-blur-sm"
                    }`}
                  >
                    <span
                      className={`text-[10px] font-bold tracking-[0.12em] uppercase ${
                        i === 1 ? "text-brand-green-dark" : "text-brand-white/50"
                      }`}
                    >
                      Step {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="mt-1 font-heading font-semibold text-[15px] lg:text-base leading-snug">
                      {step}
                    </span>
                  </motion.div>
                  {i < workflow.length - 1 && (
                    <div className="flex items-center text-brand-white/40">
                      <ArrowRight size={18} />
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-10 space-y-4 text-brand-white/85 text-base lg:text-lg leading-relaxed max-w-3xl">
              <p>
                At the draft stage, AI screening can catch high-risk language before it reaches the
                review stage, reducing the workload on legal and ESG teams. It also ensures that the
                claims entering the review phase are cleaner.
              </p>
              <p>
                If you deploy it as a standing auditing tool, it can be run periodically across existing
                published content to identify claims that may expose you to legal issues. It could be
                that evidence has changed, certifications have lapsed, or regulatory guidance has evolved.
              </p>
            </div>

            <p className="mt-8 text-lg lg:text-xl font-heading font-semibold text-brand-white leading-snug border-l-2 border-brand-green-light pl-5 max-w-3xl">
              Whatever the reason for your exposure, you don't want to miss it.
            </p>
          </div>
        </motion.div>
      </div>
    </section>

    {/* WHO THIS IS FOR */}
    <section className="py-20 lg:py-28 bg-brand-white">
      <div className="max-w-4xl mx-auto px-5 lg:px-10">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-brand-green-dark font-bold text-xs uppercase tracking-[0.16em] mb-4"
        >
          Who This Is For
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-3xl lg:text-4xl font-heading font-bold text-brand-black leading-tight"
        >
          Who This Is For
        </motion.h2>

        <ul className="mt-10 space-y-3">
          {audience.map((item, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="flex gap-5 p-5 lg:p-6 rounded-xl bg-[hsl(150,20%,97%)] border border-brand-black/[0.06]"
            >
              <span className="shrink-0 font-heading font-bold text-brand-green-dark text-base lg:text-lg leading-none pt-1">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="text-brand-black text-[15px] lg:text-base leading-relaxed">{item}</span>
            </motion.li>
          ))}
        </ul>
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
          className="relative overflow-hidden rounded-3xl lg:rounded-[2rem] bg-gradient-to-br from-brand-green-dark via-[hsl(154,45%,22%)] to-[hsl(154,50%,14%)] p-10 lg:p-16"
        >
          <img
            src={leafImg}
            alt=""
            className="absolute -right-16 -bottom-16 w-[280px] lg:w-[420px] opacity-[0.08] pointer-events-none select-none"
          />
          <div className="relative z-10 max-w-3xl">
            <h2 className="text-3xl lg:text-5xl font-heading font-bold text-brand-white leading-tight">
              The Principle Behind The Tool
            </h2>
            <p className="mt-6 text-brand-white/85 text-base lg:text-lg leading-relaxed">
              Regulators almost never need to review every claim a business has ever made. They usually
              focus on the most current vague, unsubstantiated, or misleading claims. In a landscape where
              most are publishing environmental claims across multiple channels and formats, the
              likelihood that one of them could be in violation is not far-fetched.
            </p>
            <p className="mt-6 text-lg lg:text-xl font-heading font-semibold text-brand-white leading-snug border-l-2 border-brand-green-light pl-5">
              The screening tool is built on the idea that the most protected businesses are those that
              looked at their own language the way a regulator would — before a regulator did.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 px-6 lg:px-8 py-3.5 lg:py-4 rounded-full bg-brand-green-light text-brand-black font-semibold text-sm lg:text-base hover:bg-brand-white transition-colors duration-300"
              >
                Request a Tool Demo
                <ArrowUpRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
              <Link
                to="/services/green-claims-risk-audit"
                className="group inline-flex items-center gap-2 px-6 lg:px-8 py-3.5 lg:py-4 rounded-full border border-brand-white/25 text-brand-white font-semibold text-sm lg:text-base hover:border-brand-white hover:bg-brand-white/5 transition-colors duration-300"
              >
                Book a Full Claims Audit
                <ArrowUpRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
              <Link
                to="/services"
                className="group inline-flex items-center gap-2 text-brand-white/85 hover:text-brand-white font-semibold text-sm lg:text-base transition-colors"
              >
                <ArrowLeft
                  size={16}
                  className="transition-transform duration-300 group-hover:-translate-x-0.5"
                />
                Return to Services
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  </PageLayout>
);

export default AIAssistedGreenClaimsScreening;
