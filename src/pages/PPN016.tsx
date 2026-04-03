import ServicePageTemplate from "@/components/ServicePageTemplate";

const PPN016 = () => (
  <ServicePageTemplate
    subtitle="PPN Compliance Services"
    title="PPN 016 Carbon Reduction Contract Management"
    description="Environmental Performance Excellence — manage carbon reduction commitments throughout the contract lifecycle."
    intro="Procurement Policy Note 01/23 introduces enhanced transparency and accountability requirements for government suppliers. Our team ensures your organisation meets these obligations, from data reporting to governance structures, helping you maintain compliance and competitiveness in public sector procurement."
    processSteps={[
      { title: "Compliance Review", desc: "Assessing your current practices against PPN 01/23 requirements." },
      { title: "Gap Analysis", desc: "Identifying areas requiring improvement to achieve full compliance." },
      { title: "Implementation", desc: "Developing and implementing processes, policies, and reporting mechanisms." },
      { title: "Verification", desc: "Ensuring all documentation and processes meet the required standards." },
    ]}
    features={[
      { title: "Compliance Assessment", desc: "Thorough review of your readiness against PPN 01/23 requirements." },
      { title: "Policy Development", desc: "Creating or updating internal policies to meet new procurement standards." },
      { title: "Reporting Frameworks", desc: "Establishing robust data collection and reporting mechanisms." },
      { title: "Training & Guidance", desc: "Staff training on new requirements and ongoing compliance support." },
    ]}
  />
);

export default PPN016;
