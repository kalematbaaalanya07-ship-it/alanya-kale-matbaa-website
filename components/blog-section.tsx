"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CalendarDays } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SectionHeading } from "@/components/section-heading"
import { useLanguage } from "@/components/language-provider"
import { blogPosts } from "@/lib/blog-posts"

export function BlogSection({ showCta = true, limit }: { showCta?: boolean; limit?: number }) {
  const { t, lang } = useLanguage()
  const posts = typeof limit === "number" ? blogPosts.slice(0, limit) : blogPosts

  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <SectionHeading tag={t.blog.tag} title={t.blog.title} subtitle={t.blog.subtitle} />
      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {posts.map((post) => {
          const c = post.content[lang]
          return (
            <article
              key={post.slug}
              className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-shadow hover:shadow-md"
            >
              <Link href={`/blog/${post.slug}`} className="relative block aspect-[4/3] overflow-hidden">
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.imageAlt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
              </Link>
              <div className="flex flex-1 flex-col gap-3 p-6">
                <div className="flex items-center gap-3 text-xs">
                  <span className="rounded-full bg-accent/10 px-2.5 py-1 font-semibold text-accent">{c.category}</span>
                  <span className="inline-flex items-center gap-1 text-muted-foreground">
                    <CalendarDays className="size-3.5" />
                    {post.date}
                  </span>
                </div>
                <h3 className="font-heading text-lg font-semibold leading-snug text-foreground text-pretty">
                  <Link href={`/blog/${post.slug}`} className="transition-colors hover:text-accent">
                    {c.title}
                  </Link>
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{c.excerpt}</p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="mt-auto inline-flex items-center gap-1.5 pt-2 text-sm font-semibold text-accent transition-colors hover:text-accent/80"
                >
                  {t.blog.readMore}
                  <ArrowRight className="size-4" />
                </Link>
              </div>
            </article>
          )
        })}
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
