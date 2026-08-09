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
    { image: "/images/slides/kaseslide.jpg", href: "/kase", alt: "Professional Stamp Printing Alanya" },
    { image: "/images/slides/brosurslide.jpg", href: "/hizmetlerimiz/brosur-baski", alt: "Brochure Printing Alanya" },
    { image: "/images/slides/katalogslide.jpg", href: "/hizmetlerimiz/katalog-baski", alt: "Catalog Printing Alanya" },
    { image: "/images/slides/kartvizitslide.jpg", href: "/hizmetlerimiz/kartvizit-baski", alt: "Business Card Printing Alanya" },
    { image: "/images/slides/davetiyeslide.jpg", href: "/hizmetlerimiz/davetiye-baski", alt: "Invitation Card Printing Alanya" },
  ],
  ru: [
    { image: "/images/slides/kaseslide.jpg", href: "/kase", alt: "Профессиональная Печать Штампов Аланья" },
    { image: "/images/slides/brosurslide.jpg", href: "/hizmetlerimiz/brosur-baski", alt: "Печать Брошюр Аланья" },
    { image: "/images/slides/katalogslide.jpg", href: "/hizmetlerimiz/katalog-baski", alt: "Печать Каталогов Аланья" },
    { image: "/images/slides/kartvizitslide.jpg", href: "/hizmetlerimiz/kartvizit-baski", alt: "Печать Визиток Аланья" },
    { image: "/images/slides/davetiyeslide.jpg", href: "/hizmetlerimiz/davetiye-baski", alt: "Печать Приглашений Аланья" },
  ],
}

export function HeroSlider() {
  const { lang } = useLanguage()
  const slides = SLIDES[lang] ?? SLIDES.tr

  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)

  const next = useCallback(() => setCurrent((c) => (c + 1) % slides.length), [slides.length])
  const prev = useCallback(() => setCurrent((c) => (c - 1 + slides.length) % slides.length), [slides.length])

  useEffect(() => {
    setCurrent(0)
  }, [lang])

  useEffect(() => {
    if (paused) return
    const id = setInterval(next, 3500)
    return () => clearInterval(id)
  }, [next, paused])

  return (
    <div
      className="relative w-full overflow-hidden bg-background"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Slides */}
      <div
        className="relative w-full"
        style={{ aspectRatio: "16/2.5" }}
      >
        {slides.map((slide, i) => (
          <Link
            key={slide.image}
            href={slide.href}
            tabIndex={i === current ? 0 : -1}
            aria-hidden={i !== current}
            className="absolute inset-0 block transition-opacity duration-700 focus:outline-none"
            style={{ opacity: i === current ? 1 : 0, pointerEvents: i === current ? "auto" : "none" }}
          >
            <Image
              src={slide.image}
              alt={slide.alt}
              fill
              priority={i === 0}
              sizes="100vw"
              className="object-contain object-center"
            />
          </Link>
        ))}
      </div>

      {/* Prev arrow */}
      <button
        type="button"
        onClick={(e) => { e.preventDefault(); prev() }}
        aria-label="Önceki slayt"
        className="absolute left-[14%] top-1/2 z-10 flex size-9 -translate-y-1/2 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-sm transition hover:bg-black/60 md:left-[23%]"
      >
        <ChevronLeft className="size-5" />
      </button>

      {/* Next arrow */}
      <button
        type="button"
        onClick={(e) => { e.preventDefault(); next() }}
        aria-label="Sonraki slayt"
        className="absolute right-[14%] top-1/2 z-10 flex size-9 -translate-y-1/2 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-sm transition hover:bg-black/60 md:right-[23%]"
      >
        <ChevronRight className="size-5" />
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
