import type { Lang } from "@/lib/i18n"

export type BlogSlug = "kase" | "brosur" | "davetiye" | "kartvizit" | "acil-kase"

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
          "Одним из самых практичных инструментов для быстрого подписания и заверения документов и отражения вашего корпоративного стиля является печать. В Alanya Kale Matbaa мы предлагаем качественные материалы и чёткое качество оттиска как для автоматических, так и для классических печатей.",
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
              "Индивидуальное изготовление для юристов, врачей, нотариусов, бухгалтерий и любого бизнеса",
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
              "2. Tasarımcılarımız 30 dakika içinde mock-up (görüntü) hazırlar.",
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
        metaTitle: "Срочная печать Алань | Доставка в тот же час - Kale Matbaa",
        metaDescription:
          "Срочная печать в Аланье: дизайн 1 час, печать 2-3 часа. Şekerhane, Mahmutlar, Oba, Konaklı. Заказы через WhatsApp.",
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
              "В: У нас нет дизайна, можете создать с нуля? О: Да. Скажите имя, должность, адрес. Макет за 30-45 минут.",
              "В: Автоматическую или классическую печать выбрать? О: Для срочных - обычно автоматическую (прочнее). Классическую тоже делаем.",
            ],
          },
        ],
        cta: "Нужна срочная печать? Свяжитесь с нами ПРЯМО СЕЙЧАС на WhatsApp: +90 530 930 55 64. Гарантия '1 час дизайн, 3 часа доставка'!",
      },
    },
  },
]

export function getPost(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug)
}
