import { motion } from "framer-motion";
import { ArrowRight, Link2, Microscope, FileSearch } from "lucide-react";
import { Link } from "react-router-dom";
import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";

const pillars = [
  { icon: Link2, title: "Trace the Chain", desc: "We map your tier-1 to tier-n suppliers against the claims that depend on them — recycled content, low-carbon inputs, certified materials." },
  { icon: FileSearch, title: "Verify Evidence", desc: "Certificates, mass-balance ledgers, supplier attestations: we check what actually backs the story you're telling buyers." },
  { icon: Microscope, title: "Spot the Gaps", desc: "Where evidence is thin, we flag it — and tell you whether the claim needs to be rewritten, qualified, or pulled." },
];

const SupplyChainTransparencyReview = () => (
  <PageLayout>
    <PageHero
      subtitle="Service"
      title="Supply Chain Transparency Review"
      description="An independent look at whether the evidence in your supply chain actually supports the sustainability story on your label."
    />

    <section className="py-20 lg:py-28 px-5 lg:px-10">
      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-5">
        {pillars.map((p, i) => (
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
        <h2 className="text-2xl lg:text-3xl font-bold text-brand-black mb-4">Know what you can actually prove.</h2>
        <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-3 bg-brand-green-dark text-brand-white font-bold text-sm uppercase tracking-wider rounded-full hover:bg-brand-green-light hover:text-brand-black transition-all">
          Start a Review <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  </PageLayout>
);

export default SupplyChainTransparencyReview;
