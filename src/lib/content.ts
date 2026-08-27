export type Block =
  | { kind: "text"; body: string[] }
  | { kind: "chips"; title: string; items: string[] }
  | { kind: "quote"; text: string }
  | { kind: "note"; text: string };

export type DetailPage = {
  slug: string;
  eyebrow: string;
  name: string;
  title: string;
  subtitle?: string;
  summary: string;
  blocks: Block[];
  cta: { label: string; to: string };
};

export const SOLUTIONS: DetailPage[] = [
  {
    slug: "credito-estruturado",
    eyebrow: "Soluções / Crédito",
    name: "Crédito Estruturado",
    title: "Crédito além dos modelos convencionais.",
    summary:
      "Operações desenhadas a partir de fluxo de caixa, ativos, recebíveis, imóveis, contratos e garantias.",
    blocks: [
      {
        kind: "text",
        body: [
          "Nem toda necessidade de capital se enquadra nas políticas tradicionais dos bancos. A Assessmoney estrutura operações considerando fluxo de caixa, ativos, recebíveis, imóveis, contratos, garantias, oportunidades de investimento e capacidade econômica do tomador.",
          "Buscamos diferentes fontes de funding de acordo com o perfil de cada operação.",
        ],
      },
      {
        kind: "chips",
        title: "Fontes de capital",
        items: [
          "Fundos de Investimento",
          "Family Offices",
          "Private Equity",
          "Venture Capital",
          "Investidores Anjo",
          "Investidores privados",
          "Instituições Financeiras",
          "Gestores e estruturas de crédito privado",
        ],
      },
    ],
    cta: { label: "Apresente sua necessidade de capital", to: "/contato" },
  },
  {
    slug: "home-equity",
    eyebrow: "Soluções / Crédito",
    name: "Home Equity",
    title: "Liquidez a partir do patrimônio imobiliário.",
    summary: "Crédito com garantia imobiliária para pessoas físicas e empresas, sem alienar o ativo.",
    blocks: [
      {
        kind: "text",
        body: [
          "Transforme patrimônio imobiliário em liquidez sem necessariamente alienar o ativo. Estruturamos operações de crédito com garantia imobiliária para pessoas físicas e empresas, avaliando finalidade dos recursos, capacidade financeira, garantias e alternativas disponíveis no mercado.",
        ],
      },
      {
        kind: "chips",
        title: "Aplicações",
        items: [
          "Capital de giro",
          "Expansão empresarial",
          "Reorganização financeira",
          "Investimentos",
          "Aquisições",
          "Consolidação de dívidas",
          "Projetos pessoais ou empresariais",
        ],
      },
    ],
    cta: { label: "Tenho uma necessidade de crédito", to: "/contato" },
  },
  {
    slug: "consorcio-estruturado",
    eyebrow: "Soluções / Crédito",
    name: "Consórcio Estruturado",
    title: "Consórcio sem imobilizar todo o capital necessário para o lance.",
    summary:
      "Estruturas que combinam consórcio e capital de investidores para o lance destinado à antecipação da contemplação.",
    blocks: [
      {
        kind: "text",
        body: [
          "Estruturamos soluções envolvendo consórcio e capital de investidores para financiar o lance destinado à antecipação da contemplação. O objetivo é permitir que empresas ou investidores tenham acesso às vantagens econômicas do consórcio sem necessariamente comprometer integralmente sua liquidez para realizar o lance.",
          "A estrutura pode envolver capital proveniente de investidores privados, fundos ou parceiros financeiros, de acordo com a análise de cada operação.",
        ],
      },
      {
        kind: "chips",
        title: "Aplicações",
        items: ["Imóveis", "Veículos", "Caminhões", "Máquinas", "Equipamentos", "Expansão patrimonial"],
      },
      {
        kind: "note",
        text: "Estruturação do lance destinado à busca ou antecipação da contemplação, sujeita às regras específicas do grupo de consórcio. Não há promessa ou garantia de contemplação.",
      },
    ],
    cta: { label: "Apresente sua operação", to: "/contato" },
  },
  {
    slug: "distressed-assets",
    eyebrow: "Soluções / Special Situations",
    name: "Distressed Assets",
    title: "Valor onde o mercado tradicional enxerga complexidade.",
    summary: "Ativos, empresas e créditos em situações financeiras especiais.",
    blocks: [
      {
        kind: "text",
        body: [
          "Atuação em ativos, empresas ou créditos que apresentem situações financeiras especiais e que demandem análise aprofundada, reestruturação ou capital especializado.",
        ],
      },
      {
        kind: "chips",
        title: "Operações",
        items: [
          "Aquisição de ativos com desconto",
          "Créditos inadimplidos",
          "Ativos estressados",
          "Carteiras de recebíveis",
          "Empresas em reorganização",
          "Oportunidades envolvendo garantias",
          "Operações com necessidade de liquidez",
        ],
      },
    ],
    cta: { label: "Quero monetizar um ativo", to: "/contato" },
  },
  {
    slug: "special-situations",
    eyebrow: "Soluções / Special Situations",
    name: "Special Situations",
    title: "Estruturas específicas para operações que não cabem em produtos de prateleira.",
    summary: "Articulação de capital, crédito e investidores em situações que exigem desenho próprio.",
    blocks: [
      {
        kind: "text",
        body: [
          "Algumas operações não se enquadram em produtos financeiros tradicionais. Special Situations são oportunidades ou necessidades que exigem estruturas específicas de capital, crédito ou investimento.",
          "A Assessmoney atua como estruturadora e articuladora, reunindo os participantes necessários para desenvolver uma solução personalizada.",
        ],
      },
      {
        kind: "chips",
        title: "Situações",
        items: [
          "Capital emergencial",
          "Aquisições",
          "Reestruturações",
          "Desinvestimentos",
          "Ativos ilíquidos",
          "Litígios",
          "Operações oportunísticas",
          "Soluções bridge",
          "Empresas em momentos de transição",
        ],
      },
    ],
    cta: { label: "Apresente sua operação", to: "/contato" },
  },
  {
    slug: "planejamento-tributario",
    eyebrow: "Soluções / Corporate Advisory",
    name: "Planejamento Tributário",
    title: "Eficiência tributária a partir da estrutura real da empresa.",
    summary: "Análise da estrutura tributária e financeira com foco em reorganização e eficiência.",
    blocks: [
      {
        kind: "text",
        body: [
          "Análise da estrutura tributária e financeira da empresa visando identificar oportunidades de reorganização, eficiência operacional e adequação da estrutura empresarial.",
          "O serviço é realizado em conjunto com profissionais jurídicos e contábeis habilitados quando necessário.",
        ],
      },
    ],
    cta: { label: "Quero avaliar minha empresa", to: "/contato" },
  },
  {
    slug: "diagnostico-financeiro-bi",
    eyebrow: "Soluções / Corporate Advisory",
    name: "Diagnóstico Financeiro & BI",
    title: "Dados financeiros transformados em decisões.",
    summary: "Consolidação e visualização de indicadores por meio de Business Intelligence.",
    blocks: [
      {
        kind: "text",
        body: [
          "Análise financeira por meio de ferramentas de Business Intelligence, permitindo consolidar e visualizar indicadores importantes para gestão.",
        ],
      },
      {
        kind: "chips",
        title: "Análises",
        items: [
          "Fluxo de caixa",
          "Margens",
          "Endividamento",
          "Custos",
          "Receitas",
          "Capital de giro",
          "Rentabilidade",
          "Projeções",
          "Indicadores financeiros",
          "Dashboards gerenciais",
        ],
      },
    ],
    cta: { label: "Quero avaliar minha empresa", to: "/contato" },
  },
  {
    slug: "assessoria-paralegal",
    eyebrow: "Soluções / Corporate Advisory",
    name: "Assessoria Paralegal",
    title: "Interface operacional entre empresas, instituições e profissionais jurídicos.",
    summary: "Apoio administrativo e operacional em demandas documentais, societárias e cadastrais.",
    blocks: [
      {
        kind: "text",
        body: [
          "Apoio administrativo e operacional relacionado a demandas documentais, societárias, cadastrais e processos que exigem interface entre empresas, instituições e profissionais jurídicos.",
        ],
      },
      { kind: "note", text: "A assessoria paralegal não substitui serviços privativos da advocacia." },
    ],
    cta: { label: "Fale com um especialista", to: "/contato" },
  },
];

