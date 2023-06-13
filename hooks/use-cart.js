import { useState, createContext, useContext, useEffect } from "react";

import { initiateCheckout } from "@/lib/payments";

import products from "@/Data/products.json";

const defaultCart = {
  products: {},
};

export const CartContext = createContext();

export function useCartState() {
  const [cart, updateCart] = useState(defaultCart);

  useEffect(() => {
    const stateFromStorage = window.localStorage.getItem("Ceramics_Store");
    const data = stateFromStorage && JSON.parse(stateFromStorage);
    if (data) {
      updateCart(data);
    }
  }, []);

  useEffect(() => {
    const data = JSON.stringify(cart);
    window.localStorage.setItem("Ceramics_Store", data);
  }, [cart]);

  const cartItems = Object.keys(cart.products).map((key) => {
    const product = products.find(({ id }) => `${id}` === `${key}`);
    return {
      ...cart.products[key],
      pricePerItem: product.price,
    };
  });

  // Remove item in cart
  function removeFromCart({ id } = {}) {
    updateCart((prev) => {
      let cart = { ...prev };
      delete cart.products[id]; // Remove the item from the cart
      return cart;
    });
  }
  // function removeFromCart({ id } = {}) {
  //   updateCart((prev) => {
  //     let cart = { ...prev };
  //     if (cart.products[id]) {
  //       const updatedQuantity = cart.products[id].quantity - 1;
  //       if (updatedQuantity > 0) {
  //         cart.products[id].quantity = updatedQuantity;
  //       } else {
  //         delete cart.products[id];
  //       }
  //     }
  //     return cart;
  //   });
  // }
  //   console.log("cartItems", cartItems);

  const subtotal = cartItems.reduce(
    (accumulator, { pricePerItem, quantity }) => {
      return accumulator + pricePerItem * quantity;
    },
    0
  );

  //   console.log("subtotal", subtotal);

  const totalItems = cartItems.reduce((accumulator, { quantity }) => {
    return accumulator + quantity;
  }, 0);

  function addToCart({ id } = {}) {
    updateCart((prev) => {
      let cart = { ...prev };
      if (cart.products[id]) {
        cart.products[id].quantity = cart.products[id].quantity + 1;
      } else {
        cart.products[id] = {
          id,
          quantity: 1,
        };
      }
      return cart;
    });
  }

  function checkout() {
    initiateCheckout({
      lineItems: cartItems.map((item) => {
        return {
          price: item.id,
          quantity: item.quantity,
        };
      }),
    });
  }
  return {
    cart,
    updateCart,
    cartItems,
    subtotal,
    totalItems,
    addToCart,
    checkout,
    removeFromCart,
  };
}
export function useCart() {
  const cart = useContext(CartContext);
  return cart;
}
