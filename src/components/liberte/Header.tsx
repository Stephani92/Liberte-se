import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

type NavItem = { label: string; href: string };

const nav: NavItem[] = [
  { label: "O Liberte-se", href: `${import.meta.env.BASE_URL}#o-liberte-se` },
  { label: "Experiências", href: `${import.meta.env.BASE_URL}#experiencias` },
  { label: "Para marcas", href: `${import.meta.env.BASE_URL}marcas` },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({
    select: (state) => state.location.pathname,
  });
  /* O hero oficial usa fundo creme; o header nasce transparente com conteúdo escuro. */

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-cream/10 bg-ink text-cream">
      <div className="shell grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 py-2 md:py-3">
        <Link
          to="/"
          aria-label="Liberte-se — página inicial"
          className="flex min-w-0 items-center"
          onClick={() => setOpen(false)}
        >
          <img
            src={`${import.meta.env.BASE_URL}logos/Logo%20Liberte-se%20batom%202.png`}
            alt="Liberte-se"
            className="h-14 w-auto shrink-0 object-contain md:h-16"
            loading="eager"
          />
        </Link>

        <nav
          className="hidden items-center gap-9 md:flex"
          aria-label="Navegação principal"
        >
          {nav.map((item) => (
            <a
              key={item.label}
              href={item.href}
              aria-current={
                pathname.endsWith("/marcas") && item.href.endsWith("marcas")
                  ? "page"
                  : undefined
              }
              className="eyebrow border-b border-transparent pb-1 text-cream/75 transition-colors hover:text-rose aria-[current=page]:border-ochre aria-[current=page]:text-cream"
            >
              {item.label}
            </a>
          ))}
          <a
            href={`${import.meta.env.BASE_URL}#agenda`}
            className="btn-base btn-gold"
          >
            Próxima viagem
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="menu-mobile"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          className="flex h-11 w-11 items-center justify-center md:hidden"
        >
          <span className="relative block h-3 w-6">
            <span
              className={cn(
                "absolute left-0 h-px w-6 transition-transform duration-300",
                "bg-cream",
                open ? "top-1.5 rotate-45" : "top-0",
              )}
            />
            <span
              className={cn(
                "absolute left-0 h-px w-6 transition-transform duration-300",
                "bg-cream",
                open ? "top-1.5 -rotate-45" : "top-3",
              )}
            />
          </span>
        </button>
      </div>

      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </header>
  );
}

function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <div
      id="menu-mobile"
      hidden={!open}
      className="fixed inset-0 top-[72px] z-40 flex flex-col justify-between bg-ink px-6 pb-10 pt-8 text-cream md:hidden"
    >
      <nav className="flex flex-col gap-6" aria-label="Navegação mobile">
        {nav.map((item) => (
          <a
            key={item.label}
            href={item.href}
            onClick={onClose}
            className="display text-[2.5rem] text-cream transition-colors hover:text-rose"
          >
            {item.label}
          </a>
        ))}
      </nav>
      <div className="space-y-6">
        <p className="script text-[1.6rem] text-rose">ninguém cresce sozinha</p>
        <a
          href={`${import.meta.env.BASE_URL}#agenda`}
          onClick={onClose}
          className="btn-base btn-gold w-full"
        >
          Próxima viagem
        </a>
      </div>
    </div>
  );
}
