import ServicePageTemplate from "@/components/ServicePageTemplate";

const BREEAMCertification = () => (
  <ServicePageTemplate
    subtitle="Built Environment"
    title="BREEAM Certification"
    description="Achieve BREEAM certification with expert guidance from our accredited assessors."
    intro="BREEAM is the world's leading sustainability assessment method for buildings and infrastructure. Our team of licensed BREEAM assessors guide you through every stage of the certification process, from pre-assessment to final certification, ensuring your project achieves the best possible rating while maximising value."
    processSteps={[
      { title: "Pre-Assessment", desc: "Early-stage evaluation to identify the most achievable and cost-effective BREEAM credits." },
      { title: "Design Stage Assessment", desc: "Working with your design team to embed sustainability measures and document compliance." },
      { title: "Construction Monitoring", desc: "Ongoing support during construction to ensure BREEAM requirements are met on site." },
      { title: "Post-Construction", desc: "Final evidence collection and submission for BREEAM certification." },
    ]}
    features={[
      { title: "BREEAM New Construction", desc: "Full assessment services for new residential and commercial developments." },
      { title: "BREEAM Refurbishment", desc: "Certification support for renovation and fit-out projects." },
      { title: "BREEAM In-Use", desc: "Ongoing sustainability benchmarking for existing operational buildings." },
      { title: "BREEAM Communities", desc: "Masterplan-level sustainability assessment for large-scale developments." },
    ]}
  />
);

export default BREEAMCertification;
