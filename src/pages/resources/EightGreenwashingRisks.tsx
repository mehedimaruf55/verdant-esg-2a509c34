import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight, Search, ShieldCheck, AlertTriangle } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import leafImg from "@/assets/leaf.png";

const timeline = [
  {
    date: "April 2025",
    body: "The Digital Markets, Competition, and Consumers Act 2024 went into effect. Under the new rules, the Competition and Markets Authority can fine businesses up to 10% of their global annual turnover for misleading environmental claims, without a court proceeding.",
  },
  {
    date: "January 2026",
    body: "The CMA published its guidance on how green claims liability works in a supply chain. They expect every business that repeats, relies on, or disseminates an environmental claim to verify it.",
  },
  {
    date: "February 2026",
    body: "The ASA upheld complaints against businesses using the words sustainable, eco, and biodegradable without adequate substantiation. These are common on websites, packaging, and marketing materials of thousands of brands right now.",
  },
];

const greenClaimExamples = [
  "Product descriptions referencing recycled content, natural materials, or responsible sourcing.",
  "Campaign language that implies environmental benefit through words, images, or overall impression.",
  "Packaging that uses green imagery, leaf symbols, or earth tones in a way that implies environmental friendliness.",
  "Website copy that describes a company's sustainability commitments, targets, or progress.",
  "ESG and impact reports making claims about environmental performance, supply chains, or carbon.",
  "Social media content referencing climate, nature, or responsible business.",
  "Investor communications describing a company's ESG credentials.",
  "Tender responses asserting sustainability standards.",
];

const cmaPrinciples = [
  {
    title: "Be Truthful and Accurate",
    body: "Claims must reflect current reality, not targets, intentions, or partially-verified performance.",
  },
  {
    title: "Be Clear and Unambiguous",
    body: "Claims must be understandable to the average consumer without specialist knowledge. Vagueness is a risk, not a defence.",
  },
  {
    title: "Don't Omit or Hide Material Information",
    body: "A claim that is accurate but incomplete (presents a benefit while concealing a significant cost elsewhere) may be considered misleading by omission.",
  },
  {
    title: "Only Make Fair and Meaningful Comparisons",
    body: "Comparative claims must be based on a defined, equivalent, and verifiable basis of comparison.",
  },
  {
    title: "You Must Account for The Full Life Cycle",
    body: "Claims must reflect the full environmental picture across the product's entire life cycle, not just the most beneficial stages.",
  },
  {
    title: "Claims Must Be Substantiated",
    body: "Evidence must be present at the point a claim is made. It must be verifiable, current, and specific to the claim being made.",
  },
];

