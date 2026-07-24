import { motion } from "framer-motion";

interface PageFeatureImageProps {
  src: string;
  alt: string;
  caption?: string;
}

const PageFeatureImage = ({ src, alt, caption }: PageFeatureImageProps) => {
  return (
    <section className="bg-brand-white py-8 lg:py-12">
      <div className="mx-auto max-w-6xl px-5 lg:px-10">
        <motion.figure
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-3xl overflow-hidden shadow-xl aspect-[16/9] lg:aspect-[21/9]"
        >
          <img
            src={src}
            alt={alt}
            width={1600}
            height={900}
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(135deg, rgba(58,122,90,0.35) 0%, rgba(58,122,90,0.15) 50%, rgba(30,70,50,0.35) 100%)",
            }}
          />
          {caption && (
            <figcaption className="absolute bottom-0 left-0 right-0 p-6 lg:p-8 bg-gradient-to-t from-black/50 to-transparent">
              <p className="font-heading text-sm lg:text-base text-brand-white/95 tracking-wide max-w-2xl">
                {caption}
              </p>
            </figcaption>
          )}
        </motion.figure>
      </div>
    </section>
  );
};

export default PageFeatureImage;
