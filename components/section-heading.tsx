import { cn } from "@/lib/utils"

export function SectionHeading({
  tag,
  title,
  subtitle,
  align = "center",
  dark = false,
}: {
  tag?: string
  title: string
  subtitle?: string
  align?: "center" | "left"
  dark?: boolean
}) {
  return (
    <div className={cn("flex flex-col gap-3", align === "center" ? "items-center text-center" : "items-start text-left")}>
      {tag && (
        <span className="inline-flex items-center rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-accent">
          {tag}
        </span>
      )}
      <h2
        className={cn(
          "font-heading text-3xl font-bold tracking-tight text-balance sm:text-4xl",
          dark ? "text-primary-foreground" : "text-foreground",
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={cn("max-w-2xl text-pretty leading-relaxed", dark ? "text-primary-foreground/70" : "text-muted-foreground")}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
