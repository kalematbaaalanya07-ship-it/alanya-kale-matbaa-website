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
    image: "/images/stamps.png",
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
    image: "/images/brochures.png",
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
    image: "/images/invitations.png",
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
    image: "/images/business-cards.png",
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
    image: "/images/afis.png",
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
    image: "/images/amerikan-servis.png",
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
    image: "/images/antetli.png",
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
    image: "/images/bloknot.png",
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
    image: "/images/cepli-dosya.png",
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
    image: "/images/etiket.png",
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
    image: "/images/karton-canta.png",
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
    image: "/images/kup-bloknot.png",
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
    image: "/images/magnet.png",
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
        desc: "Качественные магниты на холодильник и промо-магниты овальной, фигурной и стандартной формы.",
        features: ["Овальные и фигурные", "Стандартные размеры", "Для холодильника и промо", "Яркая цветная печать"],
      },
    },
  },
]

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug)
}
