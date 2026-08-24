import { NextRequest, NextResponse } from "next/server"

const localizedPath = /^\/(en|ru)(\/.*)?$/

export function proxy(request: NextRequest) {
  const requestHeaders = new Headers(request.headers)
  requestHeaders.set("x-pathname", request.nextUrl.pathname)
  const match = request.nextUrl.pathname.match(localizedPath)
  if (!match) return NextResponse.next({ request: { headers: requestHeaders } })

  const [, lang, rest = ""] = match
  const url = request.nextUrl.clone()
  url.pathname = rest || "/"
  url.searchParams.set("lang", lang)
  return NextResponse.rewrite(url, { request: { headers: requestHeaders } })
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
}
