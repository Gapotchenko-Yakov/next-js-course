import { NextRequest } from "next/server";
import { headers } from "next/headers";

export const GET = async (request: NextRequest) => {
  const requestHeaders = new Headers(request.headers);
  const headerList = headers();

  console.log(requestHeaders.get("Authorization"));
  console.log(headerList.get("Authorization"));

  return new Response("<h1>Profile API data</h1>", {
    headers: {
      "Content-Type": "text/html",
    },
  });
};
