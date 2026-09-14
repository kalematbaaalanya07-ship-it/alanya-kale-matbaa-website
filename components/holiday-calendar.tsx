"use client"

import { useMemo, useState } from "react"
import { CalendarDays, CheckCircle2, Search } from "lucide-react"

type SpecialDay = {
  date: string
  name: string
  holiday: string
  month: string
}

type PublicHoliday = {
  date: string
  day: string
  name: string
}

type Summary = {
  month: string
  count: number
  holidayCount: number
}

const monthOrder = ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"]

function formatDate(value: string) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) return value
  const [year, month, day] = value.split("-")
  return `${day}.${month}.${year}`
}

export function HolidayCalendar({ special, publicHolidays, summary }: { special: SpecialDay[]; publicHolidays: PublicHoliday[]; summary: Summary[] }) {
  const [month, setMonth] = useState("Tümü")
  const [query, setQuery] = useState("")
  const normalizedQuery = query.trim().toLocaleLowerCase("tr-TR")
  const filtered = useMemo(() => special.filter((item) => {
    const matchesMonth = month === "Tümü" || item.month === month
    const haystack = `${item.date} ${item.name} ${item.holiday} ${item.month}`.toLocaleLowerCase("tr-TR")
    return matchesMonth && (!normalizedQuery || haystack.includes(normalizedQuery))
  }), [month, normalizedQuery, special])

  return (
    <>
      <section className="mt-8 rounded-2xl border border-border bg-card p-4 shadow-sm sm:p-6">
        <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-center gap-2"><CalendarDays className="size-5 text-accent" /><h2 className="font-heading text-xl font-bold">Özel Günler Takvimi</h2></div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <label className="relative"><span className="sr-only">Takvimde ara</span><Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Takvimde ara" className="h-10 rounded-lg border border-border bg-background pl-9 pr-3 text-sm outline-none focus:ring-2 focus:ring-accent" /></label>
            <label><span className="sr-only">Ay seçin</span><select value={month} onChange={(event) => setMonth(event.target.value)} className="h-10 rounded-lg border border-border bg-background px-3 text-sm outline-none focus:ring-2 focus:ring-accent"><option>Tümü</option>{monthOrder.map((item) => <option key={item}>{item}</option>)}</select></label>
          </div>
        </div>
        <div className="mt-5 overflow-x-auto"><table className="w-full min-w-[640px] border-collapse text-left text-sm"><thead><tr className="border-b border-border text-muted-foreground"><th className="px-3 py-3 font-medium">Tarih</th><th className="px-3 py-3 font-medium">Özel gün</th><th className="px-3 py-3 font-medium">Ay</th><th className="px-3 py-3 font-medium">Durum</th></tr></thead><tbody>{filtered.map((item, index) => <tr key={`${item.date}-${item.name}-${index}`} className="border-b border-border/70 last:border-0"><td className="px-3 py-3 font-medium whitespace-nowrap">{formatDate(item.date)}</td><td className="px-3 py-3">{item.name}</td><td className="px-3 py-3 text-muted-foreground">{item.month}</td><td className="px-3 py-3">{item.holiday !== "—" ? <span className="inline-flex items-center gap-1 rounded-full bg-accent/10 px-2 py-1 text-xs font-semibold text-accent"><CheckCircle2 className="size-3" />{item.holiday}</span> : <span className="text-muted-foreground">Özel gün</span>}</td></tr>)}</tbody></table>{filtered.length === 0 && <p className="py-10 text-center text-sm text-muted-foreground">Aramanıza uygun kayıt bulunamadı.</p>}</div>
      </section>

      <section className="mt-8 rounded-2xl border border-border bg-primary p-5 text-primary-foreground sm:p-6"><h2 className="font-heading text-xl font-bold">2026 Resmi Tatiller</h2><div className="mt-4 grid gap-3 sm:grid-cols-2">{publicHolidays.map((item) => <div key={`${item.date}-${item.name}`} className="rounded-xl bg-white/10 p-4"><p className="font-semibold">{item.name}</p><p className="mt-1 text-sm text-primary-foreground/75">{item.date} · {item.day}</p></div>)}</div></section>

      <section className="mt-8"><h2 className="font-heading text-xl font-bold">Aylık Özet</h2><div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-6">{summary.map((item) => <div key={item.month} className="rounded-xl border border-border bg-card p-4"><p className="font-semibold">{item.month}</p><p className="mt-2 text-sm text-muted-foreground">{item.count} özel gün</p><p className="text-sm text-accent">{item.holidayCount} resmi tatil</p></div>)}</div></section>
    </>
  )
}
