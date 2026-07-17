export type Lang = "tr" | "en" | "ru"

export const languages: { code: Lang; label: string; flag: string }[] = [
  { code: "tr", label: "Türkçe", flag: "🇹🇷" },
  { code: "en", label: "English", flag: "🇬🇧" },
  { code: "ru", label: "Русский", flag: "🇷🇺" },
]

type ServiceItem = {
  id: string
  title: string
  desc: string
  image: string
}

type PortfolioItem = {
  title: string
  category: string
  image: string
}

export type Dictionary = {
  nav: { home: string; about: string; services: string; products: string; portfolio: string; contact: string }
  cta: { quote: string; call: string; whatsapp: string; viewServices: string; contactUs: string; getOffer: string }
  home: {
    heroTag: string
    heroTitle: string
    heroSubtitle: string
    features: { title: string; desc: string }[]
    servicesTitle: string
    servicesSubtitle: string
    machineTag: string
    machineTitle: string
    machineDesc: string
    machineSpecs: string[]
    quoteTitle: string
    quoteSubtitle: string
    ctaTitle: string
    ctaSubtitle: string
  }
  about: {
    tag: string
    title: string
    lead: string
    body: string[]
    statsTitle: string
    stats: { value: string; label: string }[]
    valuesTitle: string
    values: { title: string; desc: string }[]
  }
  services: {
    tag: string
    title: string
    subtitle: string
    items: ServiceItem[]
    paperTitle: string
    paperSubtitle: string
    paperWeights: { weight: string; use: string }[]
  }
  portfolio: {
    tag: string
    title: string
    subtitle: string
    items: PortfolioItem[]
  }
  contact: {
    tag: string
    title: string
    subtitle: string
    infoTitle: string
    hoursLabel: string
    hours: string
    addressLabel: string
    phoneLabel: string
    emailLabel: string
    mapTitle: string
  }
  quote: {
    service: string
    servicePlaceholder: string
    serviceOptions: string[]
    size: string
    sizePlaceholder: string
    weight: string
    weightPlaceholder: string
    quantity: string
    quantityPlaceholder: string
    sides: string
    single: string
    double: string
    notes: string
    notesPlaceholder: string
    submit: string
    intro: string
  }
  freeDesign: {
    tag: string
    title: string
    desc: string
    points: string[]
    cta: string
  }
  testimonials: {
    tag: string
    title: string
    subtitle: string
    items: { name: string; role: string; text: string }[]
  }
  faq: {
    tag: string
    title: string
    subtitle: string
    items: { q: string; a: string }[]
  }
  blog: {
    tag: string
    title: string
    subtitle: string
    readMore: string
    soon: string
    items: { title: string; excerpt: string; category: string; date: string }[]
  }
  footer: {
    about: string
    quickLinks: string
    contact: string
    rights: string
    phoneLabel: string
    whatsappLabel: string
  }
}

