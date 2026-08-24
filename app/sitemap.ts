import type { MetadataRoute } from "next"
import { site } from "@/lib/site"
import { blogPosts } from "@/lib/blog-posts"
import { services } from "@/lib/services"

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/hakkimizda",
    "/hizmetlerimiz",
    "/urunlerimiz",
    "/portfoy",
    "/blog",
    "/iletisim",
    ...services.map((service) => `/hizmetlerimiz/${service.slug}`),
    ...blogPosts.map((post) => `/blog/${post.slug}`),
  ]
  const now = new Date()
  return routes.flatMap((route) => {
    const url = `${site.url}${route}`
    const priority = route === "" ? 1 : route.startsWith("/hizmetlerimiz/") ? 0.9 : 0.8
    return [
      { url, lastModified: now, changeFrequency: "monthly", priority, alternates: { languages: { tr: url, en: `${site.url}/en${route}`, ru: `${site.url}/ru${route}`, "x-default": url } } },
      { url: `${site.url}/en${route}`, lastModified: now, changeFrequency: "monthly", priority: priority - 0.05 },
      { url: `${site.url}/ru${route}`, lastModified: now, changeFrequency: "monthly", priority: priority - 0.05 },
    ]
  })
}
