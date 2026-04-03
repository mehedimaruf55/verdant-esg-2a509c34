import { motion } from "framer-motion";
import { ArrowRight, MapPin, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";

const openings = [
  { title: "Senior Sustainability Consultant", location: "London, UK", type: "Full-time" },
  { title: "Building Performance & LCA Consultant", location: "London, UK", type: "Full-time" },
  { title: "Ecology & Biodiversity Net Gain Consultant", location: "London / Remote", type: "Full-time" },
  { title: "ESG Analyst", location: "London, UK", type: "Full-time" },
  { title: "Graduate Sustainability Consultant", location: "London, UK", type: "Full-time" },
];

const values = [
  { title: "Collaborative", desc: "We work together as a team, sharing knowledge and expertise to deliver the best outcomes." },
  { title: "Passionate", desc: "We are genuinely passionate about sustainability and making a positive environmental impact." },
  { title: "Innovative", desc: "We encourage creative thinking and embrace new approaches to sustainability challenges." },
  { title: "Supportive", desc: "We invest in our people's development with mentoring, training and career progression." },
];

const Careers = () => (
  <PageLayout>
    <PageHero
      title="Careers in Sustainability"
      subtitle="Join Our Team"
      description="We're a highly collaborative team of intelligent, dynamic and enthusiastic professionals. We welcome like-minded people who are passionate about sustainability."
    />

    {/* Values */}
    <section className="py-20 lg:py-28 px-5 lg:px-10">
      <div className="max-w-6xl mx-auto">
        <motion.h2 initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-2xl lg:text-3xl font-bold text-brand-black mb-10">
          Why Join Verdant ESG?
        </motion.h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.6 }}
              className="rounded-2xl bg-brand-grey-light p-6"
            >
              <h3 className="text-base font-bold text-brand-black mb-2">{v.title}</h3>
              <p className="text-brand-grey text-sm leading-relaxed">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Openings */}
    <section className="py-20 lg:py-28 px-5 lg:px-10 bg-brand-grey-light">
      <div className="max-w-6xl mx-auto">
        <motion.h2 initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-2xl lg:text-3xl font-bold text-brand-black mb-10">
          Current Openings
        </motion.h2>
        <div className="space-y-4">
          {openings.map((o, i) => (
            <motion.div
              key={o.title}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.5 }}
              className="group flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 bg-white rounded-2xl border border-border p-5 lg:p-6 hover:border-brand-green-dark/20 hover:shadow-lg transition-all duration-300 cursor-pointer"
            >
              <div className="flex-1">
                <h3 className="text-base font-bold text-brand-black group-hover:text-brand-green-dark transition-colors">{o.title}</h3>
                <div className="flex items-center gap-4 mt-1.5">
                  <span className="flex items-center gap-1 text-xs text-brand-grey"><MapPin size={12} /> {o.location}</span>
                  <span className="flex items-center gap-1 text-xs text-brand-grey"><Clock size={12} /> {o.type}</span>
                </div>
              </div>
              <span className="inline-flex items-center gap-1.5 text-brand-green-dark font-bold text-xs uppercase tracking-wider group-hover:gap-2.5 transition-all shrink-0">
                Apply <ArrowRight size={13} />
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-16 lg:py-24 px-5 lg:px-10">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2 initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-2xl lg:text-3xl font-bold text-brand-black mb-4">
          Don't See the Right Role?
        </motion.h2>
        <motion.p initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="text-brand-grey mb-8">
          Send us your CV and we'll keep you in mind for future opportunities.
        </motion.p>
        <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-3 bg-brand-green-dark text-brand-white font-bold text-sm uppercase tracking-wider rounded-full hover:bg-brand-green-light hover:text-brand-black hover:shadow-lg transition-all">
          Get in Touch <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  </PageLayout>
);

export default Careers;
