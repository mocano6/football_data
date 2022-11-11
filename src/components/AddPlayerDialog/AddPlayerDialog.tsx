import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import AddIcon from "@mui/icons-material/Add";
import { Fab } from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";

export const AddPlayerDialog = () => {
  const [open, setOpen] = React.useState<boolean>(false);
  const [name, setName] = React.useState<string>("");
  const [number, setNumber] = React.useState<number>(0);
  const [isGoalkeeper, setIsGoalkeeper] = React.useState<boolean>(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const addPlayer = () => {
    const newPlayer = {
      name,
      number,
      isGoalkeeper,
    };
    console.log(newPlayer);
  };

  const handleIsGoalkeeper = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsGoalkeeper(event.target.checked);
  };

  return (
    <div>
      <Fab color="primary" aria-label="add" onClick={handleClickOpen}>
        <AddIcon />
      </Fab>
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
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="number"
            label="Number"
            type="number"
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
          <Button onClick={addPlayer}>Add player</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
