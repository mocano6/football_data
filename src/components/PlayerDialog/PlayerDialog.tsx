import React, { useEffect, useState } from "react";
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
import { addNewPlayer } from "../../actions";
import { useSelector } from "react-redux";

export interface IPlayerToAdd {
  id: number;
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
// Move users to firebase

export const PlayerDialog = () => {
  const players = useSelector((state: any) => state.addPlayer);
  const [open, setOpen] = useState<boolean>(false);
  const [name, setName] = useState<string>("");
  const [number, setNumber] = useState<number>(0);
  const [isGoalkeeper, setIsGoalkeeper] = useState<boolean>(false);

  const dispatch = useDispatch();

  const handleClickOpen = () => {
    setOpen(true);
  };

  useEffect(() => {
    checkNumberDuplicate();
  });

  const addPlayer = () => {
    const newPlayer = {
      id: number,
      name,
      number,
      isGoalkeeper,
    };
    dispatch(addNewPlayer(newPlayer));

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

  const checkNumberDuplicate = () => {
    const isThere = players.some((e: IPlayerToAdd) => e.number === number);
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
              }, 500)
            }
          />
          <TextField
            autoFocus
            error={checkNumberDuplicate()}
            type="number"
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
            onChange={(e) => setNumber(Number(e.target.value))}
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
          <Button onClick={addPlayer} disabled={checkNumberDuplicate()}>
            Add player
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
