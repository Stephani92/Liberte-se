# Decisões de implementação — Homepage MVP

- Identidade visual: cores oficiais aplicadas como tokens CSS em `src/styles/globals.css`.
- Tipografia: `Bodoni Moda` para headlines (`.font-display`) e `Parisienne` para detalhes (`.font-serif`).
- Layout: foco editorial, grid fluida, responsividade 320–1920px com containers e espaçamentos via Tailwind.
- Acessibilidade: respeitar `prefers-reduced-motion`, contraste de cores e tamanho legível.
- Componentes: separados por responsabilidade (Header, Hero, Marquee, seções, Footer).
- Conteúdo: textos editorialmente neutros e marcadores de espaço para conteúdo definitivo (não inventamos métricas ou depoimentos).

- Nota: a pasta `Liberte-se Experience` encontrada no repositório é apenas um exemplo/apoio; o MVP da homepage está implementado em `src/` na raiz do projeto.
