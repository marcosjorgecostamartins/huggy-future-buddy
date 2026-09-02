import { createFileRoute, Link } from "@tanstack/react-router";
import { CTASection, PageHero, PageTransition, Section } from "@/components/site/PageLayout";
import { Reveal } from "@/components/site/Reveal";
import { useI18n } from "@/lib/i18n";
import { LEGAL_ASSETS } from "@/lib/content";

export const Route = createFileRoute("/legal-assets/")({
  head: () => ({
    meta: [
      { title: "Legal Assets — Créditos judiciais e M&A jurídico | Assessmoney" },
      {
        name: "description",
        content:
          "Monetização de créditos judiciais e trabalhistas, estruturação de carteiras e M&A de bancas jurídicas.",
      },
      { property: "og:title", content: "Legal Assets — Assessmoney" },
      {
        property: "og:description",
        content: "Ativos jurídicos tratados como ativos financeiros.",
      },
      { property: "og:url", content: "/legal-assets" },
    ],
    links: [{ rel: "canonical", href: "/legal-assets" }],
  }),
  component: LegalAssetsHub,
});

function LegalAssetsHub() {
  const { t } = useI18n();
  return (
    <PageTransition>
      <PageHero
        eyebrow="Legal Assets"
        title="Ativos jurídicos tratados como ativos financeiros."
        intro="Estruturamos, analisamos e monetizamos ativos originados no ambiente jurídico, com rigor documental e leitura de risco."
      />

      <Section>
        <div className="grid gap-px border border-border bg-border md:grid-cols-2">
          {LEGAL_ASSETS.map((s, i) => (
            <Reveal key={s.slug} index={i % 2}>
              <Link
                to="/legal-assets/$slug"
                params={{ slug: s.slug }}
                className="group flex h-full flex-col justify-between gap-14 bg-cream p-8 transition-all duration-500 hover:-translate-y-1 hover:bg-forest-deep md:p-12"
              >
                <span className="font-mono text-[11px] tabular text-emerald-action">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h2 className="text-3xl leading-tight transition-colors duration-500 group-hover:text-cream md:text-4xl">
                    {t(s.name)}
                  </h2>
                  <p className="mt-5 max-w-md text-[15px] leading-relaxed text-muted-foreground transition-colors duration-500 group-hover:text-cream/70">
                    {t(s.summary)}
                  </p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      <CTASection title="Tem uma carteira ou ativo para analisar?" label="Fale com um especialista" to="/contato" />
    </PageTransition>
  );
}
