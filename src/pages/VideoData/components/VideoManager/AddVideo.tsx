import React, { useState } from "react";
import {
  Button,
  TextField,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Box,
  Grid,
} from "@mui/material";

interface AddVideoProps {
  onAddVideo: (video: {
    url: string;
    title: string;
    opponent: string;
    team: string;
  }) => void; // Typ dla wideo
}

const AddVideo: React.FC<AddVideoProps> = ({ onAddVideo }) => {
  const [url, setUrl] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [opponent, setOpponent] = useState<string>("");
  const [team, setTeam] = useState<string>("");

  const teams = ["Raków II", "U19", "U17", "U16", "U15", "U14"];
  const titles = ["Sparing", "Liga", "Turniej"];

  const handleAdd = () => {
    if (url && title && opponent && team) {
      onAddVideo({ url, title, opponent, team });
      setUrl("");
      setTitle("");
      setOpponent("");
      setTeam("");
    } else {
      alert("Proszę wprowadzić URL, rodzaj rozgrywek, przeciwnika i zespół!");
    }
  };

  return (
    <Box mb={2} sx={{ pt: 2 }}>
      {" "}
      {/* Added padding top */}
      <Grid container spacing={2} alignItems="flex-end">
        <Grid item xs={12} sm={3}>
          <TextField
            label="Link do wideo YouTube"
            variant="outlined"
            fullWidth
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
        </Grid>

        <Grid item xs={12} sm={2}>
          <FormControl fullWidth>
            <InputLabel>Rodzaj rozgrywek</InputLabel>
            <Select value={title} onChange={(e) => setTitle(e.target.value)}>
              <MenuItem value="">
                <em>Wybierz rodzaj rozgrywek</em>
              </MenuItem>
              {titles.map((t, index) => (
                <MenuItem key={index} value={t}>
                  {t}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12} sm={3}>
          <TextField
            label="Nazwa przeciwnika"
            variant="outlined"
            fullWidth
            value={opponent}
            onChange={(e) => setOpponent(e.target.value)}
          />
        </Grid>

        <Grid item xs={12} sm={2}>
          <FormControl fullWidth>
            <InputLabel>Zespół</InputLabel>
            <Select value={team} onChange={(e) => setTeam(e.target.value)}>
              <MenuItem value="">
                <em>Wybierz zespół</em>
              </MenuItem>
              {teams.map((t, index) => (
                <MenuItem key={index} value={t}>
                  {t}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12} sm={2}>
          <Button variant="contained" color="primary" onClick={handleAdd}>
            Dodaj Wideo
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AddVideo;
