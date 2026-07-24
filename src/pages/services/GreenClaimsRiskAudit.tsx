import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";

const GreenClaimsRiskAudit = () => (
  <PageLayout>
    <PageHero
      subtitle="Service"
      title="Green Claims Risk Audit"
      description="A structured, evidence-led review of your environmental claims against the CMA's six-point test."
    />
    <section className="py-16 lg:py-24 bg-brand-white">
      <div className="max-w-4xl mx-auto px-5 lg:px-10 space-y-5 text-brand-grey text-base lg:text-lg leading-relaxed">
        <p>
          We inventory the environmental claims live across your website, packaging, marketing, and investor communications — then assess each against regulator expectations for truthfulness, clarity, and substantiation.
        </p>
        <p>
          You receive a prioritised register of exposures, a supporting evidence gap analysis, and a remediation plan scoped to your risk appetite.
        </p>
      </div>
    </section>
  </PageLayout>
);

export default GreenClaimsRiskAudit;
