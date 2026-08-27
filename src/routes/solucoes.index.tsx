import { createFileRoute, Link } from "@tanstack/react-router";
import { CTASection, PageHero, PageTransition, Section } from "@/components/site/PageLayout";
import { Reveal } from "@/components/site/Reveal";
import { SOLUTIONS } from "@/lib/content";

export const Route = createFileRoute("/solucoes/")({
  head: () => ({
    meta: [
      { title: "Soluções — Crédito estruturado, Home Equity e advisory | Assessmoney" },
      {
        name: "description",
        content:
          "Crédito estruturado, Home Equity, consórcio estruturado, distressed assets, special situations, tributário, BI e paralegal.",
      },
      { property: "og:title", content: "Soluções — Assessmoney" },
      {
        property: "og:description",
        content: "Soluções estruturadas para cada necessidade de capital.",
      },
      { property: "og:url", content: "/solucoes" },
    ],
    links: [{ rel: "canonical", href: "/solucoes" }],
  }),
  component: SolucoesHub,
});

function SolucoesHub() {
  return (
    <PageTransition>
      <PageHero
        eyebrow="Soluções"
        title="Soluções estruturadas para cada necessidade de capital."
        intro="Cada operação é analisada individualmente, considerando risco, estrutura, garantias e objetivos das partes envolvidas."
      />

      <Section>
        <div className="grid gap-px border border-border bg-border md:grid-cols-2">
          {SOLUTIONS.map((s, i) => (
            <Reveal key={s.slug} index={i % 2}>
              <Link
                to="/solucoes/$slug"
                params={{ slug: s.slug }}
                className="group flex h-full flex-col justify-between gap-14 bg-cream p-8 transition-all duration-500 hover:-translate-y-1 hover:bg-forest-deep md:p-12"
              >
                <span className="font-mono text-[11px] tabular text-emerald-action">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h2 className="text-3xl leading-tight transition-colors duration-500 group-hover:text-cream md:text-4xl">
                    {s.name}
                  </h2>
                  <p className="mt-5 max-w-md text-[15px] leading-relaxed text-muted-foreground transition-colors duration-500 group-hover:text-cream/70">
                    {s.summary}
                  </p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      <CTASection
        title="Sua operação exige uma estrutura sob medida."
        label="Apresente sua operação"
        to="/contato"
      />
    </PageTransition>
  );
}
