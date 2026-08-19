import { ScrollReveal } from "./ScrollReveal";

export function SpoilerSection() {
  return (
    <section className="border-2 border-ochre bg-terracotta-deep px-4 py-10 text-cream md:px-7 md:py-16">
      <div className="mx-auto max-w-[88rem] border border-ochre px-6 py-14 sm:px-10 md:px-[7.5%] md:py-16 lg:py-20">
        <div className="grid items-center gap-12 md:grid-cols-[1fr_0.78fr] md:gap-16 lg:gap-24">
          <ScrollReveal className="min-w-0">
            <p className="eyebrow text-ochre">Spoiler</p>
            <h2 className="display mt-5 max-w-2xl text-[clamp(2.75rem,5vw,5rem)] leading-[0.9] tracking-[-0.04em]">
              Muitas vezes, não falta sonho.
            </h2>
            <div className="mt-7 max-w-xl space-y-4 text-sm leading-relaxed text-cream/90 md:text-base">
              <p>Falta clareza, constância e movimento.</p>
              <p>
                Falta alguém que lembre daquela vontade que você deixou para depois.
              </p>
              <p>Que pergunte:</p>
            </div>
            <p className="display mt-5 max-w-2xl text-[clamp(2.25rem,4vw,4rem)] leading-[0.95] text-ochre">
              “E aí? Vamos fazer acontecer?”
            </p>
            <p className="mt-7 max-w-lg text-sm leading-relaxed text-cream/90 md:text-base">
              Em breve, o Liberte-se estará com você todos os dias.
            </p>
            <a
              href="https://instagram.com/liberteseclube"
              target="_blank"
              rel="noreferrer noopener"
              className="btn-base btn-gold mt-7"
            >
              Entre para a lista de espera
            </a>
          </ScrollReveal>

          <ScrollReveal delay={120} className="min-w-0">
            <figure className="mx-auto aspect-[3/4] w-full max-w-[22rem] overflow-hidden bg-sand md:rotate-[2deg]">
              <img
                src={`${import.meta.env.BASE_URL}media/Liberte-se0288.jpg`}
                alt="Duas mulheres do Liberte-se reunidas à mesa com um notebook"
                loading="lazy"
                width="1152"
                height="2048"
                className="h-full w-full object-cover object-center"
              />
            </figure>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
