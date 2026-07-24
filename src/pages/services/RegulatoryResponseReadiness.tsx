import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowLeft } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import PageFeatureImage from "@/components/PageFeatureImage";
import leafImg from "@/assets/leaf.png";
import featureImg from "@/assets/regulatory-hero.jpg";

const readinessPillars = [
  {
    title: "Current claims that can be substantiated",
    body: "To be clear, this is not at some point in the future, based on supplier commitment, or pending certification renewal. Published claims have to reflect the evidence that exists and is currently accessible.",
  },
  {
    title: "An internal process to approve claims",
    body: "Proper review requires that an organisation know who reviews it, when the evidence was checked, who signed off, and when. A regulator investigating misleading claims will want to know how they came to be published. You need an audit trail showing a structured, evidence-led approval, which is different from an email chain where someone said, \"looks good to me.\"",
  },
  {
    title: "A clear view of exposure",
    body: "Different claims have different levels of risk. Knowing which of your current statements are most likely to attract scrutiny and why is the difference between managed risk and unpleasant surprises.",
  },
];

const coverage = [
  {
    title: "Exposure Triage",
    body: "We conduct a structured review of public-facing environmental claims (website, social, ESG reports, investor reports, etc.) to identify statements likely to attract ASA or CMA scrutiny. We assess them against the CMA's six-point framework and ASA/CAP standards to surface a complete picture of where risk sits.",
  },
  {
    title: "Evidence Pack Review",
    body: "We assess your current documentation and how well it supports current claims. Where evidence is sufficient, we confirm it. Where it is partial, outdated, or missing, we tell you exactly what needs to be done to address the issue.",
  },
  {
    title: "Internal Process Audit",
    body: "We review how you currently come up with claims, the approval process, and publishing. We identify process gaps to ensure claims do not travel to the publishing stage without the right checks, and recommend the structural changes needed to close them.",
  },
  {
    title: "Regulatory Scenario Walkthrough",
    body: "We walk your internal teams through what an ASA complaint or CMA enquiry actually looks like in practice. By the end, you'll know what is requested, how quickly, and the typical amount of time it takes to complete each stage. For most organisations, this is the first time anyone has explained it clearly. It changes how seriously your internal teams take due diligence.",
  },
  {
    title: "Pre-Response Review",
    body: "If you have already received a complaint, challenge, or regulatory contact, we can review your current position and give you a clear, honest assessment of your current state before you respond. We help you understand the strength of your position and identify what needs addressing. This kind of structured analysis makes it easier for your legal team to do its job.",
  },
];

const asaChecks = [
  "The claim is misleading",
  "It omits material information",
  "The basis of the claim is clear",
  "It can be substantiated",
];

const audience = [
  "Businesses that have received a complaint, challenge, or informal regulatory contact.",
  "Organisations facing active CMA or ASA scrutiny, especially in fashion, energy, FMCG, financial services, and travel.",
  "Brands preparing to publish or refresh sustainability claims, reports, or communications.",
  "Companies whose marketing and ESG functions are not currently using a unified governance framework.",
  "Businesses that have never formally assessed whether their current environmental claims meet the CMA and ASA/CAP standards.",
];

