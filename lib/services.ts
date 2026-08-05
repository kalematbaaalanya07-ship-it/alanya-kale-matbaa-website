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

Hemen teklif alın, markanızı her notta yaşatın.`,
    faqs: [
      { question: 'Minimum adet nedir?', answer: '250 adetten başlıyoruz.' },
      { question: 'Kapak selefonlu olabilir mi?', answer: 'Evet.' },
      { question: 'Acil üretim var mı?', answer: 'Yoğunluğa göre mümkün.' }
    ]
  },
  {
    id: 'cepli-dosya',
    slug: 'cepli-dosya',
    tag: 'Cepli Dosya',
    title: 'Alanya\'da Cepli Sunum Dosyası',
    metaTitle: 'Alanya\'da Cepli Dosya Baskı | Selefonlu, Laklı, Emboslu',
    subtitle: 'Kurumsal sunumlarınızda, teklif dosyalarınızda ve müşteri görüşmelerinde kullandığınız cepli dosya, profesyonelliğinizin göstergesidir.',
    image: '/images/services/ceplidosya26.jpg',
    content: `Kurumsal sunumlarınızda, teklif dosyalarınızda ve müşteri görüşmelerinde kullandığınız cepli dosya, profesyonelliğinizin göstergesidir. Alanya Kale Matbaa olarak selefonlu, laklı ve emboslu cepli sunum dosyaları üretiyoruz.

Cepli dosya, içine koyduğunuz evrakları korur ve aynı zamanda firmanızı tanıtır. Kaliteli bir cepli dosya, müşterinize "bu firma işini ciddiye alıyor" mesajı verir.

## Özellikler

- Selefonlu ve laklı yüzey
- Embos (kabartma) uygulaması
- Tek veya çift yön baskı
- Standart ve özel ebatlar
- Dayanıklı karton yapı

C4065 ile yüksek kaliteli baskı yapıyor, logonuzu ve kurumsal renklerinizi net aktarıyoruz. Özellikle oteller, emlak ofisleri, tur şirketleri ve kurumsal firmalar tarafından tercih edilir.

Tasarım ve üretim sürecimiz hızlıdır. Onay sonrası genellikle birkaç iş günü içinde teslim ediyoruz.

Hemen teklif alın.`,
    faqs: [
      { question: 'Minimum adet?', answer: '100 adetten başlıyoruz.' },
      { question: 'Embos uygulaması ne kadar ek süre ekler?', answer: 'Genellikle +1-2 gün.' },
      { question: 'Acil üretim mümkün mü?', answer: 'Yoğunluğa göre evet.' }
    ]
  },
  {
    id: 'etiket-cikartma-baski',
    slug: 'etiket-cikartma-baski',
    tag: 'Etiket & Çıkartma',
    title: 'Alanya\'da Etiket ve Çıkartma Baskı',
    metaTitle: 'Alanya\'da Etiket ve Çıkartma Baskı | Yapışkanlı Özel Ebat',
    subtitle: 'Ürün ambalajlarınız, hediye paketleriniz veya promosyon malzemeleriniz için özel etiket ve çıkartma ihtiyacınız varsa doğru yerdesiniz.',
    image: '/images/services/etiket26.jpg',
    content: `Ürün ambalajlarınız, hediye paketleriniz, cam şişeleriniz veya promosyon malzemeleriniz için özel etiket ve çıkartma ihtiyacınız varsa doğru yerdesiniz. Alanya Kale Matbaa olarak 5x8 cm\'den 20x32 cm\'ye kadar özel ebatlarda, parlak selefonlu veya selefonsuz yapışkanlı etiket üretiyoruz.

Etiket, ürününüzün kimliğidir. Kaliteli basılmış bir etiket, ürünün değerini yükseltir. Soluk veya kolay sökülen etiket ise tam tersi etki yaratır.

## Seçeneklerimiz

- Özel ebat (5x8 – 20x32 cm ve üzeri)
- Parlak selefonlu
- Selefonsuz yapışkanlı
- Dayanıklı yapışkan
- Su ve neme dayanıklı seçenekler (folyo ile)

Dijital baskı ve hassas kesim ile istediğiniz şekilde etiket basıyoruz. Restoranlar, hediyelik eşya dükkânları, kozmetik ve gıda işletmeleri için idealdir.

Hemen tasarımınızı gönderin, teklif alalım.`,
    faqs: [
      { question: 'Minimum adet nedir?', answer: '100 adetten başlıyoruz.' },
      { question: 'Su geçirmez etiket basılır mı?', answer: 'Evet, folyo ile mümkün.' },
      { question: 'Özel şekil kesilebilir mi?', answer: 'Evet.' }
    ]
  },
  {
    id: 'karton-canta',
    slug: 'karton-canta',
    tag: 'Karton Çanta',
    title: 'Alanya\'da Karton Çanta Baskı',
    metaTitle: 'Alanya\'da Karton Çanta Baskı | Hediyelik & Kurumsal',
    subtitle: 'Alanya\'da hediyelik eşya dükkânları, butikler, oteller ve etkinlikler için en çok tercih edilen ambalaj ürünlerinden biri karton çantadır.',
    image: '/images/services/kartoncanta26.jpg',
    content: `Alanya\'da hediyelik eşya dükkânları, butikler, oteller, restoranlar ve etkinlik organizasyonları için en çok tercih edilen ambalaj ürünlerinden biri karton çantadır. Alanya Kale Matbaa olarak 11x15 cm\'den 55x38 cm\'ye kadar farklı ebatlarda, 4 renk baskılı, dayanıklı karton çanta üretimi yapıyoruz.

