export interface Service {
  id: string;
  slug: string;
  tag: string;
  title: string;
  metaTitle: string;
  subtitle: string;
  image: string;
  content: string;
  faqs: Array<{
    question: string;
    answer: string;
  }>;
}

export const services: Service[] = [
  {
    id: 'kase-uretimi',
    slug: 'kase-uretimi',
    tag: 'Kaşe Yapımı',
    title: 'Alanya\'da Kaliteli Kaşe Üretimi',
    metaTitle: 'Alanya\'da Kaliteli Kaşe Üretimi | Otomatik & Klasik Kaşe',
    subtitle: 'Alanya\'da işletmenizin kurumsal kimliğini en net ve kalıcı şekilde yansıtmanın yollarından biri kaliteli bir kaşedir.',
    image: '/images/services/kase26.jpeg',
    content: `Alanya\'da işletmenizin kurumsal kimliğini en net ve kalıcı şekilde yansıtmanın yollarından biri kaliteli bir kaşedir. Alanya Kale Matbaa olarak otomatik ve klasik kaşe üretiminde yıllardır sektörde edindiğimiz tecrübe ile işletmenize özel, net baskılı ve uzun ömürlü kaşeler üretiyoruz.

Kaşe, sadece bir imza aracı değildir. Resmi yazışmalarda, faturalarda, irsaliyelerde, sözleşmelerde ve hatta paketlerde kurumsal imzanızı temsil eder. Özellikle Alanya gibi turizm ve ticaretin yoğun olduğu bir şehirde, profesyonel görünen bir kaşe, müşteri ve iş ortaklarınız nezdinde güven yaratır.

## Otomatik Kaşe mi, Klasik Kaşe mi?

Otomatik kaşeler, günlük yoğun kullanım için idealdir. Mürekkep yastığı entegre olduğu için her bastığınızda aynı netlikte iz bırakır. Klasik kaşeler ise daha ekonomik bir seçenek olup, özellikle az kullanılan veya özel tasarımlı kaşelerde tercih edilir. Her iki modelde de logonuzu, unvanınızı, vergi numaranızı ve adres bilgilerinizi net bir şekilde basıyoruz.

Baskı kalitemiz, yüksek çözünürlüklü klişe teknolojisi sayesinde ince çizgileri ve küçük yazıları bile bozmadan aktarır. Dayanıklı malzemeler kullandığımız için kaşeniz uzun süre deforme olmaz, mürekkep sızdırmaz ve netliğini korur.

## Kurumsal Logolu Özel Tasarım

Sadece standart yazı değil, logonuzun tam olarak kaşeye aktarılmasını istiyorsanız özel tasarım hizmeti sunuyoruz. Logo vektör dosyanız yoksa bile, mevcut logonuzu optimize ederek kaşeye uygun hale getiriyoruz. Renkli kaşe taleplerinde de çözüm üretiyoruz.

**Alanya Kale Matbaa\'da ürettiğimiz kaşeler:**
- Net ve keskin baskı kalitesi
- Dayanıklı gövde ve yastık
- Otomatik ve klasik seçenekler
- Kurumsal logolu özel üretim
- Hızlı teslimat (çoğu modelde aynı gün veya ertesi gün)

## Kimler Tercih Ediyor?

Oteller, restoranlar, tur şirketleri, emlak ofisleri, muhasebe büroları, avukatlık ofisleri, inşaat firmaları ve esnaf… Kısaca Alanya\'da faaliyet gösteren her türlü işletme. Özellikle sezonluk işletmeler için hızlı üretim ve uygun fiyat avantajı sağlıyoruz.

Kaşe sipariş sürecimiz oldukça basittir. WhatsApp üzerinden logonuzu ve metinleri gönderin, ölçü ve model konusunda size öneride bulunalım, onayınızın ardından üretimi başlatalım. Onaylı tasarımdan sonra üretim süresi genellikle 1 iş günüdür.

Alanya\'da kaliteli kaşe arıyorsanız, "ucuz" ama bozulan, yazısı silinen modeller yerine uzun ömürlü ve profesyonel görünen bir ürün tercih etmenizi öneririz. Çünkü kaşe, işletmenizin görünen yüzlerinden biridir.

Hemen teklif almak ve örnekleri görmek için bize ulaşın. Alanya Kale Matbaa olarak kaşenizi en iyi şekilde üretmeye hazırız.`,
    faqs: [
      {
        question: 'Otomatik kaşe mürekkebi ne kadar dayanır?',
        answer: 'Yoğun kullanıma göre 5.000-10.000 baskı.'
      },
      {
        question: 'Aynı gün teslimat var mı?',
        answer: 'Standart modellerde çoğu zaman mümkün.'
      }
    ]
  },
  {
    id: 'brosur-baski',
    slug: 'brosur-baski',
    tag: 'Broşür Baskısı',
    title: 'Alanya\'da Profesyonel Broşür Baskı',
    metaTitle: 'Alanya\'da Profesyonel Broşür Baskı | Canlı Renkler & Premium Kalite',
    subtitle: 'Alanya\'da işletmenizi tanıtmanın en etkili yollarından biri kaliteli bir broşürdür.',
    image: '/images/services/brosur26.jpg',
    content: `Alanya\'da işletmenizi tanıtmanın en etkili yollarından biri kaliteli bir broşürdür. Turistlerin yoğun olduğu, rekabetin yüksek olduğu bu şehirde el ilanı veya broşür, doğru tasarlandığında ve doğru basıldığında müşteri getiren güçlü bir pazarlama aracıdır. Alanya Kale Matbaa olarak 350 gr\'a kadar kalın kağıt seçenekleriyle, canlı renkli ve çeşitli katlama seçenekleriyle profesyonel broşür baskısı yapıyoruz.

Broşür, sadece bilgi vermek için değil, markanızı hissettirmek için de kullanılır. Mat veya parlak selefon, özel katlama, kalın kağıt ve yüksek çözünürlüklü baskı ile eline alan kişi "bu firma kaliteli" demelidir. Biz tam olarak bunu hedefliyoruz.

## Neden Kaliteli Broşür Önemli?

Alanya\'da özellikle oteller, restoranlar, tekne turları, spa merkezleri, emlak ofisleri ve tur şirketleri broşür kullanır. Ucuz ve soluk renkli bir broşür, markanıza zarar verebilir. Canlı, doygun renkler ve kalın kağıt ise profesyonellik algısını yükseltir.

Konica Minolta AccurioPress C4065 dijital baskı makinemiz sayesinde:
- Canlı ve doygun renkler
- Yüksek çözünürlük
- 350 gr\'a kadar kalın kağıt
- Çeşitli katlama seçenekleri (tek kırım, çift kırım, Z katlama, accordion vb.)
- Küçük ve büyük adetlerde aynı kalite

Dijital baskı teknolojisi sayesinde az adetli siparişlerde bile ofset kalitesine yakın sonuç alırsınız. Ayrıca acil ihtiyaçlarınız için aynı gün veya ertesi gün teslimat imkânı sunuyoruz.

## Kağıt ve Yüzey Seçenekleri

- 130 gr, 170 gr, 200 gr, 300 gr ve 350 gr kuşe
- Mat veya parlak selefon
- Özel kesim ve yuvarlatılmış köşe seçenekleri

Tasarımınız yoksa da yardımcı oluyoruz. Mevcut logonuz ve metinlerinizle sade, etkili ve Alanya\'ya uygun broşür tasarımları hazırlayabiliyoruz.

## Kimler İçin İdeal?

- Tekne turu ve transfer firmaları
- Restoran ve kafe işletmeleri
- Oteller ve pansiyonlar
- Emlak ofisleri
- Güzellik merkezleri ve spa\'lar
- Etkinlik ve organizasyon şirketleri

Broşürünüzü hem Türkçe hem İngilizce, Rusça veya Almanca olarak çok dilli basabiliyoruz. Turizm şehri olmanın avantajını bu şekilde kullanabilirsiniz.

Sipariş süreci basit: Tasarımınızı gönderin veya tasarım desteği isteyin, kağıt ve katlama seçimini birlikte yapalım, onay sonrası baskıya geçelim. Küçük adetlerde bile ekonomik çözümler sunuyoruz.

Alanya\'da broşür baskısı yaptırırken sadece fiyata değil, kağıt kalitesine, renk doygunluğuna ve teslimat hızına da bakın. Çünkü eline alan kişi markanızı o broşürle hatırlayacak.

Hemen teklif alın, örnekleri görün ve işletmenizi en iyi şekilde tanıtan broşürlere sahip olun.`,
    faqs: [
      {
        question: 'En düşük adet nedir?',
        answer: 'Dijital baskı sayesinde 50 adetten başlıyoruz.'
      },
      {
        question: 'Aynı gün teslimat mümkün mü?',
        answer: 'Acil işlerde çoğu zaman evet.'
      },
      {
        question: 'Çok dilli broşür basabiliyor musunuz?',
        answer: 'Evet.'
      }
    ]
  },
  {
    id: 'davetiye-baski',
    slug: 'davetiye-baski',
    tag: 'Davetiye Baskısı',
    title: 'Alanya\'da Şık Davetiye Baskı',
    metaTitle: 'Alanya\'da Şık Davetiye Baskı | Düğün, Nişan, Sünnet & Kurumsal',
    subtitle: 'Alanya\'da düğün, nişan, sünnet veya kurumsal davet organize ediyorsanız, davetiyeniz etkinliğinizin ilk izlenimidir.',
    image: '/images/services/dugundavetiyesi26.jpg',
    content: `Alanya\'da düğün, nişan, sünnet veya kurumsal davet organize ediyorsanız, davetiyeniz etkinliğinizin ilk izlenimidir. Alanya Kale Matbaa olarak şık ve unutulmaz davetiyeler üretiyoruz.

Davetiye sadece bir bilgilendirme kâğıdı değildir. Misafirlerinize verdiğiniz değerin, zevkinizin ve organizasyonunuzun kalitesinin göstergesidir. Özellikle Alanya gibi özel günlerin yoğun yaşandığı bir şehirde, davetiyenizin kalitesi davetlilerin aklında kalır.

## Hangi Tür Davetiyeler Basıyoruz?

- Düğün davetiyeleri
- Nişan ve söz davetiyeleri
- Sünnet davetiyeleri
- Kurumsal davetiyeler (açılış, yemek, konferans, gala)
- Doğum günü ve özel gün davetiyeleri

Konica Minolta AccurioPress C4065 ile yüksek çözünürlüklü ve renk doğruluğu yüksek baskı yapıyoruz. Böylece tasarımınızdaki renkler ekranda gördüğünüz gibi çıkar.

## Acil Davetiye İhtiyacı

Alanya\'da sıkça karşılaşılan bir durum: Son anda davetiye bastırma ihtiyacı. C4065 dijital baskı altyapımız sayesinde acil davetiye siparişlerinde hızlı çözüm sunuyoruz. Tasarımınız hazırsa aynı gün veya ertesi gün teslimat mümkün olabiliyor.

## Tasarım Desteği

Tasarımınız yoksa endişelenmeyin. İsimler, tarih, mekan ve fotoğraflarınızı ilettiğinizde size birkaç alternatif tasarım sunabiliyoruz. Özellikle klasik, modern, boho, minimal ve lüks tarzlarda hazır şablonlarımız mevcut.

Alanya\'da davetiye bastırırken dikkat edilmesi gerekenler:
- Kağıt gramajı (ince kağıt ucuz görünür)
- Selefon kalitesi
- Baskı netliği
- Teslimat süresi

Biz tüm bu noktalarda kaliteyi ön planda tutuyoruz. Çünkü davetiyeniz, o özel gününüzün ilk dokunuşudur.

Sipariş vermek çok kolay. WhatsApp\'tan örneğinizi veya isteklerinizi gönderin, size en uygun seçenekleri sunalım. Alanya Kale Matbaa olarak davetiyelerinizi özenle basıyor, zamanında teslim ediyoruz.`,
    faqs: [
      {
        question: 'Minimum adet nedir?',
        answer: '50 adetten başlıyoruz.'
      },
      {
        question: 'Zarf da basıyor musunuz?',
        answer: 'Evet.'
      },
      {
        question: 'Acil sipariş alıyor musunuz?',
        answer: 'Evet, yoğunluğa göre.'
      }
    ]
  },
  {
    id: 'kartvizit-baski',
    slug: 'kartvizit-baski',
    tag: 'Kartvizit Baskısı',
    title: 'Alanya\'da Profesyonel Kartvizit Baskı',
    metaTitle: 'Alanya\'da Profesyonel Kartvizit Baskı | 350 gr, Selefon, Lak',
    subtitle: 'Alanya\'da iş dünyasında ilk izlenim çoğu zaman kartvizitle başlar.',
    image: '/images/services/kalınkartvizit26.jpg',
    content: `Alanya\'da iş dünyasında ilk izlenim çoğu zaman kartvizitle başlar. İnce, soluk ve sıradan bir kartvizit, sizin ve firmanızın kalitesini yanlış yansıtır. Alanya Kale Matbaa olarak 350 gr kalın karton, selefon, lak, kabartma ve özel kesim seçenekleriyle en kaliteli kartvizitleri basıyoruz.

Kartvizit, cebinizde taşıdığınız en küçük ama en etkili pazarlama aracıdır. Özellikle turizm, emlak, restoran, sağlık ve hizmet sektöründe faaliyet gösterenler için kaliteli bir kartvizit, güven ve profesyonellik algısını doğrudan etkiler.

## Neden 350 gr Kartvizit?

Standart kartvizitler genellikle 300 gr civarındadır. Biz 350 gr kalın karton kullanarak kartvizitin elinizde "kaliteli" hissettirmesini sağlıyoruz. Üzerine mat veya parlak selefon uyguladığımızda hem daha şık görünür hem de leke tutmaz, uzun ömürlü olur.

## Ek Seçeneklerimiz

- Spot lak (logonuzu parlatma)
- Kabartma (emboss) uygulaması
- Özel kesim (yuvarlak köşe, oval, figürlü)
- Çift yön baskı
- Altın/gümüş yaldız efekti

C4065 dijital baskı makinemiz sayesinde renkler canlı, yazılar net ve detaylar keskindir. Logonuzun ince çizgileri bile bozulmadan basılır.

## Kimler İçin Uygun?

- Otel ve restoran yöneticileri
- Emlak danışmanları
- Tur ve transfer firmaları
- Doktor, avukat, muhasebeci gibi serbest meslek sahipleri
- Güzellik merkezi ve spa işletmeleri
- İnşaat ve tadilat firmaları

Alanya\'da özellikle yabancı müşterilerle çalışanlar için İngilizce, Rusça, Almanca kartvizit de basıyoruz. Çok dilli kartvizit, turizm şehrinde büyük avantaj sağlar.

## Sipariş ve Teslimat

Tasarımınız hazırsa genellikle 1 iş günü içinde teslim edebiliyoruz. Tasarım yoksa, mevcut logonuz ve bilgilerinizle sade ve etkili kartvizit tasarımları hazırlıyoruz. Minimum adet 100\'den başlar, büyük adetlerde birim fiyat düşer.

Kartvizitinizi bastırırken sadece fiyata bakmayın. Elinize aldığınızda "bu kaliteli bir firma" dedirtecek bir ürün tercih edin. Çünkü kartvizit, sizin adınıza konuşur.

Alanya Kale Matbaa farkıyla profesyonel kartvizitlerinizi hemen sipariş edin. Teklif almak ve örnekleri görmek için WhatsApp\'tan yazmanız yeterli.`,
    faqs: [
      {
        question: 'Mat mı parlak mı selefon daha iyi?',
        answer: 'Kullanım amacına göre değişir, size öneride bulunuruz.'
      },
      {
        question: 'Kabartma ne kadar ek süre ekler?',
        answer: 'Genellikle +1 gün.'
      },
      {
        question: 'Aynı gün teslimat mümkün mü?',
        answer: 'Standart modellerde yoğunluğa göre evet.'
      }
    ]
  },
  {
    id: 'afis-baski',
    slug: 'afis-baski',
    tag: 'Afiş Baskısı',
    title: 'Alanya\'da Afiş Baskı',
    metaTitle: 'Alanya\'da Afiş Baskı | 33x48 & 48x68 cm Yüksek Kalite',
    subtitle: 'Alanya\'da etkinlik, kampanya, menü veya tanıtım afişi ihtiyacınız olduğunda kaliteli ve hızlı baskı büyük fark yaratır.',
    image: '/images/services/afis26.jpg',
    content: `Alanya\'da etkinlik, kampanya, menü veya tanıtım afişi ihtiyacınız olduğunda kaliteli ve hızlı baskı büyük fark yaratır. Alanya Kale Matbaa olarak 33x48 cm ve 48x68 cm ebatlarında, 105-170 gr kuşe kağıt ile yüksek çözünürlüklü afiş baskısı yapıyoruz.

Afiş, sokakta, vitrinde, otel lobisinde veya etkinlik alanında dikkat çekmek için kullanılır. Soluk renkli, düşük çözünürlüklü bir afiş, mesajınızı zayıf iletir. Canlı renkler ve net baskı ise hem profesyonel görünür hem de daha fazla kişiye ulaşır.

## Ebat ve Kağıt Seçenekleri

- 33x48 cm (standart A3\'e yakın)
- 48x68 cm (daha büyük, daha dikkat çekici)
- 105 gr, 135 gr ve 170 gr kuşe kağıt

C4065 dijital baskı teknolojimiz sayesinde afişlerinizde yüksek çözünürlük ve canlı renk kalitesi elde ediyoruz. Özellikle fotoğraflı afişlerde ten renkleri, gökyüzü ve yiyecek görselleri gerçekçi çıkar.

## Hangi Alanlarda Kullanılır?

- Restoran ve kafe menü afişleri
- Tekne turu ve aktivite tanıtımları
- Otel ve pansiyon kampanyaları
- Etkinlik ve konser afişleri
- Seçim, duyuru ve bilgilendirme afişleri
- Mağaza vitrin afişleri

Alanya\'da sezonluk işletmeler için hızlı afiş baskısı kritik öneme sahiptir. Biz de bu ihtiyacı bilerek acil afiş siparişlerinde aynı gün teslimat seçeneği sunuyoruz.

## Tasarım ve Baskı Süreci

Tasarımınız hazırsa dosyanızı (PDF, AI, PSD veya yüksek çözünürlüklü JPG) gönderin, baskıya alalım. Tasarım yoksa, metin ve görsellerinizi ilettiğinizde size uygun afiş tasarımı da hazırlayabiliyoruz. Özellikle turizm odaklı, dikkat çekici ve okunabilir tasarımlar konusunda deneyimliyiz.

Baskı sonrası afişlerinizi rulo halinde veya katlanmış olarak teslim edebiliyoruz. Büyük adetlerde birim fiyat avantajı sağlıyoruz.

Alanya\'da afiş bastırırken dikkat edilmesi gerekenler:
- Kağıt gramajı (çok ince kağıt kolay yırtılır ve ucuz görünür)
- Renk doygunluğu
- Çözünürlük (düşük çözünürlük pikselli görünür)
- Teslimat hızı

Biz bu dört noktada da yüksek standart uyguluyoruz. Çünkü afişiniz, markanızın sokaktaki yüzüdür.

Hemen teklif alın, örnek afişleri görün ve işletmenizi en iyi şekilde tanıtan afişlere sahip olun. WhatsApp\'tan yazmanız yeterli.`,
    faqs: [
      {
        question: 'En düşük adet nedir?',
        answer: '10 adetten başlıyoruz.'
      },
      {
        question: 'Açık hava için dayanıklı afiş basıyor musunuz?',
        answer: 'Kuşe kağıt iç mekân ve kısa süreli dış mekân için uygundur, uzun süreli dış mekân için folyo öneriyoruz.'
      },
      {
        question: 'Aynı gün teslimat var mı?',
        answer: 'Evet, acil işlerde mümkün.'
      }
    ]
  },
  {
    id: 'amerikan-servis-baski',
    slug: 'amerikan-servis-baski',
    tag: 'Amerikan Servis',
    title: 'Alanya\'da Amerikan Servis Baskı',
    metaTitle: 'Alanya\'da Amerikan Servis Baskı | Restoran & Kafe',
    subtitle: 'Alanya\'da restoran, kafe, otel ve tatil köylerinin en çok kullandığı baskı ürünlerinden biri Amerikan servistir.',
    image: '/images/services/amerikanservis26.jpg',
    content: `Alanya\'da restoran, kafe, otel ve tatil köylerinin en çok kullandığı baskı ürünlerinden biri Amerikan servistir. Misafir masaya oturduğu anda eline aldığı, yemeğini yerken üzerinde gördüğü ve hijyen sağlayan bu ürün, markanızın sessiz elçisidir. Alanya Kale Matbaa olarak 28x40 cm standart ebatta, 105 gr kuşe kağıt üzerine şık, canlı renkli ve hijyenik Amerikan servis baskısı yapıyoruz.

Amerikan servis sadece bir peçete altına konan kâğıt değildir. Doğru tasarlandığında menünüzü tanıtır, kampanyanızı duyurur, sosyal medya hesaplarınızı gösterir ve marka algınızı yükseltir. Özellikle Alanya gibi turizm şehrinde yabancı misafirlerin yoğun olduğu işletmelerde, kaliteli basılmış bir Amerikan servis profesyonellik hissi yaratır.

## Neden Kaliteli Amerikan Servis Önemli?

İnce ve soluk renkli Amerikan servisler, yemek sırasında kolay yırtılır, mürekkep bulaşır veya ucuz görünür. Biz 105 gr kuşe kağıt kullanarak hem dayanıklılık hem de baskı kalitesi sağlıyoruz. Canlı renkler sayesinde logonuz, yemek görselleriniz ve metinleriniz net ve çekici çıkar.

C4065 dijital baskı makinemiz ile:
- Yüksek çözünürlüklü baskı
- Canlı ve doygun renkler
- Tek veya çift yön baskı
- Hızlı üretim (acil siparişlerde aynı gün teslimat imkânı)

## Tasarım ve Kullanım Alanları

Restoran menüsü, günlük yemek listesi, içecek önerileri, QR kod ile dijital menü yönlendirmesi, sosyal medya hesapları veya özel gün kutlamaları… Hepsi Amerikan servise basılabilir. Çok dilli (Türkçe + İngilizce / Rusça) tasarımlar özellikle Alanya\'da büyük avantaj sağlar.

Sipariş sürecimiz basittir. Tasarımınızı gönderin veya logonuz + metinlerinizle birlikte tasarım desteği isteyin. Onay sonrası hızlıca baskıya alıyoruz. Küçük adetlerden yüksek adetlere kadar aynı kaliteyi sunuyoruz.

Alanya\'da Amerikan servis bastırırken dikkat edilmesi gerekenler: kağıt gramajı, renk doygunluğu, yırtılma direnci ve hijyen. Biz bu dört noktada da yüksek standart uyguluyoruz.

Hemen teklif alın, örnekleri görün ve masalarınızı markanızla buluşturalım. WhatsApp üzerinden hızlıca iletişime geçebilirsiniz.`,
    faqs: [
      {
        question: 'Minimum adet nedir?',
        answer: '50 adetten başlıyoruz.'
      },
      {
        question: 'Çift yön baskı mümkün mü?',
        answer: 'Evet.'
      },
      {
        question: 'Aynı gün teslimat var mı?',
        answer: 'Yoğunluğa göre mümkün.'
      }
    ]
  },
  {
    id: 'antetli-kagit',
    slug: 'antetli-kagit',
    tag: 'Antetli Kağıt',
    title: 'Alanya\'da Profesyonel Antetli Kağıt',
    metaTitle: 'Alanya\'da Antetli Kağıt Baskı | Kurumsal Yazışma',
    subtitle: 'Kurumsal yazışmalarınızın, tekliflerinizin ve resmi evraklarınızın ilk sayfası antetli kâğıttır.',
    image: '/images/services/antetli26.jpg',
    content: `Kurumsal yazışmalarınızın, tekliflerinizin, faturalarınızın ve resmi evraklarınızın ilk sayfası antetli kâğıttır. Alanya\'da faaliyet gösteren işletmeler için profesyonel antetli kâğıt, marka imajının önemli bir parçasıdır. Alanya Kale Matbaa olarak A4 (21x29,7 cm) ebatta, 90 gr 1. hamur kâğıt üzerine net logo ve renk baskılı antetli kâğıt üretiyoruz.

Antetli kâğıt, firmanızın resmi yüzüdür. Logonuzun, unvanınızın, adres ve iletişim bilgilerinizin net ve doğru basılması gerekir. Soluk veya kaymış baskı, profesyonellik algısını olumsuz etkiler. Biz C4065 dijital baskı teknolojimizle yüksek renk doğruluğu ve keskin detay sağlıyoruz.

## Teknik Özellikler

- A4 standart ebat
- 90 gr 1. hamur kâğıt (yazıcıya ve fotokopiye uygun)
- Tek yön veya çift yön baskı
- Logo + iletişim bilgileri + vergi bilgileri
- Kurumsal renklerinize sadık kalma

Dijital baskı sayesinde az adetli siparişlerde bile ofset kalitesine yakın sonuç alırsınız. Ayrıca acil ihtiyaçlarınız için hızlı üretim imkânı sunuyoruz.

## Kimler Kullanır?

Oteller, tur şirketleri, emlak ofisleri, muhasebe büroları, avukatlık ofisleri, inşaat firmaları, restoran zincirleri ve tüm kurumsal işletmeler. Özellikle yabancı müşterilerle çalışan firmalar için İngilizce veya çok dilli antetli kâğıt da basıyoruz.

Tasarım sürecimizde mevcut logonuzu optimize ediyor, kurumsal kimliğinize uygun yerleşim önerileri sunuyoruz. Onayınızın ardından baskıya geçiyoruz. Genellikle 1-2 iş günü içinde teslimat gerçekleşir.

Alanya\'da antetli kâğıt bastırırken kaliteli kâğıt ve net baskı tercih edin. Çünkü eline alan kişi, firmanızı o kâğıt üzerinden değerlendirir.

Hemen teklif alın ve kurumsal yazışmalarınızı profesyonel hale getirin.`,
    faqs: [
      {
        question: 'Yazıcıdan çıktı alınca sorun olur mu?',
        answer: '90 gr 1. hamur kâğıt yazıcı ve fotokopi için uygundur.'
      },
      {
        question: 'Minimum adet?',
        answer: '50 adetten başlıyoruz.'
      },
      {
        question: 'Acil üretim mümkün mü?',
        answer: 'Evet.'
      }
    ]
  },
  {
    id: 'bloknot-baski',
    slug: 'bloknot-baski',
    tag: 'Bloknot Baskısı',
    title: 'Alanya\'da Bloknot Baskı',
    metaTitle: 'Alanya\'da Kurumsal Bloknot Baskı | Promosyon',
    subtitle: 'Alanya\'da oteller, restoranlar, ofisler ve etkinliklerde en çok tercih edilen promosyon ürünlerinden biri kurumsal bloknottur.',
    image: '/images/services/bloknot26.jpg',
    content: `Alanya\'da oteller, restoranlar, ofisler ve etkinliklerde en çok tercih edilen promosyon ürünlerinden biri kurumsal bloknottur. Alanya Kale Matbaa olarak 50 yapraklı, tutkallı, spiral ve kapaklı modellerde, tek renkten 4 renge kadar bloknot baskısı yapıyoruz.

Bloknot, hem işlevsel hem de marka bilincini güçlendiren bir üründür. Misafirlerinizin veya müşterilerinizin cebine, çantasına girer ve uzun süre kullanılır. Kaliteli basılmış bir bloknot, firmanızın adını sürekli hatırlatır.

## Model ve Özellikler

- 50 yaprak standart
- Tutkallı, spiral veya kapaklı seçenekler
- Tek renk, 2 renk veya 4 renk baskı
- Kapak için kalın kuşe veya özel kâğıt
- Kurumsal logo ve tasarım

Kapaklı modellerde selefon veya lak uygulaması ile daha premium bir görünüm elde edilebilir. Spiral modeller ise sayfaların kolay çevrilmesi açısından tercih edilir.

## Kullanım Alanları

Otel odaları, restoran masaları, toplantı salonları, seminerler, fuarlar ve promosyon setleri. Özellikle Alanya\'daki oteller ve tatil köyleri için özel tasarım bloknotlar büyük talep görür.

Sipariş sürecinde tasarımınızı gönderin veya logonuzla birlikte sade bir tasarım hazırlayalım. Onay sonrası hızlı üretim yapıyoruz. Küçük adetlerden yüksek adetlere kadar esnek çözümler sunuyoruz.

Alanya\'da bloknot bastırırken kâğıt kalitesi, baskı netliği ve ciltleme kalitesine dikkat edin. Biz bu noktalarda yüksek standart uyguluyoruz.

Hemen teklif alın, markanızı her notta yaşatın.`,
    faqs: [
      {
        question: 'Minimum adet nedir?',
        answer: '250 adetten başlıyoruz.'
      },
      {
        question: 'Kapak selefonlu olabilir mi?',
        answer: 'Evet.'
      },
      {
        question: 'Acil üretim var mı?',
        answer: 'Yoğunluğa göre mümkün.'
      }
    ]
  }
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find(service => service.slug === slug);
}

export function getAllServices(): Service[] {
  return services;
}
