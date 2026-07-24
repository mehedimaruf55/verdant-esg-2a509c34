import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";

const AIAssistedGreenClaimsScreening = () => (
  <PageLayout>
    <PageHero
      subtitle="Tool"
      title="AI-Assisted Green Claims Screening"
      description="Fast, first-pass screening of environmental copy for high-risk terminology, framing, and omissions — reviewed by our compliance team before results are shared."
    />
    <section className="py-16 lg:py-24 bg-brand-white">
      <div className="max-w-4xl mx-auto px-5 lg:px-10 space-y-5 text-brand-grey text-base lg:text-lg leading-relaxed">
        <p>
          Submit draft copy, campaigns, or product descriptions and receive an initial risk read within hours — flagging red-zone terms (net zero, carbon neutral, sustainable, eco-friendly, responsibly sourced) and evidence gaps that require attention before publication.
        </p>
        <p>
          The screening is a triage layer, not a substitute for full substantiation. Every high-risk output is verified by a senior advisor.
        </p>
      </div>
    </section>
  </PageLayout>
);

export default AIAssistedGreenClaimsScreening;
