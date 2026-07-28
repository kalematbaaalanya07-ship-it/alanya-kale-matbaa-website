import type { Metadata } from "next"
import { pageMetadata } from "@/lib/seo"

export const metadata: Metadata = pageMetadata({
  path: "/kase",
  title: "Profesyonel Kaşe Basımı | Alanya Kale Matbaa - Professional Seals & Stamps",
  description:
    "Alanya Kale Matbaa kaşe basımı: şirket kaşesi, öğretmen kaşesi, cep kaşesi, yuvarlak otomatik kaşe. Siyah, mavi, kırmızı mürekkep seçenekleri. Hızlı teslimat ve uygun fiyat.",
  keywords: [
    "Alanya kaşe",
    "kaşe basımı Alanya",
    "şirket kaşesi",
    "öğretmen kaşesi",
    "cep kaşesi",
    "yuvarlak otomatik kaşe",
    "stampa kaşe",
    "logo kaşe",
    "professional stamp Alanya",
    "seal printing Turkey",
  ],
})

export default function KaseLayout({ children }: { children: React.ReactNode }) {
  return children
}