const tr: Dictionary = {
  nav: { home: "Ana Sayfa", about: "Hakkımızda", services: "Hizmetlerimiz", products: "Ürünlerimiz", portfolio: "Portföy", contact: "İletişim" },
  cta: {
    quote: "Hızlı Teklif Al",
    call: "Hemen Ara",
    whatsapp: "WhatsApp",
    viewServices: "Hizmetleri İncele",
    contactUs: "Bize Ulaşın",
    getOffer: "Teklif Al",
  },
  home: {
    heroTag: "Alanya'nın Güvenilir Matbaası",
    heroTitle: "Kaliteli Baskı, Zamanında Teslimat",
    heroSubtitle:
      "Kaşe, ofset ve dijital baskıda uzman ekibimizle işletmenizin tüm baskı ihtiyaçlarını profesyonelce karşılıyoruz.",
    features: [
      { title: "Yüksek Hızlı Dijital Baskı", desc: "Konica Minolta AccurioPrint C4065 ile hızlı ve net baskı." },
      { title: "Kalın Kağıt Desteği", desc: "350g ve üzeri kartonlarda kusursuz baskı kalitesi." },
      { title: "Zamanında Teslimat", desc: "Acil işlerinizde bile söz verdiğimiz tarihte teslim." },
    ],
    servicesTitle: "Hizmetlerimiz",
    servicesSubtitle: "İhtiyacınız olan tüm baskı çözümleri tek çatı altında.",
    machineTag: "Teknoloji",
    machineTitle: "Konica Minolta AccurioPrint C4065",
    machineDesc:
      "Profesyonel dijital baskı makinemiz ile yüksek hızda, canlı renklerde ve A3 boyutuna kadar baskı yapıyoruz. 350g ve üzeri kalın kartonlarda dahi kusursuz sonuçlar elde ediyoruz.",
    machineSpecs: [
      "Dakikada yüksek sayfa baskı hızı",
      "A3 ve büyük ebat baskı desteği",
      "350g+ kalın karton baskısı",
      "Broşür, davetiye ve kartvizit üretimi",
    ],
    quoteTitle: "Hızlı Teklif Formu",
    quoteSubtitle: "Detayları doldurun, teklifinizi WhatsApp üzerinden anında iletelim.",
    ctaTitle: "Projeniz için hazırız",
    ctaSubtitle: "Baskı ihtiyaçlarınızı konuşalım. Size en uygun çözümü sunalım.",
  },
  about: {
    tag: "Hakkımızda",
    title: "Alanya'da Baskının Adresi",
    lead: "35 yılı aşkın tecrübeyle Alanya ve çevresine kaliteli matbaa hizmeti sunuyoruz.",
    body: [
      "Alanya Kale Matbaa olarak, işletmelerin ve bireylerin tüm baskı ihtiyaçlarına modern teknoloji ve deneyimli kadromuzla çözüm üretiyoruz.",
      "Kaşe üretiminden ofset baskıya, dijital baskıdan davetiye ve broşüre kadar geniş bir hizmet yelpazesi sunuyoruz. Konica Minolta AccurioPrint C4065 dijital baskı makinemizle canlı renkler ve keskin detaylar elde ediyoruz.",
      "Müşteri memnuniyetini her zaman ön planda tutar, işlerinizi zamanında ve bütçenize uygun şekilde teslim ederiz.",
    ],
    statsTitle: "Rakamlarla Biz",
    stats: [
      { value: "35+", label: "Yıllık Tecrübe" },
      { value: "20.000+", label: "Mutlu Müşteri" },
      { value: "24s", label: "Hızlı Teslimat" },
      { value: "100%", label: "Kalite Odağı" },
    ],
    valuesTitle: "Değerlerimiz",
    values: [
      { title: "Kalite", desc: "Her işte en yüksek baskı kalitesini hedefleriz." },
      { title: "Güven", desc: "Sözümüzün arkasında dururuz, zamanında teslim ederiz." },
      { title: "Uygun Fiyat", desc: "Rekabetçi fiyatlarla profesyonel hizmet sunarız." },
    ],
  },
  services: {
    tag: "Hizmetlerimiz",
    title: "Baskı Çözümlerimiz",
    subtitle: "İşletmeniz ve etkinlikleriniz için ihtiyacınız olan her şey.",
    items: [
      { id: "kase", title: "Kaşe", desc: "Otomatik ve klasik kaşe üretimi. Hızlı ve net baskı sonucu.", image: "/images/stamps.png" },
      { id: "ofset", title: "Ofset Baskı", desc: "Yüksek adetli işlerde ekonomik ve kaliteli ofset baskı.", image: "/images/offset.png" },
      { id: "dijital", title: "C4065 Dijital Baskı", desc: "Konica Minolta C4065 ile 80g'dan 350g+'a kadar dijital baskı.", image: "/images/digital-press.png" },
      { id: "brosur", title: "Broşür", desc: "Katlı ve düz broşürler, katalog ve tanıtım materyalleri.", image: "/images/brochures.png" },
      { id: "davetiye", title: "Davetiye", desc: "Düğün, nişan ve etkinlikler için şık davetiye baskısı.", image: "/images/invitations.png" },
      { id: "kartvizit", title: "Kartvizit", desc: "Kalın kartonda profesyonel kartvizit baskısı.", image: "/images/business-cards.png" },
    ],
    paperTitle: "Kağıt Gramajları",
    paperSubtitle: "İşinize uygun gramajı seçin, geri kalanını bize bırakın.",
    paperWeights: [
      { weight: "80g", use: "El ilanı, iç sayfa, evrak" },
      { weight: "130g", use: "Broşür, katalog, afiş" },
      { weight: "170g", use: "Kaliteli broşür, poster" },
      { weight: "350g+", use: "Kartvizit, davetiye, kapak" },
    ],
  },
  portfolio: {
    tag: "Portföy",
    title: "Çalışmalarımızdan Örnekler",
    subtitle: "Farklı sektörlerden tamamladığımız baskı projeleri.",
    items: [
      { title: "Kurumsal Kartvizit", category: "Kartvizit", image: "/images/business-cards.png" },
      { title: "Tanıtım Broşürü", category: "Broşür", image: "/images/brochures.png" },
      { title: "Düğün Davetiyesi", category: "Davetiye", image: "/images/invitations.png" },
      { title: "Şirket Kaşesi", category: "Kaşe", image: "/images/stamps.png" },
      { title: "Katalog Baskısı", category: "Dijital", image: "/images/digital-press.png" },
      { title: "Afiş & Poster", category: "Ofset", image: "/images/offset.png" },
    ],
  },
  contact: {
    tag: "İletişim",
    title: "Bize Ulaşın",
    subtitle: "Sorularınız ve teklif talepleriniz için buradayız.",
    infoTitle: "İletişim Bilgileri",
    hoursLabel: "Çalışma Saatleri",
    hours: "Pazartesi - Cumartesi: 09:00 - 19:00",
    addressLabel: "Adres",
    phoneLabel: "Telefon",
    emailLabel: "E-posta",
    mapTitle: "Konumumuz",
  },
  quote: {
    service: "Hizmet Türü",
    servicePlaceholder: "Hizmet seçin",
    serviceOptions: ["Kaşe", "Ofset Baskı", "Dijital Baskı", "Broşür", "Davetiye", "Kartvizit", "Diğer"],
    size: "Boyut",
    sizePlaceholder: "Örn. A4, A5, 9x5 cm",
    weight: "Gramaj",
    weightPlaceholder: "Gramaj seçin",
    quantity: "Adet",
    quantityPlaceholder: "Örn. 500",
    sides: "Baskı Yönü",
    single: "Tek Yön",
    double: "Çift Yön",
    notes: "Açıklama",
    notesPlaceholder: "Ek detaylar, renk, teslim tarihi...",
    submit: "WhatsApp ile Gönder",
    intro: "Merhaba, teklif almak istiyorum:",
  },
  freeDesign: {
    tag: "Ayrıcalığımız",
    title: "Ücretsiz Profesyonel Grafik Tasarım",
    desc: "Baskı siparişlerinizde tasarım derdi yok. Deneyimli grafik ekibimiz CorelDRAW, Photoshop ve yapay zeka destekli araçlarla markanıza özel tasarımları ücretsiz hazırlar.",
    points: [
      "Kartvizit, broşür ve menü tasarımı dahil",
      "CorelDRAW & Adobe Photoshop uzmanlığı",
      "Yapay zeka destekli hızlı revizyon",
      "Baskı öncesi ücretsiz dijital prova",
    ],
    cta: "Ücretsiz Tasarım İste",
  },
  testimonials: {
    tag: "Yorumlar",
    title: "Müşterilerimiz Ne Diyor?",
    subtitle: "Alanya'da işletmelerin ve bireylerin güvendiği matbaa.",
    items: [
      {
        name: "Mehmet Yılmaz",
        role: "Restoran Sahibi, Alanya",
        text: "Menülerimizi Konica Minolta C4065 ile bastırdılar, renkler harika çıktı. Sezon başında acil işimizi zamanında teslim ettiler.",
      },
      {
        name: "Ayşe Demir",
        role: "Otel Yöneticisi",
        text: "Broşür ve tanıtım kataloglarımızı yıllardır buradan yaptırıyoruz. Ücretsiz tasarım desteği gerçekten büyük avantaj.",
      },
      {
        name: "Sergey Ivanov",
        role: "Tur Şirketi",
        text: "Tekne turu broşürlerimizi 3 dilde hazırlayıp bastılar. Kalite ve hız mükemmel, kesinlikle tavsiye ederim.",
      },
    ],
  },
  faq: {
    tag: "S.S.S.",
    title: "Sıkça Sorulan Sorular",
    subtitle: "Aklınıza takılanlar için hızlı yanıtlar.",
    items: [
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
    ],
  },
  blog: {
    tag: "Blog",
    title: "Baskı Rehberi & İpuçları",
    subtitle: "Matbaa dünyasından faydalı bilgiler ve öneriler.",
    readMore: "Devamını Oku",
    soon: "Yakında",
    items: [
      {
        title: "Dijital Baskı ile Ofset Baskı Arasındaki Farklar",
        excerpt: "Hangi iş için hangi baskı yöntemi daha uygun? Maliyet, kalite ve adet karşılaştırması.",
        category: "Rehber",
        date: "2025",
      },
      {
        title: "Restoran Menüsü Baskısında Dikkat Edilmesi Gerekenler",
        excerpt: "Alanya'daki restoranlar için dayanıklı ve şık menü baskısı ipuçları.",
        category: "Menü Baskı",
        date: "2025",
      },
      {
        title: "Kaliteli Kartvizit Nasıl Olur?",
        excerpt: "Kağıt gramajı, laminasyon ve tasarım detaylarıyla fark yaratan kartvizitler.",
        category: "Kartvizit",
        date: "2025",
      },
    ],
  },
  footer: {
    about: "Alanya'da kaşe, ofset ve dijital baskı hizmetleri. Konica Minolta C4065 ile kaliteli baskı, zamanında teslimat.",
    quickLinks: "Hızlı Bağlantılar",
    contact: "İletişim",
    rights: "Tüm hakları saklıdır.",
    phoneLabel: "Telefon",
    whatsappLabel: "WhatsApp",
  },
}

