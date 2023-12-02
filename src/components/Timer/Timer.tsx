import { Box, Button } from "@mui/material";
import React, { useEffect, useState } from "react";

export const Timer = ({
  half,
  getTime,
  getReset,
}: {
  half: any;
  getTime?: any;
  getReset?: any;
}) => {
  const [time, setTime] = useState(0);

  const [running, setRunning] = useState(false);
  useEffect(() => {
    if (half === 1) {
      setTime(time);
    } else if (half === 2) {
      setTime(time + 45 * 1000 * 60);
    }
  }, [half]);

  useEffect(() => {
    let interval: any;
    if (running) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1000);
        if (getTime) {
          getTime(time + 1000);
        }
      }, 1000);
    } else if (!running) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [running, getTime, time]);
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        width: "100%",
        justifyContent: "space-around",
      }}
    >
      <Box
        sx={{
          fontFamily: "Raleway",
          fontSize: 24,
          textAlign: "center",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        {("0" + Math.floor(time / 60000)).slice(-2)}:
        {("0" + Math.floor((time / 1000) % 60)).slice(-2)}
      </Box>
      <Button
        size="large"
        variant="contained"
        color={running ? "error" : "success"}
        onClick={() => (running ? setRunning(false) : setRunning(true))}
        sx={{
          margin: 0.1,
        }}
      >
        {running ? "Stop" : "Start"}
      </Button>
      <Button
        size="large"
        sx={{
          margin: 0.1,
        }}
        variant="contained"
        color="secondary"
        onClick={() => {
          if (half === 2) {
            setTime(45 * 1000 * 60);
          } else if (half === 1) {
            setTime(0);
          }
          getReset(0);
        }}
      >
        Reset
      </Button>
    </Box>
  );
};