Karton çanta sadece bir taşıma aracı değildir. Müşterinizin elinde sokağa çıktığında markanızı tanıtan yürüyen bir reklam panosudur.

## Ebat ve Özellikler

- 11x15 cm\'den 55x38 cm\'ye kadar geniş ebat yelpazesi
- 4 renk baskı
- Dayanıklı karton yapı
- İpli sağlam saplar

## Kimler Tercih Ediyor?

Butikler, hediyelik eşya mağazaları, otel hediye shop\'ları, restoranlar (paket servis için), etkinlik firmaları ve kurumsal hediye veren şirketler. Alanya\'da turist yoğunluğu nedeniyle İngilizce, Rusça veya Almanca yazılı çantalar da sık talep görür.

Hemen teklif alın, markanızı her adımda taşıyın.`,
    faqs: [
      { question: 'Minimum adet nedir?', answer: '500 adetten başlıyoruz.' },
      { question: 'Saplar sağlam mı?', answer: 'Evet, ip sap kullanıyoruz.' },
      { question: 'Çok dilli baskı yapılır mı?', answer: 'Evet.' }
    ]
  },
  {
    id: 'kup-bloknot',
    slug: 'kup-bloknot',
    tag: 'Küp Bloknot',
    title: 'Alanya\'da Küp Bloknot Baskı',
    metaTitle: 'Alanya\'da Küp Bloknot Baskı | 77x77 mm Masaüstü',
    subtitle: 'Masaüstü kullanım için en pratik ve şık not alma araçlarından biri küp bloknottur.',
    image: '/images/services/bloknot26.jpg',
    content: `Masaüstü kullanım için en pratik ve şık not alma araçlarından biri küp bloknottur. Alanya Kale Matbaa olarak 77x77 mm standart ebatta, 250-800 yapraklı, parlak selefonlu masaüstü küp bloknot üretimi yapıyoruz.

Küp bloknot, hem ofis hem de otel resepsiyonu, restoran kasası veya toplantı masası için idealdir. Küçük alanı sayesinde masada yer kaplamaz, yaprakları kolay kopar ve markanızı her notta hatırlatır.

## Özellikler

- 77x77 mm standart ebat
- 250, 400, 500 veya 800 yaprak seçenekleri
- Parlak selefonlu kapak
- 4 renk baskı

Kapak tasarımında logonuzu, sloganınızı veya özel bir görseli kullanarak kurumsal kimliğinizi güçlendirebilirsiniz.

## Kullanım Alanları

Oteller, restoranlar, ofisler, klinikler, emlak ofisleri ve promosyon setleri. Özellikle Alanya\'daki oteller, oda veya resepsiyon için küp bloknot siparişlerini sık verir.

Hemen teklif alın.`,
    faqs: [
      { question: 'Yaprak sayısı değiştirilebilir mi?', answer: 'Evet, 250-800 arası.' },
      { question: 'Kapak mat olabilir mi?', answer: 'Evet.' },
      { question: 'Minimum adet?', answer: '250 adetten başlıyoruz.' }
    ]
  },
  {
    id: 'magnet-baski',
    slug: 'magnet-baski',
    tag: 'Magnet Baskı',
    title: 'Alanya\'da Promosyon Magnet Baskı',
    metaTitle: 'Alanya\'da Buzdolabı Magnet Baskı | Promosyon & Hediyelik',
    subtitle: 'Buzdolabı magneti, hem dekoratif hem de etkili bir promosyon ürünüdür.',
    image: '/images/services/kase26.jpeg',
    content: `Buzdolabı magneti, hem dekoratif hem de etkili bir promosyon ürünüdür. Alanya Kale Matbaa olarak oval, özel kesim ve standart ebatlarda kaliteli buzdolabı ve promosyon magnetleri üretiyoruz.

Magnet, müşterinizin her gün gördüğü bir üründür. Kaliteli basılmış bir magnet, markanızı sürekli hatırlatır ve uzun süre saklanır.

## Özellikler

- Oval, yuvarlak, kare ve özel kesim
- Standart ve özel ebat seçenekleri
- Canlı renkli baskı
- Güçlü mıknatıs
- Dayanıklı yüzey

C4065 dijital baskı ile yüksek çözünürlük sağlıyoruz. Özellikle restoranlar, oteller, hediyelik eşya dükkânları ve etkinlik firmaları tarafından tercih edilir.

Tasarımınızı gönderin, size en uygun ebat ve kesim önerisini sunalım.

