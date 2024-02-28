/*
 * File: LoginForm.jsx
 * Author: Joseph Koh
 * Description: Represents the login form
 */

import { Stack, Typography, Paper, Divider, TextField } from "@mui/material";
import { color } from "../../data/constants";
import { AccessButton } from "../ui/AccessButton";
import { GoogleLoginButton } from "../ui/GoogleLoginButton";
import { ErrorMessage } from "../ui/ErrorMessage";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

// import { useHistory } from "react-router-dom";

export const LoginForm = () => {
  const linkStyle = {
    color: color.black,
    textDecoration: "none",
    cursor: "pointer",
  };
  // Show password visbility state
  const [showPassword, setShowPassword] = useState(false);

  // Login message state
  const [errorMessage, setErrorMessage] = useState(null);
  // React Hook Form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Function to submit login request
  const submitLogin = async (data) => {
    const res = await axios.post("http://localhost:3000/login", data);
    // User route
    if (res.data.status === 200 && res.data.role === "user") {
      setErrorMessage(null);
    }
    // Admin route
    if (res.data.status === 200 && res.data.role === "admin") {
      setErrorMessage(null);
    }

    if (res.data.status === 401) {
      setErrorMessage(res.data.error);
    }
    if (res.data.status === 500) {
      setErrorMessage(res.data.error);
    }
  };
  return (
    // Login container
    <Paper
      sx={{
        width: { xs: "65%", sm: "400px", lg: "550px" },
        minHeight: "540px",
        margin: "90px auto",
        padding: "20px 30px",
        borderRadius: "10px",
        border: "1px solid #DDDDDD",
      }}
    >
      <Typography variant="h4" color={color.grey} textAlign="center">
        Login
      </Typography>

      {/* Login Form */}
      <form onSubmit={handleSubmit(submitLogin)}>
        <Stack width="100%" direction="column" marginY={4} spacing={3.5}>
          <TextField
            type="text"
            label="Username"
            sx={{
              width: "100%",
              bgcolor: color.white,
            }}
            {...register("username", {
              required: "Username is required",
            })}
            error={!!errors.username}
            helperText={errors.username?.message}
          />
          <TextField
            type={showPassword ? "text" : "password"}
            label="Password"
            sx={{
              width: "100%",
              bgcolor: color.white,
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => setShowPassword(!showPassword)}
                    edge="end"
                    disableRipple
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 8,
                message: "Password must be at least 8 characters long",
              },
            })}
            error={!!errors.password}
            helperText={errors.password?.message}
          />

          {/* Error message */}
          {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}

          {/* Login button */}
          <AccessButton type="submit">Login</AccessButton>
        </Stack>
      </form>

      <Divider sx={{ color: "#9FA1A1" }}>OR</Divider>

      {/* Google Login */}
      <Stack width="100%" marginY={4} spacing={5.5}>
        <GoogleLoginButton />
      </Stack>

      {/* Create account link */}
      <Typography
        variant="body1"
        textAlign="center"
        color="#9FA1A1"
        marginBottom={0.5}
      >
        New to CoffeeCartel?
      </Typography>

      <Link style={linkStyle} to="/register">
        <Typography variant="body1" textAlign="center">
          Create Account
        </Typography>
      </Link>
    </Paper>
  );
};
