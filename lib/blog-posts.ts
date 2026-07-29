import type { Lang } from "@/lib/i18n"

export type BlogSlug = "kase" | "brosur" | "davetiye" | "kartvizit" | "acil-kase" | "canva-tasarimi" | "5-baski-hatasi" | "grafik-trendler-2026"

export interface BlogSection {
  heading: string
  paragraphs?: string[]
  bullets?: string[]
}

export interface BlogContent {
  category: string
  title: string
  excerpt: string
  metaTitle: string
  metaDescription: string
  intro: string[]
  sections: BlogSection[]
  cta: string
}

export interface BlogPost {
  slug: BlogSlug
  image: string
  imageAlt: string
  date: string
  content: Record<Lang, BlogContent>
}

export const blogPosts: BlogPost[] = [
  {
    slug: "kase",
    image: "/images/stamps.png",
    imageAlt: "Alanya Kale Matbaa otomatik ve klasik kaşe üretimi",
    date: "2025",
    content: {
      tr: {
        category: "Kaşe",
        title: "Alanya'da Profesyonel Kaşe Üretimi | Aynı Gün Teslim - Kale Matbaa",
        excerpt:
          "Otomatik ve klasik kaşe üretiminde Alanya Kale Matbaa'nın kaliteli hizmeti. Şekerhane, Mahmutlar, Oba bölgelerine aynı gün teslim, ücretsiz tasarım desteği.",
        metaTitle: "Alanya Kaşe Üretimi | Otomatik & Klasik Kaşe - Kale Matbaa",
        metaDescription:
          "Alanya'da profesyonel kaşe üretimi: otomatik ve klasik kaşe, logolu tasarım. Net baskı, dayanıklı malzeme, aynı gün teslim. Şekerhane, Mahmutlar, Oba.",
        intro: [
          "Alanya'nın önemli işletmelerine, avukat, doktor, noter, muhasebe ofislerine hizmet veren Kale Matbaa, kaşe üretiminde uzman ekibiyle kaliteli malzeme ve net baskı kalitesi sunuyor. Şekerhane, Mahmutlar, Oba, Cikcilli ve Konaklı bölgelerindeki tüm firmalar için hızlı üretim ve aynı gün teslim hizmeti.",
          "Otomatik kaşelerimizle tek hareketle temiz ve net izler bırakabilirsiniz. Klasik kaşelerimizde ise geleneksel kullanımın güvenilirliğini yaşıyorsunuz. Her iki tipte de logolu, adresli, unvanlı ve özel tasarımlı kaşe seçeneklerimiz mevcuttur. Ücretsiz profesyonel tasarım ve Konica Minolta kalitesiyle fark yaratıyoruz.",
        ],
        sections: [
          {
            heading: "Kale Matbaa Kaşe Avantajları",
            bullets: [
              "Hızlı üretim (çoğu model aynı gün teslim)",
              "Dayanıklı ve uzun ömürlü malzemeler",
              "Net ve keskin baskı kalitesi",
              "Kurumsal logolu ve çoklu tasarımlar",
              "Avukat, doktor, noter, muhasebe ofisleri ve her türlü işletme için özel üretim",
              "Ücretsiz profesyonel grafik tasarım desteği",
            ],
          },
          {
            heading: "Neden Kaşe Önemlidir?",
            paragraphs: [
              "Kaşe, sadece bir onay aracı değil, aynı zamanda markanızın resmi yüzüdür. Temiz ve profesyonel bir izlenim bırakan kaşeler, belgelerinizde ve müşteri ilişkilerinizde kaliteyi yansıtır. Alanya'daki işletmelerin ilk temas noktası olarak kaşenin tasarımı ve kalitesi önem taşır.",
            ],
          },
          {
            heading: "Kaşe Sipariş Nasıl Verilir?",
            bullets: [
              "1. Whatsapp'tan tasarım fikrinizi, logonuzu veya fotoğrafını gönderin.",
              "2. Profesyonel tasarımcılarımız 30 dakika içinde mock-up hazırlayarak gönderirler.",
              "3. Onaylandıktan sonra 2-4 saat içinde basılıp teslim ediyoruz (çoğu kaşe tipi).",
              "4. Acil işlerde teslim saatini belirtmeniz yeterli.",
            ],
          },
          {
            heading: "Sıkça Sorulan Sorular (FAQ)",
            bullets: [
              "S: Kaşe ne kadar sürede hazır olur? C: Çoğu kaşe türü 2-4 saatte, acil durumlarda 1 saatte hazırdır.",
              "S: Tasarımı ben hazırlayabilir miyim? C: Evet, tasarım gönderin. Yoksa ücretsiz olarak bizim tasarımcılarımız hazırlarız.",
              "S: Hangi mahalleleye hizmet veriyorsunuz? C: Şekerhane (merkezimiz), Mahmutlar, Oba, Cikcilli, Konaklı ve Alanya geneline hizmet veririz.",
              "S: Whatsapp'tan anında sipariş verebilir miyim? C: Evet, hemen başlayabiliriz. İletişim bilgilerinizi ve tasarımı gönderin.",
            ],
          },
        ],
        cta: "Alanya'da en iyi kaşe fiyatları ve kalitesi için bize ulaşın. Tasarım fikirlerinizi paylaşın, aynı gün teslimatla işletmenizi güçlendirin.",
      },
      en: {
        category: "Stamps",
        title: "Alanya Kale Matbaa | Quality Stamp Production & Printing",
        excerpt:
          "Automatic and classic stamp production with quality materials and crisp printing. Logo, address and custom-designed stamps in Alanya with same-day delivery.",
        metaTitle: "Stamp Production in Alanya | Self-Inking & Classic - Kale Matbaa",
        metaDescription:
          "Quality stamp production in Alanya: self-inking and classic stamps, logo and custom designs. Crisp printing, durable materials, same-day delivery option.",
        intro: [
          "One of the most practical tools for signing and approving documents quickly and reflecting your corporate identity is the stamp. At Alanya Kale Matbaa, we offer quality materials and crisp print quality in both automatic and classic stamp production.",
          "With our self-inking stamps you leave clean, sharp impressions in a single motion. Our classic stamps deliver the reliability of traditional use. Both types are available with logos, addresses, titles and fully custom designs.",
        ],
        sections: [
          {
            heading: "Kale Matbaa Stamp Advantages",
            bullets: [
              "Fast production (most models delivered same day)",
              "Durable, long-lasting materials",
              "Clean and sharp print quality",
              "Corporate logo and multi-design options",
              "Custom production for lawyers, doctors, notaries, accounting offices and every kind of business",
            ],
          },
          {
            heading: "Why Are Stamps Important?",
            paragraphs: [
              "A stamp is not just an approval tool, it is also the official face of your brand. Stamps that leave a clean, professional impression reflect quality on your documents too.",
            ],
          },
        ],
        cta: "Contact us for the best stamp prices and quality in Alanya. Share your design ideas and we'll produce your custom stamps in no time.",
      },
      ru: {
        category: "Печати",
        title: "Alanya Kale Matbaa | Качественное изготовление печатей",
        excerpt:
          "Изготовление автоматических и классических печатей из качественных материалов с чётким оттиском. Печати с логотипом и индивидуальным дизайном в Аланье с доставкой в тот же день.",
        metaTitle: "Изготовление печатей в Аланье | Автоматические и классические",
        metaDescription:
          "Качественное изготовление печатей в Аланье: автоматические и классические печати, логотип и индивидуальный дизайн. Чёткий оттиск, прочные материалы.",
        intro: [
          "Одним из самых практичных инструментов для быстрого подписания и заверения документов и отражения вашего корпоративного стиля является печать. В Alanya Kale Matbaa мы предлагаем качественные материалы и чёткое качество оттиска как для автоматических, так и д��я классических печатей.",
          "Нашими автоматическими печатями вы оставляете чистые и чёткие оттиски одним движением. Классические печати дарят надёжность традиционного использования. Оба типа доступны с логотипом, адресом, должностью и полностью индивидуальным дизайном.",
        ],
        sections: [
          {
            heading: "Преимущества печатей Kale Matbaa",
            bullets: [
              "Быстрое изготовление (большинство моделей в тот же день)",
              "Прочные и долговечные материалы",
              "Чистое и чёткое качество оттиска",
              "Корпоративный логотип и несколько вариантов дизайна",
              "Индивидуальное изготовление для ��ристов, врачей, нотариусов, бухгалтерий и любого бизнеса",
            ],
          },
          {
            heading: "Почему печати важны?",
            paragraphs: [
              "Печать — это не просто инструмент заверения, но и официальное лицо вашего бренда. Печати, оставляющие чистый и профессиональный оттиск, отражают качество и на ваших документах.",
            ],
          },
        ],
        cta: "Свяжитесь с нами для лучших цен и качества печатей в Аланье. Поделитесь идеями дизайна, и мы изготовим ваши печати в кратчайшие сроки.",
      },
    },
  },
  {
    slug: "brosur",
    image: "/images/brochures.png",
    imageAlt: "Alanya Kale Matbaa dijital ve ofset broşür baskısı",
    date: "2025",
    content: {
      tr: {
        category: "Broşür",
        title: "Alanya'da Profesyonel Broşür Baskı | Dijital & Ofset - Kale Matbaa",
        excerpt:
          "Alanya'daki otel, restoran ve turizm işletmeleri için canlı renkli broşür. Konica Minolta C4065 ile 350g kağıt, selefon ve lak uygulaması, aynı gün teslim.",
        metaTitle: "Alanya Broşür Baskı | Katlamalı & Düz Broşür - Kale Matbaa",
        metaDescription:
          "Alanya broşür baskı: dijital ve ofset, canlı renkler, 350g kağıt. Otel, restoran, emlak broşürleri. Selefon, UV lak, aynı gün teslim, Şekerhane Mahmutlar.",
        intro: [
          "Alanya'nın turizm sektöründe ve yerel işletmelerine broşür, en etkili pazarlama aracıdır. Oteller, restoranlar, café, tur operatörleri, emlak danışmanlıkları ve eğitim kurumları için Alanya Kale Matbaa, profesyonel broşür üretimiyle müşterilerinize dokunarak bırakacak izlenimler yaratıyor.",
          "Konica Minolta C4065 makinemizle canlı renkler, keskin detaylar ve 350 grama kadar kalın kağıt desteğiyle broşürlerinizi profesyonelce basıyoruz. Katlamalı (tek kat, üç kat, akordeon) veya düz broşür seçenekleriyle, selefon ve UV lak uygulamalarıyla her ihtiyaca cevap veriyoruz. Şekerhane'deki atölyemizden Mahmutlar, Oba, Konaklı ve tüm Alanya'ya hızlı teslimat.",
        ],
        sections: [
          {
            heading: "Alanya'da Broşür Neden Önemli?",
            bullets: [
              "Turist ve yerli müşterilere dokunarak bıraktığı izlenim kalıcıdır",
              "Ürün/hizmet detaylarını kapsamlı ve görsel olarak anlatma imkanı sunar",
              "Otel lobisinde, restoran masasında, tur autobüsünde ve posta ile etkili dağıtım",
              "Restoran menülerinden otel broşürlerine, emlak kataloğundan turist rehberine kadar geniş kullanım",
            ],
          },
          {
            heading: "Kale Matbaa Farkı",
            bullets: [
              "Parlak, mat kuşe ve özel kağıt seçenekleri (130g - 350g+)",
              "Selefon, lak, UV spot ve embossing uygulamaları",
              "Hızlı teslimat (acil broşür işlerinizde aynı gün teslim)",
              "Ücretsiz profesyonel grafik tasarım ve görüntü düzenleme",
              "Konica Minolta C4065 dijital baskı teknolojisi",
            ],
          },
          {
            heading: "Broşür Siparişi Nasıl Verilir?",
            bullets: [
              "1. Tasarımınızı veya fikirlerinizi Whatsapp'tan gönderin.",
              "2. Profesyonel ekibimiz 1-2 saat içinde görüntüsünü (mock-up) hazırlayıp gönderir.",
              "3. Onayladıktan sonra 4-24 saat içinde basılıp teslim edilir (adet ve seçeneğe göre).",
              "4. Acil ihtiyaçlar için mutlaka bize haber verin.",
            ],
          },
          {
            heading: "Sıkça Sorulan Sorular (FAQ)",
            bullets: [
              "S: Otel broşürü kaç günde hazır? C: Standart 500 adet broşür 3-5 gün, acil isteklerde 24-48 saat içinde teslim edilir.",
              "S: Turist rehberi broşürü için kaç sayfa yapabilirsiniz? C: 4, 8, 12, 16 veya daha fazla sayfa yapabiliriz. Katlı veya düz.",
              "S: Kağıt kalitesi ve gramajı? C: 130g mat/parlak kuşe standart. 170g, 250g, 350g+ seçenekleri var.",
              "S: Tasarımı kendiniz mi hazırlıyorsunuz? C: Evet. Fikirlerinizi söyleyin, 0 masalı veya sıfırdan tasarlarız.",
              "S: Şekerhane ve çevresine kaç saatte teslim? C: Şekerhane'ye anında, Mahmutlar/Oba'ya 1 saat, Konaklı'ya 2 saat içinde teslimat.",
            ],
          },
        ],
        cta: "Broşürünüzün elinize ulaştığı ilk anda 'kaliteli' dedirtmek istiyorsanız doğru yerdesiniz. Tasarımınızı gönderin, Alanya'nın en kaliteli broşürlerini birlikte üretelim!",
      },
      en: {
        category: "Brochure",
        title: "Quality Brochure Printing in Alanya | Kale Matbaa",
        excerpt:
          "Vivid colors and paper up to 350g in digital and offset brochure production. Professional printing with folded and flat brochure options.",
        metaTitle: "Brochure Printing in Alanya | Folded & Flat - Kale Matbaa",
        metaDescription:
          "Brochure printing in Alanya: digital and offset, vivid colors, paper up to 350g. Tri-fold, accordion and flat brochures, lamination and UV coating.",
        intro: [
          "One of the most economical and visual ways to promote your products or services effectively is the brochure. At Alanya Kale Matbaa, we ensure you get high-quality results in both digital and offset brochure production.",
          "With our Konica Minolta C4065 we print your brochures professionally with vivid colors, sharp details and support for paper up to 350g. With folded (single fold, tri-fold, accordion, etc.) or flat brochure options, we meet every need.",
        ],
        sections: [
          {
            heading: "Why Are Brochures Important?",
            bullets: [
              "The tactile impression they leave on customers is very powerful",
              "They offer the chance to explain product/service details comprehensively",
              "Ideal for fairs, meetings, office distribution and mailing",
              "Wide use from restaurant menus to real estate, hotel brochures to educational institutions",
            ],
          },
          {
            heading: "The Kale Matbaa Difference",
            bullets: [
              "Glossy, matte coated and special paper options",
              "Lamination, varnish and UV spot applications",
              "Fast delivery (we're with you on urgent brochure jobs)",
              "Professional design support",
            ],
          },
        ],
        cta: "If you want your brochure to say 'quality' the moment it reaches your hand, you're in the right place. Send us your design or let's design it together, and we'll produce the best brochures in Alanya.",
      },
      ru: {
        category: "Брошюра",
        title: "Качественная печать брошюр в Аланье | Kale Matbaa",
        excerpt:
          "Яркие цвета и бумага до 350г в цифровой и офсетной печати брошюр. Профессиональная печать с фальцованными и плоскими вариантами.",
        metaTitle: "Печать брошюр в Аланье | Фальцованные и плоские - Kale Matbaa",
        metaDescription:
          "Печать брошюр в Аланье: цифровая и офсетная, яркие цвета, бумага до 350г. Тройной фальц, гармошка и плоские брошюры, ламинация и УФ-лак.",
        intro: [
          "Один из самых экономичных и наглядных способов эффективно представить ваши товары или услуги — это брошюра. В Alanya Kale Matbaa мы обеспечиваем высокое качество результатов как в цифровой, так и в офсетной печати брошюр.",
          "На нашей машине Konica Minolta C4065 мы профессионально печатаем ваши брошюры с яркими цветами, чёткими деталями и поддержкой бумаги до 350г. С вариантами фальцовки (один сгиб, тройной фальц, гармошка и т.д.) или плоскими брошюрами мы отвечаем любым потребностям.",
        ],
        sections: [
          {
            heading: "Почему брошюры важны?",
            bullets: [
              "Тактильное впечатление, которое они оставляют у клиентов, очень сильное",
              "Дают возможность подробно описать детали товара/услуги",
              "Идеальны для выставок, встреч, офисной раздачи и рассылки",
              "Широкое применение — от меню ресторанов до недвижимости, отельных брошюр и учебных заведений",
            ],
          },
          {
            heading: "Отличие Kale Matbaa",
            bullets: [
              "Глянцевая, матовая мелованная и специальная бумага",
              "Ламинация, лак и УФ-выборочное покрытие",
              "Быстрая доставка (мы рядом при срочных заказах)",
              "Профессиональная поддержка по дизайну",
            ],
          },
        ],
        cta: "Если вы хо��ите, чтобы ваша брошюра говорила «качество» с первого прикосновения — вы в правильном месте. Пришлите дизайн или создадим его вместе, и мы напечатаем лучшие брошюры в Аланье.",
      },
    },
  },
  {
    slug: "davetiye",
    image: "/images/invitations.png",
    imageAlt: "Alanya Kale Matbaa şık davetiye baskısı",
    date: "2025",
    content: {
      tr: {
        category: "Davetiye",
        title: "Alanya'da Şık Davetiye Baskı | Düğün & Nişan - Kale Matbaa",
        excerpt:
          "Düğün, nişan ve kurumsal davetiyeler için Alanya Kale Matbaa'nın premium hizmeti. 350g+ karton, kabartma, lak, yaldız uygulaması, aynı gün tasarım.",
        metaTitle: "Alanya Davetiye Baskı | Düğün & Kurumsal - Kale Matbaa",
        metaDescription:
          "Alanya davetiye baskı: düğün, nişan, sünnet ve kurumsal. 350g+ karton, özel kesim, kabartma, lak, yaldız. Şekerhane'den tüm Alanya'ya.",
        intro: [
          "Alanya'nın önemli ve gurur verici anlarında - düğün, nişan, sünnet, açılış veya kurumsal davetleriniz - ilk izlenimi en güçlü şekilde vermek davetiyeyle başlar. Şekerhane, Mahmutlar, Oba, Cikcilli ve Konaklı'daki aileler ve işletmeler için Alanya Kale Matbaa, davetiyelerinizi zarif, şık ve unutulmaz kılıyor.",
          "350 gr ve üzeri kalın kartonlarda, özel kesim, kabartma, lak, selefon ve yaldız gibi premium uygulamalarla yüksek kaliteli davetiye üretimi yapıyoruz. Hem klasik hem modern tasarımlarda geniş seçenek sunuyor, Konica Minolta'nın canlı renk kalitesiyle her davetiyeyi özel kılıyoruz.",
        ],
        sections: [
          {
            heading: "Davetiye Çeşitlerimiz",
            bullets: [
              "Düğün & Nişan Davetiyeleri (zarflı ve zarfsız)",
              "Sünnet & Doğum Günü Davetiyeleri",
              "Kurumsal Açılış ve Etkinlik Davetiyeleri",
              "Özel kesim (kemer kesim, yuvarlak köşe vs.) modeller",
              "Lüks dokulu ve renkli kağıt seçenekleri (130g - 350g+)",
            ],
          },
          {
            heading: "Neden Bizi Tercih Etmelisiniz?",
            bullets: [
              "Canlı renkler ve kusursuz baskı kalitesi (Konica Minolta C4065)",
              "Hızlı üretim: tasarım onayından 3-7 gün içinde teslim",
              "Kişiye özel tasarım ve toplu üretim avantajı",
              "Ücretsiz tasarım danışmanlığı ve mock-up gösterimi",
              "Premium uygulamalar: kabartma, lak, yaldız, embossing",
            ],
          },
          {
            heading: "Davetiye Siparişi Nasıl Verilir?",
            bullets: [
              "1. Düğün/etkinlik tarihi ve kaç kişiye davetiye göndereceğinizi belirtin.",
              "2. Tasarım fikrinizi veya referans görselleri Whatsapp'tan gönderin.",
              "3. Tasarımcılarımız 24 saat içinde mock-up hazırlar, onaylattırız.",
              "4. Onaylandıktan sonra 3-7 gün içinde basılıp teslim edilir (kişi sayısına göre).",
              "5. Zarfların yapışkanı ve paketlenmesi de dahildir.",
            ],
          },
          {
            heading: "Sıkça Sorulan Sorular (FAQ)",
            bullets: [
              "S: Düğün davetiyeleri kaç günde hazır? C: 150-200 adet için 5-7 gün, acil için 3-4 gün içinde teslim edebiliriz.",
              "S: Tasarımı yok, sıfırdan hazırlar mısınız? C: Evet, tamamen sıfırdan tasarlar ve mock-up gösteririz. Ücretsiz danışmanlık veriyoruz.",
              "S: Kağıt kalitesi nakalit? C: 200g, 250g, 300g, 350g+ mat veya parlak karton seçeneklerimiz var.",
              "S: Yaldız ve kabartma işi kaç gün ekler? C: Normal 3-5 gün içerisinde teslim, özel uygulamalar +1-2 gün.",
              "S: Özel kesim (kemer, yuvarlak) işi mümkün mü? C: Evet, tüm özel kesim işlemleri yapıyoruz. Extra ücret talep etmeyiz.",
            ],
          },
        ],
        cta: "Özel günleriniz veya iş etkinlikleriniz için davetiyelerinizi güvenle bize emanet edin. Fikirlerinizi paylaşın, sizin için en uygun tasarımı ve baskıyı hazırlayalım!",
      },
      en: {
        category: "Invitation",
        title: "Elegant, Quality Invitation Printing | Alanya Kale Matbaa",
        excerpt:
          "Wedding, engagement, circumcision and corporate invitations. Premium printing on 350g+ cardstock with custom die-cut, embossing, varnish and foil.",
        metaTitle: "Invitation Printing in Alanya | Wedding & Corporate - Kale Matbaa",
        metaDescription:
          "Invitation printing in Alanya: wedding, engagement and corporate invitations. 350g+ cardstock, custom die-cut, embossing, varnish, lamination and foil.",
        intro: [
          "For your wedding, engagement, circumcision, opening, birthday or corporate invitations, giving the strongest first impression starts with the invitation. At Alanya Kale Matbaa, we make your invitations elegant, stylish and unforgettable.",
          "We produce high-quality invitations on 350g and heavier cardstock with premium applications such as custom die-cut, embossing, varnish, lamination and foil. We offer a wide range of choices in both classic and modern designs.",
        ],
        sections: [
          {
            heading: "Our Invitation Types",
            bullets: [
              "Wedding & Engagement Invitations",
              "Circumcision & Birthday Invitations",
              "Corporate Opening and Event Invitations",
              "Models with and without envelopes",
              "Custom die-cut and luxury textured paper options",
            ],
          },
          {
            heading: "Why Choose Us?",
            bullets: [
              "Vivid colors and flawless print quality",
              "Fast production and on-time delivery",
              "Personalized design and bulk production advantage",
              "Alanya's most modern digital printing technology",
            ],
          },
        ],
        cta: "Entrust your invitations to us with confidence for your special days or business events. Share your ideas and we'll prepare the most suitable design and printing for you.",
      },
      ru: {
        category: "Приглашения",
        title: "Элегантная и качественная печать приглашений | Kale Matbaa",
        excerpt:
          "Свадебные, помолвочные и корпоративные приглашения. Премиальная печать на картоне 350г+ с фигурной вырубкой, тиснением, лаком и фольгой.",
        metaTitle: "Печать приглашений в Аланье | Свадебные и корпоративные",
        metaDescription:
          "Печать приглашений в Аланье: свадебные, помолвочные и корпоративные. Картон 350г+, фигурная вырубка, тиснение, лак, ламинация и фольга.",
        intro: [
          "Для ваших свадебных, помолвочных, корпоративных приглашений, приглашений на открытие или день рождения — самое сильное первое впечатление начинается с приглашения. В Alanya Kale Matbaa мы делаем ваши приглашения элегантными, стильными и незабываемыми.",
          "Мы изготавливаем высококачественные приглашения на картоне от 350г с премиальными приёмами: фигурная вырубка, тиснение, лак, ламинация и фольга. Предлагаем широкий выбор как классических, так и современных дизайнов.",
        ],
        sections: [
          {
            heading: "Виды приглашений",
            bullets: [
              "Свадебные и помолвочные приглашения",
              "Приглашения на день рождения и праздники",
              "Корпоративные приглашения на открытия и мероприятия",
              "Модели с конвертом и без",
              "Фигурная вырубка и роскошная фактурная бумага",
            ],
          },
          {
            heading: "Почему выбирают нас?",
            bullets: [
              "Яркие цвета и безупречное качество печати",
              "Быстрое изготовление и доставка в срок",
              "Индивидуальный дизайн и выгода при больших тиражах",
              "Самая современная цифровая печать в Аланье",
            ],
          },
        ],
        cta: "Доверьте нам ваши приглашения для особых дней или деловых мероприятий. Поделитесь идеями, и мы подготовим наиболее подходящий дизайн и печать.",
      },
    },
  },
  {
    slug: "kartvizit",
    image: "/images/business-cards.png",
    imageAlt: "Alanya Kale Matbaa profesyonel kartvizit baskısı",
    date: "2025",
    content: {
      tr: {
        category: "Kartvizit",
        title: "Alanya'da Profesyonel Kartvizit | Aynı Gün Teslim - Kale Matbaa",
        excerpt:
          "Alanya'daki işletmeler ve profesyoneller için canlı renkli, dayanıklı kartvizit. Konica Minolta C4065, selefon, lak, kabartma, aynı gün teslim.",
        metaTitle: "Alanya Kartvizit Baskı | Selefonlu & Laklı - Kale Matbaa",
        metaDescription:
          "Alanya kartvizit baskı: 80g-350g+ kağıt, selefon, UV lak, kabartma. Şekerhane, Mahmutlar, Oba profesyonelleri için aynı gün teslim.",
        intro: [
          "Alanya'da iş yapıyor, hizmet veriyor veya turizm sektöründe çalışıyorsanız, kartvizit iş dünyasının en önemli iletişim aracıdır. İlk izlenimi oluşturan, markanızı uzun süre hatırlatan ve profesyonelliğinizi yansıtan bu küçük kart, doğru tasarlandığında ve kaliteli basıldığında müşteri kazanımında büyük fark yaratır.",
          "Alanya Kale Matbaa olarak Konica Minolta AccurioPrint C4065 dijital baskı makinemizle 350 grama kadar kalın kartonlarda canlı renkler, net detaylar ve profesyonel sonuçlar üretiyoruz. Şekerhane merkezimizden Mahmutlar, Oba, Cikcilli ve Konaklı'ya hızlı teslimat. İster standart, ister selefonlu, laklı, kabartmalı ya da özel kesimli kartvizit isteyin, hepsini en yüksek kalitede basıyoruz.",
        ],
        sections: [
          {
            heading: "Kale Matbaa Kartvizit Avantajları",
            bullets: [
              "Hızlı üretim ve aynı gün teslimat seçenekleri (1000 adet 4-6 saat)",
              "80g – 350g+ arası geniş kağıt seçenekleri (mat, parlak, selülozik)",
              "Mat, parlak, selülozik selefon ve UV lak uygulamaları",
              "Ücretsiz profesyonel tasarım desteği (sıfırdan veya revizyon)",
              "Acil işlerinizde bile garantili teslimat",
              "Konica Minolta C4065 sayesinde 3600x2400 DPI kalitesi",
            ],
          },
          {
            heading: "Kimler İçin İdeal?",
            bullets: [
              "Yeni kurulan işletmeler ve girişimciler",
              "Serbest meslek sahipleri (avukat, doktor, emlakçı, danışman)",
              "Restoran, kafe, otel, tur operatörü ve turizm işletmeleri",
              "Tüm kurumsal firmalar ve müdürler",
              "Etkinlik ve protokol müdürleri",
            ],
          },
          {
            heading: "Kartvizit Siparişi Nasıl Verilir?",
            bullets: [
              "1. Logonuzu ve iletişim bilgilerinizi Whatsapp'tan gönderin.",
              "2. Tasarımcılarım��z 30 dakika içinde mock-up (görüntü) hazırlar.",
              "3. Onay aldıktan sonra 2-4 saat içinde basılıp Şekerhane'de hazır.",
              "4. Teslim veya kargo seçebilirsiniz. Acil ihtiyaçlar 1 saatte hazır.",
            ],
          },
          {
            heading: "Sıkça Sorulan Sorular (FAQ)",
            bullets: [
              "S: 500 adet kartvizit kaç saatte hazır? C: Standart 500 adet 2-4 saat, acil durumlarda 1 saat içinde basılıp teslim edilir.",
              "S: Tasarım desteği veriyor musunuz? C: Evet, tamamen ücretsiz. Sıfırdan tasarlar veya var olan tasarımınızı revize ederiz.",
              "S: Hangi kağıt kaliteleri mevcut? C: 170g, 200g, 250g, 300g, 350g mat ve parlak seçenekleri. Özel kağıtlar da sipariş alınır.",
              "S: Selefon/lak işi ne kadar ekstra maliyet? C: Lak işi standart ücrete dahil. Premium uygulamalar için fiyat listesi talep edin.",
              "S: QR kod ekleyebilir misiniz? C: Evet, ön veya arka yüze QR kod eklenebilir. Tasarımda belirtmeniz yeterli.",
            ],
          },
        ],
        cta: "Markanızı en profesyonel şekilde temsil edecek kartvizitler için Kale Matbaa ile çalışın. Hemen Whatsapp'tan tasarım fikirlerinizi gönderin!",
      },
      en: {
        category: "Business Card",
        title: "Professional Business Card Printing in Alanya | Kale Matbaa",
        excerpt:
          "Vivid-color business cards on cardstock up to 350g with the Konica Minolta C4065. Lamination, varnish, embossing and custom die-cut with same-day delivery.",
        metaTitle: "Business Card Printing in Alanya | Laminated & Coated - Kale Matbaa",
        metaDescription:
          "Professional business card printing in Alanya: 80g-350g+ paper, lamination, UV varnish, embossing and custom die-cut. Vivid colors, design support, same-day delivery.",
        intro: [
          "The business card is the most important communication tool in the business world. This small card that creates the first impression, keeps your brand memorable and reflects your professionalism makes a big difference when designed well and printed with quality.",
          "At Alanya Kale Matbaa, with our Konica Minolta AccurioPrint C4065 digital press we produce vivid colors, sharp details and professional results on cardstock up to 350g. Whether you want standard, laminated, varnished, embossed or custom die-cut cards, we print them all at the highest quality.",
        ],
        sections: [
          {
            heading: "Kale Matbaa Business Card Advantages",
            bullets: [
              "Fast production and same-day delivery options",
              "Wide paper choices from 80g to 350g+",
              "Matte, glossy, cellulose lamination and UV varnish applications",
              "Design support (ready template or from scratch)",
              "Reliable delivery even on urgent jobs",
            ],
          },
          {
            heading: "Who Is It Ideal For?",
            bullets: [
              "Newly established businesses",
              "Freelance professionals (lawyers, doctors, real estate agents, etc.)",
              "Restaurants, cafes, hotels and tourism businesses",
              "All corporate companies",
            ],
          },
          {
            heading: "Business Card Design Tips",
            paragraphs: [
              "In business card design, keep your logo clear, highlight your contact details and make use of the back too (QR code, services or slogan).",
            ],
          },
        ],
        cta: "Work with Kale Matbaa for business cards that represent your brand most professionally. Get a quote now!",
      },
      ru: {
        category: "Визитки",
        title: "Профессиональная печать визиток в Аланье | Kale Matbaa",
        excerpt:
          "Визитки с яркими цветами на картоне до 350г на Konica Minolta C4065. Ламинация, лак, тиснение и фигурная вырубка с доставкой в тот же день.",
        metaTitle: "Печать визиток в Аланье | Ламинация и лак - Kale Matbaa",
        metaDescription:
          "Профессиональная печать визиток в Аланье: бумага 80г-350г+, ламинация, УФ-лак, тиснение и фигурная вырубка. Яркие цвета, поддержка дизайна.",
        intro: [
          "Визитка — важнейший инструмент общения в деловом мире. Эта маленькая карточка, создающая первое впечатление, надолго напоминающая о вашем бренде и отражающая ваш профессионализм, при правильном дизайне и качественной печати создаёт большую разницу.",
          "В Alanya Kale Matbaa на цифровой машине Konica Minolta AccurioPrint C4065 мы создаём яркие цвета, чёткие детали и профессиональные результаты на картоне до 350г. Хотите стандартные, ламинированные, лакированные, с тиснением или фигурной вырубкой — мы печатаем всё в высочайшем качестве.",
        ],
        sections: [
          {
            heading: "Преимущества визиток Kale Matbaa",
            bullets: [
              "Быстрое изготовление и доставка в тот же день",
              "Широкий выбор бумаги от 80г до 350г+",
              "Матовая, глянцевая, целлюлозная ламинация и УФ-лак",
              "Поддержка дизайна (готовый шаблон или с нуля)",
              "Надёжная доставка даже при срочных заказах",
            ],
          },
          {
            heading: "Кому подходит?",
            bullets: [
              "Новым предприятиям",
              "Специалистам свободных профессий (юристы, врачи, риелторы и т.д.)",
              "Ресторанам, кафе, отелям и туристическому бизнесу",
              "Всем корпоративным компаниям",
            ],
          },
          {
            heading: "Советы по дизайну визиток",
            paragraphs: [
              "В дизайне визитки держите логотип чётким, выделяйте контактные данные и используйте оборотную сторону (QR-код, услуги или слоган).",
            ],
          },
        ],
        cta: "Работайте с Kale Matbaa для визиток, которые представят ваш бренд максимально профессионально. Получите предложение прямо сейчас!",
      },
    },
  },
  {
    slug: "acil-kase",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ka%C5%9Fe2-tuhAHpbeszD9GDtuaffnp1Dv0mCzWf.jpg",
    imageAlt: "Alanya Kale Matbaa acil kaşe üretimi, aynı gün teslim",
    date: "2025",
    content: {
      tr: {
        category: "Acil Kaşe",
        title: "Alanya'da Acil Kaşe Yaptırma | Aynı Gün Teslim - Kale Matbaa",
        excerpt:
          "Acil kaşe ihtiyacınız mı var? Alanya Kale Matbaa 1 saatte tasarım, 2-3 saatte basılmış kaşenizi teslim ediyor. Whatsapp'tan sipariş verin, hemen başlayız.",
        metaTitle: "Acil Kaşe Alanya | Aynı Saat Teslim - Kale Matbaa",
        metaDescription:
          "Alanya'da acil kaşe üretimi: 1 saat tasarım, 2-3 saat basım, aynı gün teslim. Şekerhane Mahmutlar Oba Konaklı. Whatsapp'tan sipariş alıyoruz.",
        intro: [
          "Kaşeniz kırılmış, sekreteriniz tasarımı yanlış yaptırmış, yoksa müşteri toplantısına 1 saat içinde yeni kaşe lazım mı? Alanya Kale Matbaa, acil kaşe ihtiyacınız için hızlı ve güvenilir çözüm ortağınız. Şekerhane, Mahmutlar, Oba, Cikcilli, Konaklı ve tüm Alanya'daki işletmelere acil kaşe hizmeti sunuyoruz.",
          "Acil durumlarında başvurabilirsiniz: Noterlerin belge onaylama süresi bitmiş, avukatın kaşesi kırılmış, müdürün yeni unvanı için kaşe gerekli, satış ofisinin tescil için acil kaşesi lazım vb. Deneyimli ekibimizle en kısa sürede kaliteli kaşenizi üretip teslim ediyoruz.",
        ],
        sections: [
          {
            heading: "Acil Kaşe İhtiyaçları",
            bullets: [
              "Kırılmış veya hasar gören kaşenin yerine yeni kaşe",
              "Yeni kurulu şirket, bürolar ve noter kaşeleri (gece-gündüz)",
              "Yönetim değişikliği sonrası yeni unvanlı kaşe",
              "Satış ofislerinin tescil için acil kaşe",
              "Hukuk müşavir ve mübaşir kaşeleri",
              "Süreli etkinlik ve protokol kaşeleri",
            ],
          },
          {
            heading: "Acil Kaşe Neden Kale Matbaa'da?",
            bullets: [
              "1 saatte tasarım ve mock-up hazırlığı",
              "2-3 saatte basım ve teslim (Şekerhane'de)",
              "Whatsapp ile anlık iletişim ve sipariş",
              "Gece-gündüz hizmet (acil işlerde 24/7 çalışırız)",
              "Yüksek kalite ve dayanıklılık",
              "Ücretsiz profesyonel tasarım ve çizimler",
            ],
          },
          {
            heading: "Acil Kaşe Hızlı Sipariş Süreci",
            bullets: [
              "1. HEMEN Whatsapp'ta 'ACİL KAŞE' yazıp tasarım fikrinizi gönderin: +90 530 930 55 64",
              "2. 15-30 dakika içinde tasarımcı sizi arayıp detay alır (logo, unvan, adres vb.)",
              "3. 30-45 dakika içinde mock-up (görüntü) gönderilir. İlgili kişi telefonla onay verir.",
              "4. Onay alınan anda basıma verilir. 1-2 saat içinde kaşe hazır ve çıkıyor.",
              "5. Teslim: Şekerhane'de teslim alabilirsiniz.",
              "TOTAL SÜREÇ: İlk iletişimden teslimate max 1 saat.",
            ],
          },
          {
            heading: "Sıkça Sorulan Sorular (FAQ)",
            bullets: [
              "S: Gece saat 23:00'te sipariş versem, sabah 07:00'de kaşe hazır mı? C: Evet! Acil durumlarda 24/7 çalışırız. Whatsapp'ta 'ACİL' yazmanız yeterli.",
              "S: Tasarımı 5 dakika içinde hazırlar mısınız? C: Eğer daha önce yaptığınız veya benzeri bir tasarım varsa evet. Yok ise 30-45 dakika gerekir.",
              "S: Kaşe ne zaman bozulur acaba? C: Genel ömür 3-5 yıl. Yoğun kullanımda 1-2 yıl, az kullananlar 5-10 yıl kullanır. Kırılır, mürekkep mekanizması bozulur vb.",
              "S: Tasarımımız yok, sıfırdan yapabilir misiniz? C: Evet. Adınız, unvanınız, adresinizi söyleyin. 30-45 dakikada mock-up hazırlayıp sunuz.",
              "S: Otomatik mi klasik mi almalıyım? C: Acil işlerde genelde otomatik tercih edilir (daha dayanıklı). Klasik de yaparız.",
            ],
          },
        ],
        cta: "Acil kaşe ihtiyacınız var ise HEMEN Whatsapp'tan bize ulaşın: +90 530 930 55 64. '1 saat içinde tasarım, 3 saat içinde teslim' garantisiyle çalışıyoruz!",
      },
      en: {
        category: "Urgent Seal",
        title: "Urgent Seal in Alanya | Same Day Delivery - Kale Matbaa",
        excerpt:
          "Need an urgent seal in Alanya? We design in 1 hour and deliver your printed seal in 2-3 hours. Order via WhatsApp now and we start immediately.",
        metaTitle: "Urgent Seal Alanya | Same Hour Delivery - Kale Matbaa",
        metaDescription:
          "Urgent seal production in Alanya: 1-hour design, 2-3 hours printing, same-day delivery. Şekerhane, Mahmutlar, Oba. WhatsApp orders.",
        intro: [
          "Your seal is broken, your secretary made a design mistake, or you need a new seal for a client meeting in 1 hour? Alanya Kale Matbaa is your fast and reliable partner for urgent seal needs. We serve all of Alanya including Şekerhane, Mahmutlar, Oba, Cikcilli, and Konaklı with emergency seal services.",
          "You can contact us in urgent situations: notary's seal validation time has passed, lawyer's seal is broken, new company with new titles needs seal urgently, sales offices need urgent registration seal, etc. With our experienced team, we produce and deliver your quality seal in the shortest possible time.",
        ],
        sections: [
          {
            heading: "Urgent Seal Needs",
            bullets: [
              "Replacement seal for broken or damaged seal",
              "New company, office and notary seals (24/7)",
              "New management titles seal",
              "Sales offices registration seal",
              "Lawyer and bailiff seals",
              "Limited-time event and protocol seals",
            ],
          },
          {
            heading: "Why Kale Matbaa for Urgent Seals?",
            bullets: [
              "Design and mock-up in 1 hour",
              "Printing and delivery in 2-3 hours (Şekerhane)",
              "Instant WhatsApp communication and ordering",
              "24/7 service for urgent jobs",
              "High quality and durability",
              "Free professional design and artwork",
            ],
          },
          {
            heading: "Urgent Seal Quick Order Process",
            bullets: [
              "1. Send 'URGENT SEAL' on WhatsApp with your design idea: +90 530 930 55 64",
              "2. Within 15-30 minutes, designer calls you for details (logo, title, address, etc.)",
              "3. Within 30-45 minutes, mock-up is sent. Authorized person approves by phone.",
              "4. Upon approval, it goes to printing. Seal is ready and out within 1-2 hours.",
              "5. Delivery: Pickup in Şekerhane.",
              "TOTAL PROCESS: Max 1 hour from first contact to delivery.",
            ],
          },
          {
            heading: "Frequently Asked Questions (FAQ)",
            bullets: [
              "Q: If I order at 23:00 at night, is the seal ready by 07:00 in the morning? A: Yes! We work 24/7 for urgent cases. Just write 'URGENT' on WhatsApp.",
              "Q: Can you prepare the design in 5 minutes? A: If you have a previous similar design, yes. Otherwise 30-45 minutes needed.",
              "Q: When do seals break or wear out? A: General lifespan is 3-5 years. Heavy use 1-2 years, light use 5-10 years. Break, ink mechanism fails, etc.",
              "Q: We don't have a design, can you create from scratch? A: Yes. Tell us your name, title, address. We prepare mock-up in 30-45 minutes.",
              "Q: Should I get automatic or classic seal? A: For urgent jobs, automatic is usually preferred (more durable). We do classic too.",
            ],
          },
        ],
        cta: "Do you have an urgent seal need? Contact us NOW on WhatsApp: +90 530 930 55 64. We work with '1-hour design, 3-hour delivery' guarantee!",
      },
      ru: {
        category: "Срочная печать",
        title: "Срочная печать в Аланье | Доставка в тот же день - Kale Matbaa",
        excerpt:
          "Нужна срочная печать в Аланье? Дизайн за 1 час, печать и доставка за 2-3 часа. Заказ через WhatsApp.",
        metaTitle: "Срочная ��ечать Алань | Доставка в тот же час - Kale Matbaa",
        metaDescription:
          "Срочна�� печать в Аланье: дизайн 1 час, п��чать 2-3 часа. Şekerhane, Mahmutlar, Oba, Konaklı. Заказы через WhatsApp.",
        intro: [
          "Ваша печать сломана, секретарь сделала неправильный дизайн, или вам срочно нужна печать на встречу за 1 час? Alanya Kale Matbaa - ваш быстрый и надёжный партнёр для срочных печатей. Мы обслуживаем весь Аланью, включая Şekerhane, Mahmutlar, Oba, Cikcilli и Konaklı.",
          "Вы можете обратиться к нам в срочных ситуациях: срок действия печати нотариуса истёк, печать юриста сломана, новая компания с новыми названиями нуждается в печати срочно, отделы продаж нуждаются в срочной печати для регистрации и т.д. С помощью опытной команды мы производим и доставляем вашу качественную печать в кратчайший срок.",
        ],
        sections: [
          {
            heading: "Срочные потребности в печатях",
            bullets: [
              "Замена сломанной или повреждённой печати",
              "Печати для новых компаний, офисов и нотариусов (24/7)",
              "Печати с новыми названиями при смене руководства",
              "Печати для регистрации отделов продаж",
              "Печати юристов и судебных приставов",
              "Печати для временных мероприятий и протоколов",
            ],
          },
          {
            heading: "Почему Kale Matbaa для срочных печатей?",
            bullets: [
              "Дизайн и макет за 1 час",
              "Печать и доставка за 2-3 часа (Şekerhane)",
              "Мгновенная связь через WhatsApp и заказ",
              "Обслуживание 24/7 для срочных заказов",
              "Высокое качество и прочность",
              "Бесплатный профессиональный дизайн и оформление",
            ],
          },
          {
            heading: "Процесс срочного заказа печати",
            bullets: [
              "1. Отправьте 'СРОЧНАЯ ПЕЧАТЬ' на WhatsApp с идеей дизайна: +90 530 930 55 64",
              "2. За 15-30 минут дизайнер позвонит вам для деталей (логотип, должность, адрес и т.д.)",
              "3. За 30-45 минут отправляется макет. Уполномоченное лицо одобряет по телефону.",
              "4. После одобрения переходит в печать. Печать готова за 1-2 часа.",
              "5. Доставка: Самовывоз в Şekerhane.",
              "ОБЩЕЕ ВРЕМЯ: Макс 1 час от первого контакта до доставки.",
            ],
          },
          {
            heading: "Часто задаваемые вопросы (FAQ)",
            bullets: [
              "В: Если я закажу в 23:00, печать готова в 07:00? О: Да! Мы работаем 24/7 для срочных случаев. Просто напишите 'СРОЧНО' в WhatsApp.",
              "В: Можете подготовить дизайн за 5 минут? О: Если есть предыдущий похожий дизайн - да. Иначе нужно 30-45 минут.",
              "В: Когда печати ломаются или износились? О: Средний срок 3-5 лет. При интенсивном использовании 1-2 года, при лёгком 5-10 лет.",
              "В: У нас нет дизайна, можете создать с нуля? О: Да. Скажи��е имя, должность, адрес. Макет за 30-45 минут.",
              "В: Автоматическую или классическую печать выбрать? О: Для срочных - обычно автоматическую (прочнее). Классическую тоже делаем.",
            ],
          },
        ],
        cta: "Нужна срочная печать? Свяжитесь с нами ПРЯМО СЕЙЧАС на WhatsApp: +90 530 930 55 64. Гарантия '1 час дизайн, 3 часа доставка'!",
      },
    },
  },
  {
    slug: "canva-tasarimi",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/canvakalematbaa-HrbbKNcaloMy6UIifypmrV0mJFYt6U.jpg",
    imageAlt: "Canva ile profesyonel iş kartı tasarımı, Alanya Kale Matbaa",
    date: "2025",
    content: {
      tr: {
        category: "Canva Tasarım",
        title: "Canva ile Tasarım Yapın, Alanya Kale Matbaa'da Profesyonelce Bastırın",
        excerpt:
          "Canva'da hazırladığınız tasarımları profesyonel baskıya dönüştürün. Kartvizit, broşür, davetiye, menü. Alanya Kale Matbaa'da en kaliteli sonuçlar için teknik rehber.",
        metaTitle: "Canva Tasarımı Baskıya | Kale Matbaa - Alanya",
        metaDescription:
          "Canva tasarımınızı profesyonel baskıya nasıl hazırlarsınız? Boyut, bleed, DPI, PDF export. Alanya Kale Matbaa aynı gün teslimat ile hizmet veriyoruz.",
        intro: [
          "Canva, herkesin kolayca profesyonel görünümlü tasarımlar hazırlayabildiği harika bir araç. Kartvizit, broşür, davetiye, el ilanı, menü veya sticker… Birçok kişi artık tasarımlarını Canva'da hazırlıyor. Ama ekranda güzel görünen bir tasarımın matbaada da aynı kalitede çıkması için bazı teknik detaylara dikkat etmek gerekiyor.",
          "Alanya Kale Matbaa olarak müşterilerimizin Canva ile hazırladığı dosyaları profesyonel baskıya dönüştürüyoruz. Dosyanızı hazırladığınız sayfanın Canva bağlantı linkini bize gönderin, biz kontrol edelim, gerekirse düzelterek yüksek kalitede basalım.",
        ],
        sections: [
          {
            heading: "Canva Tasarımınızı Baskıya Nasıl Hazırlarsınız?",
            bullets: [
              "Doğru boyutu seçin: Baskı yapacağınız ürünün net ölçüsünü kullanın (örneğin standart kartvizit 85x55 mm, A5 broşür 148x210 mm). Canva'da 'Özel boyut' seçeneğini kullanın.",
              "3-4 mm Bleed (taşma payı) ekleyin: Profesyonel kesim için tasarımınızın kenarlarından 3 mm dışarı taşması gerekir. Canva'da Dosya > Görünüm ayarları > Baskı taşmasını göster seçeneğini açın.",
              "Yüksek çözünürlüklü görseller kullanın: Baskıda net sonuç için görseller en az 300 DPI olmalıdır. İnternetten indirdiğiniz düşük çözünürlüklü fotoğraflar bulanık çıkar.",
              "PDF Print olarak indirin: Sağ üstteki Paylaş > İndir butonuna tıklayın. Dosya türü olarak PDF Print seçin (PDF Standard değil). Kırpma işaretleri ve taşma payı kutusunu işaretleyin.",
              "Canva Pro kullanıyorsanız renk profilini CMYK seçin: Ücretsiz hesaplarda RGB çıkar, biz dönüşümünü yapabiliriz.",
            ],
          },
          {
            heading: "Neden Canva Tasarımınızı Bize Getirmelisiniz?",
            bullets: [
              "Canva dosyalarınızı (PDF veya paylaşım linki) kabul ediyoruz",
              "Ücretsiz tasarım desteği ve revizyon imkânı sunuyoruz",
              "350 grama kadar kalın kartonlarda canlı renkli baskı",
              "Mat, parlak selefon, UV lak, kabartma ve özel kesim seçenekleri",
              "Kartvizit, broşür, davetiye, menü, el ilanı ve daha birçok üründe aynı gün veya çok hızlı teslimat",
              "35+ yıllık tecrübe ile net, profesyonel sonuç",
            ],
          },
          {
            heading: "Canva Dosyasını Nasıl Gönderirim?",
            bullets: [
              "Canva'da hazırladığınız tasarımı WhatsApp'tan (+90 530 930 55 64) gönderin",
              "Hemen inceleyelim, size en uygun kağıt ve bitiş önerilerini sunalım",
              "İsterseniz sıfırdan da tasarım hazırlayabiliriz",
              "Dosyayı PDF veya Canva paylaşım linki olarak gönderebilirsiniz",
            ],
          },
        ],
        cta: "Canva'da yaptığınız işi profesyonel baskıya dönüştürmek için hemen WhatsApp'tan iletişime geçin: +90 530 930 55 64. Tasarımınızı ekrandan kâğıda taşıyalım!",
      },
      en: {
        category: "Canva Design",
        title: "Design with Canva, Professional Printing at Kale Matbaa Alanya",
        excerpt:
          "Transform your Canva designs into professional prints. Business cards, brochures, invitations, menus. Technical guide for best results at Kale Matbaa.",
        metaTitle: "Canva Design to Print | Kale Matbaa - Alanya",
        metaDescription:
          "How to prepare Canva designs for professional printing? Sizing, bleed, DPI, PDF export. Kale Matbaa offers same-day delivery in Alanya.",
        intro: [
          "Canva is a wonderful tool that lets anyone easily create professionally-designed graphics. Business cards, brochures, invitations, flyers, menus, or stickers. Many people now prepare their designs in Canva. However, for a design that looks good on screen to print with the same quality, you need to pay attention to some technical details.",
          "At Alanya Kale Matbaa, we transform your Canva designs into professional prints. Send us the Canva link of your design, we'll review it, make corrections if needed, and print it with high quality.",
        ],
        sections: [
          {
            heading: "How to Prepare Your Canva Design for Printing?",
            bullets: [
              "Choose the correct size: Use the exact dimensions of the product you're printing (e.g., standard business card 85x55 mm, A5 brochure 148x210 mm). Use 'Custom size' option in Canva.",
              "Add 3-4 mm Bleed (safety margin): For professional cutting, your design needs to extend 3 mm beyond the edge. Open File > View settings > Show print bleed in Canva.",
              "Use high-resolution images: For crisp printing, images must be at least 300 DPI. Low-resolution photos from the internet will appear blurry.",
              "Download as PDF Print: Click Share > Download button in top right. Select PDF Print as file type (not PDF Standard). Check crop marks and bleed box.",
              "If using Canva Pro, set color profile to CMYK: Free accounts output RGB, we can convert for you.",
            ],
          },
          {
            heading: "Why Choose Us for Your Canva Designs?",
            bullets: [
              "We accept Canva files (PDF or sharing link)",
              "Free design support and revision options",
              "Vibrant color printing on cardstock up to 350g",
              "Matte, glossy lamination, UV varnish, embossing and custom cutting options",
              "Same-day or fast delivery for business cards, brochures, invitations, menus, flyers and more",
              "Professional results with 35+ years of experience",
            ],
          },
          {
            heading: "How to Send Your Canva File?",
            bullets: [
              "Send your Canva design via WhatsApp (+90 530 930 55 64)",
              "We'll review immediately and suggest the best paper and finishing options",
              "We can also create designs from scratch if you prefer",
              "Send as PDF or Canva sharing link",
            ],
          },
        ],
        cta: "Ready to turn your Canva work into professional prints? Contact us via WhatsApp: +90 530 930 55 64. Transform your design from screen to paper!",
      },
      ru: {
        category: "Дизайн в Canva",
        title: "Дизайн в Canva, профессиональная печать в Kale Matbaa Алань",
        excerpt:
          "Превратите ваши проекты Canva в профессиональные отпечатки. Визитки, брошюры, приглашения, меню. Техническое руководство для лучших результатов.",
        metaTitle: "Дизайн Canva в печать | Kale Matbaa - Алань",
        metaDescription:
          "Как подготовить дизайн Canva к профессиональной печати? Размер, выпуск за обрез, DPI, экспорт PDF. Kale Matbaa доставка в тот же день.",
        intro: [
          "Canva - это замечательный инструмент, позволяющий каждому легко создавать профессионально выглядящие дизайны. Визитки, брошюры, приглашения, листовки, меню или стикеры. Многие люди теперь подготавливают свои проекты в Canva. Однако, чтобы дизайн, хороший на экране, напечатался с той же качественностью, нужно обратить внимание на некоторые технические детали.",
          "В Alanya Kale Matbaa мы превращаем ваши проекты Canva в профессиональные отпечатки. Отправьте нам ссылку на ваш дизайн Canva, мы проверим, при необходимости отредактируем и напечатаем с высоким качеством.",
        ],
        sections: [
          {
            heading: "Как подготовить дизайн Canva к печати?",
            bullets: [
              "Выберите правильный размер: Используйте точные размеры продукта, который вы печатаете (например, стандартная визитка 85x55 мм, брошюра A5 148x210 мм). Используйте опцию 'Пользовательский размер' в Canva.",
              "Добавьте 3-4 мм выпуска за обрез: Для профессионального обрезания ваш дизайн должен выходить на 3 мм за край. Откройте Файл > Параметры просмотра > Показать выпуск за обрез в Canva.",
              "Используйте изображения высокого разрешения: Для четкой печати изображения должны быть не менее 300 DPI. Фотографии низкого разрешения из интернета будут выглядеть размытыми.",
              "Скачайте как PDF для печати: Нажмите Поделиться > Загрузить в верхнем правом углу. Выберите PDF для печати (не PDF Standard). Отметьте метки обрезки и выпуск за обрез.",
              "Если используете Canva Pro, установите цвет��вой профиль CMYK: Бесплатные учетные записи выдают RGB, мы можем конвертировать дл�� вас.",
            ],
          },
          {
            heading: "Почему выбрать нас для ваших дизайнов Canva?",
            bullets: [
              "Мы принимаем файлы Canva (PDF или ссылка для общего доступа)",
              "Бесплатная поддержка дизайна и возможность редакции",
              "Яркая печать цветом на картоне до 350 г",
              "Матовые, глянцевые, ламинирование, UV лак, тиснение и опции нестандартного обреза",
              "Доставка в тот же день или быстрая доставка визиток, брошюр, приглашений, меню, листовок и многого другого",
              "Профессиональные результаты с опытом более 35 лет",
            ],
          },
          {
            heading: "Как отправить файл Canva?",
            bullets: [
              "Отправьте ваш дизайн Canva через WhatsApp (+90 530 930 55 64)",
              "Мы проверим сразу же и предложим лучшую бумагу и опции отделки",
              "Мы также можем создать дизайн с нуля, если вы предпочитаете",
              "Отправьте как PDF или ссылку для общего доступа Canva",
            ],
          },
        ],
        cta: "Готовы превратить вашу работу Canva в профессиональные отпечатки? Свяжитесь с нами через WhatsApp: +90 530 930 55 64. Превратите ваш дизайн с экрана на бумагу!",
      },
    },
  },
  {
    slug: "5-baski-hatasi",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5hata-zuOvnkpeIh2iPYNQUxyv2uYa3q3J7v.jpg",
    imageAlt: "Baskı dosyası hazırlanırken yapılan yaygın 5 hata",
    date: "2025",
    content: {
      tr: {
        category: "Baskı Veri Hazırlama",
        title: "Baskı Dosyanız Neden Sorun Çıkarıyor? Ve Nasıl Önlenir? En Yaygın 5 Hata",
        excerpt:
          "Baskı verileri hazırlarken en sık yapılan 5 hata ve bunları nasıl kolayca önleyeceğiniz. Alanya Kale Matbaa'nın yıllar içinde gözlemlediği sorunlar.",
        metaTitle: "Baskı Veri Hazırlama Hataları | Kale Matbaa",
        metaDescription:
          "Baskı dosyasında sorun mu var? PDF vs Word, şablon yok saymak, güvenlik mesafesi, taşma payı, sayfa düzeni. 5 yaygın hata ve çözümleri.",
        intro: [
          "Baskı verileri, her başarılı baskı projesinin kalbidir. Tasarımınızın keskin, renkleri doğru ve profesyonel görünüp görünmeyeceğini onlar belirler. Alanya Kale Matbaa olarak, yıllardır müşterilerimizle çalışırken en çok karşılaştığımız sorunları sizin için derledik.",
          "İşte baskı verisi hazırlarken en sık yapılan 5 hata ve bunları nasıl kolayca önleyeceğiniz…",
        ],
        sections: [
          {
            heading: "1 | Temelleri Atlayınca Her Şey Zorlaşıyor: Baskıya Hazır Dosya Nedir?",
            bullets: [
              "Baskı verileri, matbaanın doğrudan üretimde kullanacağı dosyalardır. Layout, görsel, metin ve özel efektler (folyo, lak, kontur kesim…) hepsi buraya girer.",
              "En güvenli ve profesyonel format ise PDF'dir.",
              "InDesign, Illustrator veya Scribus gibi programlarda hâlâ açık olan dosyalar, Word, PowerPoint veya Photoshop dosyaları ise sıkça sorun çıkarır: yazılar kayar, renkler bozulur, içerikler kaybolur.",
              "Alanya Kale Matbaa tavsiyesi: Her zaman baskıya hazır PDF veya vektör dosya kullanın. Şablonlardaki yardımcı çizgileri asla dışa aktarmayın, yoksa basılı ürününüzde görünürler!",
            ],
          },
          {
            heading: "2 | En Büyük Tuzak: Güncel Şablonları ve Bilgi Formlarını Yok Saymak",
            bullets: [
              "Birçok sorun aslında teknik bilgi eksikliğinden değil, şablonların ve bilgi formlarının okunmamasından kaynaklanır.",
              "Özellikle bayrak, beachflag, kanat klasör veya kağıt torba gibi özel ürünlerde şablonlar sık güncellenir.",
              "Kontrol listesi: Her sipariş öncesi en güncel şablonu indirin, Bilgi formunu mutlaka okuyun, Format, güvenlik mesafesi ve taşma payı (bleed) değerlerine dikkat edin",
              "Birkaç dakikalık kontrol, saatlerce düzeltme döngüsünden kurtarır.",
            ],
          },
          {
            heading: "3 | Küçük Detaylar, Büyük Pişmanlıklar",
            bullets: [
              "Flyer, klasör, afiş gibi standart ürünlerde sürekli aynı hataları görüyoruz: Metin ve logolar kenara çok yakın (güvenlik mesafesi yok)",
              "Taşma payı (bleed) eksik → beyaz kenar çizgileri",
              "Yazı tipi boyutu çok küçük, Düşük çözünürlük",
              "Pratik ipucu: PDF'inizi %100 görünümde açın. Orada bulanık görünen her şey baskıda da bulanık çıkacaktır.",
            ],
          },
          {
            heading: "4 | Cilalama ve Özel Efektlerde Gizli Kurallar",
            bullets: [
              "Görsel olarak güzel görünse bile teknik kurallara uyulmazsa üretim mümkün olmayabilir.",
              "Minimum yazı boyutu ve çizgi kalınlığı gereklidir.",
              "Güvenlik mesafeleri mutlaka korunmalıdır.",
              "Altın/gümüş folyo uygulamalarında 1 mm'ye kadar tolerans vardır (folyo elemanlarını CMYK kenarlara yaslamayın)",
              "3D lak ise çok daha hassas konumlandırılabilir.",
            ],
          },
          {
            heading: "5 | Çok Sayfalı Ürünlerde Sayfa Düzeni Hatası",
            bullets: [
              "Broşür, klasör ve gazete gibi ürünlerde en sık hata sayfaların yanlış sırada veya yanlış şekilde hazırlanmasıdır.",
              "Broşür/gazete → tek PDF, doğru okuma sırası, kapak ayrıca sayılır",
              "Basit kıvrımlı klasör → dış + iç veya 4 tek sayfa, kıvrım ölçüleri mutlaka uyumlu",
              "Zarf → üstte 10 mm basılamayan tutucu kenar, 4+4 yaprak → 10 sayfa = 5 çift taraflı basılmış kağıt",
            ],
          },
        ],
        cta: "Baskı verilerinizden emin değil misiniz? Alanya Kale Matbaa ekibi olarak size yardımcı olmaktan memnuniyet duyarız. Profesyonel baskı verisi kontrol hizmetimizle dosyanızı inceleyebilir, gerekirse düzeltme önerileri sunabiliriz. Kaliteli baskı, doğru veriyle başlar. WhatsApp: +90 530 930 55 64",
      },
      en: {
        category: "Print Data Preparation",
        title: "Why Is Your Print File Causing Problems? And How to Prevent It? 5 Common Mistakes",
        excerpt:
          "The 5 most common mistakes when preparing print files and how to prevent them easily. Problems observed by Kale Matbaa over the years.",
        metaTitle: "Print File Mistakes | Kale Matbaa",
        metaDescription:
          "Issues with your print file? PDF vs Word, ignoring templates, safety margins, bleed, page layout. 5 common mistakes and solutions.",
        intro: [
          "Print data is the heart of every successful print project. It determines whether your design will be sharp, colors correct, and professionally presented. At Alanya Kale Matbaa, we've compiled the most common problems we encounter working with customers over the years.",
          "Here are the 5 most common mistakes when preparing print files and how to easily prevent them…",
        ],
        sections: [
          {
            heading: "1 | Skipping the Basics Makes Everything Harder: What Is a Print-Ready File?",
            bullets: [
              "Print files are files that the print shop will use directly in production. Layout, images, text, and special effects (foil, varnish, die-cutting…) all go into it.",
              "The safest and most professional format is PDF.",
              "Files still open in programs like InDesign, Illustrator or Scribus, or Word, PowerPoint and Photoshop files often cause problems: text shifts, colors distort, content disappears.",
              "Kale Matbaa advice: Always use print-ready PDF or vector files. Never export helper lines from templates, otherwise they'll appear on your printed product!",
            ],
          },
          {
            heading: "2 | The Biggest Trap: Ignoring Current Templates and Information Forms",
            bullets: [
              "Many problems actually stem not from lack of technical knowledge, but from not reading templates and information forms.",
              "Especially for special products like flags, beach flags, wing folders or paper bags, templates are updated frequently.",
              "Checklist: Download the latest template before each order, Always read the information form, Pay attention to format, safety margins and bleed values",
              "A few minutes of checking saves hours of correction loops.",
            ],
          },
          {
            heading: "3 | Small Details, Big Regrets",
            bullets: [
              "We constantly see the same mistakes in standard products like flyers, folders, and posters: Text and logos too close to edges (no safety margin)",
              "Missing bleed → white edge lines",
              "Font size too small, Low resolution",
              "Practical tip: Open your PDF at 100% view. Everything that looks blurry there will be blurry in print.",
            ],
          },
          {
            heading: "4 | Hidden Rules in Finishing and Special Effects",
            bullets: [
              "Even if visually beautiful, if technical rules aren't followed, production may not be possible.",
              "Minimum font size and line thickness are required.",
              "Safety margins must always be maintained.",
              "Gold/silver foil applications have tolerance up to 1 mm (don't place foil elements tight to CMYK edges)",
              "3D varnish can be positioned much more precisely.",
            ],
          },
          {
            heading: "5 | Page Layout Errors in Multi-Page Products",
            bullets: [
              "The most common error in products like brochures, folders and newspapers is pages being prepared in wrong order or wrong format.",
              "Brochure/newspaper → single PDF, correct reading order, cover counts separately",
              "Simple folded folder → outside + inside or 4 separate pages, fold measurements must be compatible",
              "Envelope → 10 mm non-printable holder edge at top, 4+4 sheet → 10 pages = 5 double-sided printed sheets",
            ],
          },
        ],
        cta: "Not sure about your print files? The Alanya Kale Matbaa team is happy to help. With our professional print file review service, we can check your files and provide correction suggestions if needed. Quality printing starts with correct data. WhatsApp: +90 530 930 55 64",
      },
      ru: {
        category: "Подготовка печатных данных",
        title: "Почему ваш печатный файл вызывает проблемы? И как это предотвратить? 5 распространённых ошибок",
        excerpt:
          "5 самых распространённых ошибок при подготовке печатных файлов и как их легко предотвратить. Проблемы, наблюдаемые Kale Matbaa за эти годы.",
        metaTitle: "Ошибки печатного файла | Kale Matbaa",
        metaDescription:
          "Проблемы с вашим печатным файлом? PDF против Word, игнорирование шаблонов, безопасные поля, выпуск за обрез, макет страницы. 5 распространённых ошибок и решения.",
        intro: [
          "Печатные данные - это сердце каждого успешного печатного проекта. Они определяют, будет ли ваш дизайн чётким, цвета правильными и профессионально представленными. В Alanya Kale Matbaa мы собрали наиболее распространённые проблемы, с которыми сталкиваемся при работе с клиентами на протяжении многих лет.",
          "Вот 5 наиболее распространённых ошибок при подготовке печатных файлов и как их легко предотвратить…",
        ],
        sections: [
          {
            heading: "1 | Пропуск основ затрудняет всё: что такое файл, готовый к печати?",
            bullets: [
              "Печатные файлы - это файлы, которые типография будет использовать непосредственно в производстве. Макет, изображения, текст и специальные эффекты (фольга, лак, высечка…) - всё это входит в него.",
              "Самый безопасный и профессиональный формат - это PDF.",
              "Файлы, по-прежнему открытые в программах типа InDesign, Illustrator или Scribus, а также файлы Word, PowerPoint и Photoshop часто вызывают проблемы: текст смещается, цвета искажаются, содержимое теряется.",
              "Совет Kale Matbaa: Всегда используйте PDF или векторные файлы, готовые к печати. Никогда не экспортируйте вспомогательные линии из шаблонов, иначе они появятся на вашем печатном изделии!",
            ],
          },
          {
            heading: "2 | Самая большая ловушка: игнорирование текущих шаблонов и информационных форм",
            bullets: [
              "Многие проблемы на самом деле возникают не из-за недостатка технических знаний, а из-за неуважения к шаблонам и информационным формам.",
              "Особенно для специальных продуктов, таких как флаги, пляжные флаги, крылатые папки или бумажные пакеты, шаблоны часто обновляются.",
              "Контрольный список: Загружайте последний шаблон перед каждым заказом, Всегда читайте информационную форму, Обращайте внимание на формат, безопасные поля и значения выпуска за обрез",
              "Несколько минут проверки спасают часы циклов коррекции.",
            ],
          },
          {
            heading: "3 | Маленькие детали, большое сожаление",
            bullets: [
              "Мы постоянно видим одинак��вые ошибки в стандартных продуктах, таких как листовки, папки и плакаты: текст и логотипы слишком близко к краям (отсутствуют безопасные поля)",
              "Отсутствует выпуск за обрез → белые линии по краям",
              "Размер шрифта слишком мал, низкое разрешение",
              "Практический совет: откройте ваш PDF при 100% просмотре. Всё, что выглядит размытым там, будет размытым при печати.",
            ],
          },
          {
            heading: "4 | Скрытые правила в отделке и специальных эффектах",
            bullets: [
              "Даже если визуально выглядит красиво, если не соблюдаются технические правила, производство может быть невозможно.",
              "Требуются минимальный размер шрифта и толщина линий.",
              "Безопасные поля всегда должны соблюдаться.",
              "Приложения золотой/серебряной фольги допускают допуск до 1 мм (не размещайте элементы фольги вплотную к краям CMYK)",
              "3D-лак может быть расположен намного более точно.",
            ],
          },
          {
            heading: "5 | Ошибки макета страницы в многостраничных продуктах",
            bullets: [
              "Наиболее распространённая ошибка в продуктах, таких как брошюры, папки и газеты, - это страницы, подготовленные в неправильном порядке или неправильном формате.",
              "Брошюра/газета → один PDF, правильный порядок чтения, обложка считается отдельно",
              "Простая сложенная папка → снаружи + внутри или 4 отдельные страницы, размеры сгибов должны быть совместимы",
              "Конверт → 10 мм непечатаемое поле-держатель вверху, 4+4 листа → 10 страниц = 5 двусторонних печатных листов",
            ],
          },
        ],
        cta: "Не уверены в своих печатных файлах? Команда Alanya Kale Matbaa рада помочь. С нашей профессиональной услугой проверки печатных файлов мы можем проверить ваши файлы и предоставить рекомендации по исправлениям при необходимости. Качественная печать начинается с правильных данных. WhatsApp: +90 530 930 55 64",
      },
    },
  },
  {
    slug: "grafik-trendler-2026",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2026trend-UehtsXKBIcTHOGaPiAVhazeYmgYHnl.jpg",
    imageAlt: "2026 grafik tasarım trendleri - Hyper-Bloom, Cloud Dancer, sinematik fotoğrafçılık",
    date: "2025",
    content: {
      tr: {
        category: "Grafik Tasarım",
        title: "Grafik Tasarım Trendleri 2026: Gelecek Nasıl Görünecek?",
        excerpt:
          "Hangi renkler geleceğe ait hissettiriyor? 2026'nın en önemli grafik tasarım trendleri ve Pantone'un yılın rengi Cloud Dancer.",
        metaTitle: "2026 Grafik Tasarım Trendleri | Kale Matbaa",
        metaDescription:
          "2026 grafik tasarım trendleri: İnsan + AI hibrit çalışma, güçlü tipografi, Hyper-Bloom, sinematik fotoğrafçılık, Cloud Dancer rengi.",
        intro: [
          "Hangi renkler geleceğe ait hissettiriyor? Ve dikkat çekmek için bağırması gerekmeyen bir tasarım nasıl görünür?",
          "2026, grafik tasarıma yeni bir sakinlik getiriyor. Karakter, duygu ve net mesajlarla birleşen bu sakinlik, özellikle Pantone'un 2026 Yılın Rengi Cloud Dancer ile mükemmel uyum yakalıyor.",
        ],
        sections: [
          {
            heading: "1 | İnsan + Yapay Zekâ Hibrit Çalışma Biçimi",
            bullets: [
              "Yapay zekâ hâlâ çok önemli, ancak asıl lider insan. Tasarımcılar generatif araçları yaratıcı bir sıçrama tahtası olarak kullanıyor, ardından sonuçları bilinçli şekilde rafine edip yönlendiriyor.",
              "Bu iş birliği, teknik derinlik taşıyan özgün işler ortaya çıkarıyor.",
              "2026'da yapay zekâ fikir, varyasyon, eskiz ve mood araştırması için kullanılıyor. Tasarımcı sonuçları seçiyor, birleştiriyor ve inceliyor. Final stil, mesaj ve his tamamen insandan geliyor.",
              "İlk heyecan dalgasından sonra orijinallik ve anlam arayışı arttı. Saf yapay zekâ görselleri hızla sıradanlaşıyor.",
            ],
          },
          {
            heading: "2 | İfade Gücü Yüksek Tipografi & Tipo-Kolajlar",
            bullets: [
              "2026'da tipografi artık sadece bilgi vermek için değil, görselin kendisi, yapısı ve duygu taşıyıcısı oluyor.",
              "Görsel gürültünün arttığı bir dünyada, güçlü tipografi markaların akılda kalmasını sağlıyor.",
              "Harfler bozuluyor, kesiliyor, üst üste biniyor veya serbestçe yerleştiriliyor. Farklı yazı tipleri, boyutlar ve stiller bilinçli şekilde birleştiriliyor.",
              "Eğik eksenler, devasa harfler ve ritmik tekrarlar gerilim yaratıyor. Sıradan fontlar yerine deneysel ve kişilik sahibi yazı tipleri tercih ediliyor.",
            ],
          },
          {
            heading: "3 | Hyper-Bloom – 2026'nın Yumuşak ve Duygusal Trendi",
            bullets: [
              "Ekranlarla, uyaran bombardımanıyla ve kusursuz yapay zekâ görselleriyle dolu bir dönemde, tam tersi bir trend doğuyor: Hyper-Bloom.",
              "Bu stil sakinlik, duygu ve görsel yumuşaklık demek. 2026'da grafik tasarımın önemli estetik akımlarından biri haline geliyor.",
              "Pembe, leylak, gökyüzü mavisi, açık yeşil ve tereyağı sarısı gibi yumuşak pastel tonlar kullanılıyor.",
              "Yumuşak geçişler, blur efektleriyle oluşturulan derinlik, büyütülmüş organik formlar ve sinematik atmosfer Hyper-Bloom'un özellikleridir.",
            ],
          },
          {
            heading: "4 | Sinematik Fotoğrafçılık",
            bullets: [
              "2026'nın en güçlü fotoğraf trendlerinden biri sinematik yaklaşım. Fotoğraflar artık sadece güzel olmak zorunda değil; bir filmin tek karesi gibi hissettirmeli.",
              "Odak, teknik mükemmellikten çok atmosfer, ruh hali ve hikâyeye kayıyor.",
              "Net bir duygusal atmosfer, dramatik veya çok bilinçli yerleştirilmiş ışık, az ama güçlü kompozisyon gereklidir.",
              "Bakınca sorularını sordurtan kareler öne çıkıyor: Burada ne oluyor? Bu kişi kim? Nasıl bir ruh hali var?",
            ],
          },
          {
            heading: "5 | Pantone 2026 Yılın Rengi: Cloud Dancer",
            bullets: [
              "Pantone, 2026 Yılın Rengi'ni gürültülü bir dünyada sakinlik ve huzur dokunuşu sloganıyla tanıttı.",
              "Cloud Dancer, bulutlarda süzülüyormuş hissi veren hafif, ferah bir kırık beyaz.",
              "Yalnız başına kullanıldığında sakin ve zarif, güçlü renklerle birleştiğinde onları daha da parlatıyor, pastellerle ise mükemmel uyum sağlıyor.",
              "Moda, iç mekân ve grafik tasarımda minimalizmi destekliyor. Yaratıcılığa alan açıyor, dikkat dağıtmıyor.",
            ],
          },
        ],
        cta: "2026'da grafik tasarım daha az bağırıyor, daha çok hissettiriyor. İnsan dokunuşu, güçlü tipografi, yumuşak atmosferler ve bilinçli sakinlik öne çıkıyor. Alanya Kale Matbaa olarak bu trendleri hem tasarım hem de baskı tarafında yakından takip ediyoruz. Projelerinizde bu yeni dili kullanmak isterseniz, doğru kâğıt seçiminden özel baskı tekniklerine kadar yanınızdayız. WhatsApp: +90 530 930 55 64",
      },
      en: {
        category: "Graphic Design",
        title: "Graphic Design Trends 2026: How Will the Future Look?",
        excerpt:
          "Which colors feel like the future? The most important graphic design trends of 2026 and Pantone's color of the year Cloud Dancer.",
        metaTitle: "2026 Graphic Design Trends | Kale Matbaa",
        metaDescription:
          "2026 graphic design trends: Human + AI hybrid work, strong typography, Hyper-Bloom, cinematic photography, Cloud Dancer color.",
        intro: [
          "Which colors feel like the future? And what does a design look like that doesn't need to shout to get attention?",
          "2026 brings new calmness to graphic design. This calmness combined with character, emotion and clear messaging achieves perfect harmony, especially with Pantone's 2026 Color of the Year, Cloud Dancer.",
        ],
        sections: [
          {
            heading: "1 | Human + AI Hybrid Work Style",
            bullets: [
              "AI is still very important, but the real leader is human. Designers use generative tools as a creative springboard, then consciously refine and direct the results.",
              "This collaboration produces original work with technical depth.",
              "In 2026 AI is used for ideas, variations, sketches and mood research. Designers select, combine and refine results. Final style, message and feeling come entirely from humans.",
              "After the first wave of excitement, the search for originality and meaning increased. Pure AI images quickly become ordinary.",
            ],
          },
          {
            heading: "2 | High Expression Typography & Type-Collages",
            bullets: [
              "In 2026 typography is no longer just for conveying information; it becomes the image itself, its structure and emotional carrier.",
              "In a world of increased visual noise, strong typography keeps brands memorable.",
              "Letters are distorted, cut, layered or freely placed. Different typefaces, sizes and styles are consciously combined.",
              "Diagonal axes, massive letters and rhythmic repetitions create tension. Experimental and personality-filled typefaces are preferred over ordinary fonts.",
            ],
          },
          {
            heading: "3 | Hyper-Bloom – 2026's Soft and Emotional Trend",
            bullets: [
              "In an era full of screens, stimulus bombardment and perfect AI images, the opposite trend emerges: Hyper-Bloom.",
              "This style means calmness, emotion and visual softness. In 2026 it becomes one of the important aesthetic movements in graphic design.",
              "Soft pastel tones like pink, lavender, sky blue, light green and butter yellow are used.",
              "Soft transitions, depth created with blur effects, enlarged organic forms and cinematic atmosphere characterize Hyper-Bloom.",
            ],
          },
          {
            heading: "4 | Cinematic Photography",
            bullets: [
              "One of the most powerful photography trends of 2026 is the cinematic approach. Photos no longer just need to be beautiful; they should feel like a single frame from a film.",
              "Focus shifts from technical perfection to atmosphere, mood and storytelling.",
              "Clear emotional atmosphere, dramatic or very consciously placed light, minimal but powerful composition are required.",
              "Frames that make viewers ask questions stand out: What's happening here? Who is this person? What's the mood?",
            ],
          },
          {
            heading: "5 | Pantone 2026 Color of the Year: Cloud Dancer",
            bullets: [
              "Pantone introduced 2026 Color of the Year as bringing a touch of calmness and peace to a noisy world.",
              "Cloud Dancer is a light, airy off-white that feels like floating among clouds.",
              "Used alone it's calm and elegant; combined with strong colors it makes them shine even more; paired with pastels it achieves perfect harmony.",
              "It supports minimalism in fashion, interiors and graphic design. It opens space for creativity without distracting.",
            ],
          },
        ],
        cta: "In 2026 graphic design says less but feels more. Human touch, strong typography, soft atmospheres and conscious calmness take center stage. At Alanya Kale Matbaa we closely follow these trends in both design and print. If you want to use this new language in your projects, we're with you from choosing the right paper to special printing techniques. WhatsApp: +90 530 930 55 64",
      },
      ru: {
        category: "Графический дизайн",
        title: "Тренды графического дизайна 2026: Как будет выглядеть будущее?",
        excerpt:
          "Какие цвета кажутся будущими? Самые важные тренды графического дизайна 2026 и цвет года Pantone Cloud Dancer.",
        metaTitle: "Тренды графического дизайна 2026 | Kale Matbaa",
        metaDescription:
          "Тренды дизайна 2026: гибридная работа человека + AI, сильная типография, Hyper-Bloom, кинематографическая фотография, цвет Cloud Dancer.",
        intro: [
          "Какие цвета кажутся принадлежащими будущему? И как выглядит дизайн, который не нужно кричать, чтобы привлечь внимание?",
          "2026 год приносит новое спокойствие в графический дизайн. Это спокойствие, объединённое с характером, эмоцией и чёткими сообщениями, достигает идеальной гармонии, особенно с цветом года Pantone 2026 Cloud Dancer.",
        ],
        sections: [
          {
            heading: "1 | Гибридный стиль работы человека + AI",
            bullets: [
              "ИИ по-прежнему очень важен, но реальный лидер - это человек. Дизайнеры используют генеративные инструменты как трамплин для творчества, а затем сознательно совершенствуют и направляют результаты.",
              "Это сотрудничество создаёт оригинальную работу с технической глубиной.",
              "В 2026 году ИИ используется для идей, вариаций, эскизов и исследования настроений. Дизайнеры выбирают, комбинируют и уточняют результаты. Финальный стиль, сообщение и чувство полностью исходят от человека.",
              "После первой волны увлечения возросли поиски оригинальности и смысла. Чистые изо��ражения ИИ быстро становятся обыкновенными.",
            ],
          },
          {
            heading: "2 | Типография с высокой выразительной силой и тип-коллажи",
            bullets: [
              "В 2026 типография больше не просто информирует; она становится самим изображением, его структурой и носителем эмоций.",
              "В мире возросшего визуального шума сильная типография сохраняет бренды в памяти.",
              "Буквы искажаются, обрезаются, наслаиваются или свободно размещаются. Различные шрифты, размеры и стили сознательно комбинируются.",
              "Диагональные оси, массивные буквы и ритмичные повторения создают напряжение. Экспериментальные и имеющие индивидуальность шрифты предпочитаются обычным.",
            ],
          },
          {
            heading: "3 | Hyper-Bloom – мягкий и эмоциональный тренд 2026 года",
            bullets: [
              "В эпоху, полную экранов, бомбардировки стимулами и совершенных изображений ИИ, возникает противоположный тренд: Hyper-Bloom.",
              "Этот стиль означает спокойствие, эмоцию и визуальную мягкость. В 2026 году это становится одним из важных эстетических движений в графическом дизайне.",
              "Используются мягкие пастельные тона, такие как розовый, сиреневый, небесно-голубой, светло-зелёный и масляный жёлтый.",
              "Мягкие переходы, глубина, созданная эффектами размытия, увеличенные органические формы и кинематографическая атмосфера характеризуют Hyper-Bloom.",
            ],
          },
          {
            heading: "4 | Кинематографическая фотография",
            bullets: [
              "Один из самых мощных фотографических трендов 2026 года - это кинематографический подход. Фотографии больше не просто должны быть красивыми; они должны ощущаться как один кадр из фильма.",
              "Фокус смещается с технического совершенства на атмосферу, настроение и повествование.",
              "Требуется чёткая эмоциональная атмосфера, драматичное или очень сознательно размещённое освещение, минимальная но мощная композиция.",
              "Кадры, которые заставляют зрителей задавать вопросы, выделяются: Что здесь происходит? Кто этот человек? Какое настроение?",
            ],
          },
          {
            heading: "5 | Цвет года Pantone 2026: Cloud Dancer",
            bullets: [
              "Pantone представила цвет года 2026 как приносящий прикосновение спокойствия и мира в шумный мир.",
              "Cloud Dancer - это светлый, воздушный приглушённо-белый, ощущающийся как парящий среди облаков.",
              "Используемый в одиночку - он спокоен и элегантен; в сочетании с сильными цветами он делает их ещё ярче; в паре с пастелью достигает идеальной гармонии.",
              "Поддерживает минимализм в моде, интерьерах и графическом дизайне. Открывает пространство для творчества без отвлечения.",
            ],
          },
        ],
        cta: "В 2026 году графический дизайн говорит меньше, но ощущает больше. Человеческое прикосновение, сильная типография, мягкие атмосферы и сознательное спокойствие занимают центральное место. В Alanya Kale Matbaa мы внимательно следим за этими тенденциями как в дизайне, так и в печати. Если вы хотите использовать этот новый язык в своих проектах, мы с вами от выбора правильной бумаги до специальных техник печати. WhatsApp: +90 530 930 55 64",
      },
    },
  },
]

export function getPost(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug)
}