Hemen teklif alın.`,
    faqs: [
      { question: 'Özel şekil kesilebilir mi?', answer: 'Evet.' },
      { question: 'Minimum adet?', answer: '500 adetten başlıyoruz.' },
      { question: 'Aynı gün üretim mümkün mü?', answer: 'Yoğunluğa göre.' }
    ]
  },
  {
    id: 'tesekkur-karti',
    slug: 'tesekkur-karti',
    tag: 'Teşekkür Kartı',
    title: 'Alanya\'da Teşekkür Kartı Baskı',
    metaTitle: 'Alanya\'da Teşekkür Kartı Baskı | 350 gr Selefonlu',
    subtitle: 'E-ticaret yapan veya paket gönderen işletmeler için teşekkür kartı, müşteri sadakatini artırmanın en etkili ve düşük maliyetli yollarından biridir.',
    image: '/images/services/kalınkartvizit26.jpg',
    content: `E-ticaret yapan veya paket gönderen işletmeler için teşekkür kartı, müşteri sadakatini artırmanın en etkili ve düşük maliyetli yollarından biridir. Alanya Kale Matbaa olarak 350 gr kalın kuşe kâğıt üzerine yüksek çözünürlüklü, selefonlu teşekkür kartı baskısı yapıyoruz.

Kargoladığınız her siparişin içine ekleyeceğiniz şık bir teşekkür kartı, müşterinize değer verdiğinizi gösterir ve sizi rakiplerinizden ayırır.

## Özellikler

- 350 gr kalın kuşe kâğıt
- Yüksek çözünürlüklü canlı dijital baskı
- Mat veya parlak selefon
- Özel kesim ve yuvarlatılmış köşe seçenekleri
- Çift yön baskı imkânı

Kartın ön yüzünde teşekkür mesajı, arka yüzünde ise Instagram, web sitesi veya indirim kodu gibi bilgiler yer alabilir.

Hemen teklif alın, her pakete marka değeri katın.`,
    faqs: [
      { question: 'Minimum adet nedir?', answer: '50 adetten başlıyoruz.' },
      { question: 'QR kod basılabilir mi?', answer: 'Evet.' },
      { question: 'Aynı gün teslimat?', answer: 'Yoğunluğa göre mümkün.' }
    ]
  },
  {
    id: 'dergi-baski',
    slug: 'dergi-baski',
    tag: 'Dergi Baskısı',
    title: 'Alanya\'da Kurumsal Dergi Baskısı',
    metaTitle: 'Alanya\'da Kurumsal & Süreli Dergi Baskısı | Az Adet Dijital',
    subtitle: 'Şirket dergisi, otel dergisi, katalog dergi veya süreli yayın basmak istiyorsanız doğru adrestesiniz.',
    image: '/images/services/katalog26.jpeg',
    content: `Şirket dergisi, otel dergisi, katalog dergi veya süreli yayın basmak istiyorsanız doğru adrestesiniz. Alanya Kale Matbaa olarak Konica Minolta AccurioPress C4065 dijital baskı teknolojimiz ile az adetli veya yüksek adetli dergi taleplerinizi sıfır hata ile üretiyoruz.

80 gr\'dan 350 gr\'a kadar kağıt seçenekleri, A4, A5, B5 ve özel boyut imkânları sunuyoruz. Tel dikiş ve yüksek renk doğruluğu ile profesyonel dergi basımı gerçekleştiriyoruz.

## Neden Dijital Dergi Baskısı?

Ofset baskıya göre çok daha esnek ve hızlıdır. 10 adet bile bastırabilirsiniz. Renk tutarlılığı yüksektir ve her sayı aynı kalitede çıkar. Özellikle otellerin aylık dergileri, şirket içi yayınları ve tanıtım dergileri için idealdir.

## Teknik İmkânlar

- 80-350 gr kağıt seçenekleri
- Tel dikiş, spiral veya ciltli seçenekler
- Yüksek çözünürlüklü görsel baskı
- Hızlı teslimat

Hemen teklif alın, yayınınızı profesyonelce bastırın.`,
    faqs: [
      { question: 'En düşük adet nedir?', answer: '5 adetten başlıyoruz.' },
      { question: 'Kapak sert olabilir mi?', answer: 'Evet.' },
      { question: 'Acil baskı mümkün mü?', answer: 'Evet.' }
    ]
  },
  {
    id: 'katalog-baski',
    slug: 'katalog-baski',
    tag: 'Katalog Baskısı',
    title: 'Alanya\'da Katalog Baskı',
    metaTitle: 'Alanya\'da Katalog Baskı | A4, A5, Özel Kare Ebat',
    subtitle: 'Şirketinizin ürünlerini, hizmetlerini veya otelinizin olanaklarını en iyi şekilde sergilemek için katalog şarttır.',
    image: '/images/services/katalog26.jpeg',
    content: `Şirketinizin ürünlerini, hizmetlerini veya otelinizin olanaklarını en iyi şekilde sergilemek için katalog şarttır. Alanya Kale Matbaa olarak 130 gr ile 350 gr arasındaki kağıt seçenekleriyle, A4, A5 veya özel kare ebatlarda profesyonel katalog baskısı yapıyoruz.

C4065 dijital baskı makinemiz sayesinde selefon ve pres uygulamasıyla mükemmel sonuç elde ediyoruz. Az adetli kataloglarda bile ofset kalitesine yakın baskı alırsınız.

## Özellikler

- 130-350 gr kağıt seçenekleri
- Özel ebat imkânı
- Mat/parlak selefon
- Tel dikiş veya spiral cilt

Oteller, restoranlar, emlak ofisleri, tur şirketleri ve üretim firmaları için idealdir. Özellikle Alanya\'daki otellerin oda katalogları ve restoran menü katalogları sık basılır.

