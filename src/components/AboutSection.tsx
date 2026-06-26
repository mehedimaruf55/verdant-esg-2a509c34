import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import leafImg from "@/assets/leaf.png";

type LedgerItem = {
  id: string;
  title: string;
  intro: string;
  body:
    | { kind: "grid"; items: string[] }
    | { kind: "bordered"; items: string[] }
    | { kind: "prose"; text: string };
};

const ledger: LedgerItem[] = [
  {
    id: "regulatory-focus",
    title: "Regulatory Focus",
    intro:
      "Regulators such as the CMA and ASA, applying the CAP Code, are shifting from voluntary guidance to strictly enforced disclosure. They now scrutinise:",
    body: {
      kind: "grid",
      items: [
        "The clarity of claims",
        "The context in which they are presented",
        "How they are understood by consumers",
        "The evidence supporting them",
      ],
    },
  },
  {
    id: "compliance-standard",
    title: "The Compliance Standard",
    intro:
      "It is no longer enough for a claim to be technically true in a narrow sense. Environmental communication must also be:",
    body: {
      kind: "bordered",
      items: [
        "Clear and unambiguous",
        "Avoid misleading by omission",
        "Reflect the appropriate scope of the product or service",
        "Based on verifiable, contemporaneous evidence",
      ],
    },
  },
  {
    id: "substantiation-trap",
    title: "The Substantiation Trap",
    intro: "",
    body: {
      kind: "prose",
      text: "Broad, aspirational statements such as \u201CNet Zero\u201D or \u201CSustainable\u201D made without an internal evidence repository that survives an audit are being flagged by regulators as inherently deceptive. Every claim must be supported by data accessible at the point of sale.",
    },
  },
  {
    id: "misleading-omission",
    title: "Misleading by Omission",
    intro: "",
    body: {
      kind: "prose",
      text: "Highlighting a single 'green' feature while ignoring significant environmental impacts elsewhere in the supply chain is no longer viable. Total lifecycle transparency is becoming the new legal baseline.",
    },
  },
  {
    id: "compliance-lag",
    title: "Compliance Lag",
    intro: "",
    body: {
      kind: "prose",
      text: "Marketing cycles move quicker than legal and ESG teams can verify data, leading to unqualified claims that can attract ASA/CAP sanctions. Alignment between creative and compliance teams is now a strategic necessity.",
    },
  },
];

const AboutSection = () => {
  const [openId, setOpenId] = useState<string | null>("regulatory-focus");

  return (
    <section id="about" className="relative py-20 lg:py-36 bg-brand-white overflow-hidden">
      <img
        src={leafImg}
        alt=""
        className="absolute top-[10%] -right-[5%] w-[35vw] max-w-[450px] min-w-[200px] opacity-[0.05] select-none pointer-events-none rotate-[15deg] hidden sm:block"
      />

      <div className="mx-auto max-w-4xl px-5 lg:px-10 relative z-10">
        {/* Header */}
        <header className="mb-12 lg:mb-16">
          <div className="flex items-center gap-3 mb-5">
            <span className="inline-block w-8 h-[2px] rounded-full bg-brand-green-dark" />
            <span className="text-xs lg:text-sm font-semibold tracking-[0.2em] uppercase text-brand-green-dark">
              The Problem
            </span>
          </div>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold tracking-[-0.02em] leading-[1.05] text-brand-green-dark"
          >
            A Gap in Scrutiny
          </motion.h2>
          <h3 className="text-xl lg:text-2xl font-heading font-bold mt-6 text-brand-black">
            Why Greenwashing is Now a Boardroom Risk.
          </h3>
          <div className="space-y-3 mt-6 max-w-2xl">
            <p className="text-base lg:text-lg leading-[1.75] text-brand-grey">
              Regulators are increasingly categorising environmental claims as greenwashing where they are{" "}
              <span className="font-semibold text-brand-black">vague</span>,{" "}
              <span className="font-semibold text-brand-black">exaggerated</span>, or{" "}
              <span className="font-semibold text-brand-black">unsubstantiated</span>.
            </p>
            <p className="text-base lg:text-lg leading-[1.75] text-brand-grey/90">
              As enforcement tightens, the gap between corporate ambition and verifiable action is closing rapidly — leaving unprepared boards exposed to significant litigation and reputational damage.
            </p>
          </div>
        </header>

        {/* Ledger */}
        <div className="border-t border-border">
          {ledger.map((item) => {
            const open = openId === item.id;
            return (
              <div
                key={item.id}
                className="border-b border-border"
                onMouseEnter={() => setOpenId(item.id)}
                onFocus={() => setOpenId(item.id)}
              >
                <div
                  className={`w-full text-left py-6 lg:py-7 px-2 lg:px-4 transition-colors duration-300 cursor-default ${
                    open ? "bg-brand-grey-light/40" : "hover:bg-brand-grey-light/30"
                  }`}
                >
                  <h4
                    className={`text-lg lg:text-xl font-heading font-bold transition-colors duration-300 ${
                      open ? "text-brand-green-dark" : "text-brand-black"
                    }`}
                  >
                    {item.title}
                  </h4>
                </div>

                <AnimatePresence initial={false}>
                  {open && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-2 lg:px-4 pb-8 pr-6 lg:pr-12">
                        {item.intro && (
                          <p className="text-sm lg:text-base text-brand-grey leading-[1.7] mb-5 max-w-2xl">
                            {item.intro}
                          </p>
                        )}

                        {item.body.kind === "grid" && (
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-2xl">
                            {item.body.items.map((it) => (
                              <div key={it} className="flex items-center gap-3">
                                <span className="w-1.5 h-1.5 rounded-full bg-brand-green-dark shrink-0" />
                                <p className="text-sm lg:text-base text-brand-black/80 font-medium">{it}</p>
                              </div>
                            ))}
                          </div>
                        )}

                        {item.body.kind === "bordered" && (
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 max-w-2xl">
                            {item.body.items.map((it) => (
                              <p
                                key={it}
                                className="text-sm lg:text-base text-brand-black/80 font-medium border-l-2 border-brand-green-light pl-3 py-0.5"
                              >
                                {it}
                              </p>
                            ))}
                          </div>
                        )}

                        {item.body.kind === "prose" && (
                          <p className="text-sm lg:text-base text-brand-grey leading-[1.8] max-w-2xl">
                            {item.body.text}
                          </p>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>


        {/* Pull quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
          className="mt-16 lg:mt-20 relative overflow-hidden rounded-2xl lg:rounded-3xl p-10 lg:p-14"
          style={{ background: "linear-gradient(135deg, #3a7a5a 0%, #499167 100%)" }}
        >
          <img
            src={leafImg}
            alt=""
            className="absolute -bottom-[20%] -right-[8%] w-[260px] opacity-[0.12] select-none pointer-events-none rotate-[25deg]"
          />
          <p className="relative z-10 text-2xl md:text-3xl lg:text-4xl font-heading font-bold leading-[1.15] tracking-[-0.01em] text-brand-white">
            Greenwashing is a Governance Failure,
            <br />
            <span className="text-brand-green-light">Not a Marketing Choice.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
