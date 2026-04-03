import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import CtaSection from "@/components/CtaSection";

const services = [
  {
    title: "ESG Consulting",
    desc: "Build an ESG Strategy that is measurable, cost effective and high-impact. We help you identify material issues, set targets, and report to stakeholders.",
  },
  {
    title: "Real Estate ESG",
    desc: "Integrate ESG considerations across your real estate portfolio to drive asset value, manage risk, and meet investor expectations.",
  },
  {
    title: "Net Zero Carbon",
    desc: "Our net zero carbon consultants coach you through the 'how' with pragmatic solutions that demystify the jargon.",
    href: "/services/net-zero-carbon",
  },
  {
    title: "Climate Resilience",
    desc: "Understand how climate risks affect your operations and assets, and develop robust adaptation and mitigation strategies.",
  },
  {
    title: "TCFD & TNFD Advisory",
    desc: "Navigate climate and nature-related financial disclosures with expert guidance aligned to the latest frameworks.",
  },
  {
    title: "PPN Compliance",
    desc: "Ensure compliance with Procurement Policy Notes and social value requirements across your government contracts.",
  },
];

const fadeUp = { hidden: { opacity: 0, y: 32 }, visible: { opacity: 1, y: 0 } };

const CorporateSustainability = () => (
  <PageLayout>
    <PageHero
      title="Corporate Sustainability"
      subtitle="Services"
      description="We work alongside you to build transformative business practices that align with your organisation's purpose, goals and long-term ambitions."
    />

    <section className="py-20 lg:py-32 px-5 lg:px-10">
      <div className="max-w-6xl mx-auto">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.7 }} className="mb-16 max-w-3xl">
          <h2 className="text-2xl lg:text-3xl font-bold text-brand-black mb-4">We Free You From Ambiguity</h2>
          <p className="text-brand-grey leading-relaxed">
            Our specialist sustainability consultants work alongside you whether you need ESG support, a Net Zero Carbon strategy or Climate Resilience advice so that you have a clear action plan.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="group rounded-2xl border border-border p-6 lg:p-8 hover:border-brand-green-dark/20 hover:shadow-lg transition-all duration-300"
            >
              <div className="text-xs font-bold text-brand-green-dark uppercase tracking-wider mb-3">{String(i + 1).padStart(2, "0")}</div>
              <h3 className="text-lg font-bold text-brand-black mb-2">{s.title}</h3>
              <p className="text-brand-grey text-sm leading-relaxed mb-4">{s.desc}</p>
              {s.href ? (
                <Link to={s.href} className="inline-flex items-center gap-1.5 text-brand-green-dark font-bold text-xs uppercase tracking-wider hover:gap-2.5 transition-all">
                  Learn More <ArrowRight size={13} />
                </Link>
              ) : (
                <Link to="/contact" className="inline-flex items-center gap-1.5 text-brand-green-dark font-bold text-xs uppercase tracking-wider hover:gap-2.5 transition-all">
                  Enquire <ArrowRight size={13} />
                </Link>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <CtaSection />
  </PageLayout>
);

export default CorporateSustainability;
