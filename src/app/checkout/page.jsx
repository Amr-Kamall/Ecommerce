"use client";

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./_components/CheckoutForm";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHER_KEY);

function Checkout() {
  const [loading, setLoading] = useState(true);
  const searchParams = useSearchParams();
  console.log(Number(searchParams.get("amount")) * 100);
  const { cart } = useCart();

  useEffect(() => {
    // Wait for the stripePromise to resolve to indicate the library is loaded
    stripePromise.then(() => setLoading(false));
  }, []);

  const options = {
    mode: "payment",
    currency: "usd",
    amount: Number(searchParams.get("amount")) * 100,
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="bigLoader"></p>
      </div>
    );
  }

  if (cart.length === 0) {
    return (
      <h1 className="pt-44 text-3xl font-semibold text-center">
        there is no products!
      </h1>
    );
  }

  return (
    <Elements stripe={stripePromise} options={options}>
      <CheckoutForm amount={Number(searchParams.get("amount")) * 100} />
    </Elements>
  );
}

export default Checkout;
