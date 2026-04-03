import { motion } from "framer-motion";
import leafImg from "@/assets/leaf.png";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  description?: string;
}

const PageHero = ({ title, subtitle, description }: PageHeroProps) => (
  <section className="relative pt-36 lg:pt-44 pb-16 lg:pb-24 overflow-hidden bg-gradient-to-br from-[hsl(154,40%,96%)] via-white to-[hsl(150,30%,94%)]">
    <img
      src={leafImg}
      alt=""
      className="absolute -right-20 -top-10 w-[320px] lg:w-[500px] opacity-[0.07] pointer-events-none select-none"
    />
    <div className="max-w-6xl mx-auto px-5 lg:px-10 relative z-10">
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-brand-green-dark font-bold text-xs uppercase tracking-[0.16em] mb-4"
        >
          {subtitle}
        </motion.p>
      )}
      <motion.h1
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="text-3xl lg:text-5xl font-bold text-brand-black leading-tight max-w-3xl"
      >
        {title}
      </motion.h1>
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-5 text-brand-grey text-base lg:text-lg max-w-2xl leading-relaxed"
        >
          {description}
        </motion.p>
      )}
    </div>
  </section>
);

export default PageHero;
