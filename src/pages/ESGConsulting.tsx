import ServicePageTimeline from "@/components/ServicePageTimeline";

const ESGConsulting = () => (
  <ServicePageTimeline
    subtitle="Corporate Sustainability"
    title="ESG Consulting"
    description="Build a credible ESG framework that drives real business value and meaningful impact."
    intro="Environmental, Social and Governance (ESG) has become the umbrella term for a company's non-financial reporting. In reality it's much more than this and should go far beyond a simple tick-box exercise. It aims to manage risk and impact, hold businesses to account for their activities, and guide them on a path of continual improvement. A strong ESG proposition links to value creation — from increasing revenue growth and reducing costs to boosting employee motivation and enhancing investment returns. Our ESG consultants partner with you to build a strong roadmap that demonstrates your trajectory of improvement over time."
    processTitle="The ESG Consultancy Process"
    processSteps={[
      { title: "Strategy Assessment", desc: "Make sure the process is simple and convincing with a thorough review of your current position." },
      { title: "Alignment with Standards", desc: "Clarify that the board owns the company's purpose and align with recognised frameworks." },
      { title: "Reporting", desc: "Incentivise and track purposeful behaviour with clear, transparent reporting." },
      { title: "Assurance", desc: "Get the purposeful behaviour verified by independent third parties." },
      { title: "Annual Review", desc: "Tell your story and continuously improve year on year." },
    ]}
    features={[
      { title: "ESG Framework Development", desc: "Creating tailored ESG strategies aligned with your business objectives." },
      { title: "Materiality Assessment", desc: "Identifying the ESG topics most material to your business and stakeholders." },
      { title: "ESG Reporting", desc: "Comprehensive reporting aligned with GRI, SASB, TCFD and other frameworks." },
      { title: "Stakeholder Engagement", desc: "Supporting meaningful engagement with investors, employees, and communities." },
    ]}
  />
);

export default ESGConsulting;
