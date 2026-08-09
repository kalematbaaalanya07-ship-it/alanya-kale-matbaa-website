import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowLeft, MessageCircle, Check } from 'lucide-react'
import { getServiceBySlug, getAllServices, getServiceBySlugLocalized, getAllServicesLocalized } from '@/lib/services'
import type { Lang } from '@/lib/i18n'
import { notFound } from 'next/navigation'

const waLink = (text: string = '') =>
  `https://wa.me/905309305564?text=${encodeURIComponent(text)}`

export async function generateStaticParams() {
  const services = getAllServices()
  return services.map((service) => ({
    slug: service.slug,
  }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const service = getServiceBySlug(slug)

  if (!service) {
    return {}
  }

  return {
    title: service.metaTitle,
    description: service.subtitle,
  }
}

export default async function ServiceDetailPage({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>
  searchParams: Promise<{ lang?: string }>
}) {
  const { slug } = await params
  const { lang: requestedLang } = await searchParams
  const lang: Lang = requestedLang === 'en' || requestedLang === 'ru' ? requestedLang : 'tr'
  const service = getServiceBySlugLocalized(slug, lang)

  if (!service) {
    notFound()
  }

  const otherServices = getAllServicesLocalized(lang).filter((s) => s.id !== service.id).slice(0, 3)
  const ui = lang === 'tr'
    ? { back: 'Tüm Hizmetler', contact: 'Hızlı İletişim', contactDesc: 'Hizmet hakkında detaylı bilgi ve fiyat teklifi almak için bizimle iletişime geçin.', whatsapp: 'WhatsApp ile Yazın', call: 'Hemen Ara', faq: 'Sıkça Sorulan Sorular', others: 'Diğer Hizmetlerimiz', ready: 'Başlamaya Hazır mısınız?', readyDesc: 'için teklif almak veya daha fazla bilgi edinmek için bize ulaşın.', quote: 'Hemen Teklif İste' }
    : lang === 'ru'
      ? { back: 'Все услуги', contact: 'Быстрая связь', contactDesc: 'Свяжитесь с нами, чтобы получить подробную информацию и расчет стоимости этой услуги.', whatsapp: 'Написать в WhatsApp', call: 'Позвонить', faq: 'Часто задаваемые вопросы', others: 'Другие наши услуги', ready: 'Готовы начать?', readyDesc: 'свяжитесь с нами, чтобы получить расчет стоимости или узнать больше о', quote: 'Получить расчет стоимости' }
      : { back: 'All Services', contact: 'Quick Contact', contactDesc: 'Get in touch with us for detailed information and a price quote for this service.', whatsapp: 'Message on WhatsApp', call: 'Call Now', faq: 'Frequently Asked Questions', others: 'Other Services', ready: 'Ready to Get Started?', readyDesc: 'contact us for a quote or more information about', quote: 'Get a Quote Now' }

  return (
    <main className="min-h-screen">
      {/* Breadcrumb & Back */}
      <div className="bg-background border-b border-border">
        <div className="mx-auto max-w-6xl px-4 py-4">
          <Link
            href="/hizmetlerimiz"
            className="inline-flex items-center gap-2 text-sm text-foreground/70 hover:text-foreground transition-colors"
          >
            <ArrowLeft className="size-4" />
            {ui.back}
          </Link>
        </div>
      </div>

      {/* Hero with Image */}
      <section className="relative h-96 w-full overflow-hidden bg-muted">
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
        <div className="absolute inset-0 flex items-end">
          <div className="mx-auto max-w-6xl w-full px-4 pb-12">
            <div className="inline-block rounded-full bg-accent/10 px-4 py-2 text-sm font-medium text-accent mb-4">
              {service.tag}
            </div>
            <h1 className="font-heading text-4xl font-bold text-foreground md:text-5xl max-w-3xl">
              {service.title}
            </h1>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="bg-background py-16 border-b border-border">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-12 md:grid-cols-3">
            {/* Main Content */}
            <div className="md:col-span-2">
              <div className="prose prose-sm max-w-none dark:prose-invert">
                {service.content.split('\n\n').map((paragraph, idx) => {
                  if (paragraph.startsWith('##')) {
                    return (
                      <h2 key={idx} className="font-heading text-2xl font-bold text-foreground mt-8 mb-4">
                        {paragraph.replace('## ', '')}
                      </h2>
                    )
                  }
                  if (paragraph.startsWith('**')) {
                    return (
                      <div key={idx} className="font-bold text-foreground my-4">
                        {paragraph.replace(/\*\*/g, '')}
                      </div>
                    )
                  }
                  if (paragraph.startsWith('-')) {
                    const items = paragraph.split('\n').filter((item) => item.startsWith('-'))
                    return (
                      <ul key={idx} className="space-y-2 my-4 list-none">
                        {items.map((item, i) => (
                          <li key={i} className="flex gap-3 text-foreground/80">
                            <Check className="size-5 text-accent flex-shrink-0 mt-0.5" />
                            <span>{item.replace('- ', '')}</span>
                          </li>
                        ))}
                      </ul>
                    )
                  }
                  return (
                    <p key={idx} className="text-foreground/80 leading-relaxed my-4">
                      {paragraph}
                    </p>
                  )
                })}
              </div>
            </div>

            {/* Sidebar CTA */}
            <div className="md:col-span-1">
              <div className="sticky top-4 rounded-xl border border-border bg-card p-6 space-y-6">
                <div>
                  <h3 className="font-heading text-lg font-bold text-foreground mb-2">
                    {ui.contact}
                  </h3>
                  <p className="text-sm text-foreground/70">{ui.contactDesc}</p>
                </div>

                <div className="space-y-3">
                  <Button
                    asChild
                    size="lg"
                    className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
                  >
                    <a
                      href={waLink(`${service.title} hakkında bilgi almak istiyorum`)}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageCircle className="size-4" />
                      {ui.whatsapp}
                    </a>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="w-full">
                    <a href="tel:+905324982684">
{ui.call}
                    </a>
                  </Button>
                </div>

                <div className="border-t border-border pt-6">
                  <h4 className="font-heading font-bold text-foreground mb-4">{ui.faq}</h4>
                  <div className="space-y-4">
                    {service.faqs.map((faq, idx) => (
                      <div key={idx}>
                        <p className="text-sm font-medium text-foreground mb-1">
                          {faq.question}
                        </p>
                        <p className="text-xs text-foreground/60">
                          {faq.answer}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      {otherServices.length > 0 && (
        <section className="bg-background py-20 border-b border-border">
          <div className="mx-auto max-w-6xl px-4">
            <h2 className="font-heading text-3xl font-bold text-foreground mb-12 text-balance">{ui.others}</h2>
            <div className="grid gap-6 md:grid-cols-3">
              {otherServices.map((relatedService) => (
                <Link
                  key={relatedService.id}
                  href={`/hizmetlerimiz/${relatedService.slug}`}
                  className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-all duration-300 hover:border-accent hover:shadow-lg"
                >
                  <div className="relative h-40 w-full overflow-hidden bg-muted">
                    <Image
                      src={relatedService.image}
                      alt={relatedService.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-col gap-2 p-4">
                    <span className="text-xs font-medium text-accent">
                      {relatedService.tag}
                    </span>
                    <h3 className="font-heading text-sm font-semibold text-foreground group-hover:text-accent transition-colors line-clamp-2">
                      {relatedService.title}
                    </h3>
                    <p className="text-xs text-foreground/60 line-clamp-1">
                      {relatedService.subtitle}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Final CTA */}
      <section className="bg-accent py-16">
        <div className="mx-auto max-w-6xl px-4 text-center">
          <h2 className="font-heading text-3xl font-bold text-accent-foreground md:text-4xl text-balance">{ui.ready}</h2>
          <p className="mx-auto mt-4 max-w-2xl text-accent-foreground/90">{service.title} {ui.readyDesc}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button
              asChild
              size="lg"
              className="bg-accent-foreground text-accent hover:bg-accent-foreground/90"
            >
              <a
                href={waLink(`${service.title} hakkında bilgi almak istiyorum`)}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="size-4" />
                {ui.quote}
              </a>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
