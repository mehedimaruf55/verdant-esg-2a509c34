import { motion } from "framer-motion";
import leafImg from "@/assets/leaf.png";

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  }),
};

const MissionVisionSection = () => {
  return (
    <section id="mission" className="relative py-28 lg:py-36 bg-brand-grey-light overflow-hidden">
      <img
        src={leafImg}
        alt=""
        className="absolute -top-[5%] -right-[6%] w-[40vw] max-w-[550px] min-w-[280px] opacity-[0.10] select-none pointer-events-none rotate-[25deg]"
      />

      <div className="mx-auto max-w-6xl px-6 lg:px-10 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="inline-block w-8 h-[2px] rounded-full bg-brand-green-light" />
            <span className="text-[12px] font-semibold tracking-[0.18em] uppercase text-brand-green-light">Purpose</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-bold leading-[1.08] tracking-[-0.02em] text-brand-black">
            Mission & Vision
          </h2>
        </motion.div>

        <div className="mt-14 grid lg:grid-cols-2 gap-6">
          {[
            {
              color: "bg-brand-green-dark",
              label: "Our Mission",
              heading: "To empower organizations with the clarity and tools they need to embed sustainability at the heart of their strategy.",
              body: "We bridge the gap between ambition and action — delivering data-driven ESG solutions that create measurable value for businesses, communities, and the environment.",
            },
            {
              color: "bg-brand-green-light",
              label: "Our Vision",
              heading: "A world where every business decision accounts for its impact on people and the planet.",
              body: "We envision a future where sustainability is not a separate initiative but an integral part of how organizations operate, innovate, and grow.",
            },
          ].map((card, i) => (
            <motion.div
              key={card.label}
              className="bg-brand-white rounded-3xl p-10 lg:p-12 border border-border hover:shadow-lg transition-shadow duration-500"
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ y: -4, transition: { duration: 0.25 } }}
            >
              <motion.div
                className={`w-10 h-[3px] rounded-full ${card.color} mb-6`}
                initial={{ width: 0 }}
                whileInView={{ width: 40 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.15 }}
              />
              <span className="text-[12px] font-medium tracking-[0.15em] uppercase text-brand-grey">{card.label}</span>
              <h3 className="mt-4 text-xl lg:text-2xl font-heading font-bold text-brand-black leading-snug">
                {card.heading}
              </h3>
              <p className="mt-5 text-[15px] text-brand-grey leading-relaxed">
                {card.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionVisionSection;
