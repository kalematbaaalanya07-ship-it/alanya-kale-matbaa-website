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

const FEATURE_ICONS = [Zap, Layers, Clock]

export default function HomePage() {
  const { t } = useLanguage()

  return (
    <>
      {/* Logo and Banner */}
      <section className="border-b border-border bg-card">
        <div className="mx-auto flex max-w-6xl items-center gap-4 px-4 py-6">
          <div className="flex-shrink-0">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/kalematbaalogo-AbWSkSjhTHWJ1LPfuyZtevQ7QDGmWM.jpg"
              alt="Kale Matbaa Alanya Logo"
              width={120}
              height={120}
              className="h-auto w-16 sm:w-20 lg:w-28"
            />
          </div>
          <div className="flex-1">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/anaekranbanner-IJmVeFDFJ6qnV95AYTMeBYXe0QJYk1.jpg"
              alt="Matbaacılık Tarihi - Printing History Banner"
              width={800}
              height={150}
              className="h-auto w-full object-cover rounded-lg"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 700px"
            />
          </div>
        </div>
      </section>

      {/* Hero */}
      <section className="relative overflow-hidden bg-primary text-primary-foreground">
        <div className="absolute inset-0">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dijitalbask%C4%B11-jDXUlRp0aFwGBm1Cx5XapB1nZS1rrD.jpeg"
            alt="Konica Minolta AccurioPrint Dijital Baskı Makinesi"
            fill
            priority
            sizes="100vw"
            className="object-contain object-center opacity-[0.75] scale-150"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-primary/60" />
        </div>
        <div className="relative mx-auto flex max-w-6xl flex-col gap-6 px-4 py-20 sm:py-28">
          <span className="inline-flex w-fit items-center rounded-full bg-accent/20 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-accent">
            {t.home.heroTag}
          </span>
          <h1 className="max-w-3xl font-heading text-4xl font-extrabold leading-tight tracking-tight text-balance sm:text-5xl md:text-6xl">
            {t.home.heroTitle}
          </h1>
          <p className="max-w-xl text-lg leading-relaxed text-primary-foreground/80 text-pretty">{t.home.heroSubtitle}</p>
          <div className="flex flex-wrap gap-3">
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
              <Link href="#teklif">
                {t.cta.quote}
                <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10"
            >
              <a href={waLink(t.quote.intro)} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="size-4" />
                {t.cta.whatsapp}
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* GEO-Optimized Intro */}
      <section className="border-b border-border bg-background">
        <div className="mx-auto max-w-6xl px-4 py-8 sm:py-12">
          <p className="text-base sm:text-lg leading-relaxed text-foreground/80 max-w-3xl">
            <strong>Alanya'da acil baskı veya profesyonel dijital & ofset baskı mı arıyorsunuz?</strong> Kale Matbaa, Alanya Şekerhane'de 35+ yıllık tecrübesiyle 
            aynı gün teslim, ücretsiz tasarım ve Konica Minolta AccurioPrint C4065 kalitesiyle kaşe, kartvizit, broşür, katalog ve menü baskı hizmetleri 
            sunmaktadır. Mahmutlar, Oba, Cikcilli, Konaklı ve tüm Antalya bölgesine hizmet vermekteyiz.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Button asChild variant="outline" size="sm">
              <Link href="/kase">
                Profesyonel Kaşe Basımı
                <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="sm">
              <Link href="/hizmetlerimiz">
                Tüm Hizmetler
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-border bg-card">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-4 py-10 md:grid-cols-4">
          {t.about.stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center gap-1 text-center">
              <span className="font-heading text-3xl font-extrabold text-accent sm:text-4xl">{stat.value}</span>
              <span className="text-sm font-medium text-muted-foreground">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-6xl px-4 py-16">
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

      {/* Machine showcase */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/c4065-fHQ1NXeNquATKMhnAaJHvVwh3wNxjX.jpg"
              alt="Konica Minolta AccurioPrint C4065 profesyonel dijital baskı makinesi - Alanya Kale Matbaa"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="flex flex-col gap-4">
            <span className="inline-flex w-fit items-center rounded-full bg-brand-magenta/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand-magenta">
              {t.home.machineTag}
            </span>
            <h2 className="font-heading text-3xl font-bold tracking-tight text-balance">{t.home.machineTitle}</h2>
            <p className="leading-relaxed text-muted-foreground">{t.home.machineDesc}</p>
            <ul className="mt-2 flex flex-col gap-3">
              {t.home.machineSpecs.map((spec) => (
                <li key={spec} className="flex items-start gap-2.5 text-sm text-foreground">
                  <Check className="mt-0.5 size-4 shrink-0 text-accent" />
                  {spec}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

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
