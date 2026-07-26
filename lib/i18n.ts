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
  kase: {
    tag: string
    title: string
    subtitle: string
    intro: string
    typesTitle: string
    typesDesc: string[]
    specsTitle: string
    specs: { title: string; desc: string }[]
    colorsTitle: string
    colorsDesc: string
    colors: { name: string; usage: string; class: string }[]
    processTitle: string
    process: { title: string; desc: string }[]
    ctaTitle: string
    ctaDesc: string
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
      { id: "kase", title: "Profesyonel Kaşe Çeşitleri", desc: "Şirket Kaşesi, Şahıs Şirketi, Öğretmen, Cep, Yuvarlak Otomatik ve Stampa Kaşeleri. Siyah, Mavi, Kırmızı mürekkep seçenekleri.", image: "/images/stamps.png" },
      { id: "otel", title: "Otel & Konaklama Baskı", desc: "Konaklama Belgesi, Adisyon, Housekeeper Raporu, Teknik Servis, Safe Makbuzu ve daha pek çok form çözümü.", image: "/images/hotel-print.png" },
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
        q: "Kaşe yaptırmak istiyorum hangi bilgileri size göndermeliyim?",
        a: "Limited Şirket ve Anonim Şirketlerde şirket ünvanı, adres ve vergi numarası yeterlidir. İsteğe göre telefon numarası, mersis ve ticaret sicil numaraları, mail adresi gibi bilgiler eklenebilir. Şahıs şirketinde isim soysim, adres ve T.C. kimlik numarası (vergi dairesi numarası) yeterlidir. İsteğe göre ünvan, telefon numarası, mail adresi eklenebilir.",
      },
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
  kase: {
    tag: "Profesyonel Kaşe Çeşitleri",
    title: "Profesyonel Kaşe Çeşitleri ve Baskı Hizmeti",
    subtitle: "Şirketinizin ve kişisel markanızın resmi onay aracı olan kaşelerde geniş ürün yelpazesi. Kaliteli malzeme, hızlı teslimat, uygun fiyat.",
    intro: "Kaşe, işletmenin veya kişinin yasal belgelerini tasdik etmek için kullanılan resmi bir araçtır. Alanya Kale Matbaa olarak, tüm kaşe ihtiyaçlarınız için profesyonel ve güvenilir hizmetler sunuyoruz. Standart kaşelerden başlayarak özel tasarımlı kaşelere kadar geniş bir yelpaze oluşturdum.",
    typesTitle: "Kaşe Çeşitleri",
    typesDesc: [
      "Şirket Kaşesi: Limited Şirket ve Anonim Şirketler için kullanılan resmi kaşeler. Şirketin ünvanı, adresi ve vergi numarası ile birlikte kullanılır.",
      "Şahıs Şirketi Kaşesi: Esnaf, sanatkar ve serbest meslek sahibi olan işletmeleri için tasarlanmış kaşeler.",
      "Öğretmen Kaşesi: Eğitim kurumlarında kullanılan kaşeler, not defter ve belgelerine imza atarken kullanılır.",
      "Cep Kaşesi & Yuvarlak Cep Kaşesi: Kolaylık ve mobilite için tasarlanmış kompakt kaşeler. İş ve yaşamın her yerinde pratik kullanım.",
      "Yuvarlak Otomatik Kaşe: Modern işletmelerin tercih ettiği, mürekkep sistemi sayesinde kolay ve hızlı kullanım sağlayan kaşeler.",
      "Stampa Kaşe & Logolu Kaşe: Özel tasarım ve markalama ihtiyaçları için, işletmenizin logosu ve özel bilgileri ile hazırlanmış kaşeler."
    ],
    specsTitle: "Mürekkep Renk Seçenekleri",
    specs: [
      {
        title: "Siyah Mürekkep",
        desc: "En yaygın ve resmi karışımda kullanılan mürekkep rengi. Resmi belgeler ve yasal işlemler için tercih edilir."
      },
      {
        title: "Mavi Mürekkep",
        desc: "Modern ve profesyonel görünüm için seçilen renk. Ofis ortamlarında geniş kullanım alanı bulunan bir seçenek."
      },
      {
        title: "Kırmızı Mürekkep",
        desc: "Acil, uyarı ve özel durum belgelerine kullanılan renk. İşletmelerin dikkat çeken markası için tercih edilir."
      }
    ],
    colorsTitle: "Kaşe Renkleri ve Mürekkep Seçenekleri",
    colorsDesc: "Kaşelerınızı maksimum fayda sağlayacak şekilde renk ve mürekkep seçenekleriyle özelleştirebilirsiniz. Her rengin kendine özgü kullanım alanı ve müşteri etkileri vardır.",
    colors: [
      { name: "Siyah", usage: "Resmi ve yasal işlemler", class: "border-black bg-black/10" },
      { name: "Mavi", usage: "Ofis ve kurumsal kullanım", class: "border-blue-500 bg-blue-500/10" },
      { name: "Kırmızı", usage: "Acil ve uyarı bildirimler", class: "border-red-500 bg-red-500/10" }
    ],
    processTitle: "Kaşe Yapımı Süreci",
    process: [
      {
        title: "Bilgi Alınması",
        desc: "Şirketin veya kişinin tam bilgilerini, ünvanı, adresi ve vergi numarası gibi detayları alıyoruz."
      },
      {
        title: "Tasarım & Onay",
        desc: "Kaşe tasarımını hazırlıyoruz ve müşterinin onayını alıyoruz. İsteğe göre değişiklikler yapıyoruz."
      },
      {
        title: "Üretim",
        desc: "En yüksek kalitede malzeme ve teknoloji kullanarak kaşeleri üretiyoruz."
      },
      {
        title: "Mürekkep Doldurma",
        desc: "Tercih edilen mürekkep rengini kaşeye dolduruyoruz ve test ediyoruz."
      },
      {
        title: "Kalite Kontrol",
        desc: "Her kaşe kalite kontrol sürecinden geçer ve mükemmel baskı sağlandığını doğrularız."
      }
    ],
    ctaTitle: "Profesyonel Kaşe Çözümü İçin Bize Ulaşın",
    ctaDesc: "Şirketinizin veya kişisel markanızın resmi kaşesi için en uygun çözümü bulmak için WhatsApp üzerinden bize mesaj gönderin. Ücretsiz danışmanlık ve hızlı teslimat garantisi."
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
      { id: "kase", title: "Professional Stamp Selection", desc: "Company seals, personal company, teacher, pocket, round self-inking and stamper seals. Black, Blue, Red ink options.", image: "/images/stamps.png" },
      { id: "otel", title: "Hotel & Accommodation Printing", desc: "Registration Forms, Invoices, Housekeeper Reports, Technical Service forms, Safe Receipts and many more custom solutions.", image: "/images/hotel-print.png" },
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
        q: "I want to make a seal, what information should I send you?",
        a: "For Limited Companies and Joint Stock Companies, the company name, address and tax number are sufficient. You can additionally provide phone number, Mersis and trade registration numbers, and email address if desired. For sole proprietorships, your name, surname, address and Turkish ID number (tax office number) are sufficient. Additional information like title, phone number and email can be provided if desired.",
      },
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
  kase: {
    tag: "Professional Stamp Types",
    title: "Professional Stamp Types and Printing Service",
    subtitle: "A wide range of stamp products that serve as official approval tools for your company and personal brand. Quality materials, fast delivery, affordable prices.",
    intro: "A seal (stamp) is an official tool used to authenticate legal documents of a business or individual. As Alanya Kale Matbaa, we provide professional and reliable services for all your stamp needs. We offer a wide range from standard seals to specially designed custom stamps.",
    typesTitle: "Types of Seals",
    typesDesc: [
      "Company Seal: Official seals for Limited Companies and Joint Stock Companies. Used with the company name, address and tax number.",
      "Personal Company Seal: Designed seals for sole proprietors, craftspeople and self-employed professionals.",
      "Teacher Seal: Seals used in educational institutions for signing grade books and documents.",
      "Pocket Seal & Round Pocket Seal: Compact seals designed for convenience and mobility. Practical for use anywhere in business and life.",
      "Round Self-Inking Seal: The choice of modern businesses; thanks to its ink system, it provides easy and fast use.",
      "Stamper Seal & Logo Seal: For special design and branding needs, seals prepared with your company logo and special information."
    ],
    specsTitle: "Ink Color Options",
    specs: [
      {
        title: "Black Ink",
        desc: "The most common ink color used in official documents. Preferred for official documents and legal proceedings."
      },
      {
        title: "Blue Ink",
        desc: "The color chosen for a modern and professional appearance. A widely used option in office environments."
      },
      {
        title: "Red Ink",
        desc: "The color used on urgent, warning and special occasion documents. Preferred for attention-grabbing branding."
      }
    ],
    colorsTitle: "Seal Colors and Ink Options",
    colorsDesc: "You can customize your seals with color and ink options to provide maximum benefit. Each color has its own unique use case and customer impact.",
    colors: [
      { name: "Black", usage: "Official and legal matters", class: "border-black bg-black/10" },
      { name: "Blue", usage: "Office and corporate use", class: "border-blue-500 bg-blue-500/10" },
      { name: "Red", usage: "Urgent and warning notices", class: "border-red-500 bg-red-500/10" }
    ],
    processTitle: "Seal Manufacturing Process",
    process: [
      {
        title: "Information Collection",
        desc: "We gather complete information about the company or individual, including name, address and tax number details."
      },
      {
        title: "Design & Approval",
        desc: "We prepare the seal design and get customer approval. We make changes as needed."
      },
      {
        title: "Production",
        desc: "We manufacture seals using the highest quality materials and technology."
      },
      {
        title: "Ink Filling",
        desc: "We fill the seal with the preferred ink color and test it."
      },
      {
        title: "Quality Control",
        desc: "Every seal goes through quality control and we verify perfect printing is achieved."
      }
    ],
    ctaTitle: "Contact Us for Professional Seal Solutions",
    ctaDesc: "Send us a message via WhatsApp to find the best solution for your company or personal brand seal. Free consultation and fast delivery guaranteed."
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
      { id: "kase", title: "Профессиональные печати", desc: "Корпоративные печати, личные фирменные, учительские, карманные, круглые автоматические и штамповые печати. Выбор цвета чернил: чёрный, синий, красный.", image: "/images/stamps.png" },
      { id: "otel", title: "Печать для отелей и гостиниц", desc: "Формы регистрации, счета, отчёты персонала, квитанции, расписки и множество других решений для отельных операций.", image: "/images/hotel-print.png" },
      { id: "ofset", title: "Офсетная печать", desc: "Экономичная и качественная офсетная печать больших тиражей.", image: "/images/offset.png" },
      { id: "dijital", title: "Цифровая печать C4065", desc: "Цифровая печать от 80г до 350г+ на Konica Minolta C4065.", image: "/images/digital-press.png" },
      { id: "brosur", title: "Брошюры", desc: "Складные и плоские брошюры, каталоги и рекламные материалы.", image: "/images/brochures.png" },
      { id: "davetiye", title: "Приглашения", desc: "Элегантная печать приглашений для сваде�� и мероприятий.", image: "/images/invitations.png" },
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
        q: "Я хочу сделать печать, какую информацию мне нужно вам отправить?",
        a: "Для ООО и АО достаточно названия компании, адреса и налогового номера. По желанию можно добавить номер телефона, Mersis и реестровый номер, адрес электронной почты. Для ИП нужны ФИО, адрес и номер паспорта (номер налоговой инспекции). По желанию можно добавить должность, номер телефона и адрес электронной почты.",
      },
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
  kase: {
    tag: "Профессиональные печати",
    title: "Профессиональные печати и услуга печати",
    subtitle: "Широкий ассортимент печатей, служащих официальным инструментом одобрения вашей компании и личного бренда. Качественные материалы, быстрая доставка, приемлемые цены.",
    intro: "Печать (штамп) — это официальный инструмент, используемый для аутентификации юридических документов компании или физического лица. Как Alanya Kale Matbaa, мы предоставляем профессиональные и надежные услуги для всех ваших потребностей в печатях. Мы предлагаем широкий спектр от стандартных печатей до специально разработанных пользовательских печатей.",
    typesTitle: "Типы печатей",
    typesDesc: [
      "Печать компании: официальные печати для ООО и АО. Используется с названием компании, адресом и налоговым номером.",
      "Печать индивидуального предпринимателя: разработанные печати для индивидуальных предпринимателей, ремесленников и самозанятых специалистов.",
      "Печать учителя: печати, используемые в учебных заведениях для подписи классных журналов и документов.",
      "Карманная печать и круглая карманная печать: компактные печати, предназначенные для удобства и мобильности. Практичны для использования везде в бизнесе и жизни.",
      "Круглая автоматическая печать: выбор современных предприятий; благодаря системе чернил обеспечивает легкое и быстрое использование.",
      "Штамповая печать и печать с логотипом: для специальных потребностей в дизайне и брендинге, печати подготовлены с логотипом вашей компании и специальной информацией."
    ],
    specsTitle: "Варианты цвета чернил",
    specs: [
      {
        title: "Черные чернила",
        desc: "Наиболее распространенный цвет чернил, используемый в официальных документах. Предпочтителен для официальных документов и судебных разбирательств."
      },
      {
        title: "Синие чернила",
        desc: "Цвет, выбранный для современного и профессионального внешнего вида. Широк�� используется в офисной среде."
      },
      {
        title: "Красные чернила",
        desc: "Цвет, используемый срочных, предупредительных и специальных документов. Предпочтителен для привлекающего внимания брендинга."
      }
    ],
    colorsTitle: "Цвета печати и варианты чернил",
    colorsDesc: "Вы можете персонализировать свои печати с цветом и вариантами чернил, чтобы получить максимальную пользу. Каждый цвет имеет свой уникальный вариант использования и влияние на клиентов.",
    colors: [
      { name: "Черный", usage: "Официальные и юридические дела", class: "border-black bg-black/10" },
      { name: "Синий", usage: "Офисное и корпоративное использование", class: "border-blue-500 bg-blue-500/10" },
      { name: "Красный", usage: "Срочные и предупредительные уведомления", class: "border-red-500 bg-red-500/10" }
    ],
    processTitle: "Процесс изготовления печати",
    process: [
      {
        title: "Сбор информации",
        desc: "Мы собираем полную информацию о компании или физическом лице, включая название, адрес и налоговый номер."
      },
      {
        title: "Дизайн и одобрение",
        desc: "Мы подготавливаем дизайн печати и получаем одобрение заказчика. При необходимости вносим изменения."
      },
      {
        title: "Производство",
        desc: "Мы производим печати, используя материалы и технологии высочайшего качества."
      },
      {
        title: "Заполнение чернилами",
        desc: "Мы заполняем печать выбранным цветом чернил и тестируем ее."
      },
      {
        title: "Контроль качества",
        desc: "Каждая печать проходит контроль качества, и мы проверяем, достигнута ли идеальная печать."
      }
    ],
    ctaTitle: "Свяжитесь с нами для профессиональных решений для печатей",
    ctaDesc: "Отправьте нам сообщение через WhatsApp, чтобы найти лучшее решение для печати вашей компании или личного бренда. Бесплатная консультация и гарантированная быстрая доставка."
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