const risks = [
  {
    id: "risk-1",
    title: "Using Absolute Claims Without Absolute Proof",
    body: "Absolute claims, those without limitation, qualification, or defined scope, require absolute proof. Most businesses cannot clear this bar, and regulators are aware. The ASA has consistently upheld complaints against absolute environmental claims that don't have the evidence to back them up.",
    check:
      'For every environmental claim on your website or marketing material, ask: What is this asserting, and do we have the evidence that would support it in an absolute form? If the answer is "not quite," then the claim is not absolute in substance, and its language should reflect that.',
    safer:
      "Scope the claim to make it about a specific material, product, or verified outcome. This makes it defensible and cannot be dismantled easily.",
  },
  {
    id: "risk-2",
    title: "Publishing Carbon Neutral or Net Zero Claims Without the Supporting Infrastructure",
    body: "Carbon neutrality and net zero are precise scientific concepts with technical requirements. They are routinely used by businesses that haven't met those requirements. A carbon neutral claim requires a defined organisational or product boundary, verified emissions baseline on all materials, credible and disclosed offsetting or reduction methodology, third-party verification, and honest accounting for residual emissions. Net zero claims require alignment with a recognised science-based framework and are not a synonym for 'we offset our emissions.' This category of claim is under active regulatory attention.",
    check:
      "For every carbon or net zero claim — define the boundaries of the claim · define its scope · provide verification · provide calculation methodology · check the status of offsets used · check whether it's about the current status or a future target.",
    safer:
      'Scope the claim precisely. You can defend saying "Our UK manufacturing operations achieved carbon neutrality in 2023, verified by [named third-party] against [named standard]." It is much harder to defend "We are a carbon neutral company."',
  },
  {
    id: "risk-3",
    title: "Misleading by Omission",
    body: "The CMA's third principle about omission of material information addresses a pattern reported by regulators regularly. A genuine environmental benefit is accurately highlighted, while high environmental costs elsewhere are left out. The point is not about disclosing everything negative, but ensuring the claim does not present a partial picture as if it were a complete one.",
    check:
      "Is there material information about the product's overall environmental status that a consumer with environmental concerns would want to know? Does the claim, as presented currently, give them this information?",
    safer: "Contextualise single-attribute claims and acknowledge limitations.",
  },
  {
    id: "risk-4",
    title: "Comparative Claims Without a Defined Basis",
    body: "Comparative claims are common and commercially useful. They showcase a product's strengths relative to something else consumers might find relatable. However, they are some of the most challenged claims because businesses often make them without defining what the comparison actually is. The CMA requires that they be fair and meaningful, while the ASA requires the basis of comparison to be clear. Claiming that one product is greener than another without specifying what is being compared, its scope, or measure, provides a consumer with no basis to judge whether the comparison is valid.",
    check:
      "What is the specific basis of comparison? · What is the reference product or service being compared against? · Is the comparison fair — is it comparing like with like? · Is the basis of the comparison clearly communicated to the consumer?",
    safer:
      "Define the comparison explicitly. Saying something is a 'greener choice' is not defensible. \"30% lower carbon emissions per unit than our 2020 product, based on a verified lifecycle assessment from cradle to gate\" is a defensible comparative claim.",
  },
  {
    id: "risk-5",
    title: "Sourcing Claims That Outpace Evidence",
    body: "Supply chain claims are some of the most exposed because businesses may make claims whose evidence sits, at least partly, outside their control. Businesses can no longer rely blindly on supplier assurances. They are expected to take reasonable steps to verify the claims. Claims built on supplier self-declaration, without independent verification, certifications, or audits, are not substantiated.",
    check:
      "What specific standard or criteria does a claim refer to? · Who verified compliance with that standard and when? · Does the verification cover the specific product line the claim describes? · Is the underlying supplier information current? · What happens to this claim if the supplier relationship changes?",
    safer: "Name the standards, disclose verification, and scope the claim.",
  },
  {
    id: "risk-6",
    title: "Future Commitments Presented as Current Achievements",
    body: "When consumers read marketing copy, they may not always be able to tell what is a current environmental achievement and what is a future target. Claims that appear to imply current performance without evidence are considered misleading and should be corrected to reflect current reality.",
    check:
      "All claims written in the present tense should undergo review to ensure the language matches reality. The context surrounding it, such as images and graphics, should match the claim.",
    safer:
      'Your timeframes need to be clear. For example: "We reduced our Scope 1 and 2 emissions by 42% between 2019 and 2023, verified by [named third-party]. Our target is to reach net zero across our full value chain by 2030, aligned with the Science Based Targets initiative."',
  },
  {
    id: "risk-7",
    title: "Misapplied Certifications and Accreditations",
    body: "Businesses may sometimes use a certification badge or logo prominently on marketing copy, websites, packaging, etc. If this is done in a way that implies it covers the entire supply chain without evidence, it creates exposure. While third-party certifications are legitimate, they have to be used accurately. Common risks include: using a certificate that applies to one process or component across an entire range · using a business-level accreditation on product-level claims · using certification that is pending renewal, expired, or held by a supplier instead of the brand.",
    check:
      "For every certification, logo, or accreditation, ask: What exactly does it cover — an ingredient, process, site, product, or organisation? · Is it currently valid? · Is it applied in a manner consistent with the certification body's terms? · Does its placement and prominence suggest a scope it does not have?",
    safer:
      "Use certifications precisely. If a certification only covers 60% of your ingredients by volume, say so. The certification is a positive signal that can add credibility, instead of risk, to a brand when it is scoped accurately.",
  },
];

const substantiationFile = [
  {
    title: "The claim itself",
    body: "Including the exact language as published, across every channel.",
  },
  {
    title: "The evidence documents",
    body: "LCAs, third-party certificates, independent audit reports, verified carbon calculations, procurement records, supplier documentation, etc. They need to be current at the time of publishing the claim.",
  },
  {
    title: "The evidence scope note",
    body: "Explains what the evidence covers, how it supports the specific claim, and where any limitations exist.",
  },
  {
    title: "The claims approval record",
    body: "Who reviewed the claim, what checks were conducted, the conclusions, and the sign-off date.",
  },
  {
    title: "The review schedule",
    body: "When the evidence needs a refresh, when claims are due for re-review, and who is responsible for running this process.",
  },
];

