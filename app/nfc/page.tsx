"use client"

import Image from "next/image"
import { useState } from "react"
import { Copy, ExternalLink, Star, Wifi, X } from "lucide-react"
import { QRCodeSVG } from "qrcode.react"

const WIFI_SSID = "FiberHGW_HUKC5S_5G"
const WIFI_PASSWORD = "z3uAWURmUTmy"
const WIFI_STRING = `WIFI:T:WPA;S:${WIFI_SSID};P:${WIFI_PASSWORD};;`

export default function NfcPage() {
  const [wifiOpen, setWifiOpen] = useState(false)
  const [copied, setCopied] = useState(false)

  async function copyPassword() {
    await navigator.clipboard.writeText(WIFI_PASSWORD)
    setCopied(true)
    window.setTimeout(() => setCopied(false), 2200)
  }

  return (
    <main className="min-h-dvh bg-[#eef3f7] px-5 py-8 text-[#0d2137] sm:flex sm:items-center sm:justify-center sm:py-12">
      <div className="w-full max-w-md">
        <header className="mb-8 text-center">
          <div className="mx-auto mb-4 flex h-16 w-48 items-center justify-center rounded-2xl bg-white px-4 shadow-lg shadow-[#0d2137]/20">
            <Image src="/images/kalematbaalogo.svg" alt="Alanya Kale Matbaa logosu" width={180} height={58} className="h-auto max-h-12 w-auto object-contain" priority />
          </div>
          <h1 className="font-heading text-2xl font-bold tracking-tight">Alanya Kale Matbaa</h1>
          <p className="mt-1 text-sm text-[#5b6b7c]">Hızlı erişim</p>
        </header>

        <section className="space-y-4" aria-label="Hızlı bağlantılar">
          <a href="https://g.page/r/Cb_3ESkPryqgEBM/review" target="_blank" rel="noreferrer" className="group flex min-h-24 items-center gap-4 rounded-2xl border border-[#dce5ec] bg-white p-5 shadow-[0_10px_30px_rgba(13,33,55,0.08)] transition hover:-translate-y-0.5 hover:shadow-lg active:scale-[0.99]">
            <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-[#e8f0fe] text-2xl font-bold text-[#4285f4]">G</span>
            <span className="min-w-0 flex-1"><strong className="block text-base">Google Yorum Bırak</strong><span className="mt-1 block text-sm text-[#5b6b7c]">Deneyiminizi paylaşın, bize destek olun</span></span>
            <ExternalLink className="size-5 text-[#8aa0b3] transition group-hover:text-[#4285f4]" aria-hidden="true" />
          </a>

          <button type="button" onClick={() => setWifiOpen(true)} className="group flex min-h-24 w-full items-center gap-4 rounded-2xl border border-[#dce5ec] bg-white p-5 text-left shadow-[0_10px_30px_rgba(13,33,55,0.08)] transition hover:-translate-y-0.5 hover:shadow-lg active:scale-[0.99]">
            <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-[#dff7f4] text-[#0d9f94]"><Wifi className="size-6" aria-hidden="true" /></span>
            <span className="min-w-0 flex-1"><strong className="block text-base">WiFi&apos;ye Bağlan</strong><span className="mt-1 block text-sm text-[#5b6b7c]">Misafir ağına otomatik bağlan</span></span>
            <Wifi className="size-5 text-[#8aa0b3]" aria-hidden="true" />
          </button>
        </section>

        <p className="mt-8 text-center text-xs text-[#8aa0b3]">Alanya&apos;da kaliteli baskı, hızlı teslimat</p>
      </div>

      {wifiOpen && <div className="fixed inset-0 z-50 flex items-end justify-center bg-[#0d2137]/45 p-4 sm:items-center" role="presentation" onClick={() => setWifiOpen(false)}>
        <section role="dialog" aria-modal="true" aria-labelledby="wifi-title" className="w-full max-w-sm rounded-3xl bg-white p-6 shadow-2xl" onClick={(event) => event.stopPropagation()}>
          <div className="mb-5 flex items-start justify-between"><div><h2 id="wifi-title" className="font-heading text-xl font-bold">WiFi&apos;ye Bağlan</h2><p className="mt-1 text-sm text-[#5b6b7c]">Kameranızla QR kodu tarayın</p></div><button type="button" onClick={() => setWifiOpen(false)} aria-label="Kapat" className="rounded-full p-2 text-[#5b6b7c] hover:bg-[#eef3f7]"><X className="size-5" /></button></div>
          <div className="flex justify-center rounded-2xl bg-[#f7f9fb] p-5"><QRCodeSVG value={WIFI_STRING} size={220} level="H" includeMargin aria-label="WiFi bağlantı QR kodu" /></div>
          <div className="mt-5 space-y-3 text-sm"><div className="flex items-center justify-between gap-3 rounded-xl bg-[#f7f9fb] px-4 py-3"><span className="text-[#5b6b7c]">Ağ adı</span><strong className="text-right">{WIFI_SSID}</strong></div><div className="flex items-center justify-between gap-3 rounded-xl bg-[#f7f9fb] px-4 py-3"><span className="text-[#5b6b7c]">Şifre</span><strong className="text-right">{WIFI_PASSWORD}</strong></div><button type="button" onClick={copyPassword} className="flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#0d2137] font-semibold text-white transition hover:bg-[#12324f] active:scale-[0.99]"><Copy className="size-4" />{copied ? "Şifre kopyalandı" : "Şifreyi Kopyala"}</button></div>
          <p className="mt-4 text-center text-xs leading-relaxed text-[#5b6b7c]">QR kodu telefonunuzun kamerasıyla tarayın veya şifreyi kopyalayıp WiFi ayarlarından bağlanın</p>
        </section>
      </div>}
    </main>
  )
}
