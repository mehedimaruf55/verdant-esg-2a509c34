import { motion } from "framer-motion";
import { ArrowRight, Search, LifeBuoy, Link2, Siren, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";

const services = [
  {
    title: "Green Claims Risk Audit",
    desc: "A defensible review of every sustainability claim your brand makes, scored against the rules regulators actually enforce.",
    href: "/services/green-claims-risk-audit",
    icon: Search,
  },
  {
    title: "Ongoing Compliance Support",
    desc: "Retained advisory that reviews new claims before they ship — so marketing keeps moving, and nothing risky goes live.",
    href: "/services/ongoing-compliance-support",
    icon: LifeBuoy,
  },
  {
    title: "Supply Chain Transparency Review",
    desc: "An independent check that the evidence in your supply chain actually supports the story you're telling buyers.",
    href: "/services/supply-chain-transparency-review",
    icon: Link2,
  },
  {
    title: "Regulatory Response Readiness",
    desc: "Evidence dossiers, response playbooks and rapid counsel — so the day a regulator's letter arrives, you're not improvising.",
    href: "/services/regulatory-response-readiness",
    icon: Siren,
  },
];

const Services = () => (
  <PageLayout>
    <PageHero
      subtitle="Our Services"
      title="Green-Claims Compliance, Made Defensible"
      description="Four focused services that protect your brand from greenwashing exposure — backed by an AI screener built on the rules regulators enforce."
    />

    <section className="py-20 lg:py-28 px-5 lg:px-10">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <Link to={s.href} className="group block rounded-3xl border border-border p-8 lg:p-10 hover:border-brand-green-dark/30 hover:shadow-xl transition-all duration-300 h-full">
              <s.icon className="text-brand-green-dark mb-5" size={32} />
              <h3 className="text-xl font-bold text-brand-black mb-3 group-hover:text-brand-green-dark transition-colors">{s.title}</h3>
              <p className="text-brand-grey text-sm leading-relaxed mb-6">{s.desc}</p>
              <span className="inline-flex items-center gap-2 text-brand-green-dark font-bold text-xs uppercase tracking-wider group-hover:gap-3 transition-all">
                Learn More <ArrowRight size={14} />
              </span>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>

    {/* AI Tool feature */}
    <section className="py-16 lg:py-24 px-5 lg:px-10">
      <div className="max-w-6xl mx-auto">
        <Link to="/ai-screening-tool" className="group block rounded-3xl bg-brand-green-dark text-brand-white p-10 lg:p-14 hover:bg-brand-green-dark/95 transition-colors">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 mb-4">
                <Sparkles size={18} className="text-brand-green-light" />
                <span className="text-[11px] font-bold tracking-[0.18em] uppercase text-brand-green-light">Product</span>
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold mb-3">AI-Assisted Green Claims Screening</h3>
              <p className="text-brand-white/70 leading-relaxed">A first-pass risk check for any sustainability claim, trained on the rules regulators actually enforce.</p>
            </div>
            <span className="inline-flex items-center gap-2 font-bold text-xs uppercase tracking-wider group-hover:gap-3 transition-all">
              Explore the Tool <ArrowRight size={16} />
            </span>
          </div>
        </Link>
      </div>
    </section>

    <section className="py-16 lg:py-24 px-5 lg:px-10 bg-brand-grey-light">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl lg:text-3xl font-bold text-brand-black mb-4">Not sure where you stand?</h2>
        <p className="text-brand-grey mb-8">A 20-minute call is usually enough to know whether you need an audit, ongoing support, or just a sanity check.</p>
        <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-3 bg-brand-green-dark text-brand-white font-bold text-sm uppercase tracking-wider rounded-full hover:bg-brand-green-light hover:text-brand-black transition-all">
          Talk to Us <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  </PageLayout>
);

export default Services;
