import type { Metadata } from "next"
import { pageMetadata } from "@/lib/seo"

export const metadata: Metadata = pageMetadata({
  path: "/portfoy",
  title: "Portföy & Galeri | Baskı İşlerimiz - Our Printing Portfolio",
  description:
    "Alanya Kale Matbaa baskı örnekleri: kataloglar, broşürler, menüler, kartvizitler ve davetiyeler. Browse our printing portfolio and past work in Alanya, Turkey.",
  keywords: ["matbaa portföy Alanya", "baskı örnekleri", "printing portfolio Alanya", "katalog broşür örnekleri"],
  image: "/images/brochures.webp",
})

export default function PortfolioLayout({ children }: { children: React.ReactNode }) {
  return children
}
