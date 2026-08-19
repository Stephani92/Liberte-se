export function Footer() {
  return (
    <footer className="border-t border-ochre/50 bg-ink text-cream">
      <div className="shell">
        <div className="grid gap-0 md:grid-cols-[minmax(0,1fr)_auto] md:gap-11">
          <div className="min-w-0">
            <img
              src={`${import.meta.env.BASE_URL}logos/Logotipo%20Liberte-se%20batom.png`}
              alt="Liberte-se"
              className="mx-0 my-[3px] block h-24 w-40 max-w-full bg-cream object-cover md:my-0 md:h-32 md:w-[220px]"
              loading="lazy"
            />
          </div>

          <div className="mt-px grid grid-cols-2 gap-9 border-t border-cream/20 pt-px sm:gap-14 md:mt-0 md:border-t-0 md:pt-6">
            <nav aria-label="Navegação do rodapé" className="space-y-3">
              <p className="eyebrow text-ochre">Navegar</p>
              <a
                href={`${import.meta.env.BASE_URL}#o-liberte-se`}
                className="block text-sm text-cream/80 transition-colors hover:text-rose"
              >
                O Liberte-se
              </a>
              <a
                href={`${import.meta.env.BASE_URL}#experiencias`}
                className="block text-sm text-cream/80 transition-colors hover:text-rose"
              >
                Experiências
              </a>
              <a
                href={`${import.meta.env.BASE_URL}marcas`}
                className="block text-sm text-cream/80 transition-colors hover:text-rose"
              >
                Para marcas
              </a>
            </nav>
            <div className="space-y-3">
              <p className="eyebrow text-ochre">Contato</p>
              <a
                href="https://instagram.com/liberteseclube"
                className="group flex items-center gap-2 text-sm text-cream/80 transition-colors hover:text-rose"
                rel="noreferrer noopener"
                target="_blank"
              >
                @liberteseclube
                <span
                  className="text-ochre transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  aria-hidden="true"
                >
                  ↗
                </span>
              </a>
            </div>
          </div>
        </div>

        <p className="eyebrow mb-0 mt-5 pb-0 leading-none text-cream/65">
          © {new Date().getFullYear()} Liberte-se — O clube para mulheres que
          decidiram ocupar o próprio lugar no mundo.
        </p>
      </div>
    </footer>
  );
}
