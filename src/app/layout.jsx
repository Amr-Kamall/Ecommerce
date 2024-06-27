// layout.js
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import CartProvider from "./context/CartContext";
import { Suspense } from "react";
import Loading from "./loading";

export const metadata = {
  title: "TRENDMARKET",
  description:
    "we are more than just a shopping destination. We are a community of passionate individuals who share a love for great products and excellent service. Follow us on social media to stay updated on the latest arrivals, special offers, and exclusive promotions.",
};
export default function RootLayout({ children }) {
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
              <div className="mb-24 min-h-[30vh]">{children}</div>
              {/* <PageNotFound/> */}
            </Suspense>
            <Footer />
          </body>
        </html>
      </CartProvider>
    </ClerkProvider>
  );
}
