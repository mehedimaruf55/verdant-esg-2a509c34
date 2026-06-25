import { motion } from "framer-motion";
import { ArrowRight, FileText } from "lucide-react";
import { Link } from "react-router-dom";
import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";

const articles = [
  {
    title: "8 Greenwashing Risks Every Brand Should Check Before Publishing a Sustainability Claim",
    desc: "A short, practical checklist drawn from the enforcement patterns we see most often — written for the marketer who has to hit publish on Monday.",
    href: "/resources/8-greenwashing-risks",
    type: "Guide",
  },
];

const Resources = () => (
  <PageLayout>
    <PageHero
      subtitle="Insights"
      title="Resources & Guides"
      description="Practical, regulator-aware writing on green claims, greenwashing exposure, and what defensible sustainability communication actually looks like."
    />

    <section className="py-20 lg:py-28 px-5 lg:px-10">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-5">
        {articles.map((r, i) => (
          <motion.div
            key={r.title}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.6 }}
          >
            <Link to={r.href} className="group block rounded-3xl border border-border p-8 hover:border-brand-green-dark/30 hover:shadow-lg transition-all h-full">
              <div className="flex items-center gap-3 mb-4">
                <FileText className="text-brand-green-dark" size={20} />
                <span className="text-[11px] font-bold text-brand-green-dark uppercase tracking-wider bg-brand-green-dark/10 px-2.5 py-1 rounded-full">{r.type}</span>
              </div>
              <h3 className="text-lg font-bold text-brand-black mb-3 group-hover:text-brand-green-dark transition-colors leading-snug">{r.title}</h3>
              <p className="text-brand-grey text-sm leading-relaxed mb-5">{r.desc}</p>
              <span className="inline-flex items-center gap-1.5 text-brand-green-dark font-bold text-xs uppercase tracking-wider group-hover:gap-2.5 transition-all">
                Read <ArrowRight size={13} />
              </span>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>

    <section className="py-16 lg:py-24 px-5 lg:px-10 bg-brand-grey-light">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl lg:text-3xl font-bold text-brand-black mb-4">More guides coming.</h2>
        <p className="text-brand-grey mb-8">We publish when there's something genuinely useful to say — not on a schedule. Get in touch if there's a topic you want covered.</p>
        <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-3 bg-brand-green-dark text-brand-white font-bold text-sm uppercase tracking-wider rounded-full hover:bg-brand-green-light hover:text-brand-black transition-all">
          Request a Topic <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  </PageLayout>
);

export default Resources;
