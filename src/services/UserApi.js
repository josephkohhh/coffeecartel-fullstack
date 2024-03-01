/*
 * File: UserApi.jsx
 * Author: Joseph Koh
 * Description: To house all the api calls related to user
 */

import axios from "axios";

// Login API call
export const Login = async (data) => {
  try {
    return await axios.post("http://localhost:3000/login", data);
  } catch (error) {
    throw error;
  }
};

export const Register = async (data) => {
  try {
    return await axios.post("http://localhost:3000/register", data);
  } catch (error) {
    throw error;
  }
};
