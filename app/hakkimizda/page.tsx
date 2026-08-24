"use client"

import Image from "next/image"
import { Award, ShieldCheck, Tag } from "lucide-react"
import { PageHero } from "@/components/page-hero"
import { SectionHeading } from "@/components/section-heading"
import { useLanguage } from "@/components/language-provider"

const VALUE_ICONS = [Award, ShieldCheck, Tag]

export default function AboutPage() {
  const { t } = useLanguage()
  const a = t.about

  return (
    <>
      <PageHero tag={a.tag} title={a.title} subtitle={a.lead} />

      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
            <Image
              src="/images/offset.webp"
              alt="Alanya Kale Matbaa ofset baskı makinesi ve tecrübeli matbaacılar"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="flex flex-col gap-4">
            {a.body.map((paragraph, i) => (
              <p key={i} className="leading-relaxed text-muted-foreground">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary py-16 text-primary-foreground">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {a.stats.map((stat) => (
              <div key={stat.label} className="flex flex-col items-center gap-1 text-center">
                <span className="font-heading text-4xl font-extrabold text-accent">{stat.value}</span>
                <span className="text-sm text-primary-foreground/70">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <SectionHeading title={a.valuesTitle} />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {a.values.map((value, i) => {
            const Icon = VALUE_ICONS[i]
            return (
              <div key={value.title} className="flex flex-col gap-3 rounded-xl border border-border bg-card p-6">
                <span className="flex size-11 items-center justify-center rounded-lg bg-accent/10 text-accent">
                  <Icon className="size-5" />
                </span>
                <h3 className="font-heading text-lg font-semibold text-foreground">{value.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{value.desc}</p>
              </div>
            )
          })}
        </div>
      </section>

      <section className="bg-accent/5 py-12">
        <div className="mx-auto max-w-6xl px-4">
          <div className="rounded-xl border border-accent/20 bg-accent/5 p-6 text-center md:p-8">
            <div className="flex items-center justify-center gap-3 mb-3">
              <span className="flex size-8 items-center justify-center rounded-full bg-accent text-sm font-bold text-accent-foreground">
                ✓
              </span>
              <h3 className="font-heading text-lg font-semibold text-foreground">Resmi Nitelikli Matbaa</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Kale Matbaa, Maliye Anlaşmalı Resmi Matbaadır. Tüm resmi ve gayri resmi doküman basımlarında uluslararası standartlara uygun, güvenilir ve kaliteli hizmet sunmaktadır.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
