import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { CTASection, PageHero, PageTransition, Section } from "@/components/site/PageLayout";
import { Reveal } from "@/components/site/Reveal";
import { CATEGORIES, POSTS } from "@/lib/insights";
import { useI18n, useIntlLocale } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/insights/")({
  head: () => ({
    meta: [
      { title: "Insights — Análises sobre crédito, ativos e M&A | Assessmoney" },
      {
        name: "description",
        content:
          "Leituras sobre crédito estruturado, Legal Assets, Special Situations, investimentos e operações de M&A no mercado brasileiro.",
      },
      { property: "og:title", content: "Insights — Assessmoney" },
      { property: "og:description", content: "Análises técnicas sobre estruturação financeira e ativos especiais." },
      { property: "og:url", content: "/insights" },
    ],
    links: [{ rel: "canonical", href: "/insights" }],
  }),
  component: InsightsHub,
});

function InsightsHub() {
  const { t } = useI18n();
  const intlLocale = useIntlLocale();
  const dateFmt = new Intl.DateTimeFormat(intlLocale, { day: "2-digit", month: "short", year: "numeric" });
  const [filter, setFilter] = useState<string>("Todos");
  const posts = filter === "Todos" ? POSTS : POSTS.filter((p) => p.category === filter);

  return (
    <PageTransition>
      <PageHero
        eyebrow="Insights"
        title="Leituras sobre capital, risco e estrutura."
        intro="Conteúdo técnico produzido a partir das operações que conduzimos."
      />

      <Section>
        <div className="flex flex-wrap gap-2" role="group" aria-label={t("Filtrar por categoria")}>
          {["Todos", ...CATEGORIES].map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setFilter(c)}
              aria-pressed={filter === c}
              className={cn(
                "border px-4 py-2 text-[11px] uppercase tracking-[0.16em] transition-colors",
                filter === c
                  ? "border-forest bg-forest text-cream"
                  : "border-border text-muted-foreground hover:border-forest hover:text-forest",
              )}
            >
              {t(c)}
            </button>
          ))}
        </div>

        <div className="mt-16 border-t border-border">
          {posts.map((post, i) => (
            <Reveal key={post.slug} index={Math.min(i, 3)}>
              <Link
                to="/insights/$slug"
                params={{ slug: post.slug }}
                className="group grid gap-6 border-b border-border py-10 transition-colors hover:bg-forest-deep/[0.03] md:grid-cols-[180px_1fr] md:gap-12"
              >
                <div className="flex flex-col gap-2 font-mono text-[11px] uppercase tabular tracking-[0.16em] text-muted-foreground">
                  <time dateTime={post.date}>{dateFmt.format(new Date(post.date))}</time>
                  <span className="text-emerald-action">{t(post.category)}</span>
                  <span>{t(post.readingTime)}</span>
                </div>
                <div>
                  <h2 className="max-w-3xl text-2xl leading-tight transition-colors group-hover:text-forest md:text-3xl">
                    {t(post.title)}
                  </h2>
                  <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-muted-foreground">{t(post.excerpt)}</p>
                </div>
              </Link>
            </Reveal>
          ))}
          {posts.length === 0 && (
            <p className="py-16 text-muted-foreground">{t("Nenhum conteúdo nesta categoria por enquanto.")}</p>
          )}
        </div>
      </Section>

      <CTASection title="Quer discutir um caso concreto?" label="Fale com um especialista" to="/contato" />
    </PageTransition>
  );
}
