import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

import { EditorialImage } from "@/components/liberte/EditorialImage";
import { ImagineReveal } from "@/components/liberte/ImagineReveal";
import { Marquee } from "@/components/liberte/Marquee";
import { ScrollReveal } from "@/components/liberte/ScrollReveal";
import { SectionTitle } from "@/components/liberte/SectionTitle";
import { SpoilerSection } from "@/components/liberte/SpoilerSection";
import { logos, photos } from "@/lib/brand-assets";

const TITLE =
  "Liberte-se — O clube para mulheres que decidiram ocupar o próprio lugar";
const DESCRIPTION =
  "Liberte-se é o clube de mulheres que crescem juntas: conexão real, conteúdo sem ruído e experiências presenciais. Ninguém cresce sozinha.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: "/" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: ParaMulheresPage,
});

const pilares = [
  {
    numero: "01",
    titulo: "Jornada",
    texto:
      "Direção para reconhecer o momento do negócio, escolher prioridades e avançar sem seguir fórmulas genéricas.",
  },
  {
    numero: "02",
    titulo: "Comunidade",
    texto:
      "Relações reais entre mulheres que estão construindo de verdade, sem competição disfarçada de networking.",
  },
  {
    numero: "03",
    titulo: "Experiências",
    texto:
      "Encontros online e presenciais para trocar repertório, abrir conversas e transformar decisões em movimento.",
  },
  {
    numero: "04",
    titulo: "Inteligência",
    texto:
      "Curadoria em vez de excesso: o que importa agora, apresentado com contexto e no formato que cabe na semana.",
  },
];

function ParaMulheresPage() {
  return (
    <>
      <Hero />
      <Marquee
        items={[
          "COMECE",
          "RECOMECE",
          "MOVIMENTE-SE",
          "PERSISTA",
          "CONTINUE",
          "BORA",
          "SÓCIA",
        ]}
        separator="◆"
        className="border-y border-wine bg-wine text-cream"
      />
      <Experiencias />
      <Manifesto />
      <ImagineReveal />
      <PastEventsGallery />
      <SpoilerSection />
      <ListaDeEspera />
    </>
  );
}

const floripaPhotos = [
  "2J5A0002-Editar.jpg",
  "2J5A0089-Editar.jpg",
  "2J5A0124-Editar.jpg",
  "2J5A0171-Editar.jpg",
  "2J5A0188-Editar.jpg",
  "2J5A9178-Editar.jpg",
  "2J5A9196-Editar.jpg",
  "2J5A9920-Editar.jpg",
  "2J5A9783-Editar.jpg",
  "2J5A9780-Editar.jpg",
  "2J5A9630-Editar.jpg",
  "2J5A9615-Editar.jpg",
  "2J5A9565-Editar.jpg",
  "2J5A9548-Editar.jpg",
  "2J5A9547-Editar.jpg",
  "2J5A9525-Editar.jpg",
  "2J5A9524-Editar.jpg",
  "2J5A9482-Editar.jpg",
  "2J5A9471-Editar.jpg",
  "2J5A9464-Editar.jpg",
  "2J5A9443-Editar.jpg",
  "2J5A9372-Editar.jpg",
  "2J5A9285-Editar.jpg",
  "2J5A9242-Editar.jpg",
  "2J5A9224-Editar.jpg",
].map(
  (filename) =>
    `${import.meta.env.BASE_URL}FLORIPA/${encodeURIComponent(filename)}`,
);

const trancosoPhotos = [
  "DSC_4571 (1).jpg",
  "DSC_3990.jpg",
  "DSC_3877.jpg",
  "DSC_3481.jpg",
  "DSC_3362.jpg",
  "DSC_3275.jpg",
  "DSC_4837.jpg",
  "DSC_4815.jpg",
  "DSC_4657.jpg",
  "DSC_4945.jpg",
  "DSC_4912.jpg",
  "DSC_4961.jpg",
  "DSC_4967.jpg",
  "IMG_0008.JPG",
  "DSC_5668.jpg",
  "DSC_5357 (1).jpg",
  "DSC_4971.jpg",
].map(
  (filename) =>
    `${import.meta.env.BASE_URL}TRANCOSO/${encodeURIComponent(filename)}`,
);

const ubatuvaPhotos = [
  "DSC07671.jpg",
  "DSC_2811 (1).jpg",
  "DSC06058 (1).JPG",
  "DSC05768.JPG",
  "DSC07560.JPG",
  "DSC_2535 (1).jpg",
  "256bb995-4ac2-4641-b60e-4deb3ac42d38.jpg",
  "DSC_2467.jpg",
  "DSC06231.jpg",
  "DSC_2436 (1).jpg",
  "DSC06219.JPG",
  "DSC08042.jpg",
  "DSC06093.JPG",
  "DSC06176.JPG",
  "DSC_3254.jpg",
  "DSC_2847 (1).jpg",
  "IMG_8043 4.JPG",
  "IMG_8031 4.JPG",
  "IMG_8022 4.JPG",
  "IMG_8019 4.JPG",
  "IMG_8006 4.JPG",
  "IMG_8005 4.JPG",
].map(
  (filename) =>
    `${import.meta.env.BASE_URL}UBATUVA/${encodeURIComponent(filename)}`,
);

type PastEvent = {
  title: string;
  image: string;
  images?: string[];
};

const pastEvents: PastEvent[] = [
  { title: "Trancoso", image: trancosoPhotos[0], images: trancosoPhotos },
  { title: "Ubatuba", image: ubatuvaPhotos[0], images: ubatuvaPhotos },
  { title: "Florianópolis", image: floripaPhotos[0], images: floripaPhotos },
];

const galleryLayouts = [
  "md:col-span-7 md:row-span-2",
  "md:col-span-5",
  "md:col-span-5",
  "md:col-span-12",
];

const partnerLogos = [
  "411965089_371300312050413_2991830030394490126_n.jpg",
  "292238202_720481892708705_9045829741782975446_n.jpg",
  "449435715_380498748376767_579000768953251227_n.jpg",
  "68866462_486434925522385_9062911603409682432_n.jpg",
].map((filename) => `${import.meta.env.BASE_URL}logos/${filename}`);