Hemen teklif alın.`,
    faqs: [
      { question: 'Minimum adet?', answer: '10 adetten başlıyoruz.' },
      { question: 'Kapak + iç sayfa farklı gramaj olabilir mi?', answer: 'Evet.' },
      { question: 'Acil üretim?', answer: 'Mümkün.' }
    ]
  },
  {
    id: 'folyo-ozel-kesim-etiket',
    slug: 'folyo-ozel-kesim-etiket',
    tag: 'Folyo Özel Kesim',
    title: 'Alanya\'da Folyo Özel Kesim Etiket',
    metaTitle: 'Alanya\'da Folyo Özel Kesim Etiket | Su Dayanıklı Sticker',
    subtitle: 'İstediğiniz her formda ve boyutta folyo etiket üretiyoruz.',
    image: '/images/services/folyo26.jpg',
    content: `İstediğiniz her formda ve boyutta (yuvarlak, oval, logo şeklinde) folyo etiket üretiyoruz. Alanya Kale Matbaa olarak dijital baskı ve yüksek hassasiyetli optik plotter kesim teknolojisi ile özel kesim sticker ve etiket basıyoruz.

Şeffaf, opak, mat, parlak, kuşe ve yırtılmaz PP plastik esaslı folyo malzemeler üzerine sudan ve dış etkenlerden etkilenmeyen dayanıklı baskı yapıyoruz.

## Avantajları

- Her şekil ve ebat
- Su ve dış etkiye dayanıklı
- Yüksek çözünürlüklü baskı
- Plotter ile hassas kesim
- Uzun ömürlü yapışkan

Ürün etiketleri, cam şişe etiketleri, promosyon sticker\'ları, araç giydirme detayları ve ambalaj etiketleri için idealdir. Alanya\'da hediyelik eşya, kozmetik, gıda ve turizm işletmeleri tarafından yoğun kullanılır.

Hemen teklif alın.`,
    faqs: [
      { question: 'Şeffaf folyo basılabilir mi?', answer: 'Evet.' },
      { question: 'Minimum adet?', answer: '50 adetten başlıyoruz.' },
      { question: 'Dış mekân dayanıklılığı?', answer: 'PP ve özel folyolarda yüksektir.' }
    ]
  },
  {
    id: 'kitap-ayraci',
    slug: 'kitap-ayraci',
    tag: 'Kitap Ayracı',
    title: 'Alanya\'da Özel Tasarım Kitap Ayracı',
    metaTitle: 'Alanya\'da Kitap Ayracı Baskı | 300-350 gr Kuşe',
    subtitle: 'Promosyon ve kurumsal hediyelerin vazgeçilmezi kitap ayracını Alanya Kale Matbaa\'da bastırabilirsiniz.',
    image: '/images/services/bloknot26.jpg',
    content: `Promosyon ve kurumsal hediyelerin vazgeçilmezi kitap ayracını Alanya Kale Matbaa\'da bastırabilirsiniz. AccurioPress C4065 gücüyle 300-350 gr mat/parlak kuşe ve özel dokulu kâğıtlara, standart 5x15 cm veya özel kesim ebatlarında baskı yapıyoruz.

Çift yönlü renkli baskı, mat/parlak selefon, püskül/ip deliği ve özel oval köşe seçenekleri sunuyoruz.

## Özellikler

- 300-350 gr kuşe kâğıt
- Standart ve özel ebatlar
- Çift yön baskı
- Selefon seçenekleri
- Püskül/ip deliği

Oteller, kitapçılar, hediyelik dükkânlar, etkinlikler ve kurumsal hediyeler için idealdir. Alanya\'da özellikle otel hediye shop\'ları ve turistik işletmeler sık tercih eder.

Hemen teklif alın, markanızı her kitapta yaşatın.`,
    faqs: [
      { question: 'Minimum adet?', answer: '50 adetten başlıyoruz.' },
      { question: 'Özel şekil kesilebilir mi?', answer: 'Evet.' },
      { question: 'Püskül takılır mı?', answer: 'Evet, ek ücretle.' }
    ]
  },
  {
    id: 'imsakiye-baski',
    slug: 'imsakiye-baski',
    tag: 'İmsakiye Baskısı',
    title: 'Alanya\'da Özel İmsakiye Baskısı',
    metaTitle: 'Alanya\'da Özel İmsakiye Baskısı | Ramazan Promosyon',
    subtitle: 'Ramazan ayına özel, firmanızın logosu ve iletişim bilgileriyle özelleştirilmiş imsakiye üretiyoruz.',
    image: '/images/services/imsakiye26.jpg',
    content: `Ramazan ayına özel, firmanızın logosu ve iletişim bilgileriyle özelleştirilmiş imsakiye üretiyoruz. C4065 makinemizde 170-350 gr kuşe kâğıda, A4, A3 veya özel katlamalı ebatlarda canlı ve net baskı yapıyoruz.

Yüksek okunabilirlik ve uzun ömürlü kullanım için kaliteli kâğıt ve baskı tercih ediyoruz. Fırıncılar, restoranlar, marketler ve kurumsal firmalar için etkili bir promosyon ürünüdür.

## Özellikler

- 170-350 gr kuşe kâğıt
- A4, A3 ve özel ebatlar
- Özelleştirilmiş tasarım
- Yüksek okunabilirlik
- Selefon seçeneği

Ramazan öncesi yoğun talep olduğu için erken sipariş vermenizi öneririz.

