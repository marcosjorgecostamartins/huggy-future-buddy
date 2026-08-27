import { createFileRoute, notFound } from "@tanstack/react-router";
import { DetailPageView } from "@/components/site/DetailPageView";
import { MA_PAGES } from "@/lib/content";

export const Route = createFileRoute("/ma/$slug")({
  loader: ({ params }) => {
    const page = MA_PAGES.find((s) => s.slug === params.slug);
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
        { property: "og:url", content: `/ma/${params.slug}` },
      ],
      links: [{ rel: "canonical", href: `/ma/${params.slug}` }],
    };
  },
  component: MaDetail,
});

function MaDetail() {
  const { page } = Route.useLoaderData();
  return (
    <DetailPageView
      page={page}
      siblings={MA_PAGES.filter((s) => s.slug !== page.slug)}
      basePath="/ma"
      siblingsLabel="Outras frentes"
    />
  );
}
