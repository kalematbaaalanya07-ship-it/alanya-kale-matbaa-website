export function PageHero({ tag, title, subtitle }: { tag?: string; title: string; subtitle?: string }) {
  return (
    <section className="border-b border-border bg-primary text-primary-foreground">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-14 sm:py-16">
        {tag && (
          <span className="inline-flex w-fit items-center rounded-full bg-accent/20 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-accent">
            {tag}
          </span>
        )}
        <h1 className="font-heading text-3xl font-extrabold tracking-tight text-balance sm:text-4xl md:text-5xl">
          {title}
        </h1>
        {subtitle && <p className="max-w-2xl text-lg leading-relaxed text-primary-foreground/80 text-pretty">{subtitle}</p>}
      </div>
    </section>
  )
}
