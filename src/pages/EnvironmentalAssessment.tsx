import ServicePageTemplate from "@/components/ServicePageTemplate";

const EnvironmentalAssessment = () => (
  <ServicePageTemplate
    subtitle="Built Environment"
    title="Environmental Assessment"
    description="Thorough environmental assessments to understand and mitigate the impact of your developments."
    intro="Our environmental assessment services provide a detailed understanding of how your project interacts with the surrounding environment. From initial screening to full Environmental Impact Assessments (EIA), we deliver rigorous, evidence-based evaluations that satisfy regulatory requirements and support informed decision-making."
    processSteps={[
      { title: "Screening & Scoping", desc: "Determining whether a full EIA is required and defining the scope of assessment." },
      { title: "Baseline Studies", desc: "Conducting surveys and gathering data on existing environmental conditions." },
      { title: "Impact Assessment", desc: "Evaluating potential environmental effects during construction and operation." },
      { title: "Mitigation & Reporting", desc: "Developing mitigation measures and producing comprehensive assessment reports." },
    ]}
    features={[
      { title: "Environmental Impact Assessment", desc: "Full EIA services compliant with UK regulations and EU directives." },
      { title: "Preliminary Ecological Appraisal", desc: "Initial habitat and species assessments to identify ecological constraints." },
      { title: "Air Quality Assessment", desc: "Detailed analysis of air quality impacts from construction and operational activities." },
      { title: "Noise & Vibration Assessment", desc: "Comprehensive assessments of noise and vibration impacts on sensitive receptors." },
    ]}
  />
);

export default EnvironmentalAssessment;
