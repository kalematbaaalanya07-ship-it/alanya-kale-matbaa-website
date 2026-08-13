import type { Lang } from "@/lib/i18n"

export type ProductContent = {
  title: string
  desc: string
  features: string[]
}

export type Product = {
  slug: string
  image: string
  content: Record<Lang, ProductContent>
}

export const products: Product[] = [
  {
    slug: "kase",
    image: "/images/stamps.webp",
    content: {
      tr: {
        title: "Kaliteli Kaşe Üretimi",
        desc: "Otomatik ve klasik kaşe üretiminde net baskı ve dayanıklı malzemeler sunuyoruz. Kurumsal logolu özel tasarımlar için ideal.",
        features: ["Otomatik ve klasik kaşe seçenekleri", "Net ve keskin baskı kalitesi", "Kurumsal logolu özel tasarım", "Dayanıklı malzeme"],
      },
      en: {
        title: "Quality Stamp Production",
        desc: "We offer crisp printing and durable materials in automatic and classic self-inking stamps. Ideal for custom designs with corporate logos.",
        features: ["Automatic and classic stamp options", "Sharp, clean impressions", "Custom design with corporate logo", "Durable materials"],
      },
      ru: {
        title: "Качественное изготовление печатей",
        desc: "Предлагаем чёткую печать и прочные материалы для автоматических и классических печатей. Идеально для индивидуального дизайна с логотипом.",
        features: ["Автоматические и классические печати", "Чёткий и ясный оттиск", "Индивидуальный дизайн с логотипом", "Прочные материалы"],
      },
    },
  },
  {
    slug: "brosur",
    image: "/images/brochures.webp",
    content: {
      tr: {
        title: "Profesyonel Broşür Baskı",
        desc: "Canlı renkler ve çeşitli katlama seçenekleriyle dikkat çekici broşürler üretiyoruz. 350 gr kalın kağıt desteğiyle premium kalite.",
        features: ["Canlı ve doygun renkler", "Çeşitli katlama seçenekleri", "350 gr'a kadar kalın kağıt", "Premium baskı kalitesi"],
      },
      en: {
        title: "Professional Brochure Printing",
        desc: "We produce eye-catching brochures with vivid colors and various folding options. Premium quality with up to 350 gsm thick paper.",
        features: ["Vivid, saturated colors", "Various folding options", "Thick paper up to 350 gsm", "Premium print quality"],
      },
      ru: {
        title: "Профессиональная печать брошюр",
        desc: "Изготавливаем привлекательные брошюры с яркими цветами и разными вариантами фальцовки. Премиум-качество на плотной бумаге до 350 г.",
        features: ["Яркие насыщенные цвета", "Разные варианты фальцовки", "Плотная бумага до 350 г", "Премиум-качество печати"],
      },
    },
  },
  {
    slug: "davetiye",
    image: "/images/invitations.webp",
    content: {
      tr: {
        title: "Şık Davetiye Baskı",
        desc: "Düğün, nişan, sünnet ve kurumsal davetiyelerde özel kesim, lak ve selefonlu premium modeller.",
        features: ["Düğün, nişan, sünnet ve kurumsal", "Özel kesim seçenekleri", "Lak ve selefon uygulaması", "Premium model çeşitleri"],
      },
      en: {
        title: "Elegant Invitation Printing",
        desc: "Premium models with die-cutting, varnish and lamination for wedding, engagement, circumcision and corporate invitations.",
        features: ["Wedding, engagement & corporate", "Custom die-cutting options", "Varnish and lamination finish", "Premium model variety"],
      },
      ru: {
        title: "Элегантная печать приглашений",
        desc: "Премиум-модели с фигурной высечкой, лакировкой и ламинацией для свадеб, помолвок и корпоративных приглашений.",
        features: ["Свадьба, помолвка и корпоратив", "Индивидуальная высечка", "Лакировка и ламинация", "Разнообразие премиум-моделей"],
      },
    },
  },
  {
    slug: "kartvizit",
    image: "/images/business-cards.webp",
    content: {
      tr: {
        title: "Profesyonel Kartvizit Baskı",
        desc: "350 gr kalın karton, selefon, lak, kabartma ve özel kesim seçenekleriyle en kaliteli kartvizitler.",
        features: ["350 gr kalın karton", "Parlak/mat selefon", "Kabartma ve lak uygulaması", "Özel kesim seçenekleri"],
      },
      en: {
        title: "Professional Business Card Printing",
        desc: "The highest quality business cards with 350 gsm thick cardstock, lamination, varnish, embossing and die-cutting options.",
        features: ["350 gsm thick cardstock", "Gloss/matte lamination", "Embossing and varnish", "Custom die-cutting options"],
      },
      ru: {
        title: "Профессиональная печать визиток",
        desc: "Визитки высшего качества на плотном картоне 350 г с ламинацией, лаком, тиснением и фигурной высечкой.",
        features: ["Плотный картон 350 г", "Глянцевая/матовая ламинация", "Тиснение и лакировка", "Индивидуальная высечка"],
      },
    },
  },
  {
    slug: "afis",
    image: "/images/afis.webp",
    content: {
      tr: {
        title: "Afiş Baskı",
        desc: "33x48 cm ve 48x68 cm ebatlarında 105-170 gr kuşe kağıt ile yüksek kaliteli afiş üretimi.",
        features: ["33x48 cm ve 48x68 cm ebatlar", "105-170 gr kuşe kağıt", "Yüksek çözünürlüklü baskı", "Canlı renk kalitesi"],
      },
      en: {
        title: "Poster Printing",
        desc: "High quality poster production in 33x48 cm and 48x68 cm sizes on 105-170 gsm coated paper.",
        features: ["33x48 cm and 48x68 cm sizes", "105-170 gsm coated paper", "High resolution printing", "Vivid color quality"],
      },
      ru: {
        title: "Печать афиш",
        desc: "Высококачественная печать афиш форматов 33x48 см и 48x68 см на мелованной бумаге 105-170 г.",
        features: ["Форматы 33x48 см и 48x68 см", "Мелованная бумага 105-170 г", "Печать высокого разрешения", "Яркие цвета"],
      },
    },
  },
  {
    slug: "amerikan-servis",
    image: "/images/amerikan-servis.webp",
    content: {
      tr: {
        title: "Amerikan Servis Baskı",
        desc: "28x40 cm 105 gr kuşe kağıt üzerine restoran ve kafe için şık Amerikan servis baskısı.",
        features: ["28x40 cm standart ebat", "105 gr kuşe kağıt", "Restoran ve kafe için ideal", "Şık ve hijyenik"],
      },
      en: {
        title: "Placemat Printing",
        desc: "Stylish placemat printing for restaurants and cafes on 28x40 cm, 105 gsm coated paper.",
        features: ["28x40 cm standard size", "105 gsm coated paper", "Ideal for restaurants & cafes", "Stylish and hygienic"],
      },
      ru: {
        title: "Печать сервировочных ковриков",
        desc: "Стильная печать сервировочных ковриков для ресторанов и кафе на бумаге 28x40 см, 105 г.",
        features: ["Стандартный размер 28x40 см", "Мелованная бумага 105 г", "Идеально для ресторанов и кафе", "Стильно и гигиенично"],
      },
    },
  },
  {
    slug: "antetli-kagit",
    image: "/images/antetli.webp",
    content: {
      tr: {
        title: "Antetli Kağıt",
        desc: "A4 (21x29.7 cm) 90 gr 1. hamur kağıt üzerine kurumsal antetli kağıt baskısı.",
        features: ["A4 (21x29.7 cm) ebat", "90 gr 1. hamur kağıt", "Kurumsal kimliğe uygun", "Net logo ve renk baskısı"],
      },
      en: {
        title: "Letterhead Paper",
        desc: "Corporate letterhead printing on A4 (21x29.7 cm) 90 gsm woodfree paper.",
        features: ["A4 (21x29.7 cm) size", "90 gsm woodfree paper", "Matches corporate identity", "Crisp logo and color print"],
      },
      ru: {
        title: "Фирменный бланк",
        desc: "Печать корпоративных фирменных бланков на бумаге A4 (21x29,7 см), 90 г, офсетной.",
        features: ["Формат A4 (21x29,7 см)", "Офсетная бумага 90 г", "Соответствие фирменному стилю", "Чёткая печать логотипа"],
      },
    },
  },
  {
    slug: "bloknot",
    image: "/images/bloknot.webp",
    content: {
      tr: {
        title: "Bloknot Baskı",
        desc: "50 yapraklı, tutkallı, spiral ve kapaklı modellerde tek renkten 4 renge kadar baskı seçenekleri.",
        features: ["50 yaprak standart", "Tutkallı, spiral ve kapaklı", "Tek renkten 4 renge baskı", "Kurumsal tasarım"],
      },
      en: {
        title: "Notepad Printing",
        desc: "50-sheet notepads in glued, spiral and covered models with printing options from single color up to 4 colors.",
        features: ["Standard 50 sheets", "Glued, spiral and covered", "Single color up to 4 colors", "Corporate design"],
      },
      ru: {
        title: "Печать блокнотов",
        desc: "Блокноты по 50 листов в клеевом, спиральном и обложечном исполнении с печатью от одного до четырёх цветов.",
        features: ["Стандарт 50 листов", "Клеевые, спиральные, с обложкой", "От 1 до 4 цветов печати", "Корпоративный дизайн"],
      },
    },
  },
  {
    slug: "cepli-dosya",
    image: "/images/cepli-dosya.webp",
    content: {
      tr: {
        title: "Cepli Dosya",
        desc: "Selefonlu, laklı ve emboslu cepli sunum dosyaları. Tek yön ve çift yön baskı seçenekleri.",
        features: ["Selefonlu ve laklı yüzey", "Embos uygulaması", "Tek ve çift yön baskı", "Profesyonel sunum"],
      },
      en: {
        title: "Pocket Folder",
        desc: "Laminated, varnished and embossed pocket presentation folders. Single and double-sided printing options.",
        features: ["Laminated and varnished finish", "Embossing application", "Single and double-sided print", "Professional presentation"],
      },
      ru: {
        title: "Папка с карманом",
        desc: "Презентационные папки с карманом с ламинацией, лакировкой и тиснением. Одно- и двусторонняя печать.",
        features: ["Ламинация и лакировка", "Тиснение", "Одно- и двусторонняя печать", "Профессиональная презентация"],
      },
    },
  },
  {
    slug: "etiket-cikartma",
    image: "/images/etiket.webp",
    content: {
      tr: {
        title: "Etiket ve Çıkartma Baskı",
        desc: "Özel ebatlarda (5x8 cm - 20x32 cm), parlak selefonlu ve selefonsuz yapışkanlı etiket üretimi.",
        features: ["Özel ebat (5x8 - 20x32 cm)", "Parlak selefonlu seçenek", "Selefonsuz yapışkanlı seçenek", "Dayanıklı yapışkan"],
      },
      en: {
        title: "Label & Sticker Printing",
        desc: "Adhesive label production in custom sizes (5x8 cm - 20x32 cm), with gloss lamination or without.",
        features: ["Custom sizes (5x8 - 20x32 cm)", "Gloss laminated option", "Non-laminated adhesive option", "Durable adhesive"],
      },
      ru: {
        title: "Печать этикеток и наклеек",
        desc: "Производство самоклеящихся этикеток нестандартных размеров (5x8 см - 20x32 см) с глянцевой ламинацией и без.",
        features: ["Нестандартные размеры (5x8 - 20x32 см)", "Вариант с глянцевой ламинацией", "Вариант без ламинации", "Прочный клей"],
      },
    },
  },
  {
    slug: "karton-canta",
    image: "/images/karton-canta.webp",
    content: {
      tr: {
        title: "Karton Çanta",
        desc: "Farklı ebatlarda (11x15 cm'den 55x38 cm'ye) 4 renk baskılı dayanıklı karton çantalar.",
        features: ["11x15 cm - 55x38 cm ebatlar", "4 renk baskı", "Dayanıklı karton yapı", "İpli sağlam saplar"],
      },
      en: {
        title: "Cardboard Bag",
        desc: "Durable cardboard bags in various sizes (from 11x15 cm to 55x38 cm) with 4-color printing.",
        features: ["Sizes 11x15 cm - 55x38 cm", "4-color printing", "Durable cardboard build", "Strong rope handles"],
      },
      ru: {
        title: "Картонный пакет",
        desc: "Прочные картонные пакеты разных размеров (от 11x15 см до 55x38 см) с 4-цветной печатью.",
        features: ["Размеры 11x15 см - 55x38 см", "4-цветная печать", "Прочная картонная конструкция", "Крепкие верёвочные ручки"],
      },
    },
  },
  {
    slug: "kup-bloknot",
    image: "/images/kup-bloknot.webp",
    content: {
      tr: {
        title: "Küp Bloknot",
        desc: "77x77 mm 250-800 yapraklı, parlak selefonlu masaüstü küp bloknotlar.",
        features: ["77x77 mm standart ebat", "250-800 yaprak", "Parlak selefonlu kapak", "Masaüstü kullanım"],
      },
      en: {
        title: "Cube Notepad",
        desc: "77x77 mm desktop cube notepads with 250-800 sheets and gloss lamination.",
        features: ["77x77 mm standard size", "250-800 sheets", "Gloss laminated cover", "Desktop use"],
      },
      ru: {
        title: "Кубик для записей",
        desc: "Настольные кубики для записей 77x77 мм на 250-800 листов с глянцевой ламинацией.",
        features: ["Стандартный размер 77x77 мм", "250-800 листов", "Глянцевая ламинация", "Для настольного использования"],
      },
    },
  },
  {
    slug: "magnet",
    image: "/images/magnet.webp",
    content: {
      tr: {
        title: "Magnet Baskı",
        desc: "Oval, özel kesim ve standart ebatlarda kaliteli buzdolabı ve promosyon magnetleri.",
        features: ["Oval ve özel kesim", "Standart ebat seçenekleri", "Buzdolabı ve promosyon", "Canlı renkli baskı"],
      },
      en: {
        title: "Magnet Printing",
        desc: "Quality fridge and promotional magnets in oval, custom-cut and standard sizes.",
        features: ["Oval and custom-cut", "Standard size options", "Fridge and promotional use", "Vivid color printing"],
      },
      ru: {
        title: "Печать магнитов",
        desc: "Каче����твенные магниты на холодильник и промо-магниты овальной, фигурной и стандартной формы.",
        features: ["Овальные и фигурные", "Стандартные размеры", "Для холодильника и промо", "Яркая цветная печать"],
      },
    },
  },
  {
    slug: "tesekkur-karti",
    image: "/images/remote-webp/remote-37.webp",
    content: {
      tr: {
        title: "Teşekkür Kartı Baskı",
        desc: "Müşteri memnuniyetini artırmanın ve e-ticarette markanızı unutulmaz kılmanın en etkili yolu! Kargoladığınız her siparişin içine ekleyeceğiniz şık ve kurumsal bir teşekkür kartı, sadık müşteriler kazanmanızı sağlar. Kalın 350 gr kaliteli kuşe, yüksek çözünürlüklü canlı dijital baskı kalitesi ve özel selefon kaplama seçenekleriyle markanıza değer katan tasarımlar.",
        features: ["350 gr kalın kuşe kağıt", "Yüksek çözünürlüklü baskı", "Özel selefon kaplama", "E-ticaret için ideal"],
      },
      en: {
        title: "Thank You Card Printing",
        desc: "The most effective way to increase customer satisfaction and make your brand unforgettable in e-commerce! A stylish thank you card included in every shipment creates loyal customers. Premium designs with thick 350 gsm coated paper, high-resolution vivid digital printing and optional lamination coating.",
        features: ["350 gsm thick coated paper", "High-resolution printing", "Optional lamination coating", "Ideal for e-commerce"],
      },
      ru: {
        title: "Печать благодарственных карточек",
        desc: "Самый эффективный способ повысить удовлетворённость клиентов и сделать вашу марку незабываемой в электронной коммерции! Стильная благодарственная карточка в каждой посылке создаёт лояльных клиентов. Премиум-дизайны на плотной мелованной бумаге 350 г с высокоразрешённой яркой цифровой печатью и опциональной ламинацией.",
        features: ["Плотная мелованная бумага 350 г", "Высокоразрешённая печать", "Опциональная ламинация", "Идеально для электронной коммерции"],
      },
    },
  },
  {
    slug: "dergi-baskisi",
    image: "/images/remote-webp/remote-38.webp",
    content: {
      tr: {
        title: "Kurumsal & Süreli Dergi Baskısı",
        desc: "Konica Minolta AccurioPress C4065 dijital baskı teknolojimiz ile az adetli veya yüksek adetli dergi taleplerinizi sıfır hata ile üretiyoruz. 80 gr - 350 gr arası kağıt seçenekleri; A4, A5, B5 ve özel boyut imkanları. Tel dikiş ve yüksek renk doğruluğu (3600x2400 dpi eşdeğeri) ile profesyonel dergi basımı.",
        features: ["80-350 gr kağıt seçenekleri", "C4065 dijital teknoloji", "Tel dikiş ve cilt seçenekleri", "3600x2400 dpi renk doğruluğu"],
      },
      en: {
        title: "Corporate & Periodical Magazine Printing",
        desc: "Using our Konica Minolta AccurioPress C4065 digital printing technology, we produce magazines from small to large runs with zero errors. Options from 80 gsm to 350 gsm coated and woodfree papers; A4, A5, B5 and custom sizes. Professional magazine printing with saddle stitching and high color accuracy (equivalent to 3600x2400 dpi).",
        features: ["80-350 gsm paper options", "C4065 digital technology", "Saddle stitch and binding options", "3600x2400 dpi color accuracy"],
      },
      ru: {
        title: "Печать корпоративных и периодических журналов",
        desc: "Используя нашу цифровую печать Konica Minolta AccurioPress C4065, мы производим журналы от малых до больших тиражей с нулевыми ошибками. Опции от 80 г до 350 г мелованной и офсетной бумаги; форматы A4, A5, B5 и нестандартные размеры. Профессиональная печать журналов с проволочной скреплением и высокой цветопередачей (эквивалент 3600x2400 dpi).",
        features: ["Опции бумаги 80-350 г", "Цифровая технология C4065", "Проволочное скрепление и опции переплёта", "Цветопередача 3600x2400 dpi"],
      },
    },
  },
  {
    slug: "katalog-baskisi",
    image: "/images/remote-webp/remote-39.webp",
    content: {
      tr: {
        title: "Katalog Baskı Hizmetleri",
        desc: "Şirketinizin vizyonunu ve ürünlerinizi en üst kalitede sergileyin. C4065 dijital baskı makinemiz sayesinde 130 gr ile 350 gr arasındaki tüm kağıt seçeneklerine, A4, A5 veya özel kare ebatlarda üretim yapıyoruz. Selefon ile preste mükemmel sonuç.",
        features: ["130-350 gr kağıt seçenekleri", "Özel ebat seçenekleri", "Selefon ve pres uygulaması", "Profesyonel katalog tasarımı"],
      },
      en: {
        title: "Catalog Printing Services",
        desc: "Showcase your company's vision and products in the highest quality. Thanks to our C4065 digital printing machine, we produce catalogs on all paper options between 130 gsm and 350 gsm in A4, A5 or custom square sizes. Perfect results with lamination and pressing.",
        features: ["130-350 gsm paper options", "Custom size options", "Lamination and pressing", "Professional catalog design"],
      },
      ru: {
        title: "Услуги печати каталогов",
        desc: "Представьте видение вашей компании и продукты в наивысшем качестве. Благодаря нашей цифровой печати C4065 мы производим каталоги на всех бумагах от 130 г до 350 г в форматах A4, A5 или нестандартных размерах. Идеальный результат с ламинацией и прессованием.",
        features: ["Бумага 130-350 г", "Нестандартные размеры", "Ламинация и прессование", "Профессиональный дизайн каталога"],
      },
    },
  },
  {
    slug: "folyo-etiket",
    image: "/images/remote-webp/remote-40.webp",
    content: {
      tr: {
        title: "Folyo Özel Kesim Etiket (Sticker)",
        desc: "Dijital baskı ve yüksek hassasiyetli optik plotter kesim teknolojisi ile istediğiniz her formda ve boyutta (yuvarlak, oval, özel logonun formunda) folyo etiket üretimi. Şeffaf, opak, mat, parlak, kuşe ve yırtılmaz PP plastik esaslı folyo malzemeler üzerine sudan ve dış etkenlerden etkilenmeyen dayanıklı baskı.",
        features: ["Dijital baskı teknolojisi", "Özel kesim plotter", "Su ve dış etkiye dayanıklı", "Çeşitli folyo seçenekleri"],
      },
      en: {
        title: "Foil Custom Cut Label (Sticker)",
        desc: "Using digital printing and high-precision optical plotter cutting technology, we produce foil labels in any shape and size you want (round, oval, in your logo's shape). Durable printing resistant to water and external factors on transparent, opaque, matte, glossy, coated and tear-resistant PP plastic-based foil materials.",
        features: ["Digital printing technology", "Custom plotter cutting", "Water and weather resistant", "Various foil options"],
      },
      ru: {
        title: "Фольгированная этикетка со специальной высечкой",
        desc: "Используя цифровую печать и высокоточную оптическую плоттерную технологию резки, мы производим фольгированные этикетки любой формы и размера, которые вам нужны (круг, овал, форма вашего логотипа). Прочная печать, стойкая к воде и внешним факторам, на прозрачной, непрозрачной, матовой, глянцевой, мелованной и разрывостойкой ПП пластиковой фольге.",
        features: ["Технология цифровой печати", "Специальная высечка плоттером", "Водо- и атмосферостойкая", "Разнообразные фольги"],
      },
    },
  },
  {
    slug: "kitap-ayraci",
    image: "/images/remote-webp/remote-41.webp",
    content: {
      tr: {
        title: "Özel Tasarım Kitap Ayracı",
        desc: "Promosyon ve kurumsal hediyelerin vazgeçilmezi. AccurioPress C4065 gücüyle 300 gr - 350 gr mat/parlak kuşe ve özel dokulu kağıtlara, standart 5x15 cm veya özel kesim ebatlarında baskı. Çift yönlü renkli baskı, mat/parlak selefon, püskül/ip deliği ve özel oval köşe seçenekleriyle.",
        features: ["300-350 gr kuşe kağıt", "Standart ve özel ebatlar", "Çift yönlü baskı", "Püskül/ip deliği seçeneği"],
      },
      en: {
        title: "Custom Design Bookmark",
        desc: "A must-have for promotions and corporate gifts. With the power of AccurioPress C4065, we print on 300-350 gsm matte/gloss coated and specialty papers in standard 5x15 cm or custom-cut sizes. Double-sided color printing, matte/gloss lamination, tassel/string hole and special rounded corner options.",
        features: ["300-350 gsm coated paper", "Standard and custom sizes", "Double-sided printing", "Tassel/string hole option"],
      },
      ru: {
        title: "Закладка дл�� книги на заказ",
        desc: "Обязательна для акций и корпоративных подарков. С мощностью AccurioPress C4065 мы печатаем на мелованной бумаге 300-350 г матовой/глянцевой и специальной фактурной бумаге в стандартных размерах 5x15 см или с особой высечкой. Двусторонняя цветная печать, матовая/глянцевая ламинация, кисточка/отверстие для ниточки и закруглённые углы.",
        features: ["Мелованная бумага 300-350 г", "Стандартные и нестандартные размеры", "Двусторонняя печать", "Опция кисточки/нитки"],
      },
    },
  },
  {
    slug: "ozel-imsakiye",
    image: "/images/remote-webp/remote-42.webp",
    content: {
      tr: {
        title: "Özel İmsakiye Baskısı",
        desc: "Ramazan ayına özel, firmanızın logosu ve iletişim bilgileriyle özelleştirilmiş imsakiye üretimi. C4065 makinemizde 170 gr - 350 gr kuşe kağıda, A4, A3 veya özel katlamalı ebatlarda canlı ve net baskı. Yüksek okunabilirlik ve uzun ömürlü kullanım.",
        features: ["170-350 gr kuşe kağıt", "A4, A3 ve özel ebatlar", "Özelleştirilmiş tasarım", "Yüksek okunabilirlik"],
      },
      en: {
        title: "Custom Ramadan Schedule Printing",
        desc: "Special Ramadan production personalized with your company logo and contact information. On our C4065 machine, vivid and crisp printing on 170 gsm to 350 gsm coated paper in A4, A3 or custom folded sizes. High legibility and long-lasting use.",
        features: ["170-350 gsm coated paper", "A4, A3 and custom sizes", "Personalized design", "High legibility"],
      },
      ru: {
        title: "Печать специального графика Рамадана",
        desc: "Специальное производство на Рамадан, персонализированное логотипом вашей компании и информацией для связи. На нашей машине C4065 яркая и чёткая печать на мелованной бумаге 170-350 г в форматах A4, A3 или нестандартных размерах с фальцовкой. Высокая читаемость и долговечное использование.",
        features: ["Мелованная бумага 170-350 г", "Форматы A4, A3 и нестандартные", "Персонализированный дизайн", "Высокая читаемость"],
      },
    },
  },
  {
    slug: "diplomat-zarf",
    image: "/images/remote-webp/remote-43.webp",
    content: {
      tr: {
        title: "Kurumsal Diplomat Zarf Baskısı",
        desc: "Şirket içi ve dışı yazışmalarınıza kurumsal prestij katın. 110 gr 1. hamur zarflar (pencereli veya penceresiz seçenekleriyle). C4065 dijital altyapımız ile pürüzsüz logonuz ve kurum renkleriniz tam tonunda basılır.",
        features: ["110 gr 1. hamur zarf", "Pencereli/penceresiz seçenek", "Tam tonlu renk baskısı", "Kurumsal prestij"],
      },
      en: {
        title: "Corporate Diplomatic Envelope Printing",
        desc: "Add corporate prestige to your internal and external correspondence. 110 gsm woodfree envelopes (with or without window options). With our C4065 digital infrastructure, your logo and corporate colors are printed in perfect tone.",
        features: ["110 gsm woodfree envelope", "With/without window option", "Perfect tone color printing", "Corporate prestige"],
      },
      ru: {
        title: "Печать корпоративных дипломатических конвертов",
        desc: "Придайте корпоративный престиж вашей внутренней и внешней корреспонденции. Конверты 110 г офсетной бумаги (с окном или без). С нашей цифровой инфраструктурой C4065 ваш логотип и корпоративные цвета печатаются в идеальном тоне.",
        features: ["Конверт офсетной бумаги 110 г", "С окном или без", "Печать идеального тона цвета", "Корпоративный престиж"],
      },
    },
  },
  {
    slug: "renkli-cikti",
    image: "/images/remote-webp/remote-44.webp",
    content: {
      tr: {
        title: "Yüksek Kaliteli Renkli Çıktı Hizmeti",
        desc: "Proje, sunum, grafik ve görsel ağırlıklı dokümanlarınız için C4065 teknolojisiyle hızlı ve yüksek kaliteli renkli çıktı servisi. 80 gr standart kağıttan 350 gr ağır gramajlı kağıtlara kadar A4, A3 ve SRA3 ebatlarında yüksek çözünürlüklü dijital baskı.",
        features: ["80-350 gr kağıt seçenekleri", "A4, A3, SRA3 ebatları", "Yüksek çözünürlüklü baskı", "Hızlı teslimat"],
      },
      en: {
        title: "High Quality Color Output Service",
        desc: "Fast and high-quality color output service with C4065 technology for your project, presentation, graphic and visually-intensive documents. High-resolution digital printing in A4, A3 and SRA3 sizes from standard 80 gsm paper to heavy 350 gsm paper.",
        features: ["80-350 gsm paper options", "A4, A3, SRA3 sizes", "High-resolution printing", "Fast turnaround"],
      },
      ru: {
        title: "Услуга печати высокого качества в цвете",
        desc: "Быстрая и высокое качество цветная печать с технологией C4065 для ваших проектов, презентаций, графиков и визуально ёмких документов. Высокоразрешённая цифровая печать в форматах A4, A3 и SRA3 на бумаге от стандартной 80 г до тяжелой 350 г.",
        features: ["Опции бумаги 80-350 г", "Размеры A4, A3, SRA3", "Высокоразрешённая печать", "Быстрое выполнение"],
      },
    },
  },
  {
    slug: "sadakat-karti",
    image: "/images/remote-webp/remote-45.webp",
    content: {
      tr: {
        title: "Müşteri Sadakat Kartı",
        desc: "Kafe, restoran, kuaför ve perakende mağazaları için tekrar eden satışları artıran sadakat kartları. 300 gr - 350 gr kuşe veya özel kaşelenebilir/yazılabilir dokulu kağıtlara baskı. Mühür basımına uygun yüzey ve özel ebat seçenekleriyle.",
        features: ["300-350 gr kuşe kağıt", "Mühür basımına uygun yüzey", "Özel ebat seçenekleri", "Tekrar satış artışı"],
      },
      en: {
        title: "Customer Loyalty Card",
        desc: "Loyalty cards that increase repeat sales for cafes, restaurants, salons and retail stores. Printing on 300-350 gsm coated or special stamp-compatible/writable textured papers. With stamp-friendly surface and custom size options.",
        features: ["300-350 gsm coated paper", "Stamp-friendly surface", "Custom size options", "Increases repeat sales"],
      },
      ru: {
        title: "Карта лояльности клиента",
        desc: "Карты лояльности, которые увеличивают повторные продажи для кафе, ресторанов, салонов и розничных магазинов. Печать на мелованной бумаге 300-350 г или специальной штампуемой/пишущей фактурной бумаге. С печатеустойчивой поверхностью и опциями нестандартных размеров.",
        features: ["Мелованная бумага 300-350 г", "Печатеустойчивая поверхность", "Опции нестандартных размеров", "Повышает повторные продажи"],
      },
    },
  },
  {
    slug: "acil-el-ilani",
    image: "/images/remote-webp/remote-46.webp",
    content: {
      tr: {
        title: "Acil El İlanı & Broşür Baskısı",
        desc: "Zamanla yarışan kampanya ve tanıtımlarınız için aynı gün teslimat seçeneğiyle acil el ilanı! C4065 dijital hızımız ile 130 gr - 170 gr kuşe kağıda, A5, A4 veya kırım/katlamalı broşür formatlarında yüksek kaliteli ve canlı baskı çözümü.",
        features: ["Aynı gün teslimat seçeneği", "130-170 gr kuşe kağıt", "A5, A4 ve broşür formatları", "Dijital hız ve kalite"],
      },
      en: {
        title: "Urgent Handout & Brochure Printing",
        desc: "Urgent handouts with same-day delivery option for your time-sensitive campaigns and promotions! High-quality and vivid printing solution on 130-170 gsm coated paper in A5, A4 or folded brochure formats with the speed of our C4065 digital technology.",
        features: ["Same-day delivery option", "130-170 gsm coated paper", "A5, A4 and brochure formats", "Digital speed and quality"],
      },
      ru: {
        title: "Срочная печать листовок и брошюр",
        desc: "Срочные листовки с опцией доставки в тот же день для ваших чувствительных по времени кампаний и акций! Высокое качество и яркое решение печати на мелованной бумаге 130-170 г в форматах A5, A4 или сложенные брошюры со скоростью нашей цифровой технологии C4065.",
        features: ["Опция доставки в тот же день", "Мелованная бумага 130-170 г", "Форматы A5, A4 и брошюры", "Скорость и качество цифры"],
      },
    },
  },
  {
    slug: "dokuman-baskisi",
    image: "/images/remote-webp/remote-47.webp",
    content: {
      tr: {
        title: "Kurumsal Doküman & Rapor Baskısı",
        desc: "Şirket raporları, eğitim materyalleri, sunum dosyaları ve teknik dokümanlarınız için profesyonel baskı. 80 gr - 160 gr kağıt seçenekleri, A4/A3 ebatları, spiralli, Ciltli veya zımbalı tamamlama imkanları.",
        features: ["80-160 gr kağıt seçenekleri", "A4/A3 ebatları", "Spiralli/ciltli/zımbalı", "Profesyonel baskı"],
      },
      en: {
        title: "Corporate Document & Report Printing",
        desc: "Professional printing for your company reports, training materials, presentation files and technical documents. 80-160 gsm paper options, A4/A3 sizes, spiral, binding or stapled finishing options.",
        features: ["80-160 gsm paper options", "A4/A3 sizes", "Spiral/binding/stapled", "Professional printing"],
      },
      ru: {
        title: "Печать корпоративных документов и отчётов",
        desc: "Профессиональная печать корпоративных отчётов, учебных материалов, файлов презентаций и технических документов. Опции бумаги 80-160 г, размеры A4/A3, спиральное, клеевое или скобочное скрепление.",
        features: ["Опции бумаги 80-160 г", "Размеры A4/A3", "Спиральное/клеевое/скобочное", "Профессиональная печать"],
      },
    },
  },
  {
    slug: "acil-dugun-davetiyesi",
    image: "/images/remote-webp/remote-48.webp",
    content: {
      tr: {
        title: "Acil Düğün & Etkinlik Davetiyesi",
        desc: "Özel günlerinizde zaman kaybetmeden şıklığı yakalayın. C4065 baskı altyapımızla 300 gr - 350 gr kuşe kağıtlara acil davetiye baskısı.",
        features: ["Acil üretim seçeneği", "300-350 gr kuşe kağıt", "Şık tasarım", "Hızlı teslimat"],
      },
      en: {
        title: "Urgent Wedding & Event Invitation",
        desc: "Capture elegance without wasting time on your special days. Urgent invitation printing on 300-350 gsm coated paper with our C4065 printing infrastructure.",
        features: ["Urgent production option", "300-350 gsm coated paper", "Elegant design", "Fast delivery"],
      },
      ru: {
        title: "Срочное приглашение на свадьбу и мероприятие",
        desc: "Поймайте элегантность, не теряя времени в свой особый день. Срочная печать приглашений на мелованной бумаге 300-350 г с нашей инфраструктурой печати C4065.",
        features: ["Опция срочного производства", "Мелованная бумага 300-350 г", "Элегантный дизайн", "Быстрая доставка"],
      },
    },
  },
  {
    slug: "sertifika",
    image: "/images/remote-webp/remote-49.webp",
    content: {
      tr: {
        title: "Sertifika & Katılım Belgesi Baskısı",
        desc: "Eğitim, seminer ve organizasyonlar için prestijli sertifika baskıları. 130 gr - 170 gr - 300 gr - 350 gr ağır kuşe kağıtlara, kişiselleştirilmiş (değişken verili/isimli) kaliteli renkli dijital baskı.",
        features: ["130-350 gr kuşe kağıt", "Kişiselleştirilmiş baskı", "Değişken veri seçeneği", "Prestijli sertifika"],
      },
      en: {
        title: "Certificate & Participation Card Printing",
        desc: "Prestigious certificate printing for education, seminars and events. High-quality color digital printing on 130-350 gsm heavy coated papers, personalized (variable data/named).",
        features: ["130-350 gsm coated paper", "Personalized printing", "Variable data option", "Prestigious certificate"],
      },
      ru: {
        title: "Печать сертификатов и удостоверений участия",
        desc: "Престижная печать сертификатов для образования, семинаров и мероприятий. Высокое качество цветной цифровой печати на плотной мелованной бумаге 130-350 г, персонализированная (переменные данные/имена).",
        features: ["Мелованная бумага 130-350 г", "Персонализированная печать", "Опция переменных данных", "Престижный сертификат"],
      },
    },
  },
  {
    slug: "oto-paspas",
    image: "/images/remote-webp/remote-50.webp",
    content: {
      tr: {
        title: "Kağıt Oto Paspas",
        desc: "Oto yıkama, teknik servis ve valeler için özel üretim. 33x48 cm ebatlarında, 100 gr Kraft kağıda tek yön tek renk yüksek dayanıklı ve emici özel baskı.",
        features: ["33x48 cm standart ebat", "100 gr Kraft kağıt", "Tek yön tek renk", "Dayanıklı ve emici"],
      },
      en: {
        title: "Paper Car Floor Mat",
        desc: "Special production for car washes, technical services and valets. In 33x48 cm sizes, single-sided single-color durable and absorbent special printing on 100 gsm kraft paper.",
        features: ["Standard size 33x48 cm", "100 gsm kraft paper", "Single-sided single-color", "Durable and absorbent"],
      },
      ru: {
        title: "Бумажный коврик для автомобиля",
        desc: "Специальное производство для автомоек, технических сервисов и валетов. Размеры 33x48 см, односторонняя однокрасочная прочная и впитывающая специальная печать на крафт-бумаге 100 г.",
        features: ["Стандартный размер 33x48 см", "Крафт-бумага 100 г", "Односторонняя однокрасочная", "Прочная и впитывающая"],
      },
    },
  },
  {
    slug: "otokopili-resmi-evrak",
    image: "/images/remote-webp/remote-51.webp",
    content: {
      tr: {
        title: "Otokopili Resmi ve Gayri Resmi Evraklar",
        desc: "İşletmenizin tüm resmi ve gayri resmi matbu evrak ihtiyaçları: Tahsilat Makbuzu, Tediye Makbuzu, Gider Pusulası, Adisyon, Perakende Satış Fişi, Sevk İrsaliyesi, Fatura, Rent a Car Sözleşmesi, Sipariş Fişi, Teknik Servis Fişi, Hasta Bilgi Formu. 2 nüsha, 3 nüsha otokopili kendinden karbonlu kağıtlar veya standart hamur kağıtlara, istenilen ebatta (A4, A5 vb.), istenilen renk ve numaratör/seri no seçeneğiyle özel üretim.",
        features: ["2-3 nüsha otokopili", "Kendinden karbon kağıt", "Numaratör/seri no seçeneği", "Resmi evrak çeşitleri"],
      },
      en: {
        title: "Self-Copying Official & Non-Official Documents",
        desc: "All your business's official and non-official printed document needs: Receipt, Payment Receipt, Expense Report, Bill, Retail Sales Slip, Shipping Receipt, Invoice, Car Rental Agreement, Order Form, Technical Service Form, Patient Information Form. 2-copy or 3-copy self-carbonizing paper or standard paper, custom sizes (A4, A5, etc.), desired colors and numbering/serial number options.",
        features: ["2-3 copy self-carbonizing", "Self-carbon paper", "Numbering/serial option", "Official document types"],
      },
      ru: {
        title: "Самокопирующиеся официальные и неофициальные документы",
        desc: "Все потребности вашего бизнеса в официальных и неофициальных печатных документах: Квитанция, Расписка, Отчёт о расходах, Счёт, Розничный чек, Накладная, Счёт-фактура, Договор проката авто, Бланк заказа, Бланк техслужбы, Форма информации о пациенте. 2-копийная или 3-копийная самокопирующаяся бумага или стандартная бумага, нестандартные размеры (A4, A5 и т.д.), желаемые цвета и опции нумерации/сери.",
        features: ["2-3 копийная самокопир", "Самокопирующаяся бумага", "Опция нумерации/серии", "Типы официальных документов"],
      },
    },
  },
  {
    slug: "bilet-baskisi",
    image: "/images/remote-webp/remote-52.webp",
    content: {
      tr: {
        title: "Seri Numaralı Etkinlik & Konser Bileti",
        desc: "Etkinlik, konser, tiyatro, fuar ve organizasyonlarınız için bütçe dostu, yüksek güvenlikli bilet baskıları. C4065 dijital gücüyle 130 gr - 170 gr - 300 gr - 350 gr kuşe kağıtlara, numaratörlü (seri nolu), perforajlı (koçanlı/koparmalı) ve özel tasarım bilet üretimi.",
        features: ["130-350 gr kuşe kağıt", "Seri numaralı üretim", "Perforajlı/koparmalı seçenek", "Yüksek güvenlik"],
      },
      en: {
        title: "Serial Numbered Event & Concert Ticket",
        desc: "Budget-friendly, high-security ticket printing for your events, concerts, theater, fairs and organizations. Serial numbered, perforated (tear-off/detachable) and custom designed ticket production on 130-350 gsm coated paper with the power of our C4065 digital technology.",
        features: ["130-350 gsm coated paper", "Serial numbered production", "Perforated/tear-off option", "High security"],
      },
      ru: {
        title: "Билет на мероприятие и концерт с серийным номером",
        desc: "Бюджетная, высокозащищённая печать билетов для ваших мероприятий, концертов, театра, ярмарок и организаций. Производство с сери перенумерованием, перфорацией (отрывной/отделяемый) и нестандартный дизайн билетов на мелованной бумаге 130-350 г с мощью нашей цифровой технологии C4065.",
        features: ["Мелованная бумага 130-350 г", "Пр��изводство с сериями", "Опция перфорации/отрыва", "Высокая защита"],
      },
    },
  },
  {
    slug: "kupon-baskisi",
    image: "/images/remote-webp/remote-53.webp",
    content: {
      tr: {
        title: "İndirim Kuponu & Hediye Çeki Baskısı",
        desc: "Firmaların satış hacmini artırmak, yeni müşteriler kazanmak ve dönemsel kampanyaları büyütmek için vazgeçilmez pazarlama aracı. C4065 altyapımızla 130 gr - 170 gr - 300 gr - 350 gr kuşe veya özel kağıtlara kişiye özel numara/kod, perforajlı (kolay koparma) ve özel kesim seçenekleriyle kurumsal hediye çeki ve indirim kuponu üretimi.",
        features: ["130-350 gr kuşe kağıt", "Özel numara/kod seçeneği", "Perforajlı koparma", "Özel kesim seçeneği"],
      },
      en: {
        title: "Discount Coupon & Gift Voucher Printing",
        desc: "An essential marketing tool for companies to increase sales volume, gain new customers and grow seasonal campaigns. With our C4065 infrastructure, personalized number/code, perforated (easy tear) and custom-cut options for corporate gift vouchers and discount coupons on 130-350 gsm coated or specialty papers.",
        features: ["130-350 gsm coated paper", "Personalized number/code", "Perforated tear", "Custom cut option"],
      },
      ru: {
        title: "Печать дисконтных купонов и подарочных сертификатов",
        desc: "Незаменимый маркетинговый инструмент для компаний, желающих увеличить объём продаж, завоевать новых клиентов и увеличить сезонные кампании. С нашей инфраструктурой C4065, персональный номер/код, перфорация (лёгкий отрыв) и опции нестандартной высечки для корпоративных подарочных сертификатов и дисконтных купонов на мелованной или специальной бумаге 130-350 г.",
        features: ["Мелованная бумага 130-350 г", "Персональный номер/код", "Перфорация с отрывом", "Опция нестандартной высечки"],
      },
    },
  },
  {
    slug: "otel-baski-ihtiyaclari",
    image: "/images/remote-webp/remote-54.webp",
    content: {
      tr: {
        title: "Otel Baskı İhtiyaçları",
        desc: "Konaklama alanlarının tüm baskı gereksinimlerine profesyonel çözüm. Konuk formları, housekeeper raporları, ön muhasebe belgeleri, çalışan yönetim formları ve daha birçok özel otel baskı ihtiyacı. 2 nüsha, 3 nüsha otokopili kağıtlar ve standart kağıtlarda istenilen boyut ve renkte üretim.",
        features: ["Konuk ve personel formları", "2-3 nüsha otokopili kağıtlar", "Standart ve özel boyutlar", "Renkli ve siyah-beyaz seçenekleri"],
      },
      en: {
        title: "Hotel Printing Needs",
        desc: "Professional solutions for all printing requirements of accommodation facilities. Guest forms, housekeeper reports, front desk documents, staff management forms and many more specialized hotel printing needs. Production on 2-copy and 3-copy carbonless papers and standard papers in any desired size and color.",
        features: ["Guest and staff forms", "2-3 copy carbonless papers", "Standard and custom sizes", "Color and black-white options"],
      },
      ru: {
        title: "Потребности в печати для отелей",
        desc: "Профессиональные решения для всех требований печати учреждений размещения. Гостевые формы, отчёты уборщиков, документы стойки регистрации, формы управления персоналом и многие другие специализированные потребности печати для отелей. Производство на 2-копийной и 3-копийной безуглеводной бумаге и стандартной бумаге любого размера и цвета.",
        features: ["Гостевые и кадровые формы", "Бумага 2-3 копии без углерода", "Стандартные и нестандартные размеры", "Цветные и чёрно-белые варианты"],
      },
    },
  },
]

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug)
}
