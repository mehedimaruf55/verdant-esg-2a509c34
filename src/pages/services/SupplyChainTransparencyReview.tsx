import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";

const SupplyChainTransparencyReview = () => (
  <PageLayout>
    <PageHero
      subtitle="Service"
      title="Supply Chain Transparency Review"
      description="Trace the evidence behind sourcing, materials, and lifecycle claims to their primary data."
    />
    <section className="py-16 lg:py-24 bg-brand-white">
      <div className="max-w-4xl mx-auto px-5 lg:px-10 space-y-5 text-brand-grey text-base lg:text-lg leading-relaxed">
        <p>
          We follow the evidence chain from finished product back to raw material — identifying where claims rely on assumptions, industry averages, or unverifiable supplier statements.
        </p>
        <p>
          The output is a mapped supply chain, a data provenance register, and clear guidance on which claims are defensible today and which require additional substantiation.
        </p>
      </div>
    </section>
  </PageLayout>
);

export default SupplyChainTransparencyReview;
