import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { BlogArticle } from "@/components/blog-article"
import { blogPosts, getPost } from "@/lib/blog-posts"
import { site } from "@/lib/site"

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) return {}

  const tr = post.content.tr
  const url = `${site.url}/blog/${post.slug}`

  return {
    title: tr.metaTitle,
    description: tr.metaDescription,
    alternates: {
      canonical: url,
      languages: {
        tr: url,
        en: `${url}?lang=en`,
        ru: `${url}?lang=ru`,
        "x-default": url,
      },
    },
    openGraph: {
      type: "article",
      url,
      title: tr.metaTitle,
      description: tr.metaDescription,
      images: [{ url: post.image, width: 1200, height: 900, alt: post.imageAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: tr.metaTitle,
      description: tr.metaDescription,
      images: [post.image],
    },
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) notFound()

  const tr = post.content.tr
  const url = `${site.url}/blog/${post.slug}`

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: tr.title,
    description: tr.metaDescription,
    image: `${site.url}${post.image}`,
    datePublished: `${post.date}-01-01`,
    inLanguage: "tr-TR",
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    author: { "@type": "Organization", name: site.name },
    publisher: {
      "@type": "Organization",
      name: site.name,
      "@id": `${site.url}/#business`,
    },
    about: tr.category,
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <BlogArticle slug={slug} />
    </>
  )
}
