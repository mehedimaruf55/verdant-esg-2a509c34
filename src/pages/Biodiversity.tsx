import ServicePageTemplate from "@/components/ServicePageTemplate";

const Biodiversity = () => (
  <ServicePageTemplate
    subtitle="Built Environment"
    title="Biodiversity Consultancy"
    description="Protect and enhance biodiversity through expert ecological assessment and net gain strategies."
    intro="With Biodiversity Net Gain (BNG) now a mandatory requirement for most developments in England, understanding and managing ecological impacts is essential. Our ecology and biodiversity team provides comprehensive services from initial habitat surveys through to BNG metric calculations and long-term management plans, ensuring your developments deliver genuine ecological benefits."
    processSteps={[
      { title: "Baseline Assessment", desc: "Comprehensive habitat and species surveys to establish existing biodiversity value." },
      { title: "Impact Assessment", desc: "Evaluating the ecological impact of proposed development activities." },
      { title: "BNG Metric Calculation", desc: "Calculating biodiversity net gain using the statutory metric to demonstrate compliance." },
      { title: "Management Plan", desc: "Developing 30-year habitat management and monitoring plans." },
    ]}
    features={[
      { title: "Biodiversity Net Gain", desc: "Full BNG assessment and strategy to achieve the mandatory 10% net gain." },
      { title: "Ecological Impact Assessment", desc: "Detailed ecological assessments as part of Environmental Impact Assessment." },
      { title: "Habitat Management Plans", desc: "Long-term plans for creating, enhancing, and maintaining habitats." },
      { title: "Protected Species Surveys", desc: "Specialist surveys for bats, great crested newts, badgers, and other protected species." },
    ]}
  />
);

export default Biodiversity;
