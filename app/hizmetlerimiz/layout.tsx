import type { Metadata } from "next"
import { pageMetadata } from "@/lib/seo"
import { site } from "@/lib/site"

export const metadata: Metadata = pageMetadata({
  path: "/hizmetlerimiz",
  title: "Hizmetlerimiz | Dijital & Ofset Baskı, Kaşe - Printing Services in Alanya",
  description:
    "Alanya'da dijital baskı, ofset baskı, kaşe, katalog, broşür, menü ve kartvizit baskısı. Konica Minolta C4065 ile canlı renkler. Digital & offset printing services in Alanya, Turkey.",
  keywords: [
    "Alanya dijital baskı",
    "Alanya ofset baskı",
    "kaşe Alanya",
    "katalog baskı",
    "menü baskı Alanya",
    "printing services Alanya",
  ],
})

// Service-level structured data for the printing services offered in Alanya.
const services = [
  {
    name: "Dijital Baskı",
    description:
      "Konica Minolta AccurioPrint C4065 ile hızlı, yüksek çözünürlüklü dijital baskı. Katalog, broşür, menü ve kartvizit.",
  },
  {
    name: "Ofset Baskı",
    description: "Yüksek adetli işler için ekonomik ve kaliteli ofset baskı çözümleri.",
  },
  {
    name: "Kaşe",
    description: "Otomatik ve klasik kaşe üretimi, aynı gün teslim seçeneği.",
  },
  {
    name: "Katalog & Broşür Baskı",
    description: "Turistik ve kurumsal katalog, broşür ve tanıtım materyalleri baskısı.",
  },
  {
    name: "Menü Baskısı",
    description: "Restoran ve kafeler için dayanıklı, laminasyonlu menü baskısı.",
  },
]

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  const serviceSchema = services.map((s) => ({
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: s.name,
    name: s.name,
    description: s.description,
    provider: {
      "@type": "LocalBusiness",
      name: site.name,
      "@id": `${site.url}/#business`,
    },
    areaServed: [
      { "@type": "City", name: "Alanya" },
      { "@type": "AdministrativeArea", name: "Antalya" },
    ],
  }))

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      {children}
    </>
  )
}
