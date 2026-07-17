import type { Metadata } from "next"
import { pageMetadata } from "@/lib/seo"

export const metadata: Metadata = pageMetadata({
  path: "/blog",
  title: "Blog | Baskı Rehberi & İpuçları - Printing Guide & Tips",
  description:
    "Matbaa ve baskı dünyasından faydalı bilgiler: dijital vs ofset, menü baskısı ve kartvizit ipuçları. Printing guides and tips from Alanya Kale Matbaa.",
  keywords: ["baskı rehberi", "matbaa blog", "dijital ofset farkı", "printing guide Alanya"],
})

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return children
}
