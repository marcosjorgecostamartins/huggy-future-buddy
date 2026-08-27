import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { CTASection, PageHero, PageTransition, Section } from "@/components/site/PageLayout";
import { Reveal } from "@/components/site/Reveal";
import { Eyebrow } from "@/components/site/ui";
import { CONTACT } from "@/lib/site";

export const Route = createFileRoute("/investidores")({
  head: () => ({
    meta: [
      { title: "Investidores — Oportunidades estruturadas | Assessmoney" },
      {
        name: "description",
        content:
          "Operações estruturadas com lastro real para investidores qualificados, fundos, Family Offices e instituições financeiras.",
      },
      { property: "og:title", content: "Investidores — Assessmoney" },
      {
        property: "og:description",
        content: "Acesso a operações de crédito privado, ativos judiciais e special situations com análise de risco.",
      },
      { property: "og:url", content: "/investidores" },
    ],
    links: [{ rel: "canonical", href: "/investidores" }],
  }),
  component: Investidores,
});

const PERFIS = [
  "Investidores qualificados e profissionais",
  "Fundos de investimento e securitizadoras",
  "Family Offices e patrimônios familiares",
  "Instituições financeiras e parceiros de funding",
];

const OPORTUNIDADES = [
  {
    title: "Crédito privado com garantia real",
    text: "Operações com garantia imobiliária, alienação fiduciária e cessão de recebíveis, estruturadas caso a caso.",
  },
  {
    title: "Ativos judiciais e trabalhistas",
    text: "Carteiras e créditos individuais com due diligence documental, análise de fase processual e solvência do devedor.",
  },
  {
    title: "Special Situations e Distressed",
    text: "Ativos e empresas em situação de estresse financeiro, com estruturas de entrada desenhadas para o risco envolvido.",
  },
  {
    title: "Co-investimento em operações corporativas",
    text: "Participação em transações de M&A e reestruturações societárias originadas pela Assessmoney.",
  },
];

function Investidores() {
  const [sent, setSent] = useState(false);

  return (
    <PageTransition>
      <PageHero
        eyebrow="Investidores"
        title="Operações estruturadas, com lastro e leitura de risco."
        intro="Trabalhamos com investidores que buscam exposição a crédito privado e ativos especiais fora do circuito tradicional."
      />

      <Section>
        <div className="grid gap-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)]">
          <Reveal className="lg:sticky lg:top-32 lg:self-start">
            <Eyebrow>Perfis atendidos</Eyebrow>
            <ul className="mt-8 space-y-4">
              {PERFIS.map((p) => (
                <li key={p} className="flex gap-4 text-[15px] leading-relaxed text-graphite/80">
                  <span className="mt-2 size-1.5 shrink-0 bg-emerald-action" aria-hidden="true" />
                  {p}
                </li>
              ))}
            </ul>
          </Reveal>
          <div className="grid gap-px border border-border bg-border sm:grid-cols-2">
            {OPORTUNIDADES.map((o, i) => (
              <Reveal key={o.title} index={i % 2}>
                <div className="h-full bg-cream p-8">
                  <h2 className="text-xl leading-snug">{o.title}</h2>
                  <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">{o.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      <Section tone="dark">
        <div className="grid gap-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)]">
          <div>
            <Eyebrow>Cadastro</Eyebrow>
            <h2 className="mt-8 text-3xl leading-tight md:text-4xl">
              Receba operações compatíveis com o seu mandato.
            </h2>
            <p className="mt-6 max-w-md text-[15px] leading-relaxed text-institutional-soft">
              As informações são tratadas de forma confidencial e utilizadas exclusivamente para apresentação de
              oportunidades aderentes ao perfil informado.
            </p>
          </div>

          {sent ? (
            <div
              role="status"
              className="flex min-h-[280px] flex-col justify-center border border-champagne/30 p-10"
            >
              <p className="font-display text-2xl text-cream">Cadastro recebido.</p>
              <p className="mt-4 text-[15px] text-institutional-soft">
                Nossa equipe entrará em contato para entender seu mandato e alinhar o fluxo de oportunidades.
              </p>
            </div>
          ) : (
            <form
              className="grid gap-6 sm:grid-cols-2"
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
            >
              <Field label="Nome" name="nome" required />
              <Field label="Empresa / Instituição" name="empresa" />
              <Field label="E-mail" name="email" type="email" required />
              <Field label="Telefone" name="telefone" type="tel" />
              <div className="sm:col-span-2">
                <label htmlFor="perfil" className="block text-[11px] uppercase tracking-[0.18em] text-champagne">
                  Perfil de investidor
                </label>
                <select
                  id="perfil"
                  name="perfil"
                  className="mt-3 w-full border border-white/15 bg-transparent px-4 py-3 text-cream outline-none transition-colors focus-visible:border-emerald-action"
                >
                  {PERFIS.map((p) => (
                    <option key={p} value={p} className="bg-graphite">
                      {p}
                    </option>
                  ))}
                </select>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="ticket" className="block text-[11px] uppercase tracking-[0.18em] text-champagne">
                  Interesse e ticket médio
                </label>
                <textarea
                  id="ticket"
                  name="ticket"
                  rows={4}
                  className="mt-3 w-full resize-none border border-white/15 bg-transparent px-4 py-3 text-cream outline-none transition-colors focus-visible:border-emerald-action"
                />
              </div>
              <button
                type="submit"
                className="sm:col-span-2 justify-self-start bg-emerald-action px-8 py-4 text-[11px] uppercase tracking-[0.2em] text-cream transition-colors hover:bg-cream hover:text-graphite"
              >
                Enviar cadastro
              </button>
              <p className="text-[13px] text-institutional-soft sm:col-span-2">
                Prefere falar diretamente? {" "}
                <a href={`mailto:${CONTACT.email}`} className="nav-underline text-champagne">
                  {CONTACT.email}
                </a>
              </p>
            </form>
          )}
        </div>
      </Section>

      <CTASection title="Vamos alinhar mandato e originação." label="Fale com um especialista" to="/contato" />
    </PageTransition>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="block text-[11px] uppercase tracking-[0.18em] text-champagne">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="mt-3 w-full border border-white/15 bg-transparent px-4 py-3 text-cream outline-none transition-colors focus-visible:border-emerald-action"
      />
    </div>
  );
}
