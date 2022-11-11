import React from "react";
import { Box } from "@mui/material";
import { TeamList } from "../../components/TeamList/TeamList";
import { AddPlayerDialog } from "../../components/AddPlayerDialog/AddPlayerDialog";

export const Team = () => {
  return (
    // Write users list
    // Add new player button + popup
    // Players have 3 properties - position GK/no (bool), number, name
    // Add users to global state
    // Move users to firebase
    <Box>
      <TeamList />
      <AddPlayerDialog />
    </Box>
  );
};
