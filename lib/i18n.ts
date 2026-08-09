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
  video?: string
}

export type Dictionary = {
  nav: { home: string; about: string; services: string; products: string; portfolio: string; contact: string; searchPlaceholder: string }
  cta: { quote: string; call: string; whatsapp: string; viewServices: string; contactUs: string; getOffer: string; professionalStamp: string }
  home: {
    heroTag: string
    heroTitle: string
    heroSubtitle: string
    introTitle: string
    introDesc: string
    processLabels: string[]
    urgentTitle: string
    urgentSubtitle: string
    urgentDesc: string
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
    // hizmetlerimiz page UI
    pageTitle: string
    pageSubtitle: string
    viewDetails: string
    ctaTitle: string
    ctaSubtitle: string
    ctaWhatsapp: string
    // detail page UI
    detailContact: string
    detailContactDesc: string
    detailWhatsapp: string
    detailCall: string
    detailFaqTitle: string
    detailBack: string
    detailOthers: string
    detailReady: string
    detailReadyDesc: string
    detailGetQuote: string
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
    ctaTitle: string
    ctaButton: string
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
  nav: { home: "Ana Sayfa", about: "Hakkımızda", services: "Hizmetlerimiz", products: "Ürünlerimiz", portfolio: "Portföy", contact: "İletişim", searchPlaceholder: "Ne bastırmak istiyorsunuz?" },
  cta: {
    quote: "Hızlı Teklif Al",
    call: "Hemen Ara",
    whatsapp: "WhatsApp",
    viewServices: "Hizmetleri İncele",
    contactUs: "Bize Ulaşın",
    getOffer: "Teklif Al",
    professionalStamp: "Profesyonel Kaşe Basımı",
  },
  home: {
    heroTag: "Alanya'nın Güvenilir Matbaası",
    heroTitle: "Kaliteli Baskı, Zamanında Teslimat",
    introTitle: "Alanya’da Hızlı ve Profesyonel Baskı",
    introDesc: "Alanya Kale Matbaa olarak kaşe, kartvizit, broşür, menü, davetiye, ofset ve dijital copy baskı ihtiyaçlarınız için profesyonel çözümler sunuyoruz.",
    processLabels: ["Tasarım", "Dijital Prova", "Onay", "Baskı", "Teslimat"],
    urgentTitle: "ACİL BASKINIZ MI VAR?",
    urgentSubtitle: "Bugün Teslim Edelim!",
    urgentDesc: "Bize ulaşın, çözümünü birlikte bulalım.",
    heroSubtitle:
      "Ofset ve dijital baskıda uzman ekibimizle işletmenizin tüm baskı ihtiyaçlarını profesyonelce karşılıyoruz.\nKartvizit, kaşe, broşür, magnet, davetiye, etiket, sticker, antetli kâğıt, diplomat zarf, cepli dosya, bloknot, el ilanı, menü, poster, otokopili form ve resmi evrak yazıları…\nHepsi tek adreste, kaliteli ve hızlı çözümlerle.\nİhtiyacınız olan her baskı ürünü için buradayız.",
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
  portfolio: {
    tag: "Portföy",
    title: "Çalışmalarımızdan Örnekler",
    subtitle: "Farklı sektörlerden tamamladığımız baskı projeleri.",
    items: [
      { title: "Restoran Menü Broşürü", category: "Broşür", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/restoran%20bro%C5%9F%C3%BCr%C3%BC-BxbrDaVG02Is29VWZm3JuUCqlmMlW4.jpeg" },
      { title: "Otel Bagaj Emanet Fişi", category: "Ofset", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/otel%20bagaj%20emanet%20fi%C5%9Fi-C1Bz0HspQdOdHIZIX3QnjRAojTZG68.jpeg" },
      { title: "Diplomat Hotel Zarfı", category: "Kurumsal", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/diplomat%20zarf-ODO0itufwm2Mf6SFPTq8bBlep57fWE.jpeg" },
      { title: "Terapi Hizmetleri Broşürü", category: "Broşür", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/tek%20k%C4%B1r%C4%B1m%20bro%C5%9F%C3%BCr%20bask%C4%B1m%C4%B1z-sScAaIuZ8vll7Ab0OdFaZyOdr4eYIN.jpeg" },
      { title: "Cepli Dosya - İç Sayfa", category: "Kurumsal", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cepli%20dosya%20i%C3%A7i-d4pAS75vn55Qhp7OXzDKFThJKpfbA1.jpeg" },
      { title: "Deri Ürün Sertifikası", category: "Sertifika", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Deri%20%C3%BCr%C3%BCn%20sertifikas%C4%B1-QtxeEvwVWg1wP8M8n16kFsryCrjl2L.jpeg" },
      { title: "Kurumsal Antetli Kağıt", category: "Kurumsal", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/antetli%20ka%C4%9F%C4%B1t-KqXSKAox82TJFEI3mCbJlwP0FmCMjw.jpeg" },
      { title: "Otel Bilgilendirme Yazısı", category: "Ofset", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/otel%20bilgilendirme%20yaz%C4%B1s%C4%B1%20bask%C4%B1s%C4%B1-yFYz2JLNKe4Sww2J9DDIp5aY5xf0ra.jpeg" },
      { title: "Otel Oda Kartlığı", category: "Kurumsal", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/otel%20kartl%C4%B1%C4%9F%C4%B1-Y2L4IV1BxSKQIumdHfILnqMgfA2RTL.jpeg" },
      { title: "3 Kırımlı Güzellik Broşürü", category: "Broşür", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3%20yerden%20k%C4%B1r%C4%B1ml%C4%B1%20bro%C5%9F%C3%BCr-i9LYoK3yXU9aDDbIORJLPEBpldSTEv.jpeg" },
      { title: "Folding Glass Dosya", category: "Kurumsal", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cepli%20dosya%20d%C4%B1%C5%9F%C4%B1-tUKG68aSUESdkUxrJ5xn9SZOex7vhh.jpeg" },
      { title: "Restaurant El İlanı", category: "Dijital", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/el%20ilan%C4%B1%20bask%C4%B1s%C4%B1-Lc9UFMK1571wFbHSBw7osqiJs4Bl3m.jpeg" },
      { title: "Kuaför Hizmetleri Broşürü", category: "Broşür", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Kuaf%C3%B6r%20Bro%C5%9F%C3%BCr%C3%BC-4ceYeuAutvpbIc5xA6yEhjKW7xNBIX.jpeg" },
      { title: "Otel Kapı Kolu Askısı", category: "Kurumsal", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/otel%20kap%C4%B1%20kolu%20ask%C4%B1s%C4%B1-ONHMV1bRjklBb2UNtPJnsRarsAde47.jpeg" },
      { title: "Turizm Broşürü", category: "Broşür", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/tur%20bro%C5%9F%C3%BCr%C3%BC-FXak01otD0aWRFIN9VMV8TGZ5GacDn.jpeg" },
      { title: "Hamam Hizmetleri Broşürü", category: "Broşür", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hamam%20bro%C5%9F%C3%BCr%C3%BC-vYoJT1YUCLnZT5UVQHV6pUv98Q6MHL.jpeg" },
      { title: "Dergi İç Sayfa Tasarımı", category: "Ofset", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dergi%20bask%C4%B1s%C4%B1-XYSLjBxAvPk1CWIH4wQRIC3jT6WPYz.jpeg" },
      { title: "Otel Anket Formu", category: "Ofset", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/otel%20anket%20formu-T6ikkxaMRJ2X6cOIDRgvSkjtt8XG9b.jpeg" },
      { title: "Otel Kurumsal Broşürü", category: "Broşür", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/otel%20bro%C5%9F%C3%BCr%C3%BC-HyZSpUptHHi3IGbNzASAO41DPbvqYH.jpeg" },
      { title: "Kuyumcu Ürün Sertifikası", category: "Sertifika", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Kuyumcu%20%C3%BCr%C3%BCn%20sertifikas%C4%B1-vwF2KnMJYUNhyYR0wXX8De87qjIJTf.jpeg" },
      { title: "Özel Tasarım Kartvizit", category: "Kartvizit", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/kart2-8wjyA6bLExi6NPDQyowGrlhxjcRnnr.jpeg" },
      { title: "Profesyonel Katalog", category: "Katalog", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/katalog1-uLPtlyjmiyfY0nXYkNnlTsaVXGwNS6.jpeg", video: "https://www.youtube.com/embed/k5hxvhUJZRM" },
      { title: "Dijital Tasarım Katalog", category: "Dijital", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/katalog2-h0DoTxIrVOaaHt6GaYOzwKiCytHbih.jpeg" },
      { title: "Kurumsal Kaşe Üretimi", category: "Kaşe", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ka%C5%9Fe7-IFUNrNFYzXaYK00m1Y2D3pUInD68Bi.jpeg" },
      { title: "Baskılı Kaşe Çeşitleri", category: "Kaşe", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ka%C5%9Fe5-LuJhLEahjLNruNJlEc9xUUdCCHhrak.jpeg" },
      { title: "Renkli Kaşe Örnekleri", category: "Kaşe", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ka%C5%9Fe2-R0vgC704MsjXeUK7eL21UhKjSzmHDb.jpeg" },
      { title: "Rent a Car Sözleşmesi", category: "Ofset", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/rent1-awmuqClYkNBzDZNDmH9WjRNR4fTFbg.jpeg" },
      { title: "Tahsilat Makbuzu Kitapçığı", category: "Ofset", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/tahsilat2-FSg1UZXFLRC6cu3OCpyVHI2ndS674g.jpeg" },
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
    title: "Profesyonel Grafik Tasarım",
    desc: "Baskı siparişlerinizde tasarım derdi yaşamayın. Deneyimli grafik ekibimiz CorelDRAW ve yapay zeka destekli araçlarla markanıza özel profesyonel tasarımları siparişinizle birlikte hazırlar. Kalite ve hızdan ödün vermeden baskıya hazır dosyalarınızı teslim ediyoruz.",
    points: [
      "Profesyonel kartvizit, broşür ve menü tasarımı",
      "CorelDRAW uzmanlığı",
      "Yapay zeka destekli hızlı ve kaliteli revizyon",
      "Baskı öncesi ücretsiz dijital prova",
    ],
    cta: "Profesyonel Tasarım İste →",
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
    title: "Sıkça Sorulan Sorular (SSS)",
    subtitle: "Alanya ve çevresindeki matbaa, baskı ve teslimat süreçlerimiz hakkında merak edilenler.",
    items: [
      { q: "Alanya’nın hangi semt ve mahallelerine matbaa ve baskı hizmeti veriyorsunuz?", a: "Kale Matbaa olarak Alanya genelindeki tüm işletmelere profesyonel baskı çözümleri sunuyoruz. Başlıca hizmet verdiğimiz bölgeler: Merkez: Saray Mahallesi, Çarşı, Güller Pınarı, Kadıpaşa, Kızlar Pınarı, Sugözü, Şekerhane, Fığla. Doğu Bölgesi: Oba, Tosmur, Kestel, Mahmutlar, Kargıcak, Demirtaş. Batı Bölgesi: Büyühasbahçe, Küçükhasbahçe, Konaklı, Payallar, Türkler, Avsallar, Okurcalar." },
      { q: "Siparişlerimizi nasıl teslim alabiliriz? Teslimat yapıyor musunuz?", a: "Siparişlerinizi merkez matbaamızdan doğrudan teslim alabilirsiniz. Ayrıca iş durumumuza ve güzergahımıza bağlı olarak yakın çevredeki işletmeler için adrese teslimat imkanı sağlayabiliyoruz. Yakın çevremiz dışında kalan veya acil teslimat isteyen müşterilerimiz için özel kurye veya şehir içi sevk seçenekleri sunmaktayız." },
      { q: "Mahmutlar, Oba, Konaklı veya Avsallar gibi mahallelerden verilen siparişler nasıl ulaştırılıyor?", a: "Oba, Mahmutlar, Konaklı ve Avsallar gibi mahallelerdeki müşterilerimiz siparişlerini matbaamızdan aldırabilir veya talep doğrultusunda adrese kurye / sevk seçeneğini tercih edebilirler. Güzergahımız üzerindeki yakın teslimatlar için imkan dahilinde yardımcı olmaya çalışıyoruz." },
      { q: "Kargıcak, Demirtaş veya Okurcalar’daki işletmeler için online sipariş ve tasarım süreci nasıl işliyor?", a: "kalematbaa.com veya WhatsApp hattımız üzerinden tüm detayları dijital ortamda netleştirip baskı sürecini başlatabilirsiniz. Baskısı tamamlanan ürünlerinizi matbaamızdan teslim alabilir ya da size uygun bir kurye/sevk yöntemiyle adresinize yönlendirebiliriz." },
      { q: "Alanya Sanayi, Fığla, Kadıpaşa ve Saray Mahallesi’ndeki işletmelere teslimat kolaylığınız var mı?", a: "Merkezi konumumuz sayesinde Sanayi, Fığla, Kadıpaşa ve Saray Mahallesi gibi yakın çevremizde yer alan işletmelere iş yoğunluğumuza göre elden teslimat konusunda destek olmaya çalışıyoruz. Dilerseniz basımı biten işlerinizi matbaamızdan da anında teslim alabilirsiniz." },
    ],
    ctaTitle: "Başka bir sorunuz mu var?",
    ctaButton: "WhatsApp’tan bize ulaşın",
  },
  blog: {
    tag: "Baskı Rehberi",
    title: "Alanya Baskı Rehberi & İpuçları",
    subtitle: "Kaşe, broşür, davetiye, kartvizit üretiminde faydalı bilgiler. Profesyonel tasarım, aynı gün teslim ve en iyi fiyatlandırma için tüm detaylar.",
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
    intro: "Profesyonel Kaşe Yapımı ve Baskı Hizmeti\n\nKaşe, işletmenin veya kişinin yasal belgelerini tasdik etmek için kullanılan resmi bir araçtır. Alanya Kale Matbaa olarak, tüm kaşe ihtiyaçlarınız için profesyonel ve güvenilir hizmetler sunuyoruz. Standart kaşelerden başlayarak özel tasarımlı kaşelere kadar geniş bir ürün yelpazesi oluşturdum.\n\nŞirketinizin ve kişisel markanızın resmi onay aracı olan kaşelerde geniş ürün yelpazesi. Kaliteli malzeme, hızlı teslimat, uygun fiyat. Profesyonel kaşe çeşitleriyle şirketinizi en iyi şekilde temsil edin.",
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
  services: {
    tag: "Baskı Hizmetleri",
    title: "Hizmetlerimiz",
    subtitle: "Alanya'da profesyonel baskı hizmetleri. Kurumsal kimliğinizden pazarlama materyallerinize kadar, her ihtiyacınız için kaliteli çözümler sunuyoruz.",
    items: [],
    paperTitle: "Kağıt Seçenekleri",
    paperSubtitle: "Kaliteli baskı için doğru kağıt",
    paperWeights: [],
    pageTitle: "Hizmetlerimiz",
    pageSubtitle: "Alanya'da profesyonel baskı hizmetleri. Kurumsal kimliğinizden pazarlama materyallerinize kadar, her ihtiyacınız için kaliteli çözümler sunuyoruz.",
    viewDetails: "Detayları Gör",
    ctaTitle: "Aradığınız Hizmet Burada",
    ctaSubtitle: "Hangi hizmet hakkında merak ettiğiniz varsa, bize yazın. Profesyonel ekibimiz size en uygun çözümü sunmak için hazır.",
    ctaWhatsapp: "WhatsApp ile Yazın",
    detailContact: "Hızlı İletişim",
    detailContactDesc: "Hizmet hakkında detaylı bilgi ve fiyat teklifi almak için bizimle iletişime geçin.",
    detailWhatsapp: "WhatsApp ile Yazın",
    detailCall: "Hemen Ara",
    detailFaqTitle: "Sıkça Sorulan Sorular",
    detailBack: "Tüm Hizmetler",
    detailOthers: "Diğer Hizmetlerimiz",
    detailReady: "Başlamaya Hazır mısınız?",
    detailReadyDesc: "hizmeti için teklif almak veya daha fazla bilgi edinmek için bize ulaşın.",
    detailGetQuote: "Hemen Teklif İste",
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
  nav: { home: "Home", about: "About", services: "Services", products: "Products", portfolio: "Portfolio", contact: "Contact", searchPlaceholder: "What would you like to print?" },
  cta: {
    quote: "Get a Quick Quote",
    call: "Call Now",
    whatsapp: "WhatsApp",
    viewServices: "View Services",
    contactUs: "Contact Us",
    getOffer: "Get Offer",
    professionalStamp: "Professional Stamp Printing",
  },
  home: {
    heroTag: "Alanya's Trusted Print Shop",
    heroTitle: "Quality Printing, Delivered on Time",
    introTitle: "Fast, Professional Printing in Alanya",
    introDesc: "As Alanya Kale Matbaa, we provide professional solutions for stamps, business cards, brochures, menus, invitations, offset and digital copy printing.",
    processLabels: ["Design", "Digital Proof", "Approval", "Printing", "Delivery"],
    urgentTitle: "NEED A RUSH PRINT?",
    urgentSubtitle: "Delivered Today!",
    urgentDesc: "Contact us and let’s find the right solution together.",
    heroSubtitle:
      "Did you come to Turkey from abroad and want affordable printing and custom stamps before returning home? Looking for urgent printing or professional digital & offset printing in Alanya? Kale Matbaa, with over 35 years of experience in Alanya Şekerhane, offers same-day delivery, free design and Konica Minolta AccurioPrint C4065 quality for stamps, business cards, brochures, catalogs and menus. We serve Mahmutlar, Oba, Cikcilli, Konaklı and the entire Antalya region.",
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
  portfolio: {
    tag: "Portfolio",
    title: "Samples of Our Work",
    subtitle: "Printing projects we've completed across different industries.",
    items: [
      { title: "Custom Designed Business Cards", category: "Cards", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/kart2-8wjyA6bLExi6NPDQyowGrlhxjcRnnr.jpeg" },
      { title: "Professional Catalog", category: "Catalog", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/katalog1-uLPtlyjmiyfY0nXYkNnlTsaVXGwNS6.jpeg", video: "https://www.youtube.com/embed/k5hxvhUJZRM" },
      { title: "Digital Design Catalog", category: "Digital", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/katalog2-h0DoTxIrVOaaHt6GaYOzwKiCytHbih.jpeg" },
      { title: "Corporate Stamp Production", category: "Stamp", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ka%C5%9Fe7-IFUNrNFYzXaYK00m1Y2D3pUInD68Bi.jpeg" },
      { title: "Printed Stamp Varieties", category: "Stamp", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ka%C5%9Fe5-LuJhLEahjLNruNJlEc9xUUdCCHhrak.jpeg" },
      { title: "Colored Stamp Samples", category: "Stamp", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ka%C5%9Fe2-R0vgC704MsjXeUK7eL21UhKjSzmHDb.jpeg" },
      { title: "Official Document Printing", category: "Offset", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/rent1-awmuqClYkNBzDZNDmH9WjRNR4fTFbg.jpeg" },
      { title: "Receipt Booklet Printing", category: "Offset", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/tahsilat2-FSg1UZXFLRC6cu3OCpyVHI2ndS674g.jpeg" },
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
    title: "Professional Graphic Design",
    desc: "Don't worry about design with your print orders. Our experienced graphic team prepares professional designs tailored to your brand with CorelDRAW and AI-powered tools alongside your order. We deliver print-ready files without compromising quality or speed.",
    points: [
      "Professional business card, brochure and menu design",
      "CorelDRAW expertise",
      "AI-assisted fast and quality revisions",
      "Free digital proof before printing",
    ],
    cta: "Request Professional Design →",
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
    title: "Frequently Asked Questions (FAQ)",
    subtitle: "Everything you need to know about our printing services and delivery options in Alanya.",
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
      { q: "Which districts and areas in Alanya do you provide printing services for?", a: "At Kale Matbaa, we provide professional printing services across all regions of Alanya, including Central Alanya (Saray, Çarşı, Kadıpaşa), Eastern areas (Oba, Tosmur, Kestel, Mahmutlar, Kargıcak, Demirtaş), and Western areas (Konaklı, Payallar, Avsallar, Okurcalar)." },
      { q: "How can I receive my order? Do you offer local delivery?", a: "You can pick up your completed orders directly from our main print shop in central Alanya. Depending on our daily route and workload, we may offer local delivery to nearby businesses. For urgent orders or farther locations, courier and local transport dispatch options are available." },
      { q: "How do online orders and design approvals work for international businesses in Alanya?", a: "You can easily submit your designs and order details via kalematbaa.com or our WhatsApp hotline. Once your design is approved digitally, we proceed to printing. You can then collect your items or request a local courier dispatch." },
    ],
    ctaTitle: "Have another question?",
    ctaButton: "Contact us on WhatsApp",
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
    intro: "Looking for urgent stamp printing in Alanya? Kale Matbaa in Şekerhane offers corporate seals, teacher stamps, pocket stamps, and automatic stamps with 35+ years of expertise. Same-day delivery, free design, and professional quality serving Mahmutlar, Oba, Konaklı, and all Alanya region.",
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
  services: {
    tag: "Print Services",
    title: "Our Services",
    subtitle: "Professional printing services in Alanya. Quality solutions for every need — from corporate identity to marketing materials.",
    items: [],
    paperTitle: "Paper Options",
    paperSubtitle: "The right paper for quality printing",
    paperWeights: [],
    pageTitle: "Our Services",
    pageSubtitle: "Professional printing services in Alanya. Quality solutions for every need — from corporate identity to marketing materials.",
    viewDetails: "View Details",
    ctaTitle: "The Service You're Looking For Is Here",
    ctaSubtitle: "If you have any questions about a service, message us. Our professional team is ready to offer you the best solution.",
    ctaWhatsapp: "Message on WhatsApp",
    detailContact: "Quick Contact",
    detailContactDesc: "Get in touch with us for detailed information and a price quote for this service.",
    detailWhatsapp: "Message on WhatsApp",
    detailCall: "Call Now",
    detailFaqTitle: "Frequently Asked Questions",
    detailBack: "All Services",
    detailOthers: "Other Services",
    detailReady: "Ready to Get Started?",
    detailReadyDesc: "contact us for a quote or more information about",
    detailGetQuote: "Get a Quote Now",
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
  nav: { home: "Главная", about: "О нас", services: "Услуги", products: "Продукция", portfolio: "Портфолио", contact: "Контакты", searchPlaceholder: "Что вы хотите напечатать?" },
  cta: {
    quote: "Быстрый расчёт",
    call: "Позвонить",
    whatsapp: "WhatsApp",
    viewServices: "Смотреть услуги",
    contactUs: "Связаться с нами",
    getOffer: "Получить расчёт",
    professionalStamp: "Профессиональная печать штампов",
  },
  home: {
    heroTag: "Надёжная типография Аланьи",
    heroTitle: "Быстрая и профессиональная печать в Аланье",
    introTitle: "Быстрая и профессиональная печать в Аланье",
    introDesc: "Компания Alanya Kale Matbaa предлагает профессиональные решения для печати штампов, визиток, брошюр, меню, приглашений, офсетной и цифровой печати.",
    processLabels: ["Дизайн", "Цифровая проба", "Согласование", "Печать", "Доставка"],
    urgentTitle: "НУЖНА СРОЧНАЯ ПЕЧАТЬ?",
    urgentSubtitle: "Доставим сегодня!",
    urgentDesc: "Свяжитесь с нами, и мы вместе найдём решение.",
    heroSubtitle:
      "Приехали в Турцию из-за границы и хотите сделать печать и штампы по выгодной цене перед возвращением домой? Ищете срочную печать или профессиональную цифровую и офсетную печать в Аланье? Kale Matbaa с более чем 35-летним опытом в Аланье Шекерхане предлагает доставку в тот же день, бесплатный дизайн и качество Konica Minolta AccurioPrint C4065: штампы, визитки, брошюры, каталоги и меню. Мы обслуживаем Махмутлар, Оба, Джикджилли, Конаклы и весь регион Антальи.",
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
  portfolio: {
    tag: "Портфолио",
    title: "Примеры наших работ",
    subtitle: "Проекты печати, выполненные для разных отраслей.",
    items: [
      { title: "Пользовательские визитки", category: "Визитки", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/kart2-8wjyA6bLExi6NPDQyowGrlhxjcRnnr.jpeg" },
      { title: "Профессиональный каталог", category: "Каталог", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/katalog1-uLPtlyjmiyfY0nXYkNnlTsaVXGwNS6.jpeg", video: "https://www.youtube.com/embed/k5hxvhUJZRM" },
      { title: "Цифровой дизайн каталога", category: "Цифровая", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/katalog2-h0DoTxIrVOaaHt6GaYOzwKiCytHbih.jpeg" },
      { title: "Производство корпоративной печати", category: "Печать", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ka%C5%9Fe7-IFUNrNFYzXaYK00m1Y2D3pUInD68Bi.jpeg" },
      { title: "Разнообразие печатей", category: "Печать", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ka%C5%9Fe5-LuJhLEahjLNruNJlEc9xUUdCCHhrak.jpeg" },
      { title: "Образцы цветных печатей", category: "Печать", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ka%C5%9Fe2-R0vgC704MsjXeUK7eL21UhKjSzmHDb.jpeg" },
      { title: "Печать официальных документов", category: "Офсет", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/rent1-awmuqClYkNBzDZNDmH9WjRNR4fTFbg.jpeg" },
      { title: "Печать квитанционной книжицы", category: "Офсет", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/tahsilat2-FSg1UZXFLRC6cu3OCpyVHI2ndS674g.jpeg" },
    ],
  },
  contact: {
    tag: "Контакты",
    title: "Свяжитесь с нами",
    subtitle: "Мы здесь, чтобы ответить на ваши вопросы и запросы.",
    infoTitle: "Контактная информация",
    hoursLabel: "Часы работы",
    hours: "Понедельник - С����ббота: 09:00 - 19:00",
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
    title: "Профессиональный графический дизайн",
    desc: "Не переживайте о дизайне при заказе печати. Наша опытная команда дизайнеров готовит профессиональный дизайн специально для вашего бренда с помощью CorelDRAW и ИИ-инструментов параллельно с вашим заказом. Мы предоставляем файлы, готовые к печати, без компромиссов в качестве и скорости.",
    points: [
      "Профессиональный дизайн визиток, брошюр и меню",
      "Опыт работы в CorelDRAW",
      "Быстрые и качественные правки с помощью ИИ",
      "Бесплатная цифровая проба перед печатью",
    ],
    cta: "Запросить профессиональный дизайн →",
  },
  testimonials: {
    tag: "Отзывы",
    title: "Что говорят наши клиенты",
    subtitle: "Типография, которой доверяют компании и частные лица в Аланье.",
    items: [
      {
        name: "Мехмет Йылмаз",
        role: "Владелец ресторана, Аланья",
        text: "Напечатали наш�� меню на Konica Minolta C4065 — цвета вышли отличные. Срочный заказ сдали вовремя к началу сезона.",
      },
      {
        name: "Айше Дем��р",
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
    title: "Часто задаваемые вопросы (FAQ)",
    subtitle: "Все, что вам нужно знать о типографии Kale Matbaa и доставке в Аланье.",
    items: [
      {
        q: "Я хочу сделать печать, какую информацию мне нужно вам отправить?",
        a: "Для О��О и АО достаточно названия компании, адреса и налогового номера. По желанию можно добавить номер телефона, Mersis и реестровый номер, адрес электронной почты. Для ИП нужны ФИО, адрес и номер паспорта (номер налоговой инспекции). По желанию можно добавить должность, номер телефона и адрес электронной почты.",
      },
      {
        q: "Как быстро вы выполняете срочные заказы печати в Аланье?",
        a: "Большинство заказов цифро����й печати мы сдаём в тот же день или в течение 24 часов. Даже в высокий сезон срочные заказ�� в приоритете.",
      },
      {
        q: "У меня нет ф��йла дизайна, вы поможете?",
        a: "Конечно. Благодаря бесплатному профессиональному дизайну мы подготовим для вас визитки, брошюры, меню и приглашения.",
      },
      {
        q: "На какой бумаге можно печатать на Konica Minolta C4065?",
        a: "Печатаем яркими цветами на всём — от лёгкой бумаги 80г до плотного картона 350г и выше, вплоть до формата A3.",
      },
      { q: "В каких районах Аланьи вы предоставляете полиграфические услуги?", a: "Типография Kale Matbaa обслуживает все районы Аланьи, включая центр (Saray, Çarşı, Kadıpaşa), восточные районы (Oba, Tosmur, Kestel, Mahmutlar, Kargıcak, Demirtaş) и западные районы (Konaklı, Payallar, Avsallar, Okurcalar)." },
      { q: "Как я могу получить свой заказ? Есть ли доставка?", a: "Вы можете забрать готовый заказ непосредственно из нашей типографии в центре Аланьи. В зависимости от загруженности и нашего маршрута, мы можем осуществить доставку в ближайшие заведения. Для срочных заказов или удаленных районов доступны варианты курьерской доставки." },
      { q: "Как оформить онлайн-заказ и согласовать дизайн?", a: "Вы можете отправить макеты и детали заказа через сайт kalematbaa.com или WhatsApp. После цифрового утверждения дизайна мы запускаем печать. Готовую продукцию можно забрать лично или оформить доставку курьером." },
    ],
    ctaTitle: "У вас есть другой вопрос?",
    ctaButton: "Свяжитесь с нами в WhatsApp",
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
    subtitle: "Широкий а��сортимент печатей, служащих официальным инструментом одобрения вашей компании и личного бренда. Качественные материалы, быстрая доставка, приемлемые цены.",
    intro: "Ищете срочную печать в Аланье? Kale Matbaa в районе Şekerhane предлагает корпоративные печати, штампы учителей, карманные печати и автоматические штампы с опытом более 35 лет. Доставка в тот же день, бесплатный дизайн, профессиональное качество, обслуживая Махмутлар, Оба, Конаклы и весь рег��он Аланьи.",
    typesTitle: "Типы печатей",
    typesDesc: [
      "Печать компании: официальные печати для ООО и АО. Используется с названием компании, адресом и налоговым номером.",
      "Печать индивидуального предпринимателя: разработанные печати для индивидуальных предпринимателей, ремесленников и самозанятых специалистов.",
      "Печать учителя: печати, используемые в учебных заведениях для подписи классных журналов и документов.",
      "Карманная печать и круглая карманная печать: компактные печати, предназначенные для удобства и мобильности. Практичны д��я использования везде в бизнесе и жизни.",
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
      { name: "��расный", usage: "Срочные и предупредительные уведомления", class: "border-red-500 bg-red-500/10" }
    ],
    processTitle: "Процесс изготовления печати",
    process: [
      {
        title: "С��ор информации",
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
        desc: "Мы заполняем печать выбранным цветом чернил и тес��ируем ее."
      },
      {
        title: "Контроль качества",
        desc: "Каждая печать проходит контроль качества, и мы проверяем, достигнута ли идеальная печать."
      }
    ],
    ctaTitle: "Свяжитесь с нами для профессиональных решений для печатей",
    ctaDesc: "Отправьте нам сообщение через WhatsApp, чтобы найти лучшее решение для печати вашей компании или личного бренда. Бесплатная консультация и гарантированная быстрая доставка."
  },
  services: {
    tag: "Полиграфические услуги",
    title: "Наши услуги",
    subtitle: "Профессиональные полиграфические услуги в Аланье. Качественные решения для любых задач — от корпоративного стиля до м��ркетинговых материалов.",
    items: [],
    paperTitle: "Варианты бума��и",
    paperSubtitle: "Правильная бумага для качественной печати",
    paperWeights: [],
    pageTitle: "Наши услуги",
    pageSubtitle: "Профессиональные полиграфические услуги в Аланье. Качественные решения для любых задач — от корпоративного стиля до ��арк��тинговых материалов.",
    viewDetails: "Подробнее",
    ctaTitle: "Услуга, которую вы искали, здесь",
    ctaSubtitle: "Если у вас есть вопросы об услуге, напишите нам. Наша профессиональная команда готова предложить вам лучшее решение.",
    ctaWhatsapp: "Написать в WhatsApp",
    detailContact: "Быстрая связь",
    detailContactDesc: "Свяжитесь с нами, чтобы получить подробную информацию и расчет стоимости этой услуги.",
    detailWhatsapp: "Написать в WhatsApp",
    detailCall: "Позвонить",
    detailFaqTitle: "Часто задаваемые вопросы",
    detailBack: "Все услуги",
    detailOthers: "Другие наши услуги",
    detailReady: "Готовы начать?",
    detailReadyDesc: "свяжитесь с нами, чтобы получить расчет стоимости или узнать больше о услуге",
    detailGetQuote: "Получить расчет стоимости",
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
