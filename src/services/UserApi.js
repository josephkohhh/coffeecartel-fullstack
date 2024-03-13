/*
 * File: UserApi.jsx
 * Author: Joseph Koh
 * Description: To house all the api calls related to user
 */

import axios from "axios";
import { getFromLocalStorage } from "../services/LocalStorage";

// // Login API call
// export const Login = async (data) => {
//   try {
//     return await axios.post(
//       "https://coffeecartel-api.onrender.com/login",
//       data
//     );
//   } catch (error) {
//     throw error;
//   }
// };

// // Register API call
// export const Register = async (data) => {
//   try {
//     return await axios.post(
//       `https://coffeecartel-api.onrender.com/register`,
//       data
//     );
//   } catch (error) {
//     throw error;
//   }
// };

// // Verify user API call
// export const Authenticate = async () => {
//   try {
//     return await axios.get(`https://coffeecartel-api.onrender.com/protected`, {
//       headers: {
//         Authorization: `Bearer ${getFromLocalStorage("token") || ""}`,
//       },
//     });
//   } catch (error) {
//     throw error;
//   }
// };

// // Update profile API call
// export const UpdateProfile = async (data) => {
//   try {
//     return await axios.patch(
//       `https://coffeecartel-api.onrender.com/updateProfile`,
//       data
//     );
//   } catch (error) {
//     throw error;
//   }
// };

// Login API call
export const Login = async (data) => {
  try {
    return await axios.post("http://localhost:3000/login", data);
  } catch (error) {
    throw error;
  }
};

// Register API call
export const Register = async (data) => {
  try {
    return await axios.post(`http://localhost:3000/register`, data);
  } catch (error) {
    throw error;
  }
};

// Verify user API call
export const Authenticate = async () => {
  try {
    return await axios.get(`http://localhost:3000/protected`, {
      headers: {
        Authorization: `Bearer ${getFromLocalStorage("token") || ""}`,
      },
    });
  } catch (error) {
    throw error;
  }
};

// Update profile API call
export const UpdateProfile = async (data) => {
  try {
    return await axios.patch(`http://localhost:3000/updateProfile`, data);
  } catch (error) {
    throw error;
  }
};
