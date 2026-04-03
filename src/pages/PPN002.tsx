import ServicePageTimeline from "@/components/ServicePageTimeline";

const PPN002 = () => (
  <ServicePageTimeline
    subtitle="PPN Compliance Services"
    title="PPN 002 Social Value Compliance"
    description="ESG Strategy for Government Procurement — demonstrate your commitment to social value through compliant procurement submissions."
    intro="Procurement Policy Note 06/20 (commonly known as PPN 002) requires suppliers bidding for major government contracts to provide a Carbon Reduction Plan. Our team helps you develop a compliant Carbon Reduction Plan that meets Cabinet Office requirements, demonstrating your organisation's commitment to achieving Net Zero by 2050."
    processSteps={[
      { title: "Baseline Assessment", desc: "Measuring your current carbon footprint across Scope 1, 2, and relevant Scope 3 emissions." },
      { title: "Reduction Targets", desc: "Setting science-aligned carbon reduction targets with a clear trajectory to Net Zero." },
      { title: "Carbon Reduction Plan", desc: "Preparing a compliant Carbon Reduction Plan document for procurement submissions." },
      { title: "Ongoing Support", desc: "Annual updates and progress reporting to maintain compliance." },
    ]}
    features={[
      { title: "Carbon Reduction Plan", desc: "Fully compliant CRP document meeting Cabinet Office requirements." },
      { title: "Carbon Footprint Measurement", desc: "Accurate measurement of Scope 1, 2, and relevant Scope 3 emissions." },
      { title: "Net Zero Target Setting", desc: "Science-based targets aligned with 1.5°C pathways." },
      { title: "Annual Updates", desc: "Ongoing support to update your CRP and track progress annually." },
    ]}
  />
);

export default PPN002;
