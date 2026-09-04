import type { Metadata } from "next"
import { pageMetadata } from "@/lib/seo"

export const metadata: Metadata = pageMetadata({
  path: "/logolar",
  title: "Logolar | Alanya Kale Matbaa",
  description: "Alanya Kale Matbaa logolarını SVG formatında indirin ve tasarımlarınızda kullanın.",
  keywords: ["Alanya Kale Matbaa logo", "SVG logo", "matbaa logo indir"],
})

export default function LogolarLayout({ children }: { children: React.ReactNode }) {
  return children
}
