// layout.js
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import CartProvider from "./context/CartContext";
import { Suspense } from "react";
import Loading from "./loading";
export default function RootLayout({ children }) {
  console.log(
    "NEXT_PUBLIC_CLERK_FRONTEND_API_KEY:",
    process.env.NEXT_PUBLIC_CLERK_FRONTEND_API_KEY
  );
  console.log("amr yalaaaaaaa");
  const clerkFrontendApi = process.env.NEXT_PUBLIC_CLERK_FRONTEND_API_KEY;
  if (!clerkFrontendApi) {
    throw new Error(
      "Missing NEXT_PUBLIC_CLERK_FRONTEND_API_KEY environment variable"
    );
  }
  return (
    <ClerkProvider
      publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}
    >
      <CartProvider>
        <html lang="en">
          <head>
            <link rel="icon" href="/add-to-cart.png" />
          </head>
          <body>
            <Header />
            <Suspense fallback={<Loading />}>
              <div className="mb-24">{children}</div>
            </Suspense>
            <Footer />
          </body>
        </html>
      </CartProvider>
    </ClerkProvider>
  );
}
