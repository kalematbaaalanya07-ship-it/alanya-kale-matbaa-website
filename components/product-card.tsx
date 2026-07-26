"use client"

import Image from "next/image"
import { Check, MessageCircle } from "lucide-react"
import type { ProductContent } from "@/lib/products"
import { waLink } from "@/lib/site"

export function ProductCard({
  content,
  image,
  ctaLabel,
  quoteIntro,
}: {
  content: ProductContent
  image: string
  ctaLabel: string
  quoteIntro: string
}) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-xl">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={content.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      <div className="flex flex-1 flex-col gap-3 p-5">
        <h3 className="font-heading text-lg font-bold text-foreground">{content.title}</h3>
        <p className="text-xs font-medium text-accent/70">Alanya Kale Matbaasından yaptırabilirsiniz</p>
        <p className="text-sm leading-relaxed text-muted-foreground">{content.desc}</p>

        <ul className="mt-1 flex flex-col gap-1.5">
          {content.features.map((feature) => (
            <li key={feature} className="flex items-start gap-2 text-sm text-foreground/90">
              <Check className="mt-0.5 size-4 shrink-0 text-accent" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <a
          href={waLink(`${quoteIntro} ${content.title}`)}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto inline-flex items-center justify-center gap-2 rounded-md bg-accent px-4 py-2.5 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent/90"
        >
          <MessageCircle className="size-4" />
          {ctaLabel}
        </a>
      </div>
    </article>
  )
}
