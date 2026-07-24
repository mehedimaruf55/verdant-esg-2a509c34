import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowLeft } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import leafImg from "@/assets/leaf.png";

const triggers = [
  {
    title: "Vague and Unqualified",
    body: "Terms like \"ethically made,\" \"responsibly sourced,\" and \"sustainably produced\" are so broad that they can be interpreted to mean anything. That is the problem. ASA/CAP guidelines need clarity on environmental claims. If consumers can't understand what the claim implies, it may be considered misleading.",
  },
  {
    title: "Unsupported by Verifiable Evidence",
    body: "A claim needs documentation to back it up at the time it is made. Supplier self-declarations, unaudited questionnaires, and internal assumptions do not count.",
  },
  {
    title: "Selective Scope",
    body: "Highlighting one positive aspect of a supply chain while omitting significant environmental or social concerns elsewhere can be classed as 'misleading by omission'. For example, if your shipping methods offset gains in your production process, that reality has to be reflected in the final claim.",
  },
  {
    title: "Inconsistent Transparency Reporting",
    body: "For businesses subject to the Modern Slavery Act reporting requirement, the expectation is that a brand's sustainability aligns with what annual transparency statements say. Inconsistencies between public claims and supply chain realities invite regulatory and reputational risk.",
  },
];

const coverage = [
  {
    title: "Sourcing Claim Assessment",
    body: "We review public-facing language related to sourcing, origins, supplier standards, and ethics, across websites, packaging, campaigns, and other communications. These claims are assessed against what your procurement team can gather evidence for.",
  },
  {
    title: "Evidence Gap Analysis",
    body: "We map the gap between your published claims and available documentation. The exercise identifies missing, partial, or unverified evidence to determine what needs to be audited, obtained, or qualified before the claim can be made safely.",
  },
  {
    title: "Supplier Data Review",
    body: "We assess the supplier information underpinning your claims for currency and quality. Self-declarations, audit reports, certifications, and third-party verifications are not the same. We help you understand which claims have strong support and which are made on weak grounds.",
  },
  {
    title: "Language Qualification",
    body: "If we cannot fully substantiate a claim across an entire supply chain, we provide alternative language that is honest about the scope, clear about limitations, and defensible to regulators. A more limited claim with proper evidence is stronger than a broad claim that won't stand up to scrutiny.",
  },
  {
    title: "Modern Slavery and Transparency Alignment",
    body: "For clients whose obligations include Modern Slavery Act reporting, we review how closely the supply chain disclosures and marketing claims align. Any discrepancies present a compounding risk that could damage your reputation and invite regulatory and legal issues.",
  },
];

const audience = [
  "Brands selling fashion, consumer goods, food, etc., or manufacturing where sourcing claims are included.",
  "Businesses whose claims rely on certifications held by upstream or third-party verifiers to support marketing claims.",
  "Companies whose ESG or sustainability communications reference the supply chain.",
  "Organisations preparing for public reporting, investor due diligence, tender submissions, or supply chain integrity checks.",
  "Businesses that have received communications from retail partners or institutional buyers who demand evidence of sustainability claims.",
];

