import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, CalendarDays } from "lucide-react"
import { HolidayCalendar } from "@/components/holiday-calendar"
import holidayData from "@/data/holidays-2026.json"

export const metadata: Metadata = {
  title: "2026 Özel Günler ve Resmi Tatiller Takvimi | Alanya Kale Matbaa",
  description: "2026 özel günler, resmi tatiller ve aylık takvim. Alanya Kale Matbaa ile kampanya ve baskı planlamanızı önceden hazırlayın.",
  alternates: { canonical: "/ozel-gunler" },
}

export default function SpecialDaysPage() {
  return (
    <main className="min-h-screen bg-secondary/30">
      <section className="border-b border-border bg-background">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
          <nav aria-label="Breadcrumb" className="mb-6 text-sm text-muted-foreground"><Link href="/" className="hover:text-foreground">Ana Sayfa</Link><span className="mx-2">/</span><span className="text-foreground">Özel Günler</span></nav>
          <div className="max-w-3xl"><div className="mb-4 inline-flex size-12 items-center justify-center rounded-2xl bg-accent/10 text-accent"><CalendarDays className="size-6" /></div><p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">Tarih ve gün takvimi</p><h1 className="mt-3 font-heading text-4xl font-extrabold tracking-tight text-primary sm:text-5xl">Özel Günler ve Resmi Tatiller</h1><p className="mt-5 text-lg leading-relaxed text-muted-foreground">Özel gün, resmi tatil ve kampanya planlarınızı tarih ve gün bilgileriyle tek takvimde takip edin. Baskı ihtiyaçlarınızı önceden planlayın.</p></div>
        </div>
      </section>
      <div className="mx-auto max-w-6xl px-4 py-10 sm:py-14"><HolidayCalendar special={holidayData.special} summary={holidayData.summary} /><div className="mt-10 flex flex-col items-start justify-between gap-4 rounded-2xl border border-accent/20 bg-accent/5 p-6 sm:flex-row sm:items-center"><div><h2 className="font-heading text-xl font-bold text-primary">Kampanyanızı önceden planlayın</h2><p className="mt-1 text-sm text-muted-foreground">Broşür, afiş, menü ve diğer baskı ihtiyaçlarınız için teklif alın.</p></div><Link href="/#teklif" className="inline-flex items-center gap-2 rounded-lg bg-accent px-4 py-2.5 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent/90">Hızlı Teklif Al<ArrowRight className="size-4" /></Link></div></div>
    </main>
  )
}
