export const CONTACT = {
  address: "Av. Paulista, 2300 — Andar Pilotis",
  city: "Bela Vista, São Paulo — SP",
  phone: "+55 (11) 2847-4930",
  phoneHref: "tel:+551128474930",
  email: "contato@assessmoney.com.br",
  instagram: "https://instagram.com/assessmoney",
  linkedin: "https://www.linkedin.com/company/assessmoney",
  ostun: "https://ostungroup.com",
};

export const PARTNERS = [
  "Prime You",
  "Galleria Bank",
  "CashMe",
  "Pontte",
  "Banco Bari",
  "Creditas",
  "Primex Finance Global",
  "RD&JC Capital",
  "Multiplike",
];

export type NavItem = {
  label: string;
  to: string;
  params?: Record<string, string>;
  children?: NavItem[];
};

export const NAV: NavItem[] = [
  { label: "Home", to: "/" },
  {
    label: "Quem Somos",
    to: "/quem-somos",
    children: [
      { label: "Nossa História", to: "/quem-somos/nossa-historia" },
      { label: "Missão, Visão e Valores", to: "/quem-somos/missao-visao-valores" },
    ],
  },
  {
    label: "Soluções",
    to: "/solucoes",
    children: [
      { label: "Crédito Estruturado", to: "/solucoes/$slug", params: { slug: "credito-estruturado" } },
      { label: "Home Equity", to: "/solucoes/$slug", params: { slug: "home-equity" } },
      { label: "Consórcio Estruturado", to: "/solucoes/$slug", params: { slug: "consorcio-estruturado" } },
      { label: "Distressed Assets", to: "/solucoes/$slug", params: { slug: "distressed-assets" } },
      { label: "Special Situations", to: "/solucoes/$slug", params: { slug: "special-situations" } },
      { label: "Planejamento Tributário", to: "/solucoes/$slug", params: { slug: "planejamento-tributario" } },
      { label: "Diagnóstico Financeiro & BI", to: "/solucoes/$slug", params: { slug: "diagnostico-financeiro-bi" } },
      { label: "Assessoria Paralegal", to: "/solucoes/$slug", params: { slug: "assessoria-paralegal" } },
    ],
  },
  {
    label: "Legal Assets",
    to: "/legal-assets",
    children: [
      { label: "Créditos Judiciais", to: "/legal-assets/$slug", params: { slug: "creditos-judiciais" } },
      { label: "Créditos Trabalhistas", to: "/legal-assets/$slug", params: { slug: "creditos-trabalhistas" } },
      { label: "Monetização", to: "/legal-assets/$slug", params: { slug: "monetizacao" } },
      { label: "M&A de Bancas Jurídicas", to: "/legal-assets/$slug", params: { slug: "ma-bancas-juridicas" } },
    ],
  },
  {
    label: "M&A",
    to: "/ma",
    children: [
      { label: "M&A Corporativo", to: "/ma/$slug", params: { slug: "corporativo" } },
      { label: "Valuation", to: "/ma/$slug", params: { slug: "valuation" } },
      { label: "M&A Jurídico", to: "/ma/$slug", params: { slug: "juridico" } },
    ],
  },
  {
    label: "Investidores",
    to: "/investidores",
    children: [
      { label: "Oportunidades", to: "/investidores" },
      { label: "Estruture sua Operação de Crédito", to: "/investidores/estruture-sua-operacao-de-credito" },
    ],
  },
  { label: "Insights", to: "/insights" },
  { label: "Contato", to: "/contato" },
];
