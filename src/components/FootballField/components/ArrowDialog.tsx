// src/components/ArrowDialog.tsx

import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";

interface ArrowDialogProps {
  dialogOpen: boolean;
  setDialogOpen: React.Dispatch<React.SetStateAction<boolean>>;
  selectedColor: string;
  setSelectedColor: React.Dispatch<React.SetStateAction<string>>;
  minute: string;
  setMinute: React.Dispatch<React.SetStateAction<string>>;
  author: string;
  setAuthor: React.Dispatch<React.SetStateAction<string>>;
  handleDialogSubmit: () => void;
  people: string[];
}

const ArrowDialog: React.FC<ArrowDialogProps> = ({
  dialogOpen,
  setDialogOpen,
  selectedColor,
  setSelectedColor,
  minute,
  setMinute,
  author,
  setAuthor,
  handleDialogSubmit,
  people,
}) => {
  return (
    <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)}>
      <DialogTitle>Wybierz opcje</DialogTitle>
      <DialogContent>
        <FormControl fullWidth margin="dense">
          <InputLabel id="color-label">Rodzaj</InputLabel>
          <Select
            labelId="color-label"
            value={selectedColor}
            onChange={(e) => setSelectedColor(e.target.value)}
          >
            <MenuItem value="Pass">Pass</MenuItem>
            <MenuItem value="Dribbling">Dribbling</MenuItem>
            <MenuItem value="SFG">SFG</MenuItem>
            <MenuItem value="Regain">Regain</MenuItem>
          </Select>
        </FormControl>
        <TextField
          margin="dense"
          label="Minuta zdarzenia"
          type="number"
          fullWidth
          value={minute}
          onChange={(e) => setMinute(e.target.value.replace(/\D/g, ""))}
        />
        {/* Lista rozwijana dla autora */}
        <FormControl fullWidth margin="dense">
          <InputLabel id="author-label">Autor zdarzenia</InputLabel>
          <Select
            labelId="author-label"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          >
            {people.map((person, index) => (
              <MenuItem key={index} value={person}>
                {person}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleDialogSubmit} color="primary">
          Zatwierdź
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ArrowDialog;
