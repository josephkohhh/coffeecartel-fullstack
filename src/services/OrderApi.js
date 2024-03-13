/*
 * File: OrderApi.jsx
 * Author: Joseph Koh
 * Description: To house all the api calls related to order
 */

import axios from "axios";

// Order API call
export const AddToOrder = async (cartList, username) => {
  try {
    const data = {
      cartList: cartList,
      username: username,
    };
    console.log(data);
    return await axios.post("http://localhost:3000/order", data);
  } catch (error) {
    throw error;
  }
};
