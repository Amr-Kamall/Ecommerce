"use client";
import { useContext, useState, createContext, useEffect } from "react";
import { useUser } from "@clerk/nextjs";
import { usePathname, useRouter } from "next/navigation";
const CartContext = createContext();

function CartProdvider({ children }) {
  const router = useRouter();
  const { user } = useUser();
  const [quantity, setQuantity] = useState(1);
  const pathname = usePathname();

  const ls = typeof window !== "undefined" ? window.localStorage : null;
  const [cart, setCart] = useState([]);

  useEffect(() => {
    if (ls && ls.getItem("cart")) {
      setCart(JSON.parse(ls.getItem("cart")));
    }
  }, [ls]);

  useEffect(() => {
    if (cart?.length > 0) {
      ls?.setItem("cart", JSON.stringify(cart));
    }
  }, [cart, ls]);
  // add to cart function
  function handleAddToCart(product) {
    if (!user) {
      router.push("/sign-up");
    }
    const searchedProduct = cart?.find((pro) => pro?.id === product.id);
    console.log(searchedProduct);
    if (searchedProduct === undefined) {
      setCart([...cart, product]);
    } else {
      return null;
    }
  }
  console.log(cart);

  // remove product from the cart
  function handleRemoveProduct(productId) {
    const searchedProduct = cart.find((pro) => pro.id === productId);
    console.log(searchedProduct);
    if (searchedProduct) {
      setCart((cart) =>
        cart.filter((product) => product.id !== searchedProduct.id)
      );
    }
  }

  // increase quantity
  function handleQuantityDecrement(product) {
    // before we decrease quantity we should check that we are in the selected product
    const selectedItem = cart.find((item) => item.id === product.id);

    selectedItem.quantity > 1
      ? setCart(
          cart.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity - 1 }
              : item
          )
        )
      : setCart((cart) => cart.filter((item) => item.id !== product.id));
    updateCartPrice(product);
  }
  // decrease quantity
  function handleQuantityIncrement(product) {
    // before we increase quantity we should check that we are in the selected product
    setQuantity((q) => q + 1);
    setCart(
      cart.map((pro) =>
        pro.id === product.id
          ? {
              ...pro,
              quantity: pro.quantity + 1,
            }
          : pro
      )
    );
    // setCart((products) =>
    //   products.map((pro) =>
    //     pro.id === product.id ? { ...pro, quantity: pro.quantity + 1 } : pro
    //   )
    // );
    updateCartPrice(product);
  }

  // updated price
  function updateCartPrice(product) {
    const selectedId = product.id;
    console.log(selectedId); //36
    const selectedItem = cart.find((item) => item.id === selectedId);
    console.log(selectedItem); //get undefined
    const updatePrice =
      Number(selectedItem?.price) * Number(selectedItem?.quantity);
    return updatePrice.toFixed(2);
  }

  //calculate sum of price
  function calculateSumPrice() {
    const sum = cart.reduce(
      (acc, pro) => acc + pro.price * (pro.quantity || 1),
      0
    );
    return sum.toFixed(2);
  }

  //

  useEffect(
    function () {
      // check pathname
      if (pathname.startsWith("/payment-confirm")) {
        setCart([]);
      }
    },
    [pathname, setCart]
  );

  // store data in local storage
  useEffect(
    function () {
      localStorage.setItem("cart", JSON.stringify(cart));
    },
    [cart]
  );

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
        quantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  //create our custom hook to use the context in every place
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("Cities context was used outside the CitiesProvider ");
  }
  return context;
}

export default CartProdvider;
