import { site } from "@/lib/site"

// Server component: emits JSON-LD structured data for local SEO.
// Kept in Turkish (primary market language) for maximum local search relevance.

const faq = [
  {
    q: "Alanya'da acil baskı işlerini ne kadar sürede teslim ediyorsunuz?",
    a: "Dijital baskı işlerinin çoğunu aynı gün veya 24 saat içinde teslim ediyoruz. Yoğun sezonda bile acil işleriniz için önceliklendirme yapıyoruz.",
  },
  {
    q: "Tasarım dosyam yok, yardımcı olur musunuz?",
    a: "Elbette. Ücretsiz profesyonel grafik tasarım hizmetimizle kartvizit, broşür, menü ve davetiye tasarımlarınızı sizin için hazırlıyoruz.",
  },
  {
    q: "Konica Minolta C4065 ile hangi kağıtlara baskı yapılıyor?",
    a: "80g ince kağıttan 350g ve üzeri kalın kartona kadar, A3 boyutuna dek canlı renklerle baskı yapabiliyoruz.",
  },
  {
    q: "Dijital baskı mı ofset baskı mı seçmeliyim?",
    a: "Düşük ve orta adetli, hızlı işler için dijital baskı; çok yüksek adetli işler için ofset baskı daha ekonomiktir. Size en uygun seçeneği ücretsiz danışmanlıkla belirliyoruz.",
  },
  {
    q: "Alanya dışına gönderim yapıyor musunuz?",
    a: "Evet, Antalya ve çevre ilçelere kargo ile gönderim yapıyoruz. Detaylar için WhatsApp'tan bize yazabilirsiniz.",
  },
]

const reviews = [
  {
    author: "Mehmet Yılmaz",
    rating: 5,
    body: "Menülerimizi Konica Minolta C4065 ile bastılar, renkler harika çıktı. Acil işimizi zamanında teslim ettiler.",
  },
  {
    author: "Ayşe Demir",
    rating: 5,
    body: "Broşür ve tanıtım kataloglarımızı yıllardır buradan yaptırıyoruz. Ücretsiz tasarım desteği büyük avantaj.",
  },
  {
    author: "Sergey Ivanov",
    rating: 5,
    body: "Tekne turu broşürlerimizi 3 dilde hazırlayıp bastılar. Kalite ve hız mükemmel.",
  },
]

export function StructuredData() {
  const businessId = `${site.url}/#business`

  const localBusiness = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "ProfessionalService"],
    "@id": businessId,
    name: site.name,
    image: `${site.url}/images/digital-press.png`,
    url: site.url,
    telephone: site.phone,
    email: site.email,
    priceRange: "$$",
    foundingDate: "1990",
    slogan: "35+ yıllık tecrübe, 20.000+ mutlu müşteri",
    description:
      "Alanya'da kaşe, ofset ve dijital baskı hizmetleri. Konica Minolta AccurioPrint C4065 ile katalog, broşür, menü ve kartvizit baskısı. Ücretsiz profesyonel grafik tasarım.",
    address: {
      "@type": "PostalAddress",
      streetAddress: site.street,
      addressLocality: site.city,
      addressRegion: site.region,
      postalCode: site.postalCode,
      addressCountry: site.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: site.geo.lat,
      longitude: site.geo.lng,
    },
    areaServed: [
      { "@type": "City", name: "Alanya" },
      { "@type": "AdministrativeArea", name: "Antalya" },
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "09:00",
        closes: "19:00",
      },
    ],
    sameAs: [`https://wa.me/${site.whatsapp}`],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "128",
    },
    review: reviews.map((r) => ({
      "@type": "Review",
      author: { "@type": "Person", name: r.author },
      reviewRating: { "@type": "Rating", ratingValue: r.rating, bestRating: 5 },
      reviewBody: r.body,
    })),
  }

  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPage) }} />
    </>
  )
}
