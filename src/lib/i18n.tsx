import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

export type Locale = "pt" | "en" | "es";

export const LOCALES: { code: Locale; label: string; htmlLang: string }[] = [
  { code: "pt", label: "PT", htmlLang: "pt-BR" },
  { code: "en", label: "EN", htmlLang: "en" },
  { code: "es", label: "ES", htmlLang: "es" },
];

const STORAGE_KEY = "assessmoney:locale";

/**
 * Dictionaries are keyed by the Brazilian Portuguese source string.
 * Missing keys fall back to the source string, so the site never breaks
 * when new copy is added.
 */
const DICT: Record<Exclude<Locale, "pt">, Record<string, string>> = {
  en: {
    // Navigation & chrome
    Home: "Home",
    "Quem Somos": "About Us",
    Soluções: "Solutions",
    "Legal Assets": "Legal Assets",
    "M&A": "M&A",
    Investidores: "Investors",
    Insights: "Insights",
    Contato: "Contact",
    "Fale com um especialista": "Talk to a specialist",
    "Assessmoney — início": "Assessmoney — home",
    "Navegação principal": "Main navigation",
    "Navegação móvel": "Mobile navigation",
    "Abrir menu": "Open menu",
    "Fechar menu": "Close menu",
    Idioma: "Language",
    Institucional: "Institutional",
    "Member Company of Ostun": "Member Company of Ostun",
    "Ostun Group": "Ostun Group",
    "Instituições e parceiros": "Institutions and partners",
    "Nossa História": "Our History",
    "Missão, Visão e Valores": "Mission, Vision and Values",
    Oportunidades: "Opportunities",
    "Estruture sua Operação de Crédito": "Structure Your Credit Operation",
    "Todos os direitos reservados.": "All rights reserved.",
    "As informações deste site têm caráter institucional e não constituem oferta, recomendação de investimento ou garantia de resultado.":
      "The information on this website is institutional in nature and does not constitute an offer, investment recommendation or guarantee of results.",

    // Market ticker
    Mercado: "Markets",
    "Cotações de referência": "Reference quotes",
    "Atualizado em": "Updated on",
    "Cotações indisponíveis no momento": "Quotes temporarily unavailable",

    // Home
    "Estruturação financeira desde 2011": "Financial structuring since 2011",
    "Capital para situações que exigem mais do que crédito convencional.":
      "Capital for situations that demand more than conventional credit.",
    "Estruturamos soluções de crédito, investimentos, ativos especiais e operações corporativas — conectando empresas, investidores e oportunidades desde 2011.":
      "We structure credit, investment, special-asset and corporate solutions — connecting companies, investors and opportunities since 2011.",
    "Conheça nossas soluções": "Explore our solutions",
    "Onde atuamos": "Where we operate",
    "Três pilares. Uma mesma disciplina de estruturação.":
      "Three pillars. One structuring discipline.",
    "Crédito & Capital": "Credit & Capital",
    "Legal Assets & M&A Jurídico": "Legal Assets & Legal M&A",
    "Special Situations & Corporate Advisory": "Special Situations & Corporate Advisory",
    "Crédito estruturado, Home Equity, consórcios estruturados, operações de crédito privado e soluções alternativas de funding.":
      "Structured credit, home equity, structured consortiums, private credit operations and alternative funding solutions.",
    "Créditos judiciais, monetização de ativos, estruturação de carteiras, M&A de bancas jurídicas e operações envolvendo créditos trabalhistas.":
      "Judicial claims, asset monetization, portfolio structuring, law-firm M&A and labor-claim transactions.",
    "Distressed Assets, Special Situations, M&A, Valuation, planejamento tributário, diagnóstico financeiro e assessoria estratégica.":
      "Distressed assets, special situations, M&A, valuation, tax planning, financial diagnostics and strategic advisory.",
    "Desde 2011, a Assessmoney atua na estruturação de soluções financeiras e operações especiais para empresas, investidores, escritórios jurídicos e detentores de ativos.":
      "Since 2011, Assessmoney has structured financial solutions and special operations for companies, investors, law firms and asset holders.",
    "Combinamos inteligência financeira, análise de risco, acesso a capital e capacidade de estruturação para transformar necessidades complexas em soluções viáveis.":
      "We combine financial intelligence, risk analysis, access to capital and structuring capability to turn complex needs into viable solutions.",
    Números: "Numbers",
    "Trajetória construída operação por operação.": "A track record built deal by deal.",
    "Ano de fundação": "Year founded",
    Ecossistema: "Ecosystem",
    "A Assessmoney integra a Ostun como uma de suas Member Companies, combinando sua experiência no mercado brasileiro a um ecossistema mais amplo de soluções financeiras, investimentos e advisory.":
      "Assessmoney is part of Ostun as one of its Member Companies, combining its Brazilian market experience with a broader ecosystem of financial solutions, investments and advisory.",
    "A tríade Ostun": "The Ostun triad",
    "Ostun — holding do ecossistema. Assessmoney e Trunk Capital — Member Companies.":
      "Ostun — ecosystem holding. Assessmoney and Trunk Capital — Member Companies.",
    "Sua operação exige uma estrutura sob medida.": "Your transaction deserves a tailor-made structure.",
    "Apresente sua operação": "Present your transaction",
  },
  es: {
    Home: "Inicio",
    "Quem Somos": "Quiénes Somos",
    Soluções: "Soluciones",
    "Legal Assets": "Legal Assets",
    "M&A": "M&A",
    Investidores: "Inversores",
    Insights: "Insights",
    Contato: "Contacto",
    "Fale com um especialista": "Hable con un especialista",
    "Assessmoney — início": "Assessmoney — inicio",
    "Navegação principal": "Navegación principal",
    "Navegação móvel": "Navegación móvil",
    "Abrir menu": "Abrir menú",
    "Fechar menu": "Cerrar menú",
    Idioma: "Idioma",
    Institucional: "Institucional",
    "Member Company of Ostun": "Member Company of Ostun",
    "Ostun Group": "Ostun Group",
    "Instituições e parceiros": "Instituciones y socios",
    "Nossa História": "Nuestra Historia",
    "Missão, Visão e Valores": "Misión, Visión y Valores",
    Oportunidades: "Oportunidades",
    "Estruture sua Operação de Crédito": "Estructure su Operación de Crédito",
    "Todos os direitos reservados.": "Todos los derechos reservados.",
    "As informações deste site têm caráter institucional e não constituem oferta, recomendação de investimento ou garantia de resultado.":
      "La información de este sitio tiene carácter institucional y no constituye oferta, recomendación de inversión ni garantía de resultado.",

    Mercado: "Mercado",
    "Cotações de referência": "Cotizaciones de referencia",
    "Atualizado em": "Actualizado el",
    "Cotações indisponíveis no momento": "Cotizaciones no disponibles en este momento",

    "Estruturação financeira desde 2011": "Estructuración financiera desde 2011",
    "Capital para situações que exigem mais do que crédito convencional.":
      "Capital para situaciones que exigen más que el crédito convencional.",
    "Estruturamos soluções de crédito, investimentos, ativos especiais e operações corporativas — conectando empresas, investidores e oportunidades desde 2011.":
      "Estructuramos soluciones de crédito, inversiones, activos especiales y operaciones corporativas — conectando empresas, inversores y oportunidades desde 2011.",
    "Conheça nossas soluções": "Conozca nuestras soluciones",
    "Onde atuamos": "Dónde actuamos",
    "Três pilares. Uma mesma disciplina de estruturação.":
      "Tres pilares. Una misma disciplina de estructuración.",
    "Crédito & Capital": "Crédito y Capital",
    "Legal Assets & M&A Jurídico": "Legal Assets y M&A Jurídico",
    "Special Situations & Corporate Advisory": "Special Situations y Corporate Advisory",
    "Crédito estruturado, Home Equity, consórcios estruturados, operações de crédito privado e soluções alternativas de funding.":
      "Crédito estructurado, Home Equity, consorcios estructurados, operaciones de crédito privado y soluciones alternativas de funding.",
    "Créditos judiciais, monetização de ativos, estruturação de carteiras, M&A de bancas jurídicas e operações envolvendo créditos trabalhistas.":
      "Créditos judiciales, monetización de activos, estructuración de carteras, M&A de despachos jurídicos y operaciones con créditos laborales.",
    "Distressed Assets, Special Situations, M&A, Valuation, planejamento tributário, diagnóstico financeiro e assessoria estratégica.":
      "Distressed Assets, Special Situations, M&A, Valuation, planificación tributaria, diagnóstico financiero y asesoría estratégica.",
    "Desde 2011, a Assessmoney atua na estruturação de soluções financeiras e operações especiais para empresas, investidores, escritórios jurídicos e detentores de ativos.":
      "Desde 2011, Assessmoney estructura soluciones financieras y operaciones especiales para empresas, inversores, despachos jurídicos y titulares de activos.",
    "Combinamos inteligência financeira, análise de risco, acesso a capital e capacidade de estruturação para transformar necessidades complexas em soluções viáveis.":
      "Combinamos inteligencia financiera, análisis de riesgo, acceso a capital y capacidad de estructuración para transformar necesidades complejas en soluciones viables.",
    Números: "Números",
    "Trajetória construída operação por operação.": "Trayectoria construida operación por operación.",
    "Ano de fundação": "Año de fundación",
    Ecossistema: "Ecosistema",
    "A Assessmoney integra a Ostun como uma de suas Member Companies, combinando sua experiência no mercado brasileiro a um ecossistema mais amplo de soluções financeiras, investimentos e advisory.":
      "Assessmoney integra Ostun como una de sus Member Companies, combinando su experiencia en el mercado brasileño con un ecosistema más amplio de soluciones financieras, inversiones y advisory.",
    "A tríade Ostun": "La tríada Ostun",
    "Ostun — holding do ecossistema. Assessmoney e Trunk Capital — Member Companies.":
      "Ostun — holding del ecosistema. Assessmoney y Trunk Capital — Member Companies.",
    "Sua operação exige uma estrutura sob medida.": "Su operación exige una estructura a medida.",
    "Apresente sua operação": "Presente su operación",
  },
};

type Ctx = { locale: Locale; setLocale: (l: Locale) => void; t: (s: string) => string };

const LocaleContext = createContext<Ctx>({ locale: "pt", setLocale: () => {}, t: (s) => s });

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("pt");

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY) as Locale | null;
    if (stored && LOCALES.some((l) => l.code === stored)) {
      setLocaleState(stored);
      return;
    }
    const nav = window.navigator.language.slice(0, 2).toLowerCase();
    if (nav === "en" || nav === "es") setLocaleState(nav);
  }, []);

  useEffect(() => {
    const entry = LOCALES.find((l) => l.code === locale);
    if (entry) document.documentElement.lang = entry.htmlLang;
  }, [locale]);

  const setLocale = useCallback((l: Locale) => {
    setLocaleState(l);
    try {
      window.localStorage.setItem(STORAGE_KEY, l);
    } catch {
      /* storage unavailable */
    }
  }, []);

  const t = useCallback(
    (s: string) => (locale === "pt" ? s : (DICT[locale][s] ?? s)),
    [locale],
  );

  const value = useMemo(() => ({ locale, setLocale, t }), [locale, setLocale, t]);

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useI18n() {
  return useContext(LocaleContext);
}
