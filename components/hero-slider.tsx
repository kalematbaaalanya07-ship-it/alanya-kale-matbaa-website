"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

type Slide = {
  image: string
  href: string
  alt: string
}

const SLIDES: Record<string, Slide[]> = {
  tr: [
    { image: "/images/slides/kaseslide.jpg", href: "/kase", alt: "Profesyonel Kaşe Baskısı Alanya" },
    { image: "/images/slides/brosurslide.jpg", href: "/hizmetlerimiz/brosur-baski", alt: "Broşür Baskısı Alanya" },
    { image: "/images/slides/katalogslide.jpg", href: "/hizmetlerimiz/katalog-baski", alt: "Katalog Baskısı Alanya" },
    { image: "/images/slides/kartvizitslide.jpg", href: "/hizmetlerimiz/kartvizit-baski", alt: "Kartvizit Baskısı Alanya" },
    { image: "/images/slides/davetiyeslide.jpg", href: "/hizmetlerimiz/davetiye-baski", alt: "Davetiye Baskısı Alanya" },
  ],
  en: [
    { image: "/images/slides/stampslide.jpg", href: "/kase?lang=en", alt: "Professional Stamp Printing Alanya" },
    { image: "/images/slides/broshureslide.jpg", href: "/hizmetlerimiz/brosur-baski?lang=en", alt: "Brochure Printing Alanya" },
    { image: "/images/slides/catalogslide.jpg", href: "/hizmetlerimiz/katalog-baski?lang=en", alt: "Catalog Printing Alanya" },
    { image: "/images/slides/businescardslide.jpg", href: "/hizmetlerimiz/kartvizit-baski?lang=en", alt: "Business Card Printing Alanya" },
    { image: "/images/slides/invitationslide.jpg", href: "/hizmetlerimiz/davetiye-baski?lang=en", alt: "Invitation Card Printing Alanya" },
  ],
  ru: [
    { image: "/images/slides/rkaseslide.jpg", href: "/kase?lang=ru", alt: "Профессиональная Печать Штампов Аланья" },
    { image: "/images/slides/rbrosurslide.jpg", href: "/hizmetlerimiz/brosur-baski?lang=ru", alt: "Печать Брошюр Аланья" },
    { image: "/images/slides/rkatalogslide.jpg", href: "/hizmetlerimiz/katalog-baski?lang=ru", alt: "Печать Каталогов Аланья" },
    { image: "/images/slides/rkartvizitslide.jpg", href: "/hizmetlerimiz/kartvizit-baski?lang=ru", alt: "Печать Визиток Аланья" },
    { image: "/images/slides/rdavetiyeslide.jpg", href: "/hizmetlerimiz/davetiye-baski?lang=ru", alt: "Печать Приглашений Аланья" },
  ],
}

const CTA_LABEL: Record<string, string> = {
  tr: "HEMEN İNCELE",
  en: "VIEW NOW",
  ru: "СМОТРЕТЬ",
}

export function HeroSlider() {
  const { lang } = useLanguage()
  const slides = SLIDES[lang] ?? SLIDES.tr
  const ctaLabel = CTA_LABEL[lang] ?? CTA_LABEL.tr

  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)

  const next = useCallback(() => setCurrent((c) => (c + 1) % slides.length), [slides.length])
  const prev = useCallback(() => setCurrent((c) => (c - 1 + slides.length) % slides.length), [slides.length])

  useEffect(() => {
    setCurrent(0)
  }, [lang])

  useEffect(() => {
    if (paused) return
    const id = setInterval(next, 3000)
    return () => clearInterval(id)
  }, [next, paused])

  return (
    <div
      className="relative w-full overflow-hidden bg-black"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Slides */}
      <div className="relative w-full" style={{ aspectRatio: "1440/400" }}>
        {slides.map((slide, i) => (
          <div
            key={slide.image}
            className="absolute inset-0 transition-opacity duration-700"
            style={{ opacity: i === current ? 1 : 0, pointerEvents: i === current ? "auto" : "none" }}
          >
            <Image
              src={slide.image}
              alt={slide.alt}
              fill
              priority={i === 0}
              sizes="100vw"
              className="object-cover object-center"
            />
            {/* CTA button */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
              <Link
                href={slide.href}
                className="inline-flex items-center rounded-full bg-white/90 px-6 py-2.5 text-sm font-bold tracking-wide text-gray-900 shadow-lg transition hover:bg-white hover:scale-105 active:scale-95"
              >
                {ctaLabel}
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Prev arrow */}
      <button
        type="button"
        onClick={prev}
        aria-label="Önceki slayt"
        className="absolute left-3 top-1/2 -translate-y-1/2 flex size-10 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-sm transition hover:bg-black/60"
      >
        <ChevronLeft className="size-6" />
      </button>

      {/* Next arrow */}
      <button
        type="button"
        onClick={next}
        aria-label="Sonraki slayt"
        className="absolute right-3 top-1/2 -translate-y-1/2 flex size-10 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-sm transition hover:bg-black/60"
      >
        <ChevronRight className="size-6" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 gap-1.5">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setCurrent(i)}
            aria-label={`Slayt ${i + 1}`}
            className="h-1.5 rounded-full transition-all"
            style={{
              width: i === current ? "1.75rem" : "0.375rem",
              background: i === current ? "white" : "rgba(255,255,255,0.5)",
            }}
          />
        ))}
      </div>
    </div>
  )
}
