/*
 * File: RegisterForm.jsx
 * Author: Joseph Koh
 * Description: Represents the register form
 */

import { Stack, Typography, Paper } from "@mui/material";
import { color } from "../../data/constants";
import { RegisterInput } from "../ui/RegisterInput";
import { AccessButton } from "../ui/AccessButton";
import { Link } from "react-router-dom";
import { useState } from "react";

export const RegisterForm = () => {
  const linkStyle = {
    color: color.black,
    textDecoration: "none",
    cursor: "pointer",
  };
  return (
    // Login container
    <Paper
      sx={{
        width: { xs: "65%", sm: "400px", lg: "550px" },
        height: { xs: "800px", sm: "740px" },
        margin: "90px auto",
        padding: "20px 30px",
        borderRadius: "10px",
        border: "1px solid #DDDDDD",
      }}
    >
      <Typography variant="h4" color={color.grey} textAlign="center">
        Register
      </Typography>

      {/* Register Form */}
      <Stack width="100%" direction="column" marginY={4} spacing={3.5}>
        {/* First & last name input */}
        <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
          <RegisterInput
            label="First Name"
            type="text"
            sx={{ width: "100%" }}
          />
          <RegisterInput label="Last Name" type="text" sx={{ width: "100%" }} />
        </Stack>

        {/* Email input */}
        <RegisterInput label="Email" type="email" />

        {/* Address input */}
        <RegisterInput label="Address" type="text" />

        {/* Username input */}
        <RegisterInput label="Username" type="text" />

        {/* Password input */}
        <RegisterInput label="Password" type="password" />
        <RegisterInput label="Confirm Password" type="password" />

        {/* Register button */}
        <AccessButton>Create Account</AccessButton>
      </Stack>

      {/* Login link */}
      <Typography
        variant="body1"
        textAlign="center"
        color="#9FA1A1"
        marginBottom={0.5}
      >
        Already Have an Account?
      </Typography>

      <Link style={linkStyle} to="/login">
        <Typography variant="body1" textAlign="center">
          Login here
        </Typography>
      </Link>
    </Paper>
  );
};
