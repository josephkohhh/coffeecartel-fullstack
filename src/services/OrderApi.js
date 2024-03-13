/*
 * File: OrderApi.jsx
 * Author: Joseph Koh
 * Description: To house all the api calls related to order
 */

import axios from "axios";

// Create order API call
export const AddToOrder = async (cartList, username) => {
  try {
    const data = {
      cartList: cartList,
      username: username,
    };
    return await axios.post(
      "https://coffeecartel-api.onrender.com/createOrder",
      data
    );
  } catch (error) {
    throw error;
  }
};

// Fetch Order API call
export const GetOrder = async (username) => {
  try {
    return await axios.get("https://coffeecartel-api.onrender.com/getOrder", {
      params: {
        username: username,
      },
    });
  } catch (error) {
    throw error;
  }
};

// // Create order API call
// export const AddToOrder = async (cartList, username) => {
//   try {
//     const data = {
//       cartList: cartList,
//       username: username,
//     };
//     return await axios.post("http://localhost:3000/createOrder", data);
//   } catch (error) {
//     throw error;
//   }
// };

// // Fetch Order API call
// export const GetOrder = async (username) => {
//   try {
//     return await axios.get("http://localhost:3000/getOrder", {
//       params: {
//         username: username,
//       },
//     });
//   } catch (error) {
//     throw error;
//   }
// };
