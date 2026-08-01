import { site } from "@/lib/site"

// Server component: emits JSON-LD structured data for local SEO.
// Kept in Turkish (primary market language) for maximum local search relevance.

const faq = [
  {
    q: "Alanya'da acil baskı işlerini ne kadar sürede teslim ediyorsunuz?",
    a: "Dijital baskı işlerinin çoğunu aynı gün veya 24 saat içinde teslim ediyoruz. Yoğun turist sezonunda (Haziran-Eylül) bile acil işleriniz için önceliklendirme yapıyoruz. Kaşe basımı genellikle 2-3 gün, ofset baskı ise adet ve tasarım karmaşıklığına göre 3-7 gün sürer. Acil işler için WhatsApp'tan hemen teklif alabilirsiniz.",
  },
  {
    q: "Tasarım dosyam yok, yardımcı olur musunuz?",
    a: "Elbette, tamamen ücretsiz. Profesyonel grafik tasarım ekibimiz kartvizit, broşür, menü, davetiye, katalog ve tüm baskı ürünlerinin tasarımını sizin için hazırlıyoruz. Fikrinizi, marka rengini ve tercihlerini bize anlatsanız, 2-3 revizyon içinde mükemmel tasarımı ortaya çıkarıyoruz.",
  },
  {
    q: "Konica Minolta AccurioPrint C4065 ile hangi kağıtlara baskı yapılıyor?",
    a: "80g ince matt kağıttan 350g ve üzeri kalın kraflı kartona kadar, A3+ boyutuna dek (320x450mm) canlı renklerle baskı yapabiliyoruz. Parlak, mat ve strukturlu kağıt seçenekleri mevcuttur. Özel kağıtlar için (uydu, aydınger vs.) danışmanlık yapabiliriz.",
  },
  {
    q: "Dijital baskı mı ofset baskı mı seçmeliyim?",
    a: "Dijital baskı: 1-500 adet arası, acil işler, kişiselleştirme için ideal. Ofset baskı: 500+ adet, bütçe dostu, yüksek kalite için tercih edilir. Kartvizit, broşür, katalog gibi ürünlerde dijital hızlıdır. Menü, davetiye gibi karmaşık tasarımlarda ofset daha güzel sonuç verir. Size en uygun seçeneği ücretsiz danışmanlıkla belirliyoruz.",
  },
  {
    q: "Alanya dışına gönderim yapıyor musunuz?",
    a: "Evet, Mahmutlar, Oba, Cikcilli, Konaklı gibi tüm Alanya çevre mahallelere ve Antalya bölgesine kargo ile gönderim yapıyoruz. Ayrıca Türkiye'nin diğer şehirlerine de PostPack, Aras veya MNG kargo ile göndeririz. Detaylar ve fiyatlar için WhatsApp'tan bize yazabilirsiniz.",
  },
  {
    q: "Kaşe çeşitleri nelerdir ve hangileri acil yapılabilir?",
    a: "Kurumsal kaşe, öğretmen kaşesi, cep kaşesi, lastikli kaşe, otomatik kaşe olmak üzere birçok seçenekte acil baskı yapabiliyoruz. Çoğu standart kaşe aynı gün basılabilir. Özel tasarım kaşeler 2-3 gün sürebilir. Kaşe baskı fiyatları adete, malzemeye ve tasarım karmaşıklığına göre değişir.",
  },
  {
    q: "Alanya'da katalog baskı kaç günde teslim olur?",
    a: "Standart katalog baskıları 5-7 gün içinde teslim edilir (tasarım onayından sonra). Acil katalog işleri 3-4 günde yapabiliyoruz. Tasarım, hazırlık, baskı, laminasyon (opsiyonel), cilt ve kontrol işlemleri dahil. Çok acil ise WhatsApp'tan iletişim kurarak özel tarife talep edebilirsiniz.",
  },
  {
    q: "Broşür baskısında hangi cilt seçenekleri var?",
    a: "Amerikan cilt (perfect binding), sadece baskı (yapışkanlı), tel zımba, spiral cilt gibi seçenekler sunuyoruz. Kâğıt türü de (mat, parlak, kumlama) tercih edilebilir. Renkli, tek renkli, çift taraflı baskı hepsi mümkün. Fiyat ve teslim süresine göre en uygun cilt türünü önerebiliriz.",
  },
  {
    q: "Menü baskısında malzeme dayanıklılığı nasıl?",
    a: "Restoranlar, kafeler ve otellerin yoğun kullanımına dayanıklı, suya ve yağa dirençli kağıt ve laminasyon seçenekleri sunuyoruz. Özellikle yaz mevsiminde turist alanlarındaki restoranlar için su geçirmez plastik menü de basabiliriz. Kaliteyi test ettikten sonra tam doyumlu dönersiniz.",
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
    "@type": ["LocalBusiness", "PrintShop", "ProfessionalService"],
    "@id": businessId,
    name: site.name,
    image: `${site.url}/images/digital-press.png`,
    logo: {
      "@type": "ImageObject",
      url: `${site.url}/images/kale-matbaa-logo.png`,
      width: 1200,
      height: 1200,
    },
    url: site.url,
    telephone: site.phone,
    email: site.email,
    priceRange: "$$",
    foundingDate: "1990",
    slogan: "35+ yıllık tecrübe, 20.000+ mutlu müşteri",
    description:
      "Alanya Şekerhane'de bulunan 35+ yıllık profesyonel matbaacılık hizmeti. Dijital (Konica Minolta C4065), ofset ve kaşe basımı. Kartvizit, broşür, katalog, menü, davetiye. Aynı gün teslim, ücretsiz grafik tasarım.",
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
      { "@type": "City", name: "Mahmutlar" },
      { "@type": "City", name: "Oba" },
      { "@type": "City", name: "Cikcilli" },
      { "@type": "City", name: "Konaklı" },
      { "@type": "AdministrativeArea", name: "Antalya" },
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "09:00",
        closes: "19:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Sunday",
        opens: "10:00",
        closes: "17:00",
      },
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Service",
      telephone: site.phone,
      email: site.email,
      areaServed: [
        { "@type": "City", name: "Alanya" },
        { "@type": "AdministrativeArea", name: "Antalya" },
      ],
    },
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
        { "@type": "City", name: "Cikcilli" },
        { "@type": "City", name: "Konaklı" },
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