export const LEGAL_ASSETS: DetailPage[] = [
  {
    slug: "creditos-judiciais",
    eyebrow: "Legal Assets",
    name: "Créditos Judiciais",
    title: "Direitos creditórios avaliados como ativos financeiros.",
    summary: "Identificação, avaliação e estruturação de créditos judiciais e acervos processuais.",
    blocks: [
      {
        kind: "text",
        body: [
          "A Assessmoney atua na identificação, avaliação, estruturação, monetização e negociação de ativos judiciais. Combinamos conhecimento financeiro, análise jurídica e avaliação de risco para transformar direitos creditórios em ativos qualificados e potencialmente negociáveis.",
        ],
      },
      {
        kind: "chips",
        title: "Áreas de atuação",
        items: [
          "Créditos judiciais",
          "Direitos creditórios",
          "Honorários contratuais",
          "Honorários de êxito",
          "Honorários sucumbenciais",
          "Carteiras jurídicas",
          "Acervos processuais",
          "Operações estruturadas envolvendo ativos judiciais",
        ],
      },
    ],
    cta: { label: "Quero monetizar um ativo", to: "/contato" },
  },
  {
    slug: "creditos-trabalhistas",
    eyebrow: "Legal Assets",
    name: "Créditos Trabalhistas",
    title: "Especialização em créditos trabalhistas pelo lado do reclamante.",
    summary: "Análise jurídica, financeira e creditícia aplicada ao ciclo de vida do crédito trabalhista.",
    blocks: [
      {
        kind: "text",
        body: [
          "Nosso conhecimento do ciclo de vida dos créditos trabalhistas permite combinar análise jurídica, financeira e creditícia para avaliação das oportunidades.",
        ],
      },
      {
        kind: "chips",
        title: "Fatores analisados",
        items: [
          "Fase processual",
          "Solvência do devedor",
          "Potencial econômico",
          "Prazo estimado",
          "Complexidade jurídica",
          "Qualidade documental",
          "Riscos relacionados à execução",
          "Recuperabilidade do crédito",
        ],
      },
      {
        kind: "text",
        body: [
          "O objetivo é permitir decisões de investimento e monetização fundamentadas em metodologia e análise estruturada.",
        ],
      },
    ],
    cta: { label: "Quero monetizar um ativo", to: "/contato" },
  },
  {
    slug: "monetizacao",
    eyebrow: "Legal Assets",
    name: "Monetização",
    title: "Antecipação e negociação de ativos judiciais.",
    summary: "Estruturação de operações que convertem direitos creditórios em liquidez.",
    blocks: [
      {
        kind: "text",
        body: [
          "A monetização parte da qualificação do ativo: fase processual, devedor, documentação e risco de execução. A partir dessa leitura, estruturamos a operação e conectamos o ativo a investidores e parceiros com apetite compatível.",
          "Atuamos tanto pelo lado do detentor do crédito quanto pelo lado do capital, sempre com metodologia de análise e alinhamento de interesses entre as partes.",
        ],
      },
      {
        kind: "chips",
        title: "Formatos",
        items: [
          "Cessão de créditos",
          "Antecipação de honorários",
          "Operações com carteiras",
          "Estruturas com coobrigação",
          "Operações com garantias adicionais",
          "Veículos dedicados de investimento",
        ],
      },
      {
        kind: "note",
        text: "Não há garantia de resultado, de recebimento ou de prazo em operações envolvendo ativos judiciais. Toda análise é conduzida em bases metodológicas e probabilísticas.",
      },
    ],
    cta: { label: "Quero monetizar um ativo", to: "/contato" },
  },
  {
    slug: "ma-bancas-juridicas",
    eyebrow: "Legal Assets / M&A",
    name: "M&A de Bancas Jurídicas",
    title: "M&A especializado para escritórios de advocacia e carteiras jurídicas.",
    summary: "Aquisição, venda, associação, investimento e reorganização de bancas jurídicas.",
    blocks: [
      {
        kind: "text",
        body: [
          "A Assessmoney estrutura operações de aquisição, venda, associação, investimento e reorganização envolvendo bancas jurídicas. Além dos indicadores tradicionais de uma empresa, escritórios de advocacia possuem ativos e características próprias que precisam ser considerados em uma transação.",
        ],
      },
      {
        kind: "chips",
        title: "A análise envolve",
        items: [
          "Carteira de clientes",
          "Processos em andamento",
          "Honorários contratuais",
          "Honorários de êxito",
          "Honorários sucumbenciais",
          "Recorrência de receitas",
          "Potencial de realização dos créditos",
          "Dependência dos sócios",
          "Estrutura operacional",
          "Passivos",
          "Valuation da banca",
          "Due Diligence",
          "Modelagem da transação",
          "Estrutura de pagamento",
          "Entrada de investidores",
          "Sucessão societária",
        ],
      },
      {
        kind: "quote",
        text: "Mais do que avaliar uma banca jurídica, buscamos compreender o valor econômico de seu acervo, de suas receitas futuras e de sua capacidade de geração de resultados.",
      },
    ],
    cta: { label: "Quero avaliar uma banca jurídica", to: "/contato" },
  },
];

