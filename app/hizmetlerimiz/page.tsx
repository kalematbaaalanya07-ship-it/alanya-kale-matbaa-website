import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { LanguageSwitcher } from '@/components/language-switcher';

const services = [];

export default function HizmetlerimizPage() {
  const language = 'tr';

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-12 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="space-y-4 text-center mb-16">
            <h1 className="font-heading text-4xl sm:text-5xl font-bold tracking-tight text-foreground">
              {language === 'tr' ? 'Hizmetlerimiz' : 'Our Services'}
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {language === 'tr'
                ? 'Alanya\'da profesyonel baskı hizmetleri. Dijital, ofset, kaşe ve tüm baskı türlerinde uzman çözümler.'
                : 'Professional printing services in Alanya. Expert solutions for digital, offset, stamp and all printing types.'}
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Link
                key={service.id}
                href={`/hizmetlerimiz/${service.id}`}
                className="group"
              >
                <div className="h-full rounded-lg border border-border bg-card overflow-hidden hover:shadow-lg transition-shadow">
                  {/* Service Image */}
                  {service.image && (
                    <div className="relative h-48 w-full overflow-hidden bg-muted">
                      <Image
                        src={service.image}
                        alt={service.tag}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    </div>
                  )}

                  {/* Service Content */}
                  <div className="p-6 space-y-3">
                    <div className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                      {service.tag}
                    </div>
                    <h2 className="font-heading text-xl font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                      {service.title}
                    </h2>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {service.subtitle}
                    </p>
                    <div className="pt-4">
                      <Button
                        variant="outline"
                        className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                      >
                        {language === 'tr' ? 'Detayları Gör' : 'View Details'}
                      </Button>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Info Section */}
          <div className="mt-16 rounded-lg bg-card border border-border p-8 text-center space-y-4">
            <h3 className="font-heading text-2xl font-bold text-foreground">
              {language === 'tr'
                ? 'Aradığınız Hizmet Burada'
                : 'Find Your Service Here'}
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {language === 'tr'
                ? 'Her hizmet sayfasında detaylı bilgi, sıkça sorulan sorular ve hızlı sipariş seçenekleri bulabilirsiniz. WhatsApp üzerinden anında iletişim kurun.'
                : 'Each service page has detailed information, FAQs, and quick ordering options. Contact us instantly via WhatsApp.'}
            </p>
            <div className="flex justify-center gap-4 pt-4">
              <Button asChild>
                <a href="https://wa.me/905324982684" target="_blank" rel="noopener noreferrer">
                  {language === 'tr' ? 'WhatsApp\'ta Bize Yazın' : 'Message on WhatsApp'}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
