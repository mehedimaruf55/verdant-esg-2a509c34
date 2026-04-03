import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";

const categories = ["All", "ESG", "Net Zero", "Built Environment", "Carbon Credits", "Climate Resilience", "Biodiversity"];

const insights = [
  {
    title: "Why Companies are Dropping Net Zero",
    excerpt: "Explore the case for carbon-neutral decarbonisation and why leading companies are re-evaluating their Net-Zero commitments.",
    date: "June 2025",
    category: "Net Zero",
    featured: true,
  },
  {
    title: "UK SRS is Here",
    excerpt: "The UK Sustainability Reporting Standards have arrived. What does this mean for your business and how should you prepare?",
    date: "March 2026",
    category: "ESG",
  },
  {
    title: "Biodiversity Net Gain: A Practical Guide",
    excerpt: "Understanding the latest biodiversity net gain requirements and how they affect your development projects.",
    date: "February 2026",
    category: "Biodiversity",
  },
  {
    title: "Carbon Credits: Separating Fact from Fiction",
    excerpt: "An honest assessment of the voluntary carbon market and how to identify high-quality carbon credits.",
    date: "January 2026",
    category: "Carbon Credits",
  },
  {
    title: "Climate Resilience in the Built Environment",
    excerpt: "How to future-proof your buildings against the physical impacts of climate change.",
    date: "December 2025",
    category: "Climate Resilience",
  },
  {
    title: "The Future of ESG Reporting",
    excerpt: "Navigating the evolving landscape of ESG reporting standards and what companies need to know.",
    date: "November 2025",
    category: "ESG",
  },
  {
    title: "BREEAM Outstanding: Lessons Learned",
    excerpt: "Case study insights from projects that achieved BREEAM Outstanding certification.",
    date: "October 2025",
    category: "Built Environment",
  },
  {
    title: "Scope 3 Emissions: The Hidden Challenge",
    excerpt: "How to tackle the most complex part of your carbon footprint and why it matters more than ever.",
    date: "September 2025",
    category: "Net Zero",
  },
];

const Insights = () => {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? insights : insights.filter((i) => i.category === active);

  return (
    <PageLayout>
      <PageHero
        title="Sustainability Insights"
        subtitle="Insights"
        description="Read our perspectives on some of the key sustainability opportunities and challenges facing businesses today."
      />

      {/* Filters */}
      <section className="py-8 px-5 lg:px-10 border-b border-border sticky top-[60px] lg:top-[68px] bg-white/90 backdrop-blur-lg z-30">
        <div className="max-w-6xl mx-auto flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all ${
                active === c
                  ? "bg-brand-green-dark text-brand-white"
                  : "bg-brand-grey-light text-brand-grey hover:text-brand-black"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </section>

      {/* Featured */}
      {active === "All" && insights.find((i) => i.featured) && (
        <section className="py-12 lg:py-16 px-5 lg:px-10 bg-brand-grey-light">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="rounded-3xl bg-brand-green-dark p-8 lg:p-12 text-brand-white"
            >
              <span className="text-xs font-bold uppercase tracking-wider text-brand-white/60 mb-4 block">Featured Article</span>
              <h2 className="text-2xl lg:text-3xl font-bold mb-4">{insights[0].title}</h2>
              <p className="text-brand-white/70 mb-6 max-w-2xl">{insights[0].excerpt}</p>
              <span className="inline-flex items-center gap-2 text-brand-white font-bold text-xs uppercase tracking-wider">
                Read More <ArrowRight size={14} />
              </span>
            </motion.div>
          </div>
        </section>
      )}

      {/* Grid */}
      <section className="py-16 lg:py-24 px-5 lg:px-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.filter((i) => !i.featured || active !== "All").map((insight, i) => (
              <motion.article
                key={insight.title}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="group rounded-2xl border border-border p-6 hover:border-brand-green-dark/20 hover:shadow-lg transition-all duration-300 cursor-pointer"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-[11px] font-bold text-brand-green-dark uppercase tracking-wider bg-brand-green-dark/10 px-2.5 py-1 rounded-full">{insight.category}</span>
                  <span className="text-xs text-brand-grey">{insight.date}</span>
                </div>
                <h3 className="text-base font-bold text-brand-black mb-2 group-hover:text-brand-green-dark transition-colors">{insight.title}</h3>
                <p className="text-brand-grey text-sm leading-relaxed mb-4">{insight.excerpt}</p>
                <span className="inline-flex items-center gap-1.5 text-brand-green-dark font-bold text-xs uppercase tracking-wider group-hover:gap-2.5 transition-all">
                  Read More <ArrowRight size={13} />
                </span>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Insights;
