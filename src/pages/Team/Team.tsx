import React from "react";
import { Box, Fab } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
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
      <Box sx={{ "& > :not(style)": { m: 1 } }}>
        <Fab color="secondary" aria-label="edit">
          <EditIcon />
        </Fab>
      </Box>
    </Box>
  );
};
