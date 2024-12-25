import { NextResponse } from "next/server";

export async function middleware() {
  // TODO: implement middleware for onboarding
  // const { pathname } = request.nextUrl;
  // // Check if the request is for the onboarding page
  // Logger.logMessage("Pathname", pathname);
  // const onboardingRegex = /^\/profile\/[^/]+\/onboarding$/;
  // if (onboardingRegex.test(pathname)) {
  //   const token = request.cookies.get("token")?.value;
  //   console.log("Token", token);
  //   if (!token) {
  //     // Redirect to login if token is missing
  //     return NextResponse.redirect(new URL(URLMap.LOGIN_PAGE, request.url));
  //   }

  //   try {
  //     const decoded = await verifyToken(token);
  //     Logger.logMessage("Decoded token", decoded);
  //     const profileId = pathname.split("/")[1];

  //     if (decoded.username !== profileId) {
  //       // Redirect if token's profileId does not match the URL profileId
  //       return NextResponse.redirect(
  //         new URL(`/profile/${decoded.username}`, request.url)
  //       );
  //     }

  //     // Allow the request to proceed
  //     return NextResponse.next();
  //   } catch (error) {
  //     Logger.logError("Error verifying token", error);
  //     // Redirect to login on token verification failure
  //     return NextResponse.redirect(new URL(URLMap.LOGIN_PAGE, request.url));
  //   }
  // }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|.*\\.png$).*)",
    "/:profileId/onboarding",
  ],
};
