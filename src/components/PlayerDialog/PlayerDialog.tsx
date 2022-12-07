import React, { useState } from "react";
import {
  Switch,
  FormControlLabel,
  Box,
  Fab,
  DialogTitle,
  DialogContentText,
  DialogContent,
  DialogActions,
  Dialog,
  TextField,
  Button,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import AddIcon from "@mui/icons-material/Add";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { addPlayer as addPlayerStore } from "../../store";

export interface IPlayerToAdd {
  name: string;
  number: number;
  isGoalkeeper: boolean;
}

// Add new player button + popup -done
// Players have 3 properties - position GK/no (bool), number, name - done
// Add players to global state - done
// Add remove players - done
// Check id issue - done
// Add edit player - in progress
// Move users to firebase.

export const PlayerDialog = () => {
  const players = useSelector((state: any)=> state.players);
  const [open, setOpen] = useState<boolean>(false);
  const [player, setPlayer] = useState<IPlayerToAdd>({
    name: '',
    number: 0,
    isGoalkeeper: false,
  });
  const dispatch = useDispatch<any>();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const addPlayer = () => {
    dispatch(addPlayerStore(player));
    setPlayer({
      name: '',
      number: 0,
      isGoalkeeper: false,
    })
  };
  const addPlayerSave = () => {
    dispatch(addPlayerStore(player));
    setPlayer({
      name: '',
      number: 0,
      isGoalkeeper: false,
    })
    setOpen(false);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleIsGoalkeeper = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPlayer({ ...player, [event.target.name]: event.target.value });
  };

  const checkNumberDuplicate = () => {
    const isThere = players.some((e: IPlayerToAdd) => e.number === player.number);
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
            value={player.name}
            margin="dense"
            id="name"
            name="name"
            label="Full Name"
            type="text"
            fullWidth
            variant="standard"
            inputProps={{ maxLength: 40 }}
            onChange={(e) =>
              setPlayer({ ...player, [e.target.name]: e.target.value })
            }
          />
          <TextField
            autoFocus
            error={checkNumberDuplicate()}
            type="number"
            value={player.number}
            name="number"
            inputProps={{ maxLength: 2 }}
            margin="dense"
            id="number"
            label={
               checkNumberDuplicate()
                ? "Number was assigned to other player"
                : "Number"
            }
            fullWidth
            variant="standard"
            onChange={(e) => setPlayer({ ...player, [e.target.name]: Number(e.target.value) })}
          />
          <FormControlLabel
            control={
              <Switch 
              value={player.isGoalkeeper} checked={player.isGoalkeeper} onChange={handleIsGoalkeeper} />
            }
            label="Is Goalkeeper"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button
            onClick={addPlayer}
            disabled={checkNumberDuplicate()}
          >
            Add next player
          </Button>
          <Button
            onClick={addPlayerSave}
            disabled={checkNumberDuplicate()}
          >
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
