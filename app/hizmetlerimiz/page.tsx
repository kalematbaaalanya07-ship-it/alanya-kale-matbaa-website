import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ArrowRight, MessageCircle } from 'lucide-react'
import { getAllServices } from '@/lib/services'

export const metadata: Metadata = {
  title: 'Hizmetlerimiz | Alanya Kale Matbaa',
  description: 'Alanya\'da profesyonel baskı hizmetleri: Kaşe, broşür, davetiye, kartvizit, afiş, amerikan servis ve daha fazlası.',
}

const waLink = (text: string = '') =>
  `https://wa.me/905309305564?text=${encodeURIComponent(text)}`

export default function HizmetlerimizPage() {
  const services = getAllServices()

  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="relative bg-gradient-to-b from-accent/10 to-background py-20">
        <div className="mx-auto max-w-6xl px-4 text-center">
          <h1 className="font-heading text-4xl font-bold text-foreground md:text-5xl lg:text-6xl text-balance">
            Hizmetlerimiz
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-foreground/80">
            Alanya'da profesyonel baskı hizmetleri. Kurumsal kimliğinizden pazarlama materyallerinize kadar, her ihtiyacınız için kaliteli çözümler sunuyoruz.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
              <a href="#teklif">
                Hızlı Teklif Al
                <ArrowRight className="size-4" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-foreground/30 bg-transparent text-foreground hover:bg-foreground/10"
            >
              <a href={waLink('Hizmetlerimiz hakkında bilgi almak istiyorum')} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="size-4" />
                WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="border-b border-border bg-background py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Link
                key={service.id}
                href={`/hizmetlerimiz/${service.slug}`}
                className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-all duration-300 hover:border-accent hover:shadow-lg"
              >
                {/* Image */}
                <div className="relative h-48 w-full overflow-hidden bg-muted">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col gap-3 p-6">
                  <div className="flex items-center gap-2">
                    <span className="inline-block rounded-full bg-accent/10 px-3 py-1 text-sm font-medium text-accent">
                      {service.tag}
                    </span>
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-foreground group-hover:text-accent transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-foreground/70 line-clamp-2">
                    {service.subtitle}
                  </p>
                  <div className="mt-auto flex items-center gap-2 text-accent font-medium text-sm">
                    Detayları Gör
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-accent py-16">
        <div className="mx-auto max-w-6xl px-4 text-center">
          <h2 className="font-heading text-3xl font-bold text-accent-foreground md:text-4xl text-balance">
            Aradığınız Hizmet Burada
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-accent-foreground/90">
            Hangi hizmet hakkında merak ettiğiniz varsa, bize yazın. Profesyonel ekibimiz size en uygun çözümü sunmak için hazır.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button
              asChild
              size="lg"
              className="bg-accent-foreground text-accent hover:bg-accent-foreground/90"
            >
              <a href={waLink('Hizmetlerimiz hakkında bilgi almak istiyorum')} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="size-4" />
                WhatsApp ile Yazın
              </a>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
