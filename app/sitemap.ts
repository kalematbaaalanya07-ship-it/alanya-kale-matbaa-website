import type { MetadataRoute } from "next"
import { site } from "@/lib/site"
import { blogPosts } from "@/lib/blog-posts"

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/hakkimizda",
    "/hizmetlerimiz",
    "/urunlerimiz",
    "/portfoy",
    "/blog",
    "/iletisim",
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
