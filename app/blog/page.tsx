"use client"

import { PageHero } from "@/components/page-hero"
import { BlogSection } from "@/components/blog-section"
import { FaqSection } from "@/components/faq-section"
import { useLanguage } from "@/components/language-provider"

export default function BlogPage() {
  const { t } = useLanguage()

  return (
    <>
      <PageHero tag={t.blog.tag} title={t.blog.title} subtitle={t.blog.subtitle} />
      <BlogSection showCta={false} />
      <FaqSection />
    </>
  )
}
