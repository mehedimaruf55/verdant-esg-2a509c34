import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";

const About = () => (
  <PageLayout>
    <PageHero
      subtitle="About Verdant"
      title="Evidence-led consultancy for a regulated era of environmental claims."
      description="We combine technical rigour with regulatory fluency to help brands substantiate what they say — and defend it when it matters."
    />
    <section className="py-16 lg:py-24 bg-brand-white">
      <div className="max-w-4xl mx-auto px-5 lg:px-10 space-y-6 text-brand-grey text-base lg:text-lg leading-relaxed">
        <p>
          Verdant was founded on a single conviction: environmental claims must be treated as regulated statements, not marketing copy. Our team works alongside legal, sustainability, and communications functions to review, substantiate, and govern the claims our clients publish.
        </p>
        <p>
          Every engagement is led by a senior advisor. Every deliverable is written to withstand scrutiny from the CMA, ASA, and other regulators applying consumer protection law to green marketing.
        </p>
      </div>
    </section>
  </PageLayout>
);

export default About;
