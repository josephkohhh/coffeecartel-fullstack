/*
 * File: Login.jsx
 * Author: Joseph Koh
 * Description: Represents the login page
 */

import { Box } from "@mui/material";
import { color } from "../data/constants";
import { Header } from "../components/ui/Header";
import { LoginForm } from "../components/form/LoginForm";
import { Footer } from "../components/layout/Footer";

export const Login = () => {
  return (
    <Box bgcolor={color.dull}>
      <Header />
      <LoginForm />
      <Footer />
    </Box>
  );
};
