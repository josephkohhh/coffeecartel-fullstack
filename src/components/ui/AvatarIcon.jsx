/*
 * File: Avatar.jsx
 * Author: Joseph Koh
 * Description: Represents the avatar UI
 */

import { Avatar } from "@mui/material";

export const AvatarIcon = () => {
  return (
    <>
      <Avatar
        alt="H"
        sx={{
          margin: "0 auto",
          width: { xs: "110px", sm: "150px" },
          height: { xs: "110px", sm: "150px" },
          fontSize: { xs: "40px", sm: "60px" },
        }}
      >
        JK
      </Avatar>
    </>
  );
};
