import { createFileRoute, notFound } from "@tanstack/react-router";
import { DetailPageView } from "@/components/site/DetailPageView";
import { LEGAL_ASSETS } from "@/lib/content";

export const Route = createFileRoute("/legal-assets/$slug")({
  loader: ({ params }) => {
    const page = LEGAL_ASSETS.find((s) => s.slug === params.slug);
    if (!page) throw notFound();
    return { page };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) {
      return { meta: [{ title: "Página não encontrada — Assessmoney" }, { name: "robots", content: "noindex" }] };
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
        { property: "og:url", content: `/legal-assets/${params.slug}` },
      ],
      links: [{ rel: "canonical", href: `/legal-assets/${params.slug}` }],
    };
  },
  component: LegalAssetDetail,
});

function LegalAssetDetail() {
  const { page } = Route.useLoaderData();
  return (
    <DetailPageView
      page={page}
      siblings={LEGAL_ASSETS.filter((s) => s.slug !== page.slug)}
      basePath="/legal-assets"
      siblingsLabel="Outros ativos"
    />
  );
}
