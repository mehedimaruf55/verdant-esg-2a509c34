import { motion } from "framer-motion";
import { CheckCircle2, Leaf } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import CtaSection from "@/components/CtaSection";

const fadeUp = { hidden: { opacity: 0, y: 32 }, visible: { opacity: 1, y: 0 } };

interface ServicePageTimelineProps {
  subtitle: string;
  title: string;
  description: string;
  intro: string;
  processTitle?: string;
  processSteps?: { title: string; desc: string }[];
  features?: { title: string; desc: string }[];
}

const ServicePageTimeline = ({
  subtitle,
  title,
  description,
  intro,
  processTitle = "Our Approach",
  processSteps = [],
  features = [],
}: ServicePageTimelineProps) => (
  <PageLayout>
    <PageHero title={title} subtitle={subtitle} description={description} />

    {/* Intro with leaf watermark */}
    <section className="py-20 lg:py-32 px-5 lg:px-10 relative overflow-hidden">
      <Leaf className="absolute -right-20 top-10 w-[300px] h-[300px] text-brand-green-dark/[0.04] rotate-12" strokeWidth={0.5} />
      <div className="max-w-6xl mx-auto">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.7 }} className="max-w-3xl">
          <div className="w-12 h-1 bg-brand-green-dark rounded-full mb-6" />
          <p className="text-brand-grey leading-relaxed text-lg">{intro}</p>
        </motion.div>
      </div>
    </section>

    {/* Vertical Timeline */}
    {processSteps.length > 0 && (
      <section className="py-20 lg:py-28 px-5 lg:px-10 bg-brand-grey-light">
        <div className="max-w-6xl mx-auto">
          <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.7 }} className="text-2xl lg:text-4xl font-bold text-brand-black mb-16">
            {processTitle}
          </motion.h2>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-6 lg:left-8 top-0 bottom-0 w-px bg-brand-green-dark/20" />
            <div className="space-y-8 lg:space-y-12">
              {processSteps.map((step, i) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, x: -24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="relative pl-16 lg:pl-20"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-3.5 lg:left-5.5 top-1 w-5 h-5 rounded-full bg-brand-green-dark flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-white" />
                  </div>
                  <div className="rounded-2xl bg-white p-6 lg:p-8 border border-border shadow-sm">
                    <span className="text-brand-green-dark font-bold text-xs tracking-widest uppercase mb-2 block">Step {String(i + 1).padStart(2, "0")}</span>
                    <h3 className="text-xl font-bold text-brand-black mb-2">{step.title}</h3>
                    <p className="text-brand-grey text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    )}

    {/* Features — large cards with icons */}
    {features.length > 0 && (
      <section className="py-20 lg:py-32 px-5 lg:px-10">
        <div className="max-w-6xl mx-auto">
          <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.7 }} className="text-2xl lg:text-4xl font-bold text-brand-black mb-12">
            What We Deliver
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-6">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="group rounded-2xl border border-border p-8 lg:p-10 hover:border-brand-green-dark/30 hover:shadow-lg transition-all duration-500 relative overflow-hidden"
              >
                <div className="absolute -right-8 -bottom-8 w-32 h-32 rounded-full bg-brand-green-dark/[0.03] group-hover:bg-brand-green-dark/[0.06] transition-colors duration-500" />
                <div className="relative">
                  <CheckCircle2 className="text-brand-green-dark mb-4" size={28} />
                  <h3 className="text-lg font-bold text-brand-black mb-2">{f.title}</h3>
                  <p className="text-brand-grey text-sm leading-relaxed">{f.desc}</p>
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

export default ServicePageTimeline;
