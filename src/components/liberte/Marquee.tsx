import { cn } from "@/lib/utils";

type MarqueeProps = {
  items: string[];
  className?: string;
  duration?: number;
  separator?: string;
};

/**
 * Faixa horizontal infinita. O conteúdo é duplicado e a animação translada
 * exatamente -50%, garantindo loop sem salto em qualquer largura de tela.
 */
export function Marquee({ items, className, duration = 46, separator = "•" }: MarqueeProps) {
  const sequence = [...items, ...items];

  return (
    <div
      className={cn("relative w-full overflow-hidden pb-0 pt-5 md:pb-0 md:pt-7", className)}
      aria-label={items.join(", ")}
    >
      <div
        className="marquee-track hover:[animation-play-state:paused]"
        style={{ ["--marquee-duration" as string]: `${duration}s` }}
        aria-hidden="true"
      >
        {sequence.map((item, index) => (
          <span
            key={`${item}-${index}`}
            className="flex shrink-0 items-center gap-6 pr-6 font-bebas text-[1.75rem] font-bold leading-none tracking-[0.025em] md:gap-10 md:pr-10 md:text-[3.25rem]"
          >
            {item}
            <span className="font-sans text-[0.55rem] opacity-70 md:text-[0.8rem]">{separator}</span>
          </span>
        ))}
      </div>
    </div>
  );
}
