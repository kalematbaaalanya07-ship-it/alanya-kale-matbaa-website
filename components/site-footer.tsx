"use client"

import Link from "next/link"
import { MapPin, Phone, Mail, MessageCircle, MapIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/components/language-provider"
import { site, waLink } from "@/lib/site"
import { LiveInfoPanel } from "@/components/live-info-panel"

export function SiteFooter() {
  const { t } = useLanguage()

  const nav = [
    { href: "/", label: t.nav.home },
    { href: "/hakkimizda", label: t.nav.about },
    { href: "/hizmetlerimiz", label: t.nav.services },
    { href: "/urunlerimiz", label: t.nav.products },
    { href: "/portfoy", label: t.nav.portfolio },
    { href: "/blog", label: t.blog.tag },
    { href: "/iletisim", label: t.nav.contact },
  ]

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 md:grid-cols-3">
        <div>
          <div className="mb-3 flex items-center gap-2">
            <span className="flex size-9 items-center justify-center rounded-md bg-accent font-heading text-lg font-extrabold text-accent-foreground">
              K
            </span>
            <span className="flex flex-col leading-none">
              <span className="font-heading text-sm font-bold tracking-tight">ALANYA KALE</span>
              <span className="text-xs font-semibold tracking-[0.2em] text-accent">MATBAA</span>
            </span>
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-primary-foreground/70">{t.footer.about}</p>
        </div>

        <div>
          <h3 className="mb-3 font-heading text-sm font-semibold uppercase tracking-wide">{t.footer.quickLinks}</h3>
          <ul className="flex flex-col gap-2">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-sm text-primary-foreground/70 transition-colors hover:text-accent">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-3 font-heading text-sm font-semibold uppercase tracking-wide">{t.footer.contact}</h3>
          <ul className="flex flex-col gap-3 text-sm text-primary-foreground/70">
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 size-4 shrink-0 text-accent" />
              <div>
                <p className="text-xs font-semibold text-primary-foreground mb-1">Adres</p>
                <a
                  href={`https://www.google.com/maps/search/${encodeURIComponent(site.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary-foreground/70 hover:text-accent transition-colors"
                  itemProp="address"
                  itemScope
                  itemType="https://schema.org/PostalAddress"
                >
                  <span itemProp="streetAddress">{site.street}</span>
                  <span itemProp="postalCode" className="hidden">{site.postalCode}</span>
                  <span itemProp="addressLocality" className="hidden">{site.city}</span>
                  <span itemProp="addressRegion" className="hidden">{site.region}</span>
                  <span itemProp="addressCountry" className="hidden">{site.country}</span>
                </a>
              </div>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="size-4 shrink-0 text-accent" />
              <a href={`tel:${site.phoneHref}`} itemProp="telephone" className="transition-colors hover:text-accent">
                {site.phone}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="size-4 shrink-0 text-accent" />
              <a href={`https://wa.me/${site.whatsapp}`} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-accent">
                {site.whatsappDisplay} <span className="text-xs">(WhatsApp)</span>
              </a>
            </li>
            <li className="flex items-center gap-2">
              <MessageCircle className="size-4 shrink-0 text-accent" />
              <a href={waLink()} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-accent">
                Hızlı İleti Gönder
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="size-4 shrink-0 text-accent" />
              <a href={`mailto:${site.email}`} itemProp="email" className="transition-colors hover:text-accent">
                {site.email}
              </a>
            </li>
          </ul>
          <LiveInfoPanel />
        </div>
      </div>

      <div className="border-t border-primary-foreground/10">
        <div className="mx-auto max-w-6xl px-4 py-4">
          <div className="mb-3 flex flex-col items-center justify-center gap-3 md:flex-row md:justify-between">
            <div className="text-center text-xs text-primary-foreground/60">
              © {new Date().getFullYear()} {site.name}. {t.footer.rights}
            </div>
            <div className="flex items-center gap-2 rounded-md bg-primary-foreground/5 px-3 py-2">
              <span className="flex size-5 items-center justify-center rounded-full bg-accent text-xs font-bold text-accent-foreground">
                ✓
              </span>
              <span className="text-xs font-medium text-primary-foreground/80">
                Maliye Anlaşmalı Resmi Matbaadır
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
