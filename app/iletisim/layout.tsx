import type { Metadata } from "next"
import { pageMetadata } from "@/lib/seo"

export const metadata: Metadata = pageMetadata({
  path: "/iletisim",
  title: "İletişim | Alanya Kale Matbaa - Contact & Location in Alanya",
  description:
    "Alanya Kale Matbaa iletişim: adres, telefon, WhatsApp ve harita. Ücretsiz teklif alın. Contact our print shop in Alanya, Turkey for a free quote via WhatsApp.",
  keywords: ["Alanya matbaa iletişim", "Alanya matbaa telefon", "matbaa Alanya adres", "print shop Alanya contact"],
})

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children
}
