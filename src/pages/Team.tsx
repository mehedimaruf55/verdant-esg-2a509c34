import { motion } from "framer-motion";
import { ArrowRight, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";
import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";

const management = [
  { name: "Chris Hocknell", role: "Director" },
  { name: "Stacey Cougill", role: "Director" },
  { name: "Yiota Paraskeva", role: "Technical Director" },
  { name: "Becky Armstrong", role: "Associate Director" },
];

const team = [
  { name: "Agathe Revil", role: "Senior Building Performance & LCA Consultant" },
  { name: "Alexandra Molnar", role: "Sustainability & Environmental Assessment Consultant" },
  { name: "Ancuta Doroftei", role: "Lead Sustainability & Environmental Assessment Consultant" },
  { name: "Andreea Andrei", role: "Senior Sustainability & Environmental Assessment Consultant" },
  { name: "Daniel Champ", role: "Head Systems Analyst" },
  { name: "Ellie Collier", role: "Ecology & Biodiversity Net Gain Consultant" },
  { name: "Ellie Hyland", role: "Sustainability & Environmental Assessment Consultant" },
  { name: "Emily Cummins", role: "Senior Ecology & Biodiversity Net Gain Consultant" },
  { name: "Erica Asta", role: "Senior Sustainability & Health & Wellbeing Consultant" },
  { name: "Ethan Baddeliyanage", role: "Senior Sustainability & Carbon Footprint Consultant" },
  { name: "Francisca Catana", role: "Sustainability & Environmental Assessment Consultant" },
  { name: "Nikita Vasilev", role: "Senior Environmental Engineer" },
  { name: "Paridhi Goyal", role: "Senior Building Performance & LCA Consultant" },
  { name: "Valentina Mitrea", role: "Senior Sustainability & Environmental Assessment Consultant" },
];

const getInitials = (name: string) => name.split(" ").map((n) => n[0]).join("").slice(0, 2);

const MemberCard = ({ name, role, featured }: { name: string; role: string; featured?: boolean }) => (
  <motion.div
    initial={{ opacity: 0, y: 32 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    className={`group rounded-2xl border border-border p-6 text-center hover:border-brand-green-dark/20 hover:shadow-lg transition-all duration-300 ${featured ? "bg-brand-green-dark text-brand-white" : ""}`}
  >
    <div className={`w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center text-xl font-bold ${featured ? "bg-brand-white/20 text-brand-white" : "bg-brand-green-dark/10 text-brand-green-dark"}`}>
      {getInitials(name)}
    </div>
    <h3 className={`text-base font-bold mb-1 ${featured ? "" : "text-brand-black"}`}>{name}</h3>
    <p className={`text-xs ${featured ? "text-brand-white/70" : "text-brand-grey"}`}>{role}</p>
  </motion.div>
);

const Team = () => (
  <PageLayout>
    <PageHero
      title="Meet Our Team"
      subtitle="Our People"
      description="Meet our highly personable team of consultants, architects, engineers, and ecologists who come up with innovative solutions to our clients' sustainability challenges."
    />

    {/* Management */}
    <section className="py-20 lg:py-28 px-5 lg:px-10">
      <div className="max-w-6xl mx-auto">
        <motion.h2 initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-2xl lg:text-3xl font-bold text-brand-black mb-10">
          Management Team
        </motion.h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {management.map((m) => (
            <MemberCard key={m.name} {...m} featured />
          ))}
        </div>
      </div>
    </section>

    {/* Team */}
    <section className="py-20 lg:py-28 px-5 lg:px-10 bg-brand-grey-light">
      <div className="max-w-6xl mx-auto">
        <motion.h2 initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-2xl lg:text-3xl font-bold text-brand-black mb-10">
          Sustainability Team
        </motion.h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {team.map((m) => (
            <MemberCard key={m.name} {...m} />
          ))}
        </div>
      </div>
    </section>

    {/* Join Us */}
    <section className="py-20 lg:py-28 px-5 lg:px-10">
      <div className="max-w-4xl mx-auto">
        <motion.h2 initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-2xl lg:text-3xl font-bold text-brand-black mb-4">
          Join Us
        </motion.h2>
        <motion.p initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="text-brand-grey leading-relaxed mb-8">
          We're a highly collaborative team of intelligent, dynamic and enthusiastic professionals. We welcome like-minded people who are passionate about sustainability and the environment.
        </motion.p>
        <Link to="/careers" className="inline-flex items-center gap-2 px-8 py-3 bg-brand-green-dark text-brand-white font-bold text-sm uppercase tracking-wider rounded-full hover:bg-brand-green-light hover:text-brand-black hover:shadow-lg transition-all">
          View Careers <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  </PageLayout>
);

export default Team;
