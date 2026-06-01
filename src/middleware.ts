import { type NextRequest, NextResponse } from "next/server";
import {
  defaultLocale,
  isLocale,
  localeCookie,
  locales,
  type Locale,
} from "./i18n/config";

function getPreferredLocale(request: NextRequest): Locale {
  const cookieLocale = request.cookies.get(localeCookie)?.value;
  if (cookieLocale && isLocale(cookieLocale)) {
    return cookieLocale;
  }

  const acceptLanguage = request.headers.get("accept-language")?.toLowerCase() ?? "";
  if (acceptLanguage.includes("pt")) {
    return "pt-BR";
  }

  return defaultLocale;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.includes(".")
  ) {
    return NextResponse.next();
  }

  const pathnameLocale = locales.find(
    (locale) =>
      pathname === `/${locale}` || pathname.startsWith(`/${locale}/`),
  );

  if (pathnameLocale) {
    const response = NextResponse.next();
    response.headers.set("x-locale", pathnameLocale);
    response.cookies.set(localeCookie, pathnameLocale, {
      path: "/",
      maxAge: 60 * 60 * 24 * 365,
    });
    return response;
  }

  const locale = getPreferredLocale(request);
  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
