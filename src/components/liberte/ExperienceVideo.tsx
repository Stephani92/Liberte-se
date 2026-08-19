import { useEffect, useRef, useState } from "react";

import { video } from "@/lib/brand-assets";

/**
 * Vídeo oficial do Liberte-se. Só começa a carregar quando entra em tela,
 * roda mudo em loop e respeita prefers-reduced-motion.
 */
export function ExperienceVideo() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;
    if (typeof IntersectionObserver === "undefined") {
      setActive(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) setActive(entry.isIntersecting);
      },
      { threshold: 0.25 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;
    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (active && !reduced) void el.play().catch(() => undefined);
    else el.pause();
  }, [active]);

  return (
    <div ref={containerRef} className="relative aspect-[16/10] w-full overflow-hidden bg-ink md:aspect-[21/9]">
      <video
        ref={videoRef}
        poster={video.poster}
        muted
        loop
        playsInline
        preload="none"
        aria-label="Registro em vídeo dos encontros do Liberte-se"
        className="h-full w-full object-cover"
      >
        {active ? <source src={video.src} type="video/mp4" /> : null}
      </video>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/75 via-ink/15 to-transparent" />
    </div>
  );
}
