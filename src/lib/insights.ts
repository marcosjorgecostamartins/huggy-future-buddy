export type Post = {
  slug: string;
  category: "Crédito" | "Legal Assets" | "M&A" | "Investimentos" | "Mercado";
  title: string;
  excerpt: string;
  date: string;
  readingTime: string;
  body: string[];
};

export const CATEGORIES = ["Crédito", "Legal Assets", "M&A", "Investimentos", "Mercado"] as const;

export const POSTS: Post[] = [
  {
    slug: "estruturar-operacao-home-equity",
    category: "Crédito",
    title: "O que considerar antes de estruturar uma operação de Home Equity",
    excerpt:
      "Finalidade dos recursos, qualidade da garantia e capacidade de pagamento definem mais o custo da operação do que a taxa anunciada.",
    date: "2026-07-18",
    readingTime: "6 min",
    body: [
      "Operações com garantia imobiliária costumam ser apresentadas ao mercado apenas pela taxa. Na prática, o desenho da operação — prazo, carência, sistema de amortização, LTV e liquidez da garantia — tem impacto econômico maior do que a diferença de alguns pontos-base.",
      "A primeira pergunta não é quanto custa, e sim para que serve o recurso. Capital de giro recorrente, aquisição de ativo produtivo e consolidação de dívidas exigem estruturas distintas de prazo e amortização.",
      "O segundo ponto é a qualidade da garantia: matrícula, ocupação, liquidez regional e existência de ônus determinam o apetite de cada fonte de funding e, consequentemente, a viabilidade da operação.",
      "Por fim, a capacidade de pagamento precisa ser lida a partir do fluxo de caixa real, não apenas do faturamento declarado. É esse exercício que separa uma operação sustentável de uma reestruturação futura.",
    ],
  },
  {
    slug: "avaliar-potencial-credito-trabalhista",
    category: "Legal Assets",
    title: "Como avaliar o potencial econômico de um crédito trabalhista",
    excerpt:
      "Fase processual, solvência do devedor e qualidade documental compõem a leitura de recuperabilidade do ativo.",
    date: "2026-06-30",
    readingTime: "7 min",
    body: [
      "Um crédito trabalhista é, do ponto de vista financeiro, um fluxo futuro incerto. A avaliação começa pela fase processual: conhecimento, execução ou crédito já reconhecido produzem perfis de risco completamente diferentes.",
      "A solvência do devedor é o segundo eixo. Grupo econômico, existência de bens, histórico de cumprimento e possibilidade de desconsideração da personalidade jurídica alteram materialmente a probabilidade de realização.",
      "A qualidade documental determina a velocidade da operação. Processos com documentação incompleta tendem a exigir descontos maiores ou estruturas com coobrigação.",
      "Nenhuma metodologia elimina a incerteza. O que ela permite é precificar a incerteza de forma consistente e comparável entre ativos.",
    ],
  },
  {
    slug: "ma-escritorios-advocacia-por-onde-comecar",
    category: "M&A",
    title: "M&A de escritórios de advocacia: por onde começar",
    excerpt:
      "Antes do valuation, é preciso separar o que é receita da banca e o que é receita do sócio.",
    date: "2026-06-12",
    readingTime: "8 min",
    body: [
      "Bancas jurídicas têm uma característica que distorce qualquer múltiplo aplicado sem ajuste: parte relevante da receita é pessoal, vinculada a um sócio específico, e não à estrutura.",
      "O primeiro trabalho de preparação é segmentar carteira recorrente, honorários contratuais, honorários de êxito e sucumbência, identificando o que sobrevive à saída de uma pessoa-chave.",
      "Em seguida vem a leitura do acervo processual como ativo: volume, tese, fase e expectativa de realização. É aqui que o M&A jurídico se aproxima da análise de Legal Assets.",
      "A modelagem da transação — earn-out, pagamento escalonado, retenção de sócios — costuma resolver o que o valuation isolado não consegue: o alinhamento de interesses no pós-fechamento.",
    ],
  },
  {
    slug: "credito-privado-veiculo-dedicado",
    category: "Investimentos",
    title: "Quando faz sentido estruturar um veículo dedicado de crédito privado",
    excerpt:
      "Autonomia de política, governança e segregação operacional pesam mais do que o retorno nominal esperado.",
    date: "2026-05-27",
    readingTime: "6 min",
    body: [
      "Empresários e Family Offices que já concedem crédito de forma informal costumam descobrir tarde o custo de não ter estrutura: ausência de garantias formalizadas, dificuldade de execução e exposição tributária.",
      "Um veículo dedicado organiza política de investimento, limites por tomador, formalização de garantias e governança de aprovação.",
      "A decisão não é apenas financeira. Envolve o volume esperado da carteira, a recorrência das operações e a disposição de manter processo e controle ao longo do tempo.",
      "Toda estrutura deve ser desenvolvida de acordo com a legislação aplicável, o veículo utilizado e os parceiros autorizados envolvidos.",
    ],
  },
  {
    slug: "distressed-assets-leitura-de-ciclo",
    category: "Mercado",
    title: "Distressed assets: o que muda na leitura de ciclo",
    excerpt:
      "Em ciclos de crédito mais restritivos, a assimetria migra do preço do ativo para a estrutura da operação.",
    date: "2026-05-09",
    readingTime: "5 min",
    body: [
      "Quando o crédito bancário encurta, cresce a oferta de ativos e créditos em situação especial. O desconto, isoladamente, não é tese de investimento.",
      "A assimetria relevante está na estrutura: prioridade de garantia, controle do fluxo, capacidade de execução e horizonte de saída.",
      "Operações bem estruturadas em ciclos restritivos costumam apresentar melhor relação risco-retorno do que operações oportunísticas em ciclos abundantes.",
    ],
  },
  {
    slug: "consorcio-como-instrumento-corporativo",
    category: "Crédito",
    title: "Consórcio como instrumento corporativo de aquisição de ativos",
    excerpt:
      "Usado com estrutura e disciplina de caixa, o consórcio deixa de ser produto de varejo e vira ferramenta de planejamento patrimonial.",
    date: "2026-04-22",
    readingTime: "5 min",
    body: [
      "Empresas que precisam renovar frota, máquinas ou expandir patrimônio imobiliário frequentemente tratam consórcio e financiamento como equivalentes. Não são.",
      "O ponto econômico do consórcio está na ausência de juros e no desenho do lance. O desafio é de liquidez: imobilizar capital no lance pode competir com o capital de giro.",
      "Estruturas que combinam consórcio e capital de investidores para o lance buscam endereçar exatamente esse ponto, sempre respeitando as regras do grupo de consórcio.",
      "Não há promessa ou garantia de contemplação em qualquer estrutura envolvendo consórcio.",
    ],
  },
];

export function formatDate(iso: string) {
  return new Date(`${iso}T12:00:00`).toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}
