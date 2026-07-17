"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, CalendarDays, Check, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/components/language-provider"
import { blogPosts, getPost } from "@/lib/blog-posts"
import { site, waLink } from "@/lib/site"

const labels = {
  tr: { back: "Tüm Yazılar", cta: "WhatsApp'tan Teklif Al", related: "Diğer Ürün Yazıları" },
  en: { back: "All Articles", cta: "Get a Quote on WhatsApp", related: "Other Product Articles" },
  ru: { back: "Все статьи", cta: "Получить предложение в WhatsApp", related: "Другие статьи о продукции" },
}

export function BlogArticle({ slug }: { slug: string }) {
  const { t, lang } = useLanguage()
  const post = getPost(slug)
  if (!post) return null

  const c = post.content[lang]
  const l = labels[lang]
  const others = blogPosts.filter((p) => p.slug !== slug)

  return (
    <article className="pb-16">
      {/* Header */}
      <header className="border-b border-border bg-primary text-primary-foreground">
        <div className="mx-auto max-w-3xl px-4 py-12">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-primary-foreground/70 transition-colors hover:text-primary-foreground"
          >
            <ArrowLeft className="size-4" />
            {l.back}
          </Link>
          <div className="mt-6 flex items-center gap-3 text-xs">
            <span className="rounded-full bg-accent px-2.5 py-1 font-semibold text-accent-foreground">{c.category}</span>
            <span className="inline-flex items-center gap-1 text-primary-foreground/70">
              <CalendarDays className="size-3.5" />
              {post.date}
            </span>
          </div>
          <h1 className="mt-4 font-heading text-3xl font-extrabold leading-tight text-balance sm:text-4xl">
            {c.title}
          </h1>
        </div>
      </header>

      {/* Cover image */}
      <div className="mx-auto max-w-3xl px-4">
        <div className="relative -mt-6 aspect-[16/9] overflow-hidden rounded-2xl border border-border shadow-sm">
          <Image
            src={post.image || "/placeholder.svg"}
            alt={post.imageAlt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 768px"
            priority
          />
        </div>
      </div>

      {/* Body */}
      <div className="mx-auto max-w-3xl px-4 py-10">
        {c.intro.map((p) => (
          <p key={p} className="mb-4 leading-relaxed text-muted-foreground">
            {p}
          </p>
        ))}

        {c.sections.map((section) => (
          <section key={section.heading} className="mt-8">
            <h2 className="font-heading text-xl font-bold text-foreground">{section.heading}</h2>
            {section.paragraphs?.map((p) => (
              <p key={p} className="mt-3 leading-relaxed text-muted-foreground">
                {p}
              </p>
            ))}
            {section.bullets && (
              <ul className="mt-4 flex flex-col gap-2.5">
                {section.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2.5 text-muted-foreground">
                    <Check className="mt-0.5 size-4 shrink-0 text-accent" />
                    <span className="leading-relaxed">{b}</span>
                  </li>
                ))}
              </ul>
            )}
          </section>
        ))}

        {/* CTA */}
        <div className="mt-10 flex flex-col gap-4 rounded-2xl bg-secondary p-6 text-center sm:p-8">
          <p className="leading-relaxed text-secondary-foreground text-pretty">{c.cta}</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button asChild size="lg">
              <a href={waLink(c.title)} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="size-4" />
                {l.cta}
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/iletisim">{t.nav.contact}</Link>
            </Button>
          </div>
        </div>

        {/* Related */}
        {others.length > 0 && (
          <div className="mt-12">
            <h2 className="font-heading text-lg font-bold text-foreground">{l.related}</h2>
            <div className="mt-4 grid gap-4 sm:grid-cols-3">
              {others.map((p) => (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  className="rounded-xl border border-border bg-card p-4 transition-colors hover:border-accent"
                >
                  <span className="text-xs font-semibold text-accent">{p.content[lang].category}</span>
                  <p className="mt-1 text-sm font-medium leading-snug text-foreground">{p.content[lang].title}</p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </article>
  )
}
