const base = import.meta.env.BASE_URL;

export function ImagineReveal() {
  return (
    <section className="partners-section" aria-labelledby="partners-title">
      <div className="partners-section__grid">
        <figure className="partners-section__primary-media">
          <div className="partners-section__primary-crop">
            <img
              src={`${base}media/Liberte-se0232.jpg`}
              alt="Carol e Sara juntas em um encontro do Liberte-se"
              loading="lazy"
            />
          </div>
        </figure>

        <div className="partners-section__content">
          <h2
            id="partners-title"
            className="partners-section__title"
            aria-label="As sócias"
          >
            <span className="partners-section__title-as" aria-hidden="true">
              <span className="partners-section__title-a">A</span>
              <span className="partners-section__title-s">S</span>
            </span>
            <span className="partners-section__paper-cut" aria-hidden="true" />
            <span className="partners-section__title-word" aria-hidden="true">
              SÓCIAS
            </span>
          </h2>
          <div className="partners-section__description">
            <p>Nossa parceria começou muito antes de virar um movimento.</p>
            <p>
              25 anos de amizade, viagens, conversas, sonhos e fases da vida
              compartilhadas.
            </p>
            <p>
              Foi na faculdade de Moda que nos conhecemos. E, desde lá, nunca
              paramos de conectar pessoas, criar grupos e movimentar mulheres.
            </p>
            <p>
              Porque, para nós, networking nunca foi só sobre negócios.<br />
              Foi sobre a vida.
            </p>
            <p>
              Sara, ariana, energia pura.<br />
              Carol, leonina, intensidade em pessoa.
            </p>
            <p>
              A gente se completa justamente porque não é igual.<br />
              E talvez essa seja a nossa maior força.
            </p>
            <p>
              Algo grande demais para ficar só entre nós duas. O Liberte-se
              nasceu para ser compartilhado.
            </p>
          </div>
          <div className="partners-section__content-action">
            <a href="#experiencias" className="btn-base btn-gold">
              Quero conhecer
            </a>
          </div>
        </div>

        <div
          className="partners-section__secondary-media"
          aria-label="Outros registros das sócias"
        >
          <figure>
            <img
              src={`${base}media/Liberte-se0190.jpg`}
              alt="Registro de uma das sócias durante uma experiência do Liberte-se"
              loading="lazy"
              className="partners-section__portrait-top partners-section__portrait-0190"
            />
          </figure>
          <figure>
            <img
              src={`${base}media/LIBERTE-SE%20CAROL%20(1).png`}
              alt="Retrato de Carol para o Liberte-se"
              loading="lazy"
            />
          </figure>
          <figure>
            <img
              src={`${base}media/Liberte-se0178.jpg`}
              alt="Retrato de uma das sócias com elementos da identidade Liberte-se"
              loading="lazy"
              className="partners-section__portrait-top partners-section__portrait-0178"
            />
          </figure>
        </div>
      </div>

    </section>
  );
}
