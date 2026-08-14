"use client"

import { createContext, useContext, useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { dictionaries, type Dictionary, type Lang } from "@/lib/i18n"

type LanguageContextValue = {
  lang: Lang
  setLang: (lang: Lang) => void
  t: Dictionary
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

const STORAGE_KEY = "akm-lang"

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("tr")
  const router = useRouter()

  useEffect(() => {
    if (typeof window === "undefined") return
    // URL ?lang= takes priority (shareable, matches hreflang), then localStorage.
    const pathLang = window.location.pathname.match(/^\/(en|ru)(?=\/|$)/)?.[1] as Lang | undefined
    const urlLang = (new URLSearchParams(window.location.search).get("lang") as Lang | null) ?? pathLang
    if (urlLang && urlLang in dictionaries) {
      setLangState(urlLang)
      localStorage.setItem(STORAGE_KEY, urlLang)
      return
    }
    const stored = localStorage.getItem(STORAGE_KEY) as Lang | null
    if (stored && stored in dictionaries) setLangState(stored)
  }, [])

  useEffect(() => {
    if (typeof document !== "undefined") document.documentElement.lang = lang
  }, [lang])

  const setLang = (next: Lang) => {
    setLangState(next)
    if (typeof window !== "undefined") {
      localStorage.setItem(STORAGE_KEY, next)
      // Use crawlable locale prefixes while preserving the current route.
      const url = new URL(window.location.href)
      const currentPath = url.pathname.replace(/^\/(en|ru)(?=\/|$)/, "") || "/"
      url.pathname = next === "tr" ? currentPath : `/${next}${currentPath === "/" ? "" : currentPath}`
      url.searchParams.delete("lang")
      window.history.pushState({}, "", url)
      router.refresh()
    }
  }

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: dictionaries[lang] }}>{children}</LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider")
  return ctx
}
