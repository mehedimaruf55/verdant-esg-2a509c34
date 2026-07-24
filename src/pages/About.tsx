import { motion } from "framer-motion";
import PageLayout from "@/components/PageLayout";
import leafImg from "@/assets/leaf.png";

const About = () => (
  <PageLayout>
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[hsl(154,40%,96%)] via-white to-[hsl(150,30%,94%)] pt-36 lg:pt-44 pb-20 lg:pb-28">
      <img
        src={leafImg}
        alt=""
        aria-hidden
        className="absolute top-[10%] -right-[8%] w-[40vw] max-w-[500px] min-w-[220px] opacity-[0.06] select-none pointer-events-none rotate-[18deg] hidden sm:block"
      />

      <div className="relative z-10 mx-auto max-w-3xl px-5 lg:px-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center justify-center gap-3 mb-6"
        >
          <span className="inline-block w-8 h-[2px] rounded-full bg-brand-green-dark" />
          <span className="text-xs lg:text-sm font-semibold tracking-[0.2em] uppercase text-brand-green-dark">
            About
          </span>
          <span className="inline-block w-8 h-[2px] rounded-full bg-brand-green-dark" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold tracking-[-0.02em] leading-[1.05] text-brand-black"
        >
          Coming Soon
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 text-lg lg:text-xl text-brand-black/60 max-w-xl mx-auto leading-relaxed"
        >
          This page is being prepared. Please check back shortly.
        </motion.p>
      </div>
    </section>
  </PageLayout>
);

export default About;
