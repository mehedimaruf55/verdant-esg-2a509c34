import { motion } from "framer-motion";
import { ArrowRight, Building2, Leaf, Award, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";

const services = [
  {
    title: "Corporate Sustainability",
    desc: "Helping organisations deliver on their sustainability goals with ESG strategy, climate resilience, and stakeholder reporting.",
    href: "/services/corporate-sustainability",
    icon: Building2,
    items: ["ESG Consulting", "Real Estate ESG", "Net Zero Carbon", "Climate Resilience", "TCFD & TNFD Advisory"],
  },
  {
    title: "Built Environment",
    desc: "Providing expert solutions for a variety of building project needs — from planning through to certification.",
    href: "/services/built-environment",
    icon: Leaf,
    items: ["Sustainability for Planning", "Environmental Assessment", "Building Performance", "Biodiversity", "Life Cycle Assessment"],
  },
  {
    title: "Net Zero Carbon",
    desc: "Supporting organisations on their journey to Net Zero Carbon with pragmatic measurement, reduction and offsetting strategies.",
    href: "/services/net-zero-carbon",
    icon: Award,
    items: ["Organisation Footprinting", "Building Footprinting", "Product Footprinting", "Event Footprinting"],
  },
  {
    title: "Assurance & Certification",
    desc: "Offering credible verification and certification methods for both the built and corporate world.",
    href: "/services/assurance-certification",
    icon: Shield,
    items: ["Environmental Assessment", "Carbon Neutral Certification", "BREEAM", "WELL", "LEED"],
  },
];

const Services = () => (
  <PageLayout>
    <PageHero
      title="Sustainability Solutions Made Simple"
      subtitle="Our Services"
      description="We offer sustainability strategy, planning, implementation and compliance for both the built and corporate environment."
    />

    {/* Service Cards */}
    <section className="py-20 lg:py-32 px-5 lg:px-10">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 48 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <Link to={s.href} className="group block rounded-3xl border border-border p-8 lg:p-10 hover:border-brand-green-dark/20 hover:shadow-xl transition-all duration-300 h-full">
              <s.icon className="text-brand-green-dark mb-5" size={32} />
              <h3 className="text-xl font-bold text-brand-black mb-3 group-hover:text-brand-green-dark transition-colors">{s.title}</h3>
              <p className="text-brand-grey text-sm leading-relaxed mb-6">{s.desc}</p>
              <ul className="space-y-2 mb-6">
                {s.items.map((item) => (
                  <li key={item} className="text-sm text-brand-black/70 flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-green-dark/40" />
                    {item}
                  </li>
                ))}
              </ul>
              <span className="inline-flex items-center gap-2 text-brand-green-dark font-bold text-xs uppercase tracking-wider group-hover:gap-3 transition-all">
                Learn More <ArrowRight size={14} />
              </span>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>

    {/* FAQ CTA */}
    <section className="py-16 lg:py-24 px-5 lg:px-10 bg-brand-grey-light">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2 initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-2xl lg:text-3xl font-bold text-brand-black mb-4">
          Have Questions?
        </motion.h2>
        <motion.p initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="text-brand-grey mb-8">
          Get in touch with our team to discuss how we can help with your sustainability goals.
        </motion.p>
        <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-3 bg-brand-green-dark text-brand-white font-bold text-sm uppercase tracking-wider rounded-full hover:bg-brand-green-light hover:shadow-lg transition-all">
          Contact Us <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  </PageLayout>
);

export default Services;
