/*
 * File: UserApi.jsx
 * Author: Joseph Koh
 * Description: To house all the api calls related to user
 */

import axios from "axios";
import { getFromLocalStorage } from "../services/LocalStorage";

// Login API call
export const Login = async (data) => {
  try {
    return await axios.post("asdsadasds/login", data);
  } catch (error) {
    throw error;
  }
};

// Register API call
export const Register = async (data) => {
  try {
    return await axios.post(
      "https://superlative-creponne-554384.netlify.app/register",
      data
    );
  } catch (error) {
    throw error;
  }
};

// Verify user API call
export const Authenticate = async () => {
  try {
    return await axios.get(
      "https://superlative-creponne-554384.netlify.app/protected",
      {
        headers: {
          Authorization: `Bearer ${getFromLocalStorage("token") || ""}`,
        },
      }
    );
  } catch (error) {
    throw error;
  }
};
