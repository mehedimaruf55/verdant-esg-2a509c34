import { motion } from "framer-motion";
import aboutImage from "@/assets/about-image.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="py-28 lg:py-36 bg-brand-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold leading-[1.1] text-brand-green-dark">
              Delivering Holistic and Credible Sustainable Solutions
            </h2>
            <div className="mt-8 space-y-5 text-[16px] leading-[1.8] text-brand-grey">
              <p>
                Verdant ESG is a professional sustainability consultancy dedicated to helping organizations navigate the complexities of Environmental, Social, and Governance standards. We combine deep industry expertise with data-driven insights to deliver strategies that drive measurable, long-term impact.
              </p>
              <p>
                Our team works alongside leadership to embed sustainability into decision-making — turning ambition into action and compliance into competitive advantage.
              </p>
            </div>
            <a
              href="#services"
              className="mt-8 inline-block text-brand-green-dark font-semibold text-[15px] border-b-2 border-brand-green-dark hover:text-brand-green-light hover:border-brand-green-light transition-colors duration-300"
            >
              About Us
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="overflow-hidden rounded-lg">
              <img
                src={aboutImage}
                alt="Verdant ESG team"
                loading="lazy"
                width={1024}
                height={768}
                className="w-full object-cover aspect-[4/5] lg:aspect-[3/4]"
              />
            </div>
            <div className="mt-8 grid grid-cols-3 gap-6">
              {[
                { num: "50+", label: "Clients served" },
                { num: "12", label: "Industries" },
                { num: "98%", label: "Retention rate" },
              ].map((s) => (
                <div key={s.label} className="text-center">
                  <div className="text-3xl font-heading font-bold text-brand-green-dark">{s.num}</div>
                  <div className="text-[13px] text-brand-grey mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
