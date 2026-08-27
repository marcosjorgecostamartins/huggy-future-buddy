import { createFileRoute, Link } from "@tanstack/react-router";
import { CTASection, PageHero, PageTransition, Section } from "@/components/site/PageLayout";
import { Reveal } from "@/components/site/Reveal";
import { MA_PAGES } from "@/lib/content";

export const Route = createFileRoute("/ma/")({
  head: () => ({
    meta: [
      { title: "M&A e Valuation — Assessmoney" },
      {
        name: "description",
        content:
          "Fusões e aquisições, valuation, diagnóstico financeiro e assessoria estratégica para operações corporativas.",
      },
      { property: "og:title", content: "M&A e Valuation — Assessmoney" },
      {
        property: "og:description",
        content: "Operações corporativas conduzidas com método e discrição.",
      },
      { property: "og:url", content: "/ma" },
    ],
    links: [{ rel: "canonical", href: "/ma" }],
  }),
  component: MaHub,
});

function MaHub() {
  return (
    <PageTransition>
      <PageHero
        eyebrow="M&A e Valuation"
        title="Operações corporativas conduzidas com método e discrição."
        intro="Da avaliação econômico-financeira à negociação e ao fechamento, com governança em cada etapa."
      />

      <Section>
        <div className="grid gap-px border border-border bg-border md:grid-cols-2">
          {MA_PAGES.map((s, i) => (
            <Reveal key={s.slug} index={i % 2}>
              <Link
                to="/ma/$slug"
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

      <CTASection title="Vamos avaliar sua operação." label="Fale com um especialista" to="/contato" />
    </PageTransition>
  );
}
