import { NextRequest, NextResponse } from "next/server";

// aegis.webcheer.co is a placeholder home for the Aegis app until it has its
// own domain — this rewrites that subdomain's requests to the /aegis route
// group so the URL bar shows "aegis.webcheer.co" (not ".../aegis") while the
// rest of webcheer.co is completely untouched. Vercel (the actual host behind
// Cloudflare's DNS/proxy layer here) runs Next.js Middleware natively, unlike
// Cloudflare Pages where support depends on the build adapter in use.
export function middleware(request: NextRequest) {
  const host = request.headers.get("host") ?? "";

  if (host.startsWith("aegis.")) {
    const url = request.nextUrl.clone();
    if (!url.pathname.startsWith("/aegis")) {
      url.pathname = `/aegis${url.pathname}`;
      return NextResponse.rewrite(url);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next|api|favicon.ico|assets).*)"],
};