Hemen teklif alın.`,
    faqs: [
      { question: 'Erken sipariş avantajı var mı?', answer: 'Evet.' },
      { question: 'Minimum adet?', answer: '100 adetten başlıyoruz.' },
      { question: 'Çok dilli basılabilir mi?', answer: 'Evet.' }
    ]
  },
  {
    id: 'diplomat-zarf',
    slug: 'diplomat-zarf',
    tag: 'Diplomat Zarf',
    title: 'Alanya\'da Kurumsal Diplomat Zarf Baskısı',
    metaTitle: 'Alanya\'da Diplomat Zarf Baskı | 110 gr Kurumsal',
    subtitle: 'Şirket içi ve dışı yazışmalarınıza kurumsal prestij katın.',
    image: '/images/services/diplomatzarf26.jpeg',
    content: `Şirket içi ve dışı yazışmalarınıza kurumsal prestij katın. Alanya Kale Matbaa olarak 110 gr 1. hamur zarflar (pencereli veya penceresiz) üzerine C4065 dijital altyapımız ile pürüzsüz logo ve kurum renklerinizi tam tonunda basıyoruz.

## Özellikler

- 110 gr 1. hamur zarf
- Pencereli / penceresiz seçenek
- Tam tonlu renk baskısı
- Kurumsal prestij
- Standart diplomat ebat

Muhasebe büroları, avukatlık ofisleri, oteller, emlak ofisleri ve kurumsal firmalar için idealdir. Az adetli siparişlerde bile kaliteli sonuç alırsınız.

Hemen teklif alın, yazışmalarınızı profesyonel hale getirin.`,
    faqs: [
      { question: 'Minimum adet?', answer: '100 adetten başlıyoruz.' },
      { question: 'İç baskı yapılabilir mi?', answer: 'Evet.' },
      { question: 'Acil üretim?', answer: 'Mümkün.' }
    ]
  },
  {
    id: 'renkli-cikti',
    slug: 'renkli-cikti',
    tag: 'Renkli Çıktı',
    title: 'Alanya\'da Yüksek Kaliteli Renkli Çıktı',
    metaTitle: 'Alanya\'da Yüksek Kaliteli Renkli Çıktı | A4, A3, SRA3',
    subtitle: 'Proje, sunum, grafik ve görsel ağırlıklı dokümanlarınız için yüksek kaliteli renkli çıktı servisi sunuyoruz.',
    image: '/images/services/dokuman-baskisi26.jpg',
    content: `Proje, sunum, grafik ve görsel ağırlıklı dokümanlarınız için C4065 teknolojisiyle hızlı ve yüksek kaliteli renkli çıktı servisi sunuyoruz. 80 gr standart kâğıttan 350 gr ağır gramajlı kâğıtlara kadar A4, A3 ve SRA3 ebatlarında yüksek çözünürlüklü dijital baskı yapıyoruz.

## Avantajlar

- 80-350 gr kâğıt seçenekleri
- A4, A3, SRA3 ebatları
- Yüksek çözünürlüklü baskı
- Hızlı teslimat
- Tek sayfadan yüksek adede kadar

Mimarlar, grafik tasarımcılar, ajanslar, öğrenciler ve kurumsal firmalar için idealdir. Aynı gün teslimat imkânı mevcuttur.

Hemen dosyanızı gönderin, çıktınızı alalım.`,
    faqs: [
      { question: 'Tek sayfa basılır mı?', answer: 'Evet.' },
      { question: 'Selefon yapılabilir mi?', answer: 'Evet.' },
      { question: 'Acil çıktı?', answer: 'Aynı gün mümkün.' }
    ]
  },
  {
    id: 'sadakat-karti',
    slug: 'sadakat-karti',
    tag: 'Sadakat Kartı',
    title: 'Alanya\'da Müşteri Sadakat Kartı Baskısı',
    metaTitle: 'Alanya\'da Sadakat Kartı Baskı | Kafe & Restoran',
    subtitle: 'Kafe, restoran, kuaför ve perakende mağazaları için tekrar eden satışları artıran sadakat kartları basıyoruz.',
    image: '/images/services/kalınkartvizit26.jpg',
    content: `Kafe, restoran, kuaför ve perakende mağazaları için tekrar eden satışları artıran sadakat kartları basıyoruz. 300-350 gr kuşe veya özel kaşelenebilir/yazılabilir dokulu kâğıtlara baskı yapıyoruz. Mühür basımına uygun yüzey ve özel ebat seçenekleri sunuyoruz.

## Özellikler

- 300-350 gr kuşe kâğıt
- Mühür basımına uygun yüzey
- Özel ebat seçenekleri
- Dayanıklı yapı
- Selefon seçeneği

Alanya\'da özellikle kafeler, restoranlar ve güzellik merkezleri tarafından yoğun kullanılır.

