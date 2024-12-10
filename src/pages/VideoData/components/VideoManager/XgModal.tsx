import React from "react";
import { Modal, TextField, Button } from "@mui/material";

interface XgModalProps {
  open: boolean;
  onClose: () => void; // Funkcja zamykająca modal
}

const XgModal: React.FC<XgModalProps> = ({ open, onClose }) => {
  return (
    <Modal open={open} onClose={onClose}>
      <div>
        <h2>Add xG</h2>
        <TextField label="xG Value" />
        <TextField label="Select Player" select>
          {/* Map players here */}
        </TextField>
        <Button onClick={onClose}>Submit</Button>
      </div>
    </Modal>
  );
};

export default XgModal;
