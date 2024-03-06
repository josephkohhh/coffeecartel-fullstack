/*
 * File: Avatar.jsx
 * Author: Joseph Koh
 * Description: Represents the avatar UI
 */

import { Avatar } from "@mui/material";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

export const AvatarIcon = ({ sx }) => {
  // Consume UserContext
  const { user } = useContext(UserContext);
  return (
    <>
      <Avatar
        alt={
          user.fname.toUpperCase().charAt(0) +
          user.lname.toUpperCase().charAt(0)
        }
        sx={sx}
      >
        {user.fname.toUpperCase().charAt(0) +
          user.lname.toUpperCase().charAt(0)}
      </Avatar>
    </>
  );
};
