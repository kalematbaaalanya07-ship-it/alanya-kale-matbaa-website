import type { Lang } from "@/lib/i18n"

export type BlogSlug = "kase" | "brosur" | "davetiye" | "kartvizit" | "acil-kase" | "canva-tasarimi" | "5-baski-hatasi" | "grafik-trendler-2026" | "dukkan-acma-rehberi" | "dijital-vs-ofset" | "anlamli-hediye-baski" | "kartvizit-hizmet" | "brosur-hizmet" | "menus-hizmet" | "dijital-baski-hizmet" | "ofset-baski-hizmet" | "etiket-hizmet" | "afis-hizmet" | "el-ilani-hizmet"

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
          "Одним из самых практичных инструментов для быстрого подписания и заверения документов и отражения вашего корпоративного стиля является печать. В Alanya Kale Matbaa мы предлагаем качественные материалы и чё��кое качество оттиска как для автоматических, так и д��я классических печатей.",
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
        title: "Сроч������ая печать в Аланье | Доставка в тот же день - Kale Matbaa",
        excerpt:
          "Нужна срочная печать в Аланье? Дизайн за 1 ч��с, печать и доставка за 2-3 часа. Заказ через WhatsApp.",
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
              "В: У нас нет дизайна, может�� создать с нуля? О: Да. Скажи��е имя, должность, адрес. Макет за 30-45 минут.",
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
              "Скачайте как PDF для п��ча��и: Нажмите Поделиться > Загрузить в верхнем правом углу. Выберите PDF для печати (не PDF Standard). Отметь����е метки обре��ки и выпуск за обрез.",
              "Ес��и используете Canva Pro, установите цвет��вой профиль CMYK: Бесплат��ые учетные записи выда��т RGB, мы можем конвертировать дл�� вас.",
            ],
          },
          {
            heading: "Почему выбрать нас для ваших дизайнов Canva?",
            bullets: [
              "Мы принимаем файлы Canva (PDF или с��ылка для общего доступа)",
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
              "Отправьте как PDF или ссылку для об��его доступа Canva",
            ],
          },
        ],
        cta: "Готовы превратить вашу работу Canva в профессиональные отпечатки? Свяжитесь с нами через WhatsApp: +90 530 930 55 64. Превр��тите ваш дизайн с экрана на бумагу!",
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
              "Контрольный список: Загружайте последний шаблон перед каждым заказом, Всегда читайте информационную фо��му, Обращайте внимание на формат, безопасные поля и значения выпуска за обрез",
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
              "3D-лак может быт�� расположен намного более точно.",
            ],
          },
          {
            heading: "5 | Ошибки макета страницы в мн��г��страничных продуктах",
            bullets: [
              "Наиболее распространённая ошибка в продуктах, таких как брошюры, папки и газеты, - это страницы, подготовленные в неправильном порядке или неправильном формате.",
              "Брошюра/газета → один PDF, правильный порядок чтения, обложка считается отдельно",
              "Простая сложенная папка → снаружи + внутри или 4 отдельные страницы, размеры сгибов должны быть совместимы",
              "Конверт → 10 мм непечатаемое поле-держатель вверху, 4+4 листа → 10 страниц = 5 двусторонних печатных листов",
            ],
          },
        ],
        cta: "Не уверены в своих печатных файлах? Команда Alanya Kale Matbaa рада помочь. С нашей профессиональной услугой проверки печатных файлов мы можем проверить ваши файлы и предоставить рекомендации по исправлениям при необходимости. Качественная печать начинается с правил��ных данных. WhatsApp: +90 530 930 55 64",
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
              "E��ik eksenler, devasa harfler ve ritmik tekrarlar gerilim yaratıyor. Sıradan fontlar yerine deneysel ve kişilik sahibi yazı tipleri tercih ediliyor.",
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
          "Which colors feel like the future? 2026's most important graphic design trends and Pantone's Color of the Year Cloud Dancer.",
        metaTitle: "2026 Graphic Design Trends | Kale Matbaa",
        metaDescription:
          "2026 graphic design trends: Human + AI hybrid work, powerful typography, Hyper-Bloom, cinematic photography, Cloud Dancer color.",
        intro: [
          "Which colors feel like they belong to the future? And what does a design look like that doesn't have to shout to get attention?",
          "2026 brings a new calm to graphic design. This serenity, combined with character, emotion and clear messaging, achieves perfect harmony especially with Pantone's 2026 Color of the Year: Cloud Dancer.",
        ],
        sections: [
          {
            heading: "1 | Human + Artificial Intelligence Hybrid Working",
            bullets: [
              "Artificial intelligence is still important, but humans are the real leaders. Designers use generative tools as a creative springboard, then consciously refine and direct the results.",
              "This collaboration produces original work with technical depth.",
              "In 2026, AI is used for ideas, variations, sketches and mood research. The designer selects, combines and refines the results. The final style, message and feeling are completely human.",
              "After the initial wave of excitement, the search for originality and meaning has increased. Pure AI images quickly become mundane.",
            ],
          },
          {
            heading: "2 | Expressive Typography & Typo-Collages",
            bullets: [
              "In 2026, typography is no longer just for conveying information; it becomes the visual itself, its structure and emotion carrier.",
              "In a world of increasing visual noise, powerful typography ensures brands are remembered.",
              "Letters are distorted, cut, overlapped or placed freely. Different typefaces, sizes and styles are consciously combined.",
              "Italic axes, massive letters and rhythmic repetition create tension. Experimental and personality-rich typefaces are preferred over ordinary fonts.",
            ],
          },
          {
            heading: "3 | Hyper-Bloom – 2026's Soft and Emotional Trend",
            bullets: [
              "In a period filled with screens, bombardment of stimuli and perfect AI visuals, the exact opposite trend emerges: Hyper-Bloom.",
              "This style means calm, emotion and visual softness. It becomes one of the important aesthetic movements of graphic design in 2026.",
              "Soft pastel tones like pink, lavender, sky blue, light green and butter yellow are used.",
              "Soft transitions, depth created with blur effects, enlarged organic forms and cinematic atmosphere are characteristics of Hyper-Bloom.",
            ],
          },
          {
            heading: "4 | Cinematic Photography",
            bullets: [
              "One of the most powerful photography trends of 2026 is the cinematic approach. Photos no longer just have to be beautiful; they should feel like a single frame from a film.",
              "Focus shifts from technical perfection to atmosphere, mood and story.",
              "A clear emotional atmosphere, dramatic or very consciously placed lighting, minimal but powerful composition is required.",
              "Frames that make you ask questions when you see them stand out: What's happening here? Who is this person? What mood is there?",
            ],
          },
          {
            heading: "5 | Pantone Color of the Year 2026: Cloud Dancer",
            bullets: [
              "Pantone introduced the 2026 Color of the Year with the tagline: a touch of calm and peace in a noisy world.",
              "Cloud Dancer is a light, airy broken white that gives the feeling of gliding through clouds.",
              "When used alone, it's calm and elegant; when combined with strong colors, it makes them even more vibrant; with pastels, it achieves perfect harmony.",
              "It supports minimalism in fashion, interior design and graphic design. It opens space for creativity without distracting.",
            ],
          },
        ],
        cta: "In 2026, graphic design shouts less and feels more. Human touch, powerful typography, soft atmospheres and conscious calm stand out. At Alanya Kale Matbaa, we closely follow these trends on both the design and printing side. If you want to use this new language in your projects, we're here with you from choosing the right paper to special printing techniques. WhatsApp: +90 530 930 55 64",
      },
      ru: {
        category: "Графический дизайн",
        title: "Тренды графического дизайна 2026: Как будет выглядеть будущее?",
        excerpt:
          "Какие цвета ощущаются как будущее? Самые важные тренды графического дизайна 2026 и цвет года Pantone Cloud Dancer.",
        metaTitle: "Тренды графического дизайна 2026 | Kale Matbaa",
        metaDescription:
          "Тренды графического дизайна 2026: гибридная работа человека и ИИ, мощная типография, Hyper-Bloom, кинематографическая фотография, цвет Cloud Dancer.",
        intro: [
          "Какие цвета ощущаются как принадлежащие будущему? И как выглядит дизайн, который не обязательно кричит, чтобы привлечь внимание?",
          "2026 год приносит новое спокойствие в графический дизайн. Это спокойствие, в сочетании с характером, эмоцией и чётким сообщением, достигает идеальной гармонии, особенно с цветом года Pantone 2026: Cloud Dancer.",
        ],
        sections: [
          {
            heading: "1 | Гибридная работа человека и искусственного интеллекта",
            bullets: [
              "Искусственный интеллект по-прежнему важен, но настоящие лидеры - люди. Дизайнеры используют генеративные инструменты как трамплин для творчества, а затем сознат��льно совершенствуют и направляют результаты.",
              "Это сотрудничество создаёт оригинальные произведения с технич��ской глубиной.",
              "В 2026 году ИИ используется для идей, вариаций, эскизов и исследования настроения. Дизайнер выбирает, комбинирует и совершенствует результаты. Финальный стиль, сообщение и чувство полностью человеческие.",
              "После первоначального всплеска возбуждения поиск оригинальности и смысла усилился. Чистые изображения ИИ быстро становятся банальными.",
            ],
          },
          {
            heading: "2 | Выразительная типография и типо-коллажи",
            bullets: [
              "В 2026 году типография больше не просто для передачи информации; она становится самим визуалом, его структурой и носителем эмоций.",
              "В мире возрастающего визуального шума мощная типография обеспечивает запоминаемость брендов.",
              "Буквы искажаются, вырезаются, перекрываются или размещаются свободно. Сознательно комбинируются разные шрифты, размеры и стили.",
              "Наклонные оси, массивные буквы и ритмичные повторения создают напряжение. Предпочитаются экспериментальные шрифты с характером вместо обычных шрифтов.",
            ],
          },
          {
            heading: "3 | Hyper-Bloom – мягкий и эмоциональный тренд 2026",
            bullets: [
              "В период, наполненный экранами, бомбардировкой раздражителей и совершенными визуалами ИИ, возникает совершенно противоположный тренд: Hyper-Bloom.",
              "Этот стиль означает спокойствие, эмоцию и визуальную мягкость. Он становится одним из важных эстетических движений графического дизайна в 2026 году.",
              "Используются мягкие пастельные тона, такие как розовый, сиреневый, небесно-голубой, светло-зелёный и масляно-жёлтый.",
              "Мягкие переходы, глубина, созданная с помощью размытия, увеличенные органические формы и кинематографическая атмосфера - характеристики Hyper-Bloom.",
            ],
          },
          {
            heading: "4 | Кинематографическая фотография",
            bullets: [
              "Один из самых мощных трендов фотографии 2026 года - кинематографический подход. Фотографии больше не просто должны быть красивыми; они должны ощущаться как один кадр из фильма.",
              "Фокус смещается с технического совершенства на атмосферу, настроение и историю.",
              "Требуется чёткая эмоциональная атмосфера, драматичное или очень сознательно размещённое освещение, минимальная, но мощная композиция.",
              "Кадры, которые заставляют вас задавать вопросы, когда вы их видите, выделяются: Что здесь происходит? Кто этот человек? Какое настроение?",
            ],
          },
          {
            heading: "5 | Цвет года Pantone 2026: Cloud Dancer",
            bullets: [
              "Pantone представил цвет года 2026 со слоганом: прикосновение спокойствия и мира в шумном мире.",
              "Cloud Dancer - это лёгкий, воздушный сломанный белый цвет, который создаёт ощущение скольжения сквозь облака.",
              "Когда используется отдельно, он спокоен и элегантен; в сочетании с сильными цветами он делает их ещё более яркими; с пастелями достигает идеальной гармонии.",
              "Он поддерживает минимализм в моде, дизайне интерьера и графическом дизайне. Он открывает пространство для творчества без отвлечения.",
            ],
          },
        ],
        cta: "В 2026 году графический дизайн кричит меньше, но ощущается больше. Человеческое прикосновение, мощная типография, мягкие атмосферы и сознательное спокойствие выделяются. В Alanya Kale Matbaa мы внимательно следим за этими трендами как в дизайне, так и в печати. Если вы хотите использовать этот новый язык в своих проектах, мы рядом с вами, начиная с выбора правильной бумаги и заканчивая специальными техниками печати. WhatsApp: +90 530 930 55 64",
      },
    },
  },
  {
    slug: "dukkan-acma-rehberi",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/alanyadukkanacmarehberi-OWtPQNeBIydm1l2wqMyAUqJ7rMi3Rv.jpg",
    imageAlt: "Alanya'da dükkan açacaklar için baskı ve matbaa rehberi - profesyonel malzemeler",
    date: "2025",
    content: {
      tr: {
        category: "İşletme Rehberi",
        title: "Alanya'da Dükkan Açacaklar İçin Baskı ve Matbaa Rehberi: Markanızı İlk Günden Güçlü Başlatın",
        excerpt:
          "Yeni bir dükkan açtığınız zaman ihtiyacınız olan temel baskı malzemeleri nelerdir? Kartvizit, menü, broşür, resmi evrak ve kaşe yapımı. Alanya Kale Matbaa'nın dükkan açış rehberi.",
        metaTitle: "Dükkan Açma Baskı Rehberi | Alanya Kale Matbaa",
        metaDescription:
          "Alanya'da dükkan açarken ihtiyacınız olan baskı malzemeleri ve matbaa ürünleri. Kartvizit, menü, broşür, ofset baskı işleri, kaşe yapımı ve profesyonel başlangıç.",
        intro: [
          "Alanya'da yeni bir dükkan açmak heyecan verici ama aynı zamanda yoğun bir süreç. Konum seçimi, dekorasyon, stok, personel derken markanızı müşterilere tanıtacak ve işletmenizi resmileştirecek basılı malzemeler genellikle sonraya kalıyor.",
          "Oysa profesyonel baskı ve matbaa ürünleri, hem yasal gereklilikleri karşılamanızı sağlar hem de müşteri güvenini artırır. Bu rehberde, Alanya'da dükkan açan her işletmenin ihtiyacı olan baskı ve matbaa malzemelerini, nelere dikkat etmeniz gerektiğini ve işinizi kolaylaştıracak pratik bilgileri bulacaksınız.",
        ],
        sections: [
          {
            heading: "1 | Yeni Dükkan Açarken İhtiyacınız Olan Temel Baskı Malzemeleri",
            bullets: [
              "Kartvizit: Hâlâ en etkili networking aracı. Kaliteli kâğıt, mat/parlak seçenekler ve profesyonel tasarım, dükkanınızı hatırlanır kılar.",
              "Menü, fiyat listesi ve katalog: Restoran, kafe, butik veya hizmet işletmeleri için şart. Suya ve lekeye dayanıklı lamine menüler veya dijital baskı kataloglar hem şık hem pratik olur.",
              "Broşür, el ilanı ve afiş: Açılış kampanyası, indirim veya yeni ürün tanıtımı için. Alanya'da turist yoğun bölgelerde dağıtılacak el ilanları etkili sonuç verir.",
              "Resmi evrak ve ofset baskı işleri: Fatura, irsaliye, sipariş fişi, makbuz, sevk irsaliyesi. Ofset baskı ile yüksek adetli, ekonomik ve profesyonel görünümlü evraklar hazırlanır.",
              "Kaşe (mühür) yapımı: Şirket kaşesi, imza kaşesi, tarihli kaşe ve özel metinli kaşeler. Resmi işlemlerde zorunlu olan bu ürünler, hızlı teslimat ve net baskı kalitesiyle hazırlanır.",
            ],
          },
          {
            heading: "2 | Tasarımdan Baskıya: Adım Adım Süreci",
            bullets: [
              "Markanızın kimliğini belirleyin: Logo, renk paleti, yazı tipi ve kurumsal kimlik rehberi hazırlayın. Profesyonel danışmanlık alın.",
              "Tasarımcı seçimi: Freelancer, tasarım ajanası veya matbaanın tasarım hizmetini kullanabilirsiniz. Alanya Kale Matbaa ücretsiz tasarım desteği sunar.",
              "Dosya hazırlığı: Baskıya hazır PDF dosya, doğru renk profili (CMYK), taşma payı (bleed) ve güvenlik mesafeleri gereklidir.",
              "Numune onayı: Basımdan önce numune kontrol ettirerek renk ve baskı kalitesinden emin olun.",
              "Teslimat: Acil işlerde 24-48 saat içinde teslim edilebilir.",
            ],
          },
          {
            heading: "3 | Alanya'da Dükkan Açmanız İçin Pratik İpuçları",
            bullets: [
              "Hızlı başlangıç için paket hizmet: Birden fazla ürüne indirim ve tümü birlikte hazırlayabilirsiniz.",
              "Kaliteli malzeme yatırımı: Ucuz baskı pahalıya patlar. Dayanıklı ve profesyonel görünümlü ürünler müşteri güvenini artırır.",
              "Stok yönetimi: Çok fazla adet yazdırmamak, düzenli olarak yenilemeleri tercih etmek akıllıca bir yöntemdir.",
              "Çok dilli malzemeler: Alanya'nın turist nüfusu göz önüne alındığında, İngilizce, Rus, Almanca tercümeleri değerlidir.",
              "Sosyal medya entegrasyonu: Basılı malzemelere QR kod ve sosyal medya hesaplarınız ekleyin.",
            ],
          },
        ],
        cta: "Alanya'da dükkanınızı açmak üzeresiniz? Markanızı ilk günden profesyonel göstermek için hemen iletişime geçin. Tüm baskı ve matbaa ihtiyaçlarınız için ücretsiz danışmanlık alabilirsiniz. WhatsApp: +90 530 930 55 64",
      },
      en: {
        category: "Business Guide",
        title: "Print and Print Shop Guide for Shop Owners in Alanya: Start Your Brand Strong from Day One",
        excerpt:
          "What are the essential printing materials needed when opening a new shop? Business cards, menus, brochures, official documents and seal making. Kale Matbaa's shop opening guide.",
        metaTitle: "Shop Opening Printing Guide | Alanya Kale Matbaa",
        metaDescription:
          "Printing materials and print shop products needed when opening a shop in Alanya. Business cards, menus, brochures, offset printing, seal making and professional start.",
        intro: [
          "Opening a new shop in Alanya is exciting but also an intensive process. With location selection, decoration, stock and staff, the printed materials that will introduce your brand to customers are often postponed.",
          "However, professional printing and print shop products both meet your legal requirements and increase customer confidence. In this guide, you'll find the printing and print shop materials every business opening in Alanya needs, what to pay attention to, and practical information to make your work easier.",
        ],
        sections: [
          {
            heading: "1 | Essential Printing Materials When Opening a New Shop",
            bullets: [
              "Business cards: Still the most effective networking tool. Quality paper, matte/glossy options and professional design make your shop memorable.",
              "Menu, price list and catalog: Essential for restaurants, cafes, boutiques or service businesses. Water and stain-resistant laminated menus or digital printed catalogs are both elegant and practical.",
              "Brochures, flyers and posters: For opening campaign, discounts or new product introduction. Distributing flyers in tourist-heavy areas of Alanya is effective.",
              "Official documents and offset printing: Invoices, receipts, order forms, delivery notes. Offset printing produces high-volume, economical and professional-looking documents.",
              "Seal (stamp) making: Company seals, signature stamps, dated stamps and custom text stamps. These products required in official procedures are prepared with fast delivery and sharp print quality.",
            ],
          },
          {
            heading: "2 | From Design to Print: Step by Step Process",
            bullets: [
              "Define your brand identity: Prepare logo, color palette, typeface and corporate identity guidelines. Get professional consultation.",
              "Choose a designer: You can use freelancers, design agencies or the print shop's design service. Alanya Kale Matbaa offers free design support.",
              "File preparation: Print-ready PDF file, correct color profile (CMYK), bleed and safety margins are required.",
              "Sample approval: Check the sample before printing to ensure color and print quality.",
              "Delivery: Urgent jobs can be delivered within 24-48 hours.",
            ],
          },
          {
            heading: "3 | Practical Tips for Opening a Shop in Alanya",
            bullets: [
              "Quick start packages: Multiple products with discounts and all prepared together.",
              "Quality material investment: Cheap printing is expensive. Durable and professional-looking products increase customer trust.",
              "Inventory management: It's wise not to print too many copies and prefer regular updates.",
              "Multilingual materials: Considering Alanya's tourist population, English, Russian, German translations are valuable.",
              "Social media integration: Add QR codes and your social media accounts to printed materials.",
            ],
          },
        ],
        cta: "Are you opening a shop in Alanya? Contact us immediately to make your brand look professional from day one. Get free consultation for all your printing and print shop needs. WhatsApp: +90 530 930 55 64",
      },
      ru: {
        category: "Руководство по бизнесу",
        title: "Руководство по печати и типографии для владельцев магазинов в Алань: Начните свой бренд сильно с первог�� дня",
        excerpt:
          "Какие основные печатные материалы необходимы при открытии нового магазина? Визитные карточки, меню, брошюры, официальные документы и изготовление печатей.",
        metaTitle: "Руководство по печати при открытии магазина | Kale Matbaa",
        metaDescription:
          "Печатные материалы и услуги типогра��ии при откр��тии магазина в Алань. Визитные карточки, меню, брошюры, офсетная печать, изготовление печатей.",
        intro: [
          "Открыть новый магазин в Алань - это волнующе, но и интенсивный процесс. С выбором места, оформлением, запасами и персоналом печатные материалы, которые представят ваш бренд клиентам, часто отодвигаются на второй план.",
          "Однако профессиональная печать и услуги типографии не только выполняют ваши юридические требования, но и повышают доверие клиентов. В этом руководстве вы найдёте все материалы печати и услуги типографии, необходимые каждому бизнесу, открывающемуся в Алань, на что обратить внимание и практическую информацию для облегчения вашей работы.",
        ],
        sections: [
          {
            heading: "1 | Основные печатные материалы при открытии нового магазина",
            bullets: [
              "Визитные карточки: По-прежнему наиболее эффективный инструмент для контактов. Качественная бумага, матовые/глянцевые варианты и профессиональный дизайн делают ваш магазин запоминающимся.",
              "Меню, прайс-лист и каталог: Необходимы для ресторанов, кафе, бутиков или сервисных компаний. Устойчивые к влаге и пятнам ламинированные меню или цифровые каталоги одновременно элегантны и практичны.",
              "Брошюры, листовки и плакаты: Для кампании открытия, скидок или представления новых продуктов. Распространение листовок в многолюдных туристических местах Аланьи дает эффективные результаты.",
              "Официальные документы и офсетная печать: Счета-��актуры, расписки, заказные формы, накладные. Офсетная печать производит большой объём, экономичные и профессионально выглядящие документы.",
              "Изготовление печатей (штампов): Корпоративные печати, печати подписи, датированные печати и печати с пользовательским текстом. Эти требуемые в официальных процедурах изделия производятся с быстрой доставкой и четкой печатью.",
            ],
          },
          {
            heading: "2 | От проекта к печати: пошаговый процесс",
            bullets: [
              "Определите личность вашего бренда: Подготовьте логотип, цветовую палитру, шрифт и руководство по корпоративной идентичности. Получите профессиональную консультацию.",
              "Выбор дизайнера: Вы можете использовать фрилансеров, дизайн-агентства или услугу дизайна типографии. Alanya Kale Matbaa предлагает бесплатную поддержку дизайна.",
              "Подготовка файла: Требуется PDF-файл, готовый к печати, правильный цветовой профиль (CMYK), выпуск за обрез и безопасные поля.",
              "Одобрение образца: Проверьте образец перед печатью, чтобы обеспечить цвет и качество печати.",
              "Доставка: Срочные заказы можно доставить в течение 24-48 часов.",
            ],
          },
          {
            heading: "3 | Практические советы по открытию магазина в Алань",
            bullets: [
              "Пакеты быстрого старта: Несколько продуктов со скидками и все подготовлены вместе.",
              "Инвестиции в качество материалов: Дешёвая печать дорогой обходится. Долговечные и профессионально выглядящие изделия повышают доверие клиентов.",
              "Управление запасами: Разумно не печатать слишком много экземпляров и предпочитать регулярные обновления.",
              "Многоязычные материалы: Учитывая туристическое население Аланьи, переводы на английский, русский, немецкий язык ценны.",
              "Интеграция социальных сетей: Добавьте QR-коды и адреса ваших социальных сетей к печатным материалам.",
            ],
          },
        ],
        cta: "Вы открываете магазин в Алань? Свяжитесь с нами немедленно, чтобы ваш бренд выглядел профессионально с первого дня. Получите бесплатную консультацию по всем вашим потребностям печати. WhatsApp: +90 530 930 55 64",
      },
    },
  },
  {
    slug: "dijital-vs-ofset",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dijitalofset-1a4i8lEYMy62K7WVANy7gL6i9hpkCK.jpg",
    imageAlt: "Dijital baskı vs Ofset baskı karşılaştırması - tiraj, kalite ve teknoloji",
    date: "2025",
    content: {
      tr: {
        category: "Baskı Teknolojileri",
        title: "Dijital Baskı mı Ofset Baskı mı? Projeniz İçin Hangisi Doğru?",
        excerpt:
          "Kısa tirajlar için dijital baskı, uzun tirajlar için ofset baskı daha uygun. Nasıl çalışırlar, kalite farkları nelerdir ve hangisini seçmeniz gerektiğini öğrenin.",
        metaTitle: "Dijital vs Ofset Baskı | Alanya Kale Matbaa",
        metaDescription:
          "Dijital baskı ve ofset baskı arasındaki farklar. Kırılma noktası, kalite, tiraj, hız ve maliyet karşılaştırması. Alanya Kale Matbaa'nın rehberi.",
        intro: [
          "Baskı yaptırmak istediğinizde hangisini seçeceğinize karar vermek zor olabilir. Dijital baskı mı yoksa ofset baskı mı? Hangisi daha ucuz, daha hızlı, daha kaliteli?",
          "Cevap: İkisi de doğru, ancak farklı durumlar için. Tirajınız, bütçeniz, zaman sınırınız ve kalite beklentiniz hangisini seçeceğinizi belirler. Alanya Kale Matbaa'nın bu rehberinde tüm detayları bulacaksınız.",
        ],
        sections: [
          {
            heading: "1 | Hızlı Cevap: Kırılma Noktası",
            bullets: [
              "Dijital baskı kısa tirajlarda (500 adedin altı), değişken verili baskılarda ve hızlı teslimatta (24-48 saat) daha avantajlıdır.",
              "Ofset baskı uzun tirajlarda (1.000 adedin üzeri) üstün kalite ve daha iyi renk doğruluğu sunar.",
              "Kırılma noktası genellikle 500-1.000 adet arasındadır. 1.000 adetin altında dijital, üzerinde ofset tercih edilir.",
            ],
          },
          {
            heading: "2 | Dijital Baskı Nasıl Çalışır?",
            bullets: [
              "Kalıp olmadan dosyadan doğrudan kâğıya aktarım: Mürekkep püskürtmeli veya lazer teknolojisi kullanılır.",
              "Kurulum süresi neredeyse sıfırdır: Dosya yüklendikten sonra hemen basıma başlanabilir.",
              "600-1.200 DPI çözünürlük çoğu pazarlama materyali için yeterlidir: Kartvizit, flyer, broşür kaliteli çıkar.",
              "Kısa tiraj, kişiselleştirilmiş kartvizit, flyer ve broşürlerde idealdir: Değişken veri baskısında adlar, tarihler, kodlar farklı olabilir.",
              "Hızlı teslimat: 24-48 saat içinde hazır.",
            ],
          },
          {
            heading: "3 | Ofset Baskı Nasıl Çalışır?",
            bullets: [
              "Kalıptan lastik blanket'e, oradan kâğıya mürekkep aktarır: Litografi teknolojisine dayanır.",
              "Kurulum daha uzun sürer ancak yüksek tirajlarda üstün detay sağlar: İlk 100-200 adet kalite kontrol amacıyla yapılır.",
              "2.400-4.800 DPI ile katalog, kitapçık ve yüksek tirajlı işler için tercih edilir: Fotoğraf kalitesi çok yüksek.",
              "Maliyeti tirajla birlikte düşer: 1.000 adetin üzerinde dijitalden çok daha uygun olur.",
              "Yüksek tirajlarda renk tutarlılığı mükemmeldir.",
            ],
          },
          {
            heading: "4 | Kalite Farkları",
            bullets: [
              "Ofset baskıda nokta kazancı daha düşüktür: Renkler daha canlı ve uyumlu çıkar.",
              "Dijital baskı son yıllarda kalite olarak yaklaşmıştır: Ofset kadar canlı renk vermez, ancak çoğu proje için yeterlidir.",
              "Kısa tirajlarda dijital, uzun tirajlarda ofset daha uygundur: Kalite değil, maliyet-performans oranı belirleyici.",
              "Fotoğraf baskısında ofset tercih edilir: Ton geçişleri ve derinlik ofsetde daha iyi.",
            ],
          },
          {
            heading: "5 | Ne Zaman Dijital, Ne Zaman Ofset?",
            bullets: [
              "Dijital seçin: 500 adedin altı, hızlı teslimat gerekli (24-48 saat), kişiselleştirme (değişken veri), bütçe sınırlı, test baskısı yapıyorsanız",
              "Ofset seçin: 1.000 adedin üzeri, maksimum kalite gerekli, fotoğraf ve ton geçişleri önemli, uzun süre stoklayacaksanız, katalog veya dergi basıyorsanız",
              "Danışmanın baskısını takip et: Alanya Kale Matbaa olarak hem dijital hem ofset baskı imkânımız mevcut.",
            ],
          },
        ],
        cta: "Baskı projeleriniz için hangisini seçeceğinizden emin değil misiniz? Alanya Kale Matbaa ekibi olarak size yardımcı olmaktan memnuniyet duyarız. Dosyanızı gönderin, tirajınız ve bütçeniz doğrultusunda size en doğru yöntemi önerelim. Ücretsiz danışmanlık alabilirsiniz. WhatsApp: +90 530 930 55 64",
      },
      en: {
        category: "Printing Technologies",
        title: "Digital Print or Offset Print? Which Is Right for Your Project?",
        excerpt:
          "Digital printing is better for short runs, offset for long runs. Learn how they work, quality differences, and which to choose.",
        metaTitle: "Digital vs Offset Printing | Alanya Kale Matbaa",
        metaDescription:
          "Differences between digital and offset printing. Breakeven point, quality, volume, speed and cost comparison. Alanya Kale Matbaa guide.",
        intro: [
          "When you want to do printing, it can be difficult to decide which to choose. Digital printing or offset printing? Which is cheaper, faster, better quality?",
          "The answer is: both are right, but for different situations. Your volume, budget, time constraints and quality expectations determine which you choose. You'll find all the details in Kale Matbaa's guide.",
        ],
        sections: [
          {
            heading: "1 | Quick Answer: The Breakeven Point",
            bullets: [
              "Digital printing is more advantageous for short runs (under 500), variable data printing and fast delivery (24-48 hours).",
              "Offset printing offers superior quality and better color accuracy for long runs (over 1,000).",
              "The breakeven point is usually between 500-1,000 copies. Under 1,000 prefer digital, above prefer offset.",
            ],
          },
          {
            heading: "2 | How Digital Printing Works",
            bullets: [
              "Direct transfer from file to paper without plates: Uses inkjet or laser technology.",
              "Setup time is almost zero: Printing can start immediately after file upload.",
              "600-1,200 DPI resolution is sufficient for most marketing materials: Business cards, flyers, brochures print with good quality.",
              "Ideal for short runs, personalized business cards, flyers and brochures: Variable data printing allows different names, dates, codes.",
              "Fast delivery: Ready within 24-48 hours.",
            ],
          },
          {
            heading: "3 | How Offset Printing Works",
            bullets: [
              "Ink transfers from plate to rubber blanket, then to paper: Based on lithography technology.",
              "Setup takes longer but provides superior detail for high volumes: First 100-200 copies made for quality control.",
              "With 2,400-4,800 DPI for catalogs, booklets and high-volume jobs: Photo quality is very high.",
              "Cost decreases with volume: Much more economical than digital above 1,000 copies.",
              "Color consistency is perfect in high runs.",
            ],
          },
          {
            heading: "4 | Quality Differences",
            bullets: [
              "Offset printing has lower dot gain: Colors appear more vibrant and harmonious.",
              "Digital printing has approached offset in quality in recent years: Doesn't give colors as vibrant as offset, but sufficient for most projects.",
              "Digital is better for short runs, offset for long runs: Cost-performance ratio, not quality, is decisive.",
              "Offset is preferred for photo printing: Tone transitions and depth are better in offset.",
            ],
          },
          {
            heading: "5 | When Digital, When Offset?",
            bullets: [
              "Choose Digital: Under 500 copies, fast delivery required (24-48 hours), personalization (variable data), limited budget, test printing",
              "Choose Offset: Over 1,000 copies, maximum quality required, photos and tone transitions important, long-term storage, printing catalogs or magazines",
              "Follow the expert's recommendation: At Alanya Kale Matbaa, we have both digital and offset printing capabilities.",
            ],
          },
        ],
        cta: "Unsure which to choose for your printing projects? We at Alanya Kale Matbaa are happy to help. Send your file and we'll recommend the best method for your volume and budget. Get free consultation. WhatsApp: +90 530 930 55 64",
      },
      ru: {
        category: "Технологии печати",
        title: "Цифровая печать или офсетная печать? Что подходит для вашего проекта?",
        excerpt:
          "Цифровая печать лучше для коротких тиражей, офсет для больших. Узнайте, как они работают, различия в качестве и какую выбр��ть.",
        metaTitle: "Цифровая vs офсетная печать | Alanya Kale Matbaa",
        metaDescription:
          "Различия между цифровой и офсетной печатью. Точка безубыточности, качество, объём, скорость и сравнение стоимости.",
        intro: [
          "Когда вы хотите сделать печать, может быть сложно решить, какую выбрать. Цифровая печать или офсетная печать? Какая дешевле, быстрее, качественнее?",
          "Ответ: обе правильные, но для разных ситуаций. Ваш тираж, бюджет, ограничения по времени и ожидания по качеству определяют, какую вы выберете. Вы найдёте все детали в руководстве Kale Matbaa.",
        ],
        sections: [
          {
            heading: "1 | Быстрый ответ: Точка безубыточности",
            bullets: [
              "Цифровая печать более выгодна для коротких тиражей (менее 500), переменных данных и быстрой доставки (24-48 часов).",
              "Офсетная печать обеспечивает превосходное качество и лучшую цветопередачу для больших тиражей (более 1000).",
              "Точка безубыточности обычно составляет 500-1000 копий. Ниже 1000 предпочитайте цифровую, выше предпочитайте офсет.",
            ],
          },
          {
            heading: "2 | Как работает цифровая печать",
            bullets: [
              "Прямая передача с файла на бумагу без пластин: Использует технологию струйной или лазерной печати.",
              "Время установки почти равно нулю: Печать может начаться сразу после загрузки файла.",
              "Разрешение 600-1200 DPI достаточно для большинства маркетинговых материалов: Визитные карточки, листовки, брошюры печатаются хорошего качества.",
              "Идеально подходит для малых тиражей, персонализированных визитных карточек, листовок и брошюр: Переменная печать данных позволяет разные имена, даты, коды.",
              "Быстрая доставка: готово за 24-48 часов.",
            ],
          },
          {
            heading: "3 | Как работает офсетная печать",
            bullets: [
              "Краска передаётся с пластины на резиновое полотно, затем на бумагу: Основана на технологии литографии.",
              "Установка занимает больше времени, но обеспечивает превосходные детали для больших объёмов: Первые 100-200 к��пий сделаны для контроля качества.",
              "С разрешением 2400-4800 DPI для каталогов, буклетов и массовых работ: Качество фото очень высокое.",
              "Стоимость уменьшается с увеличением объёма: Гораздо более экономично, чем цифровая выше 1000 копий.",
              "Согласованность цвета в больших тиражах идеальна.",
            ],
          },
          {
            heading: "4 | Различия в качестве",
            bullets: [
              "Офсетная печать имеет меньший прирост точек: Цвета выглядят более яркими и гармоничными.",
              "Цифровая печать в последние годы приблизилась к офсету по качеству: Не даёт такие яркие цвета, как офсет, но достаточна для большинства проектов.",
              "Цифровая лучше для коротких тиражей, офсет для больших: Соотношение стоимость-производительность, а не качество, определяет выбор.",
              "Офсет предпочтителен для фотопечати: Переходы тонов и глубина лучше в офсете.",
            ],
          },
          {
            heading: "5 | Когда цифровая, когда офсет?",
            bullets: [
              "Выбирайте цифровую: Менее 500 копий, требуется быстрая доставка (24-48 часов), персонализация (переменные данные), ограниченный бюджет, пробная печать",
              "Выбирайте офсет: Более 1000 копий, требуется максимальное качество, фото и переходы тонов важны, долгосрочное хранение, печать каталогов или журналов",
              "Следуйте рекомендации эксперта: В Alanya Kale Matbaa у нас есть возможности как цифровой, так и офсетной печати.",
            ],
          },
        ],
        cta: "Не уверены в выборе для своих печатных проектов? Мы в Alanya Kale Matbaa рады помочь. Отправьте свой файл, и мы рекомендуем лучший способ для вашего объёма и бюджета. Получите бесплатную консультацию. WhatsApp: +90 530 930 55 64",
      },
    },
  },
  {
    slug: "anlamli-hediye-baski",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hediyekart%C4%B1-rza0dLUy5mVHcu3vlSh9JIBmba3RAg.jpeg",
    imageAlt: "Anlam yüklü hediye baskıları - kişisel fotoğraf kartı ve tasarım örnekleri",
    date: "2025",
    content: {
      tr: {
        category: "Hediye Baskıları",
        title: "Hediye Edilecek Anlam Yüklü Baskılar: Sevdiklerinize Kalıcı Bir Hatıra Bırakın",
        excerpt:
          "Günlük hediyeler unutulur, anlam yüklü baskılar ise yıllarca saklanır. Kişisel fotoğraf baskıları, söz posterləri, anı defterleri ve özel tasarım kartlarla sevdiklerinizi etkileyecek hediyeler.",
        metaTitle: "Anlam Yüklü Hediye Baskıları | Alanya Kale Matbaa",
        metaDescription:
          "Hediye için anlam yüklü baskılar: kişisel fotoğraf, söz posterləri, anı defterleri, doğum kartı, takvim. Alanya Kale Matbaa ile sevdiklerinize özel hediye.",
        intro: [
          "Günlük hediyeler unutulur, anlam yüklü baskılar ise yıllarca saklanır. Doğum günü, yıl dönümü, mezuniyet, yeni ev, bebek, emeklilik veya sadece 'seni düşünüyorum' demek istediğiniz anlarda; kişisel, duygusal ve dokunulabilir bir baskı, en samimi hediyelerden biridir.",
          "Alanya Kale Matbaa olarak 35+ yıllık tecrübemizle, sadece baskı değil, anlam taşıyan ürünler üretiyoruz. Konica Minolta AccurioPrint C4065 ile canlı renkler, çeşitli gramajda kartonlar, selefon uygulamaları ile hediyenizi anlamlı kılıyoruz.",
        ],
        sections: [
          {
            heading: "Neden Anlam Yüklü Baskı Hediye Etmelisiniz?",
            bullets: [
              "Kişisel ve unutulmaz – Hazır ürünlerden farklı olarak sizin seçtiğiniz fotoğraf, söz, tarih veya mesajla özel olur.",
              "Uzun ömürlü – Kaliteli kâğıt ve koruyucu uygulamalar sayesinde yıllarca duvarda, rafta veya çekmecede saklanır.",
              "Duygusal bağ kurar – 'Bunu senin için özel bastırdım' cümlesi, hediyenin değerini katlar.",
              "Her bütçeye ve her kişiye uyar – Tek parça özel baskıdan toplu hatıra setlerine kadar esneklik sunar.",
            ],
          },
          {
            heading: "Hediye İçin En Anlamlı Baskı Fikirleri",
            bullets: [
              "Kişiye Özel Fotoğraf Baskıları ve Posterler – En sevdiğiniz anı, büyük ebat poster veya premium fotoğraf baskısı olarak çerçevelemeye hazır hale getirin.",
              "Alıntı / Söz Posterleri ve Motto Baskıları – Sevdiğiniz bir söz, şiir dizesi veya aile mottosu şık tipografiyle bastırın.",
              "Anı Defteri, Günlük ve Not Defteri Kapakları – Kişiye özel kapak tasarımı + kalın kapak kartonu + isteğe bağlı iç sayfa baskısı.",
              "Yıl Dönümü ve Özel Gün Kartları / Davetiyeleri – Saklanacak hatıra kartı olarak tasarlanır, özel kesim ve kalın kartonla üretilir.",
              "Takvim ve Duvar Takvimleri – Kişisel fotoğraflarla veya anlamlı tarihlerle dolu 12 aylık takvim.",
              "Bebek / Çocuk Hatıra Setleri – Doğum kartı, ilk yıl fotoğraf serisi, isim baskılı poster veya anı kutusu etiketleri.",
              "Kurumsal Anlamlı Hediye Baskıları – Çalışanlara teşekkür kartı, motivasyon posteri veya şirket değerlerini taşıyan defter.",
            ],
          },
          {
            heading: "Sipariş Nasıl Verilir?",
            bullets: [
              "WhatsApp'tan fikirlerinizi, fotoğraflarınızı veya metninizi gönderin.",
              "Tasarımcılarımız kısa sürede mock-up hazırlar.",
              "Onayınızdan sonra baskıya geçer, kalite kontrolü yaparız.",
              "Teslim etmeye hazır hale getiririz.",
            ],
          },
          {
            heading: "Sıkça Sorulan Sorular",
            bullets: [
              "Tek parça özel baskı yaptırabilir miyim? – Evet. Anlam yüklü hediyelerde tek veya az adetli üretim çok yaygındır.",
              "Tasarımım yoksa sıfırdan hazırlıyor musunuz? – Evet, sıfırdan tasarlarız. Canva veya başka programda yaptığınız dosyayı da profesyonel baskıya uygun hale getiririz.",
              "Ne kadar sürede teslim alırım? – Basit işlerde aynı gün teslim ediyoruz. Acil ihtiyaçlarınızı belirtmeniz yeterli.",
            ],
          },
        ],
        cta: "Sevdiklerinize sıradan bir hediye yerine, her baktıklarında sizi hatırlatacak anlamlı bir baskı hediye edin. Fikirlerinizi paylaşın, sizin için en özel tasarımı ve baskıyı birlikte hazırlayalım. WhatsApp: +90 530 930 55 64",
      },
      en: {
        category: "Gift Prints",
        title: "Meaningful Printed Gifts: Leave Your Loved Ones With A Lasting Memory",
        excerpt:
          "Everyday gifts are forgotten, but meaningful prints are treasured for years. Personal photos, quote posters, memory books and custom cards that will impress your loved ones.",
        metaTitle: "Meaningful Gift Prints | Alanya Kale Matbaa",
        metaDescription:
          "Meaningful gift prints: personal photos, quote posters, memory books, birth cards, calendars. Give special gifts to your loved ones with Alanya Kale Matbaa.",
        intro: [
          "Everyday gifts are forgotten, but meaningful prints are treasured for years. For birthdays, anniversaries, graduations, new homes, babies, retirement or simply to say 'I'm thinking of you'; a personal, emotional and tangible printed piece is one of the most sincere gifts.",
          "With our 35+ years of experience at Alanya Kale Matbaa, we produce not just prints, but products that carry meaning. With Konica Minolta AccurioPrint C4065 vibrant colors, various weights of cardstock and lamination applications, we make your gift meaningful.",
        ],
        sections: [
          {
            heading: "Why Give Meaningful Printed Gifts?",
            bullets: [
              "Personal and unforgettable – Unlike ready-made products, it becomes special with your chosen photo, quote, date or message.",
              "Long-lasting – Thanks to quality paper and protective applications, it's kept for years on walls, shelves or drawers.",
              "Creates emotional connection – The phrase 'I had this specially printed for you' adds value to the gift.",
              "Fits every budget and every person – From single special prints to bulk memory sets, offering flexibility.",
            ],
          },
          {
            heading: "Most Meaningful Print Gift Ideas",
            bullets: [
              "Personal Photo Prints and Posters – Turn your favorite moment into a large poster or premium print ready for framing.",
              "Quote / Motto Posters – Print your favorite quote, poem line or family motto in elegant typography.",
              "Memory Books, Journals and Notebook Covers – Custom cover design + thick cardstock + optional interior page printing.",
              "Anniversary and Special Day Cards / Invitations – Designed as keepsakes, produced with special cuts and thick cardstock.",
              "Calendars and Wall Calendars – 12-month calendar filled with personal photos or meaningful dates.",
              "Baby / Children Memory Sets – Birth cards, first year photo series, name posters or memory box labels.",
              "Corporate Meaningful Gift Prints – Thank you cards for employees, motivational posters or company value notebooks.",
            ],
          },
          {
            heading: "How to Order",
            bullets: [
              "Send your ideas, photos or text via WhatsApp.",
              "Our designers prepare a mock-up quickly.",
              "After your approval, we proceed to printing and quality control.",
              "We prepare it for delivery.",
            ],
          },
          {
            heading: "Frequently Asked Questions",
            bullets: [
              "Can I get a single custom print? – Yes. Single or small-quantity production is very common for meaningful gifts.",
              "Do you design from scratch if I don't have a design? – Yes, we design from scratch. We also adapt files you've created in Canva or other programs for professional printing.",
              "How long does delivery take? – Same-day delivery for simple jobs. Just mention your urgent needs.",
            ],
          },
        ],
        cta: "Give your loved ones a meaningful print gift that will remind them of you every time they see it, instead of an ordinary gift. Share your ideas and let's create the perfect design and print together for you. WhatsApp: +90 530 930 55 64",
      },
      ru: {
        category: "Подарочные печати",
        title: "Значимые печатные подарки: Ост��вьте своим любимым неизгладимое впечатление",
        excerpt:
          "Обычные подарки забываются, но значимые печати хранятся годами. Личные фото, постеры с цитатами, книги памяти и индивидуальные открытки.",
        metaTitle: "Значимые подарочные печати | Alanya Kale Matbaa",
        metaDescription:
          "Значимые подарочные печати: личные фото, постеры с цитатами, книги памяти, открытки рождения, календари. Подарите особенные подарки с Alanya Kale Matbaa.",
        intro: [
          "Обычные подарки забываются, но значимые печати хранятся годами. На дни рождения, юбилеи, выпускные, новые дома, рождение, пенсию или просто чтобы сказать 'я о тебе думаю'; личный, эмоциональный и осязаемый печатный материал - один из самых искренних подарков.",
          "С нашим 35-летним ��пытом в Alanya Kale Matbaa мы производим не просто печать, но изделия, несущие смысл. С помощью Konica Minolta AccurioPrint C4065 яркие цвета, различные веса картона и ламинация делают ваш подарок значимым.",
        ],
        sections: [
          {
            heading: "Почему дарить значимые печатные подарки?",
            bullets: [
              "Личное и незабываемое – В отличие от готовых товаров, оно становится особенным с вашим выбранным фото, цитатой, датой или сообщением.",
              "Долговечное – Благодаря качественной бумаге и защитным покрытиям хранится годами на стене, полке или в ящике.",
              "Создаёт эмоциональную связь – Фраза 'я специально это для тебя напечатал' добавляет ценность подарку.",
              "Подходит для любого бюджета и человека – От единичного специального издания до массовых наборов памяти, предлагая гибкость.",
            ],
          },
          {
            heading: "Самые значимые идеи подарочных печатей",
            bullets: [
              "Персональные фотопечати и постеры – Превратите ваш любимый момент в большой постер или премиум-печать, готовую для обрамления.",
              "Постеры с цитатами / девизы – Напечатайте вашу любимую цитату, строку стиха или семейный девиз элегантной типографикой.",
              "Книги памяти, дневники и обложки для записных книжек – Дизайн обложки на заказ + плотный картон + дополнительная печать на внутренних страницах.",
              "Открытки годовщины и особых дней / приглашения – Разработано как сувенир, производится со специальной вырезкой и толстым картоном.",
              "Календари и настенные календари – 12-месячный календарь, наполненный личными фото или значим��ми датами.",
              "Наборы памяти для младенцев / детей – Открытки рождения, фотосерии первого года, постеры имен или этикетки коробок памяти.",
              "Корпоративные значимые подарочные печати – Открытки благодарности для сотрудников, мотивационные постеры или записные книжки ценностей компании.",
            ],
          },
          {
            heading: "Как заказать",
            bullets: [
              "Отправьте свои идеи, фото или текст через WhatsApp.",
              "Наши дизайнеры быстро подготавливают макет.",
              "После вашего одобрения переходим к печати и контролю качества.",
              "Подготавливаем для доставки.",
            ],
          },
          {
            heading: "Часто задаваемые вопросы",
            bullets: [
              "Могу ли я получить одну индивидуальную печать? – Да. Производство в единичном или малом количестве очень распространено для значимых подарков.",
              "Вы проектируете с нуля, если у меня нет дизайна? – Да, мы проектируем с нуля. Мы также адаптируем файлы, которые вы создали в Canva или других программах для профессиональной печати.",
              "Как долго осуществляется доставка? – Доставка в тот же день для простых работ. Просто упомяните ваши срочные потребности.",
            ],
          },
        ],
        cta: "Подарите своим любимым значимый печатный подарок, который будет напоминать им о вас каждый раз, когда они его видят, вместо обычного подарка. Поделитесь своими идеями и давайте вместе создадим идеальный дизайн и печать для вас. WhatsApp: +90 530 930 55 64",
      },
    },
  },
  {
    slug: "kartvizit-hizmet",
    image: "/images/business-cards.png",
    imageAlt: "Profesyonel kartvizit tasarım ve baskısı",
    date: "2025",
    content: {
      tr: {
        category: "Kartvizit",
        title: "Profesyonel Kartvizit Tasarım ve Baskısı",
        excerpt: "Profesyonel kartvizit tasarım ve baskı hizmetimizle işinizi en iyi şekilde temsil edin.",
        metaTitle: "Profesyonel Kartvizit Tasarım ve Baskısı",
        metaDescription: "Profesyonel kartvizit tasarım ve baskısı hizmetleri. Dijital ve ofset baskı seçenekleriyle yüksek kaliteli kartvizitler.",
        intro: [
          "Profesyonel kartvizit tasarım ve baskı hizmetimizle işinizi en iyi şekilde temsil edin. Alanya'da dijital ve ofset baskı seçenekleriyle yüksek kaliteli, keskin ve dayanıklı kartvizitler üretiyoruz."
        ],
        sections: [
          {
            heading: "Hizmetlerimiz",
            bullets: [
              "Aynı gün teslim imkânı sayesinde acil ihtiyaçlarınızı karşılıyoruz",
              "Kurumsal kimliğinize uygun özel tasarımlar",
              "Mat veya parlak kuşe kâğıt seçenekleri",
              "UV lak ve kabartma gibi ekstra uygulamalar",
              "Az adetten yüksek adete kadar her ihtiyaca uygun çözümler"
            ]
          }
        ],
        cta: "Kartvizitinizi unutulmaz kılmak için bize ulaşın."
      },
      en: {
        category: "Business Cards",
        title: "Professional Business Card Design and Printing",
        excerpt: "Professional business card design and printing services to represent your business best.",
        metaTitle: "Professional Business Card Design and Printing",
        metaDescription: "Professional business card design and printing services with digital and offset printing options.",
        intro: [
          "Professional business card design and printing services to represent your business best. We produce high-quality, sharp and durable business cards with digital and offset printing options in Alanya."
        ],
        sections: [
          {
            heading: "Our Services",
            bullets: [
              "Same-day delivery option for urgent needs",
              "Custom designs tailored to your corporate identity",
              "Matte or glossy coated paper options",
              "Extra applications like UV varnish and embossing",
              "Solutions for any quantity from small to large orders"
            ]
          }
        ],
        cta: "Contact us to make your business cards unforgettable."
      },
      ru: {
        category: "Визитные карточки",
        title: "Профессиональный дизайн и печать визиток",
        excerpt: "Профессиональный дизайн и печать визиток для представления вашего бизнеса.",
        metaTitle: "Профессиональный дизайн и печать визиток",
        metaDescription: "Услуги профессионального дизайна и печати визиток с цифровой и офсетной печатью.",
        intro: [
          "Профессиональный дизайн и печать визиток для представления вашего бизнеса. Мы производим высококачественные, чёткие и долговечные визитки с цифровой и офсетной печатью в Аланье."
        ],
        sections: [
          {
            heading: "Наши услуги",
            bullets: [
              "Возможность доставки в тот же день для срочных заказов",
              "Дизайн, адаптированный к вашему корпоративному стилю",
              "Матовая и глянцевая мелованная бумага",
              "Дополнительные услуги: УФ-лак и т��снение",
              "Решения для любого количества от малых до крупных заказов"
            ]
          }
        ],
        cta: "Свяжитесь с нами, чтобы сделать ваши визитки незабываемыми."
      }
    }
  },
  {
    slug: "brosur-hizmet",
    image: "/images/brochures.png",
    imageAlt: "Etkili broşür tasarımı ve baskısı",
    date: "2025",
    content: {
      tr: {
        category: "Broşür",
        title: "Etkili Broşür Tasarımı ve Baskısı",
        excerpt: "Etkili broşür tasarımı ve baskısı ile ürün veya hizmetlerinizi profesyonelce tanıtın.",
        metaTitle: "Etkili Broşür Tasarımı ve Baskısı",
        metaDescription: "Broşür tasarımı ve baskı hizmetleri. Tek kırımlı, üç kırımlı ve çok sayfalı broşürler.",
        intro: [
          "Etkili broşür tasarımı ve baskısı ile ürün veya hizmetlerinizi profesyonelce tanıtın. Tek kırımlı, üç kırımlı ve çok sayfalı broşür seçenekleriyle her bütçeye ve amaca uygun çözümler üretiyoruz."
        ],
        sections: [
          {
            heading: "Hizmetlerimiz",
            bullets: [
              "Canlı renkler, net görseller ve dikkat çekici metinlerle mesajınızı güçlü şekilde iletiriz",
              "Yüksek kaliteli kuşe kâğıt",
              "Ofset/dijital baskı alternatifleri",
              "Küçük tirajlardan büyük tirajlara mükemmel sonuç",
              "Profesyonel tasarım desteği"
            ]
          }
        ],
        cta: "Broşürünüzle müşterilerinizi etkilemek için bize ulaşın."
      },
      en: {
        category: "Brochure",
        title: "Effective Brochure Design and Printing",
        excerpt: "Effective brochure design and printing to professionally promote your products or services.",
        metaTitle: "Effective Brochure Design and Printing",
        metaDescription: "Brochure design and printing services. Single-fold, tri-fold and multi-page brochure options.",
        intro: [
          "Effective brochure design and printing to professionally promote your products or services. We produce solutions tailored to every budget and purpose with single-fold, tri-fold and multi-page brochure options."
        ],
        sections: [
          {
            heading: "Our Services",
            bullets: [
              "Vivid colors, sharp images and compelling text to deliver your message powerfully",
              "High-quality coated paper",
              "Offset/digital printing alternatives",
              "Perfect results from small to large print runs",
              "Professional design support"
            ]
          }
        ],
        cta: "Contact us to impress your customers with your brochure."
      },
      ru: {
        category: "Брошюра",
        title: "Эффективный дизайн и печать брошюр",
        excerpt: "Эффективный дизайн и печать брошюр для профессионального продвижения ваших товаров.",
        metaTitle: "Эффективный дизайн и печать брошюр",
        metaDescription: "Услуги дизайна и печати брошюр. Варианты с одним сгибом, тройным сгибом и многостраничные брошюры.",
        intro: [
          "Эффективный дизайн и печать брошюр для профессионального продвижения ваших товаров или услуг. Мы производим решения, адаптированные к любому бюджету и целям, с вариантами однусторонних, трёхкратных и многостраничных брошюр."
        ],
        sections: [
          {
            heading: "Наши услуги",
            bullets: [
              "Яркие цвета, чёткие изображения и убедительный текст",
              "Высокое качество мелованной бумаги",
              "Цифровая и офсетная печать",
              "Идеальные результаты от малых до крупных тиражей",
              "Профессиональная поддержка по дизайну"
            ]
          }
        ],
        cta: "Свяжитесь с нами, чтобы впечатлить своих клиентов брошюрой."
      }
    }
  },
  {
    slug: "menus-hizmet",
    image: "/images/amerikan-servis.png",
    imageAlt: "Restaurant menü tasarımı ve baskısı",
    date: "2025",
    content: {
      tr: {
        category: "Menü",
        title: "Restaurant Menü Tasarımı ve Baskısı",
        excerpt: "Profesyonel menü tasarımı ve baskısı hizmetimizle restoranınızı öne çıkarın.",
        metaTitle: "Restaurant Menü Tasarımı ve Baskısı",
        metaDescription: "Menü baskı hizmetleri. Laminatlı, ciltli, spiral ve standart menü seçenekleri.",
        intro: ["Restaurant menü tasarımı ve baskısı hizmetimizle restoranınızı öne çıkarın. Laminatlı, ciltli, spiral ve standart menü seçenekleriyle profesyonel çözümler sunuyoruz."],
        sections: [{heading: "Hizmetlerimiz", bullets: ["Özel tasarım", "Markanıza uygun renkler", "Uzun ömürlü malzeme", "Hızlı üretim", "Restoranınızın imajını güçlendirin"]}],
        cta: "Menünüzü profesyonelleştirmek için bize ulaşın."
      },
      en: {
        category: "Menu",
        title: "Restaurant Menu Design and Printing",
        excerpt: "Professional menu design and printing to enhance your restaurant.",
        metaTitle: "Restaurant Menu Design and Printing",
        metaDescription: "Menu printing services. Laminated, bound, spiral and standard menu options.",
        intro: ["Professional menu design and printing to enhance your restaurant. We offer professional solutions with laminated, bound, spiral and standard menu options."],
        sections: [{heading: "Our Services", bullets: ["Custom design", "Colors matching your brand", "Durable material", "Fast production", "Enhance your restaurant's image"]}],
        cta: "Contact us to make your menu professional."
      },
      ru: {
        category: "Меню",
        title: "Дизайн и печать меню ресторана",
        excerpt: "Профессиональный дизайн и печать меню для вашего ресторана.",
        metaTitle: "Дизайн и печать меню ресторана",
        metaDescription: "Услуги печати меню. Ламинированные, переплётные, спиральные и стандартные варианты.",
        intro: ["Профессиональный дизайн и печать меню для вашего ресторана. Мы предлагаем профессиональные решения с ламинированными, переплётными, спиральными и стандартными вариантами меню."],
        sections: [{heading: "Наши услуги", bullets: ["Дизайн", "Цвета по вашему бренду", "Прочный материал", "Быстрое производство", "Улучшьте имидж вашего ресторана"]}],
        cta: "Свяжитесь с нами для профессионального меню."
      }
    }
  },
  {
    slug: "dijital-baski-hizmet",
    image: "/images/digital-press.png",
    imageAlt: "Hızlı dijital baskı çözümleri",
    date: "2025",
    content: {
      tr: {
        category: "Dijital Baskı",
        title: "Hızlı Dijital Baskı Çözümleri",
        excerpt: "Hızlı dijital baskı çözümlerimizle az adetten yüksek adete kadar her ihtiyacınızı karşılıyoruz.",
        metaTitle: "Hızlı Dijital Baskı Çözümleri",
        metaDescription: "Dijital baskı hizmetleri. Renkli ve siyah-beyaz baskı.",
        intro: ["Hızlı dijital baskı çözümlerimizle az adetten yüksek adete kadar her ihtiyacınızı karşılıyoruz. Renkli ve siyah-beyaz baskı seçenekleriyle kısa sürede teslim ediyoruz."],
        sections: [{heading: "Hizmetlerimiz", bullets: ["Kaliteli sonuç", "Uygun maliyet", "Esnek üretim", "Pratik çözümler", "Acil işlerinizde güvenilir adres"]}],
        cta: "Acil baskı işleriniz için bize ulaşın."
      },
      en: {
        category: "Digital Printing",
        title: "Fast Digital Printing Solutions",
        excerpt: "Fast digital printing solutions for all your printing needs.",
        metaTitle: "Fast Digital Printing Solutions",
        metaDescription: "Digital printing services. Color and black & white printing.",
        intro: ["Fast digital printing solutions for all your printing needs from small to large quantities. We deliver with color and black & white printing options."],
        sections: [{heading: "Our Services", bullets: ["Quality results", "Affordable costs", "Flexible production", "Practical solutions", "Reliable for urgent jobs"]}],
        cta: "Contact us for your urgent printing needs."
      },
      ru: {
        category: "Цифровая печать",
        title: "Быстрые решения цифровой печати",
        excerpt: "Быстрые решения цифровой печати для всех ваших потребностей.",
        metaTitle: "Быстрые решения цифровой печати",
        metaDescription: "Услуги цифровой печати. Цветная и чёрно-белая печать.",
        intro: ["Быстрые решения цифровой печати для всех ваших потребностей от малых до крупных объёмов. Мы доставляем с цветной и чёрно-белой печатью."],
        sections: [{heading: "Наши услуги", bullets: ["Качественные результаты", "Доступная стоимость", "Гибкое производство", "Практические решения", "Надежно для срочных работ"]}],
        cta: "Свяжитесь с нами для ваших срочных потребностей."
      }
    }
  },
  {
    slug: "ofset-baski-hizmet",
    image: "/images/offset.png",
    imageAlt: "Yüksek adetli ofset baskı",
    date: "2025",
    content: {
      tr: {
        category: "Ofset Baskı",
        title: "Yüksek Adetler İçin Ekonomik Ofset Baskı",
        excerpt: "Yüksek adetli işlerinizde ekonomik ofset baskı hizmeti sunuyoruz.",
        metaTitle: "Yüksek Adetler İçin Ekonomik Ofset Baskı",
        metaDescription: "Ofset baskı hizmetleri. 500 adetten itibaren maliyet avantajı.",
        intro: ["Yüksek adetli işlerinizde ekonomik ofset baskı hizmeti sunuyoruz. 500 adetten itibaren maliyet avantajı sağlayan ofset baskı."],
        sections: [{heading: "Hizmetlerimiz", bullets: ["Broşür, katalog, afiş", "Üstün kalite", "Profesyonel ekipmanlar", "Tecrübeli ekip", "Büyük tirajlarda garantili"]}],
        cta: "Ofset baskı siparişleriniz için bize ulaşın."
      },
      en: {
        category: "Offset Printing",
        title: "Economical Offset Printing for High Quantities",
        excerpt: "Economical offset printing service for your high-volume jobs.",
        metaTitle: "Economical Offset Printing for High Quantities",
        metaDescription: "Offset printing services. Cost advantages from 500 copies.",
        intro: ["Economical offset printing service for your high-volume jobs. With offset printing starting from 500 copies."],
        sections: [{heading: "Our Services", bullets: ["Brochures, catalogs, posters", "Superior quality", "Professional equipment", "Experienced team", "Guaranteed for large runs"]}],
        cta: "Contact us for your offset printing orders."
      },
      ru: {
        category: "Офсетная печать",
        title: "Экономичная офсетная печать для больших объёмов",
        excerpt: "Экономичная офсетная печать для ваших крупных заказов.",
        metaTitle: "Экономичная офсетная печать для больших объёмов",
        metaDescription: "Услуги офсетной печати. Экономия от 500 копий.",
        intro: ["Экономичная офсетная печать для ваших крупных заказов. Офсетная печать начиная с 500 копий."],
        sections: [{heading: "Наши услуги", bullets: ["Брошюры, каталоги, плакаты", "Отличное качество", "Профессиональное оборудование", "Опытная команда", "Гарантировано для больших тиражей"]}],
        cta: "Свяжитесь с нами для ваших заказов офсетной печати."
      }
    }
  },
  {
    slug: "etiket-hizmet",
    image: "/images/etiket.png",
    imageAlt: "Ürün etiketleri ve paket tasarımı",
    date: "2025",
    content: {
      tr: {
        category: "Etiket",
        title: "Ürün Etiketleri ve Paket Tasarımı",
        excerpt: "Ürün etiketleri ve paket tasarımı hizmetimizle markanızı öne çıkarın.",
        metaTitle: "Ürün Etiketleri ve Paket Tasarımı",
        metaDescription: "Etiket baskı hizmetleri. Barkodlu, kendinden yapışkanlı etiketler.",
        intro: ["Ürün etiketleri ve paket tasarımı hizmetimizle markanızı öne çıkarın. Barkodlu, kendinden yapışkanlı etiketler üretiyoruz."],
        sections: [{heading: "Hizmetlerimiz", bullets: ["Su geçirmez malzemeler", "Yüksek kaliteli", "Özel boyut ve şekil", "Profesyonel görünüm", "Hızlı ve ekonomik"]}],
        cta: "Etiket siparişleriniz için bize ulaşın."
      },
      en: {
        category: "Labels",
        title: "Product Labels and Package Design",
        excerpt: "Stand out with our product label and package design services.",
        metaTitle: "Product Labels and Package Design",
        metaDescription: "Label printing services. Barcode and self-adhesive labels.",
        intro: ["Stand out with our product label and package design services. We produce barcode and self-adhesive labels."],
        sections: [{heading: "Our Services", bullets: ["Waterproof materials", "High-quality", "Custom size and shape", "Professional look", "Fast and economical"]}],
        cta: "Contact us for your label orders."
      },
      ru: {
        category: "Этикетки",
        title: "Этикетки и дизайн упаковки продукта",
        excerpt: "Выделитесь с помощью наших услуг по дизайну этикеток.",
        metaTitle: "Этикетки и дизайн упаковки продукта",
        metaDescription: "Услуги печати этикеток. Этикетки с штрих-кодом и самоклеящиеся.",
        intro: ["Выделитесь с помощью наших услуг по дизайну этикеток. Мы производим этикетки с штрих-кодом и самоклеящиеся этикетки."],
        sections: [{heading: "Наши услуги", bullets: ["Водонепроницаемые материалы", "Высокое качество", "Индивидуальный размер и форма", "Профессиональный вид", "Быстро и экономично"]}],
        cta: "Свяжитесь с нами для ваших заказов этикеток."
      }
    }
  },
  {
    slug: "afis-hizmet",
    image: "/images/afis.png",
    imageAlt: "Etkinlik ve reklam afiş tasarımı",
    date: "2025",
    content: {
      tr: {
        category: "Afiş",
        title: "Etkinlik ve Reklam Afiş Tasarımı",
        excerpt: "Etkinlik ve reklam afiş tasarımı ile mesajınızı geniş kitlelere ulaştırın.",
        metaTitle: "Etkinlik ve Reklam Afiş Tasarımı",
        metaDescription: "Afiş baskı hizmetleri. A3, A2, A1 ve özel boyutlarda afiş.",
        intro: ["Etkinlik ve reklam afiş tasarımı ile mesajınızı geniş kitlelere ulaştırın. A3, A2, A1 boyutlarda afişler basıyoruz."],
        sections: [{heading: "Hizmetlerimiz", bullets: ["Canlı renkler", "Yüksek çözünürlük", "Dayanıklı malzeme", "İç ve dış mekan", "Hızlı üretim"]}],
        cta: "Afiş siparişleriniz için bize ulaşın."
      },
      en: {
        category: "Poster",
        title: "Event and Advertisement Poster Design",
        excerpt: "Reach a wide audience with our event and advertisement poster design.",
        metaTitle: "Event and Advertisement Poster Design",
        metaDescription: "Poster printing services. Posters in A3, A2, A1 sizes.",
        intro: ["Reach a wide audience with our event and advertisement poster design. We print posters in A3, A2, A1 sizes."],
        sections: [{heading: "Our Services", bullets: ["Vivid colors", "High resolution", "Durable materials", "Indoor and outdoor", "Fast production"]}],
        cta: "Contact us for your poster orders."
      },
      ru: {
        category: "Плакат",
        title: "Дизайн плакатов для событий и реклам",
        excerpt: "Достигайте широкой аудитории с помощью нашего дизайна плакатов.",
        metaTitle: "Дизайн плакатов для событий и реклам",
        metaDescription: "Услуги печати плакатов. Плакаты A3, A2, A1 размеров.",
        intro: ["Достигайте широкой аудитории с помощью нашего дизайна плакатов. Мы печатаем плакаты A3, A2, A1 размеров."],
        sections: [{heading: "Наши услуги", bullets: ["Яркие цвета", "Высокое разрешение", "Прочные материалы", "Внутри и снаружи", "Быстрое производство"]}],
        cta: "Свяжитесь с нами для ваших заказов плакатов."
      }
    }
  },
  {
    slug: "el-ilani-hizmet",
    image: "/images/flyers.png",
    imageAlt: "El İlanı и gözat tasarım baskısı",
    date: "2025",
    content: {
      tr: {
        category: "El İlanı",
        title: "El İlanı ve Gözat Tasarım Baskısı",
        excerpt: "El ilanı tasarım baskısı hizmetimizle promosyon ve duyuruları etkili şekilde iletiyoruz.",
        metaTitle: "El İlanı ve Gözat Tasarım Baskısı",
        metaDescription: "El ilanı baskı hizmetleri. A5, A6, A4 boyutlarda el ilanları.",
        intro: ["El ilanı tasarım baskısı hizmetimizle promosyon ve duyuruları etkili şekilde iletiyoruz. A5, A6, A4 boyutlarda hızlı çözümler sunuyoruz."],
        sections: [{heading: "Hizmetlerimiz", bullets: ["Renkli baskı", "Kaliteli kâğıt", "Profesyonel tasarım", "Az ve çok adet", "Hızlı teslimat"]}],
        cta: "El ilanı siparişleriniz için bize ulaşın."
      },
      en: {
        category: "Flyer",
        title: "Flyer and Leaflet Design Printing",
        excerpt: "Communicate promotions and announcements effectively with our flyer design printing.",
        metaTitle: "Flyer and Leaflet Design Printing",
        metaDescription: "Flyer printing services. Flyers in A5, A6, A4 sizes.",
        intro: ["Communicate promotions and announcements effectively with our flyer design printing. We offer fast solutions in A5, A6, A4 sizes."],
        sections: [{heading: "Our Services", bullets: ["Color printing", "Quality paper", "Professional design", "Small and large quantities", "Fast delivery"]}],
        cta: "Contact us for your flyer orders."
      },
      ru: {
        category: "Листовка",
        title: "Дизайн и печать листовок и буклетов",
        excerpt: "Эффективно коммуницируйте с помощью нашей печати листовок.",
        metaTitle: "Дизайн и печать листовок и буклетов",
        metaDescription: "Услуги печати листовок. Листовки A5, A6, A4 размеров.",
        intro: ["Эффективно коммуницируйте с помощью нашей печати листовок. Мы предлагаем быстрые решения A5, A6, A4 размеров."],
        sections: [{heading: "Наши услуги", bullets: ["Цветная печать", "Качественная бумага", "Профессиональный дизайн", "Малые и крупные объёмы", "Быстрая доставка"]}],
        cta: "Свяжитесь с нами для ваш��х заказов листовок."
      }
    }
  },
]

export function getPost(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug)
}
