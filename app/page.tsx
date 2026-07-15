"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Zap, Layers, Clock, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SectionHeading } from "@/components/section-heading"
import { ServiceCard } from "@/components/service-card"
import { QuoteForm } from "@/components/quote-form"
import { useLanguage } from "@/components/language-provider"

const FEATURE_ICONS = [Zap, Layers, Clock]

export default function HomePage() {
  const { t } = useLanguage()

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-primary text-primary-foreground">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-print.png"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-25"
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
              <Link href="/hizmetlerimiz">{t.cta.viewServices}</Link>
            </Button>
          </div>
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
                <h3 className="font-heading text-lg font-semibold text-foreground">{feature.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{feature.desc}</p>
              </div>
            )
          })}
        </div>
      </section>

      {/* Services preview */}
      <section className="bg-secondary/50 py-16">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHeading tag={t.home.servicesTitle} title={t.services.title} subtitle={t.home.servicesSubtitle} />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {t.services.items.slice(0, 3).map((item) => (
              <ServiceCard key={item.id} title={item.title} desc={item.desc} image={item.image} />
            ))}
          </div>
          <div className="mt-8 flex justify-center">
            <Button asChild variant="outline" size="lg">
              <Link href="/hizmetlerimiz">
                {t.cta.viewServices}
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Machine showcase */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
            <Image
              src="/images/digital-press.png"
              alt={t.home.machineTitle}
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

      {/* Quote form */}
      <section id="teklif" className="bg-primary py-16">
        <div className="mx-auto grid max-w-6xl items-start gap-10 px-4 lg:grid-cols-2">
          <div className="flex flex-col gap-4 lg:pt-4">
            <SectionHeading tag={t.cta.quote} title={t.home.quoteTitle} subtitle={t.home.quoteSubtitle} align="left" dark />
          </div>
          <div className="rounded-2xl bg-card p-6 shadow-xl sm:p-8">
            <QuoteForm />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="flex flex-col items-center gap-5 rounded-2xl border border-border bg-card px-6 py-12 text-center">
          <SectionHeading title={t.home.ctaTitle} subtitle={t.home.ctaSubtitle} />
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
