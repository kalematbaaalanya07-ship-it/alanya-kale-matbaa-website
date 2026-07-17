"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { PageHero } from "@/components/page-hero"
import { ProductCard } from "@/components/product-card"
import { products } from "@/lib/products"
import { useLanguage } from "@/components/language-provider"

const labels = {
  tr: {
    tag: "Ürünlerimiz",
    title: "Matbaa Ürünlerimiz",
    subtitle: "Alanya'nın En Kaliteli Baskı Çözümleri",
    ctaTitle: "Aradığınız ürünü bulamadınız mı?",
    ctaSubtitle: "İhtiyacınıza özel baskı çözümleri için bizimle iletişime geçin.",
    contactUs: "İletişime Geçin",
  },
  en: {
    tag: "Our Products",
    title: "Our Printing Products",
    subtitle: "Alanya's Highest Quality Printing Solutions",
    ctaTitle: "Can't find what you're looking for?",
    ctaSubtitle: "Get in touch with us for custom printing solutions tailored to your needs.",
    contactUs: "Contact Us",
  },
  ru: {
    tag: "Наша продукция",
    title: "Наша полиграфическая продукция",
    subtitle: "Самые качественные решения печати в Аланье",
    ctaTitle: "Не нашли то, что искали?",
    ctaSubtitle: "Свяжитесь с нами для индивидуальных решений печати под ваши задачи.",
    contactUs: "Связаться с нами",
  },
}

export default function ProductsPage() {
  const { lang, t } = useLanguage()
  const l = labels[lang]

  return (
    <>
      <PageHero tag={l.tag} title={l.title} subtitle={l.subtitle} />

      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard
              key={product.slug}
              content={product.content[lang]}
              image={product.image}
              ctaLabel={t.cta.getOffer}
              quoteIntro={t.quote.intro}
            />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16">
        <div className="flex flex-col items-center gap-5 rounded-2xl border border-border bg-card px-6 py-12 text-center">
          <h2 className="font-heading text-2xl font-bold tracking-tight text-balance sm:text-3xl">{l.ctaTitle}</h2>
          <p className="max-w-xl leading-relaxed text-muted-foreground text-pretty">{l.ctaSubtitle}</p>
          <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
            <Link href="/iletisim">
              {l.contactUs}
              <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  )
}
