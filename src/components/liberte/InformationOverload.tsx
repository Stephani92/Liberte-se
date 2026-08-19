import { ScrollReveal } from "./ScrollReveal";

const noise = [
  "Cursos",
  "Reels",
  "Gurus",
  "Estratégias",
  "Ferramentas",
  "Tendências",
];

export function InformationOverload() {
  return (
    <section
      aria-labelledby="direcao-title"
      className="bg-cream py-20 text-foreground md:py-32"
    >
      <div className="shell">
        <ScrollReveal>
          <p className="eyebrow text-foreground/65">Excesso de informação</p>
          <div className="mt-8 flex max-w-5xl flex-wrap gap-2.5 sm:gap-3">
            {noise.map((word, index) => (
              <span
                key={word}
                className="border border-foreground/20 px-3 py-2 text-xs uppercase tracking-[0.16em] text-foreground/70 sm:px-4 sm:text-sm"
                style={{
                  transform: `translateY(${index % 2 === 0 ? "0" : "0.45rem"})`,
                }}
              >
                {word}
              </span>
            ))}
          </div>
        </ScrollReveal>

        <div className="my-14 h-px bg-foreground/15 md:my-20" />

        <div className="grid items-end gap-10 md:grid-cols-[1.25fr_0.75fr] md:gap-16">
          <ScrollReveal>
            <h2 id="direcao-title" className="section-type max-w-4xl">
              Você não precisa de mais conteúdo.
              <span className="mt-2 block text-wine">
                Você precisa de direção.
              </span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={120}>
            <p className="max-w-md text-base leading-relaxed text-foreground/75 md:text-lg">
              O Liberte-se transforma excesso em próximos passos, encontros e
              conexões que fazem sentido para o momento do seu negócio.
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
