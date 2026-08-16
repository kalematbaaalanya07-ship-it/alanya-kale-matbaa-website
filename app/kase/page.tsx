'use client'

import Image from 'next/image'
import { useLanguage } from '@/components/language-provider'
import { Button } from '@/components/ui/button'
import { waLink } from '@/lib/site'
import { Phone } from 'lucide-react'
import { QuoteForm } from '@/components/quote-form'

export default function KasePage() {
  const { t } = useLanguage()
  const content = t.kase

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-primary text-primary-foreground">
        <div className="absolute inset-0">
          <Image
            src="/images/remote-webp/remote-36.webp"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-primary/60" />
        </div>
        <div className="relative mx-auto flex max-w-6xl flex-col gap-4 px-4 py-10 sm:gap-5 sm:py-16">
          <div className="space-y-4">
            <div className="inline-block rounded-full border border-primary-foreground/30 px-4 py-1 text-sm font-medium backdrop-blur-sm">
              {content.tag}
            </div>
            <h1 className="font-heading text-3xl font-bold leading-tight sm:text-4xl md:text-5xl text-balance">
              {content.title}
            </h1>
            <p className="max-w-2xl text-lg text-primary-foreground/90 leading-relaxed">
              {content.subtitle}
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
              <a href={waLink()} target="_blank" rel="noopener noreferrer">
                <Phone className="size-5" />
                {t.cta.whatsapp}
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Quote Section */}
      <section className="mx-auto max-w-6xl px-4 py-10 sm:py-16">
        <QuoteForm />
      </section>

      {/* Introduction Section */}
      <section className="mx-auto max-w-6xl px-4 py-10 sm:py-20">
        <div className="prose prose-neutral max-w-none dark:prose-invert">
          <p className="text-lg leading-relaxed text-muted-foreground mb-8">
            {content.intro}
          </p>
        </div>
      </section>

      {/* Main Content with Images */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:py-24">
        <div className="space-y-16">
          {/* Section 1: Types */}
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="space-y-6">
              <h2 className="font-heading text-3xl font-bold text-foreground">
                {content.typesTitle}
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                {content.typesDesc.map((desc, idx) => (
                  <p key={idx}>{desc}</p>
                ))}
              </div>
            </div>
            <div className="relative aspect-square overflow-hidden rounded-2xl">
              <Image
                src="/images/remote-webp/remote-36.webp"
                alt="Profesyonel kaşe çeşitleri"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>

          {/* Section 2: Specifications */}
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="relative aspect-square overflow-hidden rounded-2xl order-2 lg:order-1">
              <Image
                src="/images/remote-webp/remote-29.webp"
                alt="Kaşe mürekkep renk seçenekleri"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="space-y-6 order-1 lg:order-2">
              <h2 className="font-heading text-3xl font-bold text-foreground">
                {content.specsTitle}
              </h2>
              <div className="space-y-4">
                {content.specs.map((spec, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center">
                      <span className="text-sm font-bold text-accent">{idx + 1}</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">{spec.title}</h3>
                      <p className="text-sm text-muted-foreground mt-1">{spec.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Section 3: Ink Colors */}
          <div className="bg-card border border-border rounded-2xl p-8 sm:p-12 space-y-8">
            <div className="space-y-4">
              <h2 className="font-heading text-3xl font-bold text-foreground">
                {content.colorsTitle}
              </h2>
              <p className="text-muted-foreground leading-relaxed max-w-2xl">
                {content.colorsDesc}
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-3">
              {content.colors.map((color, idx) => (
                <div key={idx} className="text-center space-y-4">
                  <div className={`h-24 rounded-lg border-4 ${color.class}`} />
                  <div>
                    <h3 className="font-semibold text-foreground">{color.name}</h3>
                    <p className="text-sm text-muted-foreground">{color.usage}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section 4: Process */}
          <div className="space-y-8">
            <h2 className="font-heading text-3xl font-bold text-foreground">
              {content.processTitle}
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {content.process.map((step, idx) => (
                <div key={idx} className="bg-card border border-border rounded-xl p-6 space-y-4">
                  <div className="inline-flex items-center justify-center size-10 rounded-full bg-accent/10">
                    <span className="text-lg font-bold text-accent">{idx + 1}</span>
                  </div>
                  <h3 className="font-semibold text-foreground text-lg">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-accent text-accent-foreground py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 text-center space-y-8">
          <div className="space-y-4">
            <h2 className="font-heading text-3xl font-bold sm:text-4xl">
              {content.ctaTitle}
            </h2>
            <p className="text-lg text-accent-foreground/90 max-w-2xl mx-auto">
              {content.ctaDesc}
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-background text-foreground hover:bg-background/90">
              <a href={waLink()} target="_blank" rel="noopener noreferrer">
                <Phone className="size-5" />
                {t.cta.whatsapp}
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
