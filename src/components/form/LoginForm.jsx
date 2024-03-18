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
import { Login } from "../../services/UserApi";
import { Delay } from "../../utils/Delay";
import { Overlay } from "../ui/Overlay";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { saveToLocalStorage } from "../../services/LocalStorage";

export const LoginForm = () => {
  const linkStyle = {
    color: color.black,
    textDecoration: "none",
    cursor: "pointer",
  };

  // Consume UserContext
  const { SetUserInfo } = useContext(UserContext);

  const navigate = useNavigate(); // Create instance of useNavigate

  const [showPassword, setShowPassword] = useState(false); // Show password visbility state

  const [loading, setLoading] = useState(false); // Loading state

  const [errorMessage, setErrorMessage] = useState(null); // Login message state

  // React Hook Form
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  // Function to submit login request
  const submitLogin = async (data) => {
    try {
      await Delay(setLoading, 1000);

      const res = await Login(data); // API call

      setLoading(false);

      // User route
      if (res.data.status === 200 && res.data.user.role === "user") {
        saveToLocalStorage("token", res.data.token);
        SetUserInfo(res.data.user);
        navigate("/shop");
      }
      // Admin route
      if (res.data.status === 200 && res.data.user.role === "admin") {
        setErrorMessage(null);
        saveToLocalStorage("token", res.data.token);
        SetUserInfo(res.data.user);
        navigate("/admin");
      }

      if (res.data.status === 401 || res.data.status === 500)
        setErrorMessage(res.data.error);
    } catch (error) {
      setErrorMessage("Connection refused. Please try again");
      setLoading(false);
    } finally {
      reset();
    }
  };

  return (
    <>
      {/* Login container */}
      <Paper
        sx={{
          width: { xs: "65%", sm: "400px", lg: "550px" },
          minHeight: "380px",
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
              {...register("username", {
                required: "Username is required",
              })}
              error={!!errors.username}
              helperText={errors.username?.message}
            />
            <TextField
              type={showPassword ? "text" : "password"}
              label="Password"
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
            <AccessButton type="submit" loading={loading}>
              Login
            </AccessButton>
          </Stack>
        </form>

        {/* <Divider sx={{ color: "#9FA1A1" }}>OR</Divider> */}

        {/* Google Login */}
        {/* <Stack width="100%" marginY={4} spacing={5.5}>
          <GoogleLoginButton />
        </Stack> */}

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

      {/* Render overlay if loading is TRUE */}
      {loading && <Overlay />}
    </>
  );
};