Hemen teklif alın, müşteri sadakatini artırın.`,
    faqs: [
      { question: 'Yazılabilir yüzey olur mu?', answer: 'Evet.' },
      { question: 'Minimum adet?', answer: '100 adetten başlıyoruz.' },
      { question: 'Delikli olabilir mi?', answer: 'Evet.' }
    ]
  },
  {
    id: 'acil-el-ilani',
    slug: 'acil-el-ilani',
    tag: 'Acil El İlanı',
    title: 'Alanya\'da Acil El İlanı & Broşür Baskısı',
    metaTitle: 'Alanya\'da Acil El İlanı Baskı | Aynı Gün Teslimat',
    subtitle: 'Zamanla yarışan kampanya ve tanıtımlarınız için aynı gün teslimat seçeneğiyle acil el ilanı ve broşür baskısı yapıyoruz.',
    image: '/images/services/acil-el-ilani26.jpg',
    content: `Zamanla yarışan kampanya ve tanıtımlarınız için aynı gün teslimat seçeneğiyle acil el ilanı ve broşür baskısı yapıyoruz. C4065 dijital hızımız ile 130-170 gr kuşe kâğıda, A5, A4 veya kırım/katlamalı broşür formatlarında yüksek kaliteli ve canlı baskı çözümü sunuyoruz.

## Avantajlar

- Aynı gün teslimat seçeneği
- 130-170 gr kuşe kâğıt
- A5, A4 ve broşür formatları
- Dijital hız ve kalite
- Küçük ve büyük adet

Alanya\'da özellikle sezonluk kampanyalar, etkinlikler ve acil duyurular için hayat kurtarır.

Hemen dosyanızı gönderin, aynı gün teslim edelim.`,
    faqs: [
      { question: 'Gerçekten aynı gün teslimat var mı?', answer: 'Yoğunluğa göre evet.' },
      { question: 'Minimum adet?', answer: '50 adetten başlıyoruz.' },
      { question: 'Katlamalı olur mu?', answer: 'Evet.' }
    ]
  },
  {
    id: 'kurumsal-dokuman',
    slug: 'kurumsal-dokuman',
    tag: 'Kurumsal Doküman',
    title: 'Alanya\'da Kurumsal Doküman & Rapor Baskısı',
    metaTitle: 'Alanya\'da Kurumsal Doküman & Rapor Baskı | Spiralli Ciltli',
    subtitle: 'Şirket raporları, eğitim materyalleri, sunum dosyaları ve teknik dokümanlarınız için profesyonel baskı hizmeti sunuyoruz.',
    image: '/images/services/dokuman-baskisi26.jpg',
    content: `Şirket raporları, eğitim materyalleri, sunum dosyaları ve teknik dokümanlarınız için profesyonel baskı hizmeti sunuyoruz. 80-160 gr kâğıt seçenekleri, A4/A3 ebatları, spiralli, ciltli veya zımbalı tamamlama imkânları mevcuttur.

## Özellikler

- 80-160 gr kâğıt
- A4 / A3 ebatları
- Spiralli / ciltli / zımbalı
- Yüksek kaliteli baskı
- Hızlı teslimat

Kurumsal firmalar, oteller, eğitim kurumları ve ajanslar için idealdir.

Hemen teklif alın.`,
    faqs: [
      { question: 'Spiralli cilt yapılır mı?', answer: 'Evet.' },
      { question: 'Kapak kalın olabilir mi?', answer: 'Evet.' },
      { question: 'Acil baskı?', answer: 'Mümkün.' }
    ]
  },
  {
    id: 'acil-davetiye',
    slug: 'acil-davetiye',
    tag: 'Acil Davetiye',
    title: 'Alanya\'da Acil Düğün & Etkinlik Davetiyesi',
    metaTitle: 'Alanya\'da Acil Davetiye Baskı | Aynı Gün veya Ertesi Gün',
    subtitle: 'Özel günlerinizde zaman kaybetmeden şıklığı yakalayın. Acil davetiye baskısı yapıyoruz.',
    image: '/images/services/acil-davetiye26.jpg',
    content: `Özel günlerinizde zaman kaybetmeden şıklığı yakalayın. C4065 baskı altyapımızla 300-350 gr kuşe kâğıtlara acil davetiye baskısı yapıyoruz.

## Özellikler

- Acil üretim seçeneği
- 300-350 gr kuşe kâğıt
- Şık tasarım
- Hızlı teslimat
- Selefon ve özel kesim imkânı

Son anda davetiye ihtiyacı olanlar için çözüm üretiyoruz. Tasarım desteği de sunuyoruz.

Hemen iletişime geçin, özel gününüzü yetiştirin.`,
    faqs: [
      { question: 'Gerçekten acil basılır mı?', answer: 'Evet, yoğunluğa göre aynı gün veya ertesi gün.' },
      { question: 'Minimum adet?', answer: '50 adetten başlıyoruz.' },
      { question: 'Zarf dahil mi?', answer: 'Opsiyonel.' }
    ]
  },
  {
    id: 'otokopili-evraklar',
    slug: 'otokopili-evraklar',
    tag: 'Otokopili Evrak',
    title: 'Alanya\'da Otokopili Resmi ve Gayri Resmi Evraklar',
    metaTitle: 'Alanya\'da Otokopili Evrak Baskısı | Fatura, Makbuz, Adisyon',
    subtitle: 'Tahsilat makbuzu, adisyon, fatura, rent a car sözleşmesi gibi resmi ve gayri resmi evraklar için 2-3 nüsha otokopili üretim yapıyoruz.',
    image: '/images/services/antetli26.jpg',
    content: `Alanya\'da faaliyet gösteren işletmelerin en temel ihtiyaçlarından biri, düzenli ve profesyonel matbu evraklardır. Tahsilat makbuzu, tediye makbuzu, gider pusulası, adisyon, perakende satış fişi, sevk irsaliyesi, fatura, rent a car sözleşmesi, sipariş fişi, teknik servis fişi ve hasta bilgi formu gibi resmi ve gayri resmi evraklar, işletmenizin günlük işleyişinin vazgeçilmez parçalarıdır.

