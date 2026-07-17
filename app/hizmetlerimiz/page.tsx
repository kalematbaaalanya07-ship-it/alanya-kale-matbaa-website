"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { PageHero } from "@/components/page-hero"
import { SectionHeading } from "@/components/section-heading"
import { ServiceCard } from "@/components/service-card"
import { FaqSection } from "@/components/faq-section"
import { useLanguage } from "@/components/language-provider"

export default function ServicesPage() {
  const { t } = useLanguage()
  const s = t.services

  return (
    <>
      <PageHero tag={s.tag} title={s.title} subtitle={s.subtitle} />

      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {s.items.map((item) => (
            <ServiceCard key={item.id} title={item.title} desc={item.desc} image={item.image} />
          ))}
        </div>
      </section>

      <section className="bg-secondary/50 py-16">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHeading title={s.paperTitle} subtitle={s.paperSubtitle} />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {s.paperWeights.map((p) => (
              <div key={p.weight} className="flex flex-col gap-2 rounded-xl border border-border bg-card p-6">
                <span className="font-heading text-3xl font-extrabold text-accent">{p.weight}</span>
                <span className="text-sm leading-relaxed text-muted-foreground">{p.use}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FaqSection />

      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="flex flex-col items-center gap-5 rounded-2xl bg-primary px-6 py-12 text-center text-primary-foreground">
          <SectionHeading title={t.home.ctaTitle} subtitle={t.home.ctaSubtitle} dark />
          <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
            <Link href="/iletisim">
              {t.cta.getOffer}
              <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  )
}
