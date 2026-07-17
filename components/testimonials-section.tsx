"use client"

import { Star, Quote } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"
import { useLanguage } from "@/components/language-provider"

export function TestimonialsSection() {
  const { t } = useLanguage()

  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <SectionHeading tag={t.testimonials.tag} title={t.testimonials.title} subtitle={t.testimonials.subtitle} />
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {t.testimonials.items.map((item) => (
          <figure key={item.name} className="flex flex-col gap-4 rounded-2xl border border-border bg-card p-6">
            <Quote className="size-8 text-accent/40" aria-hidden="true" />
            <div className="flex items-center gap-1" aria-label="5/5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="size-4 fill-brand-magenta text-brand-magenta" aria-hidden="true" />
              ))}
            </div>
            <blockquote className="text-sm leading-relaxed text-foreground text-pretty">{item.text}</blockquote>
            <figcaption className="mt-auto border-t border-border pt-4">
              <p className="font-heading text-sm font-semibold text-foreground">{item.name}</p>
              <p className="text-xs text-muted-foreground">{item.role}</p>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}
