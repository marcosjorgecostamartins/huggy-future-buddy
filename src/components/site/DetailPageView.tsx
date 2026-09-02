import { Link } from "@tanstack/react-router";
import type { DetailPage } from "@/lib/content";
import { CTASection, PageHero, PageTransition, Section } from "./PageLayout";
import { Reveal } from "./Reveal";
import { useI18n } from "@/lib/i18n";
import { ChipList, Eyebrow, LegalNote, Quote } from "./ui";

export function DetailPageView({
  page,
  siblings,
  basePath,
  siblingsLabel,
}: {
  page: DetailPage;
  siblings: DetailPage[];
  basePath: string;
  siblingsLabel: string;
}) {
  const { t } = useI18n();
  return (
    <PageTransition>
      <PageHero eyebrow={page.eyebrow} title={page.title} subtitle={page.summary} />

      <Section>
        <div className="grid gap-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)]">
          <Reveal className="lg:sticky lg:top-32 lg:self-start">
            <Eyebrow>{page.name}</Eyebrow>
          </Reveal>
          <div className="space-y-16">
            {page.blocks.map((block, i) => {
              if (block.kind === "text") {
                return (
                  <Reveal key={i} index={i} className="space-y-6">
                    {block.body.map((p, j) => (
                      <p key={j} className="text-lg leading-relaxed text-graphite/85 md:text-xl">
                        {t(p)}
                      </p>
                    ))}
                  </Reveal>
                );
              }
              if (block.kind === "chips") {
                return (
                  <Reveal key={i} index={i}>
                    <ChipList title={block.title} items={block.items} />
                  </Reveal>
                );
              }
              if (block.kind === "quote") {
                return (
                  <Reveal key={i} index={i}>
                    <Quote>{block.text}</Quote>
                  </Reveal>
                );
              }
              return (
                <Reveal key={i} index={i}>
                  <LegalNote>{block.text}</LegalNote>
                </Reveal>
              );
            })}
          </div>
        </div>
      </Section>

      <Section tone="dark">
        <Eyebrow>{siblingsLabel}</Eyebrow>
        <ul className="mt-12 divide-y divide-white/10 border-y border-white/10">
          {siblings
            .filter((s) => s.slug !== page.slug)
            .map((s, i) => (
              <li key={s.slug}>
                <Link
                  to={`${basePath}/$slug` as never}
                  params={{ slug: s.slug } as never}
                  className="group flex flex-col gap-2 py-7 md:flex-row md:items-baseline md:justify-between md:gap-12"
                >
                  <span className="font-display text-2xl transition-colors group-hover:text-emerald-action md:text-3xl">
                    {t(s.name)}
                  </span>
                  <span className="max-w-xl text-sm text-institutional-soft">{t(s.summary)}</span>
                  <span className="font-mono text-[11px] tabular text-emerald-action">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </Link>
              </li>
            ))}
        </ul>
      </Section>

      <CTASection title="Sua operação exige uma estrutura sob medida." label={page.cta.label} to={page.cta.to} />
    </PageTransition>
  );
}
