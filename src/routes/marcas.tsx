import { createFileRoute } from "@tanstack/react-router";

import { EditorialImage } from "@/components/liberte/EditorialImage";
import { Marquee } from "@/components/liberte/Marquee";
import { ScrollReveal } from "@/components/liberte/ScrollReveal";
import { SectionTitle } from "@/components/liberte/SectionTitle";
import { logos, photos } from "@/lib/brand-assets";

const TITLE = "Liberte-se para marcas — Parcerias com um clube de mulheres em movimento";
const DESCRIPTION =
  "Conecte sua marca a mulheres que decidem: patrocínios, experiências presenciais e conteúdo com curadoria dentro do ecossistema Liberte-se.";

export const Route = createFileRoute("/marcas")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: "/marcas" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: "/marcas" }],
  }),
  component: ParaMarcasPage,
});

const formatos = [
  {
    numero: "01",
    titulo: "Patrocínio de experiências",
    texto:
      "Sua marca presente nos encontros presenciais: ambientação, ativação sensorial e contato direto com as convidadas.",
  },
  {
    numero: "02",
    titulo: "Conteúdo em co-criação",
    texto:
      "Séries, painéis e materiais construídos com a curadoria do clube — narrativa da marca dentro de um contexto de confiança.",
  },
  {
    numero: "03",
    titulo: "Benefícios para o clube",
    texto:
      "Ofertas e experiências exclusivas para as integrantes, gerando recorrência e prova social espontânea.",
  },
  {
    numero: "04",
    titulo: "Projetos sob medida",
    texto:
      "Lançamentos, pesquisas e conselhos consultivos com mulheres que representam o seu público real.",
  },
];

function ParaMarcasPage() {
  return (
    <>
      <Hero />
      <Marquee
        items={["presença", "reputação", "afeto", "pertencimento", "resultado"]}
        duration={38}
        className="border-y border-cream/15 bg-forest text-cream"
      />
      <Ecossistema />
      <Publico />
      <Formatos />
      <Convite />
    </>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-cream pb-20 pt-32 md:pb-28 md:pt-40">
      <div className="shell grid items-center gap-12 md:grid-cols-[1fr_1fr] md:gap-16">
        <div className="min-w-0">
          <ScrollReveal>
            <p className="eyebrow text-foreground/65">Para marcas</p>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h1 className="hero-type mt-7">
              Marcas não
              <br />
              compram atenção.
              <br />
              <span className="italic">Constroem</span> confiança.
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="script mt-8 text-[2rem] text-wine md:text-[3rem]">juntas, mais longe</p>
          </ScrollReveal>
          <ScrollReveal delay={280}>
            <p className="mt-8 max-w-md text-base leading-relaxed text-foreground/75 md:text-lg">
              O Liberte-se reúne mulheres que decidem — pelo próprio negócio, pela casa e pelo
              time. Colocar sua marca nesse ambiente é entrar por dentro, não por interrupção.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={360}>
            <div className="mt-10 flex flex-wrap gap-3">
              <a href="#convite" className="btn-base btn-gold">
                Quero conversar
              </a>
              <a href="#ecossistema" className="btn-base btn-outline-ink">
                Ver o ecossistema
              </a>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={140} className="min-w-0">
          <EditorialImage
            src={photos.duoBlazer.src}
            alt={photos.duoBlazer.alt}
            ratio="aspect-[4/5]"
            imageClassName="object-top"
            priority
          />
        </ScrollReveal>
      </div>

      <img
        src={logos.boca}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -left-6 bottom-10 h-20 w-auto opacity-20 md:left-8 md:h-28"
      />
    </section>
  );
}

