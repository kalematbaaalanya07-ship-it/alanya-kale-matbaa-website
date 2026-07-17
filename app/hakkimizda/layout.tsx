import type { Metadata } from "next"
import { pageMetadata } from "@/lib/seo"

export const metadata: Metadata = pageMetadata({
  path: "/hakkimizda",
  title: "Hakkımızda | 35+ Yıllık Alanya Matbaası - About Us",
  description:
    "35+ yıllık tecrübe ve 20.000+ mutlu müşteri ile Alanya'nın güvenilir matbaası. About Alanya Kale Matbaa: 35+ years of trusted printing experience in Alanya, Turkey.",
  keywords: ["Alanya matbaa hakkında", "Alanya kale matbaa", "about printing Alanya", "matbaa tecrübe"],
})

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children
}
