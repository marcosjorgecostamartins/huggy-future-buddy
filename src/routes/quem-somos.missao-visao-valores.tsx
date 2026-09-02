import { createFileRoute } from "@tanstack/react-router";
import { CTASection, PageHero, PageTransition, Section } from "@/components/site/PageLayout";
import { Reveal } from "@/components/site/Reveal";
import { Eyebrow } from "@/components/site/ui";
import { useI18n } from "@/lib/i18n";
import { VALORES } from "@/lib/content";

export const Route = createFileRoute("/quem-somos/missao-visao-valores")({
  head: () => ({
    meta: [
      { title: "Missão, Visão e Valores — Assessmoney" },
      {
        name: "description",
        content:
          "Missão, visão e os seis valores que orientam a atuação da Assessmoney em estruturação financeira e ativos especiais.",
      },
      { property: "og:title", content: "Missão, Visão e Valores — Assessmoney" },
      {
        property: "og:description",
        content: "Ética, visão de longo prazo, inteligência financeira, inovação, confidencialidade e alinhamento.",
      },
      { property: "og:url", content: "/quem-somos/missao-visao-valores" },
    ],
    links: [{ rel: "canonical", href: "/quem-somos/missao-visao-valores" }],
  }),
  component: MissaoVisaoValores,
});

function MissaoVisaoValores() {
  const { t } = useI18n();
  return (
    <PageTransition>
      <PageHero
        eyebrow="Quem Somos / Missão, Visão e Valores"
        title="O que orienta cada estrutura que desenhamos."
      />

      <Section>
        <div className="grid gap-16 md:grid-cols-2">
          <Reveal>
            <Eyebrow>Missão</Eyebrow>
            <p className="mt-8 font-display text-2xl leading-[1.3] md:text-3xl">
              {t(
                "Transformar necessidades financeiras e ativos complexos em soluções estruturadas, conectando empresas, investidores e oportunidades com inteligência, segurança e geração de valor.",
              )}
            </p>
          </Reveal>
          <Reveal index={1}>
            <Eyebrow>Visão</Eyebrow>
            <p className="mt-8 font-display text-2xl leading-[1.3] md:text-3xl">
              {t(
                "Ser reconhecida como uma boutique de referência em estruturação financeira, ativos especiais, crédito privado e operações corporativas no Brasil.",
              )}
            </p>
          </Reveal>
        </div>
      </Section>

      <Section tone="dark">
        <Eyebrow>Valores</Eyebrow>
        <div className="mt-14 grid gap-px border border-white/10 bg-white/10 md:grid-cols-2 lg:grid-cols-3">
          {VALORES.map((v, i) => (
            <Reveal key={v.title} index={i}>
              <div className="group h-full bg-graphite p-8 transition-colors duration-500 hover:bg-forest-deep md:p-10">
                <span className="font-mono text-[11px] tabular text-emerald-action">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h2 className="mt-8 text-2xl leading-tight">{t(v.title)}</h2>
                <p className="mt-4 text-[15px] leading-relaxed text-institutional-soft transition-colors duration-500 group-hover:text-cream/75">
                  {t(v.text)}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <CTASection title="Vamos estruturar sua operação." label="Fale com um especialista" to="/contato" />
    </PageTransition>
  );
}
