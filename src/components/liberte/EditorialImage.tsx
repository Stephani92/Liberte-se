import { cn } from "@/lib/utils";

type EditorialImageProps = {
  src: string;
  alt: string;
  className?: string;
  imageClassName?: string;
  ratio?: string;
  caption?: string;
  priority?: boolean;
  overlay?: boolean;
};

export function EditorialImage({
  src,
  alt,
  className,
  imageClassName,
  ratio = "aspect-[3/4]",
  caption,
  priority = false,
  overlay = false,
}: EditorialImageProps) {
  return (
    <figure className={cn("group relative", className)}>
      <div className={cn("relative overflow-hidden bg-sand", ratio)}>
        <img
          src={src}
          alt={alt}
          loading={priority ? "eager" : "lazy"}
          decoding={priority ? "sync" : "async"}
          fetchPriority={priority ? "high" : "auto"}
          className={cn(
            "h-full w-full object-cover transition-transform duration-[1600ms] ease-out will-change-transform group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100",
            imageClassName,
          )}
        />
        {overlay ? (
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent" />
        ) : null}
      </div>
      {caption ? (
        <figcaption className="eyebrow mt-4 text-foreground/65">{caption}</figcaption>
      ) : null}
    </figure>
  );
}
