import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";

const RegulatoryResponseReadiness = () => (
  <PageLayout>
    <PageHero
      subtitle="Service"
      title="Regulatory Response Readiness"
      description="Prepare defensible responses to regulator enquiries, complaints, and investigations."
    />
    <section className="py-16 lg:py-24 bg-brand-white">
      <div className="max-w-4xl mx-auto px-5 lg:px-10 space-y-5 text-brand-grey text-base lg:text-lg leading-relaxed">
        <p>
          When a regulator or complainant asks how a claim was substantiated, the answer must already exist. We help you build the response playbook — evidence packs, escalation paths, and messaging — before you need it.
        </p>
        <p>
          For active enquiries, we work alongside your legal and communications teams to prepare technically accurate, regulator-ready submissions.
        </p>
      </div>
    </section>
  </PageLayout>
);

export default RegulatoryResponseReadiness;