const en: Dictionary = {
  nav: { home: "Home", about: "About", services: "Services", products: "Products", portfolio: "Portfolio", contact: "Contact" },
  cta: {
    quote: "Get a Quick Quote",
    call: "Call Now",
    whatsapp: "WhatsApp",
    viewServices: "View Services",
    contactUs: "Contact Us",
    getOffer: "Get Offer",
  },
  home: {
    heroTag: "Alanya's Trusted Print Shop",
    heroTitle: "Quality Printing, Delivered on Time",
    heroSubtitle:
      "From stamps to offset and digital printing, our expert team handles all of your business's printing needs professionally.",
    features: [
      { title: "High-Speed Digital Printing", desc: "Fast, crisp prints with the Konica Minolta AccurioPrint C4065." },
      { title: "Thick Paper Support", desc: "Flawless print quality on 350g+ cardstock." },
      { title: "On-Time Delivery", desc: "Delivered on the promised date, even for urgent jobs." },
    ],
    servicesTitle: "Our Services",
    servicesSubtitle: "Every printing solution you need under one roof.",
    machineTag: "Technology",
    machineTitle: "Konica Minolta AccurioPrint C4065",
    machineDesc:
      "Our professional digital press produces high-speed, vibrant prints up to A3 size. We achieve flawless results even on 350g+ thick cardstock.",
    machineSpecs: [
      "High page-per-minute print speed",
      "A3 and large-format support",
      "350g+ thick cardstock printing",
      "Brochures, invitations and business cards",
    ],
    quoteTitle: "Quick Quote Form",
    quoteSubtitle: "Fill in the details and we'll send your quote instantly via WhatsApp.",
    ctaTitle: "Ready for your project",
    ctaSubtitle: "Let's talk about your printing needs and find the best solution for you.",
  },
  about: {
    tag: "About Us",
    title: "Your Print Partner in Alanya",
    lead: "We provide quality printing services to Alanya and the surrounding region with over 35 years of experience.",
    body: [
      "At Alanya Kale Matbaa, we solve all the printing needs of businesses and individuals with modern technology and an experienced team.",
      "We offer a wide range of services, from stamp production and offset printing to digital printing, invitations and brochures. Our Konica Minolta AccurioPrint C4065 digital press delivers vibrant colors and sharp detail.",
      "We always put customer satisfaction first, delivering your work on time and within your budget.",
    ],
    statsTitle: "By the Numbers",
    stats: [
      { value: "35+", label: "Years of Experience" },
      { value: "20,000+", label: "Happy Customers" },
      { value: "24h", label: "Fast Turnaround" },
      { value: "100%", label: "Quality Focused" },
    ],
    valuesTitle: "Our Values",
    values: [
      { title: "Quality", desc: "We aim for the highest print quality in every job." },
      { title: "Trust", desc: "We stand behind our word and deliver on time." },
      { title: "Fair Pricing", desc: "Professional service at competitive prices." },
    ],
  },
  services: {
    tag: "Services",
    title: "Our Printing Solutions",
    subtitle: "Everything you need for your business and events.",
    items: [
      { id: "kase", title: "Stamps", desc: "Self-inking and classic stamp production. Fast, sharp results.", image: "/images/stamps.png" },
      { id: "ofset", title: "Offset Printing", desc: "Economical, high-quality offset printing for large runs.", image: "/images/offset.png" },
      { id: "dijital", title: "C4065 Digital Printing", desc: "Digital printing from 80g to 350g+ with the Konica Minolta C4065.", image: "/images/digital-press.png" },
      { id: "brosur", title: "Brochures", desc: "Folded and flat brochures, catalogs and marketing materials.", image: "/images/brochures.png" },
      { id: "davetiye", title: "Invitations", desc: "Elegant invitation printing for weddings and events.", image: "/images/invitations.png" },
      { id: "kartvizit", title: "Business Cards", desc: "Professional business cards on thick cardstock.", image: "/images/business-cards.png" },
    ],
    paperTitle: "Paper Weights",
    paperSubtitle: "Choose the right weight for your job and leave the rest to us.",
    paperWeights: [
      { weight: "80g", use: "Flyers, inner pages, documents" },
      { weight: "130g", use: "Brochures, catalogs, posters" },
      { weight: "170g", use: "Premium brochures, posters" },
      { weight: "350g+", use: "Business cards, invitations, covers" },
    ],
  },
  portfolio: {
    tag: "Portfolio",
    title: "Samples of Our Work",
    subtitle: "Printing projects we've completed across different industries.",
    items: [
      { title: "Corporate Business Cards", category: "Cards", image: "/images/business-cards.png" },
      { title: "Marketing Brochure", category: "Brochure", image: "/images/brochures.png" },
      { title: "Wedding Invitation", category: "Invitation", image: "/images/invitations.png" },
      { title: "Company Stamp", category: "Stamp", image: "/images/stamps.png" },
      { title: "Catalog Printing", category: "Digital", image: "/images/digital-press.png" },
      { title: "Posters & Banners", category: "Offset", image: "/images/offset.png" },
    ],
  },
  contact: {
    tag: "Contact",
    title: "Get in Touch",
    subtitle: "We're here for your questions and quote requests.",
    infoTitle: "Contact Information",
    hoursLabel: "Working Hours",
    hours: "Monday - Saturday: 09:00 - 19:00",
    addressLabel: "Address",
    phoneLabel: "Phone",
    emailLabel: "Email",
    mapTitle: "Our Location",
  },
  quote: {
    service: "Service Type",
    servicePlaceholder: "Select a service",
    serviceOptions: ["Stamp", "Offset Printing", "Digital Printing", "Brochure", "Invitation", "Business Card", "Other"],
    size: "Size",
    sizePlaceholder: "e.g. A4, A5, 9x5 cm",
    weight: "Paper Weight",
    weightPlaceholder: "Select weight",
    quantity: "Quantity",
    quantityPlaceholder: "e.g. 500",
    sides: "Printing Sides",
    single: "Single-Sided",
    double: "Double-Sided",
    notes: "Notes",
    notesPlaceholder: "Extra details, color, deadline...",
    submit: "Send via WhatsApp",
    intro: "Hello, I would like to get a quote:",
  },
  freeDesign: {
    tag: "Our Advantage",
    title: "Free Professional Graphic Design",
    desc: "No design headaches with your print orders. Our experienced graphic team prepares custom designs for your brand for free using CorelDRAW, Photoshop and AI-powered tools.",
    points: [
      "Business card, brochure and menu design included",
      "CorelDRAW & Adobe Photoshop expertise",
      "AI-assisted fast revisions",
      "Free digital proof before printing",
    ],
    cta: "Request Free Design",
  },
  testimonials: {
    tag: "Reviews",
    title: "What Our Customers Say",
    subtitle: "The print shop trusted by businesses and individuals in Alanya.",
    items: [
      {
        name: "Mehmet Yılmaz",
        role: "Restaurant Owner, Alanya",
        text: "They printed our menus on the Konica Minolta C4065 and the colors came out great. Our urgent job was delivered right on time at the start of the season.",
      },
      {
        name: "Ayşe Demir",
        role: "Hotel Manager",
        text: "We've had our brochures and catalogs printed here for years. The free design support is genuinely a huge advantage.",
      },
      {
        name: "Sergey Ivanov",
        role: "Tour Company",
        text: "They prepared and printed our boat tour brochures in 3 languages. Quality and speed are excellent, highly recommended.",
      },
    ],
  },
  faq: {
    tag: "FAQ",
    title: "Frequently Asked Questions",
    subtitle: "Quick answers to what you may be wondering.",
    items: [
      {
        q: "How fast can you deliver urgent print jobs in Alanya?",
        a: "Most digital print jobs are delivered the same day or within 24 hours. Even in peak season, we prioritize your urgent work.",
      },
      {
        q: "I don't have a design file, can you help?",
        a: "Absolutely. With our free professional graphic design service we prepare your business card, brochure, menu and invitation designs for you.",
      },
      {
        q: "What papers can you print on with the Konica Minolta C4065?",
        a: "We print in vibrant colors on everything from 80g light paper to 350g+ thick cardstock, up to A3 size.",
      },
      {
        q: "Should I choose digital or offset printing?",
        a: "Digital printing suits low-to-medium volume, fast jobs; offset is more economical for very high volumes. We help you pick the best option with free consultation.",
      },
      {
        q: "Do you ship outside Alanya?",
        a: "Yes, we ship to Antalya and surrounding districts by courier. Message us on WhatsApp for details.",
      },
    ],
  },
  blog: {
    tag: "Blog",
    title: "Printing Guide & Tips",
    subtitle: "Useful insights and advice from the world of printing.",
    readMore: "Read More",
    soon: "Coming soon",
    items: [
      {
        title: "Differences Between Digital and Offset Printing",
        excerpt: "Which method suits which job? A comparison of cost, quality and quantity.",
        category: "Guide",
        date: "2025",
      },
      {
        title: "What to Consider When Printing a Restaurant Menu",
        excerpt: "Durable and stylish menu printing tips for restaurants in Alanya.",
        category: "Menu Printing",
        date: "2025",
      },
      {
        title: "What Makes a Quality Business Card?",
        excerpt: "Cards that stand out through paper weight, lamination and design details.",
        category: "Business Cards",
        date: "2025",
      },
    ],
  },
  footer: {
    about: "Stamps, offset and digital printing services in Alanya. Quality printing with the Konica Minolta C4065, delivered on time.",
    quickLinks: "Quick Links",
    contact: "Contact",
    rights: "All rights reserved.",
    phoneLabel: "Phone",
    whatsappLabel: "WhatsApp",
  },
}

