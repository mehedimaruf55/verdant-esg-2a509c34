import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";

const caseStudies = [
  {
    title: "Carbon Mosaic for São Tomé and Príncipe",
    desc: "Integrating biochar, regenerative agriculture, and blue-carbon restoration to boost coastal resilience and create a sustainable, low-carbon future.",
    category: "Carbon Credits",
  },
  {
    title: "Biochar Project, Kenya",
    desc: "Transforming crop waste into biochar, removing carbon, enriching soils, and creating green jobs — a scalable model for regenerative farming.",
    category: "Net Zero Carbon",
  },
  {
    title: "Brent Cross Town Regeneration Programme",
    desc: "Delivering ecology appraisals, biodiversity net gain assessments and BREEAM excellence for a greener, more resilient urban development in London.",
    category: "Built Environment",
  },
  {
    title: "Corporate ESG Strategy — Global REIT",
    desc: "Developing a comprehensive ESG framework for a global real estate investment trust covering 200+ assets across 12 countries.",
    category: "Corporate Sustainability",
  },
  {
    title: "Net Zero Roadmap — Financial Services",
    desc: "Creating a science-based decarbonisation pathway for a major UK financial services firm, covering Scope 1, 2 and 3 emissions.",
    category: "Net Zero Carbon",
  },
  {
    title: "BREEAM Outstanding — Mixed-Use Development",
    desc: "Achieving BREEAM Outstanding certification for a landmark mixed-use scheme in central London through integrated sustainable design.",
    category: "Built Environment",
  },
];

const Projects = () => (
  <PageLayout>
    <PageHero
      title="Our Projects"
      subtitle="Case Studies"
      description="Explore a selection of our recent sustainability projects across the built and corporate environment."
    />

    <section className="py-20 lg:py-32 px-5 lg:px-10">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-6">
          {caseStudies.map((cs, i) => (
            <motion.div
              key={cs.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="group rounded-3xl border border-border overflow-hidden hover:border-brand-green-dark/20 hover:shadow-xl transition-all duration-300"
            >
              <div className="h-48 bg-gradient-to-br from-brand-green-dark/10 via-brand-green-light/10 to-brand-green-dark/5 flex items-center justify-center">
                <span className="text-6xl font-bold text-brand-green-dark/10">{String(i + 1).padStart(2, "0")}</span>
              </div>
              <div className="p-6 lg:p-8">
                <span className="text-[11px] font-bold text-brand-green-dark uppercase tracking-wider bg-brand-green-dark/10 px-2.5 py-1 rounded-full">{cs.category}</span>
                <h3 className="text-lg font-bold text-brand-black mt-3 mb-2 group-hover:text-brand-green-dark transition-colors">{cs.title}</h3>
                <p className="text-brand-grey text-sm leading-relaxed mb-4">{cs.desc}</p>
                <span className="inline-flex items-center gap-1.5 text-brand-green-dark font-bold text-xs uppercase tracking-wider group-hover:gap-2.5 transition-all">
                  Read More <ArrowRight size={13} />
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </PageLayout>
);

export default Projects;
