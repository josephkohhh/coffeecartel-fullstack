/*
 * File: RegisterForm.jsx
 * Author: Joseph Koh
 * Description: Represents the register form
 */

import { Stack, Typography, Paper, TextField } from "@mui/material";
import { color } from "../../data/constants";
import { AccessButton } from "../ui/AccessButton";
import { ErrorMessage } from "../ui/ErrorMessage";
import { Link } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Register } from "../../services/UserApi";
import { Delay } from "../../utils/Delay";
import { Overlay } from "../ui/Overlay";

export const RegisterForm = () => {
  const linkStyle = {
    color: color.black,
    textDecoration: "none",
    cursor: "pointer",
  };

  // Show password visbility state
  const [showPassword, setShowPassword] = useState(false);

  // Loading state
  const [loading, setLoading] = useState(false);

  // Register message state
  const [errorMessage, setErrorMessage] = useState(null);

  // React Hook Form
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
    reset,
  } = useForm();

  // Function to submit register request
  const submitRegister = async (data) => {
    try {
      await Delay(setLoading, 1000);

      const res = await Register(data); // API call

      setLoading(false);

      // Success
      if (res.data.status === 201) {
        setErrorMessage(null);
        //... put a success snackbar and reroute to login
      }

      // Fail
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
          minHeight: { xs: "800px", sm: "720px" },
          margin: "60px auto",
          padding: "20px 30px",
          borderRadius: "10px",
          border: "1px solid #DDDDDD",
        }}
      >
        <Typography variant="h4" color={color.grey} textAlign="center">
          Register
        </Typography>

        {/* Register Form */}
        <form onSubmit={handleSubmit(submitRegister)} noValidate>
          <Stack width="100%" direction="column" marginY={4} spacing={3.5}>
            {/* First & last name input */}
            <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
              <TextField
                label="First Name"
                type="text"
                sx={{ width: "100%" }}
                {...register("firstname", {
                  required: "First Name is required",
                })}
                error={!!errors.firstname}
                helperText={errors.firstname?.message}
              />
              <TextField
                label="Last Name"
                type="text"
                sx={{ width: "100%" }}
                {...register("lastname", {
                  required: "Last Name is required",
                })}
                error={!!errors.lastname}
                helperText={errors.lastname?.message}
              />
            </Stack>

            {/* Email input */}
            <TextField
              label="Email"
              type="email"
              {...register("email", {
                required: "Email Name is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Enter a valid email",
                },
              })}
              error={!!errors.email}
              helperText={errors.email?.message}
            />

            {/* Address input */}
            <TextField
              label="Address"
              type="text"
              {...register("address", {
                required: "Address is required",
              })}
              error={!!errors.firstname}
              helperText={errors.firstname?.message}
            />

            {/* Username input */}
            <TextField
              label="Username"
              type="text"
              {...register("username", {
                required: "Username is required",
                minLength: {
                  value: 8,
                  message: "Username must be at least 8 characters long",
                },
              })}
              error={!!errors.username}
              helperText={errors.username?.message}
            />

            {/* Password input */}
            <TextField
              label="Password"
              type={showPassword ? "text" : "password"}
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
            <TextField
              label="Confirm Password"
              type="password"
              {...register("confirmPassword", {
                required: "Confirm password is required",
                validate: (value) =>
                  value === getValues("password") || "Passwords do not match",
              })}
              error={!!errors.confirmPassword}
              helperText={errors.confirmPassword?.message}
            />

            {/* Error message */}
            {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}

            {/* Register button */}
            <AccessButton type="submit" loading={loading}>
              Create Account
            </AccessButton>
          </Stack>
        </form>

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

      {/* Render overlay if loading is TRUE */}
      {loading && <Overlay />}
    </>
  );
};
