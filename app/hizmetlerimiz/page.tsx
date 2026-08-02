import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { LanguageSwitcher } from '@/components/language-switcher';

const services = [
  {
    id: 'kartvizit-baski-alanya',
    tag: 'Kartvizit Baskısı',
    title: 'Profesyonel Kartvizit Tasarım ve Baskısı',
    subtitle: 'Alanya\'da yüksek kaliteli kartvizit baskısı. Dijital ve ofset baskı, aynı gün teslim.',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/kart2-8wjyA6bLExi6NPDQyowGrlhxjcRnnr.jpeg',
  },
  {
    id: 'brosur-baski-alanya',
    tag: 'Broşür Baskısı',
    title: 'Etkili Broşür Tasarımı ve Baskısı',
    subtitle: 'Profesyonel broşür tasarımı. Tek kırım, 3 kırım, cepli dosya broşürleri.',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/restoran%20bro%C5%9F%C3%BCr%C3%BC-BxbrDaVG02Is29VWZm3JuUCqlmMlW4.jpeg',
  },
  {
    id: 'menus-baski-alanya',
    tag: 'Menü Tasarımı',
    title: 'Restaurant Menü Tasarımı ve Baskısı',
    subtitle: 'Özel menü tasarımları. Laminate, cepli, standart menü seçenekleri.',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/el%20ilan%C4%B1%20bask%C4%B1s%C4%B1-Lc9UFMK1571wFbHSBw7osqiJs4Bl3m.jpeg',
  },
  {
    id: 'dijital-baski-alanya',
    tag: 'Dijital Baskı',
    title: 'Hızlı Dijital Baskı Çözümleri',
    subtitle: 'Az adetten çok adata kadar. Renkli ve siyah-beyaz baskı hizmetleri.',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/katalog2-h0DoTxIrVOaaHt6GaYOzwKiCytHbih.jpeg',
  },
  {
    id: 'ofset-baski-alanya',
    tag: 'Ofset Baskı',
    title: 'Yüksek Adetler İçin Ofset Baskı',
    subtitle: '500+ adetten ekonomik fiyat. Mükemmel renk doğruluğu ve tutarlılığı.',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/tahsilat2-FSg1UZXFLRC6cu3OCpyVHI2ndS674g.jpeg',
  },
  {
    id: 'kase-yapimi-alanya',
    tag: 'Kaşe Yapımı',
    title: 'Profesyonel Kaşe Tasarım ve Baskısı',
    subtitle: 'Kurumsal, öğretmen, cep ve otomatik kaşeler. Ücretsiz tasarım.',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ka%C5%9Fe7-IFUNrNFYzXaYK00m1Y2D3pUInD68Bi.jpeg',
  },
  {
    id: 'etiket-baski-alanya',
    tag: 'Etiket Baskısı',
    title: 'Ürün Etiketleri ve Paket Tasarımı',
    subtitle: 'Barkodlu etiketler, kendinden yapışkanlı etiketler. Gıda, kozmetik, tekstil.',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Deri%20%C3%BCr%C3%BCn%20sertifikas%C4%B1-QtxeEvwVWg1wP8M8n16kFsryCrjl2L.jpeg',
  },
  {
    id: 'afis-baski-alanya',
    tag: 'Afiş Baskısı',
    title: 'Etkinlik ve Reklam Afiş Tasarımı',
    subtitle: 'Dikkat çeken afiş tasarımları. A3, A2, A1 ve özel boyutlar.',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/otel%20anket%20formu-T6ikkxaMRJ2X6cOIDRgvSkjtt8XG9b.jpeg',
  },
  {
    id: 'el-ilani-baski-alanya',
    tag: 'El İlanı Baskısı',
    title: 'El İlanı ve Gözat Tasarım Baskısı',
    subtitle: 'Menü, promosyon, duyuru el ilanları. Hızlı ve ekonomik çözümler.',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hamam%20bro%C5%9F%C3%BCr%C3%BC-vYoJT1YUCLnZT5UVQHV6pUv98Q6MHL.jpeg',
  },
];

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
