import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";

const OngoingComplianceSupport = () => (
  <PageLayout>
    <PageHero
      subtitle="Service"
      title="Ongoing Compliance Support"
      description="Retained advisory to keep every new sustainability claim defensible — before it ships."
    />

    <section className="py-20 lg:py-28 px-5 lg:px-10">
      <div className="max-w-3xl mx-auto text-center">
        <span className="inline-block text-[11px] font-bold tracking-[0.18em] uppercase text-brand-green-dark bg-brand-green-dark/10 px-3 py-1.5 rounded-full mb-6">
          Detailed page coming soon
        </span>
        <h2 className="text-2xl lg:text-3xl font-bold text-brand-black mb-4">
          Continuous green-claims review, on retainer.
        </h2>
        <p className="text-brand-grey leading-relaxed mb-8">
          We're finalising the service page. In the meantime, get in touch and we'll walk you through how ongoing support works — claim reviews, regulator-tracker briefings, and a named advisor on call.
        </p>
        <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-3 bg-brand-green-dark text-brand-white font-bold text-sm uppercase tracking-wider rounded-full hover:bg-brand-green-light hover:text-brand-black transition-all">
          Talk to Us <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  </PageLayout>
);

export default OngoingComplianceSupport;
