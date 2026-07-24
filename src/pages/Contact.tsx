import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import leafImg from "@/assets/leaf.png";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setForm({ name: "", email: "", company: "", message: "" });
    setTimeout(() => setSent(false), 5000);
  };

  return (
    <div className="min-h-screen bg-brand-white">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-36 lg:pt-44 pb-12 lg:pb-20 overflow-hidden bg-gradient-to-br from-[hsl(154,40%,96%)] via-brand-white to-[hsl(150,30%,94%)]">
        <img
          src={leafImg}
          alt=""
          className="absolute -right-16 -top-6 w-[320px] lg:w-[520px] opacity-[0.08] pointer-events-none select-none"
        />
        <div className="max-w-6xl mx-auto px-5 lg:px-10 relative z-10">
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-brand-green-dark font-bold text-xs uppercase tracking-[0.18em] mb-4"
          >
            Get in Touch
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl md:text-4xl lg:text-[3.75rem] font-heading font-bold text-brand-black leading-[1.08] tracking-[-0.02em] max-w-3xl"
          >
            Assess your regulatory exposure with a technical consultation.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-5 lg:mt-6 text-brand-grey text-base lg:text-lg max-w-2xl leading-relaxed"
          >
            Share the environmental claims you're publishing — or preparing to. We'll respond within one business day with next steps and a scoped engagement plan.
          </motion.p>
        </div>
      </section>

      {/* Form + Details */}
      <section className="py-16 lg:py-24 bg-brand-white">
        <div className="max-w-6xl mx-auto px-5 lg:px-10 grid lg:grid-cols-5 gap-10 lg:gap-16">
          {/* Details */}
          <motion.div
            className="lg:col-span-2 space-y-8"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <span className="text-xs font-bold tracking-[0.18em] uppercase text-brand-green-dark">
                Direct Contact
              </span>
              <h2 className="mt-3 text-2xl lg:text-3xl font-heading font-bold text-brand-black leading-tight">
                Speak with our compliance team.
              </h2>
              <p className="mt-3 text-sm lg:text-base text-brand-grey leading-relaxed">
                Every enquiry is reviewed by a senior advisor before a response is sent.
              </p>
            </div>

            <div className="space-y-5">
              {[
                { icon: Mail, label: "Email", value: "hello@verdantesg.com", href: "mailto:hello@verdantesg.com" },
                { icon: Phone, label: "Phone", value: "+44 20 0000 0000", href: "tel:+442000000000" },
                { icon: MapPin, label: "Office", value: "London, United Kingdom" },
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="flex items-start gap-4 group"
                >
                  <div className="w-11 h-11 rounded-full bg-brand-green-dark/[0.06] flex items-center justify-center shrink-0 group-hover:bg-brand-green-dark/[0.12] transition-colors">
                    <item.icon size={16} className="text-brand-green-dark" />
                  </div>
                  <div>
                    <div className="text-[11px] font-bold tracking-[0.18em] uppercase text-brand-grey mb-1">
                      {item.label}
                    </div>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-sm lg:text-base text-brand-black hover:text-brand-green-dark transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <div className="text-sm lg:text-base text-brand-black">{item.value}</div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="pt-6 border-t border-brand-black/[0.08]">
              <p className="text-xs uppercase tracking-[0.18em] font-bold text-brand-grey mb-2">Response Time</p>
              <p className="text-sm text-brand-black/80 leading-relaxed">
                We reply to all serious enquiries within <span className="text-brand-green-dark font-semibold">one business day</span>.
              </p>
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="lg:col-span-3 bg-gradient-to-br from-[hsl(154,40%,97%)] to-brand-white border border-brand-black/[0.06] rounded-2xl lg:rounded-[2rem] p-6 md:p-10 lg:p-12"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="grid md:grid-cols-2 gap-5 lg:gap-6">
              <Field label="Full Name" name="name" value={form.name} onChange={handleChange} required />
              <Field label="Work Email" name="email" type="email" value={form.email} onChange={handleChange} required />
            </div>
            <div className="mt-5 lg:mt-6">
              <Field label="Company" name="company" value={form.company} onChange={handleChange} />
            </div>
            <div className="mt-5 lg:mt-6">
              <label className="block text-[11px] font-bold tracking-[0.18em] uppercase text-brand-grey mb-2">
                How can we help?
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                placeholder="Briefly describe the claims, campaigns, or regulatory concerns you'd like reviewed."
                className="w-full px-4 py-3 lg:px-5 lg:py-4 rounded-2xl bg-brand-white border border-brand-black/[0.08] text-sm lg:text-base text-brand-black placeholder:text-brand-grey/60 focus:outline-none focus:border-brand-green-dark/40 focus:bg-brand-white transition-colors resize-none"
              />
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="mt-7 lg:mt-8 group inline-flex items-center gap-3"
            >
              <span className="px-6 py-3 lg:px-7 lg:py-4 text-xs lg:text-sm font-bold tracking-wide bg-brand-green-dark text-brand-white rounded-full group-hover:bg-brand-green-light group-hover:text-brand-black transition-colors">
                Send Enquiry
              </span>
              <span className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-brand-green-dark flex items-center justify-center group-hover:bg-brand-green-light transition-colors duration-300">
                <ArrowRight size={15} className="text-brand-white group-hover:text-brand-black group-hover:translate-x-0.5 transition-all duration-300" />
              </span>
            </motion.button>

            {sent && (
              <motion.p
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-5 text-sm text-brand-green-dark font-medium"
              >
                ✓ Thanks — your enquiry has been received. We'll be in touch shortly.
              </motion.p>
            )}
          </motion.form>
        </div>
      </section>

      <Footer />
    </div>
  );
};

const Field = ({
  label,
  name,
  value,
  onChange,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  required?: boolean;
}) => (
  <div>
    <label className="block text-[11px] font-bold tracking-[0.18em] uppercase text-brand-grey mb-2">
      {label}
    </label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      required={required}
      className="w-full px-4 py-3 lg:px-5 lg:py-3.5 rounded-full bg-brand-white border border-brand-black/[0.08] text-sm lg:text-base text-brand-black placeholder:text-brand-grey/60 focus:outline-none focus:border-brand-green-dark/40 transition-colors"
    />
  </div>
);

export default Contact;
