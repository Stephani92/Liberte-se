import logoSignature from "@/assets/logo16.png.asset.json";
import logoLockup from "@/assets/logo18.png.asset.json";
import logoBoca from "@/assets/logo20.png.asset.json";

import retrato from "@/assets/retrato.webp.asset.json";
import duoLaptop from "@/assets/duo-laptop.webp.asset.json";
import movimento from "@/assets/movimento.webp.asset.json";
import manifesto from "@/assets/manifesto.webp.asset.json";
import duoBlazer from "@/assets/duo-blazer.webp.asset.json";
import jornal from "@/assets/jornal.webp.asset.json";
import cafe from "@/assets/cafe.webp.asset.json";
import zebra from "@/assets/zebra.webp.asset.json";
import lipscard from "@/assets/lipscard.webp.asset.json";

/**
 * Assets oficiais do Liberte-se.
 * Logotipos e fotografias vêm exclusivamente do material oficial da marca
 * (brand book de rebranding + vídeo enviado). Nenhuma imagem externa ou gerada.
 */
export const logos = {
  signature: logoSignature.url,
  lockup: logoLockup.url,
  boca: logoBoca.url,
};

export const photos = {
  retrato: {
    src: retrato.url,
    alt: "Mulher olhando para o lado com pequenos bilhetes rosas sobre o rosto, editorial oficial do Liberte-se",
  },
  duoLaptop: {
    src: duoLaptop.url,
    alt: "Duas mulheres trabalhando juntas com notebook e celular, editorial oficial do Liberte-se",
  },
  movimento: {
    src: movimento.url,
    alt: "Duas mulheres em movimento, uma de branco e outra de preto, editorial em preto e branco do Liberte-se",
  },
  manifesto: {
    src: manifesto.url,
    alt: "Duas mulheres rindo durante o trabalho, registro do manifesto Liberte-se",
  },
  duoBlazer: {
    src: duoBlazer.url,
    alt: "Duas mulheres de blazer preto e vermelho, retrato oficial do Liberte-se",
  },
  jornal: {
    src: jornal.url,
    alt: "Detalhe de mão tatuada sobre jornal impresso do Liberte-se Club",
  },
  cafe: {
    src: cafe.url,
    alt: "Xícara branca marcada por batom vermelho, detalhe da identidade Liberte-se",
  },
  zebra: {
    src: zebra.url,
    alt: "Retrato em preto e branco de duas mulheres do Liberte-se lado a lado",
  },
  lipscard: {
    src: lipscard.url,
    alt: "Cartão com a frase: o clube para mulheres que decidiram ocupar o próprio lugar no mundo",
  },
};