Alanya Kale Matbaa olarak bu evrakları 2 nüsha veya 3 nüsha otokopili (kendinden karbonlu) kâğıtlara, istediğiniz ebat, renk ve numaratör/seri no seçenekleriyle özel olarak üretiyoruz.

## Hangi Evrakları Basıyoruz?

- Tahsilat ve Tediye Makbuzu
- Gider Pusulası
- Adisyon (restoran ve kafe için)
- Perakende Satış Fişi
- Sevk İrsaliyesi ve Fatura
- Rent a Car Sözleşmesi
- Sipariş ve Teknik Servis Fişi
- Hasta Bilgi Formu
- Diğer özel formlar

## Teknik Özellikler

- 2 nüsha veya 3 nüsha otokopili (kendinden karbonlu) kâğıt
- İstenilen ebatlar: A4, A5, A6 veya özel ölçüler
- Numaratör / Seri No seçeneği
- Perforaj (kolay koparma çizgisi)
- Delikli veya deliksiz modeller

Hemen teklif almak için iletişime geçin.`,
    faqs: [
      { question: 'Minimum adet nedir?', answer: 'Genellikle 100 adetten başlıyoruz.' },
      { question: 'Numaratör zorunlu mu?', answer: 'Hayır, isterseniz numarasız da basabiliyoruz.' },
      { question: 'Acil üretim mümkün mü?', answer: 'Evet, yoğunluğa göre hızlandırılmış üretim.' }
    ]
  },
  {
    id: 'otel-baski-ihtiyaclari',
    slug: 'otel-baski-ihtiyaclari',
    tag: 'Otel Baskı',
    title: 'Alanya\'da Otel Baskı İhtiyaçları',
    metaTitle: 'Alanya Otel Baskı İhtiyaçları | Konuk Formu, Housekeeper Raporu',
    subtitle: 'Konuk kayıt formlarından housekeeper raporlarına, ön muhasebe belgelerinden personel formlarına kadar tüm otel baskı ihtiyaçlarınızı karşılıyoruz.',
    image: '/images/services/antetli26.jpg',
    content: `Alanya\'da konaklama sektörü yoğun ve dinamik bir yapıya sahiptir. Oteller, pansiyonlar ve tatil köyleri her gün onlarca farklı belge ve form kullanır. Konuk kayıt formlarından housekeeper raporlarına, ön muhasebe belgelerinden personel yönetim formlarına kadar birçok matbu evraka ihtiyaç duyulur. Alanya Kale Matbaa olarak otellerin tüm baskı ihtiyaçlarına profesyonel ve hızlı çözümler sunuyoruz.

## Hangi Otel Formlarını Basıyoruz?

- Konuk kayıt / check-in formları
- Housekeeper (kat görevlisi) raporları
- Ön muhasebe ve kasa belgeleri
- Personel devam ve görev formları
- Oda durum raporları
- Teknik servis ve arıza bildirim formları
- Misafir memnuniyet anketleri
- Özel istek formları

## Teknik Seçenekler

- 2 nüsha veya 3 nüsha otokopili kâğıt
- İstenilen boyutlar (A4, A5, A6 veya özel ebatlar)
- Renkli veya siyah-beyaz baskı
- Numaratör / seri no ekleme imkânı
- Perforaj (kolay koparma) seçeneği

Alanya\'daki otellerin yoğun sezonlarda belge ihtiyacı hızla artar. Hızlı üretim ve teslimat kapasitemizle hizmet veriyoruz.

Hemen mevcut form örneklerinizi veya ihtiyaç listenizi gönderin.`,
    faqs: [
      { question: 'Minimum adet nedir?', answer: 'Genellikle 100 adetten başlıyoruz.' },
      { question: 'Acil üretim mümkün mü?', answer: 'Evet, yoğunluğa göre hızlandırıyoruz.' },
      { question: 'Numaratör eklenir mi?', answer: 'Evet.' }
    ]
  },
  {
    id: 'sertifika-katilim-belgesi',
    slug: 'sertifika-katilim-belgesi',
    tag: 'Sertifika Baskısı',
    title: 'Alanya\'da Sertifika & Katılım Belgesi Baskısı',
    metaTitle: 'Alanya Sertifika Baskı | Kişiselleştirilmiş Katılım Belgesi',
    subtitle: 'Eğitim, seminer, workshop ve kurumsal organizasyonlarda verilen sertifikalar için kişiselleştirilmiş baskı hizmeti sunuyoruz.',
    image: '/images/services/antetli26.jpg',
    content: `Eğitim, seminer, workshop, kongre ve kurumsal organizasyonlarda verilen sertifikalar, katılımcılara verilen değerin somut göstergesidir. Alanya Kale Matbaa olarak 130 gr\'dan 350 gr\'a kadar ağır kuşe kâğıtlara, kişiselleştirilmiş (isimli / değişken verili) kaliteli renkli dijital sertifika baskısı yapıyoruz.

## En Önemli Özellik: Her Sertifikaya Farklı İsim

C4065 dijital baskı teknolojimiz sayesinde değişken veri (variable data) ile her sertifikaya özel isim, tarih veya numara basabiliyoruz. Bu sayede toplu ve hatasız üretim mümkün olur.

