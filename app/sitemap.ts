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
  return routes.map((route) => {
    const url = `${site.url}${route}`
    return {
      url,
      lastModified: now,
      changeFrequency: "monthly",
      priority: route === "" ? 1 : 0.8,
      alternates: {
        languages: {
          tr: url,
          en: `${url}?lang=en`,
          ru: `${url}?lang=ru`,
        },
      },
    }
  })
}
