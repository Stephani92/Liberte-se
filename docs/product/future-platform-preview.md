# Código arquivado — FuturePlatformPreview

Componente retirado da página inicial e preservado para uma fase futura da plataforma. Para restaurá-lo, mover a função para um arquivo em `src/components/liberte/`, ajustar o import de `ScrollReveal` e renderizar `<FuturePlatformPreview />` na rota desejada.

```tsx
import { ScrollReveal } from "@/components/liberte/ScrollReveal";

export function FuturePlatformPreview() {
  const recommendations = [
    { label: "Próximo passo", value: "Defina sua prioridade da semana" },
    { label: "Conexão", value: "Encontre uma sócia para trocar" },
    { label: "Experiência", value: "Veja o próximo encontro" },
  ];

  return (
    <section className="overflow-hidden bg-cream py-24 text-foreground md:py-36">
      <div className="shell">
        <div className="grid items-end gap-10 md:grid-cols-[1fr_0.6fr] md:gap-20">
          <ScrollReveal>
            <p className="eyebrow text-wine">Em construção</p>
            <h2 className="section-type mt-6 max-w-4xl">
              Uma plataforma que mostra caminhos sem decidir por você.
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <p className="max-w-md text-base leading-relaxed text-foreground/75 md:text-lg">
              Jornada, conteúdo, comunidade e experiências reunidos de acordo com o seu momento.
            </p>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={160} className="mt-14 md:mt-20">
          <div className="relative mx-auto max-w-6xl border border-foreground/15 bg-ink p-3 shadow-[0_2rem_5rem_rgba(5,16,12,0.16)] sm:p-5 md:p-8">
            <div className="flex items-center justify-between border-b border-cream/15 pb-3 text-cream sm:pb-5">
              <p className="eyebrow text-cream/70">Minha jornada</p>
              <span
                className="h-2.5 w-2.5 rounded-full bg-ochre"
                aria-hidden="true"
              />
            </div>

            <div className="grid gap-3 pt-3 sm:gap-5 sm:pt-5 lg:grid-cols-[0.68fr_1.32fr]">
              <div className="bg-forest p-5 text-cream sm:p-7 md:p-9">
                <p className="eyebrow text-cream/70">
                  Onde você quer crescer hoje?
                </p>
                <p className="display mt-6 text-[clamp(2rem,4vw,4rem)] leading-[0.95]">
                  Seu momento define o próximo caminho.
                </p>
                <div className="mt-10 h-1.5 overflow-hidden bg-cream/15">
                  <div className="h-full w-2/3 bg-ochre" />
                </div>
                <p className="mt-3 text-sm text-cream/70">
                  Jornada em movimento
                </p>
              </div>

              <div className="grid gap-px bg-cream/20">
                {recommendations.map((item, index) => (
                  <article
                    key={item.label}
                    className="grid gap-4 bg-cream p-5 text-foreground sm:grid-cols-[auto_1fr_auto] sm:items-center sm:p-7"
                  >
                    <span className="eyebrow text-wine">0{index + 1}</span>
                    <div>
                      <p className="eyebrow text-foreground/65">
                        {item.label}
                      </p>
                      <h3 className="display mt-2 text-xl leading-tight sm:text-2xl">
                        {item.value}
                      </h3>
                    </div>
                    <span className="text-ochre" aria-hidden="true">
                      ↗
                    </span>
                  </article>
                ))}
              </div>
            </div>

            <div className="pointer-events-none absolute -bottom-24 right-[-8%] hidden h-48 w-64 border border-ochre/50 bg-wine/90 lg:block" />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
```
