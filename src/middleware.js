import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware({
  publicRoutes: ["/"],
  publishableKey: process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY,
});

export const config = {
  matcher: [
    "/((?!.*\\..*|_next).*)", // Matches all paths except files and _next paths
    "/", // Matches the root path
    "/(api|trpc)(.*)", // Matches API and TRPC paths
  ],
};
