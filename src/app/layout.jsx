import Header from "./components/Header";
import Footer from "./components/Footer";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import CartProvider from "./context/CartContext";
import { Suspense } from "react";
import Loading from "./loading";

export const metadata = {
  title: "E-commerce",
  description:
    "### Electronics Discover the latest in electronic gadgets and devices at unbeatable prices. From smartphones and laptops to smart home devices and gaming consoles, our extensive collection has something for everyone. Shop now and upgrade your tech game with top brands and the latest models.",
};

export default function RootLayout({ children }) {
  const clerkFrontendApi = process.env.NEXT_PUBLIC_CLERK_FRONTEND_API_KEY; // Replace with your actual environment variable
  if (!clerkFrontendApi) {
    throw new Error(
      "Missing NEXT_PUBLIC_CLERK_FRONTEND_API_KEY environment variable"
    );
  }
  return (
    <ClerkProvider apiKey={clerkFrontendApi}>
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
