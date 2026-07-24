import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight, MessageSquare, Search, FileCheck, Link2, ShieldCheck } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import PageFeatureImage from "@/components/PageFeatureImage";
import leafImg from "@/assets/leaf.png";
import featureImg from "@/assets/services-hero.jpg";

const systemItems = [
  { icon: MessageSquare, label: "The language you use" },
  { icon: Search, label: "How your claims are interpreted" },
  { icon: FileCheck, label: "The evidence supporting them" },
  { icon: Link2, label: "What's happening across your supply chain" },
  { icon: ShieldCheck, label: "Your internal governance and processes" },
];

const solutions = [
  {
    title: "Green Claims Risk Audit",
    subtitle: "Find Weakpoints In Your Communication Ecosystem",
    body: "Focusing on public-facing communication such as websites, marketing campaigns, packaging, and public disclosures, we conduct a forensic audit of your claims. We do this to stress-test your current system and expose what regulators would punish you for. Our approach is guided by the CMA's Six-Point Test to identify language risks, evidentiary gaps, and misleading claims (lack of context or omission).",
    href: "/services/green-claims-risk-audit",
  },
  {
    title: "Ongoing Compliance Support",
    subtitle: "Reduce Risk on Fast-Moving Brands",
    body: "Environmental claims are not a 'one-and-done.' They evolve constantly as new campaigns launch, reports get updates, messages shift, and communications happen daily. Our subscription advisory service gives you ongoing support to keep up with that pace. That involves reviewing claims before they go public, shoring up the effectiveness of internal systems, and ensuring evidence is current and sufficient, in keeping with the brand's pace.",
    href: "/services/ongoing-compliance-support",
  },
  {
    title: "Supply Chain Transparency Review",
    subtitle: "Connecting What You Say to What Actually Happens",
    body: "Strong environmental claims depend on what's happening behind the scenes. That includes supplier data, sourcing practices, and third-party realities. When that information is incomplete and hard to verify, it becomes harder to make those claims confidently. We help you connect the dots by assessing how well your marketing claims match your supply chain realities by identifying gaps in traceability, sourcing, and supporting documentation.",
    href: "/services/supply-chain-transparency-review",
  },
  {
    title: "Regulatory Response Readiness",
    subtitle: "Prepare Before Scrutiny Arrives",
    body: "Regulators will knock on your door for a variety of reasons: a complaint, a competitor challenge, public visibility, etc. Your organisation should always be ready to respond to anything of this nature quickly and clearly. We help businesses assess exposure, review existing claims, and prepare evidence and internal documentation to support any response they have to give.",
    href: "/services/regulatory-response-readiness",
  },
  {
    title: "AI-Assisted Green Claims Screening",
    subtitle: "Built by Regulatory Specialists. Trained on the Right Risks.",
    body: "Environmental claims are created quickly, across marketing, agency briefs, product copy, social, and reports. Our screening tool processes that language fast, flags the specific indicators that invite regulatory scrutiny, and produces a report on what to review and why. It is the first pass, not a replacement for structured audit or human judgement.",
    href: "/services/ai-assisted-green-claims-screening",
    badge: "TOOL",
  },
];

