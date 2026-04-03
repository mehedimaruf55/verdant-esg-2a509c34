import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Clock, User, Tag } from "lucide-react";
import PageLayout from "@/components/PageLayout";

type Insight = {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  body: string;
  category: string;
  cover_image_url: string | null;
  author: string;
  tags: string[] | null;
  reading_time_minutes: number | null;
  published_date: string;
};

const InsightDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const [insight, setInsight] = useState<Insight | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetch = async () => {
      const { data } = await supabase
        .from("insights")
        .select("*")
        .eq("slug", slug)
        .eq("published", true)
        .maybeSingle();
      setInsight(data);
      setLoading(false);
    };
    fetch();
  }, [slug]);

  if (loading) {
    return (
      <PageLayout>
        <div className="min-h-[60vh] flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-brand-green-dark border-t-transparent rounded-full animate-spin" />
        </div>
      </PageLayout>
    );
  }

  if (!insight) {
    return (
      <PageLayout>
        <div className="min-h-[60vh] flex flex-col items-center justify-center gap-4">
          <h1 className="text-2xl font-heading font-bold text-brand-black">Insight not found</h1>
          <Link to="/insights" className="text-brand-green-dark font-bold text-sm hover:underline flex items-center gap-1">
            <ArrowLeft size={14} /> Back to Insights
          </Link>
        </div>
      </PageLayout>
    );
  }

  const formattedDate = new Date(insight.published_date).toLocaleDateString("en-GB", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  // Simple markdown-like rendering (paragraphs, headings, bold, lists)
  const renderBody = (text: string) => {
    return text.split("\n\n").map((block, i) => {
      if (block.startsWith("### ")) {
        return <h3 key={i} className="text-lg font-heading font-bold text-brand-black mt-8 mb-3">{block.slice(4)}</h3>;
      }
      if (block.startsWith("## ")) {
        return <h2 key={i} className="text-xl font-heading font-bold text-brand-black mt-10 mb-4">{block.slice(3)}</h2>;
      }
      if (block.startsWith("# ")) {
        return <h1 key={i} className="text-2xl font-heading font-bold text-brand-black mt-10 mb-4">{block.slice(2)}</h1>;
      }
      if (block.startsWith("- ") || block.startsWith("* ")) {
        const items = block.split("\n").filter(Boolean);
        return (
          <ul key={i} className="list-disc pl-6 space-y-1 mb-4">
            {items.map((item, j) => (
              <li key={j} className="text-brand-grey leading-relaxed">{item.replace(/^[-*]\s/, "")}</li>
            ))}
          </ul>
        );
      }
      return <p key={i} className="text-brand-grey leading-relaxed mb-4">{block}</p>;
    });
  };

  return (
    <PageLayout>
      {/* Hero */}
      <section className="relative">
        {insight.cover_image_url ? (
          <div className="relative h-[40vh] lg:h-[50vh]">
            <img src={insight.cover_image_url} alt={insight.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-black/70 via-brand-black/30 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-16">
              <div className="max-w-3xl mx-auto">
                <span className="inline-block text-xs font-bold uppercase tracking-wider text-brand-white/70 bg-brand-white/10 px-3 py-1 rounded-full mb-4">
                  {insight.category}
                </span>
                <h1 className="text-3xl lg:text-4xl xl:text-5xl font-heading font-bold text-brand-white leading-tight">
                  {insight.title}
                </h1>
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-brand-green-dark py-16 lg:py-24 px-5">
            <div className="max-w-3xl mx-auto">
              <span className="inline-block text-xs font-bold uppercase tracking-wider text-brand-white/60 bg-brand-white/10 px-3 py-1 rounded-full mb-4">
                {insight.category}
              </span>
              <h1 className="text-3xl lg:text-4xl xl:text-5xl font-heading font-bold text-brand-white leading-tight">
                {insight.title}
              </h1>
            </div>
          </div>
        )}
      </section>

      {/* Meta */}
      <section className="border-b border-border">
        <div className="max-w-3xl mx-auto px-5 py-5 flex flex-wrap items-center gap-4 text-sm text-brand-grey">
          <span className="flex items-center gap-1.5"><User size={14} /> {insight.author}</span>
          <span className="flex items-center gap-1.5"><Calendar size={14} /> {formattedDate}</span>
          {insight.reading_time_minutes && (
            <span className="flex items-center gap-1.5"><Clock size={14} /> {insight.reading_time_minutes} min read</span>
          )}
          {insight.tags && insight.tags.length > 0 && (
            <span className="flex items-center gap-1.5">
              <Tag size={14} />
              {insight.tags.join(", ")}
            </span>
          )}
        </div>
      </section>

      {/* Body */}
      <motion.article
        className="max-w-3xl mx-auto px-5 py-12 lg:py-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-lg lg:text-xl text-brand-black font-medium leading-relaxed mb-8">{insight.excerpt}</p>
        <div className="prose-verdant">{renderBody(insight.body)}</div>
      </motion.article>

      {/* Back */}
      <section className="border-t border-border">
        <div className="max-w-3xl mx-auto px-5 py-8">
          <Link to="/insights" className="inline-flex items-center gap-2 text-brand-green-dark font-bold text-sm uppercase tracking-wider hover:gap-3 transition-all">
            <ArrowLeft size={14} /> Back to All Insights
          </Link>
        </div>
      </section>
    </PageLayout>
  );
};

export default InsightDetail;