const SupplyChainTransparencyReview = () => (
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
          Supply Chain Transparency Review
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-4 text-brand-green-dark font-heading font-semibold text-lg lg:text-xl max-w-3xl"
        >
          Support Your Claims With Strong Supply Chain Evidence.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 space-y-4 text-brand-grey text-base lg:text-lg max-w-3xl leading-relaxed"
        >
          <p>
            When a brand says that its products are responsibly sourced, sustainably processed, or
            ethically produced, it is making a statement about its supply chain. It has nothing to do with
            intentions, supplier contracts, or procurement policy.
          </p>
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-6 text-xl lg:text-2xl font-heading font-semibold text-brand-black max-w-3xl leading-snug border-l-2 border-brand-green-dark pl-5"
        >
          Its supply chain as it actually operates.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-6 text-brand-grey text-base lg:text-lg max-w-3xl leading-relaxed"
        >
          Regulators care deeply about that distinction, and it is here where a large number of
          well-intentioned sustainability claims begin to falter.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8"
        >
          <Link
            to="/contact"
            className="group inline-flex items-center gap-2 px-6 lg:px-8 py-3.5 lg:py-4 rounded-full bg-brand-green-dark text-brand-white font-semibold text-sm lg:text-base hover:bg-brand-green-light hover:text-brand-black transition-colors duration-300"
          >
            Book a Supply Chain Review
            <ArrowUpRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </motion.div>
      </div>
    </section>

    {/* WHERE THE PROBLEM STARTS */}
    <section className="py-20 lg:py-28 bg-brand-white">
      <div className="max-w-4xl mx-auto px-5 lg:px-10">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-brand-green-dark font-bold text-xs uppercase tracking-[0.16em] mb-4"
        >
          Where the Problem Starts
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-3xl lg:text-4xl font-heading font-bold text-brand-black leading-tight"
        >
          The Gap Between Marketing and Procurement
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-6 space-y-5 text-brand-grey text-base lg:text-lg leading-relaxed"
        >
          <p>
            Most supply chain claims do not start as intentional misrepresentations. They start as
            reasonable summaries of the procurement policy, a supplier questionnaire, or a certification
            held by someone else.
          </p>
          <p>
            Then, someone in marketing writes 'responsibly sourced' because that is what the brief says.
            It goes to ESG, where it is signed off as reflecting the company's stated commitments.
          </p>
        </motion.div>

        <motion.blockquote
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-8 border-l-4 border-brand-green-dark pl-6 py-2 text-xl lg:text-2xl font-heading font-semibold text-brand-black leading-snug"
        >
          In this chain, no one checks whether the underlying evidence would withstand a simple question
          from the regulator: "How do you know?"
        </motion.blockquote>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8 text-brand-grey text-base lg:text-lg leading-relaxed"
        >
          The CMA Green Claims Code is clear that businesses bear the responsibility for the accuracy of
          their statements, including claims that depend on supplier information. Responsibility does not
          transfer upstream just because they hold the evidence. If you have incomplete, outdated, or
          unverified data, the claim built on it can't stand, regardless of who provided the information.
        </motion.p>
      </div>
    </section>

    {/* REGULATORY TRIGGERS */}
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
            Regulatory Triggers
          </p>
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-brand-black leading-tight">
            What Regulators Are Looking For
          </h2>
          <p className="mt-5 text-brand-grey text-base lg:text-lg leading-relaxed">
            Supply chain claims attract scrutiny when they are:
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5 lg:gap-6">
          {triggers.map((c, i) => (
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

    {/* WHAT'S INCLUDED */}
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
            What's Included
          </p>
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-brand-black leading-tight">
            What a Supply Chain Transparency Review Covers
          </h2>
          <p className="mt-5 text-brand-grey text-base lg:text-lg leading-relaxed">
            We work with clients to close the gap between what is being communicated and what can be
            proved.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {coverage.map((f, i) => (
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

    {/* WHO THIS IS FOR */}
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
              Who This Is For
            </p>
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-brand-white leading-tight max-w-2xl">
              Who This Is For
            </h2>
            <p className="mt-5 text-brand-white/80 text-base lg:text-lg leading-relaxed max-w-3xl">
              Our supply chain review is particularly relevant for:
            </p>

            <ul className="mt-10 grid md:grid-cols-2 gap-4 lg:gap-5">
              {audience.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.06 }}
                  className="p-6 rounded-2xl bg-brand-white/[0.06] border border-brand-white/10 backdrop-blur-sm flex gap-4"
                >
                  <span className="shrink-0 font-heading font-bold text-brand-green-light text-lg leading-none pt-0.5">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-brand-white/85 text-[15px] lg:text-base leading-relaxed">
                    {item}
                  </span>
                </motion.li>
              ))}
            </ul>
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
          className="relative overflow-hidden rounded-3xl lg:rounded-[2rem] bg-gradient-to-br from-brand-green-dark via-[hsl(154,45%,22%)] to-[hsl(154,50%,14%)] p-10 lg:p-16"
        >
          <img
            src={leafImg}
            alt=""
            className="absolute -right-16 -bottom-16 w-[280px] lg:w-[420px] opacity-[0.08] pointer-events-none select-none"
          />
          <div className="relative z-10 max-w-3xl">
            <h2 className="text-3xl lg:text-5xl font-heading font-bold text-brand-white leading-tight">
              Get Complete Visibility Of Your Sustainability Claims
            </h2>
            <div className="mt-6 space-y-4 text-brand-white/85 text-base lg:text-lg leading-relaxed">
              <p>
                Supply chain claims are some of the riskiest categories when making environmental
                statements. Often, this is because the evidence to support them sits, at least in part,
                outside your direct control. That makes it worth looking into the strength of your current
                claims.
              </p>
              <p>We help you make those claims without exposing yourself to regulatory liability.</p>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-5">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 px-6 lg:px-8 py-3.5 lg:py-4 rounded-full bg-brand-green-light text-brand-black font-semibold text-sm lg:text-base hover:bg-brand-white transition-colors duration-300"
              >
                Book a Supply Chain Review
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

export default SupplyChainTransparencyReview;
