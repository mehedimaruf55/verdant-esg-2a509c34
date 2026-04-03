import ServicePageSplit from "@/components/ServicePageSplit";

const PPN006 = () => (
  <ServicePageSplit
    subtitle="PPN Compliance Services"
    title="PPN 006 Carbon Reduction Plan"
    description="Comply with Carbon Reduction Plan requirements for government contracts."
    intro="Procurement Policy Note 06/21 requires government contracts to evaluate social value as part of the procurement process, with a minimum 10% weighting. Our team helps you develop compelling social value proposals that demonstrate genuine community, environmental, and economic benefits — increasing your chances of winning public sector contracts."
    processSteps={[
      { title: "Requirements Analysis", desc: "Understanding the specific social value requirements for your target contracts." },
      { title: "Strategy Development", desc: "Creating a social value strategy aligned with the Social Value Model themes." },
      { title: "Proposal Writing", desc: "Crafting compelling, evidence-based social value proposals for bid submissions." },
      { title: "Delivery & Reporting", desc: "Supporting the delivery and measurement of social value commitments." },
    ]}
    features={[
      { title: "Social Value Strategy", desc: "Comprehensive strategies aligned with the five Social Value Model themes." },
      { title: "Bid Support", desc: "Expert support writing social value method statements for procurement bids." },
      { title: "Measurement & Reporting", desc: "Frameworks for measuring and reporting social value delivery." },
      { title: "Supply Chain Engagement", desc: "Engaging your supply chain to maximise social value across your operations." },
    ]}
  />
);

export default PPN006;