## Teknik Özellikler

- 130 gr, 170 gr, 200 gr, 300 gr ve 350 gr kuşe kâğıt seçenekleri
- Kişiselleştirilmiş (isimli) baskı
- Değişken veri desteği
- Selefon seçeneği

## Kimler Kullanır?

- Eğitim kurumları ve kurslar
- Oteller (personel eğitim sertifikaları)
- Seminer ve konferans organizatörleri
- Spor kulüpleri ve etkinlik firmaları
- Kurumsal şirketler

Tasarımınız hazırsa dosyanızı gönderin, isim listesini iletin, hızlıca basıma alalım.`,
    faqs: [
      { question: 'Her sertifikaya farklı isim basılabilir mi?', answer: 'Evet, değişken veri ile mümkün.' },
      { question: 'Minimum adet?', answer: '10 adetten başlıyoruz.' },
      { question: 'Selefon yapılır mı?', answer: 'Evet.' }
    ]
  },
  {
    id: 'kagit-oto-paspas',
    slug: 'kagit-oto-paspas',
    tag: 'Kağıt Oto Paspas',
    title: 'Alanya\'da Kağıt Oto Paspas Baskısı',
    metaTitle: 'Alanya Kağıt Oto Paspas | Oto Yıkama & Vale Paspası',
    subtitle: 'Oto yıkama, teknik servis, vale hizmeti ve oto galerileri için özel üretilen kağıt oto paspaslar, araç içini koruyan pratik ve ekonomik bir çözümdür.',
    image: '/images/services/afis26.jpg',
    content: `Oto yıkama, teknik servis, vale hizmeti ve oto galerileri için özel üretilen kağıt oto paspaslar, araç içini koruyan pratik ve ekonomik bir çözümdür. Alanya Kale Matbaa olarak 33x48 cm ebatlarında, 100 gr Kraft kâğıda tek yön tek renk, yüksek dayanıklı ve emici özellikli oto paspas baskısı yapıyoruz.

Kraft kâğıt, hem dayanıklı hem de emici yapısı sayesinde ayakkabıdan gelen su, çamur ve kiri tutar. Araç zeminini korur ve müşteriye özen gösterildiğini hissettirir. Üzerine işletme logosu ve iletişim bilgileri basılarak aynı zamanda reklam amaçlı da kullanılır.

## Özellikler

- 33x48 cm standart ebat
- 100 gr Kraft kâğıt
- Tek yön tek renk baskı
- Dayanıklı ve emici yapı
- Uygun maliyetli toplu üretim

Alanya\'da özellikle oto yıkamacılar, detayıcılar, vale firmaları ve servis istasyonları tarafından yoğun talep görür.

Hızlı üretim ve uygun fiyat avantajı sunuyoruz.`,
    faqs: [
      { question: 'Minimum adet?', answer: '500 adetten başlıyoruz.' },
      { question: 'Logo baskısı yapılır mı?', answer: 'Evet.' },
      { question: 'Toplu alımda indirim var mı?', answer: 'Evet.' }
    ]
  },
  {
    id: 'etkinlik-konser-bileti',
    slug: 'etkinlik-konser-bileti',
    tag: 'Etkinlik Bileti',
    title: 'Alanya\'da Seri Numaralı Etkinlik & Konser Bileti',
    metaTitle: 'Alanya Etkinlik Bileti Baskı | Seri Numaralı Konser Bileti',
    subtitle: 'Etkinlik, konser, tiyatro, fuar ve organizasyonlarınız için güvenli ve profesyonel bilet baskısı yapıyoruz.',
    image: '/images/services/afis26.jpg',
    content: `Etkinlik, konser, tiyatro, fuar, festival ve organizasyonlarınız için güvenli ve profesyonel bilet baskısı yapıyoruz. Alanya Kale Matbaa olarak C4065 dijital baskı gücüyle 130 gr\'dan 350 gr\'a kadar kuşe kâğıtlara, seri numaralı (numaratörlü), perforajlı (koçanlı / koparmalı) ve özel tasarım bilet üretimi gerçekleştiriyoruz.

Seri numaralı biletler, sahte bilet riskini azaltır ve giriş kontrolünü kolaylaştırır. Perforaj sayesinde bilet kolayca koparılabilir, bir kısmı katılımcıda kalırken diğer kısmı organizasyonda kalır.

## Teknik Özellikler

- 130 gr, 170 gr, 200 gr, 300 gr ve 350 gr kuşe kâğıt
- Seri numaralı (numaratörlü) üretim
- Perforajlı / koparmalı seçenek
- Özel tasarım ve renkli baskı
- Yüksek güvenlikli görünüm

Alanya\'da konserler, festivaller, tiyatro gösterileri, fuarlar ve kurumsal etkinlikler için sıkça tercih edilir.

Tasarımınızı gönderin veya logonuzla birlikte tasarım desteği isteyin.`,
    faqs: [
      { question: 'Seri numara zorunlu mu?', answer: 'Hayır, isteğe bağlı.' },
      { question: 'Minimum adet?', answer: '100 adetten başlıyoruz.' },
      { question: 'Koçanlı (perforajlı) olabilir mi?', answer: 'Evet.' }
    ]
  }
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find(service => service.slug === slug);
}

export function getAllServices(): Service[] {
  return services;
}
