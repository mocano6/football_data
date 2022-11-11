import React, { useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { IPlayerToAdd as IPlayer } from "../../components/AddPlayerDialog/AddPlayerDialog";

export const TeamList = () => {
  const [currentPlayerId, setCurrentPlayerId] = useState<number>(1);
  const players = [
    {
      id: 1,
      name: "Aaron Ramsdale",
      number: 1,
      isGoalkeeper: true,
    },
    {
      id: 2,
      name: "Ben White",
      number: 4,
      isGoalkeeper: false,
    },
  ];

  return (
    <List sx={{ width: "100%" }}>
      {players.map((player) => (
        <ListItem
          selected={player.id === currentPlayerId}
          onClick={() => setCurrentPlayerId(player.id)}
          key={player.id}
          sx={{ cursor: "pointer" }}
          alignItems="flex-start"
        >
          <ListItemAvatar>
            <Avatar
              alt={player.name}
              sx={{
                backgroundColor: "grey",
              }}
              src="/static/images/avatar/1.jpg"
            >
              {player.number}
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={player.name}
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: "inline" }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  {player.isGoalkeeper ? "GK" : "Regular player"}
                </Typography>
              </React.Fragment>
            }
          />
        </ListItem>
      ))}
    </List>
  );
};
