import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  console.log(request.nextUrl.pathname);
  if (request.nextUrl.pathname === "/help") {
    return NextResponse.redirect(new URL("/ayuda", request.url));
  }
  return NextResponse.redirect(new URL("/", request.url));
}

export const config = {
  matcher: ["/home", "/help"],
};

// url = /help redirigirá a /ayuda
