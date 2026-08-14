import { NextRequest, NextResponse } from "next/server"

const localizedPath = /^\/(en|ru)(\/.*)?$/

export function proxy(request: NextRequest) {
  const match = request.nextUrl.pathname.match(localizedPath)
  if (!match) return NextResponse.next()

  const [, lang, rest = ""] = match
  const url = request.nextUrl.clone()
  url.pathname = rest || "/"
  url.searchParams.set("lang", lang)
  return NextResponse.rewrite(url)
}

export const config = {
  matcher: ["/en/:path*", "/ru/:path*"],
}
