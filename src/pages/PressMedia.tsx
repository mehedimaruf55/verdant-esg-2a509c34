import { motion } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import CtaSection from "@/components/CtaSection";

const fadeUp = { hidden: { opacity: 0, y: 32 }, visible: { opacity: 1, y: 0 } };

const articles = [
  {
    date: "2nd January 2026",
    source: "TRT World",
    title: "2025's Climate-Defining Moments, Treehugging",
    url: "https://www.youtube.com/watch?v=H9HsYwTyFBg",
  },
  {
    date: "20th November 2025",
    source: "The Newsmakers",
    title: "Planet heating up: Can the world turn the tide, or is it too late?",
    url: "https://www.youtube.com/watch?v=GHlvaxz7wYI",
  },
  {
    date: "23rd September 2025",
    source: "Euronews",
    title: "More than 62,000 people died in Europe's 2024 heatwave: Which country was hit the hardest?",
    url: "https://www.euronews.com/green/2025/09/23/more-than-62000-died-in-europes-2024-heatwave-which-country-was-hit-the-hardest",
  },
  {
    date: "18th September 2025",
    source: "The Yorkshire Post",
    title: "Britain has deindustrialised more than it has decarbonised so to tackle climate change we should invest abroad",
    url: "https://www.yorkshirepost.co.uk/news/opinion/columnists/britain-has-deindustrialised-more-than-it-has-decarbonised-so-to-tackle-climate-change-we-should-invest-abroad-chris-hocknell-5318926",
  },
  {
    date: "17th July 2025",
    source: "The Yorkshire Post",
    title: "Yorkshire sustainability insights on carbon markets and net zero",
    url: "#",
  },
  {
    date: "10th June 2025",
    source: "BBC News",
    title: "Sustainability experts weigh in on new carbon regulations",
    url: "#",
  },
  {
    date: "3rd March 2025",
    source: "The Guardian",
    title: "How UK businesses are adapting to climate change reporting requirements",
    url: "#",
  },
  {
    date: "15th January 2025",
    source: "Financial Times",
    title: "ESG consulting firms see surge in demand for net zero strategies",
    url: "#",
  },
];

const PressMedia = () => (
  <PageLayout>
    <PageHero
      title="Press and Media"
      subtitle="About"
      description="Our latest news announcements, comments and insights as seen in the press."
    />

    {/* Articles Grid */}
    <section className="py-20 lg:py-32 px-5 lg:px-10">
      <div className="max-w-6xl mx-auto">
        <div className="grid gap-6 md:grid-cols-2">
          {articles.map((article, i) => (
            <motion.a
              key={i}
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.6 }}
              className="group block rounded-2xl border border-border p-6 lg:p-8 hover:border-brand-green-dark/20 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-brand-green-dark bg-brand-green-dark/10 px-3 py-1 rounded-full">
                  {article.source}
                </span>
                <span className="text-xs text-brand-grey">{article.date}</span>
              </div>
              <h3 className="text-lg font-bold text-brand-black mb-3 group-hover:text-brand-green-dark transition-colors leading-snug">
                {article.title}
              </h3>
              <span className="inline-flex items-center gap-1.5 text-sm font-medium text-brand-green-dark opacity-0 group-hover:opacity-100 transition-opacity">
                Read Article <ExternalLink size={14} />
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>

    <CtaSection />
  </PageLayout>
);

export default PressMedia;
