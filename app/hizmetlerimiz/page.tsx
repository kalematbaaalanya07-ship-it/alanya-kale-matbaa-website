"use client"

import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ArrowRight, MessageCircle } from 'lucide-react'
import { getAllServicesLocalized } from '@/lib/services'
import { useLanguage } from '@/components/language-provider'

const waLink = (text: string = '') =>
  `https://wa.me/905309305564?text=${encodeURIComponent(text)}`

export default function HizmetlerimizPage() {
  const { lang, t } = useLanguage()
  const services = getAllServicesLocalized(lang)
  const copy = t.services

  return (
    <main className="min-h-screen">
      <section className="relative bg-gradient-to-b from-accent/10 to-background py-20">
        <div className="mx-auto max-w-6xl px-4 text-center">
          <h1 className="font-heading text-4xl font-bold text-foreground md:text-5xl lg:text-6xl text-balance">{copy.pageTitle}</h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-foreground/80">{copy.pageSubtitle}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
              <a href="#teklif">{lang === 'tr' ? 'Hızlı Teklif Al' : lang === 'ru' ? 'Получить расчёт' : 'Get a Quick Quote'} <ArrowRight className="size-4" /></a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-foreground/30 bg-transparent text-foreground hover:bg-foreground/10">
              <a href={waLink(copy.pageTitle)} target="_blank" rel="noopener noreferrer"><MessageCircle className="size-4" /> WhatsApp</a>
            </Button>
          </div>
        </div>
      </section>
      <section className="border-b border-border bg-background py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Link key={service.id} href={`/hizmetlerimiz/${service.slug}`} className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-all duration-300 hover:border-accent hover:shadow-lg">
                <div className="relative h-48 w-full overflow-hidden bg-muted"><Image src={service.image} alt={service.title} fill className="object-cover transition-transform duration-300 group-hover:scale-105" /></div>
                <div className="flex flex-col gap-3 p-6">
                  <span className="inline-block w-fit rounded-full bg-accent/10 px-3 py-1 text-sm font-medium text-accent">{service.tag}</span>
                  <h3 className="font-heading text-lg font-semibold text-foreground transition-colors group-hover:text-accent">{service.title}</h3>
                  <p className="line-clamp-2 text-sm leading-relaxed text-foreground/70">{service.subtitle}</p>
                  <div className="mt-auto flex items-center gap-2 text-sm font-medium text-accent">{copy.viewDetails}<ArrowRight className="size-4 transition-transform group-hover:translate-x-1" /></div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section id="teklif" className="bg-accent py-16">
        <div className="mx-auto max-w-6xl px-4 text-center">
          <h2 className="font-heading text-3xl font-bold text-accent-foreground md:text-4xl text-balance">{copy.ctaTitle}</h2>
          <p className="mx-auto mt-4 max-w-2xl text-accent-foreground/90">{copy.ctaSubtitle}</p>
          <div className="mt-8 flex justify-center"><Button asChild size="lg" className="bg-accent-foreground text-accent hover:bg-accent-foreground/90"><a href={waLink(copy.ctaTitle)} target="_blank" rel="noopener noreferrer"><MessageCircle className="size-4" />{copy.ctaWhatsapp}</a></Button></div>
        </div>
      </section>
    </main>
  )
}

// Keep metadata in the route's static shell through the shared layout.
export const dynamic = 'force-static'
