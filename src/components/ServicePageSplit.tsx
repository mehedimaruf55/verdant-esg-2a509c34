import { motion } from "framer-motion";
import { ArrowRight, Leaf } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import CtaSection from "@/components/CtaSection";

const fadeUp = { hidden: { opacity: 0, y: 32 }, visible: { opacity: 1, y: 0 } };

interface ServicePageSplitProps {
  subtitle: string;
  title: string;
  description: string;
  intro: string;
  processTitle?: string;
  processSteps?: { title: string; desc: string }[];
  features?: { title: string; desc: string }[];
}

const ServicePageSplit = ({
  subtitle,
  title,
  description,
  intro,
  processTitle = "Our Approach",
  processSteps = [],
  features = [],
}: ServicePageSplitProps) => (
  <PageLayout>
    <PageHero title={title} subtitle={subtitle} description={description} />

    {/* Split Intro */}
    <section className="py-20 lg:py-32 px-5 lg:px-10">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-5 gap-12 lg:gap-16">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.7 }} className="lg:col-span-2">
          <Leaf className="text-brand-green-dark mb-4" size={32} strokeWidth={1.5} />
          <h2 className="text-2xl lg:text-3xl font-bold text-brand-black leading-tight">Why this matters</h2>
        </motion.div>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.7, delay: 0.1 }} className="lg:col-span-3">
          <p className="text-brand-grey leading-relaxed text-lg">{intro}</p>
        </motion.div>
      </div>
    </section>

    {/* Alternating Process Steps */}
    {processSteps.length > 0 && (
      <section className="py-20 lg:py-28 px-5 lg:px-10 bg-brand-grey-light">
        <div className="max-w-6xl mx-auto">
          <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.7 }} className="text-2xl lg:text-4xl font-bold text-brand-black mb-16 text-center">
            {processTitle}
          </motion.h2>
          <div className="space-y-6 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-6">
            {processSteps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="relative"
              >
                <div className="rounded-2xl bg-white p-6 lg:p-8 border border-border h-full">
                  <div className="flex items-start gap-5">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-green-dark/10 to-brand-mint/20 flex items-center justify-center shrink-0">
                      <span className="text-brand-green-dark font-bold text-lg">{String(i + 1).padStart(2, "0")}</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-brand-black mb-2">{step.title}</h3>
                      <p className="text-brand-grey text-sm leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    )}

    {/* Features — horizontal emphasis cards */}
    {features.length > 0 && (
      <section className="py-20 lg:py-32 px-5 lg:px-10">
        <div className="max-w-6xl mx-auto">
          <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.7 }} className="text-2xl lg:text-4xl font-bold text-brand-black mb-4">
            Key Capabilities
          </motion.h2>
          <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.7, delay: 0.1 }} className="text-brand-grey mb-12 max-w-2xl">
            Comprehensive services tailored to your organisation's unique needs.
          </motion.p>
          <div className="space-y-4">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="group flex items-center gap-6 p-6 rounded-2xl border border-border hover:border-brand-green-dark/30 hover:bg-brand-green-dark/[0.02] transition-all duration-400"
              >
                <ArrowRight className="text-brand-green-dark shrink-0 group-hover:translate-x-1 transition-transform" size={20} />
                <div className="flex-1">
                  <h3 className="font-bold text-brand-black">{f.title}</h3>
                  <p className="text-brand-grey text-sm leading-relaxed mt-1">{f.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    )}

    <CtaSection />
  </PageLayout>
);

export default ServicePageSplit;
