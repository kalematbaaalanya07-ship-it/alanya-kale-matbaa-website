"use client"

import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"
import { SectionHeading } from "@/components/section-heading"
import { useLanguage } from "@/components/language-provider"

export function FaqSection() {
  const { t } = useLanguage()

  return (
    <section className="bg-secondary/50 py-16">
      <div className="mx-auto max-w-3xl px-4">
        <SectionHeading tag={t.faq.tag} title={t.faq.title} subtitle={t.faq.subtitle} />
        <div className="mt-10 rounded-2xl border border-border bg-card px-6 sm:px-8">
          <Accordion defaultValue={[0]}>
            {t.faq.items.map((item, i) => (
              <AccordionItem key={item.q} value={i}>
                <AccordionTrigger className="py-5 text-base font-semibold text-foreground">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                  <p>{item.a}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
