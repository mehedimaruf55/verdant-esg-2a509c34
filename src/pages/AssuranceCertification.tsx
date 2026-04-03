import { motion } from "framer-motion";
import { ArrowRight, Shield, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";

const certifications = [
  { title: "BREEAM", desc: "The world's leading sustainability assessment method for buildings, communities and infrastructure projects." },
  { title: "WELL Building Standard", desc: "A performance-based system for measuring, certifying, and monitoring features of buildings that impact health and wellbeing." },
  { title: "LEED", desc: "A globally recognised green building certification that provides a framework for healthy, efficient, and cost-saving green buildings." },
  { title: "SKA Rating", desc: "An environmental assessment method for non-domestic fit-out projects, providing a simple check to ensure best practice." },
  { title: "Carbon Neutral Certification", desc: "Third-party verification of your carbon neutrality claims, ensuring credibility and alignment with international standards." },
  { title: "Environmental Assessment", desc: "Comprehensive environmental impact assessments to meet regulatory requirements and demonstrate best practice." },
];

const AssuranceCertification = () => (
  <PageLayout>
    <PageHero
      title="Assurance & Certification"
      subtitle="Services"
      description="We offer credible verification and certification methods for both the built and corporate world, ensuring your sustainability claims are backed by robust evidence."
    />

    <section className="py-20 lg:py-32 px-5 lg:px-10">
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="mb-16 max-w-3xl">
          <h2 className="text-2xl lg:text-3xl font-bold text-brand-black mb-4">Trusted Certification Services</h2>
          <p className="text-brand-grey leading-relaxed">
            Our certification services provide credible ways to report and verify your sustainability journey, ensuring that your milestones are verified and aligned with the highest standards.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {certifications.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="group rounded-2xl border border-border p-6 lg:p-8 hover:border-brand-green-dark/20 hover:shadow-lg transition-all duration-300"
            >
              <CheckCircle className="text-brand-green-dark mb-4" size={24} />
              <h3 className="text-lg font-bold text-brand-black mb-2">{c.title}</h3>
              <p className="text-brand-grey text-sm leading-relaxed mb-4">{c.desc}</p>
              <Link to="/contact" className="inline-flex items-center gap-1.5 text-brand-green-dark font-bold text-xs uppercase tracking-wider hover:gap-2.5 transition-all">
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

export default AssuranceCertification;
