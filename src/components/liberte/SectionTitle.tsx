import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type SectionTitleProps = {
  eyebrow?: string;
  script?: string;
  title: ReactNode;
  className?: string;
  tone?: "ink" | "cream";
  as?: "h1" | "h2" | "h3";
};

export function SectionTitle({
  eyebrow,
  script,
  title,
  className,
  tone = "ink",
  as: Tag = "h2",
}: SectionTitleProps) {
  return (
    <div className={cn("max-w-4xl", className)}>
      {eyebrow ? (
        <p className={cn("eyebrow mb-5", tone === "cream" ? "text-cream/70" : "text-foreground/65")}>
          {eyebrow}
        </p>
      ) : null}
      <Tag className={cn("section-type", tone === "cream" ? "text-cream" : "text-foreground")}>
        {title}
      </Tag>
      {script ? (
        <p
          className={cn(
            "script mt-5 text-[1.65rem] md:text-[2.25rem]",
            tone === "cream" ? "text-rose" : "text-wine",
          )}
        >
          {script}
        </p>
      ) : null}
    </div>
  );
}
