import { motion } from "framer-motion";
import { ArrowRight, Users, Award, Building2, Leaf } from "lucide-react";
import { Link } from "react-router-dom";
import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import CtaSection from "@/components/CtaSection";

const stats = [
  { num: "17+", label: "Years Experience" },
  { num: "4,000+", label: "Sustainability Projects" },
  { num: "98%", label: "Client Retention" },
];

const services = [
  { title: "Corporate Sustainability", desc: "Helping organisations deliver on their sustainability goals", href: "/services/corporate-sustainability", icon: Building2 },
  { title: "Built Environment", desc: "Expert solutions for sustainable building projects", href: "/services/built-environment", icon: Leaf },
  { title: "Net Zero Carbon", desc: "Supporting organisations on their journey to Net Zero", href: "/services/net-zero-carbon", icon: Award },
  { title: "Assurance & Certification", desc: "Credible verification and certification methods", href: "/services/assurance-certification", icon: Users },
];

const fadeUp = { hidden: { opacity: 0, y: 32 }, visible: { opacity: 1, y: 0 } };

const About = () => (
  <PageLayout>
    <PageHero
      title="We Help Accomplish Your Sustainability Goals"
      subtitle="About Us"
    />

    {/* Story */}
    <section className="py-20 lg:py-32 px-5 lg:px-10">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}>
          <h2 className="text-2xl lg:text-4xl font-bold text-brand-black mb-6">Our Story</h2>
          <p className="text-brand-grey leading-relaxed mb-4">
            Verdant ESG began life as a consultancy specialising in the built environment, and over time we have developed our expertise to provide multiple sustainability services across a broad range of industries.
          </p>
          <p className="text-brand-grey leading-relaxed mb-4">
            Based in the UK, we have over 17 years' experience working on more than 4,000+ sustainability projects, including several award-winning schemes.
          </p>
          <p className="text-brand-grey leading-relaxed">
            Our growth includes partnerships and certification services, working closely with organisations to deliver a full suite of carbon footprinting, offsetting and certification solutions.
          </p>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.7, delay: 0.15 }}>
          <div className="grid grid-cols-2 gap-4">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                className={`rounded-2xl p-6 lg:p-8 ${i === 0 ? "col-span-2 bg-brand-green-dark text-brand-white" : "bg-brand-grey-light text-brand-black"}`}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <div className={`text-3xl lg:text-5xl font-bold mb-1 ${i === 0 ? "" : "text-brand-green-dark"}`}>{s.num}</div>
                <div className={`text-sm ${i === 0 ? "text-brand-white/70" : "text-brand-grey"}`}>{s.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>

    {/* Extension of Your Team */}
    <section className="py-20 lg:py-28 px-5 lg:px-10 bg-brand-grey-light">
      <div className="max-w-6xl mx-auto">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.7 }} className="max-w-3xl">
          <h2 className="text-2xl lg:text-4xl font-bold text-brand-black mb-6">An Extension of Your Team</h2>
          <p className="text-brand-grey leading-relaxed mb-4">
            Our approach is holistic. We examine every aspect of your business and offer bespoke sustainability support that engages your entire organisation. Thanks to the extensive range of experts in our collective group, we bring an array of stress-free solutions to your sustainability challenges.
          </p>
          <p className="text-brand-grey leading-relaxed mb-8">
            You can think of our personable experts as simply an extension of your team, channelling their passion for sustainability right to the heart of your organisation.
          </p>
          <Link to="/team" className="inline-flex items-center gap-2 text-brand-green-dark font-bold text-sm uppercase tracking-wider hover:gap-3 transition-all">
            Meet Our Team <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>

    {/* Our Services */}
    <section className="py-20 lg:py-32 px-5 lg:px-10">
      <div className="max-w-6xl mx-auto">
        <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.7 }} className="text-2xl lg:text-4xl font-bold text-brand-black mb-4">
          Our Services
        </motion.h2>
        <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.7, delay: 0.1 }} className="text-brand-grey mb-12 max-w-2xl">
          We are here to support you with sustainability services that help you fulfil your ambitious environmental targets.
        </motion.p>
        <div className="grid sm:grid-cols-2 gap-4">
          {services.map((s, i) => (
            <motion.div key={s.title} initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.6 }}>
              <Link to={s.href} className="group block rounded-2xl border border-border p-6 lg:p-8 hover:border-brand-green-dark/20 hover:shadow-lg transition-all duration-300">
                <s.icon className="text-brand-green-dark mb-4" size={28} />
                <h3 className="text-lg font-bold text-brand-black mb-2 group-hover:text-brand-green-dark transition-colors">{s.title}</h3>
                <p className="text-brand-grey text-sm leading-relaxed">{s.desc}</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <CtaSection />
  </PageLayout>
);

export default About;
