"use client"

import Link from "next/link"
import { ArrowRight, CalendarDays } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SectionHeading } from "@/components/section-heading"
import { useLanguage } from "@/components/language-provider"

export function BlogSection({ showCta = true }: { showCta?: boolean }) {
  const { t } = useLanguage()

  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <SectionHeading tag={t.blog.tag} title={t.blog.title} subtitle={t.blog.subtitle} />
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {t.blog.items.map((post) => (
          <article
            key={post.title}
            className="flex flex-col gap-3 rounded-2xl border border-border bg-card p-6 transition-shadow hover:shadow-md"
          >
            <div className="flex items-center gap-3 text-xs">
              <span className="rounded-full bg-accent/10 px-2.5 py-1 font-semibold text-accent">{post.category}</span>
              <span className="inline-flex items-center gap-1 text-muted-foreground">
                <CalendarDays className="size-3.5" />
                {post.date}
              </span>
            </div>
            <h3 className="font-heading text-lg font-semibold leading-snug text-foreground text-pretty">
              {post.title}
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground">{post.excerpt}</p>
            <span className="mt-auto inline-flex items-center gap-1.5 pt-2 text-sm font-semibold text-muted-foreground/70">
              {t.blog.soon}
            </span>
          </article>
        ))}
      </div>
      {showCta && (
        <div className="mt-8 flex justify-center">
          <Button asChild variant="outline" size="lg">
            <Link href="/blog">
              {t.blog.title}
              <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>
      )}
    </section>
  )
}