const Services = () => (
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
          Services
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-3xl lg:text-5xl font-heading font-bold text-brand-black leading-tight max-w-4xl"
        >
          Master Internal Control to Prevent Environmental Claims Risk
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-6 space-y-4 text-brand-grey text-base lg:text-lg max-w-3xl leading-relaxed"
        >
          <p>
            Your marketing campaigns, websites, packaging, reports, disclosures, and supply chain realities
            are all surfaces that can expose you to liability for making green claims.
          </p>
          <p>
            Under the CMA and the ASA/CAP, you cannot make unclear, unqualified, or unsupported claims.
            Doing so puts your organisation in the regulatory crosshairs.
          </p>
          <p>
            Verdant ESG provides structured, pre-publication review and governance support to find and
            eliminate exposure before it becomes a liability.
          </p>
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 text-xl lg:text-2xl font-heading font-semibold text-brand-black max-w-3xl leading-snug border-l-2 border-brand-green-dark pl-5"
        >
          We take your communications from aspirational to defensible.
        </motion.p>
      </div>
    </section>

    <PageFeatureImage src={featureImg} alt="Reviewing marketing and sustainability materials" caption="From aspirational language to defensible communication — reviewed with the standards regulators apply." />

    {/* WHERE IS THE RISK */}
    <section className="py-20 lg:py-28 bg-brand-white">
      <div className="max-w-4xl mx-auto px-5 lg:px-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-3xl lg:text-4xl font-heading font-bold text-brand-black leading-tight"
        >
          Where is the Risk?
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-6 space-y-5 text-brand-grey text-base lg:text-lg leading-relaxed"
        >
          <p>
            In many organisations, environmental claims don't necessarily come from a centralised command
            centre. Marketing drives the message, ESG holds the technical data, lawyers review for high-level
            risk, and procurers manage the supply chain reality.
          </p>
          <p>
            Without a Common Regulatory Framework, fragmentation is bound to occur, creating gaps where
            public statements don't match the available evidence.
          </p>
          <p className="text-brand-black font-medium">Our services are designed to close that gap.</p>
        </motion.div>
      </div>
    </section>

    {/* OUR APPROACH */}
    <section className="py-20 lg:py-28 bg-[hsl(150,20%,97%)] border-y border-brand-black/[0.06]">
      <div className="max-w-6xl mx-auto px-5 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-5">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5 }}
              className="text-brand-green-dark font-bold text-xs uppercase tracking-[0.16em] mb-4"
            >
              Our Approach
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
              className="text-3xl lg:text-4xl font-heading font-bold text-brand-black leading-tight"
            >
              From Claims to Control
            </motion.h2>
          </div>
          <div className="lg:col-span-7">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-brand-grey text-base lg:text-lg leading-relaxed"
            >
              We do not look at environmental claims in isolation. Instead, we see them as part of a wider
              system that needs to work together seamlessly. That includes:
            </motion.p>

            <ul className="mt-8 space-y-3">
              {systemItems.map((item, i) => (
                <motion.li
                  key={item.label}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  className="flex items-center gap-4 p-4 lg:p-5 rounded-xl bg-brand-white border border-brand-black/[0.06]"
                >
                  <span className="shrink-0 w-10 h-10 rounded-full bg-brand-green-light/40 flex items-center justify-center text-brand-green-dark">
                    <item.icon size={18} />
                  </span>
                  <span className="text-brand-black font-medium text-base lg:text-[17px]">{item.label}</span>
                </motion.li>
              ))}
            </ul>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-8 text-brand-grey text-base lg:text-lg leading-relaxed"
            >
              Our services are designed to step in at the right points across this system to maintain
              alignment. Your claims can go beyond being just well-intentioned and communicate clearly,
              consistently, and defensibly.
            </motion.p>
          </div>
        </div>
      </div>
    </section>

    {/* THE SOLUTIONS */}
    <section className="py-20 lg:py-28 bg-brand-white">
      <div className="max-w-6xl mx-auto px-5 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-12 lg:mb-16"
        >
          <p className="text-brand-green-dark font-bold text-xs uppercase tracking-[0.16em] mb-4">
            The Solutions
          </p>
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-brand-black leading-tight">
            Five services. One coherent framework.
          </h2>
        </motion.div>

        <div className="space-y-5 lg:space-y-6">
          {solutions.map((s, i) => (
            <motion.div
              key={s.href}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
            >
              <Link
                to={s.href}
                className="group block p-8 lg:p-10 rounded-2xl lg:rounded-[1.75rem] border border-brand-black/[0.08] bg-brand-white hover:border-brand-green-dark/40 hover:shadow-[0_20px_50px_-20px_rgba(0,0,0,0.12)] transition-all duration-300"
              >
                <div className="grid lg:grid-cols-12 gap-6 lg:gap-10">
                  <div className="lg:col-span-4">
                    <div className="flex items-start gap-3 flex-wrap">
                      <h3 className="text-xl lg:text-2xl font-heading font-bold text-brand-black leading-tight">
                        {s.title}
                      </h3>
                      {s.badge && (
                        <span className="inline-flex items-center px-2 py-1 rounded-md bg-brand-green-dark text-brand-white text-[10px] font-bold tracking-[0.12em]">
                          {s.badge}
                        </span>
                      )}
                    </div>
                    <p className="mt-3 text-brand-green-dark font-semibold text-sm lg:text-base leading-snug">
                      {s.subtitle}
                    </p>
                  </div>
                  <div className="lg:col-span-8">
                    <p className="text-brand-grey text-base lg:text-[17px] leading-relaxed">{s.body}</p>
                    <div className="mt-5 inline-flex items-center gap-2 text-brand-black font-semibold text-sm lg:text-base group-hover:text-brand-green-dark transition-colors">
                      View Service
                      <ArrowUpRight
                        size={18}
                        className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* CLOSING */}
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
              Prevention Over Remediation
            </h2>
            <div className="mt-6 space-y-4 text-brand-white/85 text-base lg:text-lg leading-relaxed">
              <p>
                Very few greenwashing cases stem from malicious intent. Instead, they result from
                breakdowns in clarity, gaps in evidence, and uncoordinated internal processes. Verdant ESG
                identifies these structural weaknesses before you commit to a claim.
              </p>
              <p>
                We ensure your communications stay commercially sharp while meeting the strict standards
                of modern consumer protections.
              </p>
            </div>
            <h3 className="mt-10 text-xl lg:text-2xl font-heading font-semibold text-brand-white leading-snug">
              Assess Your Exposure Before It Is Tested
            </h3>
            <Link
              to="/contact"
              className="group mt-6 inline-flex items-center gap-2 px-6 lg:px-8 py-3.5 lg:py-4 rounded-full bg-brand-green-light text-brand-black font-semibold text-sm lg:text-base hover:bg-brand-white transition-colors duration-300"
            >
              Request a Specialist Consultation
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

export default Services;
