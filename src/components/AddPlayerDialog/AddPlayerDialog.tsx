import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import AddIcon from "@mui/icons-material/Add";
import { Box, Fab } from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import EditIcon from "@mui/icons-material/Edit";
import { createStore } from "redux";

interface IPlayerToAdd {
  id: number;
  name: string;
  number: number;
  isGoalkeeper: boolean;
}

export const AddPlayerDialog = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [name, setName] = useState<string>("");
  const [number, setNumber] = useState<number>(0);
  const [isGoalkeeper, setIsGoalkeeper] = useState<boolean>(false);
  const [playerToAdd, setPlayerToAdd] = useState<[IPlayerToAdd]>([
    {
      id: 1,
      name: "Ryan Matthew",
      number: 33,
      isGoalkeeper: true,
    },
  ]);
  const [id] = useState<number>(playerToAdd.length + 1);

  const ADD_PLAYER = "ADD_PLAYER";
  const addNewPlayer = () => {
    return {
      type: ADD_PLAYER,
      playerToAdd,
    };
  };

  const actualPlayers = {
    playerToAdd: playerToAdd,
  };
  const reducer = (
    state = actualPlayers,
    action: { type: string; playerToAdd: IPlayerToAdd[] }
  ) => {
    switch (action.type) {
      case ADD_PLAYER:
        return {
          ...state,
          playerToAdd: playerToAdd,
        };

      default:
        return state;
    }
  };

  const store = createStore(reducer);
  console.log("Initial state", store.getState());

  store.subscribe(() => console.log("state", store.getState()));

  store.dispatch(addNewPlayer());

  const handleClickOpen = () => {
    setOpen(true);
  };

  useEffect(() => {
    console.log(playerToAdd);
  }, [playerToAdd]);
  useEffect(() => {
    checkNumberRepetition();
  });

  const addPlayer = () => {
    if (playerToAdd) {
      playerToAdd.push({
        id,
        name,
        number,
        isGoalkeeper,
      });
    } else {
      setPlayerToAdd([
        {
          id,
          name,
          number,
          isGoalkeeper,
        },
      ]);
    }
    setOpen(false);
    setNumber(0);
    setName("");
    setIsGoalkeeper(false);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleIsGoalkeeper = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsGoalkeeper(event.target.checked);
  };

  const checkNumberRepetition = () => {
    const isThere = playerToAdd.some((e) => e.number === number);
    return isThere;
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

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add new player to your team</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here.
            We will send updates occasionally.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Full Name"
            type="text"
            fullWidth
            variant="standard"
            inputProps={{ maxLength: 40 }}
            onChange={(e) =>
              setTimeout(() => {
                setName(e.target.value);
              }, 1000)
            }
          />
          <TextField
            autoFocus
            error={checkNumberRepetition()}
            type="number"
            inputProps={{ maxLength: 2 }}
            margin="dense"
            id="number"
            label={
              checkNumberRepetition()
                ? "Number was assigned to other player"
                : "Number"
            }
            fullWidth
            variant="standard"
            onChange={(e) =>
              setTimeout(() => {
                setNumber(Number(e.target.value));
              }, 1000)
            }
          />
          <FormControlLabel
            control={
              <Switch checked={isGoalkeeper} onChange={handleIsGoalkeeper} />
            }
            label="Is Goalkeeper"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={addPlayer} disabled={checkNumberRepetition()}>
            Add player
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
