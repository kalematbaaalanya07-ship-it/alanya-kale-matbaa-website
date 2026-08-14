"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { PageHero } from "@/components/page-hero"
import { useLanguage } from "@/components/language-provider"

export default function PortfolioPage() {
  const { t } = useLanguage()
  const p = t.portfolio

  return (
    <>
      <PageHero tag={p.tag} title={p.title} subtitle={p.subtitle} />

      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {p.items.map((item) => (
            <div
              key={item.title}
              className="group relative aspect-square overflow-hidden rounded-xl border border-border"
            >
              {item.video ? (
                <iframe
                  src={item.video}
                  title={item.title}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <>
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={`${item.title} - Alanya Kale Matbaa portföy çalışması`}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent" />
                </>
              )}
              <div className="absolute bottom-0 left-0 flex flex-col gap-1 p-5">
                <span className="text-xs font-semibold uppercase tracking-wide text-accent">{item.category}</span>
                <h3 className="font-heading text-lg font-semibold text-primary-foreground">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16">
        <div className="flex flex-col items-center gap-5 rounded-2xl border border-border bg-card px-6 py-12 text-center">
          <h2 className="font-heading text-2xl font-bold tracking-tight text-balance sm:text-3xl">{t.home.ctaTitle}</h2>
          <p className="max-w-xl leading-relaxed text-muted-foreground text-pretty">{t.home.ctaSubtitle}</p>
          <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
            <Link href="/iletisim">
              {t.cta.contactUs}
              <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  )
}
