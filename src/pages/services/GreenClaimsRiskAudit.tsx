import { motion } from "framer-motion";
import { ArrowRight, Search, FileCheck, AlertTriangle, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";

const phases = [
  { icon: Search, title: "Discover", desc: "We map every public sustainability claim across your website, packaging, ads and investor materials." },
  { icon: FileCheck, title: "Evidence Test", desc: "Each claim is tested against the substantiation standard regulators expect — CMA Green Claims Code, ASA, EU Green Claims Directive." },
  { icon: AlertTriangle, title: "Risk Score", desc: "Claims are scored high / medium / low based on enforcement exposure, audience and how it would land in a regulatory letter." },
  { icon: ShieldCheck, title: "Remediate", desc: "We rewrite or retire the riskiest claims and document the evidence chain for the ones that stay." },
];

const GreenClaimsRiskAudit = () => (
  <PageLayout>
    <PageHero
      subtitle="Service"
      title="Green Claims Risk Audit"
      description="A defensible, evidence-led review of every sustainability claim your brand makes — before a regulator, journalist or competitor finds the weak ones first."
    />

    <section className="py-20 lg:py-28 px-5 lg:px-10">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-5">
        {phases.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.6 }}
            className="rounded-3xl border border-border p-8 hover:border-brand-green-dark/20 transition-colors"
          >
            <p.icon className="text-brand-green-dark mb-5" size={28} />
            <h3 className="text-lg font-bold text-brand-black mb-2">{p.title}</h3>
            <p className="text-brand-grey text-sm leading-relaxed">{p.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>

    <section className="py-16 lg:py-24 px-5 lg:px-10 bg-brand-grey-light">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl lg:text-3xl font-bold text-brand-black mb-4">Find out where you're exposed.</h2>
        <p className="text-brand-grey mb-8">Most brands carry three to five high-risk claims they don't know about. Let's surface yours.</p>
        <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-3 bg-brand-green-dark text-brand-white font-bold text-sm uppercase tracking-wider rounded-full hover:bg-brand-green-light hover:text-brand-black transition-all">
          Book an Audit <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  </PageLayout>
);

export default GreenClaimsRiskAudit;
