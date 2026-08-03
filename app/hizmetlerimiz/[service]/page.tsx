'use client'

import { use } from 'react'
import Image from 'next/image'
import { useLanguage } from '@/components/language-provider'
import { Button } from '@/components/ui/button'
import { waLink } from '@/lib/site'
import { Phone } from 'lucide-react'
import { FaqSection } from '@/components/faq-section'

// Service data configuration
const SERVICES_DATA = {
  'kartvizit-baski-alanya': {
    tag: 'Kartvizit Baskısı',
    title: 'Profesyonel Kartvizit Tasarım ve Baskısı',
    subtitle: 'Alanya\'da acil kartvizit baskısı. Aynı gün teslim, ücretsiz tasarım, en iyi kalite.',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/kart2-8wjyA6bLExi6NPDQyowGrlhxjcRnnr.jpeg',
    intro: 'Profesyonel kartvizit tasarım ve baskı hizmetimizle işinizi en iyi şekilde temsil edin. Alanya\'da dijital ve ofset baskı seçenekleriyle yüksek kaliteli, keskin ve dayanıklı kartvizitler üretiyoruz. Aynı gün teslim imkânı sayesinde acil ihtiyaçlarınızı da karşılıyoruz. Kurumsal kimliğinize uygun özel tasarımlar, mat veya parlak kuşe kâğıt, UV lak ve kabartma gibi ekstra uygulamalarla kartvizitinizi unutulmaz kılıyoruz. Az adetten yüksek adete kadar her ihtiyaca uygun çözümler sunuyoruz.',
    sections: [
      {
        title: 'Kartvizit Baskısı Türleri',
        items: [
          'Standart 90x50 mm kartvizitler (mat, parlak, kumlama)',
          'Yuvarlak köşeli özel ebat kartvizitler',
          'Çift taraflı renk baskısı',
          'Metalik toner efektli premium kartvizitler',
          'Gofrajlı ve emboslu tasarım seçenekleri',
          'Özel kağıtlarda (yapışkanlı, şeffaf vb.) baskı'
        ]
      },
      {
        title: 'Neden Kale Matbaa\'dan Kartvizit Bastırmalısınız',
        items: [
          'Aynı gün teslim (acil işler)',
          'Ücretsiz profesyonel grafik tasarım',
          'Konica Minolta C4065 ile yüksek kalite',
          '1000 kartvizit için 500₺ den başlayan fiyatlar',
          'Renk tarafsız prova hizmeti',
          'Teslim öncesi kalite kontrol'
        ]
      },
      {
        title: 'Kartvizit Tasarımında Dikkat Edilmesi Gerekenler',
        items: [
          'Kurumsal kimliğinize uygun tasarım',
          'Okunabilir yazı boyutu ve tipografi',
          'CMYK renk standardı (dijital baskı için)',
          'Blid (tam kanlı) tasarım (3mm kütük)',
          'Doğru iletişim bilgileri (telefon, email, adres)',
          'Marka logosu ve renk uyumluluğu'
        ]
      }
    ],
    faq: [
      {
        q: 'Kartvizit kaç günde teslim olur?',
        a: 'Standart kartvizitler 2-3 gün içinde teslim edilir (tasarım onayından sonra). Acil işler 24-48 saat içinde yapılabilir. Tasarım hazırsa aynı gün teslim mümkündür.'
      },
      {
        q: 'Tasarım dosyam yok, tasarım hizmeti var mı?',
        a: 'Elbette! Tamamen ücretsiz. Profesyonel grafik ekibimiz markabrandınıza uygun kartvizit tasarımı yapıyor. 2-3 revizyon dahil, baskıya hazır dosyayı teslim ediyoruz.'
      },
      {
        q: 'En ucuz kartvizit baskısı kaç?',
        a: 'En ucuz kartvizit baskımız 250 adetten başlıyor ve 500 adet için 500₺ civarındadır. Daha fazla adet daha uygun fiyat sunar.'
      },
      {
        q: 'Özel ebat kartvizit yapılabilir mi?',
        a: 'Evet, yuvarlak köşeli, kare, dikdörtgen gibi tüm şekillerde özel ebat kartvizitler yapılabilir. Fiyat adet ve ebata göre hesaplanır.'
      }
    ],
    cta: 'WhatsApp ile Kartvizit Siparişi Ver'
  },
  'brosur-baski-alanya': {
    tag: 'Broşür Baskısı',
    title: 'Kurumsal Broşür Tasarım ve Baskısı Hizmetleri',
    subtitle: 'Alanya\'da profesyonel broşür baskısı. Amerikan cilt, tel zımba ve spiral cilt seçenekleri. Aynı gün dizayn, kaliteli sonuç.',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/restoran%20bro%C5%9F%C3%BCr%C3%BC-BxbrDaVG02Is29VWZm3JuUCqlmMlW4.jpeg',
    intro: 'Etkili broşür tasarımı ve baskısı ile ürün veya hizmetlerinizi profesyonelce tanıtın. Tek kırımlı, üç kırımlı ve çok sayfalı broşür seçenekleriyle her bütçeye ve amaca uygun çözümler üretiyoruz. Canlı renkler, net görseller ve dikkat çekici metinlerle mesajınızı güçlü şekilde iletiriz. Yüksek kaliteli kuşe kâğıt ve ofset/dijital baskı alternatifleriyle hem küçük hem büyük tirajlarda mükemmel sonuç alırsınız.',
    sections: [
      {
        title: 'Broşür Baskısı Hizmetleri',
        items: [
          'A4 (210x297mm) boyutunda 3 kırımlı broşür',
          'A5 ve A6 boyutlarında taşınabilir broşürler',
          'Amerikan cilt (perfect binding) broşürler',
          'Tel zımbalı broşür seçenekleri',
          'Spiral cilt ve sabit kapak broşürler',
          'Parlak (gloss), mat (matte) ve kumlama (silk) kağıtlar'
        ]
      },
      {
        title: 'Broşür Tasarımında Uzmanlaşmamız',
        items: [
          'Restoranlar ve kafeler için menü broşürleri',
          'Otel ve turizm işletmeleri için kataloglar',
          'Kurumsal profil ve hizmet broşürleri',
          'İtfaiyeci, emlakçı ve profesyonel broşürler',
          'Estetik ve tasarım odaklı düzen',
          'Baskı öncesi dijital prova ve renk ayarlaması'
        ]
      },
      {
        title: 'Broşür Baskısında Kalite ve Teknoloji',
        items: [
          'Konica Minolta C4065 dijital baskı',
          'Ofset baskı, yüksek adetler için ekonomik',
          'CMYK + Baskı öncesi baskı profilama',
          '300 dpi yüksek çözünürlük baskı',
          'Beyaz arka plan ve renklerde kusursuz kalite',
          'Cilt ve bitirme işlemlerinde profesyonellik'
        ]
      }
    ],
    faq: [
      {
        q: 'Broşür tasarım ne kadar sürer?',
        a: 'Tasarım süreci 2-3 gün sürer. İçerik ve görselleri bize verirseniz, profesyonel tasarımı 2-3 revizyon içinde tamamlıyoruz.'
      },
      {
        q: 'Broşür kaç sayfalı olabilir?',
        a: 'Standart olarak 4, 6, 8, 12, 16, 20, 24 sayfa broşürler yapılabilir. Daha fazla sayfa için özel sipariş alınır.'
      },
      {
        q: 'En ucuz broşür baskısı fiyatı nedir?',
        a: '1000 adet A4 3 kırımlı broşür için 3000₺ den başlar. Adet arttıkça birim fiyat düşer.'
      },
      {
        q: 'Kendi tasarımımla broşür bastırabilirim mi?',
        a: 'Evet, PDF ve baskı dosyalarında broşür bastırabiliriz. Baskı standartlarına uyması gerekmektedir.'
      }
    ],
    cta: 'WhatsApp ile Broşür Siparişi Ver'
  },
  'menus-baski-alanya': {
    tag: 'Menü Baskısı',
    title: 'Restoran Menü Tasarım ve Profesyonel Baskısı',
    subtitle: 'Alanya\'da profesyonel menü baskısı. Suya dayanıklı, parlak ve mat seçenekleri. Acil teslim garantisi.',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/el%20ilan%C4%B1%20bask%C4%B1s%C4%B1-Lc9UFMK1571wFbHSBw7osqiJs4Bl3m.jpeg',
    intro: 'Restaurant menü tasarımı ve baskısı hizmetimizle menünüzü hem şık hem kullanışlı hale getiriyoruz. Laminatlı, ciltli, spiral veya standart menü seçenekleriyle uzun ömürlü ve hijyenik çözümler sunuyoruz. Özel tasarım, fotoğraflı sayfalar ve markanıza uygun renklerle müşterilerinizin ilgisini çeken profesyonel menüler hazırlıyoruz. Hızlı üretim ve uygun fiyat avantajıyla restoranınızın imajını güçlendirin.',
    sections: [
      {
        title: 'Menü Baskısı Seçenekleri',
        items: [
          'Standart A4 ve A5 boyutlarında menüler',
          'Tri-fold (3 kırımlı) menu tasarımları',
          'Su geçirmez plastik menüler (sezon için ideal)',
          'Parlak laminasyon (su ve yağ direnci)',
          'Mat laminasyon (zarafet ve dayanıklılık)',
          'Spiral ve tel zımba ciltli menü kitapçıkları'
        ]
      },
      {
        title: 'Restoran Menü Tasarımında Dikkat Edilmesi Gerekenler',
        items: [
          'Restoran kimliğine uygun logo ve renk şeması',
          'Yemek isimleri ve açıklamaları net ve okunabilir',
          'Fiyatlandırmanın uygun yerleştirilmesi',
          'Yüksek çözünürlüklü yemek fotoğrafları',
          'Kültürel ve dilsel uygunluk (İngilizce, Rusça vb.)',
          'Dayanıklı ve temizlenebilir malzeme seçimi'
        ]
      },
      {
        title: 'Yaz Sezonunda Menü Baskısının Avantajları',
        items: [
          'Su ve yağa dayanıklı plastik menüler',
          'Parlak renklerde güzel görünüm',
          'Güneş altında solmayan kaliteli baskı',
          'Sık temizlenmeye dayanıklı laminasyon',
          'Ekonomik fiyatla profesyonel görünüm',
          'Acil değişikliklerde hızlı yenileme imkanı'
        ]
      }
    ],
    faq: [
      {
        q: 'Menü tasarımı için ne kadar süre gerekir?',
        a: 'Standart menü tasarımı 2-3 gün içinde tamamlanır. İçerik ve görselleri bize gönderirseniz, tasarımı hızla hazırlıyoruz.'
      },
      {
        q: 'Su geçirmez menü nedir ve ne kadara mal oluyor?',
        a: 'Su geçirmez plastik menüler, yaz sezonunda açık alanda çok dayanıklıdır. 100 adet için yaklaşık 1500-2000₺ arası fiyatlandırılır.'
      },
      {
        q: 'Menüyü sık değiştirebiliyor muyuz?',
        a: 'Evet, fiyatlar değişirse veya yeni yemekler eklenirse, yeni menü tasarımı ve baskısı yapabiliriz. Acil işler 1-2 gün içinde teslim edilir.'
      },
      {
        q: 'Yemek fotoğrafı ve açıklaması olmadan menü yaptırabilir miyiz?',
        a: 'Elbette. Sadece ürün isimleri ve fiyatlarıyla basit menüler de yapılabilir. Tasarım ekibimiz sade ama profesyonel tasarımlar hazırlar.'
      }
    ],
    cta: 'WhatsApp ile Menü Siparişi Ver'
  },
  'dijital-baski-alanya': {
    tag: 'Dijital Baskı',
    title: 'Dijital Baskı Hizmetleri - Acil İşler İçin İdeal',
    subtitle: 'Alanya\'da dijital baskı. Konica Minolta C4065 ile aynı gün teslim, kaliteli sonuç. Küçük ve orta adetler için ekonomik.',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/katalog2-h0DoTxIrVOaaHt6GaYOzwKiCytHbih.jpeg',
    intro: 'Hızlı dijital baskı çözümlerimizle az adetten yüksek adete kadar her türlü ihtiyacınızı karşılıyoruz. Renkli ve siyah-beyaz baskı seçenekleriyle kartvizit, broşür, afiş, etiket ve daha birçok ürünü kısa sürede teslim ediyoruz. Kaliteli sonuç, uygun maliyet ve esnek üretim imkânı sayesinde hem bireysel hem kurumsal müşterilerimize pratik çözümler sağlıyoruz. Acil işlerinizde güvenilir adresiniziz.',
    sections: [
      {
        title: 'Dijital Baskı Teknolojimiz',
        items: [
          'Konica Minolta AccurioPrint C4065 baskı makinesi',
          'CMYK renkli, hızlı ve hassas baskı',
          'Dakikada 50+ sayfa yüksek hız',
          'A3+ boyutuna kadar (320x450mm) baskı',
          'Canlı ve doygun renkler',
          '350g ve üzeri kalın karton desteği'
        ]
      },
      {
        title: 'Dijital Baskıya Uygun Ürünler',
        items: [
          'Broşürler ve kataloğlar',
          'Kartvizitler ve davetiyeler',
          'Etkinlik afişleri ve davetiyeler',
          'Ürün etiketleri ve paket tasarımları',
          'Tasarım katalogları ve portfolyolar',
          'Acil iş çözümleri (1-3 günde teslim)'
        ]
      },
      {
        title: 'Dijital Baskının Avantajları',
        items: [
          'Aynı gün veya 24 saat teslim',
          'Küçük adetler (100-1000) ekonomik',
          'Kurallı renk tarafsız proofing (ücretsiz)',
          'Tasarımda esneklik ve kolaylık',
          'Ofset maliyeti olmadan yüksek kalite',
          'Baskı öncesi örnek gönderilebilir'
        ]
      }
    ],
    faq: [
      {
        q: 'Dijital baskıda minimum adet kaç?',
        a: 'Minimum adet 100 tane\'dir. 100-500 adet arası dijital baskı çok ekonomiktir.'
      },
      {
        q: 'Dijital baskı ne kadar sürer?',
        a: 'Tasarım hazırsa 24-48 saat içinde teslim edilir. Acil işler aynı gün başlanıp ertesi gün teslim olabilir.'
      },
      {
        q: 'Dijital baskı kalitesi ofset kadar mı?',
        a: 'Evet. Konica Minolta C4065 ile dijital baskının kalitesi ofset baskı kadar iyidir. Renk doygunluğu ve netliği muhteşemdir.'
      },
      {
        q: 'Tasarım dosyası ne formatta olmalı?',
        a: 'Baskıya hazır PDF (CMYK renk), AI, PSD veya EPS dosyası kabul ediyoruz. 300 dpi çözünürlüğe sahip olmalıdır.'
      }
    ],
    cta: 'WhatsApp ile Dijital Baskı Siparişi Ver'
  },
  'ofset-baski-alanya': {
    tag: 'Ofset Baskı',
    title: 'Ofset Baskı - Yüksek Adetler İçin Ekonomik Çözüm',
    subtitle: 'Alanya\'da profesyonel ofset baskı. 500+ adetten en uygun fiyat. Yüksek kalite, geniş ürün yelpazesi.',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/tahsilat2-FSg1UZXFLRC6cu3OCpyVHI2ndS674g.jpeg',
    intro: 'Yüksek adetli işlerinizde ekonomik ve kaliteli ofset baskı hizmeti sunuyoruz. 500 adetten itibaren maliyet avantajı sağlayan ofset baskı ile mükemmel renk doğruluğu ve tutarlılık elde edersiniz. Broşür, katalog, afiş, el ilanı ve ambalaj gibi birçok üründe üstün baskı kalitesi sunuyoruz. Profesyonel ekipmanlarımız ve tecrübeli ekibimizle büyük tirajlarda bile aynı kaliteyi garanti ediyoruz.',
    sections: [
      {
        title: 'Ofset Baskı Teknolojimiz',
        items: [
          'Profesyonel ofset baskı makineleri',
          'CMYK ve spot renk baskısı',
          'Geniş kağıt formatı desteği',
          'Kurallı renk tarafsızlığı (Pantone matching)',
          'Yüksek hızda tutarlı kalite',
          '80g ince kağıttan 400g üzeri karton baskısı'
        ]
      },
      {
        title: 'Ofset Baskıya Uygun Ürünler',
        items: [
          'Binlerce sayılı broşür ve kataloglar',
          'Yüksek adetli kartvizitler',
          'Dergi, gazeteler ve kitaplar',
          'Defterler ve bloknot tasarımları',
          'Etiketler ve paket tasarımları',
          'Kurumsal belge ve sertifikalar'
        ]
      },
      {
        title: 'Ofset Baskının Avantajları',
        items: [
          'Yüksek adetlerde çok uygun fiyat',
          'Mükemmel renk doğruluğu ve tutarlılığı',
          'Değiştirilemez Pantone renk eşleştirmesi',
          'Geniş kağıt seçenekleri ve doku',
          'Kurallı ve profesyonel sonuç',
          '500+ adette dijitalden daha ekonomik'
        ]
      }
    ],
    faq: [
      {
        q: 'Ofset baskıda minimum adet kaç?',
        a: 'Minimum 500 adettir. 500-5000 adet arası ofset baskı çok uygun fiyatlıdır.'
      },
      {
        q: 'Ofset baskı kaç günde teslim olur?',
        a: 'Tasarım hazırsa 5-7 gün içinde teslim edilir. Acil işler 3-4 günde yapılabilir.'
      },
      {
        q: 'Ofset baskıda tasarım revizyon ücreti var mı?',
        a: 'Hayır, tasarım onayı verene kadar 2-3 revizyon ücretsizdir. Baskı başladıktan sonra değişiklik mümkün değildir.'
      },
      {
        q: 'Ofset baskıda kağıt kalitesi ne fark eder?',
        a: 'Kağıt kalitesi final görünümü çok etkiler. Parlak kağıt renkler daha canlı, mat kağıt daha zarafetli görünüm verir.'
      }
    ],
    cta: 'WhatsApp ile Ofset Baskı Siparişi Ver'
  },
  'kase-yapimi-alanya': {
    tag: 'Kaşe Baskısı',
    title: 'Profesyonel Kaşe Tasarım ve Baskısı - Kurumsal Kimliğinizin Damgası',
    subtitle: 'Alanya\'da kaşe basımı. Kurumsal, öğretmen, cep kaşesi ve otomatik kaşe. Aynı gün teslim, ücretsiz tasarım.',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ka%C5%9Fe7-IFUNrNFYzXaYK00m1Y2D3pUInD68Bi.jpeg',
    intro: 'Kaşe, işletmenizin ve markanızın resmi damgası olmaktan öteye, bir kimlik ve güven sembolüdür. Kale Matbaa\'da 35+ yıllık matbaacılık tecrübesiyle, tüm kaşe türlerinde profesyonel baskı yapıyoruz. Kurumsal kaşeler, öğretmen kaşeleri, cep kaşeleri ve otomatik kaşelerin tasarımı ve baskısında uzmunuz. Her kaşe özel olarak tasarlanır, kalite kontrol edilerek teslim edilir.',
    sections: [
      {
        title: 'Kaşe Türleri ve Baskı Seçenekleri',
        items: [
          'Kurumsal kaşe (Limited Şirket, Anonim Şirket)',
          'Öğretmen kaşeleri (Ad, soyadı ve ünvan)',
          'Cep kaşeleri (taşınabilir, pratik)',
          'Otomatik kaşe (kontrol numaralı)',
          'Lastikli kaşe (sıkça kullanım için)',
          'Özel tasarım ve numara kaşeleri'
        ]
      },
      {
        title: 'Kaşe Tasarımında Yasal Gereeklilikler',
        items: [
          'Türk Ticaret Kanunu\'na uygun tasarım',
          'Şirket unvanı, adresi ve vergi numarası',
          'Ticari defter numarası (kamu kurumları için)',
          'Kuruluş tarihi ve yetki devri',
          'Doğru fonksiyon ve görünüm',
          'Profesyonel ve okunabilir tasarım'
        ]
      },
      {
        title: 'Kaşe Baskısının Avantajları',
        items: [
          'Yasal gereklilik ve resmiyet sağlama',
          'Marka ve kimlik güçlendirme',
          'Uzun ömürlü ve dayanıklı kullanım',
          'Değiştirilemez ve güvenli tasarım',
          'Çoklu kopya baskısında kullanılabilir',
          'Özel tasarım seçenekleri'
        ]
      }
    ],
    faq: [
      {
        q: 'Kaşe baskısı kaç günde teslim olur?',
        a: 'Standart kaşeler 2-3 gün içinde teslim edilir. Acil işler 24-48 saat içinde yapılabilir.'
      },
      {
        q: 'Kaşe tasarım için hangi bilgiler gerekli?',
        a: 'Şirket unvanı, adresi, vergi numarası, kuruluş tarihi ve logo/tasarım öğeleri gereklidir. Yasal dokumentleri kontrol ederiz.'
      },
      {
        q: 'Kaşe baskısı maliyeti ne kadar?',
        a: 'Standart kaşe baskısı 300₺ den başlar. Özel tasarımlar ve otomatik kaşeler daha pahalı olabilir.'
      },
      {
        q: 'Kaşe tasarım önerisi var mı?',
        a: 'Evet, grafik ekibimiz yasal gereklilikler çerçevesinde profesyonel kaşe tasarımları yapıyor. Ücretsizdir.'
      }
    ],
    cta: 'WhatsApp ile Kaşe Siparişi Ver'
  },
  'etiket-baski-alanya': {
    tag: 'Etiket Baskısı',
    title: 'Ürün Etiketleri ve Paket Tasarımı - Markanızı Öne Çıkarın',
    subtitle: 'Alanya\'da etiket baskısı. Ürün etiketleri, paket etiketleri, barkodlu etiketler. Kaliteli tasarım, hızlı teslim.',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/kart2-8wjyA6bLExi6NPDQyowGrlhxjcRnnr.jpeg',
    intro: 'Ürün etiketleri ve paket tasarımı hizmetimizle markanızı öne çıkarın. Barkodlu, kendinden yapışkanlı, gıda, kozmetik ve tekstil etiketleri üretiyoruz. Su geçirmez, yırtılmaz ve yüksek kaliteli malzemelerle uzun ömürlü etiketler hazırlıyoruz. Özel boyut, şekil ve baskı seçenekleriyle ürünlerinize profesyonel bir görünüm kazandırıyoruz. Hem küçük hem büyük adetlerde hızlı ve ekonomik çözümler sunuyoruz.',
    sections: [
      {
        title: 'Etiket Türleri ve Tasarımları',
        items: [
          'Ürün bilgi etiketleri (barkod, içerik vb.)',
          'Fiyat etiketleri (kendinden yapışkanlı)',
          'Gıda ürünü etiketleri (beslenme bilgisi)',
          'Kozmetik etiketleri (uyarı ve kullanım)',
          'Tekstil etiketleri (ilk madde, bakım)',
          'Özel şekillerde kesimli etiketler'
        ]
      },
      {
        title: 'Etiket Baskısında Teknoloji',
        items: [
          'Yüksek çözünürlüklü renkli baskı',
          'Barkod ve QR kod entegrasyonu',
          'Su geçirmez ve dayanıklı malzemeler',
          'Kendinden yapışkanlı etiketler',
          'Yıkanabilir ve temizlenebilir etiketler',
          'Özel ısıl transfer etiketler'
        ]
      },
      {
        title: 'Etiket Tasarımında Dikkat Edilecekler',
        items: [
          'Yasal gereeklilikler (gıda, kozmetik)',
          'Barkod ve QR kod doğru yerleşimi',
          'Markanın görsel kimliği',
          'Okunabilir yazı tipi ve boyut',
          'Renk doğruluğu ve canlılığı',
          'Dayanıklılık ve yapışkanlık'
        ]
      }
    ],
    faq: [
      {
        q: 'Etiket minimum adet kaç?',
        a: 'Minimum 250-500 adettir. Daha az adet için dijital baskı kullanılabilir.'
      },
      {
        q: 'Etiketlere barkod eklenebilir mi?',
        a: 'Evet, barkod ve QR kodlar etiketlere basılabilir. Doğru formatı sağlamanız gerekir.'
      },
      {
        q: 'Etiket baskısı ne kadar sürer?',
        a: 'Tasarım hazırsa 3-5 gün içinde teslim edilir. Acil işler 2-3 günde yapılabilir.'
      },
      {
        q: 'Su geçirmez etiket var mı?',
        a: 'Evet, su geçirmez, yağ dirençli ve dayanıklı etiketler sunuyoruz.'
      }
    ],
    cta: 'WhatsApp ile Etiket Siparişi Ver'
  },
  'afis-baski-alanya': {
    tag: 'Afiş Baskısı',
    title: 'Etkinlik ve Reklam Afiş Tasarımı - Dikkat Çeken İçerik',
    subtitle: 'Alanya\'da profesyonel afiş baskısı. Etkinlik, kültür, reklam afiş ve davetiyeler. Kaliteli tasarım, hızlı baskı.',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/el%20ilan%C4%B1%20bask%C4%B1s%C4%B1-Lc9UFMK1571wFbHSBw7osqiJs4Bl3m.jpeg',
    intro: 'Etkinlik ve reklam afiş tasarımı ile mesajınızı geniş kitlelere ulaştırın. A3, A2, A1 ve özel boyutlarda dikkat çekici afişler basıyoruz. Canlı renkler, yüksek çözünürlük ve dayanıklı malzeme seçenekleriyle hem iç hem dış mekân kullanımına uygun afişler üretiyoruz. Hızlı üretim ve uygun fiyatlarla kampanya, etkinlik ve tanıtım afişlerinizi en kısa sürede teslim ediyoruz.',
    sections: [
      {
        title: 'Afiş Baskı Boyutları ve Türleri',
        items: [
          'A3 (297x420mm) standart afiş',
          'A2 (420x594mm) büyük boyut',
          'A1 (594x841mm) extra büyük',
          'Özel boyutlarda özel tasarımlar',
          'Şehir mobilyası alanlarına uygun afiş',
          'İç mekan ve dış mekan afiş'
        ]
      },
      {
        title: 'Afiş Tasarımında Yaratıcılık',
        items: [
          'Etkinlik ve duyuru afiş tasarımı',
          'Ticari reklam afiş',
          'Sosyal medya promoşyon afiş',
          'Özel tasarım ve markalama',
          'Dikkat çeken renk ve görsel',
          'Çok dillli tasarımlar (Türkçe, İngilizce, Rusça)'
        ]
      },
      {
        title: 'Afiş Baskısının Avantajları',
        items: [
          'Geniş kitleye hızlı ulaşım',
          'Dikkat çeken ve etkileyici görünüm',
          'Uygun fiyat ve hızlı teslim',
          'Renkli ve yüksek kalite',
          'Dış mekan ve trafik taşıyıcıları',
          'Etkinliklerde en etkili tanıtım aracı'
        ]
      }
    ],
    faq: [
      {
        q: 'Afiş baskısı kaç günde teslim olur?',
        a: 'Tasarım hazırsa 2-3 gün içinde teslim edilir. Acil afiş 24-48 saat içinde yapılabilir.'
      },
      {
        q: 'Afiş minimum adet kaç?',
        a: 'Minimum 10-50 adettir. Az adet için dijital baskı daha ekonomiktir.'
      },
      {
        q: 'Afiş tasarımını siz mi hazırlıyorsunuz?',
        a: 'Evet, tasarım ekibimiz etkinlik veya duyurularınıza uygun afiş tasarımları hazırlar.'
      },
      {
        q: 'Dış mekan için dayanıklı afiş var mı?',
        a: 'Evet, plastik materyale basılı veya lamine afiş, dış mekan kullanımı için dirençlidir.'
      }
    ],
    cta: 'WhatsApp ile Afiş Siparişi Ver'
  },
  'el-ilani-baski-alanya': {
    tag: 'El İlanı Baskısı',
    title: 'El İlanı ve Gözat Tasarım Baskısı - Etkin Tanıtım',
    subtitle: 'Alanya\'da el ilanı baskısı. Açıklamaca, menü el ilanları, duyuru ve promosyon ilanları. Hızlı ve ekonomik.',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hamam%20bro%C5%9F%C3%BCr%C3%BC-vYoJT1YUCLnZT5UVQHV6pUv98Q6MHL.jpeg',
    intro: 'El ilanı ve gözat tasarım baskısı hizmetimizle promosyon, duyuru ve menü ihtiyaçlarınızı karşılıyoruz. Hızlı ve ekonomik çözümlerle yüksek etkili el ilanları üretiyoruz. Renkli baskı, kaliteli kâğıt ve profesyonel tasarım desteğiyle mesajınızı net ve çekici şekilde iletiriz. Az adetten yüksek adete kadar her siparişte aynı özeni gösteriyor, kısa sürede teslimat sağlıyoruz.',
    sections: [
      {
        title: 'El İlanı Baskı Türleri',
        items: [
          'A5 (148x210mm) standart el ilanı',
          'A6 (105x148mm) kompakt el ilanı',
          'A4 (210x297mm) büyük boy el ilanı',
          'Özel boyutlarda kesimli ilanlar',
          'Renkli ve siyah-beyaz ilanlar',
          'Perforeli tasarımlar (telefon numarası şeridi)'
        ]
      },
      {
        title: 'El İlanı İçerik Örnekleri',
        items: [
          'Restoran ve kafe menü ilanları',
          'Güzellik ve spa hizmetleri',
          'Satış ve tanıtım promosyonları',
          'İşe alım ve kariyer duyuruları',
          'Turizm ve tur paketi ilanları',
          'Sosyal ve yardım kurum duyuruları'
        ]
      },
      {
        title: 'El İlanı Tasarımında Etkililik',
        items: [
          'Dikkat çeken başlık ve slogan',
          'Temiz ve okunabilir tasarım',
          'Kurumsal kimlik ve renk kullanımı',
          'İletişim bilgilerinin belirgin yeri',
          'Çekici görsel ve fotoğraflar',
          'Harekete geçirici açık çağrı (CTA)'
        ]
      }
    ],
    faq: [
      {
        q: 'El ilanı baskısı kaç günde teslim olur?',
        a: 'Tasarım hazırsa 1-2 gün içinde teslim edilir. Çok acil işler aynı gün başlanabilir.'
      },
      {
        q: 'El ilanı minimum adet kaç?',
        a: 'Minimum 100-500 adettir. Az adet dijital, çok adet ofset baskı kullanılır.'
      },
      {
        q: 'El ilanı baskısı maliyeti ne kadar?',
        a: '500 adet A5 el ilanı 250₺ den başlar. Adet arttıkça birim fiyat düşer.'
      },
      {
        q: 'Perforeli el ilanı yapılabilir mi?',
        a: 'Evet, telefon numarası şeridi için perforeli el ilanlar yapılabilir.'
      }
    ],
    cta: 'WhatsApp ile El İlanı Siparişi Ver'
  }
}

