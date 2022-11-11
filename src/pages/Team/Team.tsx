import React from "react";
import { Box } from "@mui/material";
import { TeamList } from "../../components/TeamList/TeamList";
import { AddPlayerDialog } from "../../components/AddPlayerDialog/AddPlayerDialog";

export const Team = () => {
  return (
    <Box>
      <TeamList />
      <AddPlayerDialog />
    </Box>
  );
};
