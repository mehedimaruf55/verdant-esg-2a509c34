import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Gauge, ShieldCheck, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";

const features = [
  { icon: Zap, title: "Paste a claim, get a verdict", desc: "Drop in any sustainability line — packaging, ad copy, web banner — and get an instant risk read." },
  { icon: Gauge, title: "Scored against real rules", desc: "Trained on the CMA Green Claims Code, ASA rulings, and the EU Green Claims Directive. Not vibes." },
  { icon: ShieldCheck, title: "Suggested rewrites", desc: "When a claim fails, we show you a defensible version you can actually use." },
  { icon: Sparkles, title: "Built for marketing teams", desc: "No legal background required. Designed to be the first check before anything ships." },
];

const AIScreeningTool = () => (
  <PageLayout>
    <PageHero
      subtitle="Product"
      title="AI-Assisted Green Claims Screening"
      description="A first-pass risk check for sustainability claims, built on the rules regulators actually enforce. Catch the obvious problems in seconds — escalate the grey areas to humans."
    />

    <section className="py-20 lg:py-28 px-5 lg:px-10">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-5">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.6 }}
            className="rounded-3xl border border-border p-8 hover:border-brand-green-dark/20 transition-colors"
          >
            <f.icon className="text-brand-green-dark mb-5" size={28} />
            <h3 className="text-lg font-bold text-brand-black mb-2">{f.title}</h3>
            <p className="text-brand-grey text-sm leading-relaxed">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>

    <section className="py-16 lg:py-24 px-5 lg:px-10 bg-brand-grey-light">
      <div className="max-w-3xl mx-auto text-center">
        <span className="inline-block text-[11px] font-bold tracking-[0.18em] uppercase text-brand-green-dark bg-brand-green-dark/10 px-3 py-1.5 rounded-full mb-6">
          Early Access
        </span>
        <h2 className="text-2xl lg:text-3xl font-bold text-brand-black mb-4">Join the first cohort of teams using the screener.</h2>
        <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-3 bg-brand-green-dark text-brand-white font-bold text-sm uppercase tracking-wider rounded-full hover:bg-brand-green-light hover:text-brand-black transition-all">
          Request Access <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  </PageLayout>
);

export default AIScreeningTool;
