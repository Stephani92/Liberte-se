import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
} from "@tanstack/react-router";

import { Header } from "../components/liberte/Header";
import { Footer } from "../components/liberte/Footer";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-6">
      <div className="max-w-md text-center">
        <p className="script text-[2.5rem] text-wine">quase</p>
        <h1 className="section-type mt-2 text-foreground">Esta página não existe</h1>
        <p className="mt-4 text-sm text-muted-foreground">
          O endereço que você buscou saiu do ar ou nunca esteve aqui.
        </p>
        <div className="mt-8">
          <Link to="/" className="btn-base btn-wine">
            Voltar ao início
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-6">
      <div className="max-w-md text-center">
        <h1 className="statement-type text-foreground">Esta página não carregou</h1>
        <p className="mt-3 text-sm text-muted-foreground">
          Algo falhou do nosso lado. Tente novamente ou volte ao início.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="btn-base btn-wine"
          >
            Tentar de novo
          </button>
          <a href={import.meta.env.BASE_URL} className="btn-base btn-outline-ink">
            Início
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "author", content: "Liberte-se" },
      { property: "og:site_name", content: "Liberte-se" },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "pt_BR" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "theme-color", content: "#05100C" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Bodoni+Moda:ital,opsz,wght@0,6..96,400;0,6..96,500;1,6..96,400&family=Parisienne&family=Inter:wght@300;400;500;600&display=swap",
      },
      {
        rel: "icon",
        href: `${import.meta.env.BASE_URL}logos/Logo%20Liberte-se%20batom%202.png`,
        type: "image/png",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Liberte-se",
          slogan: "Ninguém cresce sozinha",
          description:
            "O clube para mulheres que decidiram ocupar o próprio lugar no mundo: conexão, conteúdo e experiências presenciais.",
          areaServed: "BR",
        }),
      },
    ],
  }),
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <HeadContent />
      <Header />
      <main>
        {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
        <Outlet />
      </main>
      <Footer />
    </QueryClientProvider>
  );
}
