/*
 * File: UseCartState.js
 * Author: Joseph Koh
 * Description: Represent a custom hook to manage cart state/functions
 */

import {
  saveToLocalStorage,
  getFromLocalStorage,
  clearFromLocalStorage,
} from "../services/LocalStorage";
import { useState } from "react";

export const useCartState = () => {
  // init cartList state from localStorage
  const initCartList = getFromLocalStorage("cartList") || [];
  const [cartList, setCartList] = useState(initCartList);

  // Function to add to cartList and update localStorage
  const AddToCartList = (cartItem) => {
    setCartList((prev) => {
      const existingItem = prev.some((i) => i.id === cartItem.id);
      // If item already exists, update its quantity
      if (existingItem) {
        const updatedCartList = prev.map(
          (i) =>
            i.id === cartItem.id
              ? {
                  ...i,
                  qty:
                    parseInt(i.qty, 10) < 10 // If qty > 10, dont add
                      ? parseInt(i.qty, 10) + 1
                      : parseInt(i.qty, 10),
                }
              : i // 10 refers to base 10
        );
        saveToLocalStorage("cartList", updatedCartList);

        return updatedCartList;
      } else {
        // Else, add to cartList with quantity 1
        const updatedCartList = [...prev, { ...cartItem, qty: 1 }];
        saveToLocalStorage("cartList", updatedCartList);

        return updatedCartList;
      }
    });
  };

  // Function to clear cartList and localStorage
  const ClearCart = () => {
    setCartList([]);
    clearFromLocalStorage("cartList");
  };

  // Function to delete item from cartList and localStorage
  const DeleteCartItem = (id) => {
    setCartList((prev) => {
      const updatedCartList = prev.filter((i) => i.id !== id);
      saveToLocalStorage("cartList", updatedCartList);

      return updatedCartList;
    });
  };

  // Function to update cartItem quanity from cartList and localStorage
  const UpdateCartItemQuantity = (id, quantity) => {
    setCartList((prev) => {
      const updatedCartList = prev.map((i) =>
        i.id === id ? { ...i, qty: quantity } : i
      );
      saveToLocalStorage("cartList", updatedCartList);

      return updatedCartList;
    });
  };

  return {
    cartList,
    setCartList,
    AddToCartList,
    ClearCart,
    DeleteCartItem,
    UpdateCartItemQuantity,
  };
};
