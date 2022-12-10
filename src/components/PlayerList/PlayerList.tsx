import React, { useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { IPlayerToAdd as IPlayer } from "../PlayerContentManagement/PlayerDialog";
import DeleteIcon from "@mui/icons-material/Delete";
import { useSelector, useDispatch } from "react-redux";
import { deletePlayer } from "../../store";

export const PlayerList = () => {
  const players = useSelector((state: any)=> state.players);
  const [highlitedPlayer, setHighlitedPlayer] = useState(players[0].number)
  const dispatch = useDispatch<any>();

  const handleDelete = (id: number) => {
    dispatch(deletePlayer(id))
  };

  return (
    <List sx={{ width: "100%", display: "flex", gap: '5px' }}>
      {players.map((player: IPlayer) => (
        <ListItem
          selected={highlitedPlayer === player.number}
          key={player.number}
          sx={{ cursor: "pointer" }}
          alignItems="flex-start"
          onClick={()=>setHighlitedPlayer(player.number)}
        >
          <ListItemAvatar>
            <Avatar
              alt={player.name}
              sx={{ bgcolor: player.isGoalkeeper ? "grey" : "red" }}
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
          <DeleteIcon
            sx={{ margin: "auto 1rem auto auto", color: "grey" }}
            onClick={() => handleDelete(player.number)}
          />
        </ListItem>
      ))}
    </List>
  );
};
