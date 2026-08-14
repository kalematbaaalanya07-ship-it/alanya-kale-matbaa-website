"use client"

import { MapPin, Phone, Mail, Clock, MessageCircle, Share2 } from "lucide-react"
import { PageHero } from "@/components/page-hero"
import { QuoteForm } from "@/components/quote-form"
import { useLanguage } from "@/components/language-provider"
import { site, waLink } from "@/lib/site"

export default function ContactPage() {
  const { t } = useLanguage()
  const c = t.contact
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(site.mapQuery)}&output=embed`

  return (
    <>
      <PageHero tag={c.tag} title={c.title} subtitle={c.subtitle} />

      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid items-start gap-10 lg:grid-cols-2">
          <div className="flex flex-col gap-6">
            <h2 className="font-heading text-2xl font-bold tracking-tight">{c.infoTitle}</h2>
            <ul className="flex flex-col gap-5">
              <li className="flex items-start gap-3">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                  <MapPin className="size-5" />
                </span>
                <div>
                  <p className="font-semibold text-foreground">{c.addressLabel}</p>
                  <p className="text-sm leading-relaxed text-muted-foreground">{site.address}</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                  <Phone className="size-5" />
                </span>
                <div>
                  <p className="font-semibold text-foreground">{c.phoneLabel}</p>
                  <a
                    href={`tel:${site.phoneHref}`}
                    className="text-sm text-muted-foreground transition-colors hover:text-accent"
                  >
                    {site.phone}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                  <MessageCircle className="size-5" />
                </span>
                <div>
                  <p className="font-semibold text-foreground">WhatsApp</p>
                  <a
                    href={waLink(t.quote.intro)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground transition-colors hover:text-accent"
                  >
                    {site.whatsappDisplay}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                  <Share2 className="size-5" />
                </span>
                <div>
                  <p className="font-semibold text-foreground">Instagram</p>
                  <a
                    href="https://instagram.com/alanyakalematbaa"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground transition-colors hover:text-accent"
                  >
                    @alanyakalematbaa
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                  <Mail className="size-5" />
                </span>
                <div>
                  <p className="font-semibold text-foreground">{c.emailLabel}</p>
                  <a
                    href={`mailto:${site.email}`}
                    className="text-sm text-muted-foreground transition-colors hover:text-accent"
                  >
                    {site.email}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                  <Clock className="size-5" />
                </span>
                <div>
                  <p className="font-semibold text-foreground">{c.hoursLabel}</p>
                  <p className="text-sm leading-relaxed text-muted-foreground">{c.hours}</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8">
            <h2 className="mb-5 font-heading text-2xl font-bold tracking-tight">{t.home.quoteTitle}</h2>
            <QuoteForm />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16">
        <h2 className="mb-5 font-heading text-2xl font-bold tracking-tight">{c.mapTitle}</h2>
        <div className="overflow-hidden rounded-2xl border border-border">
          <iframe
            title={c.mapTitle}
            src={mapSrc}
            width="100%"
            height="420"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </section>
    </>
  )
}
