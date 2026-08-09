"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname, useRouter } from "next/navigation"
import { Menu, X, Phone, Search, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/components/language-provider"
import { LanguageSwitcher } from "@/components/language-switcher"
import { site, waLink } from "@/lib/site"
import { getAllServices } from "@/lib/services"

function SearchBar({ onClose }: { onClose?: () => void }) {
  const { t } = useLanguage()
  const router = useRouter()
  const inputRef = useRef<HTMLInputElement>(null)
  const [query, setQuery] = useState("")
  const services = getAllServices()

  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  const results = query.trim().length > 1
    ? services.filter((s) =>
        s.title.toLowerCase().includes(query.toLowerCase()) ||
        s.tag.toLowerCase().includes(query.toLowerCase())
      ).slice(0, 5)
    : []

  function handleSelect(slug: string) {
    router.push(`/hizmetlerimiz/${slug}`)
    setQuery("")
    onClose?.()
  }

  return (
    <div className="relative w-full">
      <div className="flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2 shadow-sm">
        <Search className="size-4 shrink-0 text-muted-foreground" />
        <input
          ref={inputRef}
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Escape") onClose?.()
            if (e.key === "Enter" && results.length > 0) handleSelect(results[0].slug)
          }}
          placeholder={t.nav.searchPlaceholder ?? "Ne bastırmak istiyorsunuz?"}
          className="flex-1 bg-transparent text-sm text-foreground outline-none placeholder:text-muted-foreground"
        />
        {query && (
          <button type="button" onClick={() => setQuery("")} className="text-muted-foreground hover:text-foreground">
            <X className="size-4" />
          </button>
        )}
      </div>
      {results.length > 0 && (
        <ul className="absolute top-full left-0 right-0 z-50 mt-1 overflow-hidden rounded-xl border border-border bg-background shadow-lg">
          {results.map((s) => (
            <li key={s.id}>
              <button
                type="button"
                onClick={() => handleSelect(s.slug)}
                className="flex w-full items-center gap-3 px-4 py-3 text-left text-sm hover:bg-secondary"
              >
                <span className="font-medium text-foreground">{s.title}</span>
                <span className="ml-auto text-xs text-muted-foreground">{s.tag}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export function SiteHeader() {
  const { t } = useLanguage()
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)

  const nav = [
    { href: "/", label: t.nav.home },
    { href: "/hakkimizda", label: t.nav.about },
    { href: "/urunlerimiz", label: t.nav.products },
    { href: "/hizmetlerimiz", label: t.nav.services },
    { href: "/portfoy", label: t.nav.portfolio },
    { href: "/blog", label: t.blog.tag },
    { href: "/iletisim", label: t.nav.contact },
  ]

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
      {/* Top bar: logo + search + lang + phone */}
      <div className="mx-auto flex h-16 max-w-6xl items-center gap-3 px-4">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0" onClick={() => setOpen(false)}>
          <Image
            src="/images/kalematbaalogo.svg"
            alt="Alanya Kale Matbaa"
            width={220}
            height={38}
            className="h-9 w-auto"
            priority
          />
        </Link>

        {/* Search — desktop: inline expanded; mobile: icon only */}
        <div className="hidden flex-1 max-w-md lg:block">
          <SearchBar />
        </div>

        {/* Mobile search toggle */}
        <button
          type="button"
          className="flex size-9 items-center justify-center rounded-full border border-border text-foreground lg:hidden"
          onClick={() => setSearchOpen((v) => !v)}
          aria-label="Ara"
        >
          <Search className="size-4" />
        </button>

        <div className="ml-auto flex items-center gap-2">
          <Button asChild size="sm" className="hidden bg-accent text-accent-foreground hover:bg-accent/90 sm:inline-flex">
            <Link href="/#teklif">
              {t.cta.quote}
              <ArrowRight className="size-4" />
            </Link>
          </Button>
          <LanguageSwitcher />
          <Button asChild size="sm" className="hidden bg-orange-500 text-white hover:bg-orange-600 sm:inline-flex">
            <Link href="/kase">
              {t.cta.professionalStamp}
              <ArrowRight className="size-4" />
            </Link>
          </Button>
          <button
            type="button"
            className="inline-flex size-9 items-center justify-center rounded-md text-foreground lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
            aria-expanded={open}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {/* Mobile search bar */}
      {searchOpen && (
        <div className="border-t border-border bg-background px-4 py-3 lg:hidden">
          <SearchBar onClose={() => setSearchOpen(false)} />
        </div>
      )}

      {/* Desktop nav */}
      <div className="hidden border-t border-border lg:block">
        <nav className="mx-auto flex max-w-6xl items-center justify-center px-4">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "px-4 py-3 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground",
                pathname === item.href && "border-b-2 border-accent text-foreground",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>

      {/* Mobile nav dropdown */}
      {open && (
        <nav className="border-t border-border bg-background lg:hidden">
          <div className="mx-auto flex max-w-6xl flex-col px-4 py-2">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "rounded-md px-3 py-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground",
                  pathname === item.href && "text-foreground",
                )}
              >
                {item.label}
              </Link>
            ))}
            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 flex items-center gap-2 rounded-md bg-accent px-3 py-3 text-sm font-semibold text-accent-foreground"
            >
              <Phone className="size-4" />
              {site.phoneDisplay}
            </a>
            <Link
              href="/kase"
              onClick={() => setOpen(false)}
              className="mt-1 flex items-center justify-between gap-2 rounded-md bg-orange-500 px-3 py-3 text-sm font-semibold text-white"
            >
              {t.cta.professionalStamp}
              <ArrowRight className="size-4" />
            </Link>
            <Link
              href="/#teklif"
              onClick={() => setOpen(false)}
              className="mt-1 flex items-center justify-between gap-2 rounded-md bg-accent px-3 py-3 text-sm font-semibold text-accent-foreground"
            >
              {t.cta.quote}
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </nav>
      )}
    </header>
  )
}
