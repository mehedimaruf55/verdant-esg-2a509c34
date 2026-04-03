import { motion } from "framer-motion";
import { Leaf, Sparkles } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import CtaSection from "@/components/CtaSection";

const fadeUp = { hidden: { opacity: 0, y: 32 }, visible: { opacity: 1, y: 0 } };

interface ServicePageMagazineProps {
  subtitle: string;
  title: string;
  description: string;
  intro: string;
  processTitle?: string;
  processSteps?: { title: string; desc: string }[];
  features?: { title: string; desc: string }[];
}

const ServicePageMagazine = ({
  subtitle,
  title,
  description,
  intro,
  processTitle = "Our Approach",
  processSteps = [],
  features = [],
}: ServicePageMagazineProps) => (
  <PageLayout>
    <PageHero title={title} subtitle={subtitle} description={description} />

    {/* Editorial Intro — full-width tinted band */}
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-brand-green-dark/[0.03] to-transparent" />
      <Leaf className="absolute right-10 bottom-0 w-[200px] h-[200px] text-brand-green-dark/[0.04] -rotate-45" strokeWidth={0.5} />
      <div className="relative py-20 lg:py-32 px-5 lg:px-10">
        <div className="max-w-6xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.7 }}>
            <span className="text-brand-green-dark text-sm font-bold tracking-widest uppercase mb-4 block">Overview</span>
            <p className="text-brand-black/80 leading-relaxed text-xl lg:text-2xl font-light max-w-4xl">{intro}</p>
          </motion.div>
        </div>
      </div>
    </section>

    {/* Process — bento grid */}
    {processSteps.length > 0 && (
      <section className="py-20 lg:py-28 px-5 lg:px-10">
        <div className="max-w-6xl mx-auto">
          <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.7 }} className="text-2xl lg:text-4xl font-bold text-brand-black mb-4">
            {processTitle}
          </motion.h2>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.7, delay: 0.1 }} className="w-16 h-1 bg-brand-green-dark rounded-full mb-12" />
          <div className={`grid gap-5 ${processSteps.length <= 3 ? 'lg:grid-cols-3' : processSteps.length === 4 ? 'sm:grid-cols-2' : 'sm:grid-cols-2 lg:grid-cols-3'}`}>
            {processSteps.map((step, i) => {
              const isLarge = i === 0 && processSteps.length >= 4;
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, scale: 0.96, y: 24 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className={`rounded-3xl border border-border p-8 lg:p-10 relative overflow-hidden group hover:shadow-md transition-shadow duration-500 ${isLarge ? 'sm:col-span-2 bg-brand-green-dark text-white' : 'bg-white'}`}
                >
                  {isLarge && <div className="absolute -right-10 -top-10 w-40 h-40 rounded-full bg-white/[0.05]" />}
                  <Sparkles className={`mb-4 ${isLarge ? 'text-brand-mint' : 'text-brand-green-dark'}`} size={22} />
                  <h3 className={`text-lg font-bold mb-2 ${isLarge ? 'text-white' : 'text-brand-black'}`}>{step.title}</h3>
                  <p className={`text-sm leading-relaxed ${isLarge ? 'text-white/80' : 'text-brand-grey'}`}>{step.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    )}

    {/* Features — minimal list with dividers */}
    {features.length > 0 && (
      <section className="py-20 lg:py-32 px-5 lg:px-10 bg-brand-grey-light">
        <div className="max-w-6xl mx-auto">
          <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.7 }} className="text-2xl lg:text-4xl font-bold text-brand-black mb-12">
            Our Expertise
          </motion.h2>
          <div className="divide-y divide-border">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="py-8 lg:py-10 grid lg:grid-cols-3 gap-4"
              >
                <h3 className="text-lg font-bold text-brand-black lg:col-span-1">{f.title}</h3>
                <p className="text-brand-grey leading-relaxed lg:col-span-2">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    )}

    <CtaSection />
  </PageLayout>
);

export default ServicePageMagazine;
