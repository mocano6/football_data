import React, { useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { useSelector } from "react-redux";
import { IPlayerToAdd as IPlayer } from "../PlayerDialog/PlayerDialog";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch } from "react-redux";
import { setCurrentPlayerId, removePlayer } from "../../actions";

interface IState {
  addPlayer: IPlayer[];
  currentStates: {
    currentId: number;
  };
}

export const PlayerList = () => {
  const players = useSelector((state: IState) => state.addPlayer);
  const selectPlayerId = useSelector(
    (state: IState) => state.currentStates.currentId
  );

  const dispatch = useDispatch();

  const handleDelete = (id: number) => {
    dispatch(removePlayer(id));
  };

  return (
    <List sx={{ width: "100%", display: "flex" }}>
      {players.map((player: IPlayer) => (
        <ListItem
          selected={player.id === selectPlayerId}
          onClick={() => dispatch(setCurrentPlayerId(player.id))}
          key={player.id}
          sx={{ cursor: "pointer" }}
          alignItems="flex-start"
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
            onClick={() => handleDelete(player.id)}
          />
        </ListItem>
      ))}
    </List>
  );
};
