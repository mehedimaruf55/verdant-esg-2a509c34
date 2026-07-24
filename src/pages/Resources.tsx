import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";

const articles = [
  {
    title: "8 Greenwashing Risks Every Brand Should Check Before Publishing a Sustainability Claim",
    href: "/resources/8-greenwashing-risks",
    tag: "Guide",
    excerpt: "A pre-publication checklist for the eight most common — and most frequently penalised — categories of misleading environmental claim.",
  },
];

const Resources = () => (
  <PageLayout>
    <PageHero
      subtitle="Insights & Guides"
      title="Practical guidance on the regulated language of sustainability."
      description="Working notes, checklists, and analysis from our compliance team."
    />
    <section className="py-16 lg:py-24 bg-brand-white">
      <div className="max-w-5xl mx-auto px-5 lg:px-10 space-y-5">
        {articles.map((a, i) => (
          <motion.div
            key={a.href}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
          >
            <Link
              to={a.href}
              className="group block p-8 lg:p-10 rounded-2xl lg:rounded-[1.75rem] bg-brand-white border border-brand-black/[0.08] hover:border-brand-green-dark/40 hover:shadow-[0_20px_50px_-20px_rgba(0,0,0,0.12)] transition-all duration-300"
            >
              <div className="flex items-start justify-between gap-6">
                <div>
                  <span className="text-[11px] font-bold tracking-[0.18em] uppercase text-brand-green-dark">{a.tag}</span>
                  <h3 className="mt-3 text-xl lg:text-2xl font-heading font-bold text-brand-black leading-tight">
                    {a.title}
                  </h3>
                  <p className="mt-3 text-sm lg:text-base text-brand-grey leading-relaxed">{a.excerpt}</p>
                </div>
                <ArrowUpRight size={20} className="shrink-0 mt-1 text-brand-green-dark transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  </PageLayout>
);

export default Resources;
