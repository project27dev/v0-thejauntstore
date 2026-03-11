import { NextRequest, NextResponse } from "next/server";
import { jwtVerify } from "jose";

const PUBLIC_PATHS = ["/admin/login", "/api/admin/login"];

function getSecret() {
  const secret = process.env.ADMIN_SECRET;
  if (!secret) throw new Error("ADMIN_SECRET is not set");
  return new TextEncoder().encode(secret);
}

export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Allow public paths through
  if (PUBLIC_PATHS.some((p) => pathname.startsWith(p))) {
    return NextResponse.next();
  }

  const isAdminPage = pathname.startsWith("/admin");
  const isApiRoute = pathname.startsWith("/api");

  if (!isAdminPage && !isApiRoute) {
    return NextResponse.next();
  }

  const token = request.cookies.get("admin_session")?.value;

  if (!token) {
    return isAdminPage
      ? NextResponse.redirect(new URL("/admin/login", request.url))
      : new NextResponse(JSON.stringify({ error: "Unauthorized" }), {
          status: 401,
          headers: { "Content-Type": "application/json" },
        });
  }

  try {
    await jwtVerify(token, getSecret());
    return NextResponse.next();
  } catch {
    const response = isAdminPage
      ? NextResponse.redirect(new URL("/admin/login", request.url))
      : new NextResponse(JSON.stringify({ error: "Unauthorized" }), {
          status: 401,
          headers: { "Content-Type": "application/json" },
        });

    // Clear the invalid cookie
    response.cookies.set("admin_session", "", { maxAge: 0 });
    return response;
  }
}

export const config = {
  matcher: ["/admin/:path*", "/api/:path*"],
};
