import ServicePageSplit from "@/components/ServicePageSplit";

const RealEstateESG = () => (
  <ServicePageSplit
    subtitle="Corporate Sustainability"
    title="Real Estate ESG"
    description="Integrate ESG strategies into your real estate portfolio to enhance asset value and reduce risk."
    intro="The real estate sector faces increasing pressure from investors, tenants, and regulators to demonstrate strong ESG credentials. Our real estate ESG services help property owners, developers, and fund managers embed sustainability across their portfolios — from GRESB benchmarking to green building certifications and net zero pathway planning."
    processSteps={[
      { title: "Portfolio Assessment", desc: "Comprehensive review of ESG performance across your property portfolio." },
      { title: "Strategy & Roadmap", desc: "Developing a clear ESG roadmap with prioritised actions and investment plans." },
      { title: "Implementation", desc: "Supporting the delivery of ESG improvements across assets and operations." },
      { title: "Benchmarking & Reporting", desc: "GRESB submission, reporting frameworks, and stakeholder communications." },
    ]}
    features={[
      { title: "GRESB Benchmarking", desc: "Full support with GRESB assessment submission to achieve top-tier ratings." },
      { title: "Green Building Certification", desc: "BREEAM, WELL, LEED, and other certification services for your assets." },
      { title: "Net Zero Pathway", desc: "Asset-level and portfolio-level decarbonisation strategies and roadmaps." },
      { title: "EU Taxonomy Alignment", desc: "Assessing and reporting on alignment with EU sustainable finance taxonomy." },
    ]}
  />
);

export default RealEstateESG;
