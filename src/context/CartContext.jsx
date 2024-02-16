/*
 * File: CartContext.jsx
 * Author: Joseph Koh
 * Description: Represents a context to share data across the component tree
 */

import { createContext } from "react";
import { useCartState } from "../hooks/UseCartState";

// Create context
export const CartContext = createContext();

// Context provider
export const CartContextProvider = ({ children }) => {
  // Get state/functions from useCartState hook
  const {
    cartList,
    setCartList,
    AddToCartList,
    ClearCart,
    DeleteCartItem,
    UpdateCartItemQuantity,
  } = useCartState();

  return (
    <CartContext.Provider
      value={{
        cartList,
        setCartList,
        AddToCartList,
        ClearCart,
        DeleteCartItem,
        UpdateCartItemQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
