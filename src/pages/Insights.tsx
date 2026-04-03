import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";

const categories = ["All", "ESG", "Net Zero", "Built Environment", "Carbon Credits", "Climate Resilience", "Biodiversity"];

type Insight = {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  cover_image_url: string | null;
  author: string;
  reading_time_minutes: number | null;
  published_date: string;
  featured: boolean;
};

const Insights = () => {
  const [active, setActive] = useState("All");
  const [insights, setInsights] = useState<Insight[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetch = async () => {
      const { data } = await supabase
        .from("insights")
        .select("id, title, slug, excerpt, category, cover_image_url, author, reading_time_minutes, published_date, featured")
        .eq("published", true)
        .order("published_date", { ascending: false });
      if (data) setInsights(data);
      setLoading(false);
    };
    fetch();
  }, []);

  const filtered = active === "All" ? insights : insights.filter((i) => i.category === active);
  const featuredInsight = insights.find((i) => i.featured);

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

      {loading ? (
        <div className="py-24 flex justify-center">
          <div className="w-8 h-8 border-2 border-brand-green-dark border-t-transparent rounded-full animate-spin" />
        </div>
      ) : (
        <>
          {/* Featured */}
          {active === "All" && featuredInsight && (
            <section className="py-12 lg:py-16 px-5 lg:px-10 bg-brand-grey-light">
              <div className="max-w-6xl mx-auto">
                <Link to={`/insights/${featuredInsight.slug}`}>
                  <motion.div
                    initial={{ opacity: 0, y: 32 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="rounded-3xl bg-brand-green-dark overflow-hidden flex flex-col lg:flex-row cursor-pointer group"
                  >
                    {featuredInsight.cover_image_url && (
                      <div className="lg:w-1/2 h-48 lg:h-auto overflow-hidden">
                        <img
                          src={featuredInsight.cover_image_url}
                          alt={featuredInsight.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                      </div>
                    )}
                    <div className={`p-8 lg:p-12 text-brand-white flex flex-col justify-center ${featuredInsight.cover_image_url ? "lg:w-1/2" : ""}`}>
                      <span className="text-xs font-bold uppercase tracking-wider text-brand-white/60 mb-4 block">Featured Article</span>
                      <h2 className="text-2xl lg:text-3xl font-bold mb-4">{featuredInsight.title}</h2>
                      <p className="text-brand-white/70 mb-6 max-w-2xl">{featuredInsight.excerpt}</p>
                      <span className="inline-flex items-center gap-2 text-brand-white font-bold text-xs uppercase tracking-wider group-hover:gap-3 transition-all">
                        Read More <ArrowRight size={14} />
                      </span>
                    </div>
                  </motion.div>
                </Link>
              </div>
            </section>
          )}

          {/* Grid */}
          <section className="py-16 lg:py-24 px-5 lg:px-10">
            <div className="max-w-6xl mx-auto">
              {filtered.length === 0 ? (
                <p className="text-center text-brand-grey py-12">No insights found in this category.</p>
              ) : (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filtered
                    .filter((i) => !i.featured || active !== "All")
                    .map((insight, i) => (
                      <Link key={insight.id} to={`/insights/${insight.slug}`}>
                        <motion.article
                          initial={{ opacity: 0, y: 32 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.06, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                          className="group rounded-2xl border border-border overflow-hidden hover:border-brand-green-dark/20 hover:shadow-lg transition-all duration-300 cursor-pointer h-full"
                        >
                          {insight.cover_image_url && (
                            <div className="aspect-[3/2] overflow-hidden">
                              <img
                                src={insight.cover_image_url}
                                alt={insight.title}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                loading="lazy"
                              />
                            </div>
                          )}
                          <div className="p-6">
                            <div className="flex items-center gap-3 mb-4">
                              <span className="text-[11px] font-bold text-brand-green-dark uppercase tracking-wider bg-brand-green-dark/10 px-2.5 py-1 rounded-full">
                                {insight.category}
                              </span>
                              <span className="text-xs text-brand-grey">
                                {new Date(insight.published_date).toLocaleDateString("en-GB", { month: "long", year: "numeric" })}
                              </span>
                            </div>
                            <h3 className="text-base font-bold text-brand-black mb-2 group-hover:text-brand-green-dark transition-colors">
                              {insight.title}
                            </h3>
                            <p className="text-brand-grey text-sm leading-relaxed mb-4 line-clamp-3">{insight.excerpt}</p>
                            <span className="inline-flex items-center gap-1.5 text-brand-green-dark font-bold text-xs uppercase tracking-wider group-hover:gap-2.5 transition-all">
                              Read More <ArrowRight size={13} />
                            </span>
                          </div>
                        </motion.article>
                      </Link>
                    ))}
                </div>
              )}
            </div>
          </section>
        </>
      )}
    </PageLayout>
  );
};

export default Insights;
