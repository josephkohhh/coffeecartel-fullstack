/* File: Profile.jsx
 * Author: Joseph Koh
 * Description: Represents the Profile page
 */

import { Box } from "@mui/material";
import { color } from "../data/constants";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { Navigate } from "react-router-dom";
import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";
import { ProfileMaster } from "../components/containers/ProfileMaster";

export const Profile = () => {
  const { user } = useContext(UserContext);

  return user.fname ? (
    <Box bgcolor={color.dull}>
      <Navbar />
      <ProfileMaster />
      <Footer />
    </Box>
  ) : (
    <>
      <Navigate to="/login" />
    </>
  );
};
