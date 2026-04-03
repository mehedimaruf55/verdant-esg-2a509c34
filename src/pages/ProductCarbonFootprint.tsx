import ServicePageMagazine from "@/components/ServicePageMagazine";

const ProductCarbonFootprint = () => (
  <ServicePageMagazine
    subtitle="Net Zero Carbon"
    title="Carbon Footprint your Products"
    description="Understand and communicate the carbon impact of your products across their full lifecycle."
    intro="Consumers, retailers, and regulators increasingly demand transparency about the carbon impact of products. Our product carbon footprint service measures greenhouse gas emissions from raw material extraction through manufacturing, distribution, use, and disposal — enabling you to identify hotspots, reduce impacts, and communicate your environmental credentials with confidence."
    processSteps={[
      { title: "Scope Definition", desc: "Defining product boundaries, functional units, and lifecycle stages to assess." },
      { title: "Data Collection", desc: "Gathering primary and secondary data across the product value chain." },
      { title: "Carbon Calculation", desc: "Calculating emissions using recognised methodologies and databases." },
      { title: "Reporting & Labels", desc: "Producing compliant reports and supporting eco-labelling initiatives." },
    ]}
    features={[
      { title: "Product LCA", desc: "Full life cycle assessment aligned with ISO 14040/44 standards." },
      { title: "Carbon Labelling", desc: "Support for carbon labelling and product environmental declarations." },
      { title: "Hotspot Analysis", desc: "Identifying the highest-impact stages for targeted reduction efforts." },
      { title: "Supply Chain Engagement", desc: "Working with suppliers to improve data quality and reduce upstream emissions." },
    ]}
  />
);

export default ProductCarbonFootprint;
