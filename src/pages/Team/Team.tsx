import { Box } from "@mui/material";
import { PlayerList } from "../../components/PlayerList/PlayerList";
import { PlayerContentManagement } from "../../components/PlayerContentManagement/PlayerContentManagement";

export const Team = () => {
  return (
    <Box>
      <PlayerList />
      <PlayerContentManagement />
    </Box>
  );
};
