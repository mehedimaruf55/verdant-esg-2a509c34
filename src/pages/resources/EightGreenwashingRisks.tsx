import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";

const risks = [
  { title: "Vague or absolute language", detail: "Terms like 'green', 'eco-friendly', or 'sustainable' without qualification are almost never defensible on their own." },
  { title: "Missing lifecycle context", detail: "Claims focused on one stage (e.g. use phase) that omit material impacts from sourcing, manufacture, or disposal." },
  { title: "Unsubstantiated net-zero or carbon-neutral claims", detail: "Statements that rely on offsets, future commitments, or averages without disclosing methodology." },
  { title: "Cherry-picked metrics", detail: "Highlighting a favourable indicator while omitting materially worse ones from the same product or operation." },
  { title: "Implied endorsements", detail: "Use of leaves, greens, or certification-style visuals that suggest third-party approval where none exists." },
  { title: "Comparative claims without a basis", detail: "'Better for the planet' or 'lower impact' claims that lack a defined benchmark or dataset." },
  { title: "Aspirational statements framed as fact", detail: "Future goals presented in the present tense — a common source of regulator complaints." },
  { title: "Supply chain assumptions", detail: "Claims that rely on supplier self-attestation without primary evidence." },
];

const EightGreenwashingRisks = () => (
  <PageLayout>
    <PageHero
      subtitle="Guide"
      title="8 Greenwashing Risks Every Brand Should Check Before Publishing a Sustainability Claim"
      description="A pre-publication checklist for the eight most common — and most frequently penalised — categories of misleading environmental claim."
    />
    <section className="py-16 lg:py-24 bg-brand-white">
      <div className="max-w-4xl mx-auto px-5 lg:px-10">
        <ol className="space-y-6">
          {risks.map((r, i) => (
            <li
              key={r.title}
              className="p-6 lg:p-8 rounded-2xl bg-brand-white border border-brand-black/[0.08] hover:border-brand-green-dark/30 transition-colors"
            >
              <div className="flex gap-5 lg:gap-6">
                <span className="text-2xl lg:text-3xl font-heading font-bold text-brand-green-dark shrink-0 tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-lg lg:text-xl font-heading font-bold text-brand-black leading-tight">{r.title}</h3>
                  <p className="mt-2 text-sm lg:text-base text-brand-grey leading-relaxed">{r.detail}</p>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  </PageLayout>
);

export default EightGreenwashingRisks;
