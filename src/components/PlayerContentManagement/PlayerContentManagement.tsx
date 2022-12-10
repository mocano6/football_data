import React, { useState } from "react";
import {
  Box,
  Fab
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import AddIcon from "@mui/icons-material/Add";
import { PlayerDialog } from "./PlayerDialog";

// Add new player button + popup -done
// Players have 3 properties - position GK/no (bool), number, name - done
// Add players to global state - done
// Add remove players - done
// Check id issue - done
// Add edit player - in progress
// Move users to firebase.

export const PlayerContentManagement = () => {
  const [open, setOpen] = useState<boolean>(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      <Box
        sx={{
          position: "fixed",
          bottom: "1rem",
          right: "1rem",
          display: "flex",
          flexFlow: "column",
          gap: ".5rem",
        }}
      >
        <Fab color="secondary" aria-label="edit">
          <EditIcon />
        </Fab>
        <Fab color="primary" aria-label="add" onClick={handleClickOpen}>
          <AddIcon />
        </Fab>
      </Box>
      <PlayerDialog/>
    </div>
  );
};
