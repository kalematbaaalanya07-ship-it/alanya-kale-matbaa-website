"use client"

import Link from "next/link"
import { MapPin, Phone, Mail } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { site, waLink } from "@/lib/site"

export function SiteFooter() {
  const { t } = useLanguage()

  const nav = [
    { href: "/", label: t.nav.home },
    { href: "/hakkimizda", label: t.nav.about },
    { href: "/hizmetlerimiz", label: t.nav.services },
    { href: "/portfoy", label: t.nav.portfolio },
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
              <span>{site.address}</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="size-4 shrink-0 text-accent" />
              <a href={waLink()} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-accent">
                {site.phoneDisplay}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="size-4 shrink-0 text-accent" />
              <a href={`mailto:${site.email}`} className="transition-colors hover:text-accent">
                {site.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10">
        <div className="mx-auto max-w-6xl px-4 py-4 text-center text-xs text-primary-foreground/60">
          © {new Date().getFullYear()} {site.name}. {t.footer.rights}
        </div>
      </div>
    </footer>
  )
}
