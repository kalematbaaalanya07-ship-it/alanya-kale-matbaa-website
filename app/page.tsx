"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Zap, Layers, Clock, Check, PenTool, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SectionHeading } from "@/components/section-heading"
import { ServiceCard } from "@/components/service-card"
import { QuoteForm } from "@/components/quote-form"
import { TestimonialsSection } from "@/components/testimonials-section"
import { FaqSection } from "@/components/faq-section"
import { BlogSection } from "@/components/blog-section"
import { useLanguage } from "@/components/language-provider"
import { waLink } from "@/lib/site"
import { HeroSlider } from "@/components/hero-slider"

const FEATURE_ICONS = [Zap, Layers, Clock]

export default function HomePage() {
  const { t } = useLanguage()

  return (
    <>
      {/* Full-width Slider */}
      <section className="w-full overflow-hidden border-b border-border">
        <HeroSlider />
      </section>

      {/* Reference-style introduction */}
      <section className="border-b border-border bg-background">
        <div className="mx-auto grid max-w-6xl items-stretch lg:grid-cols-2">
          <div className="flex flex-col justify-center gap-5 px-4 py-10 sm:px-8 sm:py-14 lg:px-10 lg:py-12">
            <h1 className="font-heading text-4xl font-extrabold leading-[1.05] tracking-tight text-balance sm:text-5xl">
              {t.home.introTitle}
            </h1>
            <p className="max-w-xl text-lg font-medium leading-relaxed text-foreground/85 text-pretty">{t.home.introDesc}</p>
            <div className="flex flex-wrap gap-2">
              <Button asChild size="sm" className="bg-accent text-accent-foreground hover:bg-accent/90">
                <a href={waLink(t.quote.intro)} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="size-4" />
                  {t.cta.whatsapp}
                </a>
              </Button>
              <Button asChild size="sm" className="bg-brand-magenta text-brand-magenta-foreground hover:bg-brand-magenta/90">
                <Link href="/#teklif">
                  {t.cta.getOffer}
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button asChild size="sm" variant="outline">
                <Link href="/hizmetlerimiz">
                  {t.cta.viewServices}
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
            </div>
            <div className="border border-border bg-card px-4 py-3 shadow-sm">
              <p className="font-heading text-base font-bold text-foreground">{t.freeDesign.title}</p>
              <p className="mt-1 text-xs text-muted-foreground">{t.freeDesign.desc.split(".")[0]}.</p>
              <div className="mt-4 grid grid-cols-5 items-start gap-1 text-center text-[10px] font-medium text-muted-foreground">
                {[PenTool, Layers, Check, Zap, ArrowRight].map((Icon, index) => (
                  <div key={index} className="flex flex-col items-center gap-1">
                    <span className="flex size-9 items-center justify-center rounded-full border border-border bg-background text-accent"><Icon className="size-4" /></span>
                    <span>{t.home.processLabels[index]}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="relative min-h-[320px] overflow-hidden sm:min-h-[440px] lg:min-h-[560px]">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dijitalbask%C4%B11-Cd7L7DCvoRhZFUjIAgSuwb8yLEMReS.jpeg"
              alt="Konica Minolta AccurioPrint C4065 dijital baskı makinesi"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-background via-background/55 to-transparent" />
            <div className="absolute bottom-6 right-5 max-w-[280px] rounded-xl bg-card/95 p-4 pl-16 shadow-xl sm:bottom-8 sm:right-8">
              <span className="absolute left-4 top-1/2 flex size-10 -translate-y-1/2 items-center justify-center rounded-full border-4 border-yellow-300 text-foreground"><Clock className="size-5" /></span>
              <p className="font-heading text-lg font-bold text-foreground">{t.home.urgentTitle}</p>
              <p className="font-heading text-base font-bold text-foreground">{t.home.urgentSubtitle}</p>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{t.home.urgentDesc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-border bg-card">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-4 py-8 md:grid-cols-4 md:py-10">
          {t.about.stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center gap-1 text-center">
              <span className="font-heading text-3xl font-extrabold text-accent sm:text-4xl">{stat.value}</span>
              <span className="text-sm font-medium text-muted-foreground">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-6xl px-4 py-14 sm:py-16">
        <div className="grid gap-6 md:grid-cols-3">
          {t.home.features.map((feature, i) => {
            const Icon = FEATURE_ICONS[i]
            return (
              <div key={feature.title} className="flex flex-col gap-3 rounded-xl border border-border bg-card p-6">
                <span className="flex size-11 items-center justify-center rounded-lg bg-accent/10 text-accent">
                  <Icon className="size-5" />
                </span>
                <h2 className="font-heading text-lg font-semibold text-foreground">{feature.title}</h2>
                <p className="text-sm leading-relaxed text-muted-foreground">{feature.desc}</p>
              </div>
            )
          })}
        </div>
      </section>

      {/* Removed duplicate lower machine showcase; the reference-style intro now owns this content. */}

      {/* Free design USP */}
      <section className="bg-primary py-16 text-primary-foreground">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 lg:grid-cols-2">
          <div className="flex flex-col gap-4">
            <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-brand-magenta px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand-magenta-foreground">
              <PenTool className="size-3.5" />
              {t.freeDesign.tag}
            </span>
            <h2 className="font-heading text-3xl font-bold tracking-tight text-balance">{t.freeDesign.title}</h2>
            <p className="leading-relaxed text-primary-foreground/80">{t.freeDesign.desc}</p>
            <Button asChild size="lg" className="mt-2 w-fit bg-accent text-accent-foreground hover:bg-accent/90">
              <a href={waLink(t.freeDesign.title)} target="_blank" rel="noopener noreferrer">
                {t.freeDesign.cta}
                <ArrowRight className="size-4" />
              </a>
            </Button>
          </div>
          <ul className="grid gap-4 sm:grid-cols-2">
            {t.freeDesign.points.map((point) => (
              <li
                key={point}
                className="flex items-start gap-3 rounded-xl border border-primary-foreground/10 bg-primary-foreground/5 p-4 text-sm leading-relaxed"
              >
                <Check className="mt-0.5 size-4 shrink-0 text-accent" />
                {point}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialsSection />

      {/* Quote form */}
      <section id="teklif" className="bg-secondary/50 py-16">
        <div className="mx-auto grid max-w-6xl items-start gap-10 px-4 lg:grid-cols-2">
          <div className="flex flex-col gap-4 lg:pt-4">
            <SectionHeading tag={t.cta.quote} title={t.home.quoteTitle} subtitle={t.home.quoteSubtitle} align="left" />
          </div>
          <div className="rounded-2xl bg-card p-6 shadow-xl sm:p-8">
            <QuoteForm />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FaqSection />

      {/* Blog teaser */}
      <BlogSection />

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-4 pb-16">
        <div className="flex flex-col items-center gap-5 rounded-2xl border border-border bg-card px-6 py-12 text-center">
          <SectionHeading title={t.home.ctaTitle} subtitle={t.home.ctaSubtitle} />
          <div className="flex flex-wrap justify-center gap-3">
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
              <a href={waLink(t.quote.intro)} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="size-4" />
                {t.cta.whatsapp}
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/iletisim">
                {t.cta.contactUs}
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
