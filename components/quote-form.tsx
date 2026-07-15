"use client"

import { useState } from "react"
import { MessageCircle } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/components/language-provider"
import { site, waLink } from "@/lib/site"

const WEIGHTS = ["80g", "130g", "170g", "350g+"]

const selectClass =
  "h-10 w-full rounded-lg border border-input bg-background px-3 text-sm text-foreground outline-none transition-colors focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/40"

export function QuoteForm() {
  const { t } = useLanguage()
  const q = t.quote

  const [form, setForm] = useState({
    service: "",
    size: "",
    weight: "",
    quantity: "",
    sides: q.single,
    notes: "",
  })

  const update = (key: keyof typeof form, value: string) => setForm((f) => ({ ...f, [key]: value }))

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const lines = [
      q.intro,
      "",
      `${q.service}: ${form.service || "-"}`,
      `${q.size}: ${form.size || "-"}`,
      `${q.weight}: ${form.weight || "-"}`,
      `${q.quantity}: ${form.quantity || "-"}`,
      `${q.sides}: ${form.sides || "-"}`,
      form.notes ? `${q.notes}: ${form.notes}` : "",
    ].filter(Boolean)
    window.open(waLink(lines.join("\n")), "_blank", "noopener,noreferrer")
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="service">{q.service}</Label>
          <select
            id="service"
            required
            className={selectClass}
            value={form.service}
            onChange={(e) => update("service", e.target.value)}
          >
            <option value="" disabled>
              {q.servicePlaceholder}
            </option>
            {q.serviceOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col gap-1.5">
          <Label htmlFor="size">{q.size}</Label>
          <Input id="size" placeholder={q.sizePlaceholder} value={form.size} onChange={(e) => update("size", e.target.value)} />
        </div>

        <div className="flex flex-col gap-1.5">
          <Label htmlFor="weight">{q.weight}</Label>
          <select
            id="weight"
            className={selectClass}
            value={form.weight}
            onChange={(e) => update("weight", e.target.value)}
          >
            <option value="" disabled>
              {q.weightPlaceholder}
            </option>
            {WEIGHTS.map((w) => (
              <option key={w} value={w}>
                {w}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col gap-1.5">
          <Label htmlFor="quantity">{q.quantity}</Label>
          <Input
            id="quantity"
            inputMode="numeric"
            placeholder={q.quantityPlaceholder}
            value={form.quantity}
            onChange={(e) => update("quantity", e.target.value)}
          />
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <Label>{q.sides}</Label>
        <div className="flex gap-2">
          {[q.single, q.double].map((option) => (
            <button
              key={option}
              type="button"
              onClick={() => update("sides", option)}
              className={
                "flex-1 rounded-lg border px-3 py-2 text-sm font-medium transition-colors " +
                (form.sides === option
                  ? "border-accent bg-accent text-accent-foreground"
                  : "border-input bg-background text-muted-foreground hover:border-accent")
              }
            >
              {option}
            </button>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <Label htmlFor="notes">{q.notes}</Label>
        <Textarea
          id="notes"
          rows={3}
          placeholder={q.notesPlaceholder}
          value={form.notes}
          onChange={(e) => update("notes", e.target.value)}
        />
      </div>

      <Button type="submit" size="lg" className="bg-[#25D366] text-white hover:bg-[#1eb958]">
        <MessageCircle className="size-4" />
        {q.submit}
      </Button>
      <p className="text-center text-xs text-muted-foreground">{site.phoneDisplay}</p>
    </form>
  )
}
