import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";

const OngoingComplianceSupport = () => (
  <PageLayout>
    <PageHero
      subtitle="Service"
      title="Ongoing Compliance Support"
      description="Continuous advisory and sign-off on new campaigns, packaging, and disclosures."
    />
    <section className="py-16 lg:py-24 bg-brand-white">
      <div className="max-w-4xl mx-auto px-5 lg:px-10">
        <div className="p-8 lg:p-10 rounded-2xl bg-brand-green-dark/[0.05] border border-brand-green-dark/15">
          <span className="text-xs font-bold tracking-[0.18em] uppercase text-brand-green-dark">Coming Soon</span>
          <p className="mt-3 text-brand-grey text-base lg:text-lg leading-relaxed">
            Detailed content for this retainer-based service is being finalised. In the meantime, get in touch to discuss scope, cadence, and pricing tailored to your organisation.
          </p>
        </div>
      </div>
    </section>
  </PageLayout>
);

export default OngoingComplianceSupport;
