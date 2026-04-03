import { motion } from "framer-motion";
import { ArrowRight, FileText, BookOpen, Video, Download } from "lucide-react";
import { Link } from "react-router-dom";
import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";

const resources = [
  { title: "Carbon Footprinting Guide", desc: "A comprehensive guide to understanding and measuring your organisation's carbon footprint.", icon: FileText, type: "Whitepaper" },
  { title: "ESG Reporting Framework", desc: "Our framework for creating robust and credible ESG reports that meet stakeholder expectations.", icon: BookOpen, type: "Guide" },
  { title: "Net Zero Roadmap Template", desc: "A step-by-step template for developing your organisation's Net Zero Carbon strategy.", icon: Download, type: "Template" },
  { title: "BREEAM Assessment Overview", desc: "Everything you need to know about the BREEAM assessment process for your building project.", icon: FileText, type: "Factsheet" },
  { title: "Climate Risk Assessment Webinar", desc: "Watch our recorded webinar on conducting climate risk assessments for your business.", icon: Video, type: "Webinar" },
  { title: "Biodiversity Net Gain Calculator", desc: "A practical tool for estimating biodiversity net gain on your development sites.", icon: Download, type: "Tool" },
];

const faqs = [
  { q: "What is carbon footprinting?", a: "Carbon footprinting is the process of measuring the total greenhouse gas emissions caused directly and indirectly by an individual, organisation, event, or product." },
  { q: "How long does a BREEAM assessment take?", a: "A typical BREEAM assessment takes 3-6 months depending on the project size, stage, and target rating." },
  { q: "What is Biodiversity Net Gain?", a: "Biodiversity Net Gain (BNG) is an approach to development that leaves biodiversity in a measurably better state than before." },
  { q: "What are Scope 1, 2 and 3 emissions?", a: "Scope 1 covers direct emissions from owned sources. Scope 2 covers indirect emissions from purchased energy. Scope 3 covers all other indirect emissions across your value chain." },
];

const Resources = () => (
  <PageLayout>
    <PageHero
      title="Resources"
      subtitle="Knowledge Hub"
      description="Access our collection of guides, templates, webinars, and tools to support your sustainability journey."
    />

    {/* Resources Grid */}
    <section className="py-20 lg:py-32 px-5 lg:px-10">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {resources.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="group rounded-2xl border border-border p-6 lg:p-8 hover:border-brand-green-dark/20 hover:shadow-lg transition-all duration-300 cursor-pointer"
            >
              <div className="flex items-center gap-3 mb-4">
                <r.icon className="text-brand-green-dark" size={20} />
                <span className="text-[11px] font-bold text-brand-green-dark uppercase tracking-wider bg-brand-green-dark/10 px-2.5 py-1 rounded-full">{r.type}</span>
              </div>
              <h3 className="text-base font-bold text-brand-black mb-2 group-hover:text-brand-green-dark transition-colors">{r.title}</h3>
              <p className="text-brand-grey text-sm leading-relaxed mb-4">{r.desc}</p>
              <span className="inline-flex items-center gap-1.5 text-brand-green-dark font-bold text-xs uppercase tracking-wider group-hover:gap-2.5 transition-all">
                Access <ArrowRight size={13} />
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* FAQs */}
    <section className="py-20 lg:py-28 px-5 lg:px-10 bg-brand-grey-light">
      <div className="max-w-4xl mx-auto">
        <motion.h2 initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-2xl lg:text-3xl font-bold text-brand-black mb-10">
          Frequently Asked Questions
        </motion.h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.details
              key={faq.q}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.5 }}
              className="group bg-white rounded-2xl border border-border p-5 lg:p-6 cursor-pointer"
            >
              <summary className="text-base font-bold text-brand-black list-none flex items-center justify-between">
                {faq.q}
                <span className="text-brand-green-dark text-lg ml-4 group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="text-brand-grey text-sm leading-relaxed mt-3">{faq.a}</p>
            </motion.details>
          ))}
        </div>
      </div>
    </section>

    <section className="py-16 lg:py-24 px-5 lg:px-10">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl lg:text-3xl font-bold text-brand-black mb-6">Need More Information?</h2>
        <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-3 bg-brand-green-dark text-brand-white font-bold text-sm uppercase tracking-wider rounded-full hover:bg-brand-green-light hover:shadow-lg transition-all">
          Contact Us <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  </PageLayout>
);

export default Resources;
