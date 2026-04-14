import { motion } from "framer-motion";

import leafImg from "@/assets/leaf.png";

const principles = [
  {
    num: "01",
    title: "Truthful and Accurate",
    desc: "Move beyond halo effects and into factual precision.",
  },
  {
    num: "02",
    title: "Clear and Unambiguous",
    desc: "Ensure consumers aren't misled by technical jargon.",
  },
  {
    num: "03",
    title: "No Omission of Material Information",
    desc: "Provide the full picture of environmental impacts.",
  },
  {
    num: "04",
    title: "Fair and Meaningful Comparisons",
    desc: 'Defend your "greenest" or "more sustainable" assertions.',
  },
  {
    num: "05",
    title: "Contextually Complete",
    desc: "Prove that a benefit in one section of the product's lifecycle is not offset by negative impacts in another.",
  },
  {
    num: "06",
    title: "Full Substantiation",
    desc: "Build the contemporaneous evidence packs needed to mount a defence.",
  },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardFade = {
  hidden: { opacity: 0, y: 48 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
};

const MissionVisionSection = () => {
  return (
    <section
      id="framework"
      className="relative py-20 lg:py-36 bg-brand-grey-light overflow-hidden"
    >
      <img
        src={leafImg}
        alt=""
        className="absolute -top-[5%] -right-[6%] w-[40vw] max-w-[550px] min-w-[280px] opacity-[0.22] select-none pointer-events-none rotate-[25deg] hidden sm:block"
      />

      <div className="mx-auto max-w-6xl px-5 lg:px-10 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mb-10 lg:mb-14"
        >
          <div className="flex items-center gap-3 mb-4 lg:mb-6">
            <motion.span className="inline-block w-8 h-[2px] rounded-full bg-brand-green-light origin-left" initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }} />
            <span className="text-xs lg:text-sm font-semibold tracking-[0.18em] uppercase text-brand-green-dark">
              The Framework
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold leading-[1.08] tracking-[-0.02em] text-brand-black">
            CMA's Six-Point Test
          </h2>
          <h3 className="mt-3 lg:mt-4 text-lg lg:text-2xl font-heading font-bold text-brand-green-dark">
            Precision over Persuasion
          </h3>
          <p className="mt-4 text-sm lg:text-base text-brand-grey leading-relaxed max-w-2xl">
            We align your commercial output with the CMA Green Claims Code. Our consultancy ensures that every statement satisfies the six fundamental principles of the new regulatory framework.
          </p>
        </motion.div>

        {/* Six principles grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {principles.map((p) => (
            <motion.div
              key={p.num}
              className="group bg-brand-white rounded-2xl lg:rounded-3xl p-6 lg:p-8 border border-border hover:shadow-lg hover:border-brand-green-dark/20 transition-all duration-500 relative overflow-hidden"
              variants={cardFade}
              whileHover={{ y: -4, transition: { duration: 0.25 } }}
            >
              <div className="flex items-start gap-4">
                <span className="text-3xl lg:text-4xl font-heading font-bold text-brand-green-light/40 leading-none">
                  {p.num}
                </span>
                <div>
                  <h4 className="text-base lg:text-lg font-heading font-bold text-brand-black group-hover:text-brand-green-dark transition-colors duration-300">
                    {p.title}
                  </h4>
                  <p className="mt-2 text-sm text-brand-grey leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-brand-green-light group-hover:w-full transition-all duration-500 rounded-full" />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 lg:mt-14 border-l-4 border-brand-green-dark pl-6 lg:pl-10 py-2"
        >
          <p className="text-base lg:text-lg text-brand-grey leading-relaxed italic">
            Evidence must exist at the point a claim is made and not be developed retroactively.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default MissionVisionSection;
