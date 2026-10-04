import { NextResponse } from "next/server";
import { auth } from "@/app/api/auth/[...nextauth]/route";

export const middleware = auth((req) => {
  const { nextUrl } = req;
  const isLoggedIn = !!req.auth;
  const userRole = (req.auth?.user as { role?: string })?.role;

  const isAuthPage =
    nextUrl.pathname.startsWith("/auth") ||
    nextUrl.pathname.startsWith("/onboarding");

  const isHomePage = nextUrl.pathname === "/";

  // Allow everyone to access the landing page and auth pages
  if (!isLoggedIn && !isHomePage && !isAuthPage) {
    return NextResponse.redirect(new URL("/auth", req.url));
  }

  if (isLoggedIn) {
    const targetDashboard =
      userRole === "vet" ? "/vet-dashboard" : "/livestock-dashboard";

    // Send logged-in users away from auth/onboarding pages
    if (isAuthPage) {
      return NextResponse.redirect(new URL(targetDashboard, req.url));
    }

    // Keep users on the correct dashboard for their role
    if (
      nextUrl.pathname.startsWith("/livestock-dashboard") &&
      userRole === "vet"
    ) {
      return NextResponse.redirect(new URL("/vet-dashboard", req.url));
    }

    if (
      nextUrl.pathname.startsWith("/vet-dashboard") &&
      userRole !== "vet"
    ) {
      return NextResponse.redirect(new URL("/livestock-dashboard", req.url));
    }
  }

  return NextResponse.next();
});

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|images).*)"],
};