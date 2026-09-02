import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  useRouterState,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { AnimatePresence } from "motion/react";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import logoWhite from "@/assets/logo-white.png.asset.json";
import { BrandLoader } from "@/components/site/BrandLoader";
import { Cursor } from "@/components/site/Cursor";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Toaster } from "@/components/ui/sonner";
import { LOCALES, LocaleProvider } from "@/lib/i18n";
import { getStoredLocale } from "@/lib/locale.functions";

function NotFoundComponent() {
  return (
    <div className="blueprint flex min-h-screen items-center justify-center bg-graphite px-6 text-cream">
      <div className="max-w-lg text-center">
        <img
          src={logoWhite.url}
          alt="Assessmoney"
          width={160}
          height={48}
          className="mx-auto h-12 w-auto"
        />
        <p className="mt-10 font-mono text-[11px] uppercase tracking-[0.24em] text-emerald-action">
          Erro 404
        </p>
        <h1 className="mt-4 font-display text-4xl text-cream">Página não encontrada</h1>
        <p className="mt-4 text-[15px] leading-relaxed text-institutional-soft">
          O endereço acessado não existe ou foi movido. Retorne à página inicial da Assessmoney ou
          fale com um de nossos especialistas.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Link
            to="/"
            className="bg-emerald-action px-7 py-3.5 text-[11px] uppercase tracking-[0.18em] text-cream transition-colors hover:bg-forest"
          >
            Voltar ao início
          </Link>
          <Link
            to="/contato"
            className="border border-cream/25 px-7 py-3.5 text-[11px] uppercase tracking-[0.18em] text-cream transition-colors hover:border-emerald-action hover:text-emerald-action"
          >
            Falar com especialista
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="blueprint flex min-h-screen items-center justify-center bg-graphite px-6 text-cream">
      <div className="max-w-lg text-center">
        <img
          src={logoWhite.url}
          alt="Assessmoney"
          width={160}
          height={48}
          className="mx-auto h-12 w-auto"
        />
        <h1 className="mt-10 font-display text-3xl text-cream">Não foi possível carregar esta página</h1>
        <p className="mt-4 text-[15px] leading-relaxed text-institutional-soft">
          Ocorreu uma falha inesperada. Tente novamente ou retorne à página inicial da Assessmoney.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="bg-emerald-action px-7 py-3.5 text-[11px] uppercase tracking-[0.18em] text-cream transition-colors hover:bg-forest"
          >
            Tentar novamente
          </button>
          <a
            href="/"
            className="border border-cream/25 px-7 py-3.5 text-[11px] uppercase tracking-[0.18em] text-cream transition-colors hover:border-emerald-action hover:text-emerald-action"
          >
            Voltar ao início
          </a>
        </div>
      </div>
    </div>
  );
}


export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  loader: async () => ({ locale: await getStoredLocale() }),
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Assessmoney — Estruturação financeira e ativos especiais" },
      {
        name: "description",
        content:
          "Boutique brasileira de estruturação financeira: crédito estruturado, Legal Assets, Special Situations e M&A desde 2011.",
      },
      { name: "author", content: "Assessmoney" },
      { property: "og:site_name", content: "Assessmoney" },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "pt_BR" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,300;9..144,400;9..144,500&family=Inter:wght@300;400;500;600&family=JetBrains+Mono:wght@300;400;500&display=swap",
      },
      { rel: "icon", type: "image/png", href: "/favicon.png" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FinancialService",
          name: "Assessmoney",
          foundingDate: "2011",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Av. Paulista, 2300 — Andar Pilotis",
            addressLocality: "São Paulo",
            addressRegion: "SP",
            addressCountry: "BR",
          },
          telephone: "+55-11-2847-4930",
          email: "contato@assessmoney.com.br",
          parentOrganization: { "@type": "Organization", name: "Ostun", url: "https://ostungroup.com" },
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  const locale = Route.useLoaderData({ select: (d) => d?.locale ?? "pt" });
  const lang = LOCALES.find((l) => l.code === locale)?.htmlLang ?? "pt-BR";

  return (
    <html lang={lang}>
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  const { locale } = Route.useLoaderData();
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <QueryClientProvider client={queryClient}>
      <LocaleProvider initialLocale={locale}>
        <BrandLoader />
        <Cursor />
        <Header />
        <AnimatePresence mode="wait">
          <div key={pathname}>
            {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
            <Outlet />
          </div>
        </AnimatePresence>
        <Footer />
        <WhatsAppFab />
        <Toaster position="bottom-right" />

      </LocaleProvider>
    </QueryClientProvider>
  );
}