const ru: Dictionary = {
  nav: { home: "Главная", about: "О нас", services: "Услуги", products: "Продукция", portfolio: "Портфолио", contact: "Контакты" },
  cta: {
    quote: "Быстрый расчёт",
    call: "Позвонить",
    whatsapp: "WhatsApp",
    viewServices: "Смотреть услуги",
    contactUs: "Связаться с нами",
    getOffer: "Получить расчёт",
  },
  home: {
    heroTag: "Надёжная типография Аланьи",
    heroTitle: "Качественная печать точно в срок",
    heroSubtitle:
      "От печатей до офсетной и цифровой печати — наша команда профессионально решает все задачи печати для вашего бизнеса.",
    features: [
      { title: "Высокоскоростная цифровая печать", desc: "Быстрая и чёткая печать на Konica Minolta AccurioPrint C4065." },
      { title: "Печать на плотной бумаге", desc: "Безупречное качество на картоне 350г и выше." },
      { title: "Доставка вовремя", desc: "Сдаём в обещанный срок даже срочные заказы." },
    ],
    servicesTitle: "Наши услуги",
    servicesSubtitle: "Все решения для печати в одном месте.",
    machineTag: "Технологии",
    machineTitle: "Konica Minolta AccurioPrint C4065",
    machineDesc:
      "Наш профессиональный цифровой пресс печатает быстро, в ярких цветах и до формата A3. Мы добиваемся безупречного результата даже на плотном картоне 350г и выше.",
    machineSpecs: [
      "Высокая скорость печати страниц в минуту",
      "Поддержка формата A3 и большого формата",
      "Печать на плотном картоне 350г+",
      "Брошюры, приглашения и визитки",
    ],
    quoteTitle: "Форма быстрого расчёта",
    quoteSubtitle: "Заполните данные, и мы мгновенно отправим расчёт в WhatsApp.",
    ctaTitle: "Готовы к вашему проекту",
    ctaSubtitle: "Обсудим ваши задачи печати и подберём лучшее решение.",
  },
  about: {
    tag: "О нас",
    title: "Ваш партнёр по печати в Аланье",
    lead: "Мы предоставляем качественные полиграфические услуги в Аланье и регионе с опытом более 35 лет.",
    body: [
      "В Alanya Kale Matbaa мы решаем все задачи печати для бизнеса и частных лиц с помощью современных технологий и опытной команды.",
      "Мы предлагаем широкий спектр услуг — от изготовления печатей и офсетной печати до цифровой печати, приглашений и брошюр. Наш цифровой пресс Konica Minolta AccurioPrint C4065 обеспечивает яркие цвета и чёткие детали.",
      "Мы всегда ставим удовлетворённость клиентов на первое место, сдавая работу вовремя и в рамках вашего бюджета.",
    ],
    statsTitle: "В цифрах",
    stats: [
      { value: "35+", label: "Лет опыта" },
      { value: "20 000+", label: "Довольных клиентов" },
      { value: "24ч", label: "Быстрое исполнение" },
      { value: "100%", label: "Фокус на качестве" },
    ],
    valuesTitle: "Наши ценности",
    values: [
      { title: "Качество", desc: "Стремимся к высшему качеству печати в каждом заказе." },
      { title: "Доверие", desc: "Держим слово и сдаём вовремя." },
      { title: "Честные цены", desc: "Профессиональный сервис по конкурентным ценам." },
    ],
  },
  services: {
    tag: "Услуги",
    title: "Наши решения для печати",
    subtitle: "Всё необходимое для вашего бизнеса и мероприятий.",
    items: [
      { id: "kase", title: "Печати", desc: "Изготовление автоматических и классических печатей. Быстро и чётко.", image: "/images/stamps.png" },
      { id: "ofset", title: "Офсетная печать", desc: "Экономичная и качественная офсетная печать больших тиражей.", image: "/images/offset.png" },
      { id: "dijital", title: "Цифровая печать C4065", desc: "Цифровая печать от 80г до 350г+ на Konica Minolta C4065.", image: "/images/digital-press.png" },
      { id: "brosur", title: "Брошюры", desc: "Складные и плоские брошюры, каталоги и рекламные материалы.", image: "/images/brochures.png" },
      { id: "davetiye", title: "Приглашения", desc: "Элегантная печать приглашений для свадеб и мероприятий.", image: "/images/invitations.png" },
      { id: "kartvizit", title: "Визитки", desc: "Профессиональные визитки на плотном картоне.", image: "/images/business-cards.png" },
    ],
    paperTitle: "Плотность бумаги",
    paperSubtitle: "Выберите нужную плотность, остальное сделаем мы.",
    paperWeights: [
      { weight: "80г", use: "Листовки, внутренние страницы, документы" },
      { weight: "130г", use: "Брошюры, каталоги, афиши" },
      { weight: "170г", use: "Премиум-брошюры, постеры" },
      { weight: "350г+", use: "Визитки, приглашения, обложки" },
    ],
  },
  portfolio: {
    tag: "Портфолио",
    title: "Примеры наших работ",
    subtitle: "Проекты печати, выполненные для разных отраслей.",
    items: [
      { title: "Корпоративные визитки", category: "Визитки", image: "/images/business-cards.png" },
      { title: "Рекламная брошюра", category: "Брошюра", image: "/images/brochures.png" },
      { title: "Свадебное приглашение", category: "Приглашение", image: "/images/invitations.png" },
      { title: "Печать компании", category: "Печать", image: "/images/stamps.png" },
      { title: "Печать каталога", category: "Цифровая", image: "/images/digital-press.png" },
      { title: "Постеры и баннеры", category: "Офсет", image: "/images/offset.png" },
    ],
  },
  contact: {
    tag: "Контакты",
    title: "Свяжитесь с нами",
    subtitle: "Мы здесь, чтобы ответить на ваши вопросы и запросы.",
    infoTitle: "Контактная информация",
    hoursLabel: "Часы работы",
    hours: "Понедельник - Суббота: 09:00 - 19:00",
    addressLabel: "Адрес",
    phoneLabel: "Телефон",
    emailLabel: "Эл. почта",
    mapTitle: "Наше расположение",
  },
  quote: {
    service: "Тип услуги",
    servicePlaceholder: "Выберите услугу",
    serviceOptions: ["Печать", "Офсетная печать", "Цифровая печать", "Брошюра", "Приглашение", "Визитка", "Другое"],
    size: "Размер",
    sizePlaceholder: "напр. A4, A5, 9x5 см",
    weight: "Плотность бумаги",
    weightPlaceholder: "Выберите плотность",
    quantity: "Количество",
    quantityPlaceholder: "напр. 500",
    sides: "Стороны печати",
    single: "Односторонняя",
    double: "Двусторонняя",
    notes: "Комментарий",
    notesPlaceholder: "Доп. детали, цвет, срок...",
    submit: "Отправить в WhatsApp",
    intro: "Здравствуйте, хочу получить расчёт:",
  },
  freeDesign: {
    tag: "Наше преимущество",
    title: "Бесплатный профессиональный дизайн",
    desc: "Никаких забот о дизайне при заказе печати. Наша опытная команда дизайнеров бесплатно готовит индивидуальный дизайн для вашего бренда в CorelDRAW, Photoshop и с помощью ИИ-инструментов.",
    points: [
      "Дизайн визиток, брошюр и меню включён",
      "Опыт работы в CorelDRAW и Adobe Photoshop",
      "Быстрые правки с помощью ИИ",
      "Бесплатная цифровая проба перед печатью",
    ],
    cta: "Запросить дизайн бесплатно",
  },
  testimonials: {
    tag: "Отзывы",
    title: "Что говорят наши клиенты",
    subtitle: "Типография, которой доверяют компании и частные лица в Аланье.",
    items: [
      {
        name: "Мехмет Йылмаз",
        role: "Владелец ресторана, Аланья",
        text: "Напечатали наши меню на Konica Minolta C4065 — цвета вышли отличные. Срочный заказ сдали вовремя к началу сезона.",
      },
      {
        name: "Айше Демир",
        role: "Менеджер отеля",
        text: "Уже много лет печатаем здесь брошюры и каталоги. Бесплатная поддержка по дизайну — реально большое преимущество.",
      },
      {
        name: "Сергей Иванов",
        role: "Турагентство",
        text: "Подготовили и напечатали брошюры для морских туров на 3 языках. Качество и скорость превосходные, очень рекомендую.",
      },
    ],
  },
  faq: {
    tag: "Вопросы",
    title: "Часто задаваемые вопросы",
    subtitle: "Быстрые ответы на то, что вас интересует.",
    items: [
      {
        q: "Как быстро вы выполняете срочные заказы печати в Аланье?",
        a: "Большинство заказов цифровой печати мы сдаём в тот же день или в течение 24 часов. Даже в высокий сезон срочные заказы в приоритете.",
      },
      {
        q: "У меня нет файла дизайна, вы поможете?",
        a: "Конечно. Благодаря бесплатному профессиональному дизайну мы подготовим для вас визитки, брошюры, меню и приглашения.",
      },
      {
        q: "На какой бумаге можно печатать на Konica Minolta C4065?",
        a: "Печатаем яркими цветами на всём — от лёгкой бумаги 80г до плотного картона 350г и выше, вплоть до формата A3.",
      },
      {
        q: "Выбрать цифровую или офсетную печать?",
        a: "Цифровая печать подходит для малых и средних быстрых тиражей; офсет выгоднее для очень больших тиражей. Мы бесплатно поможем выбрать лучший вариант.",
      },
      {
        q: "Доставляете ли вы за пределы Аланьи?",
        a: "Да, отправляем в Анталью и соседние районы курьером. Напишите нам в WhatsApp для деталей.",
      },
    ],
  },
  blog: {
    tag: "Блог",
    title: "Гид по печати и советы",
    subtitle: "Полезная информация и рекомендации из мира полиграфии.",
    readMore: "Читать далее",
    soon: "Скоро",
    items: [
      {
        title: "Различия между цифровой и офсетной печатью",
        excerpt: "Какой метод для какой задачи? Сравнение цены, качества и тиража.",
        category: "Гид",
        date: "2025",
      },
      {
        title: "На что обратить внимание при печати меню ресторана",
        excerpt: "Советы по прочной и стильной печати меню для ресторанов Аланьи.",
        category: "Печать меню",
        date: "2025",
      },
      {
        title: "Каким должна быть качественная визитка?",
        excerpt: "Визитки, которые выделяются плотностью бумаги, ламинацией и деталями дизайна.",
        category: "Визитки",
        date: "2025",
      },
    ],
  },
  footer: {
    about: "Печати, офсетная и цифровая печать в Аланье. Качественная печать на Konica Minolta C4065 точно в срок.",
    quickLinks: "Быстрые ссылки",
    contact: "Контакты",
    rights: "Все права защищены.",
    phoneLabel: "Телефон",
    whatsappLabel: "WhatsApp",
  },
}

export const dictionaries: Record<Lang, Dictionary> = { tr, en, ru }
