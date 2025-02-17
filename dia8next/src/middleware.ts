import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export default async function middleware(request: NextRequest) {
  console.log("middleware", request);

  const token = await getToken({
    req: request,
    secret: process.env.NEXTAUTH_SECRET,
  });

  if (
    token === null &&
    (request.url.includes("area-privada") || request.url.includes("protected"))
  ) {
    const url = new URL("/auth/login", request.url);
    return NextResponse.redirect(url);
  }

  console.log("token", token);
}

export const config = {
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};

// /protected
//que solo se pueda visualizar por usuarios que hayan iniciado sesion
