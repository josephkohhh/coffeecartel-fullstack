/*
 * File: Register.jsx
 * Author: Joseph Koh
 * Description: Represents the register page
 */

import { Box } from "@mui/material";
import { color } from "../data/constants";
import { Header } from "../components/ui/Header";
import { RegisterForm } from "../components/form/RegisterForm";
import { Footer } from "../components/layout/Footer";

export const Register = () => {
  return (
    <Box bgcolor={color.dull}>
      <Header />
      <RegisterForm />
      <Footer />
    </Box>
  );
};
