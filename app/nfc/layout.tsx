import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Alanya Kale Matbaa | Hızlı Erişim",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noarchive: true,
    },
  },
}

export default function NfcLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children
}