function Ecossistema() {
  return (
    <section id="ecossistema" className="bg-ink py-24 text-cream md:py-36">
      <div className="shell">
        <ScrollReveal>
          <SectionTitle
            eyebrow="O ecossistema"
            tone="cream"
            title="Um clube, três territórios de contato."
          />
        </ScrollReveal>

        <div className="mt-16 grid gap-px bg-cream/15 md:grid-cols-3">
          {[
            {
              titulo: "Presencial",
              texto: "Encontros com curadoria de convidadas, ambientação e tempo de convivência real.",
            },
            {
              titulo: "Digital",
              texto: "Comunidade ativa, conteúdo próprio e conversas que seguem entre os encontros.",
            },
            {
              titulo: "Rede",
              texto: "Indicações e parcerias entre integrantes — o boca a boca mais valioso que existe.",
            },
          ].map((item, index) => (
            <ScrollReveal key={item.titulo} delay={index * 110} className="bg-ink p-8 md:p-10">
              <h3 className="display text-[1.75rem] md:text-[2.25rem]">{item.titulo}</h3>
              <p className="mt-4 text-base leading-relaxed text-cream/70">{item.texto}</p>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={140}>
          <EditorialImage
            src={photos.movimento.src}
            alt={photos.movimento.alt}
            ratio="aspect-[16/9]"
            className="mt-16"
            overlay
          />
        </ScrollReveal>
      </div>
    </section>
  );
}

function Publico() {
  return (
    <section className="bg-sand py-24 md:py-36">
      <div className="shell grid gap-12 md:grid-cols-2 md:items-center md:gap-20">
        <ScrollReveal className="min-w-0">
          <EditorialImage
            src={photos.manifesto.src}
            alt={photos.manifesto.alt}
            ratio="aspect-[4/5]"
          />
        </ScrollReveal>
        <div className="min-w-0">
          <ScrollReveal>
            <SectionTitle
              eyebrow="Quem está na sala"
              title="Mulheres que decidem — e que contam para quem confiam."
            />
          </ScrollReveal>
          <ScrollReveal delay={120}>
            <ul className="mt-10 space-y-0 text-lg leading-relaxed text-foreground/80">
              {[
                "Empreendedoras, executivas e profissionais liberais em fase de expansão.",
                "Poder de decisão de compra para si, para a casa e para o negócio.",
                "Alta influência sobre pares: indicam o que aprovam, sem roteiro.",
                "Exigentes com estética, verdade e coerência de marca.",
              ].map((item) => (
                <li key={item} className="border-t border-border py-5">
                  {item}
                </li>
              ))}
            </ul>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

function Formatos() {
  return (
    <section className="bg-cream py-24 md:py-36">
      <div className="shell">
        <ScrollReveal>
          <SectionTitle
            eyebrow="Formatos de parceria"
            title="Do patrocínio pontual ao projeto de marca contínuo."
            script="feito sob medida"
          />
        </ScrollReveal>

        <div className="mt-16 grid gap-px bg-border sm:grid-cols-2">
          {formatos.map((formato, index) => (
            <ScrollReveal key={formato.titulo} delay={index * 90} className="bg-cream p-8 md:p-12">
              <p className="eyebrow text-wine">{formato.numero}</p>
              <h3 className="display mt-6 text-[1.85rem] md:text-[2.4rem]">{formato.titulo}</h3>
              <p className="mt-4 text-base leading-relaxed text-foreground/75">{formato.texto}</p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Convite() {
  return (
    <section id="convite" className="relative overflow-hidden bg-forest py-24 text-cream md:py-36">
      <div className="shell text-center">
        <ScrollReveal>
          <p className="eyebrow text-cream/60">Vamos construir juntas</p>
          <h2 className="section-type mx-auto mt-6 max-w-3xl">
            Conte o que sua marca quer dizer. A gente desenha a experiência.
          </h2>
          <p className="script mt-6 text-[2rem] text-rose md:text-[3rem]">ninguém cresce sozinha</p>
        </ScrollReveal>
        <ScrollReveal delay={140}>
          <div className="mt-12 flex flex-wrap justify-center gap-3">
            <a
              href="https://instagram.com/liberteseclube"
              target="_blank"
              rel="noreferrer noopener"
              className="btn-base btn-gold"
            >
              Falar com o Liberte-se
            </a>
            <a href={import.meta.env.BASE_URL} className="btn-base btn-outline-cream">
              Ver o clube
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
