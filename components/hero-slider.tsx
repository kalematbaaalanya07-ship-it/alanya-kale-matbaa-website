"use client"

import { useState, useEffect, useCallback, useRef } from "react"
import type { TouchEvent } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

type Slide = {
  image: string
  mobileImage: string
  href: string
  alt: string
}

const SLIDES: Record<string, Slide[]> = {
  tr: [
    { image: "/images/slides/kaseslide.webp", mobileImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/mka%C5%9Fe-59Rrvq75OfRZAdDnSwczMbfkxE6yxq.png", href: "/kase", alt: "Profesyonel Kaşe Baskısı Alanya" },
    { image: "/images/slides/brosurslide.webp", mobileImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/mbro%C5%9F%C3%BCr-LX7cgxGFYN1fheajpX835pvXRsYe0G.png", href: "/hizmetlerimiz/brosur-baski", alt: "Broşür Baskısı Alanya" },
    { image: "/images/slides/katalogslide.webp", mobileImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/mkatalog-4UrTA0WDE8V3D5zVYYc4XmbCNXE5sL.png", href: "/hizmetlerimiz/katalog-baski", alt: "Katalog Baskısı Alanya" },
    { image: "/images/slides/kartvizitslide.webp", mobileImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/mkartvizit-ZP2gQDQGx4eUE2Ea5OvuSEJ2f7pic2.png", href: "/hizmetlerimiz/kartvizit-baski", alt: "Kartvizit Baskısı Alanya" },
    { image: "/images/slides/davetiyeslide.webp", mobileImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/mdavetiye-ppR3EcmEcjfugYCZJi0tqdm9GbI23D.png", href: "/hizmetlerimiz/davetiye-baski", alt: "Davetiye Baskısı Alanya" },
  ],
  en: [
    { image: "/images/slides/stampslide.webp", mobileImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/mstamp-wN0kmolBC36O1z3C2NrysZIKEyaaAM.png", href: "/kase", alt: "Professional Stamp Printing Alanya" },
    { image: "/images/slides/broshureslide.webp", mobileImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/mbrochure-4IheXcy5wCl3MVTr6O1zusLRmUvWiB.png", href: "/hizmetlerimiz/brosur-baski", alt: "Brochure Printing Alanya" },
    { image: "/images/slides/catalogslide.webp", mobileImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/mcatalog-ACyVobu0zemSZgmcJkVumv4RRRs57M.png", href: "/hizmetlerimiz/katalog-baski", alt: "Catalog Printing Alanya" },
    { image: "/images/slides/businescardslide.webp", mobileImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/mbusinesscard-nS8TcO7ov0DUyr2uD7glF6MsXwfbiG.png", href: "/hizmetlerimiz/kartvizit-baski", alt: "Business Card Printing Alanya" },
    { image: "/images/slides/invitationslide.webp", mobileImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/minvitationcard-18CU6BXxfMDIZPhJX7I5juN4xfS1gq.png", href: "/hizmetlerimiz/davetiye-baski", alt: "Invitation Card Printing Alanya" },
  ],
  ru: [
    { image: "/images/slides/rkaseslide.webp", mobileImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/m%D0%9F%D0%95%D0%A7%D0%90%D0%A2%D0%98-XUjh9UuwZ2DVjU3XiGGeQDUu8MLNbb.png", href: "/kase", alt: "Профессиональная Печать Штампов Аланья" },
    { image: "/images/slides/rbrosurslide.webp", mobileImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/m%D0%91%D0%A0%D0%9E%D0%A8%D0%AE%D0%A0-rap59g49N2qafUne1yFENo4x5WhJt0.png", href: "/hizmetlerimiz/brosur-baski", alt: "Печать Брошюр Аланья" },
    { image: "/images/slides/rkatalogslide.webp", mobileImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/m%D0%9A%D0%90%D0%A2%D0%90%D0%9B%D0%9E%D0%93%D0%9E%D0%92%20%D0%98%20%D0%96%D0%A3%D0%A0%D0%9D%D0%90%D0%9B%D0%9E%D0%92-q4jia01q8IEHFnVPdZL3oKYsTpW3YO.png", href: "/hizmetlerimiz/katalog-baski", alt: "Печать Каталогов Аланья" },
    { image: "/images/slides/rkartvizitslide.webp", mobileImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/m%D0%92%D0%98%D0%97%D0%98%D0%A2%D0%9E%D0%9A-DOI4FOO8xO2tnUEoQ8zB2bDbpXeqOI.png", href: "/hizmetlerimiz/kartvizit-baski", alt: "Печать Визиток Аланья" },
    { image: "/images/slides/rdavetiyeslide.webp", mobileImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/m%D0%9F%D0%A0%D0%98%D0%93%D0%9B%D0%90%D0%A8%D0%95%D0%9D%D0%98%D0%AF-rFeOMNZBg9Zmofq1noTICW2AdrjoTu.png", href: "/hizmetlerimiz/davetiye-baski", alt: "Печать Приглашений Аланья" },
  ],
}

export function HeroSlider() {
  const { lang } = useLanguage()
  const slides = SLIDES[lang] ?? SLIDES.tr

  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)
  const touchStartX = useRef<number | null>(null)
  const touchStartY = useRef<number | null>(null)
  const handleTouchStart = (event: TouchEvent<HTMLDivElement>) => {
    touchStartX.current = event.touches[0]?.clientX ?? null
    touchStartY.current = event.touches[0]?.clientY ?? null
    swiped.current = false
    setPaused(true)
  }

  const handleTouchMove = (event: TouchEvent<HTMLDivElement>) => {
    if (touchStartX.current === null || touchStartY.current === null) return
    const deltaX = event.touches[0].clientX - touchStartX.current
    const deltaY = event.touches[0].clientY - touchStartY.current

    if (Math.abs(deltaX) < 40 || Math.abs(deltaX) < Math.abs(deltaY)) return
    swiped.current = true
    if (deltaX < 0) next()
    else prev()
    touchStartX.current = null
    touchStartY.current = null
  }

  const handleTouchEnd = () => {
    touchStartX.current = null
    touchStartY.current = null
    setPaused(false)
  }

  const next = useCallback(() => setCurrent((c) => (c + 1) % slides.length), [slides.length])
  const prev = useCallback(() => setCurrent((c) => (c - 1 + slides.length) % slides.length), [slides.length])

  useEffect(() => {
    setCurrent(0)
  }, [lang])

  useEffect(() => {
    if (paused) return
    const id = setInterval(next, 5000)
    return () => clearInterval(id)
  }, [next, paused])

  return (
    <div
      className="relative w-full overflow-hidden bg-background"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Slides — from sm up the container ratio equals the artwork's (3630x984),
          so it fills edge to edge. On mobile the box is taller than the artwork;
          the artwork stays uncropped and a blurred copy fills the band. */}
      <div
        className="relative aspect-[16/7] w-full overflow-hidden touch-pan-y sm:aspect-[3630/984]"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className="absolute inset-y-0 left-10 right-10 overflow-hidden sm:inset-0">
        {slides.map((slide, i) => (
          <Link
            key={slide.image}
            href={slide.href}
            tabIndex={i === current ? 0 : -1}
            aria-hidden={i !== current}
            className="absolute inset-0 block transition-opacity duration-700 focus:outline-none"
            style={{ opacity: i === current ? 1 : 0, pointerEvents: i === current ? "auto" : "none" }}
          >
            {/* Blurred fill for the letterbox bands on mobile only. */}
            <Image
              src={slide.mobileImage}
              alt=""
              aria-hidden="true"
              fill
              sizes="100vw"
              className="object-cover blur-xl sm:hidden"
            />
            <Image
              src={slide.mobileImage}
              alt={slide.alt}
              fill
              priority={i === 0}
              sizes="100vw"
              className="object-contain object-center sm:hidden"
            />
            <Image
              src={slide.image}
              alt={slide.alt}
              fill
              priority={i === 0}
              sizes="100vw"
              className="hidden scale-[90%] object-contain object-center sm:block"
            />
          </Link>
        ))}
        </div>
      </div>

      {/* Prev arrow */}
      <button
        type="button"
        onClick={(e) => { e.preventDefault(); prev() }}
        aria-label="Önceki slayt"
        className="absolute left-1 top-1/2 z-10 flex size-7 -translate-y-1/2 items-center justify-center rounded-full bg-background/85 text-foreground shadow-sm backdrop-blur-sm transition hover:bg-background sm:left-[6%] sm:size-10 sm:bg-black/40 sm:text-white sm:hover:bg-black/60"
      >
        <ChevronLeft className="size-5" />
      </button>

      {/* Next arrow */}
      <button
        type="button"
        onClick={(e) => { e.preventDefault(); next() }}
        aria-label="Sonraki slayt"
        className="absolute right-1 top-1/2 z-10 flex size-7 -translate-y-1/2 items-center justify-center rounded-full bg-background/85 text-foreground shadow-sm backdrop-blur-sm transition hover:bg-background sm:right-[6%] sm:size-10 sm:bg-black/40 sm:text-white sm:hover:bg-black/60"
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
