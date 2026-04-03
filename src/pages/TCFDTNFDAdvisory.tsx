import ServicePageTimeline from "@/components/ServicePageTimeline";

const TCFDTNFDAdvisory = () => (
  <ServicePageTimeline
    subtitle="Corporate Sustainability"
    title="TCFD & TNFD Advisory"
    description="Navigate climate and nature-related financial disclosures with expert advisory support."
    intro="The Task Force on Climate-related Financial Disclosures (TCFD) and Task Force on Nature-related Financial Disclosures (TNFD) provide frameworks for organisations to report on environmental risks and opportunities. Our advisory services guide you through the disclosure process, from gap analysis to full reporting, ensuring compliance with regulatory requirements and investor expectations."
    processSteps={[
      { title: "Gap Analysis", desc: "Assessing your current disclosure practices against TCFD/TNFD recommendations." },
      { title: "Governance Review", desc: "Reviewing and strengthening governance structures for climate and nature oversight." },
      { title: "Risk Assessment", desc: "Conducting scenario analysis and risk assessments aligned with framework requirements." },
      { title: "Disclosure & Reporting", desc: "Preparing comprehensive disclosures for annual reports and standalone publications." },
    ]}
    features={[
      { title: "TCFD Reporting", desc: "Full support across all four TCFD pillars: Governance, Strategy, Risk Management, and Metrics." },
      { title: "TNFD Reporting", desc: "Nature-related risk and opportunity assessment using the LEAP approach." },
      { title: "Scenario Analysis", desc: "Climate and nature scenario modelling to inform strategic decision-making." },
      { title: "Board-Level Training", desc: "Educating leadership teams on climate and nature-related financial risks." },
    ]}
  />
);

export default TCFDTNFDAdvisory;
