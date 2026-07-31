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

  const services = [
    {
      "@type": "Service",
      name: "Dijital Baskı",
      description: "Konica Minolta AccurioPrint C4065 ile yüksek kaliteli dijital baskı hizmeti. 80g ince kağıttan 350g kalın kartona, A3 boyutuna dek canlı renklerle baskı.",
      provider: { "@id": businessId },
      areaServed: [
        { "@type": "City", name: "Alanya" },
        { "@type": "City", name: "Mahmutlar" },
        { "@type": "City", name: "Oba" },
        { "@type": "AdministrativeArea", name: "Antalya" },
      ],
      image: `${site.url}/images/digital-press.png`,
      offers: { "@type": "Offer", priceCurrency: "TRY", price: "Fiyat sorgulatınız", priceValidUntil: "2025-12-31" },
    },
    {
      "@type": "Service",
      name: "Acil Kaşe Basımı",
      description: "Alanya'da acil kaşe üretimi - şirket kaşesi, öğretmen kaşesi, cep kaşesi, kurumsal kaşe. Aynı gün teslim hizmetleri mevcuttur.",
      provider: { "@id": businessId },
      areaServed: [
        { "@type": "City", name: "Alanya" },
        { "@type": "City", name: "Mahmutlar" },
        { "@type": "AdministrativeArea", name: "Antalya" },
      ],
    },
    {
      "@type": "Service",
      name: "Katalog ve Broşür Baskısı",
      description: "Profesyonel katalog, broşür ve tanıtım malzemeleri baskısı. Tek renkli ila tam renkli, 80g ince kağıttan 350g kalın kartona. Amerikan Cilt, Embosse, Laklama seçenekleri.",
      provider: { "@id": businessId },
      areaServed: [
        { "@type": "City", name: "Alanya" },
        { "@type": "City", name: "Antalya" },
      ],
    },
    {
      "@type": "Service",
      name: "Menü Baskısı",
      description: "Restoran, kafe ve otel menüleri için özel tasarım ve yüksek kaliteli baskı. Kurumsal kimlik ve dayanıklı malzeme seçenekleri.",
      provider: { "@id": businessId },
      areaServed: [
        { "@type": "City", name: "Alanya" },
        { "@type": "City", name: "Konaklı" },
        { "@type": "AdministrativeArea", name: "Antalya" },
      ],
    },
    {
      "@type": "Service",
      name: "Kartvizit Baskısı",
      description: "Profesyonel kartvizit tasarım ve baskısı. Çeşitli kağıt seçenekleri ve finish (mat, parlak, kumlama) mevcuttur. Ücretsiz tasarım danışmanlığı.",
      provider: { "@id": businessId },
      areaServed: [
        { "@type": "City", name: "Alanya" },
        { "@type": "AdministrativeArea", name: "Antalya" },
      ],
    },
    {
      "@type": "Service",
      name: "Davetiye Baskısı",
      description: "Düğün, nişan, mezuniyet ve kurumsal davetiye tasarım ve baskısı. Özel baskı teknikleri ve premium kağıt seçenekleri.",
      provider: { "@id": businessId },
      areaServed: [
        { "@type": "City", name: "Alanya" },
        { "@type": "AdministrativeArea", name: "Antalya" },
      ],
    },
    {
      "@type": "Service",
      name: "Ücretsiz Grafik Tasarım",
      description: "Tüm baskı siparişleriniz için profesyonel grafik tasarım hizmetleri tamamen ücretsizdir. Tasarım danışmanlığı ve revizyon hizmeti dahil.",
      provider: { "@id": businessId },
      areaServed: [
        { "@type": "City", name: "Alanya" },
      ],
    },
  ]

  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    url: site.url,
    logo: `${site.url}/images/digital-press.png`,
    description:
      "Alanya'da 35+ yıllık matbaacılık tecrübesi. Dijital & ofset baskı, kaşe, katalog, broşür, kartvizit ve menü baskı hizmetleri.",
    foundingDate: "1990",
    address: {
      "@type": "PostalAddress",
      streetAddress: site.street,
      addressLocality: site.city,
      addressRegion: site.region,
      postalCode: site.postalCode,
      addressCountry: site.country,
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Service",
      telephone: site.phone,
      email: site.email,
    },
    sameAs: [`https://wa.me/${site.whatsapp}`],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPage) }} />
      {services.map((service, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(service) }}
        />
      ))}
    </>
  )
}