export default function ServicePage({ params }: { params: Promise<{ service: string }> }) {
  const { service } = use(params)
  const { t } = useLanguage()
  const serviceKey = service as keyof typeof SERVICES_DATA
  const data = SERVICES_DATA[serviceKey]

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Sayfa bulunamadı</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-primary text-primary-foreground">
        <div className="absolute inset-0">
          <Image
            src={data.image}
            alt={data.title}
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-primary/60" />
        </div>
        <div className="relative mx-auto flex max-w-6xl flex-col gap-6 px-4 py-20 sm:py-28">
          <div className="space-y-4">
            <div className="inline-block rounded-full border border-primary-foreground/30 px-4 py-1 text-sm font-medium backdrop-blur-sm">
              {data.tag}
            </div>
            <h1 className="font-heading text-4xl font-bold leading-tight sm:text-5xl md:text-6xl text-balance">
              {data.title}
            </h1>
            <p className="max-w-2xl text-lg text-primary-foreground/90 leading-relaxed">
              {data.subtitle}
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
              <a href={waLink()} target="_blank" rel="noopener noreferrer">
                <Phone className="size-5" />
                {data.cta}
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:py-24">
        <div className="prose prose-neutral max-w-none dark:prose-invert">
          <p className="text-lg leading-relaxed text-muted-foreground mb-8">
            {data.intro}
          </p>
        </div>
      </section>

      {/* Main Content Sections */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:py-24">
        <div className="space-y-16">
          {data.sections.map((section, idx) => (
            <div key={idx} className="grid items-center gap-12 lg:grid-cols-2">
              <div className={idx % 2 === 1 ? 'lg:order-2' : ''}>
                <div className="space-y-6">
                  <h2 className="font-heading text-3xl font-bold text-foreground">
                    {section.title}
                  </h2>
                  <ul className="space-y-3">
                    {section.items.map((item, itemIdx) => (
                      <li key={itemIdx} className="flex gap-3 text-muted-foreground leading-relaxed">
                        <span className="text-primary font-bold">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className={`relative aspect-square overflow-hidden rounded-2xl ${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
                <Image
                  src={data.image}
                  alt={section.title}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:py-24">
        <div className="rounded-2xl bg-primary text-primary-foreground p-12 text-center space-y-6">
          <h2 className="text-3xl font-bold">{data.cta}</h2>
          <p className="text-primary-foreground/90 text-lg max-w-2xl mx-auto">
            Sorularınız varsa veya hemen sipariş vermek istiyorsanız, WhatsApp üzerinden bize ulaşın. 24 saat içinde cevap garantisiyiz.
          </p>
          <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
            <a href={waLink()} target="_blank" rel="noopener noreferrer">
              <Phone className="size-5" />
              WhatsApp ile İletişime Geç
            </a>
          </Button>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:py-24">
        <div className="space-y-8">
          <div className="space-y-2">
            <h2 className="font-heading text-3xl font-bold text-foreground">Sıkça Sorulan Sorular</h2>
            <p className="text-muted-foreground">Sorunuz varsa bize ulaşın, yanıtlamaktan mutlu oluruz.</p>
          </div>
          <div className="grid gap-6">
            {data.faq.map((item, idx) => (
              <details
                key={idx}
                className="group rounded-lg border border-border bg-card p-6 hover:bg-card/80 transition-colors"
              >
                <summary className="flex cursor-pointer items-center justify-between font-semibold text-foreground">
                  {item.q}
                  <span className="ml-4 text-muted-foreground group-open:rotate-180 transition-transform">
                    ��
                  </span>
                </summary>
                <p className="mt-4 text-muted-foreground leading-relaxed">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
