import { Analytics } from "@vercel/analytics/next"
import type { Metadata, Viewport } from "next"
import { Inter, Poppins } from "next/font/google"
import { LanguageProvider } from "@/components/language-provider"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { StructuredData } from "@/components/structured-data"
import { site } from "@/lib/site"
import "./globals.css"

const inter = Inter({ subsets: ["latin", "latin-ext", "cyrillic"], variable: "--font-sans" })
const poppins = Poppins({
  subsets: ["latin", "latin-ext"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-heading",
})

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Alanya Matbaa | Dijital & Ofset Baskı, Kaşe - Alanya Kale Matbaa",
    template: "%s | Alanya Kale Matbaa",
  },
  description:
    "Alanya matbaa ve dijital baskı: Konica Minolta AccurioPrint C4065 ile katalog, broşür, menü, kaşe ve kartvizit baskısı. Ücretsiz profesyonel tasarım, hızlı ve zamanında teslimat.",
  generator: "v0.app",
  applicationName: site.name,
  keywords: [
    "Alanya matbaa",
    "Alanya dijital baskı",
    "Konica Minolta C4065",
    "katalog baskı Alanya",
    "menü baskı Alanya",
    "kaşe Alanya",
    "broşür baskı Alanya",
    "ofset baskı Alanya",
    "kartvizit Alanya",
    "matbaa Antalya",
  ],
  authors: [{ name: site.name }],
  alternates: { canonical: site.url },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    alternateLocale: ["en_US", "ru_RU"],
    url: site.url,
    siteName: site.name,
    title: "Alanya Kale Matbaa | Kaliteli Baskı, Zamanında Teslimat",
    description:
      "Alanya'nın güvenilir matbaası. Dijital & ofset baskı, kaşe, katalog, broşür ve menü baskısı. Ücretsiz profesyonel grafik tasarım.",
    images: [{ url: "/images/digital-press.png", width: 1200, height: 900, alt: "Alanya Kale Matbaa dijital baskı makinesi" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Alanya Kale Matbaa | Kaliteli Baskı, Zamanında Teslimat",
    description: "Alanya dijital & ofset baskı, kaşe, katalog ve menü baskısı. Ücretsiz profesyonel tasarım.",
    images: ["/images/digital-press.png"],
  },
  robots: { index: true, follow: true },
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
        <StructuredData />
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
