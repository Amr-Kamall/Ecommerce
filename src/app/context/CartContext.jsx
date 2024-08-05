"use client";
import { useContext, useState, createContext, useEffect } from "react";
import { useUser } from "@clerk/nextjs";
import { usePathname, useRouter } from "next/navigation";

const CartContext = createContext();

function CartProvider({ children }) {
  const router = useRouter();
  const { user } = useUser();
  const pathname = usePathname();
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const ls = typeof window !== "undefined" ? window.localStorage : null;
    if (ls) {
      const savedCart = ls.getItem("cart");
      if (savedCart) {
        setCart(JSON.parse(savedCart));
      }
    }
  }, []);

  useEffect(() => {
    const ls = typeof window !== "undefined" ? window.localStorage : null;
    if (ls && cart.length > 0) {
      ls.setItem("cart", JSON.stringify(cart));
    }
  }, [cart]);

  function handleAddToCart(product) {
    if (!user) {
      router.push("/sign-up");
      return;
    }
    const searchedProduct = cart.find((pro) => pro.id === product.id);
    if (!searchedProduct) {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  }

  function handleRemoveProduct(productId) {
    setCart(cart.filter((product) => product.id !== productId));
  }

  function handleQuantityDecrement(product) {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === product.id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      ).filter(item => item.quantity > 0)
    );
  }

  function handleQuantityIncrement(product) {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  }

  function updateCartPrice(product) {
    const selectedItem = cart.find((item) => item.id === product.id);
    if (!selectedItem) return "0.00";
    return (selectedItem.price * selectedItem.quantity).toFixed(2);
  }

  function calculateSumPrice() {
    const sum = cart.reduce(
      (acc, pro) => acc + pro.price * pro.quantity,
      0
    );
    return sum.toFixed(2);
  }

  useEffect(() => {
    if (pathname.startsWith("/payment-confirm")) {
      setCart([]);
    }
  }, [pathname]);

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        onAddToCart: handleAddToCart,
        calculateSumPrice,
        handleRemoveProduct,
        handleQuantityDecrement,
        handleQuantityIncrement,
        updateCartPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("Cart context was used outside the CartProvider.");
  }
  return context;
}

export default CartProvider;
