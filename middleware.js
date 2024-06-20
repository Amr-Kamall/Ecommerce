import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware({
  publicRoutes: ["/"],
});

export const config = {
  matcher: [
    "/((?!.*\\..*|_next).*)", // Matches all paths except files and _next paths
    "/", // Matches the root path
    "/(api|trpc)(.*)", // Matches API and TRPC paths
  ],
};
