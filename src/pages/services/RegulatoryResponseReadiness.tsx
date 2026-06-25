import { motion } from "framer-motion";
import { ArrowRight, Siren, FolderLock, MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";
import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";

const blocks = [
  { icon: FolderLock, title: "Evidence Dossier", desc: "Every live claim has a one-page substantiation file ready to send — built before anyone asks for it." },
  { icon: Siren, title: "Response Playbook", desc: "Step-by-step protocol for legal, comms and product when a regulator letter, ASA complaint or activist report lands." },
  { icon: MessageSquare, title: "Rapid Counsel", desc: "When something does land, we're on the call within hours — drafting the response, scoping disclosure, protecting the brand." },
];

const RegulatoryResponseReadiness = () => (
  <PageLayout>
    <PageHero
      subtitle="Service"
      title="Regulatory Response Readiness"
      description="The work you do before the regulator's letter arrives — so the day it does, you're not improvising."
    />

    <section className="py-20 lg:py-28 px-5 lg:px-10">
      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-5">
        {blocks.map((b, i) => (
          <motion.div
            key={b.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.6 }}
            className="rounded-3xl border border-border p-8 hover:border-brand-green-dark/20 transition-colors"
          >
            <b.icon className="text-brand-green-dark mb-5" size={28} />
            <h3 className="text-lg font-bold text-brand-black mb-2">{b.title}</h3>
            <p className="text-brand-grey text-sm leading-relaxed">{b.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>

    <section className="py-16 lg:py-24 px-5 lg:px-10 bg-brand-grey-light">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl lg:text-3xl font-bold text-brand-black mb-4">Be the brand that's ready.</h2>
        <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-3 bg-brand-green-dark text-brand-white font-bold text-sm uppercase tracking-wider rounded-full hover:bg-brand-green-light hover:text-brand-black transition-all">
          Get Ready <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  </PageLayout>
);

export default RegulatoryResponseReadiness;
