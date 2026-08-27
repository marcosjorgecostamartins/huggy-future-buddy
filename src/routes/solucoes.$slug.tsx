import { createFileRoute, notFound } from "@tanstack/react-router";
import { DetailPageView } from "@/components/site/DetailPageView";
import { SOLUTIONS } from "@/lib/content";

export const Route = createFileRoute("/solucoes/$slug")({
  loader: ({ params }) => {
    const page = SOLUTIONS.find((s) => s.slug === params.slug);
    if (!page) throw notFound();
    return { page };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) {
      return { meta: [{ title: "Solução não encontrada — Assessmoney" }, { name: "robots", content: "noindex" }] };
    }
    const { page } = loaderData;
    const title = `${page.name} — Assessmoney`;
    return {
      meta: [
        { title },
        { name: "description", content: page.summary },
        { property: "og:title", content: title },
        { property: "og:description", content: page.summary },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/solucoes/${params.slug}` },
      ],
      links: [{ rel: "canonical", href: `/solucoes/${params.slug}` }],
    };
  },
  component: SolucaoDetail,
});

function SolucaoDetail() {
  const { page } = Route.useLoaderData();
  return (
    <DetailPageView
      page={page}
      siblings={SOLUTIONS.filter((s) => s.slug !== page.slug)}
      basePath="/solucoes"
      siblingsLabel="Outras soluções"
    />
  );
}
