import React from "react";
import { Box } from "@mui/material";
import { PlayerList } from "../../components/PlayerList/PlayerList";
import { PlayerDialog } from "../../components/PlayerDialog/PlayerDialog";

export const Team = () => {
  return (
    <Box>
      <PlayerList />
      <PlayerDialog />
    </Box>
  );
};
