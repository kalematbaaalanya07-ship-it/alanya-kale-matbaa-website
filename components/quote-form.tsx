"use client"

import { useState } from "react"
import { MessageCircle } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/components/language-provider"
import { site, waLink } from "@/lib/site"

const PAPER_WEIGHTS = ["130g", "170g", "200g", "300g", "350g"]
const STAMP_SIZES = ["Küçük 16 × 41 mm", "Orta 50 × 20 mm", "Büyük 58 × 22 mm"]
const ROUND_STAMP_SIZES = ["30 mm", "40 mm"]
const OFFSET_PAPER_SIZES = ["A6 (10,5 × 14,8 cm)", "A5 (14,8 × 21 cm)", "A4 (21 × 29,7 cm)"]
const DIGITAL_PAPER_SIZES = [...OFFSET_PAPER_SIZES, "A3 (29,7 × 42 cm)"]
const selectClass = "h-10 w-full rounded-lg border border-input bg-background px-3 text-sm text-foreground outline-none transition-colors focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/40"

export function QuoteForm() {
  const { t } = useLanguage()
  const q = t.quote
  const [form, setForm] = useState({ service: "", stampType: "", size: "", weight: "", carbonCopy: "", serialNumber: q.no, perforation: "", inkColor: "", designDirection: "", quantity: "", lamination: q.no, sides: q.single, notes: "" })
  const update = (key: keyof typeof form, value: string) => setForm((f) => ({ ...f, [key]: value }))
  const isStamp = form.service === q.serviceOptions[0]
  const isOffset = form.service.toLowerCase().includes("ofset")
  const isBrochure = form.service.toLowerCase().includes("broşür") || form.service.toLowerCase().includes("brochure")
  const isBusinessCard = form.service.toLowerCase().includes("kartvizit") || form.service.toLowerCase().includes("business card") || form.service.toLowerCase().includes("визит")
  const isCardQuantityLocked = isBusinessCard && !form.size.includes("82 × 52")
  const isStampa = form.stampType?.toLowerCase().includes("stampa")
  const field = (id: keyof typeof form, label: string, options: string[], placeholder = label) => (
    <div className="flex flex-col gap-1.5">
      <Label htmlFor={id}>{label}</Label>
      <select id={id} required={id !== "weight" && id !== "lamination"} className={selectClass} value={form[id]} onChange={(e) => update(id, e.target.value)}>
        <option value="" disabled>{placeholder}</option>
        {options.map((option) => <option key={option} value={option}>{option}</option>)}
      </select>
    </div>
  )
  const optionsText = (key: string, values: string[]) => `${key}: ${values || "-"}`

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const lines = [q.intro, "", optionsText(q.service, form.service), ...(isStamp
      ? [optionsText(q.stampType, form.stampType), optionsText(q.size, form.size), optionsText(q.inkColor, form.inkColor), optionsText(q.quantity, form.quantity), optionsText(q.notes, form.notes)]
      : [optionsText(q.size, form.size), optionsText(q.designDirection, form.designDirection), optionsText(q.quantity, isCardQuantityLocked ? "1000" : form.quantity), ...(isOffset ? [optionsText(q.carbonCopy, form.carbonCopy), optionsText(q.serialNumber, form.serialNumber), optionsText(q.perforation, form.perforation)] : isBusinessCard ? [optionsText(q.cardType, form.size), optionsText(q.designDirection, form.designDirection), optionsText(q.sides, form.sides)] : [optionsText(q.weight, form.weight), optionsText(isBrochure ? q.designSupport : q.lamination, form.lamination), optionsText(q.sides, form.sides)]), optionsText(q.notes, form.notes)])]
    window.open(waLink(lines.join("\n")), "_blank", "noopener,noreferrer")
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      {field("service", q.service, q.serviceOptions, q.servicePlaceholder)}
      {isStamp ? (
        <div className="grid gap-4 sm:grid-cols-2">
          {field("stampType", q.stampType, q.stampTypeOptions)}
          {isStampa ? (
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="size">{q.size}</Label>
              <Input id="size" required placeholder="Kaşe boyutunu yazın" value={form.size} onChange={(e) => update("size", e.target.value)} />
            </div>
          ) : field("size", q.size, form.stampType?.toLowerCase().includes("yuvarlak") ? ROUND_STAMP_SIZES : STAMP_SIZES, "Kaşe Boyutu")}
          {field("inkColor", q.inkColor, q.inkColorOptions)}
          <div className="flex flex-col gap-1.5"><Label htmlFor="quantity">{q.quantity}</Label><Input id="quantity" required inputMode="numeric" placeholder={q.quantityPlaceholder} value={form.quantity} onChange={(e) => update("quantity", e.target.value)} /></div>
        </div>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2">
          {!isBusinessCard && field("size", q.size, isOffset ? OFFSET_PAPER_SIZES : DIGITAL_PAPER_SIZES, q.sizePlaceholder)}
          {isOffset ? field("carbonCopy", q.carbonCopy, q.carbonCopyOptions) : isBusinessCard ? field("size", q.cardType, q.cardTypeOptions) : field("weight", q.weight, PAPER_WEIGHTS, q.weightPlaceholder)}
          {field("designDirection", q.designDirection, q.designDirectionOptions)}
          <div className="flex flex-col gap-1.5"><Label htmlFor="quantity">{q.quantity}</Label><Input id="quantity" required={isCardQuantityLocked ? false : true} inputMode="numeric" placeholder={q.quantityPlaceholder} value={isCardQuantityLocked ? "1000" : form.quantity} disabled={isCardQuantityLocked} onChange={(e) => update("quantity", e.target.value)} /></div>
          {isOffset ? field("serialNumber", q.serialNumber, [q.yes, q.no]) : !isBusinessCard && field("lamination", isBrochure ? q.designSupport : q.lamination, [q.yes, q.no])}
          {isOffset && field("perforation", q.perforation, q.perforationOptions)}
        </div>
      )}
      {!isStamp && !isOffset && !isBusinessCard && <div className="flex flex-col gap-1.5"><Label>{q.sides}</Label><div className="flex gap-2">{[q.single, q.double].map((option) => <button key={option} type="button" onClick={() => update("sides", option)} className={`flex-1 rounded-lg border px-3 py-2 text-sm font-medium transition-colors ${form.sides === option ? "border-accent bg-accent text-accent-foreground" : "border-input bg-background text-muted-foreground hover:border-accent"}`}>{option}</button>)}</div></div>}
      <div className="flex flex-col gap-1.5"><Label htmlFor="notes">{isStamp ? q.stampNotes : q.notes}</Label><Textarea id="notes" rows={3} placeholder={isStamp ? q.stampNotes : q.notesPlaceholder} value={form.notes} onChange={(e) => update("notes", e.target.value)} /></div>
      <Button type="submit" size="lg" className="bg-[#25D366] text-white hover:bg-[#1eb958]"><MessageCircle className="size-4" />{q.submit}</Button>
      <p className="text-center text-xs text-muted-foreground">{site.phoneDisplay}</p>
    </form>
  )
}
