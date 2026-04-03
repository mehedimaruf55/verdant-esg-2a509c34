import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import CtaSection from "@/components/CtaSection";
import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";

const fadeUp = { hidden: { opacity: 0, y: 32 }, visible: { opacity: 1, y: 0 } };

interface ServicePageTemplateProps {
  subtitle: string;
  title: string;
  description: string;
  intro: string;
  processTitle?: string;
  processSteps?: { title: string; desc: string }[];
  features?: { title: string; desc: string }[];
  ctaTitle?: string;
  ctaDesc?: string;
}

const ServicePageTemplate = ({
  subtitle,
  title,
  description,
  intro,
  processTitle = "Our Approach",
  processSteps = [],
  features = [],
  ctaTitle = "Ready to Get Started?",
  ctaDesc = "Get in touch with our team to discuss how we can support your sustainability goals.",
}: ServicePageTemplateProps) => (
  <PageLayout>
    <PageHero title={title} subtitle={subtitle} description={description} />

    {/* Intro */}
    <section className="py-20 lg:py-32 px-5 lg:px-10">
      <div className="max-w-6xl mx-auto">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.7 }} className="max-w-3xl">
          <p className="text-brand-grey leading-relaxed text-lg">{intro}</p>
        </motion.div>
      </div>
    </section>

    {/* Process Steps */}
    {processSteps.length > 0 && (
      <section className="py-20 lg:py-28 px-5 lg:px-10 bg-brand-grey-light">
        <div className="max-w-6xl mx-auto">
          <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.7 }} className="text-2xl lg:text-4xl font-bold text-brand-black mb-12">
            {processTitle}
          </motion.h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {processSteps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.6 }}
                className="rounded-2xl bg-white p-6 lg:p-8 border border-border"
              >
                <div className="w-10 h-10 rounded-xl bg-brand-green-dark/10 flex items-center justify-center mb-4">
                  <span className="text-brand-green-dark font-bold text-sm">{String(i + 1).padStart(2, "0")}</span>
                </div>
                <h3 className="text-lg font-bold text-brand-black mb-2">{step.title}</h3>
                <p className="text-brand-grey text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    )}

    {/* Features */}
    {features.length > 0 && (
      <section className="py-20 lg:py-32 px-5 lg:px-10">
        <div className="max-w-6xl mx-auto">
          <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.7 }} className="text-2xl lg:text-4xl font-bold text-brand-black mb-12">
            What We Offer
          </motion.h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.5 }}
                className="flex gap-4 p-5 rounded-xl border border-border hover:border-brand-green-dark/20 hover:shadow-sm transition-all"
              >
                <CheckCircle2 className="text-brand-green-dark shrink-0 mt-0.5" size={20} />
                <div>
                  <h3 className="font-bold text-brand-black mb-1">{f.title}</h3>
                  <p className="text-brand-grey text-sm leading-relaxed">{f.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    )}

    {/* CTA */}
    <CtaSection />
  </PageLayout>
);

export default ServicePageTemplate;
