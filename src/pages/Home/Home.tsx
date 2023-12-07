import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import { Timer } from "../../components/Timer/Timer";
import { Button } from "@mui/material";
import { GridSize } from "@mui/material/Grid";
import { ButtonProps } from "@mui/material/Button";

export const Home = () => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#f1f1f1",
    ...theme.typography.body2,
    padding: theme.spacing(5),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));
  const changeToPercentage = (number: number) => (number * 100).toFixed(0);

  const [half, setHalf] = useState(1);
  const [time, getTime] = useState<number>(0);
  const [reset, getReset] = useState<any>(1);

  useEffect(() => {
    if (reset === 0) {
      setHalf1(clearHalf);
    }
  }, [reset]);

  useEffect(() => {
    if (half1.possessionTeam === 1) {
      setHalf1((prevHalf1) => ({
        ...prevHalf1,
        possession1: prevHalf1.possession1 + 1,
      }));
    } else if (half1.possessionTeam === 2) {
      setHalf1((prevHalf1) => ({
        ...prevHalf1,
        possession2: prevHalf1.possession2 + 1,
      }));
    }
  }, [time]);
  const clearHalf = {
    possessionTeam: 0,
    possession1: 0,
    possession2: 0,
    pass1: 0,
    pass2: 0,
    badPass1: 0,
    badPass2: 0,
    Tilt1: 0,
    Tilt2: 0,
    Rec1: 0,
    Rec2: 0,
  };
  const [half1, setHalf1] = useState(clearHalf);
  // const [half2, setHalf2] = useState(clearHalf);

  const buttons = [
    // {
    //   key: "half",
    //   style: {},
    //   innerElement: "",
    //   text: half + " Half",
    //   onClick: () => setHalf((prevHalf) => (prevHalf === 1 ? 2 : 1)),
    //   gridXS: 12,
    //   variant: "outlined",
    // },
    {
      key: "pass1",
      style: {},
      innerElement: "",
      text: `
      Pass (${half1.pass1})`,
      onClick: () =>
        setHalf1((prevHalf1) => ({
          ...prevHalf1,
          pass1: prevHalf1.pass1 + 1,
        })),
      gridXS: 3,
      variant: "outlined",
      color: "success",
    },
    {
      key: "possession1",
      style: {},
      innerElement: "",
      text: `Ball`,
      onClick: () =>
        setHalf1((prevHalf1) => ({
          ...prevHalf1,
          possessionTeam: (prevHalf1.possessionTeam = 1),
        })),
      gridXS: 3,
      variant: half1.possessionTeam === 1 ? "contained" : "outlined",
    },
    {
      key: "possession2",
      style: {},
      innerElement: "",
      text: `Ball`,
      onClick: () =>
        setHalf1((prevHalf1) => ({
          ...prevHalf1,
          possessionTeam: (prevHalf1.possessionTeam = 2),
        })),
      gridXS: 3,
      variant: half1.possessionTeam === 2 ? "contained" : "outlined",
    },
    {
      key: "pass2",
      style: {},
      innerElement: "",
      text: `Pass(${half1.pass2})`,
      onClick: () =>
        setHalf1((prevHalf1) => ({
          ...prevHalf1,
          pass2: prevHalf1.pass2 + 1,
        })),
      gridXS: 3,
      variant: "outlined",
      color: "success",
    },
    {
      key: "tilt1",
      style: {},
      innerElement: "",
      text: `Tilt (${half1.Tilt1})`,
      onClick: () =>
        setHalf1((prevHalf1) => ({
          ...prevHalf1,
          Tilt1: prevHalf1.Tilt1 + 1,
        })),
      gridXS: 3,
      variant: "contained",
      color: "success",
    },
    {
      key: "passBad1",
      style: {},
      innerElement: "",
      text: `
      Bad
      \n(${half1.badPass1})`,
      onClick: () =>
        setHalf1((prevHalf1) => ({
          ...prevHalf1,
          badPass1: prevHalf1.badPass1 + 1,
        })),
      gridXS: 3,
      variant: "contained",
      color: "error",
    },
    {
      key: "passBad2",
      style: {},
      innerElement: "",
      text: `Bad (${half1.badPass2})`,
      onClick: () =>
        setHalf1((prevHalf1) => ({
          ...prevHalf1,
          badPass2: prevHalf1.badPass2 + 1,
        })),
      gridXS: 3,
      variant: "contained",
      color: "error",
    },
    {
      key: "tilt2",
      style: {},
      innerElement: "",
      text: `Tilt(${half1.Tilt2})`,
      onClick: () =>
        setHalf1((prevHalf1) => ({
          ...prevHalf1,
          Tilt2: prevHalf1.Tilt2 + 1,
        })),
      gridXS: 3,
      variant: "contained",
      color: "success",
    },
    {
      key: "5sReg1",
      style: {},
      innerElement: "",
      text: `5s Reg(${half1.Rec1})`,
      onClick: () =>
        setHalf1((prevHalf1) => ({
          ...prevHalf1,
          Rec1: prevHalf1.Rec1 + 1,
        })),
      gridXS: 6,
      variant: "outlined",
    },
    {
      key: "5sReg2",
      style: {},
      innerElement: "",
      text: `5s Reg(${half1.Rec2})`,
      onClick: () =>
        setHalf1((prevHalf1) => ({
          ...prevHalf1,
          Rec2: prevHalf1.Rec2 + 1,
        })),
      gridXS: 6,
      variant: "outlined",
    },
  ];

  return (
    <Box sx={{ width: "100%", marginTop: "10px", mouse: "pointer" }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          item
          xs={12}
        >
          <Timer
            half={half}
            getTime={(newTime: any) => getTime(newTime)}
            getReset={(isReset: any) => getReset(isReset)}
          />
        </Grid>
        {buttons.map((btn) => (
          <Grid item xs={btn.gridXS as GridSize} key={btn.key}>
            <Button
              sx={{
                width: "-webkit-fill-available",
                height: "-webkit-fill-available",
              }}
              color={btn?.color as ButtonProps["color"]}
              onClick={btn.onClick}
              variant={btn.variant as ButtonProps["variant"]}
            >
              {btn.text}
            </Button>
          </Grid>
        ))}
      </Grid>
      <Grid container spacing={3} sx={{ marginTop: 2 }}>
        <Grid sx={{ textAlign: "center" }} item xs={2}>
          {changeToPercentage(
            Number(half1.possession1 / (half1.possession1 + half1.possession2))
          )}
          %
        </Grid>
        <Grid sx={{ textAlign: "center" }} item xs={8}>
          Posiadanie
        </Grid>
        <Grid sx={{ textAlign: "center" }} item xs={2}>
          {changeToPercentage(
            Number(half1.possession2 / (half1.possession1 + half1.possession2))
          )}
          %
        </Grid>
        <Grid sx={{ textAlign: "center" }} item xs={2}>
          {half1.pass1 + half1.Tilt1 + half1.badPass1}
        </Grid>
        <Grid sx={{ textAlign: "center" }} item xs={8}>
          Podania
        </Grid>
        <Grid sx={{ textAlign: "center" }} item xs={2}>
          {half1.pass2 + half1.Tilt2 + half1.badPass2}
        </Grid>
        <Grid sx={{ textAlign: "center" }} item xs={2}>
          {changeToPercentage(
            Number(
              (half1.pass1 + half1.Tilt1) /
                (half1.pass1 + half1.Tilt1 + half1.badPass1)
            )
          )}
          %
        </Grid>
        <Grid sx={{ textAlign: "center" }} item xs={8}>
          Podania celne
        </Grid>
        <Grid sx={{ textAlign: "center" }} item xs={2}>
          {changeToPercentage(
            Number(
              (half1.pass2 + half1.Tilt2) /
                (half1.pass2 + half1.Tilt2 + half1.badPass2)
            )
          )}
          %
        </Grid>
        <Grid sx={{ textAlign: "center" }} item xs={2}>
          {changeToPercentage(
            Number(half1.Tilt1 / (half1.Tilt1 + half1.Tilt2))
          )}
          %
        </Grid>
        <Grid sx={{ textAlign: "center" }} item xs={8}>
          Przewaga przestrzeni
        </Grid>
        <Grid sx={{ textAlign: "center" }} item xs={2}>
          {changeToPercentage(
            Number(half1.Tilt2 / (half1.Tilt1 + half1.Tilt2))
          )}
          %
        </Grid>
        <Grid sx={{ textAlign: "center" }} item xs={2}>
          {half1.Rec1}
        </Grid>
        <Grid sx={{ textAlign: "center" }} item xs={8}>
          5s odbiór
        </Grid>
        <Grid sx={{ textAlign: "center" }} item xs={2}>
          {half1.Rec2}
        </Grid>
      </Grid>
    </Box>
  );
};
