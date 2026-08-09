"use client"

import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"
import { SectionHeading } from "@/components/section-heading"
import { useLanguage } from "@/components/language-provider"
import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"
import { waLink } from "@/lib/site"

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
        <div className="mt-8 flex flex-col items-center gap-3 text-center">
          <h3 className="font-heading text-xl font-bold text-foreground">{t.faq.ctaTitle}</h3>
          <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
            <a href={waLink(t.faq.ctaTitle)} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="size-4" />
              {t.faq.ctaButton}
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
