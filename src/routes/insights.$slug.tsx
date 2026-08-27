import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { CTASection, PageHero, PageTransition, Section } from "@/components/site/PageLayout";
import { Reveal } from "@/components/site/Reveal";
import { Eyebrow } from "@/components/site/ui";
import { POSTS } from "@/lib/insights";

export const Route = createFileRoute("/insights/$slug")({
  loader: ({ params }) => {
    const post = POSTS.find((p) => p.slug === params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) {
      return { meta: [{ title: "Conteúdo não encontrado — Assessmoney" }, { name: "robots", content: "noindex" }] };
    }
    const { post } = loaderData;
    const title = `${post.title} — Assessmoney`;
    return {
      meta: [
        { title },
        { name: "description", content: post.excerpt },
        { property: "og:title", content: title },
        { property: "og:description", content: post.excerpt },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/insights/${params.slug}` },
      ],
      links: [{ rel: "canonical", href: `/insights/${params.slug}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: post.title,
            description: post.excerpt,
            datePublished: post.date,
            articleSection: post.category,
            author: { "@type": "Organization", name: "Assessmoney" },
            publisher: { "@type": "Organization", name: "Assessmoney" },
          }),
        },
      ],
    };
  },
  component: InsightPost,
});

const dateFmt = new Intl.DateTimeFormat("pt-BR", { day: "2-digit", month: "long", year: "numeric" });

function InsightPost() {
  const { post } = Route.useLoaderData();
  const related = POSTS.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <PageTransition>
      <PageHero eyebrow={`Insights / ${post.category}`} title={post.title} subtitle={post.excerpt} />

      <Section>
        <div className="grid gap-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.6fr)]">
          <Reveal className="lg:sticky lg:top-32 lg:self-start">
            <dl className="space-y-6 font-mono text-[11px] uppercase tabular tracking-[0.16em] text-muted-foreground">
              <div>
                <dt className="text-emerald-action">Publicado</dt>
                <dd className="mt-2">
                  <time dateTime={post.date}>{dateFmt.format(new Date(post.date))}</time>
                </dd>
              </div>
              <div>
                <dt className="text-emerald-action">Leitura</dt>
                <dd className="mt-2">{post.readingTime}</dd>
              </div>
              <div>
                <dt className="text-emerald-action">Categoria</dt>
                <dd className="mt-2">{post.category}</dd>
              </div>
            </dl>
          </Reveal>

          <article className="space-y-8">
            {post.body.map((p, i) => (
              <Reveal key={i} index={Math.min(i, 3)}>
                <p className="text-lg leading-[1.75] text-graphite/85">{p}</p>
              </Reveal>
            ))}
          </article>
        </div>
      </Section>

      <Section tone="light">
        <Eyebrow>Continue lendo</Eyebrow>
        <div className="mt-12 grid gap-px border border-border bg-border md:grid-cols-3">
          {related.map((p) => (
            <Link
              key={p.slug}
              to="/insights/$slug"
              params={{ slug: p.slug }}
              className="group flex flex-col gap-6 bg-cream p-8 transition-colors hover:bg-forest-deep"
            >
              <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-emerald-action">
                {p.category}
              </span>
              <h2 className="text-xl leading-snug transition-colors group-hover:text-cream">{p.title}</h2>
            </Link>
          ))}
        </div>
      </Section>

      <CTASection title="Quer discutir um caso concreto?" label="Fale com um especialista" to="/contato" />
    </PageTransition>
  );
}
