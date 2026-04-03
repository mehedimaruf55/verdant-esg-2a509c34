import ServicePageMagazine from "@/components/ServicePageMagazine";

const Biochar = () => (
  <ServicePageMagazine
    subtitle="Carbon Credits & Offsetting"
    title="Biochar Certification and Excellence"
    description="High-quality biochar carbon removal credits for lasting, verifiable carbon sequestration."
    intro="Biochar is a stable form of carbon produced from organic waste through pyrolysis. When applied to soil, it can sequester carbon for hundreds to thousands of years while improving soil health and agricultural productivity. Our biochar carbon credit solutions connect your organisation with verified, high-quality biochar projects that deliver genuine, measurable carbon removal."
    processSteps={[
      { title: "Assessment", desc: "Understanding your carbon offset needs and matching with suitable biochar projects." },
      { title: "Project Selection", desc: "Identifying verified biochar projects with robust MRV (Measurement, Reporting, Verification)." },
      { title: "Credit Procurement", desc: "Securing high-quality biochar carbon removal credits from accredited registries." },
      { title: "Reporting", desc: "Documenting your biochar credits within your carbon reduction reporting." },
    ]}
    features={[
      { title: "Verified Carbon Removal", desc: "Credits from projects verified by Puro.earth, Verra, or other accredited standards." },
      { title: "Permanent Sequestration", desc: "Biochar provides highly durable carbon storage lasting hundreds of years." },
      { title: "Co-Benefits", desc: "Soil improvement, water retention, and agricultural yield enhancement." },
      { title: "Portfolio Integration", desc: "Incorporating biochar credits into your broader carbon management strategy." },
    ]}
  />
);

export default Biochar;
