import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Send } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    company: "",
    email: "",
    interest: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    const { error } = await supabase.from("form_submissions").insert({
      name: `${form.firstName.trim()} ${form.lastName.trim()}`.trim(),
      email: form.email.trim(),
      company: form.company.trim() || null,
      message: `${form.interest ? `[${form.interest}] ` : ""}${form.message.trim()}`,
      source: "contact",
    });
    setSubmitting(false);
    if (!error) {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 4000);
      setForm({ firstName: "", lastName: "", company: "", email: "", interest: "", message: "" });
    }
  };

  const inputClass = "w-full rounded-xl border border-border px-4 py-3 text-sm bg-white focus:border-brand-green-dark focus:ring-1 focus:ring-brand-green-dark/20 outline-none transition-all";

  return (
    <PageLayout>
      <PageHero
        title="Contact Us"
        subtitle="Get in Touch"
        description="Thank you for your interest in Verdant ESG. Fill out the form or reach us directly."
      />

      <section className="py-20 lg:py-32 px-5 lg:px-10">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Info */}
          <motion.div initial={{ opacity: 0, x: -24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }} className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-brand-black mb-8">Our Location</h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <MapPin className="text-brand-green-dark shrink-0 mt-1" size={20} />
                <div>
                  <p className="text-brand-black font-medium">Verdant ESG</p>
                  <p className="text-brand-grey text-sm">London, United Kingdom</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Phone className="text-brand-green-dark shrink-0 mt-1" size={20} />
                <div>
                  <p className="text-brand-grey text-sm">+44 (0)20 7043 0418</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Mail className="text-brand-green-dark shrink-0 mt-1" size={20} />
                <div>
                  <a href="mailto:hello@verdantesg.com" className="text-brand-green-dark text-sm font-medium hover:underline">hello@verdantesg.com</a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.1 }} className="lg:col-span-3">
            {submitted ? (
              <div className="rounded-2xl bg-brand-green-dark/10 p-12 text-center">
                <h3 className="text-xl font-bold text-brand-green-dark mb-2">Thank You!</h3>
                <p className="text-brand-grey">We'll get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-xs font-bold text-brand-black uppercase tracking-wider mb-1.5 block">First Name</label>
                    <input required value={form.firstName} onChange={(e) => setForm({ ...form, firstName: e.target.value })} className={inputClass} />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-brand-black uppercase tracking-wider mb-1.5 block">Last Name</label>
                    <input required value={form.lastName} onChange={(e) => setForm({ ...form, lastName: e.target.value })} className={inputClass} />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-xs font-bold text-brand-black uppercase tracking-wider mb-1.5 block">Company</label>
                    <input value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} className={inputClass} />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-brand-black uppercase tracking-wider mb-1.5 block">Email</label>
                    <input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className={inputClass} />
                  </div>
                </div>
                <div>
                  <label className="text-xs font-bold text-brand-black uppercase tracking-wider mb-1.5 block">Area of Interest</label>
                  <select value={form.interest} onChange={(e) => setForm({ ...form, interest: e.target.value })} className={inputClass}>
                    <option value="">Select...</option>
                    <option>Corporate Sustainability</option>
                    <option>Built Environment</option>
                    <option>Net Zero Carbon</option>
                    <option>Assurance & Certification</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs font-bold text-brand-black uppercase tracking-wider mb-1.5 block">Message</label>
                  <textarea required rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className={`${inputClass} resize-none`} />
                </div>
                <button type="submit" disabled={submitting} className="inline-flex items-center gap-2 px-8 py-3 bg-brand-green-dark text-brand-white font-bold text-sm uppercase tracking-wider rounded-full hover:bg-brand-green-light hover:text-brand-black hover:shadow-lg transition-all disabled:opacity-50">
                  {submitting ? "Submitting…" : "Submit"} <Send size={14} />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Contact;