export const MA_PAGES: DetailPage[] = [
  {
    slug: "corporativo",
    eyebrow: "M&A",
    name: "M&A Corporativo",
    title: "Condução de transações societárias do mandato ao fechamento.",
    summary: "Buy-side, sell-side, preparação para venda e negociação.",
    blocks: [
      {
        kind: "text",
        body: [
          "Atuamos na preparação, originação e condução de transações societárias, do diagnóstico inicial à negociação final, com modelagem financeira e leitura de risco em cada etapa.",
        ],
      },
      {
        kind: "chips",
        title: "Serviços",
        items: [
          "Buy-side",
          "Sell-side",
          "Valuation",
          "Preparação da empresa para venda",
          "Busca de investidores",
          "Estruturação societária",
          "Análise econômico-financeira",
          "Modelagem de operações",
          "Due Diligence financeira",
          "Negociação",
          "Apoio no fechamento da transação",
        ],
      },
    ],
    cta: { label: "Quero vender ou adquirir uma empresa", to: "/contato" },
  },
  {
    slug: "valuation",
    eyebrow: "M&A",
    name: "Valuation",
    title: "Avaliação econômico-financeira com método e defensabilidade.",
    summary: "Modelagem e análise de valor para transações, sucessão e captação.",
    blocks: [
      {
        kind: "text",
        body: [
          "O valuation é construído a partir da realidade operacional da empresa: geração de caixa, estrutura de capital, passivos, dependência de pessoas-chave e perspectivas de resultado.",
          "O objetivo é produzir uma leitura defensável de valor, utilizável em negociação, entrada de investidores, reorganização societária ou sucessão.",
        ],
      },
      {
        kind: "chips",
        title: "Aplicações",
        items: [
          "Transações de M&A",
          "Entrada de sócios ou investidores",
          "Reorganização societária",
          "Sucessão familiar",
          "Captação de crédito e capital",
          "Decisões de desinvestimento",
        ],
      },
    ],
    cta: { label: "Quero avaliar minha empresa", to: "/contato" },
  },
  {
    slug: "juridico",
    eyebrow: "M&A",
    name: "M&A Jurídico",
    title: "Transações envolvendo bancas jurídicas e acervos processuais.",
    summary: "M&A aplicado a escritórios de advocacia, carteiras e direitos creditórios.",
    blocks: [
      {
        kind: "text",
        body: [
          "Operações envolvendo escritórios de advocacia demandam leitura combinada de receitas recorrentes, honorários futuros, acervo processual e dependência dos sócios.",
          "A Assessmoney estrutura essas transações unindo metodologia de M&A corporativo à análise de ativos judiciais.",
        ],
      },
      {
        kind: "chips",
        title: "Escopo",
        items: [
          "Valuation da banca",
          "Due Diligence",
          "Modelagem da transação",
          "Estrutura de pagamento",
          "Entrada de investidores",
          "Sucessão societária",
        ],
      },
    ],
    cta: { label: "Quero avaliar uma banca jurídica", to: "/contato" },
  },
];

