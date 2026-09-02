import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { CTASection, PageHero, PageTransition, Section } from "@/components/site/PageLayout";
import { Reveal } from "@/components/site/Reveal";
import { useI18n } from "@/lib/i18n";
import { TIMELINE } from "@/lib/content";

export const Route = createFileRoute("/quem-somos/nossa-historia")({
  head: () => ({
    meta: [
      { title: "Nossa História — Assessmoney" },
      {
        name: "description",
        content:
          "De 2011 até hoje: a trajetória da Assessmoney do crédito tradicional às operações estruturadas, ativos especiais e M&A.",
      },
      { property: "og:title", content: "Nossa História — Assessmoney" },
      {
        property: "og:description",
        content: "A evolução da Assessmoney em estruturação financeira, crédito privado e ativos especiais.",
      },
      { property: "og:url", content: "/quem-somos/nossa-historia" },
    ],
    links: [{ rel: "canonical", href: "/quem-somos/nossa-historia" }],
  }),
  component: NossaHistoria,
});

function NossaHistoria() {
  const { t } = useI18n();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 70%", "end 60%"] });
  const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <PageTransition>
      <PageHero
        eyebrow="Quem Somos / Nossa História"
        title="Uma trajetória construída em operações, não em promessas."
        subtitle="De 2011 até hoje."
      />

      <Section>
        <div ref={ref} className="relative pl-10 md:pl-24">
          <div className="absolute left-0 top-0 h-full w-px bg-border md:left-8" aria-hidden="true" />
          <motion.div
            style={{ height }}
            className="absolute left-0 top-0 w-px bg-emerald-action md:left-8"
            aria-hidden="true"
          />
          <ol className="space-y-24">
            {TIMELINE.map((item, i) => (
              <li key={item.year} className="relative">
                <span
                  className="absolute -left-10 top-3 size-2 rounded-full bg-emerald-action md:-left-[4.35rem]"
                  aria-hidden="true"
                />
                <Reveal index={i}>
                  <p className="font-mono text-[11px] uppercase tabular tracking-[0.24em] text-emerald-action">
                    {t(item.year)}
                  </p>
                  <h2 className="mt-5 text-3xl md:text-5xl">{t(item.title)}</h2>
                  <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">{t(item.text)}</p>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </Section>

      <CTASection title="Sua operação exige uma estrutura sob medida." label="Apresente sua operação" to="/contato" />
    </PageTransition>
  );
}
