import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
  /** "default" matches the Home-page eyebrow style (green, 16px, medium); "muted" matches the About-page style (muted gold, 12px, semibold, wider tracking). */
  variant?: "default" | "muted";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "light",
  variant = "default",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-3",
        align === "center" && "items-center text-center",
        className
      )}
    >
      <p
        className={cn(
          "uppercase",
          variant === "muted"
            ? "text-xs font-semibold tracking-[2.16px] text-brand-gold-muted"
            : "text-sm font-medium tracking-[1px] sm:text-base",
          variant === "default" &&
            (tone === "dark" ? "text-brand-gold" : "text-brand-green")
        )}
      >
        {eyebrow}
      </p>
      <h2
        className={cn(
          "font-display text-4xl font-medium leading-tight sm:text-5xl",
          tone === "dark" ? "text-white" : "text-foreground"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "max-w-2xl text-base leading-relaxed",
            tone === "dark" ? "text-white/70" : "text-muted-foreground",
            align === "center" && "mx-auto"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
