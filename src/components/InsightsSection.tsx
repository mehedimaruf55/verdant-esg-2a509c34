import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import leafImg from "@/assets/leaf.png";
import insight1 from "@/assets/insight-1.jpg";
import insight2 from "@/assets/insight-2.jpg";
import insight3 from "@/assets/insight-3.jpg";

const insights = [
  {
    image: insight1,
    title: "Sustainability for Business – The Outlook for 2026",
    excerpt:
      "Tighter greenwashing rules, rising Scope 3 supply chain pressure and carbon intensity metrics. What businesses must do to stay compliant.",
    date: "March 2026",
  },
  {
    image: insight2,
    title: "The Built Environment Outlook for 2026",
    excerpt:
      "BREEAM V7 transition, the Warm Homes Plan, and the Future Homes Standard. What these changes mean for delivery, cost and risk.",
    date: "February 2026",
  },
  {
    image: insight3,
    title: "Net Zero Targets: From Ambition to Action",
    excerpt:
      "How leading organisations are translating net-zero pledges into measurable, science-based strategies across their operations.",
    date: "January 2026",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: 0.15 * i, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  }),
};

const InsightsSection = () => {
  return (
    <section className="relative py-20 lg:py-36 bg-brand-white overflow-hidden">
      {/* Leaf watermark */}
      <motion.img
        src={leafImg}
        alt=""
        className="absolute -bottom-[10%] -right-[8%] w-[40vw] max-w-[550px] min-w-[280px] opacity-[0.18] select-none pointer-events-none rotate-[30deg] hidden sm:block"
        initial={{ opacity: 0, rotate: 25 }}
        whileInView={{ opacity: 0.08, rotate: 30 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      />

      <div className="relative z-10 mx-auto max-w-6xl px-5 lg:px-10">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 lg:gap-6 mb-10 lg:mb-14">
          <div>
            <motion.div
              className="flex items-center gap-3 mb-4 lg:mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <motion.span className="inline-block w-8 h-[2px] rounded-full bg-brand-green-light origin-left" initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }} />
              <span className="text-xs lg:text-sm font-semibold tracking-[0.18em] uppercase text-brand-green-light">
                Insights
              </span>
            </motion.div>

            <motion.h2
              className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold leading-[1.08] tracking-[-0.02em] text-brand-black"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              {"Our Insights".split(" ").map((word, i) => (
                <motion.span
                  key={i}
                  className="inline-block mr-[0.3em]"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.15 + i * 0.08 }}
                >
                  {word}
                </motion.span>
              ))}
            </motion.h2>

            <motion.p
              className="mt-3 lg:mt-4 max-w-xl text-sm lg:text-base leading-relaxed text-brand-grey"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.25 }}
            >
              Read our informed perspectives on some of the key sustainability
              opportunities and challenges facing businesses today.
            </motion.p>
          </div>

          <motion.a
            href="#insights"
            className="group inline-flex items-center gap-2 text-xs lg:text-sm font-bold tracking-[0.05em] uppercase text-brand-green-dark hover:text-brand-green-light transition-colors duration-300 shrink-0"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={{ x: 4, transition: { duration: 0.2 } }}
          >
            View All Insights
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
          </motion.a>
        </div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-8">
          {insights.map((item, i) => (
            <motion.a
              key={item.title}
              href="#"
              className="group block rounded-2xl lg:rounded-3xl overflow-hidden bg-brand-grey-light border border-transparent hover:border-border hover:shadow-xl transition-all duration-500"
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-[3/2]">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  width={800}
                  height={544}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Content */}
              <div className="p-5 lg:p-7">
                <span className="text-xs lg:text-sm font-semibold tracking-[0.15em] uppercase text-brand-grey">
                  {item.date}
                </span>
                <h3 className="mt-2 lg:mt-3 text-base lg:text-lg font-heading font-bold leading-snug text-brand-black group-hover:text-brand-green-dark transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="mt-2 lg:mt-3 text-sm lg:text-base leading-relaxed text-brand-grey line-clamp-3">
                  {item.excerpt}
                </p>
                <div className="mt-4 lg:mt-5 inline-flex items-center gap-2 text-xs lg:text-sm font-bold text-brand-green-dark group-hover:text-brand-green-light transition-colors duration-300">
                  Read More
                  <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InsightsSection;
