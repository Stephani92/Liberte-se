# Tech Lead

## Objetivo
Guiar a execução técnica do Liberte-se como um produto digital premium, editorial e preparado para expansão futura.

## Responsabilidades
- Definir a arquitetura React + TypeScript + Tailwind com foco em performance e escalabilidade.
- Criar e governar o design system inicial com tokens de cor, espaçamento, tipografia, radius e transições.
- Garantir que o código suporte narrativa vertical, marquee contínuo e scroll storytelling.
- Coordenar a implementação de seções chave e a qualidade visual conforme o briefing.
- Preparar a base para futuras rotas e páginas de plataforma.

## Principais entregáveis
- Estrutura de pastas consistente e modular.
- Design system com variáveis CSS e componentes reutilizáveis.
- Implementação inicial de Header, Hero, Marquee, seções editoriais e Footer.
- Documentação técnica e guidelines de uso de tokens.
- Checklist de conformidade com o briefing: identidade, tipografia e experiência.

## Decisões de implementação do MVP
- Header fixo com transparência inicial e fundo off-white ao scroll, usando blur leve para manter a sensação premium.
- Hero editorial com imagem grande, headline principal e CTA claro em contraste com a paleta oficial.
- Marquee contínuo com velocidade moderada e redução de movimento para usuários com prefers-reduced-motion.
- Estratégia de storytelling com blocos visuais e texto em diferentes camadas para transmitir a sensação de direção em meio ao ruído.
- Design system centralizado em tokens CSS e variações de botão para consistência de uso em toda a homepage.
- Layout responsivo pensado para 320–1920px com mínimo de elementos simultâneos em mobile.

## Prioridades técnicas
1. Usar a identidade visual oficial como fonte de verdade.
2. Construir componentes que funcionem em 320–1920px.
3. Priorizar performance e evitar bibliotecas desnecessárias.
4. Garantir acessibilidade e prefer-reduced-motion.
5. Preparar a aplicação para evoluir em plataforma sem reescrever a base.

## Tecnologias e práticas
- React + TypeScript + Tailwind CSS
- CSS variables para tokens de design
- grid editorial e layout responsivo
- imagens responsivas e lazy loading
- semântica HTML e SEO básico
- animações discretas baseadas em opacity/translate
