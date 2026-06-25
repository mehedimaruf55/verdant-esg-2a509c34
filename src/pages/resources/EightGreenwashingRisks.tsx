import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";

const risks = [
  { n: "01", title: "Vague language", desc: "“Eco-friendly”, “sustainable”, “green”. If you can't define it in one sentence with numbers, regulators won't either — and they'll assume the worst." },
  { n: "02", title: "Unsubstantiated comparisons", desc: "“50% more sustainable than before” needs a baseline, a method and a scope. Without all three, it's an enforcement risk, not a marketing line." },
  { n: "03", title: "Hidden trade-offs", desc: "Highlighting one green attribute while ignoring a larger negative impact (energy use, end-of-life, supply chain) is the textbook ASA complaint." },
  { n: "04", title: "Implied carbon neutrality", desc: "Leaves, green tones and the word “neutral” add up to a claim — even when you never said the word “carbon”. Visual greenwashing counts." },
  { n: "05", title: "Offset over-reliance", desc: "Claims built on offsets without a credible reduction pathway are now actively challenged by the CMA, ASA and EU." },
  { n: "06", title: "Future promises as present facts", desc: "“We are net zero” when you mean “by 2040” is the single most common cause of takedown orders this year." },
  { n: "07", title: "Selective certification", desc: "Citing a certification for one product, one site, or one ingredient as if it covers the whole brand. Specify the scope or drop the badge." },
  { n: "08", title: "No evidence on file", desc: "If you can't produce a one-page substantiation dossier for a claim within 48 hours, the claim isn't ready to be public." },
];

const EightGreenwashingRisks = () => (
  <PageLayout>
    <PageHero
      subtitle="Insights"
      title="8 Greenwashing Risks Every Brand Should Check Before Publishing a Sustainability Claim"
      description="A short, practical checklist drawn from the enforcement patterns we see most often — written for the marketer who has to hit publish on Monday."
    />

    <section className="py-20 lg:py-28 px-5 lg:px-10">
      <div className="max-w-3xl mx-auto space-y-6">
        {risks.map((r, i) => (
          <motion.article
            key={r.n}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05, duration: 0.5 }}
            className="rounded-2xl border border-border p-6 lg:p-8 hover:border-brand-green-dark/20 transition-colors"
          >
            <div className="flex items-baseline gap-4 mb-3">
              <span className="text-brand-green-dark font-bold text-sm tracking-widest">{r.n}</span>
              <h2 className="text-lg lg:text-xl font-bold text-brand-black">{r.title}</h2>
            </div>
            <p className="text-brand-grey leading-relaxed pl-9">{r.desc}</p>
          </motion.article>
        ))}
      </div>
    </section>

    <section className="py-16 lg:py-24 px-5 lg:px-10 bg-brand-grey-light">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl lg:text-3xl font-bold text-brand-black mb-4">Worried any of these apply to your brand?</h2>
        <p className="text-brand-grey mb-8">A Green Claims Risk Audit gives you a defensible answer in two weeks.</p>
        <Link to="/services/green-claims-risk-audit" className="inline-flex items-center gap-2 px-8 py-3 bg-brand-green-dark text-brand-white font-bold text-sm uppercase tracking-wider rounded-full hover:bg-brand-green-light hover:text-brand-black transition-all">
          See the Audit <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  </PageLayout>
);

export default EightGreenwashingRisks;