export const VALORES = [
  { title: "Ética e transparência", text: "Relacionamentos construídos com confiança, responsabilidade e clareza." },
  { title: "Visão de longo prazo", text: "Buscamos relações sustentáveis e geração consistente de valor." },
  {
    title: "Inteligência financeira",
    text: "Cada operação é analisada individualmente, considerando risco, estrutura e objetivos.",
  },
  { title: "Inovação", text: "Buscamos alternativas além das soluções financeiras convencionais." },
  {
    title: "Confidencialidade",
    text: "Tratamento responsável e reservado das informações de clientes e parceiros.",
  },
  {
    title: "Alinhamento de interesses",
    text: "Estruturas desenvolvidas buscando equilíbrio entre todas as partes envolvidas.",
  },
];

export const TIMELINE = [
  {
    year: "2011",
    title: "Fundação",
    text: "Fundação da Assessmoney com foco em soluções financeiras e acesso ao mercado de crédito.",
  },
  {
    year: "Evolução",
    title: "Operações estruturadas",
    text: "Ampliação progressiva da atuação para operações estruturadas, crédito privado, financiamento empresarial e soluções patrimoniais.",
  },
  {
    year: "Especialização",
    title: "Ativos especiais",
    text: "Desenvolvimento de expertise em operações complexas, ativos especiais, créditos judiciais, Special Situations, Valuation e M&A.",
  },
  {
    year: "Hoje",
    title: "Assessmoney hoje",
    text: "Uma plataforma de originação e estruturação capaz de conectar necessidades de capital e oportunidades de investimento a diferentes participantes do mercado financeiro e de capitais.",
  },
];

export function findPage(list: DetailPage[], slug: string) {
  return list.find((p) => p.slug === slug);
}
