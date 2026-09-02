import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import cashImage from "@/assets/cash.jpg.asset.json";
import heroVideo from "@/assets/hero-video.mp4.asset.json";
import { CTASection, PageTransition, Section } from "@/components/site/PageLayout";
import { Reveal, RevealWords } from "@/components/site/Reveal";
import { EcosystemTriad } from "@/components/site/EcosystemTriad";
import { PartnerLogos } from "@/components/site/PartnerLogos";
import { MarketTicker } from "@/components/site/MarketTicker";
import { BrandLogo } from "@/components/site/BrandLogo";
import { Cta, Eyebrow, SectionHeading, StatCounter } from "@/components/site/ui";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Assessmoney — Estruturação financeira, Legal Assets e M&A" },
      {
        name: "description",
        content:
          "Boutique de estruturação financeira desde 2011: crédito estruturado, Home Equity, créditos judiciais, Special Situations, Valuation e M&A.",
      },
      { property: "og:title", content: "Assessmoney — Estruturação financeira, Legal Assets e M&A" },
      {
        property: "og:description",
        content:
          "Capital para situações que exigem mais do que crédito convencional. Estruturação de crédito, ativos especiais e operações corporativas.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const PILLARS = [
  {
    label: "01",
    title: "Crédito & Capital",
    text: "Crédito estruturado, Home Equity, consórcios estruturados, operações de crédito privado e soluções alternativas de funding.",
    to: "/solucoes",
  },
  {
    label: "02",
    title: "Legal Assets & M&A Jurídico",
    text: "Créditos judiciais, monetização de ativos, estruturação de carteiras, M&A de bancas jurídicas e operações envolvendo créditos trabalhistas.",
    to: "/legal-assets",
  },
  {
    label: "03",
    title: "Special Situations & Corporate Advisory",
    text: "Distressed Assets, Special Situations, M&A, Valuation, planejamento tributário, diagnóstico financeiro e assessoria estratégica.",
    to: "/ma",
  },
];

function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);

  return (
    <section ref={ref} className="relative flex min-h-[92vh] items-end overflow-hidden bg-graphite">
      <motion.video
        style={{ y }}
        className="absolute inset-0 size-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
      >
        <source src={heroVideo.url} type="video/mp4" />
      </motion.video>
      <div className="absolute inset-0 bg-graphite/72" aria-hidden="true" />
      <div className="absolute inset-0 bg-gradient-to-t from-graphite via-graphite/30 to-graphite/60" aria-hidden="true" />
      <div className="blueprint absolute inset-0 opacity-60" aria-hidden="true" />

      <div className="relative mx-auto w-full max-w-[1400px] px-6 pb-24 pt-44 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-10"
        >
          <BrandLogo priority halo width={280} height={86} imgClassName="h-20 md:h-24" />
        </motion.div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }}>
          <Eyebrow>Estruturação financeira desde 2011</Eyebrow>
        </motion.div>
        <h1 className="mt-10 max-w-[16ch] text-5xl leading-[0.96] text-cream md:text-7xl lg:text-[6.2rem]">
          <RevealWords text="Capital para situações que exigem mais do que crédito convencional." />
        </h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 max-w-2xl text-lg leading-relaxed text-cream/75 md:text-xl"
        >
          Estruturamos soluções de crédito, investimentos, ativos especiais e operações corporativas —
          conectando empresas, investidores e oportunidades desde 2011.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.05, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 flex flex-wrap gap-4"
        >
          <Cta to="/solucoes" className="bg-emerald-action before:bg-cream hover:!text-graphite">
            Conheça nossas soluções
          </Cta>
          <Cta to="/contato" variant="outline" className="text-cream">
            Fale com um especialista
          </Cta>
        </motion.div>
      </div>
    </section>
  );
}

function Home() {
  const imgRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: imgRef, offset: ["start end", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <PageTransition>
      <Hero />
      <MarketTicker />

      <Section>
        <Reveal>
          <p className="max-w-5xl text-2xl leading-[1.4] text-graphite md:text-[2.1rem]">
            Desde 2011, a Assessmoney atua na estruturação de soluções financeiras e operações especiais para
            empresas, investidores, escritórios jurídicos e detentores de ativos.
          </p>
        </Reveal>
        <Reveal index={1}>
          <p className="mt-10 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Combinamos inteligência financeira, análise de risco, acesso a capital e capacidade de estruturação
            para transformar necessidades complexas em soluções viáveis.
          </p>
        </Reveal>
      </Section>

      <section className="bg-cream pb-24 md:pb-32">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <SectionHeading eyebrow="Onde atuamos" title="Três pilares. Uma mesma disciplina de estruturação." />
          <div className="mt-16 grid gap-px border border-border bg-border md:grid-cols-3">
            {PILLARS.map((pillar, i) => (
              <Reveal key={pillar.title} index={i}>
                <Link
                  to={pillar.to as never}
                  className="group flex h-full flex-col justify-between gap-16 bg-cream p-8 transition-all duration-500 hover:-translate-y-1 hover:bg-forest-deep md:p-10"
                >
                  <span className="font-mono text-[11px] tabular text-emerald-action">{pillar.label}</span>
                  <div>
                    <h3 className="text-3xl leading-tight transition-colors duration-500 group-hover:text-cream">
                      {pillar.title}
                    </h3>
                    <p className="mt-6 text-[15px] leading-relaxed text-muted-foreground transition-colors duration-500 group-hover:text-cream/70">
                      {pillar.text}
                    </p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="grain relative overflow-hidden bg-graphite text-cream">
        <div className="grid lg:grid-cols-2">
          <div ref={imgRef} className="relative min-h-[420px] overflow-hidden lg:min-h-[640px]">
            <motion.img
              style={{ y: imgY }}
              src={cashImage.url}
              alt="Mãos segurando cédulas — imagem editorial em preto e branco"
              loading="lazy"
              className="absolute inset-0 size-full scale-110 object-cover contrast-125 grayscale"
            />
            <div className="absolute inset-0 bg-graphite/35" aria-hidden="true" />
          </div>
          <div className="blueprint flex items-center px-6 py-24 lg:px-16">
            <div className="max-w-xl">
              <Eyebrow>Números</Eyebrow>
              <h2 className="mt-8 text-4xl leading-tight md:text-5xl">
                Trajetória construída operação por operação.
              </h2>
              <div className="mt-14 grid gap-10 sm:grid-cols-2">
                <StatCounter raw="2011" label="Ano de fundação" />
                {/* [EDITAR] Substituir pelos números reais de volume estruturado */}
                <StatCounter value={350} prefix="R$ " suffix=" mi" label="Volume estruturado [EDITAR]" />
                {/* [EDITAR] Substituir pelo número real de operações conduzidas */}
                <StatCounter value={180} prefix="+" label="Operações conduzidas [EDITAR]" />
                {/* [EDITAR] Substituir pelo número real de parceiros institucionais */}
                <StatCounter value={40} prefix="+" label="Parceiros institucionais [EDITAR]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <EcosystemTriad />

      <PartnerLogos />

      <CTASection
        title="Sua operação exige uma estrutura sob medida."
        label="Apresente sua operação"
        to="/contato"
      />
    </PageTransition>
  );
}
