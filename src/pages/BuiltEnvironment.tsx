import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import CtaSection from "@/components/CtaSection";

const services = [
  {
    title: "Sustainability for Planning",
    desc: "Integrate sustainability into your projects from the start and avoid careless reliance on landfill, high carbon footprints and low sustainability materials.",
  },
  {
    title: "Environmental Assessment",
    desc: "Ensure your business is complying with environmental regulations and certify how you are currently performing.",
  },
  {
    title: "Building Performance",
    desc: "Understand the performance of your building, its efficiency and what needs improving through detailed energy and environmental analysis.",
  },
  {
    title: "Biodiversity",
    desc: "Protect and enhance biodiversity on your development sites with expert ecological assessments and Biodiversity Net Gain strategies.",
  },
  {
    title: "Life Cycle Assessment",
    desc: "Measure the environmental impact of your building over its entire lifecycle, from material sourcing to end of life.",
  },
];

const BuiltEnvironment = () => (
  <PageLayout>
    <PageHero
      title="Built Environment"
      subtitle="Services"
      description="Our experienced consultants are experts on sustainable design and construction strategies, building performance analysis, ecology appraisal, and environmental assessment."
    />

    <section className="py-20 lg:py-32 px-5 lg:px-10">
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="mb-16 max-w-3xl">
          <h2 className="text-2xl lg:text-3xl font-bold text-brand-black mb-4">Leaving No Stone Unturned</h2>
          <p className="text-brand-grey leading-relaxed">
            Find out how our multidisciplinary team of experts can ensure you have everything covered for sustainable building projects.
          </p>
        </motion.div>

        <div className="space-y-4">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="group flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-8 rounded-2xl border border-border p-6 lg:p-8 hover:border-brand-green-dark/20 hover:shadow-lg transition-all duration-300"
            >
              <div className="text-3xl font-bold text-brand-green-dark/20 lg:w-16 shrink-0">{String(i + 1).padStart(2, "0")}</div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-brand-black mb-2 group-hover:text-brand-green-dark transition-colors">{s.title}</h3>
                <p className="text-brand-grey text-sm leading-relaxed">{s.desc}</p>
              </div>
              <Link to="/contact" className="inline-flex items-center gap-1.5 text-brand-green-dark font-bold text-xs uppercase tracking-wider shrink-0 hover:gap-2.5 transition-all">
                Enquire <ArrowRight size={13} />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <CtaSection />
  </PageLayout>
);

export default BuiltEnvironment;
