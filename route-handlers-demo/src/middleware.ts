import { match } from "assert";
import { NextResponse, NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const response = NextResponse.next();

  if (!request.cookies.get("theme")) {
    response.cookies.set("theme", "dark");
  }

  response.headers.set("custom-header", "custom-value");

  return response;

  //   if (request.nextUrl.pathname === "/profile") {
  //     return NextResponse.rewrite(new URL("/hello", request.url));
  //   }

  //   return NextResponse.redirect(new URL("/", request.url));
}

// export const config = {
//   matcher: "/profile",
// };
