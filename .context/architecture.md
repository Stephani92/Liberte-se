# Arquitetura

## Stack
- React
- TypeScript
- Tailwind CSS
- CSS variables e tokens de design
- Vite para desenvolvimento leve e build rápida

## Estrutura de pastas
- `src/components/` para componentes reutilizáveis e seções
- `src/design-system/` para tokens, temas e utilitários
- `src/data/` para conteúdo, cópia e configurações de seções
- `src/pages/` para páginas principais e futuras rotas de plataforma
- `src/hooks/` para lógica de UI compartilhada
- `src/styles/` para estilos globais e tipografia

## Rotas previstas
- `/` — homepage editorial do Liberte-se
- `/marcas` — página institucional para marcas e parcerias
- futuras: `/login`, `/cadastro`, `/onboarding`, `/inicio`, `/minha-jornada`, `/comunidade`, `/experiencias`, `/conteudos`, `/especialistas`, `/recomendacoes`, `/perfil`, `/beneficios`

## Regras de implementação
- usar layout editorial com grid 12 colunas no desktop e 4 colunas no mobile
- tipografia responsiva com Bodoni Moda nos títulos e Inter em texto corrido
- criar marquee contínuo, scroll storytelling e seções com transições discretas
- componentes leves, sem bibliotecas visuais desnecessárias
- imagens responsivas com lazy loading e formatos modernos quando possível
- HTML semântico, H1 único por página e estrutura de headings organizada
- acessibilidade com focus states, alt text e prefers-reduced-motion
