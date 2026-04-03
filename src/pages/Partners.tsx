import { motion } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import CtaSection from "@/components/CtaSection";
import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";

const fadeUp = { hidden: { opacity: 0, y: 32 }, visible: { opacity: 1, y: 0 } };

const partners = [
  {
    name: "Natural Carbon Solutions",
    description: "Provides science-based carbon measurement, reduction, and reporting, helping organisations meet regulations, pursue net-zero, and access high-quality nature-based projects with measurable, credible climate impact.",
  },
  {
    name: "Puro Earth",
    description: "The world's leading crediting platform for engineered carbon removal who offer science-based removals for companies' offsetting needs.",
  },
  {
    name: "Ecologi",
    description: "Supports individuals and organisations seeking to mitigate their climate impact with a variety of environmental projects.",
  },
  {
    name: "The Good Guys",
    description: "A multi-award-winning team of creatives and digital marketers that focus on promoting the positive impact that brands have on the planet and people.",
  },
  {
    name: "Sustained Impact",
    description: "Empowering food manufacturers to reduce their product's environmental impact with innovative software.",
  },
  {
    name: "Mitiga",
    description: "Help companies analyse, report and act on their exposure to climate risk with their intelligent self-serve platform.",
  },
  {
    name: "AvISO",
    description: "An award-winning industry-leading ISO consultancy, software and training provider that support clients with ISO standards, management systems and compliance.",
  },
];

const Partners = () => (
  <PageLayout>
    <PageHero
      title="Our Partners and Affiliates"
      subtitle="About"
      description="See our list of partners and affiliates below to find out who we have been working closely together with to tackle sustainability challenges."
    />

    {/* Intro */}
    <section className="py-16 lg:py-24 px-5 lg:px-10">
      <div className="max-w-6xl mx-auto">
        <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.7 }} className="text-brand-grey leading-relaxed max-w-3xl text-lg">
          Our partners and affiliates come from a range of industries and have a shared passion for driving sustainability strategies to optimal results.
        </motion.p>
      </div>
    </section>

    {/* Partner Grid */}
    <section className="pb-20 lg:pb-32 px-5 lg:px-10">
      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {partners.map((p, i) => (
          <motion.div
            key={p.name}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.6 }}
            className="group rounded-2xl border border-border p-6 lg:p-8 hover:border-brand-green-dark/20 hover:shadow-lg transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-xl bg-brand-green-dark/10 flex items-center justify-center mb-5">
              <span className="text-brand-green-dark font-bold text-lg">{p.name[0]}</span>
            </div>
            <h3 className="text-lg font-bold text-brand-black mb-3 group-hover:text-brand-green-dark transition-colors">
              {p.name}
            </h3>
            <p className="text-brand-grey text-sm leading-relaxed">{p.description}</p>
          </motion.div>
        ))}
      </div>
    </section>

    {/* Become a Partner CTA */}
    <section className="py-20 lg:py-28 px-5 lg:px-10 bg-brand-green-dark">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.7 }} className="text-2xl lg:text-4xl font-bold text-brand-white mb-4">
          Interested in Partnering With Us?
        </motion.h2>
        <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.7, delay: 0.1 }} className="text-brand-white/70 mb-8 max-w-2xl mx-auto">
          We partner with businesses that recognise their responsibility in making a positive impact on the environment, and we help them accomplish it.
        </motion.p>
        <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-3 bg-brand-white text-brand-green-dark font-bold text-sm uppercase tracking-wider rounded-full hover:shadow-lg transition-all">
          Get in Touch <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  </PageLayout>
);

export default Partners;