const escalateList = [
  "Any claim that uses words like carbon neutral, net zero, climate positive, or equivalents.",
  "Any absolute claim about a product, range, or overall benefits.",
  "Any claim based on supplier-provided information with no independent verification in the last 12 months.",
  "Any comparative claim where the basis for comparison is not well established.",
  "Any claim being made for the first time, where a previous review may not apply.",
  "Any claim that has been challenged, identified as problematic, or complained about.",
  "Any claim published in connection with a significant commercial event.",
];

const tocItems = [
  { id: "before", label: "Before You Read" },
  { id: "green-claim", label: "What is a Green Claim?" },
  { id: "cma-principles", label: "The Six CMA Principles" },
  ...risks.map((r, i) => ({
    id: r.id,
    label: `Risk ${String(i + 1).padStart(2, "0")} — ${r.title}`,
  })),
  { id: "risk-8", label: "Risk 08 — Coming Soon" },
  { id: "substantiation", label: "Building a Substantiation File" },
  { id: "escalate", label: "When to Pause & Escalate" },
  { id: "final", label: "A Final Note" },
];

const EightGreenwashingRisks = () => {
  const [activeId, setActiveId] = useState<string>(tocItems[0].id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveId(e.target.id);
        });
      },
      { rootMargin: "-30% 0px -60% 0px", threshold: 0 }
    );
    tocItems.forEach((t) => {
      const el = document.getElementById(t.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <PageLayout>
      {/* HERO */}
      <section className="relative pt-36 lg:pt-44 pb-16 lg:pb-20 overflow-hidden bg-gradient-to-br from-[hsl(154,40%,96%)] via-white to-[hsl(150,30%,94%)]">
        <img
          src={leafImg}
          alt=""
          className="absolute -right-20 -top-10 w-[280px] lg:w-[420px] opacity-[0.06] pointer-events-none select-none"
        />
        <div className="max-w-4xl mx-auto px-5 lg:px-10 relative z-10">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-brand-green-dark font-bold text-xs uppercase tracking-[0.16em] mb-4"
          >
            Guide
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl lg:text-[2.75rem] font-heading font-bold text-brand-black leading-[1.15]"
          >
            8 Greenwashing Risks Every Brand Should Check Before Publishing a Sustainability Claim
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-6 text-brand-grey text-base lg:text-lg leading-relaxed max-w-2xl"
          >
            A Practical Guide to Green Claims Compliance Under the CMA Green Claims Code and ASA/CAP
            Standards
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-8 pt-6 border-t border-brand-black/10 text-brand-grey/80 text-sm"
          >
            Published by <span className="text-brand-black font-semibold">Verdant ESG</span> — Green
            Claims and Regulatory Risk Consultancy
          </motion.p>
        </div>
      </section>

      {/* ARTICLE BODY WITH TOC */}
      <section className="py-16 lg:py-24 bg-brand-white">
        <div className="max-w-6xl mx-auto px-5 lg:px-10 grid lg:grid-cols-[220px_1fr] gap-12 lg:gap-16">
          {/* TOC */}
          <aside className="hidden lg:block">
            <div className="sticky top-28">
              <p className="text-brand-green-dark font-bold text-[11px] uppercase tracking-[0.16em] mb-4">
                In this guide
              </p>
              <nav>
                <ul className="space-y-1.5 border-l border-brand-black/10">
                  {tocItems.map((t) => {
                    const active = activeId === t.id;
                    return (
                      <li key={t.id}>
                        <a
                          href={`#${t.id}`}
                          className={`block pl-4 -ml-px py-1.5 text-[13px] leading-snug border-l-2 transition-colors ${
                            active
                              ? "border-brand-green-dark text-brand-black font-semibold"
                              : "border-transparent text-brand-grey hover:text-brand-black"
                          }`}
                        >
                          {t.label}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </nav>
            </div>
          </aside>

          {/* CONTENT */}
          <article className="max-w-[720px] w-full">
            {/* Before You Read */}
            <section id="before" className="scroll-mt-28">
              <h2 className="text-2xl lg:text-3xl font-heading font-bold text-brand-black leading-tight">
                Before You Read This Guide
              </h2>
              <ol className="mt-8 relative border-l border-brand-black/10 space-y-8 pl-8">
                {timeline.map((t) => (
                  <li key={t.date} className="relative">
                    <span className="absolute -left-[35px] top-1 w-3 h-3 rounded-full bg-brand-green-dark ring-4 ring-brand-white" />
                    <p className="font-heading font-bold text-brand-green-dark text-sm tracking-wide">
                      {t.date}
                    </p>
                    <p className="mt-2 text-brand-grey text-[16px] lg:text-[17px] leading-[1.75]">
                      {t.body}
                    </p>
                  </li>
                ))}
              </ol>
              <div className="mt-10 space-y-5 text-brand-grey text-[16px] lg:text-[17px] leading-[1.8]">
                <p>
                  As regulators evolve to account for our changing understanding of environmental claims,
                  many internal claims review processes fall behind.
                </p>
                <p>
                  We have identified eight of the most common and consequential greenwashing risks we
                  find in our audits. While it may not constitute a comprehensive framework, it can
                  inform how you set up a well-designed and supported internal claims process. It
                  highlights where exposure is most common and what to watch out for before publishing
                  your next claim.
                </p>
              </div>
              <p className="mt-8 text-lg lg:text-xl font-heading font-semibold text-brand-black leading-snug border-l-2 border-brand-green-dark pl-5">
                Read it as if a regulator wrote it. Because the framework it is built on is the exact
                same one regulators use.
              </p>
            </section>

            {/* What is a Green Claim */}
            <section id="green-claim" className="mt-20 lg:mt-24 scroll-mt-28">
              <h2 className="text-2xl lg:text-3xl font-heading font-bold text-brand-black leading-tight">
                What is a Green Claim?
              </h2>
              <p className="mt-5 text-brand-grey text-[16px] lg:text-[17px] leading-[1.8]">
                Before risk assessment, it is worth going over the definition to clarify its scope.
              </p>
              <div className="mt-8 relative rounded-2xl bg-[hsl(150,20%,97%)] border-l-4 border-brand-green-dark p-6 lg:p-8">
                <p className="text-brand-black text-[16px] lg:text-[17px] leading-[1.75] italic">
                  A green claim is a statement, assertion, symbol, logo, graphic, or presentation,
                  explicit or implied, that suggests a product, service, process, brand, or
                  organization has a positive or neutral environmental impact, or a less negative
                  environmental impact than an alternative.
                </p>
              </div>
              <p className="mt-4 text-sm text-brand-grey/70 italic">Quite the mouthful, isn't it?</p>
              <p className="mt-8 text-brand-grey text-[16px] lg:text-[17px] leading-[1.8]">
                Green claims are not limited to headline sustainability statements. They also include:
              </p>
              <ul className="mt-6 space-y-3">
                {greenClaimExamples.map((item) => (
                  <li
                    key={item}
                    className="flex gap-4 text-brand-grey text-[15px] lg:text-[16px] leading-[1.75]"
                  >
                    <span className="shrink-0 mt-[10px] w-1.5 h-1.5 rounded-full bg-brand-green-dark" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-8 text-brand-grey text-[16px] lg:text-[17px] leading-[1.8]">
                If it creates an impression, in any form or channel, that a product, service, or
                business is in some way better for the environment, it is a green claim, and they are
                all assessed using the same standard.
              </p>
            </section>

            {/* CMA Principles */}
            <section id="cma-principles" className="mt-20 lg:mt-24 scroll-mt-28">
              <h2 className="text-2xl lg:text-3xl font-heading font-bold text-brand-black leading-tight">
                The Six CMA Principles Behind Your Risk
              </h2>
              <p className="mt-5 text-brand-grey text-[16px] lg:text-[17px] leading-[1.8]">
                The CMA Green Claims Code sets out six principles that every environmental claim is
                expected to satisfy. Every risk in this guide points back to one or more of these.
                Understanding them is how you build a solid foundation for your internal green claims
                review process.
              </p>
              <div className="mt-8 grid sm:grid-cols-2 gap-4">
                {cmaPrinciples.map((p, i) => (
                  <div
                    key={p.title}
                    className="p-6 rounded-2xl border border-brand-black/[0.08] hover:border-brand-green-dark/40 transition-colors"
                  >
                    <span className="font-heading font-bold text-xl text-brand-green-dark">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="mt-3 text-[16px] lg:text-[17px] font-heading font-bold text-brand-black leading-snug">
                      {p.title}
                    </h3>
                    <p className="mt-2 text-brand-grey text-[14px] lg:text-[15px] leading-[1.7]">
                      {p.body}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* THE RISKS */}
            {risks.map((r, i) => (
              <section key={r.id} id={r.id} className="mt-20 lg:mt-24 scroll-mt-28">
                <p className="font-heading font-bold text-brand-green-dark text-sm tracking-[0.16em] uppercase">
                  Risk {String(i + 1).padStart(2, "0")}
                </p>
                <h2 className="mt-3 text-2xl lg:text-[1.85rem] font-heading font-bold text-brand-black leading-tight">
                  {r.title}
                </h2>
                <p className="mt-5 text-brand-grey text-[16px] lg:text-[17px] leading-[1.8]">
                  {r.body}
                </p>

                <div className="mt-8 grid md:grid-cols-2 gap-4">
                  <div className="p-6 rounded-2xl bg-[hsl(150,20%,97%)] border border-brand-black/[0.06]">
                    <div className="flex items-center gap-2.5">
                      <span className="w-8 h-8 rounded-full bg-brand-green-light/50 flex items-center justify-center text-brand-green-dark">
                        <Search size={15} />
                      </span>
                      <p className="text-brand-green-dark font-bold text-[11px] uppercase tracking-[0.14em]">
                        What to check
                      </p>
                    </div>
                    <p className="mt-4 text-brand-black text-[15px] lg:text-[16px] leading-[1.75]">
                      {r.check}
                    </p>
                  </div>
                  <div className="p-6 rounded-2xl bg-brand-green-dark text-brand-white">
                    <div className="flex items-center gap-2.5">
                      <span className="w-8 h-8 rounded-full bg-brand-white/10 flex items-center justify-center text-brand-green-light">
                        <ShieldCheck size={15} />
                      </span>
                      <p className="text-brand-green-light font-bold text-[11px] uppercase tracking-[0.14em]">
                        The safer approach
                      </p>
                    </div>
                    <p className="mt-4 text-brand-white/90 text-[15px] lg:text-[16px] leading-[1.75]">
                      {r.safer}
                    </p>
                  </div>
                </div>
              </section>
            ))}

            {/* RISK 8 — Missing placeholder */}
            <section id="risk-8" className="mt-20 lg:mt-24 scroll-mt-28">
              <p className="font-heading font-bold text-brand-green-dark text-sm tracking-[0.16em] uppercase">
                Risk 08
              </p>
              <h2 className="mt-3 text-2xl lg:text-[1.85rem] font-heading font-bold text-brand-black leading-tight">
                Coming Soon
              </h2>
              <div className="mt-6 rounded-2xl border-2 border-dashed border-brand-black/15 p-6 lg:p-8 flex gap-4 items-start">
                <span className="shrink-0 w-10 h-10 rounded-full bg-brand-green-light/40 flex items-center justify-center text-brand-green-dark">
                  <AlertTriangle size={18} />
                </span>
                <div>
                  <p className="text-brand-black font-heading font-semibold text-[16px] lg:text-[17px]">
                    The eighth risk is being finalised.
                  </p>
                  <p className="mt-2 text-brand-grey text-[15px] lg:text-[16px] leading-[1.75]">
                    We're preparing the analysis and evidence checks for this section and will publish
                    it here shortly. In the meantime, the seven risks above cover the most common
                    exposures we see in audits.
                  </p>
                </div>
              </div>
            </section>

            {/* Substantiation */}
            <section id="substantiation" className="mt-20 lg:mt-24 scroll-mt-28">
              <h2 className="text-2xl lg:text-3xl font-heading font-bold text-brand-black leading-tight">
                How To Build a Substantiation File
              </h2>
              <p className="mt-5 text-brand-grey text-[16px] lg:text-[17px] leading-[1.8]">
                Your substantiation file forms the central evidence repository that supports a specific
                environmental claim. This is what you hand over when a regulator asks you to demonstrate
                that a claim was accurate at the time of publishing. It needs to include:
              </p>
              <ol className="mt-8 space-y-4">
                {substantiationFile.map((item, i) => (
                  <li
                    key={item.title}
                    className="flex gap-5 p-5 lg:p-6 rounded-xl bg-[hsl(150,20%,97%)] border border-brand-black/[0.06]"
                  >
                    <span className="shrink-0 font-heading font-bold text-brand-green-dark text-lg leading-none pt-1">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <p className="font-heading font-bold text-brand-black text-[16px] lg:text-[17px]">
                        {item.title}
                      </p>
                      <p className="mt-1 text-brand-grey text-[15px] lg:text-[16px] leading-[1.75]">
                        {item.body}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
              <p className="mt-8 text-brand-grey text-[16px] lg:text-[17px] leading-[1.8]">
                This file is what supports your claims and makes them defensible to a regulator.
              </p>
            </section>

            {/* Escalate — green gradient band */}
            <section id="escalate" className="mt-20 lg:mt-24 scroll-mt-28">
              <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-green-dark via-[hsl(154,45%,22%)] to-[hsl(154,50%,14%)] p-8 lg:p-12">
                <img
                  src={leafImg}
                  alt=""
                  className="absolute -right-12 -bottom-12 w-[240px] lg:w-[320px] opacity-[0.08] pointer-events-none select-none"
                />
                <div className="relative z-10">
                  <h2 className="text-2xl lg:text-3xl font-heading font-bold text-brand-white leading-tight">
                    When To Pause Publication and Escalate
                  </h2>
                  <p className="mt-5 text-brand-white/85 text-[16px] lg:text-[17px] leading-[1.8]">
                    Sometimes, you might need to pause publication and not go live until a specialist
                    has reviewed the claims. Here are some specific circumstances when that is
                    advisable:
                  </p>
                  <ul className="mt-8 space-y-3">
                    {escalateList.map((item, i) => (
                      <li
                        key={i}
                        className="flex gap-4 p-4 rounded-xl bg-brand-white/[0.06] border border-brand-white/10 backdrop-blur-sm"
                      >
                        <span className="shrink-0 font-heading font-bold text-brand-green-light text-sm leading-none pt-1">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="text-brand-white/90 text-[15px] lg:text-[16px] leading-[1.7]">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-8 text-lg lg:text-xl font-heading font-semibold text-brand-white leading-snug border-l-2 border-brand-green-light pl-5">
                    In each of these cases, the cost of pausing to get it right is a fraction of the
                    cost of publishing and having no defence when the regulator comes.
                  </p>
                </div>
              </div>
            </section>

            {/* Final CTA */}
            <section id="final" className="mt-20 lg:mt-24 scroll-mt-28">
              <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-green-dark via-[hsl(154,45%,22%)] to-[hsl(154,50%,14%)] p-8 lg:p-12">
                <img
                  src={leafImg}
                  alt=""
                  className="absolute -right-12 -bottom-12 w-[240px] lg:w-[320px] opacity-[0.08] pointer-events-none select-none"
                />
                <div className="relative z-10">
                  <h2 className="text-2xl lg:text-4xl font-heading font-bold text-brand-white leading-tight">
                    A Final Note
                  </h2>
                  <div className="mt-6 space-y-4 text-brand-white/85 text-[16px] lg:text-[17px] leading-[1.8]">
                    <p>
                      This guide is a starting point. It covers eight areas of risk we most commonly
                      identify in our audits. However, every business's exposure is specific to its
                      claims, evidence, processes, and sector.
                    </p>
                    <p>
                      If reading this guide has raised questions about your current position, the next
                      step is a structured review. Consider a professional audit of your claims,
                      evidence, and internal approval process against the current CMA and ASA/CAP
                      standards.
                    </p>
                  </div>
                  <p className="mt-6 text-lg lg:text-xl font-heading font-semibold text-brand-white leading-snug border-l-2 border-brand-green-light pl-5">
                    That is what we do.
                  </p>
                  <div className="mt-8 flex flex-wrap items-center gap-4">
                    <Link
                      to="/contact"
                      className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-brand-green-light text-brand-black font-semibold text-sm lg:text-base hover:bg-brand-white transition-colors"
                    >
                      Book a Green Claims Risk Consultation
                      <ArrowUpRight
                        size={18}
                        className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </Link>
                    <Link
                      to="/services/ongoing-compliance-support"
                      className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-brand-white/25 text-brand-white font-semibold text-sm lg:text-base hover:border-brand-white hover:bg-brand-white/5 transition-colors"
                    >
                      Find Out About Our Subscription Service
                      <ArrowUpRight
                        size={18}
                        className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </section>

            {/* Disclaimer */}
            <p className="mt-16 pt-8 border-t border-brand-black/10 text-brand-grey/70 text-sm leading-relaxed italic">
              This guide is produced for general information purposes. It does not constitute legal
              advice. Businesses with specific compliance concerns should seek professional advice
              tailored to their circumstances.
            </p>
          </article>
        </div>
      </section>
    </PageLayout>
  );
};

export default EightGreenwashingRisks;
