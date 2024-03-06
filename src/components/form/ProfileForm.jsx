/*
 * File: ProfileForm.jsx
 * Author: Joseph Koh
 * Description: Represents the profile form
 */

import { Box, Typography, Stack, TextField } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { color } from "../../data/constants";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { Delay } from "../../utils/Delay";
import { UpdateProfile } from "../../services/UserApi";
import { saveToLocalStorage } from "../../services/LocalStorage";
import { ErrorMessage } from "../ui/ErrorMessage";

export const ProfileForm = () => {
  // Consume UserContext
  const { user, SetUserInfo } = useContext(UserContext);

  // React Hook Form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ values: { username: user.username } });

  // Loading state
  const [loading, setLoading] = useState(false);

  // Register message state
  const [errorMessage, setErrorMessage] = useState(null);

  // Function to submit update request
  const SubmitChanges = async (data) => {
    try {
      await Delay(setLoading, 1000);
      const res = await UpdateProfile(data); // API call

      setLoading(false);
      // Success
      if (res.data.status === 200) {
        setErrorMessage(null);
        saveToLocalStorage("token", res.data.token);
        SetUserInfo(res.data.userData);
      }

      // Fail
      else if (res.data.status === 400 || res.data.status === 500) {
        setErrorMessage(res.data.error);
      }
    } catch (error) {
      setErrorMessage("Connection refused. Please try again");
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <form onSubmit={handleSubmit(SubmitChanges)}>
        {/* Username */}
        <Stack
          direction="row"
          spacing={1.2}
          alignItems="center"
          marginBottom={2}
        >
          <Typography color={color.grey} width={"80px"}>
            Username
          </Typography>
          <TextField
            type="text"
            disabled
            defaultValue={user.username}
            {...register("username")}
            sx={{ width: "65%" }}
          />
        </Stack>

        {/* First name */}
        <Stack
          direction="row"
          spacing={1.2}
          alignItems="center"
          marginBottom={2}
        >
          <Typography color={color.grey} width={"80px"}>
            First Name
          </Typography>
          <TextField
            type="text"
            defaultValue={user.fname}
            {...register("firstname", {
              required: "First Name is required",
            })}
            error={!!errors.firstname}
            helperText={errors.firstname?.message}
            sx={{ width: "65%" }}
          />
        </Stack>

        {/* Last name */}
        <Stack
          direction="row"
          spacing={1.2}
          alignItems="center"
          marginBottom={2}
        >
          <Typography color={color.grey} width={"80px"}>
            Last Name
          </Typography>
          <TextField
            type="text"
            defaultValue={user.lname}
            {...register("lastname", {
              required: "Last Name is required",
            })}
            error={!!errors.lastname}
            helperText={errors.lastname?.message}
            sx={{ width: "65%" }}
          />
        </Stack>

        {/* Email */}
        <Stack
          direction="row"
          spacing={1.2}
          alignItems="center"
          marginBottom={2}
        >
          <Typography color={color.grey} width={"80px"}>
            Email
          </Typography>
          <TextField
            type="email"
            value={user.email}
            disabled
            sx={{ width: "65%" }}
          />
        </Stack>

        {/* Address */}
        <Stack
          direction="row"
          spacing={1.2}
          alignItems="center"
          marginBottom={2}
        >
          <Typography color={color.grey} width={"80px"}>
            Address
          </Typography>
          <TextField
            type="text"
            defaultValue={user.address}
            {...register("address", {
              required: "Address is required",
            })}
            error={!!errors.lastname}
            helperText={errors.lastname?.message}
            sx={{ width: "65%" }}
          />
        </Stack>

        {/* Error message */}
        {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}

        {/* Submit button */}
        <Stack justifyContent="center">
          <LoadingButton
            type="submit"
            loading={loading}
            variant="contained"
            size="large"
            sx={{
              width: "200px",
              margin: "15px auto",
              bgcolor: color.green,
              "&:hover": { bgcolor: color.darkgreen },
            }}
          >
            Save Changes
          </LoadingButton>
        </Stack>
      </form>
    </Box>
  );
};
