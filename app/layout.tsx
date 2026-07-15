import { Analytics } from "@vercel/analytics/next"
import type { Metadata, Viewport } from "next"
import { Inter, Poppins } from "next/font/google"
import { LanguageProvider } from "@/components/language-provider"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import "./globals.css"

const inter = Inter({ subsets: ["latin", "latin-ext", "cyrillic"], variable: "--font-sans" })
const poppins = Poppins({
  subsets: ["latin", "latin-ext"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-heading",
})

export const metadata: Metadata = {
  title: "Alanya Kale Matbaa | Kaşe, Ofset ve Dijital Baskı",
  description:
    "Alanya'da kaşe, ofset ve dijital baskı hizmetleri. Konica Minolta AccurioPrint C4065 ile hızlı, kaliteli baskı. Kaliteli baskı, zamanında teslimat.",
  generator: "v0.app",
  keywords: ["matbaa", "Alanya", "kaşe", "ofset baskı", "dijital baskı", "broşür", "davetiye", "kartvizit"],
}

export const viewport: Viewport = {
  themeColor: "#0d2137",
  colorScheme: "light",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="tr" className={`${inter.variable} ${poppins.variable} bg-background`}>
      <body className="antialiased font-sans">
        <LanguageProvider>
          <SiteHeader />
          <main className="min-h-screen">{children}</main>
          <SiteFooter />
        </LanguageProvider>
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  )
}
