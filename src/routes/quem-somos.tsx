import { createFileRoute, Link, Outlet, useRouterState } from "@tanstack/react-router";
import { CTASection, PageHero, PageTransition, Section } from "@/components/site/PageLayout";
import { Reveal } from "@/components/site/Reveal";
import { Eyebrow } from "@/components/site/ui";
import { useI18n } from "@/lib/i18n";
import { CONTACT } from "@/lib/site";

export const Route = createFileRoute("/quem-somos")({
  head: () => ({
    meta: [
      { title: "Quem Somos — Assessmoney" },
      {
        name: "description",
        content:
          "Boutique de estruturação financeira fundada em 2011, com atuação em crédito estruturado, ativos especiais, Legal Assets e M&A.",
      },
      { property: "og:title", content: "Quem Somos — Assessmoney" },
      {
        property: "og:description",
        content: "Estruturação financeira com profundidade jurídica e estratégica. Member Company of Ostun.",
      },
      { property: "og:url", content: "/quem-somos" },
    ],
    links: [{ rel: "canonical", href: "/quem-somos" }],
  }),
  component: QuemSomosLayout,
});

const SUB = [
  { label: "Nossa História", to: "/quem-somos/nossa-historia" },
  { label: "Missão, Visão e Valores", to: "/quem-somos/missao-visao-valores" },
];

function QuemSomosLayout() {
  const { t } = useI18n();
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  if (pathname !== "/quem-somos") return <Outlet />;

  return (
    <PageTransition>
      <PageHero
        eyebrow="Quem Somos"
        title="Estruturação financeira com profundidade jurídica e estratégica."
        subtitle="Fundada em 2011. Member Company of Ostun."
      />

      <Section>
        <div className="grid gap-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.5fr)]">
          <Reveal className="lg:sticky lg:top-32 lg:self-start">
            <Eyebrow>A firma</Eyebrow>
            <ul className="mt-10 space-y-3">
              {SUB.map((s) => (
                <li key={s.to}>
                  <Link
                    to={s.to as never}
                    className="nav-underline text-sm uppercase tracking-[0.14em] text-muted-foreground hover:text-forest"
                  >
                    {t(s.label)}
                  </Link>
                </li>
              ))}
            </ul>
          </Reveal>
          <div className="space-y-8">
            {[
              "A Assessmoney é uma boutique de estruturação financeira fundada em 2011, especializada no desenvolvimento de soluções para situações que demandam conhecimento financeiro, jurídico, estratégico e capacidade de acesso a capital.",
              "Ao longo de sua trajetória, ampliou sua atuação do mercado de crédito tradicional para operações estruturadas, ativos especiais, investimentos privados, créditos judiciais, Special Situations e M&A.",
              "Nosso papel é compreender a necessidade, estruturar a operação, identificar riscos e conectar o projeto às fontes de capital mais adequadas.",
              "Atuamos junto a empresas, empresários, investidores, fundos de investimento, Family Offices, escritórios de advocacia, instituições financeiras e parceiros especializados.",
            ].map((p, i) => (
              <Reveal key={i} index={i}>
                <p className="text-lg leading-relaxed text-graphite/85 md:text-xl">{t(p)}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      <Section tone="forest">
        <div className="grid gap-14 lg:grid-cols-[1.5fr_1fr] lg:items-end">
          <div>
            <Eyebrow>Ostun</Eyebrow>
            <p className="mt-10 max-w-3xl font-display text-2xl leading-[1.3] md:text-[2.2rem]">
              {t(
                "Atualmente, a Assessmoney integra a Ostun como uma de suas Member Companies, combinando sua experiência no mercado brasileiro a um ecossistema mais amplo de soluções financeiras, investimentos e advisory.",
              )}
            </p>
            <p className="mt-8 max-w-2xl text-base leading-relaxed text-institutional-soft">
              {t(
                "Nosso papel é compreender cada necessidade, estruturar a operação, analisar riscos e conectar projetos, ativos e empresas às fontes de capital mais adequadas.",
              )}
            </p>
          </div>
          <a
            href={CONTACT.ostun}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-block self-start border border-champagne/50 px-6 py-3 text-[11px] uppercase tracking-[0.2em] text-champagne transition-colors hover:bg-champagne/10 lg:self-end"
          >
            {t("Member Company of Ostun")} ↗
          </a>
        </div>
      </Section>

      <CTASection title="Vamos estruturar sua operação." label="Fale com um especialista" to="/contato" />
    </PageTransition>
  );
}
