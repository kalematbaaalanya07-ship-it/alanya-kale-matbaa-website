import type { Lang } from "@/lib/i18n"

export type BlogSlug = "kase" | "brosur" | "davetiye" | "kartvizit"

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
        title: "Alanya Kale Matbaa | Kaliteli Kaşe Üretimi ve Baskı",
        excerpt:
          "Otomatik ve klasik kaşe üretiminde kaliteli malzeme ve net baskı. Logolu, adresli ve özel tasarımlı kaşeler Alanya'da aynı gün teslim.",
        metaTitle: "Alanya Kaşe Üretimi | Otomatik & Klasik Kaşe - Kale Matbaa",
        metaDescription:
          "Alanya'da kaliteli kaşe üretimi: otomatik ve klasik kaşe, logolu ve özel tasarım. Net baskı, dayanıklı malzeme, aynı gün teslim seçeneği.",
        intro: [
          "İş hayatında belgeleri hızlıca imzalamak, onaylamak ve kurumsal kimliğinizi yansıtmak için en pratik araçlardan biri kaşedir. Alanya Kale Matbaa olarak otomatik ve klasik kaşe üretiminde kaliteli malzeme ve net baskı kalitesi sunuyoruz.",
          "Otomatik kaşelerimizle tek hareketle temiz ve net izler bırakabilirsiniz. Klasik kaşelerimizde ise geleneksel kullanımın güvenilirliğini yaşıyorsunuz. Her iki tipte de logolu, adresli, unvanlı ve özel tasarımlı kaşe seçeneklerimiz mevcut.",
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
            ],
          },
          {
            heading: "Neden Kaşe Önemlidir?",
            paragraphs: [
              "Kaşe, sadece bir onay aracı değil, aynı zamanda markanızın resmi yüzüdür. Temiz ve profesyonel bir izlenim bırakan kaşeler, belgelerinizde de kaliteyi yansıtır.",
            ],
          },
        ],
        cta: "Alanya'da en iyi kaşe fiyatları ve kalitesi için bize ulaşın. Tasarım fikirlerinizi paylaşın, size özel kaşelerinizi kısa sürede üretelim.",
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
        title: "Alanya'da Kaliteli Broşür Baskı | Kale Matbaa Broşür Üretimi",
        excerpt:
          "Dijital ve ofset broşür üretiminde canlı renkler ve 350 grama kadar kalın kağıt. Katlamalı ve düz broşür seçenekleriyle profesyonel baskı.",
        metaTitle: "Alanya Broşür Baskı | Katlamalı & Düz Broşür - Kale Matbaa",
        metaDescription:
          "Alanya'da broşür baskı: dijital ve ofset, canlı renkler, 350g'a kadar kağıt. Üç kat, akordeon ve düz broşür, selefon ve UV lak uygulamaları.",
        intro: [
          "Ürünlerinizi veya hizmetlerinizi etkili bir şekilde tanıtmanın en ekonomik ve görsel yollarından biri broşürdür. Alanya Kale Matbaa olarak dijital ve ofset broşür üretiminde yüksek kaliteli sonuçlar almanızı sağlıyoruz.",
          "Konica Minolta C4065 makinemizle canlı renkler, keskin detaylar ve 350 grama kadar kalın kağıt desteğiyle broşürlerinizi profesyonelce basıyoruz. Katlamalı (tek kat, üç kat, akordeon vb.) veya düz broşür seçeneklerimizle her ihtiyaca cevap veriyoruz.",
        ],
        sections: [
          {
            heading: "Broşür Neden Önemli?",
            bullets: [
              "Müşterilere dokunarak bıraktığı izlenim çok güçlüdür",
              "Ürün/hizmet detaylarını kapsamlı anlatma imkanı sunar",
              "Fuarlar, toplantılar, ofis dağıtımı ve posta için idealdir",
              "Restoran menülerinden emlak tanıtımına, otel broşürlerinden eğitim kurumlarına kadar geniş kullanım alanı",
            ],
          },
          {
            heading: "Kale Matbaa Farkı",
            bullets: [
              "Parlak, mat kuşe ve özel kağıt seçenekleri",
              "Selefon, lak ve UV spot uygulamaları",
              "Hızlı teslimat (acil broşür işlerinizde yanınızdayız)",
              "Profesyonel tasarım desteği",
            ],
          },
        ],
        cta: "Broşürünüzün elinize ulaştığı ilk anda \u201Ckaliteli\u201D dedirtmek istiyorsanız doğru yerdesiniz. Tasarımınızı gönderin veya bizimle birlikte tasarlayalım, Alanya'nın en kaliteli broşürlerini üretelim.",
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
        cta: "Если вы хотите, чтобы ваша брошюра говорила «качество» с первого прикосновения — вы в правильном месте. Пришлите дизайн или создадим его вместе, и мы напечатаем лучшие брошюры в Аланье.",
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
        title: "Şık ve Kaliteli Davetiye Baskı | Alanya Kale Matbaa",
        excerpt:
          "Düğün, nişan, sünnet ve kurumsal davetiyeler. 350 gr ve üzeri kartonlarda özel kesim, kabartma, lak ve yaldız uygulamalarıyla premium baskı.",
        metaTitle: "Alanya Davetiye Baskı | Düğün & Kurumsal - Kale Matbaa",
        metaDescription:
          "Alanya'da davetiye baskı: düğün, nişan, sünnet ve kurumsal davetiyeler. 350g+ karton, özel kesim, kabartma, lak, selefon ve yaldız uygulamaları.",
        intro: [
          "Düğün, nişan, sünnet, açılış, doğum günü veya kurumsal davetleriniz için ilk izlenimi en güçlü şekilde vermek davetiyeyle başlar. Alanya Kale Matbaa olarak davetiyelerinizi zarif, şık ve unutulmaz kılıyoruz.",
          "350 gr ve üzeri kalın kartonlarda, özel kesim, kabartma, lak, selefon ve yaldız gibi premium uygulamalarla yüksek kaliteli davetiye üretimi yapıyoruz. Hem klasik hem modern tasarımlarda size geniş seçenek sunuyoruz.",
        ],
        sections: [
          {
            heading: "Davetiye Çeşitlerimiz",
            bullets: [
              "Düğün & Nişan Davetiyeleri",
              "Sünnet & Doğum Günü Davetiyeleri",
              "Kurumsal Açılış ve Etkinlik Davetiyeleri",
              "Zarflı ve zarfsız modeller",
              "Özel kesim ve lüks dokulu kağıt seçenekleri",
            ],
          },
          {
            heading: "Neden Bizi Tercih Etmelisiniz?",
            bullets: [
              "Canlı renkler ve kusursuz baskı kalitesi",
              "Hızlı üretim ve zamanında teslimat",
              "Kişiye özel tasarım ve toplu üretim avantajı",
              "Alanya'nın en modern dijital baskı teknolojisi",
            ],
          },
        ],
        cta: "Özel günleriniz veya iş etkinlikleriniz için davetiyelerinizi güvenle bize emanet edin. Fikirlerinizi paylaşın, sizin için en uygun tasarımı ve baskıyı hazırlayalım.",
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
        title: "Alanya'da Profesyonel Kartvizit Baskı | Kale Matbaa",
        excerpt:
          "Konica Minolta C4065 ile 350 grama kadar kartonlarda canlı renkli kartvizit. Selefon, lak, kabartma ve özel kesim seçenekleriyle aynı gün teslim.",
        metaTitle: "Alanya Kartvizit Baskı | Selefonlu & Laklı - Kale Matbaa",
        metaDescription:
          "Alanya'da profesyonel kartvizit baskı: 80g-350g+ kağıt, selefon, UV lak, kabartma ve özel kesim. Canlı renkler, tasarım desteği, aynı gün teslim.",
        intro: [
          "Kartvizit, iş dünyasının en önemli iletişim aracıdır. İlk izlenimi oluşturan, markanızı uzun süre hatırlatan ve profesyonelliğinizi yansıtan bu küçük kart, doğru tasarlandığında ve kaliteli basıldığında büyük fark yaratır.",
          "Alanya Kale Matbaa olarak Konica Minolta AccurioPrint C4065 dijital baskı makinemizle 350 grama kadar kalın kartonlarda canlı renkler, net detaylar ve profesyonel sonuçlar üretiyoruz. İster standart, ister selefonlu, laklı, kabartmalı ya da özel kesimli kartvizit isteyin, hepsini en yüksek kalitede basıyoruz.",
        ],
        sections: [
          {
            heading: "Kale Matbaa Kartvizit Avantajları",
            bullets: [
              "Hızlı üretim ve aynı gün teslimat seçenekleri",
              "80g – 350g+ arası geniş kağıt seçenekleri",
              "Mat, parlak, selülozik selefon ve UV lak uygulamaları",
              "Tasarım desteği (hazır şablon veya sıfırdan)",
              "Acil işlerinizde bile güvenilir teslimat",
            ],
          },
          {
            heading: "Kimler İçin İdeal?",
            bullets: [
              "Yeni kurulan işletmeler",
              "Serbest meslek sahipleri (avukat, doktor, emlakçı vb.)",
              "Restoran, kafe, otel ve turizm işletmeleri",
              "Tüm kurumsal firmalar",
            ],
          },
          {
            heading: "Kartvizit Tasarım İpuçları",
            paragraphs: [
              "Kartvizit tasarımında logonuzu net tutun, iletişim bilgilerinizi öne çıkarın ve arka yüzü de değerlendirin (QR kod, hizmetler veya slogan).",
            ],
          },
        ],
        cta: "Markanızı en profesyonel şekilde temsil edecek kartvizitler için Kale Matbaa ile çalışın. Hemen teklif alın!",
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
]

export function getPost(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug)
}