const RegulatoryResponseReadiness = () => (
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
          Regulatory Response Readiness
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-4 text-brand-green-dark font-heading font-semibold text-lg lg:text-xl max-w-3xl"
        >
          By the Time a Regulator Makes Contact, the Review Has Already Begun
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 space-y-4 text-brand-grey text-base lg:text-lg max-w-3xl leading-relaxed"
        >
          <p>
            ASA complaints, CMA enquiries, consumer group challenges, journalists submitting questions
            about sustainability; these are not the moments to start thinking about your evidence. These
            are opportunities to show the high quality of your preparation.
          </p>
          <p>
            Regulators will rarely give you a heads-up. They usually arrive, having reviewed your public
            statements, identified the claims that concern them, and formed a preliminary view of why
            those claims require scrutiny.
          </p>
          <p>
            Your response is measured against a framework you may not have been applying when the claim
            was first published.
          </p>
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 text-xl lg:text-2xl font-heading font-semibold text-brand-black max-w-3xl leading-snug border-l-2 border-brand-green-dark pl-5"
        >
          This gap is what could get you in trouble. We exist to close it.
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
            Book a Regulatory Readiness Review
            <ArrowUpRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </motion.div>
      </div>
    </section>

    <PageFeatureImage src={featureImg} alt="Institutional regulatory corridor" caption="Prepared before the letter arrives — because that's the only window when preparation still counts." />

    {/* THE STANDARD */}
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
            The Standard
          </p>
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-brand-black leading-tight">
            What Regulatory Readiness Actually Means
          </h2>
          <div className="mt-5 space-y-4 text-brand-grey text-base lg:text-lg leading-relaxed">
            <p>
              Readiness is not a crisis communication plan or a legal retainer. It is an ongoing state of
              knowing, at all times, that all published claims are defensible and that if someone with
              regulatory authority decided to look closely, they would find an organisation that takes its
              obligations seriously.
            </p>
            <p>
              For that, you need three things that most businesses do not prepare simultaneously:
            </p>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5 lg:gap-6">
          {readinessPillars.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="p-7 lg:p-8 rounded-2xl border border-brand-black/[0.08] hover:border-brand-green-dark/40 hover:shadow-[0_20px_50px_-20px_rgba(0,0,0,0.12)] transition-all duration-300"
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

    {/* WHAT'S INCLUDED */}
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
            What's Included
          </p>
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-brand-black leading-tight">
            What This Service Covers
          </h2>
          <p className="mt-5 text-brand-grey text-base lg:text-lg leading-relaxed">
            This service is not legal representation but regulatory groundwork that makes everything else,
            including legal advice, more effective.
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
              className="p-7 lg:p-8 rounded-2xl bg-brand-white border border-brand-black/[0.06] hover:border-brand-green-dark/40 hover:shadow-[0_20px_50px_-20px_rgba(0,0,0,0.12)] transition-all duration-300"
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

    {/* THE REGULATOR'S LENS */}
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
              The Regulator's Lens
            </p>
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-brand-white leading-tight max-w-2xl">
              The Regulator's Lens
            </h2>
            <p className="mt-5 text-brand-white/80 text-base lg:text-lg leading-relaxed max-w-3xl">
              It helps to know what kind of scrutiny regulators apply and how we use it to review your
              business.
            </p>

            <div className="mt-10 grid md:grid-cols-2 gap-5 lg:gap-6">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5 }}
                className="p-7 lg:p-8 rounded-2xl bg-brand-white/[0.06] border border-brand-white/10 backdrop-blur-sm"
              >
                <h3 className="text-xl lg:text-2xl font-heading font-bold text-brand-white leading-snug">
                  ASA
                </h3>
                <p className="mt-3 text-brand-white/80 text-[15px] lg:text-base leading-relaxed">
                  The ASA assesses complaints using the CAP Code. For environmental claims, the core
                  questions are whether:
                </p>
                <ul className="mt-4 space-y-2.5">
                  {asaChecks.map((c) => (
                    <li
                      key={c}
                      className="flex gap-3 text-brand-white/85 text-[15px] lg:text-base leading-relaxed"
                    >
                      <span className="shrink-0 mt-2 w-1.5 h-1.5 rounded-full bg-brand-green-light" />
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-5 text-brand-white/80 text-[15px] lg:text-base leading-relaxed">
                  The adjudications are published and remain on your permanent record. They are used to
                  set precedents that other organisations in the same space watch closely.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: 0.08 }}
                className="p-7 lg:p-8 rounded-2xl bg-brand-white/[0.06] border border-brand-white/10 backdrop-blur-sm"
              >
                <h3 className="text-xl lg:text-2xl font-heading font-bold text-brand-white leading-snug">
                  CMA
                </h3>
                <p className="mt-3 text-brand-white/80 text-[15px] lg:text-base leading-relaxed">
                  The CMA applies consumer protection law. Its Green Claims Code sets out six principles
                  for businesses to follow. The CMA has shown, through sector-wide reviews of fashion,
                  travel, and FMCG, that it is prepared to investigate entire categories, not just
                  individual operations. If you are a sector under review, the time to act is now.
                </p>
              </motion.div>
            </div>

            <p className="mt-10 text-lg lg:text-xl font-heading font-semibold text-brand-white leading-snug border-l-2 border-brand-green-light pl-5">
              Both regulators operate under the basic assumption that when you make public claims, you
              have done the work to support them. If that assumption is proven wrong, the question is
              whether this was a failure in processes or intentional. That distinction may matter, but
              neither version ends well.
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
              The Case For Acting Now
            </h2>
            <p className="mt-6 text-brand-white/85 text-base lg:text-lg leading-relaxed">
              Regulatory investigations drain resources, damage reputations, and are largely avoidable.
              Businesses that perform well under scrutiny are not necessarily the cleanest ones, but those
              with evidence to support claims and strong internal governance to defend published material.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-5">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 px-6 lg:px-8 py-3.5 lg:py-4 rounded-full bg-brand-green-light text-brand-black font-semibold text-sm lg:text-base hover:bg-brand-white transition-colors duration-300"
              >
                Book a Regulatory Readiness Review
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

export default RegulatoryResponseReadiness;