function PastEventImage({ event }: { event: PastEvent }) {
  const images = event.images ?? [event.image];
  const [activeImage, setActiveImage] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  useEffect(() => {
    if (images.length < 2) return;
    if (lightboxOpen) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const advanceImage = () => {
      setActiveImage((current) => (current + 1) % images.length);
    };
    let interval: number | undefined;
    const firstChangeDelay = event.title === "Ubatuba" ? 1600 : 3200;
    const timeout = window.setTimeout(() => {
      advanceImage();
      interval = window.setInterval(advanceImage, 3200);
    }, firstChangeDelay);

    return () => {
      window.clearTimeout(timeout);
      if (interval !== undefined) window.clearInterval(interval);
    };
  }, [event.title, images.length, lightboxOpen]);

  useEffect(() => {
    if (!lightboxOpen) return;

    const previousOverflow = document.body.style.overflow;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setLightboxOpen(false);
      if (event.key === "ArrowLeft") {
        setActiveImage((current) =>
          (current - 1 + images.length) % images.length,
        );
      }
      if (event.key === "ArrowRight") {
        setActiveImage((current) => (current + 1) % images.length);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [images.length, lightboxOpen]);

  const previousImage = () => {
    setActiveImage((current) =>
      (current - 1 + images.length) % images.length,
    );
  };

  const nextImage = () => {
    setActiveImage((current) => (current + 1) % images.length);
  };

  return (
    <>
      <img
        key={images[activeImage]}
        src={images[activeImage]}
        alt={`Registro do evento Liberte-se em ${event.title}`}
        loading="lazy"
        className="absolute inset-0 h-full w-full animate-in object-cover transition-transform duration-[1200ms] ease-out fade-in [animation-duration:1100ms] [animation-timing-function:ease-in-out] group-hover:scale-[1.04] motion-reduce:animate-none motion-reduce:transition-none"
      />
      <button
        type="button"
        onClick={() => setLightboxOpen(true)}
        className="absolute inset-0 z-10 cursor-zoom-in"
        aria-label={`Ampliar fotos de ${event.title}`}
      />

      {images.length > 1 ? (
        <div className="absolute inset-x-3 top-1/2 z-20 flex -translate-y-1/2 justify-between">
          <button
            type="button"
            onClick={(clickEvent) => {
              clickEvent.stopPropagation();
              previousImage();
            }}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-ink/75 text-2xl text-cream backdrop-blur-sm transition-colors hover:bg-wine"
            aria-label="Foto anterior"
          >
            ‹
          </button>
          <button
            type="button"
            onClick={(clickEvent) => {
              clickEvent.stopPropagation();
              nextImage();
            }}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-ink/75 text-2xl text-cream backdrop-blur-sm transition-colors hover:bg-wine"
            aria-label="Próxima foto"
          >
            ›
          </button>
        </div>
      ) : null}

      {lightboxOpen
        ? createPortal(
            <div
              className="fixed inset-0 z-[200] flex items-center justify-center bg-ink/95 p-4 backdrop-blur-sm md:p-10"
              role="dialog"
              aria-modal="true"
              aria-label={`Galeria de fotos de ${event.title}`}
              onMouseDown={(mouseEvent) => {
                if (mouseEvent.target === mouseEvent.currentTarget) {
                  setLightboxOpen(false);
                }
              }}
            >
              <img
                src={images[activeImage]}
                alt={`Foto ${activeImage + 1} de ${event.title}`}
                className="max-h-[88vh] max-w-full object-contain shadow-2xl"
              />
              <button
                type="button"
                onClick={() => setLightboxOpen(false)}
                className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-cream text-2xl text-ink transition-colors hover:bg-rose md:right-8 md:top-8"
                aria-label="Fechar galeria"
                autoFocus
              >
                ×
              </button>
              {images.length > 1 ? (
                <>
                  <button
                    type="button"
                    onClick={previousImage}
                    className="absolute left-3 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-cream/90 text-3xl text-ink transition-colors hover:bg-rose md:left-8"
                    aria-label="Foto anterior"
                  >
                    ‹
                  </button>
                  <button
                    type="button"
                    onClick={nextImage}
                    className="absolute right-3 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-cream/90 text-3xl text-ink transition-colors hover:bg-rose md:right-8"
                    aria-label="Próxima foto"
                  >
                    ›
                  </button>
                  <p className="eyebrow absolute bottom-4 left-1/2 -translate-x-1/2 bg-ink/70 px-4 py-2 text-cream md:bottom-8">
                    {activeImage + 1} / {images.length}
                  </p>
                </>
              ) : null}
            </div>,
            document.body,
          )
        : null}
    </>
  );
}

function PastEventsGallery() {
  return (
    <section id="eventos-passados" className="relative overflow-hidden bg-sand pb-[6px] pt-24 md:pb-[6px] md:pt-36">
      <div className="past-events__paper-triangle" aria-hidden="true">
        <img
          src={`${import.meta.env.BASE_URL}libelula.jpg`}
          alt=""
          className="past-events__paper-triangle-image"
        />
      </div>
      <div className="shell">
        <div className="relative grid gap-10 md:grid-cols-[1fr_0.55fr] md:items-end md:gap-20">
          <ScrollReveal>
            <p className="eyebrow text-wine">Galeria de eventos passados</p>
            <h2 className="section-type mt-6 max-w-4xl">
              <span className="past-events__script-letter">J</span>Á FOMOS UMA{" "}
              EMPRESA
              <br />
              SÓ DE VIAGENS PARA{" "}
              <span className="past-events__script-letter">M</span>ULHERES.
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <div className="border-l border-foreground/20 pl-6 md:pl-8">
              <p className="text-base leading-relaxed text-foreground/75 md:text-lg">
                E já estavam acontecendo muitas mesas de negócio sem a gente perceber.
              </p>
              <p className="script mt-5 text-[1.75rem] text-wine md:text-[2.25rem]">
                foi aqui que tudo começou
              </p>
            </div>
          </ScrollReveal>
        </div>

        <div className="mt-14 grid gap-4 md:mt-20 md:grid-cols-12 md:auto-rows-[15rem] md:gap-5 lg:auto-rows-[18rem]">
          {pastEvents.slice(0, 3).map((event, index) => (
            <ScrollReveal
              key={event.title}
              delay={index * 90}
              className={galleryLayouts[index]}
            >
              <article className="group relative h-full min-h-[17rem] overflow-hidden bg-ink md:min-h-0">
                <PastEventImage event={event} />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/10 to-transparent" />
                <div className="absolute inset-x-0 top-0 flex items-center justify-between p-5 text-cream md:p-7">
                  <p className="eyebrow text-cream/75">Arquivo Liberte-se</p>
                  <p className="eyebrow text-ochre">0{index + 1}</p>
                </div>
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6 text-cream md:p-8">
                  <div>
                    <h3 className="display text-[2.25rem] md:text-[3rem]">
                      {event.title}
                    </h3>
                  </div>
                  <span aria-hidden="true" className="text-xl text-rose">◆</span>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={180}>
          <div className="mt-6 border-y border-foreground/20 py-5 md:mt-8 md:py-6">
            <p className="eyebrow text-center text-wine">
              Marcas parceiras dos últimos eventos
            </p>
            <div
              className="mt-4 overflow-hidden border-y border-foreground/15 bg-foreground/15"
              aria-label="Marcas parceiras dos últimos eventos"
            >
              <div
                className="marquee-track hover:[animation-play-state:paused]"
                style={{ ["--marquee-duration" as string]: "24s" }}
                aria-hidden="true"
              >
              {[...partnerLogos, ...partnerLogos].map((logo, index) => (
                <div
                  key={`${logo}-${index}`}
                  className="flex min-h-20 w-[13rem] shrink-0 items-center justify-center bg-cream px-4 py-2 md:min-h-24 md:w-[18rem]"
                >
                  <img
                    src={logo}
                    alt=""
                    loading="lazy"
                    className="h-16 w-16 scale-105 rounded-full border-2 border-wine/25 object-cover shadow-md md:h-20 md:w-20"
                  />
                </div>
              ))}
              </div>
            </div>
          </div>
        </ScrollReveal>

        {pastEvents.slice(3).map((event, index) => (
          <ScrollReveal key={event.title} delay={270} className="mt-4 h-[17rem] md:mt-5 md:h-[18rem]">
            <article className="group relative h-full overflow-hidden bg-ink">
              <PastEventImage event={event} />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/10 to-transparent" />
              <div className="absolute inset-x-0 top-0 flex items-center justify-between p-5 text-cream md:p-7">
                <p className="eyebrow text-cream/75">Arquivo Liberte-se</p>
                <p className="eyebrow text-ochre">0{index + 4}</p>
              </div>
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6 text-cream md:p-8">
                <div>
                  <h3 className="display text-[2.25rem] md:text-[3rem]">
                    {event.title}
                  </h3>
                </div>
                <span aria-hidden="true" className="text-xl text-rose">◆</span>
              </div>
            </article>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}

const galleryTwoEvents = [
  {
    title: "Trancoso",
    note: "viagens, encontros e ideias",
    image: "media/Liberte-se0224.jpg",
    layout: "md:col-span-7 md:row-span-2",
  },
  {
    title: "Ubatuba",
    note: "conversas que viraram movimento",
    image: "media/Liberte-se0232.jpg",
    layout: "md:col-span-5",
  },
  {
    title: "Florianópolis",
    note: "conexões para além da viagem",
    image: "media/Liberte-se0288.jpg",
    layout: "md:col-span-5",
  },
  {
    title: "Outras histórias",
    note: "o arquivo continua crescendo",
    image: "media/Liberte-se0325.jpg",
    layout: "md:col-span-12",
  },
];

function GalleryTwo() {
  const base = import.meta.env.BASE_URL;

  return (
    <section
      id="galeria-2"
      aria-labelledby="galeria-2-title"
      className="relative overflow-hidden border-t-[6px] border-wine bg-cream py-24 md:py-36"
    >
      <div
        className="absolute -right-24 top-16 h-48 w-48 rotate-12 opacity-[0.08] md:right-8 md:h-72 md:w-72"
        aria-hidden="true"
        style={{
          backgroundImage: `url("${logos.boca}")`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
        }}
      />

      <div className="shell relative">
        <div className="grid gap-12 md:grid-cols-[1.1fr_0.7fr] md:items-end md:gap-20">
          <ScrollReveal>
            <p className="eyebrow text-wine">Galeria 2 · Nossa história</p>
            <h2 id="galeria-2-title" className="section-type mt-6 max-w-4xl text-ink">
              Antes de sermos um clube, já criávamos espaços para mulheres.
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="border-l border-ink/20 pl-6 md:pl-8">
              <p className="max-w-xl text-base leading-relaxed text-ink/70 md:text-lg">
                Começamos com viagens. Entre encontros, conversas e novas conexões,
                percebemos que muitas mesas de negócio já estavam acontecendo.
              </p>
              <p className="script mt-5 text-[1.9rem] text-wine md:text-[2.5rem]">
                foi aqui que tudo começou
              </p>
            </div>
          </ScrollReveal>
        </div>

        <div className="mt-14 grid gap-4 md:mt-20 md:grid-cols-12 md:auto-rows-[17rem] md:gap-5">
          {galleryTwoEvents.map((event, index) => (
            <ScrollReveal
              key={event.title}
              delay={index * 90}
              className={event.layout}
            >
              <article className="group relative h-full min-h-[22rem] overflow-hidden bg-forest md:min-h-0">
                <img
                  src={`${base}${event.image}`}
                  alt={`Memória da história Liberte-se: ${event.title}`}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-[1200ms] ease-out group-hover:scale-[1.045] group-hover:saturate-[1.08] motion-reduce:transition-none"
                />
                <div className="absolute inset-0 bg-forest/20 transition-colors duration-700 group-hover:bg-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/10 to-ink/15" />

                <div className="absolute inset-x-0 top-0 flex items-center justify-between p-5 text-cream md:p-7">
                  <p className="eyebrow text-cream/80">Arquivo Liberte-se</p>
                  <p className="font-bebas text-base tracking-[0.22em] text-rose">
                    0{index + 1}
                  </p>
                </div>

                <div className="absolute inset-x-0 bottom-0 p-6 text-cream md:p-8">
                  <p className="eyebrow text-cream/65">Uma história de liberdade</p>
                  <div className="mt-3 flex items-end justify-between gap-5">
                    <div>
                      <h3 className="display text-[2.5rem] md:text-[3.25rem]">
                        {event.title}
                      </h3>
                      <p className="mt-3 max-w-xs translate-y-2 text-sm text-cream/0 transition-all duration-500 group-hover:translate-y-0 group-hover:text-cream/80">
                        {event.note}
                      </p>
                    </div>
                    <span
                      aria-hidden="true"
                      className="mb-2 h-3 w-3 rotate-45 bg-rose transition-transform duration-500 group-hover:rotate-[135deg]"
                    />
                  </div>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={180}>
          <div className="mt-8 flex items-center gap-5 border-y border-ink/20 py-6 text-wine">
            <span className="h-px flex-1 bg-current opacity-25" aria-hidden="true" />
            <p className="eyebrow text-center">Cada destino abriu uma nova conversa</p>
            <span className="h-px flex-1 bg-current opacity-25" aria-hidden="true" />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

const journeySteps = [
  "Onde você está",
  "O que você precisa",
  "Próximo passo",
  "Movimento",
  "Crescimento",
];

function JourneyTimeline() {
  return (
    <div className="shell relative mt-8 text-cream md:mt-16">
        <ScrollReveal delay={140}>
          <ol className="relative grid gap-4 before:absolute before:bottom-0 before:left-[0.45rem] before:top-0 before:w-px before:bg-cream/25 sm:grid-cols-5 sm:gap-3 sm:before:bottom-auto sm:before:left-0 sm:before:right-0 sm:before:top-[0.45rem] sm:before:h-px sm:before:w-auto">
            {journeySteps.map((step, index) => (
              <li key={step} className="relative pl-10 sm:pl-0 sm:pt-10">
                <span
                  className={`absolute left-0 top-2 z-10 h-4 w-4 border-2 sm:left-1/2 sm:top-0 sm:-translate-x-1/2 ${
                    index === journeySteps.length - 1
                      ? "border-ochre bg-ochre"
                      : "border-cream bg-ink"
                  }`}
                  aria-hidden="true"
                />
                <div
                  className={`mr-12 h-[5rem] px-2.5 py-2 sm:mr-0 sm:h-[9rem] sm:p-5 lg:p-6 ${
                    index === journeySteps.length - 1
                      ? "bg-ochre text-ink"
                      : "border border-cream/20 text-cream"
                  }`}
                >
                  <p
                    className={`eyebrow ${
                      index === journeySteps.length - 1 ? "text-ink/65" : "text-cream/65"
                    }`}
                  >
                    0{index + 1}
                  </p>
                  <h3 className="display mt-3 text-[1.1rem] uppercase leading-tight sm:mt-5 sm:text-[1.45rem] sm:normal-case md:text-[1.75rem]">
                    {step}
                  </h3>
                </div>
              </li>
            ))}
          </ol>
        </ScrollReveal>
    </div>
  );
}

function Hero() {
  return (
    <section className="bg-cream pt-20 text-foreground md:pt-24">
      <div className="relative aspect-[9/16] w-full overflow-hidden bg-sand md:aspect-[2/1]">
        <picture>
          <source
            media="(min-width: 768px)"
            srcSet={`${import.meta.env.BASE_URL}media/banner2.png`}
          />
          <img
            src={`${import.meta.env.BASE_URL}media/banner mobile.png`}
            alt="Mulheres em movimento no banner Liberte-se"
            className="absolute inset-0 block h-full w-full max-w-none object-cover object-center"
            fetchPriority="high"
          />
        </picture>
        <h1 className="sr-only">O Liberte-se desperta</h1>
        <div className="absolute bottom-10 left-[max(5.5%,calc((100vw-88rem)/2+4.84rem))] z-10 hidden md:block">
          <a href="#experiencias" className="btn-base btn-gold w-full sm:w-auto">
            Próxima viagem
          </a>
        </div>
      </div>
      <div className="bg-ink px-6 py-5 md:hidden">
        <a href="#experiencias" className="btn-base btn-gold w-full">
          Próxima viagem
        </a>
      </div>
    </section>
  );
}

function LegacyHero() {
  return (
    <section className="relative overflow-hidden bg-cream pb-20 pt-28 text-foreground md:pb-28 md:pt-36">
      <div className="shell grid items-center gap-10 md:grid-cols-[1.05fr_0.95fr] md:gap-16">
        <div className="min-w-0">
          <ScrollReveal>
            <p className="eyebrow text-foreground/55">
              Clube de mulheres · Brasil
            </p>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h1 className="hero-type mt-7 text-foreground">
              Você não precisa
              <br />
              empreender
              <br />
              <span className="italic text-wine">sozinha.</span>
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="script mt-8 text-[2rem] text-rose md:text-[3rem]">
              liberte-se
            </p>
          </ScrollReveal>
          <ScrollReveal delay={280}>
            <p className="mt-8 max-w-md text-base leading-relaxed text-foreground/75 md:text-lg">
              O clube para mulheres que decidiram ocupar o próprio lugar no
              mundo — e entenderam que crescer acompanhada é mais rápido, mais
              leve e muito mais bonito.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={360}>
            <div className="mt-10 flex flex-wrap gap-3">
              <a href="#lista-de-espera" className="btn-base btn-wine">
                Entrar na lista de espera
              </a>
              <a href="#o-liberte-se" className="btn-base btn-outline-ink">
                Conhecer o clube
              </a>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={140} className="min-w-0">
          <EditorialImage
            src={photos.retrato.src}
            alt={photos.retrato.alt}
            ratio="aspect-[7/5]"
            priority
          />
        </ScrollReveal>
      </div>

      <img
        src={logos.boca}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -right-8 top-24 h-24 w-auto opacity-25 md:right-10 md:h-32"
      />
    </section>
  );
}

function Identificacao() {
  return (
    <section id="o-liberte-se" className="bg-cream py-24 md:py-36">
      <div className="shell grid gap-12 md:grid-cols-2 md:items-center md:gap-20">
        <ScrollReveal className="min-w-0">
          <EditorialImage
            src={photos.duoLaptop.src}
            alt={photos.duoLaptop.alt}
            ratio="aspect-[4/5]"
            imageClassName="object-top"
            caption="Encontro de trabalho — arquivo Liberte-se"
          />
        </ScrollReveal>

        <div className="min-w-0">
          <ScrollReveal>
            <SectionTitle
              eyebrow="Talvez você se reconheça"
              title="Competente, admirada — e cansada de segurar tudo."
            />
          </ScrollReveal>
          <ScrollReveal delay={120}>
            <ul className="mt-10 space-y-0 text-lg leading-relaxed text-foreground/80">
              {[
                "Você é a pessoa que todos procuram, mas não sabe para quem ligar.",
                "Você tem ideias grandes e ninguém por perto no mesmo tamanho.",
                "Você aprendeu a se bastar — e isso começou a te custar caro.",
                "Você quer voltar a sentir vontade, não só disciplina.",
              ].map((item) => (
                <li key={item} className="border-t border-border py-5">
                  {item}
                </li>
              ))}
            </ul>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="script mt-10 text-[1.75rem] text-wine md:text-[2.5rem]">
              ninguém cresce sozinha
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

function Pilares() {
  return (
    <section className="bg-sand py-24 md:py-36">
      <div className="shell">
        <ScrollReveal>
          <SectionTitle
            eyebrow="O que sustenta o clube"
            title="Quatro pilares, nenhuma promessa vazia."
          />
        </ScrollReveal>

        <div className="mt-16 grid gap-px bg-border md:grid-cols-2 xl:grid-cols-4">
          {pilares.map((pilar, index) => (
            <ScrollReveal
              key={pilar.titulo}
              delay={index * 110}
              className="bg-sand p-8 md:p-10"
            >
              <p className="eyebrow text-wine">{pilar.numero}</p>
              <h3 className="display mt-6 text-[2rem] md:text-[2.5rem]">
                {pilar.titulo}
              </h3>
              <p className="mt-4 text-base leading-relaxed text-foreground/75">
                {pilar.texto}
              </p>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={120}>
          <div className="mt-16 grid gap-6 sm:grid-cols-3">
            <EditorialImage
              src={photos.jornal.src}
              alt={photos.jornal.alt}
              ratio="aspect-[4/3]"
            />
            <EditorialImage
              src={photos.cafe.src}
              alt={photos.cafe.alt}
              ratio="aspect-[4/3]"
            />
            <EditorialImage
              src={photos.zebra.src}
              alt={photos.zebra.alt}
              ratio="aspect-[4/3]"
            />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

function Experiencias() {
  return (
    <section id="experiencias" className="experiences-section relative overflow-hidden bg-ink pb-12 text-cream md:pb-36">
      <div className="experiences-section__zebra-span relative overflow-hidden pt-16 md:pt-24">
        <div className="experiences-section__art" aria-hidden="true">
          <img
            src={`${import.meta.env.BASE_URL}zebra.jpg`}
            alt=""
            className="experiences-section__art-image"
          />
        </div>

      <div className="experiences-section__intro shell relative">
        <ScrollReveal>
          <SectionTitle
            tone="cream"
            title={
              <>
                <span className="experiences-section__script-letter">É</span> POR ISSO QUE
                EXISTE O <span className="experiences-section__script-letter">L</span>IBERTE-SE.
              </>
            }
          />
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-cream/75 md:text-xl">
            Um movimento de experiências, conexões e possibilidades para mulheres que empreendem.
          </p>
        </ScrollReveal>

      </div>

      <JourneyTimeline />

      </div>

      <AgendaExperience />

      <div className="shell mt-16 md:mt-24">
        <ScrollReveal>
          <div className="flex items-center gap-5 border-t border-cream/20 pt-6">
            <p className="eyebrow text-cream/70">Como acontece</p>
            <div className="h-px flex-1 bg-cream/20" />
          </div>
        </ScrollReveal>

        <ScrollReveal delay={80}>
          <SectionTitle
            className="mt-8"
            tone="cream"
            title={
              <>
                <span className="experiences-section__script-letter">O</span>NLINE PARA
                MANTER O RITMO. <span className="experiences-section__script-letter">P</span>RESENCIAL
                PARA MUDAR O <span className="experiences-section__script-letter">R</span>UMO.
              </>
            }
            script="a mesa importa"
          />
        </ScrollReveal>

        <div className="mt-10 grid gap-3 md:grid-cols-12 md:grid-rows-2 md:gap-4">
          <ScrollReveal className="flex h-[14rem] flex-col justify-between bg-cream p-5 text-foreground sm:h-[15rem] sm:p-6 md:col-span-7 md:row-span-2 md:h-auto md:min-h-[32rem] md:p-12">
            <div className="flex items-start justify-end gap-6">
              <span className="display text-4xl text-terracotta/70" aria-hidden="true">
                01
              </span>
            </div>
            <div>
              <h3 className="display max-w-xl text-[2rem] uppercase leading-[0.92] md:text-[clamp(2.75rem,5vw,5rem)]">
                Encontros presenciais
              </h3>
              <p className="mt-3 max-w-lg text-sm leading-relaxed text-foreground/75 md:mt-6 md:text-lg">
                Experiências que misturam negócios, conexões e vida real.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal
            delay={110}
            className="flex h-[14rem] flex-col justify-between bg-forest p-5 text-cream sm:h-[15rem] sm:p-6 md:col-span-5 md:h-auto md:min-h-0 md:p-10"
          >
            <div className="flex items-start justify-end gap-6">
              <span className="display text-4xl text-terracotta/70" aria-hidden="true">02</span>
            </div>
            <div className="md:mt-12">
              <h3 className="display text-[2rem] uppercase leading-none md:text-[3rem]">Encontros online</h3>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-cream/80 md:mt-4 md:text-base">
                Conversas e conteúdos para continuar expandindo ideias, negócios e possibilidades.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal
            delay={220}
            className="flex h-[14rem] flex-col justify-between border border-cream/25 bg-ink p-5 text-cream sm:h-[15rem] sm:p-6 md:col-span-5 md:h-auto md:min-h-0 md:p-10"
          >
            <div className="flex items-start justify-end gap-6">
              <span className="display text-4xl text-terracotta/70" aria-hidden="true">03</span>
            </div>
            <div className="md:mt-12">
              <h3 className="display text-[2rem] uppercase leading-none md:text-[3rem]">Liberte-se Clube</h3>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-cream/80 md:mt-4 md:text-base">
                Um clube para mulheres que empreendem, se conectam e fazem acontecer.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

const agendaItems = [
  "3 dias de talks",
  "4 palestrantes",
  "Roda das sócias",
  "Hospedagem pé na areia",
  "Alimentação inclusa",
  "Corpo em movimento",
  "Festa com DJ",
  "8 marcas expositoras",
  "Jogo Liberte-se",
  "Networking",
];

function AgendaShowcase() {
  return (
    <section
      id="proxima-viagem"
      className="relative overflow-hidden border-y border-forest/20 bg-green-light py-24 text-forest md:py-36"
    >
      <div
        className="pointer-events-none absolute -right-[2%] top-4 select-none font-display text-[clamp(7rem,18vw,18rem)] uppercase leading-none tracking-[-0.08em] text-forest/[0.045]"
        aria-hidden="true"
      >
        Viagem
      </div>

      <div className="shell relative">
        <ScrollReveal>
          <div className="flex items-center gap-5 border-t border-forest/20 pt-6">
            <p className="eyebrow text-ochre">Próxima viagem</p>
            <div className="h-px flex-1 bg-forest/20" />
            <p className="eyebrow hidden text-forest/70 sm:block">
              Ubatuba - SP
            </p>
          </div>
        </ScrollReveal>

        <div className="mt-12 grid gap-12 md:mt-16 md:grid-cols-12 md:items-end md:gap-8">
          <ScrollReveal className="md:col-span-7 lg:col-span-8">
            <p className="font-bebas font-normal text-[clamp(3.5rem,8vw,7.5rem)] leading-[0.82] tracking-[-0.05em]">
              <span className="inline-flex gap-[0.08em]"><span>0</span><span>4</span></span>{" "}
              <span className="text-[0.38em] uppercase tracking-normal text-ochre">a</span>{" "}
              <span className="inline-flex gap-[0.08em]"><span>0</span><span>6</span></span>
            </p>
            <p className="eyebrow mt-6 text-forest/75">Dezembro · 2026</p>
            <h2 className="display mt-8 max-w-4xl text-[clamp(2.75rem,5.5vw,5.5rem)] leading-[0.9] tracking-[-0.04em]">
              Três dias para falar de negócios com os pés na areia.
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={140} className="md:col-span-5 lg:col-span-4">
            <div className="border-l border-forest/20 pl-6 sm:pl-8 md:pb-2">
              <p className="max-w-md text-base leading-relaxed text-forest/85 md:text-lg">
                Três dias de talks, celebração e muito networking em Ubatuba - SP.
              </p>
              <p className="script mt-7 text-[2rem] leading-snug text-ochre md:text-[2.6rem]">
                negócios com os pés na areia
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a
                  href="https://wa.me/?text=Ol%C3%A1%21%20Quero%20viver%20a%20pr%C3%B3xima%20viagem%20do%20Liberte-se."
                  target="_blank"
                  rel="noreferrer noopener"
                  className="btn-base btn-gold w-full sm:w-auto"
                >
                  Quero viver essa viagem
                </a>
                <a
                  href="#eventos-passados"
                  className="btn-base btn-outline-ink w-full sm:w-auto"
                >
                  Ver eventos passados
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

function AgendaExperience() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <>
      <div id="agenda" className="relative scroll-mt-20 overflow-hidden bg-forest text-cream md:scroll-mt-24">
        <img
          src={`${import.meta.env.BASE_URL}zebravermelha.jpg`}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 h-full w-full object-cover object-center"
        />
        <div
          className="pointer-events-none absolute -right-[2%] top-4 select-none font-display text-[clamp(7rem,18vw,18rem)] uppercase leading-none tracking-[-0.08em] text-cream/[0.045]"
          aria-hidden="true"
        >
          Viagem
        </div>
        <div className="shell relative pb-10 pt-24 md:pb-14 md:pt-36">
          <div className="grid overflow-hidden bg-cream text-foreground shadow-2xl md:grid-cols-[0.72fr_1.28fr]">
            <aside className="relative overflow-hidden bg-rose p-6 text-cream sm:p-8 md:min-h-[30rem] md:p-8">
              <img
                className="agenda-illustration"
                src={`${import.meta.env.BASE_URL}agenda-ilustracoes-v2.png`}
                alt=""
                aria-hidden="true"
              />
              <div className="relative flex h-full flex-col justify-between">
                <div>
                  <p className="eyebrow text-wine">Próxima viagem</p>
                  <p className="font-bebas mt-7 whitespace-nowrap font-normal text-[clamp(3.5rem,8vw,6rem)] leading-[0.78] tracking-[-0.06em]">
                    <span className="inline-block border-b-2 border-wine pb-3">
                      <span className="inline-flex gap-[0.08em]"><span>0</span><span>4</span></span>{" "}
                      <span className="mx-[0.22em] text-[0.38em] uppercase tracking-normal text-wine">a</span>{" "}
                      <span className="inline-flex gap-[0.08em]"><span>0</span><span>6</span></span>
                    </span>
                  </p>
                  <p className="eyebrow mt-5 text-cream">Dezembro · 2026</p>
                </div>

                <div className="mt-8 pt-5">
                  <p className="eyebrow text-cream/65">Local</p>
                  <p className="display mt-3 text-[2.25rem] uppercase">Ubatuba - SP</p>
                </div>
              </div>
            </aside>

            <div className="relative isolate overflow-hidden bg-cream p-6 sm:p-8 md:p-8">
              <div>
                <p className="eyebrow text-wine">A experiência</p>
                <h2 className="mt-4 max-w-2xl font-['Bebas_Neue'] text-[clamp(2.25rem,4vw,3.75rem)] leading-[0.96] tracking-[0.01em]">
                  Três dias para falar de negócios, celebrar e criar movimento.
                </h2>
                <p className="mt-5 max-w-2xl font-['Bodoni_Moda'] text-base leading-relaxed text-foreground md:text-lg">
                  Quem disse que a gente não pode falar de negócios com os pés
                  na areia?
                  <br />
                  E olha essa programação:
                </p>

                <div className="mt-6 border-t border-foreground/15 pt-5">
                  <ol className="grid gap-x-6 sm:grid-flow-col sm:grid-rows-5">
                    {agendaItems.map((item, index) => (
                      <li
                        key={item}
                        className="grid grid-cols-[1.75rem_1fr] gap-2 border-b border-foreground/15 py-2 text-[0.68rem] uppercase tracking-[0.05em] sm:text-xs"
                      >
                        <span className="eyebrow text-wine">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ol>
                  <div className="mt-5 flex items-center justify-between border-l-4 border-forest px-4 py-3 text-forest">
                    <span className="eyebrow text-forest">Investimento</span>
                    <span className="font-['Bodoni_Moda'] text-3xl leading-none tracking-[-0.02em] text-forest md:text-4xl">
                      <span className="mr-1 text-[0.55em]">R$</span>2.200
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a
                  href="https://wa.me/?text=Ol%C3%A1%21%20Quero%20receber%20o%20convite%20para%20a%20pr%C3%B3xima%20viagem%20do%20Liberte-se."
                  target="_blank"
                  rel="noreferrer noopener"
                  className="btn-base btn-gold w-full sm:w-auto"
                >
                  Quero viver essa viagem
                </a>
                <a
                  href="#eventos-passados"
                  className="btn-base btn-outline-ink w-full sm:w-auto"
                >
                  Ver eventos passados
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {open ? (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/85 p-3 backdrop-blur-sm sm:p-6"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setOpen(false);
          }}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="agenda-title"
            aria-describedby="agenda-description"
            className="relative max-h-[80vh] w-full max-w-5xl overflow-y-auto bg-cream text-foreground shadow-2xl md:overflow-hidden"
          >
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Fechar agenda"
              autoFocus
              className="absolute right-3 top-3 z-20 flex h-11 w-11 items-center justify-center bg-ink text-2xl font-light leading-none text-cream transition-colors hover:bg-wine focus-visible:outline-cream sm:right-5 sm:top-5"
            >
              ×
            </button>

            <div className="grid md:grid-cols-[0.72fr_1.28fr]">
              <aside className="relative overflow-hidden bg-rose p-6 text-cream sm:p-8 md:min-h-[30rem] md:p-8">
                <img
                  className="agenda-illustration"
                  src={`${import.meta.env.BASE_URL}agenda-ilustracoes-v2.png`}
                  alt=""
                  aria-hidden="true"
                />
                <div className="relative flex h-full flex-col justify-between">
                  <div>
                    <p className="eyebrow text-wine">Próxima viagem</p>
                    <p className="font-bebas mt-7 whitespace-nowrap font-normal text-[clamp(3.5rem,8vw,6rem)] leading-[0.78] tracking-[-0.06em]">
                      <span className="inline-block border-b-2 border-wine pb-3">
                        <span className="inline-flex gap-[0.08em]"><span>0</span><span>4</span></span>{" "}
                        <span className="mx-[0.22em] text-[0.38em] uppercase tracking-normal text-wine">a</span>{" "}
                        <span className="inline-flex gap-[0.08em]"><span>0</span><span>6</span></span>
                      </span>
                    </p>
                    <p className="eyebrow mt-5 text-cream">
                      Dezembro · 2026
                    </p>
                  </div>

                  <div className="mt-8 pt-5">
                    <p className="eyebrow text-cream/65">Local</p>
                    <p className="display mt-3 text-[2.25rem] uppercase">Ubatuba - SP</p>
                  </div>
                </div>
              </aside>

              <div className="relative isolate overflow-hidden bg-cream p-6 sm:p-8 md:p-8">
                <p className="eyebrow text-wine">A experiência</p>
                <h2 id="agenda-title" className="mt-3 max-w-2xl font-['Bebas_Neue'] text-[clamp(1.9rem,3vw,3rem)] leading-[0.96] tracking-[0.01em]">
                  Três dias para falar de negócios, celebrar e criar movimento.
                </h2>
                <p id="agenda-description" className="mt-4 max-w-2xl font-['Bodoni_Moda'] text-sm leading-relaxed text-foreground md:text-base">
                  Quem disse que a gente não pode falar de negócios com os pés
                  na areia?
                  <br />
                  E olha essa programação:
                </p>

                <div className="mt-4 border-t border-foreground/15 pt-3">
                  <ol className="grid gap-x-6 sm:grid-flow-col sm:grid-rows-5">
                    {agendaItems.map((item, index) => (
                      <li key={item} className="grid grid-cols-[1.75rem_1fr] gap-2 border-b border-foreground/15 py-2 text-[0.68rem] uppercase tracking-[0.05em] sm:text-xs">
                        <span className="eyebrow text-wine">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ol>
                  <div className="mt-3 flex items-center justify-between border-l-4 border-forest px-3 py-2.5 text-forest">
                    <span className="eyebrow text-forest">Investimento</span>
                    <span className="font-['Bodoni_Moda'] text-2xl leading-none tracking-[-0.02em] text-forest md:text-3xl">
                      <span className="mr-1 text-[0.55em]">R$</span>2.200
                    </span>
                  </div>
                </div>

                <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:flex-wrap">
                  <a
                    href="https://wa.me/?text=Ol%C3%A1%21%20Quero%20receber%20o%20convite%20para%20a%20pr%C3%B3xima%20viagem%20do%20Liberte-se."
                    target="_blank"
                    rel="noreferrer noopener"
                    className="btn-base btn-gold w-full sm:w-auto"
                  >
                    Quero viver essa viagem
                  </a>
                  <button
                    type="button"
                    onClick={() => setOpen(false)}
                    className="btn-base btn-outline-ink w-full sm:w-auto"
                  >
                    Voltar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

function Manifesto() {
  const partnerNotes = [
    "Que lembra daquilo que você queria fazer.",
    "Que te ajuda a dar o próximo passo.",
    "Que conhece pessoas que podem abrir novos caminhos.",
    "E que comemora com você quando acontece.",
    "Essa é a ideia por trás do Liberte-se.",
  ];

  return (
    <section id="o-liberte-se" className="relative overflow-hidden bg-cream pb-0 pt-6 md:py-32">
      <div
        aria-hidden="true"
        className="absolute right-0 top-0 hidden h-full w-[31%] bg-terracotta-deep bg-cover bg-center bg-no-repeat lg:block"
        style={{
          backgroundImage: `url("${import.meta.env.BASE_URL}media/editorial-15-26-33-v2.png")`,
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-6 -translate-x-1/2 font-display text-[clamp(9rem,22vw,22rem)] leading-none tracking-[-0.08em] text-wine/[0.045] md:-left-10 md:bottom-0 md:top-auto md:translate-x-0"
      >
        01
      </div>

      <div className="shell relative">
        <div className="mt-0 grid gap-10 md:mt-10 lg:grid-cols-12 lg:items-start lg:gap-6">
          <div className="relative z-10 lg:col-span-7 lg:pt-8">
            <ScrollReveal>
              <h2 className="display mt-4 max-w-4xl text-center text-[clamp(3rem,7vw,7rem)] leading-[0.78] tracking-[-0.06em] md:mt-5 md:text-left">
                <span className="block whitespace-nowrap font-display font-normal uppercase">
                  IMAGINE <span className="inline-block font-script text-[1.12em] normal-case text-wine">T</span>ER
                </span>
                <span className="block font-display font-normal uppercase text-wine">
                  UMA “<span className="inline-block font-script text-[1.12em] normal-case">S</span>ÓCIA”
                </span>
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <div className="mt-10 border-y border-foreground/20 lg:mr-[-5rem] lg:max-w-2xl">
                {partnerNotes.map((item, index) => (
                  <p
                    key={item}
                    className="grid grid-cols-[1.5rem_1fr] gap-2 border-b border-foreground/20 py-5 text-base leading-relaxed text-foreground/80 last:border-b-0 md:grid-cols-[2rem_1fr] md:gap-4 md:text-lg"
                  >
                    <span className="eyebrow pt-1 text-terracotta">0{index + 1}</span>
                    <span>{item}</span>
                  </p>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal delay={180}>
              <div className="mt-8 flex lg:max-w-2xl">
                <a href="#experiencias" className="btn-base btn-gold w-full sm:w-auto">
                  Quero conhecer
                </a>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={140} className="relative -mx-[1.375rem] lg:col-span-5 lg:mx-0 lg:-mt-[4.75rem]">
            <div
              className="relative lg:ml-[-1rem] lg:mr-[-2rem]"
            >
              <EditorialImage
                src={`${import.meta.env.BASE_URL}media/Liberte-se0288.jpg`}
                alt="Mulheres do Liberte-se reunidas em uma conversa de trabalho"
                ratio="aspect-[4/5]"
              />

              <div className="absolute inset-x-0 bottom-0 grid grid-cols-3 lg:contents">
              <figure className="aspect-square w-full overflow-hidden border-[3px] border-wine bg-cream shadow-xl lg:absolute lg:bottom-5 lg:left-[-3%] lg:w-[38%] lg:border-[7px]">
                <img
                  src={`${import.meta.env.BASE_URL}media/Liberte-se0308.jpg`}
                  alt="Registro do encontro Liberte-se"
                  className="h-full w-full object-cover object-center"
                  loading="lazy"
                />
              </figure>

              <figure className="aspect-square w-full overflow-hidden border-y-[3px] border-wine bg-cream shadow-xl lg:absolute lg:bottom-5 lg:left-[31%] lg:w-[38%] lg:border-[7px]">
                <img
                  src={`${import.meta.env.BASE_URL}media/Liberte-se0325.jpg`}
                  alt="Registro de mulheres reunidas no Liberte-se"
                  className="h-full w-full object-cover object-[center_38%]"
                  loading="lazy"
                />
              </figure>

              <div className="flex aspect-square w-full items-center justify-center overflow-hidden border-[3px] border-wine bg-cream lg:absolute lg:bottom-5 lg:right-[-3%] lg:w-[38%] lg:border-[7px]">
                <img
                  src={`${import.meta.env.BASE_URL}media/ChatGPT%20Image%2018%20de%20ago.%20de%202026,%2012_16_31.png`}
                  alt="Registro visual do Liberte-se"
                  className="h-full w-full object-cover object-[center_35%]"
                  loading="lazy"
                />
              </div>
              </div>
              <p className="eyebrow absolute right-0 top-0 bg-ink px-4 py-3 text-cream [writing-mode:vertical-rl]">
                Ninguém cresce sozinha
              </p>
            </div>
          </ScrollReveal>
        </div>

      </div>
    </section>
  );
}

function ListaDeEspera() {
  const galleryPhotos = [
    photos.duoBlazer,
    photos.jornal,
    photos.zebra,
    photos.lipscard,
  ];

  return (
    <section
      id="lista-de-espera"
      className="scroll-mt-20 overflow-hidden bg-forest p-2 sm:p-3 md:scroll-mt-24"
      aria-label="Galeria Liberte-se"
    >
      <div className="mx-auto grid max-w-[72rem] grid-cols-2 items-center gap-2 py-4 sm:gap-3 sm:py-6 md:grid-cols-4">
        {galleryPhotos.map((photo, index) => (
          <ScrollReveal
            key={photo.src}
            delay={index * 80}
          >
            <figure
              className={`group overflow-hidden bg-ink ${
                index === 0 || index === 2 ? "aspect-[4/5]" : "aspect-[4/4.5]"
              }`}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.035] motion-reduce:transition-none"
              />
            </figure>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
