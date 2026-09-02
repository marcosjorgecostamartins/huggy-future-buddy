export const CONTACT = {
  address: "Av. Paulista, 2300 — Andar Pilotis",
  city: "Bela Vista, São Paulo — SP",
  phone: "+55 (11) 2847-4930",
  phoneHref: "tel:+551128474930",
  whatsapp: "+55 11 99169-8491",
  whatsappHref: "https://wa.me/5511991698491",

  email: "contato@assessmoney.com.br",
  instagram: "https://instagram.com/assessmoney",
  linkedin: "https://www.linkedin.com/company/assessmoney",
  ostun: "https://ostungroup.com",
};

export type Partner = { name: string; logo: string };

export const PARTNERS: Partner[] = [
  { name: "Prime You", logo: "/partners/prime-you.png" },
  { name: "Galleria Bank", logo: "/partners/galleria-bank.png" },
  { name: "CashMe", logo: "/partners/cashme.png" },
  { name: "Pontte", logo: "/partners/pontte.png" },
  { name: "Banco Bari", logo: "/partners/banco-bari.png" },
  { name: "Creditas", logo: "/partners/creditas.png" },
  { name: "Primex Finance Global", logo: "/partners/primex.png" },
  { name: "RD&JC Capital", logo: "/partners/rdjc-capital.png" },
  { name: "Multiplike", logo: "/partners/multiplike.png" },
];

export const OSTUN_TRIAD_IMAGE = "/brand/ostun-member-companies.png";

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
