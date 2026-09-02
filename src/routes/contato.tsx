import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero, PageTransition, Section } from "@/components/site/PageLayout";
import { Reveal } from "@/components/site/Reveal";
import { Eyebrow } from "@/components/site/ui";
import { useI18n } from "@/lib/i18n";
import { CONTACT } from "@/lib/site";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato — Assessmoney" },
      {
        name: "description",
        content:
          "Apresente sua operação à Assessmoney. Atendimento confidencial para empresas, investidores e escritórios jurídicos.",
      },
      { property: "og:title", content: "Contato — Assessmoney" },
      { property: "og:description", content: "Fale com um especialista em estruturação financeira." },
      { property: "og:url", content: "/contato" },
    ],
    links: [{ rel: "canonical", href: "/contato" }],
  }),
  component: Contato,
});

const ASSUNTOS = [
  "Crédito estruturado",
  "Home Equity",
  "Legal Assets / créditos judiciais",
  "M&A e Valuation",
  "Investimentos",
  "Outro assunto",
];

function Contato() {
  const { t } = useI18n();
  const [sent, setSent] = useState(false);

  return (
    <PageTransition>
      <PageHero
        eyebrow="Contato"
        title="Apresente sua operação."
        intro="Analisamos cada demanda de forma individual e confidencial. Quanto mais contexto, mais objetiva a resposta."
      />

      <Section>
        <div className="grid gap-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)]">
          <Reveal className="lg:sticky lg:top-32 lg:self-start">
            <Eyebrow>Canais diretos</Eyebrow>
            <dl className="mt-10 space-y-8 text-[15px]">
              <div>
                <dt className="font-mono text-[11px] uppercase tracking-[0.18em] text-emerald-action">{t("E-mail")}</dt>
                <dd className="mt-2">
                  <a href={`mailto:${CONTACT.email}`} className="nav-underline text-graphite">
                    {CONTACT.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-mono text-[11px] uppercase tracking-[0.18em] text-emerald-action">{t("Telefone")}</dt>
                <dd className="mt-2">
                  <a href={`tel:${CONTACT.phone.replace(/\D/g, "")}`} className="nav-underline text-graphite">
                    {CONTACT.phone}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-mono text-[11px] uppercase tracking-[0.18em] text-emerald-action">{t("Endereço")}</dt>
                <dd className="mt-2 max-w-xs leading-relaxed text-muted-foreground">{CONTACT.address}</dd>
              </div>
              <div>
                <dt className="font-mono text-[11px] uppercase tracking-[0.18em] text-emerald-action">
                  {t("Confidencialidade")}
                </dt>
                <dd className="mt-2 max-w-xs leading-relaxed text-muted-foreground">
                  {t(
                    "Informações compartilhadas são tratadas com sigilo e utilizadas exclusivamente para análise da operação.",
                  )}
                </dd>
              </div>
            </dl>
          </Reveal>

          {sent ? (
            <div
              role="status"
              className="flex min-h-[320px] flex-col justify-center border border-border bg-white/60 p-10"
            >
              <p className="font-display text-3xl text-forest">{t("Mensagem enviada.")}</p>
              <p className="mt-4 max-w-md text-[15px] leading-relaxed text-muted-foreground">
                {t(
                  "Recebemos sua solicitação. Um especialista entrará em contato para aprofundar o entendimento da operação.",
                )}
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
              <Field label={t("Nome")} name="nome" required />
              <Field label={t("Empresa")} name="empresa" />
              <Field label={t("E-mail")} name="email" type="email" required />
              <Field label={t("Telefone")} name="telefone" type="tel" />
              <div className="sm:col-span-2">
                <label htmlFor="assunto" className="block text-[11px] uppercase tracking-[0.18em] text-forest">
                  {t("Assunto")}
                </label>
                <select
                  id="assunto"
                  name="assunto"
                  className="mt-3 w-full border border-border bg-transparent px-4 py-3 text-graphite outline-none transition-colors focus-visible:border-emerald-action"
                >
                  {ASSUNTOS.map((a) => (
                    <option key={a} value={a}>
                      {t(a)}
                    </option>
                  ))}
                </select>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="mensagem" className="block text-[11px] uppercase tracking-[0.18em] text-forest">
                  {t("Descreva sua operação")}
                </label>
                <textarea
                  id="mensagem"
                  name="mensagem"
                  rows={6}
                  required
                  className="mt-3 w-full resize-none border border-border bg-transparent px-4 py-3 text-graphite outline-none transition-colors focus-visible:border-emerald-action"
                />
              </div>
              <button
                type="submit"
                className="justify-self-start bg-forest px-8 py-4 text-[11px] uppercase tracking-[0.2em] text-cream transition-colors hover:bg-emerald-action sm:col-span-2"
              >
                {t("Enviar mensagem")}
              </button>
            </form>
          )}
        </div>
      </Section>
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
      <label htmlFor={name} className="block text-[11px] uppercase tracking-[0.18em] text-forest">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="mt-3 w-full border border-border bg-transparent px-4 py-3 text-graphite outline-none transition-colors focus-visible:border-emerald-action"
      />
    </div>
  );
}
