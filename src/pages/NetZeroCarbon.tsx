import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import CtaSection from "@/components/CtaSection";

const steps = [
  { num: "01", title: "Measure", desc: "Your first step is to measure your carbon footprint and understand your starting point." },
  { num: "02", title: "Reduce", desc: "Our team then guide you through a roadmap of decarbonisation solutions including setting a clear Net Zero target." },
  { num: "03", title: "Offset", desc: "For residual emissions, we advise on high-quality carbon credits and offsetting projects that deliver real impact." },
  { num: "04", title: "Certify", desc: "We provide third-party certification so that each of your key milestones are verified and aligned with credible standards." },
];

const footprinting = [
  { title: "Organisation", desc: "Carbon footprint your business — understand Scope 1, 2 and 3 emissions across your entire organisation." },
  { title: "Building", desc: "Carbon footprint your buildings — measure operational and embodied carbon for new and existing buildings." },
  { title: "Product", desc: "Carbon footprint your products — assess the lifecycle carbon impact of your products and services." },
  { title: "Event", desc: "Carbon footprint your events — measure and offset the environmental impact of conferences, exhibitions and corporate events." },
];

const NetZeroCarbon = () => (
  <PageLayout>
    <PageHero
      title="Net Zero Carbon Consultants"
      subtitle="Services"
      description="Every organisation recognises the need to reach Net Zero Carbon, but not all understand how. Our expert consultants coach you through the 'how' with pragmatic solutions."
    />

    {/* Steps */}
    <section className="py-20 lg:py-32 px-5 lg:px-10">
      <div className="max-w-6xl mx-auto">
        <motion.h2 initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-2xl lg:text-3xl font-bold text-brand-black mb-12">
          Delivering a Real Net Zero Plan
        </motion.h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((s, i) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-2xl bg-brand-grey-light p-6 lg:p-8"
            >
              <div className="text-4xl font-bold text-brand-green-dark/20 mb-4">{s.num}</div>
              <h3 className="text-lg font-bold text-brand-black mb-2">{s.title}</h3>
              <p className="text-brand-grey text-sm leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Footprinting */}
    <section className="py-20 lg:py-28 px-5 lg:px-10 bg-brand-grey-light">
      <div className="max-w-6xl mx-auto">
        <motion.h2 initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-2xl lg:text-3xl font-bold text-brand-black mb-4">
          Carbon Footprinting Services
        </motion.h2>
        <motion.p initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="text-brand-grey mb-12 max-w-2xl">
          Whether for your organisation, building, product or event, we partner with you to build a tailored roadmap.
        </motion.p>
        <div className="grid sm:grid-cols-2 gap-5">
          {footprinting.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.6 }}
              className="group rounded-2xl bg-white border border-border p-6 lg:p-8 hover:border-brand-green-dark/20 hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-lg font-bold text-brand-black mb-2 group-hover:text-brand-green-dark transition-colors">{f.title}</h3>
              <p className="text-brand-grey text-sm leading-relaxed mb-4">{f.desc}</p>
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

export default NetZeroCarbon;
