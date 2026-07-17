import type { Metadata } from "next"
import { site } from "@/lib/site"

type PageSeo = {
  path: string
  title: string
  description: string
  keywords?: string[]
  image?: string
}

/**
 * Builds SEO metadata for a route segment with per-page canonical + hreflang.
 * Descriptions/titles are written bilingually (TR primary, EN for tourist reach)
 * because language selection is client-side on a single URL.
 */
export function pageMetadata({ path, title, description, keywords, image }: PageSeo): Metadata {
  const url = `${site.url}${path}`
  const sep = path.includes("?") ? "&" : "?"
  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: url,
      languages: {
        tr: url,
        en: `${url}${sep}lang=en`,
        ru: `${url}${sep}lang=ru`,
        "x-default": url,
      },
    },
    openGraph: {
      type: "website",
      locale: "tr_TR",
      alternateLocale: ["en_US", "ru_RU"],
      url,
      siteName: site.name,
      title,
      description,
      images: [{ url: image ?? "/images/digital-press.png", width: 1200, height: 900, alt: site.name }],
    },
  }
}
