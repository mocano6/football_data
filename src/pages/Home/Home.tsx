import React, { useEffect, useState } from "react";
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import { Timer } from "../../components/Timer/Timer";

export const Home = () => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#f1f1f1',
    ...theme.typography.body2,
    padding: theme.spacing(5),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  const changeToPercentage = (number:number) => (number * 100).toFixed(2)

  const [half, setHalf] = useState(1);
  const [time, getTime] = useState<number>(0);
  const [reset, getReset] = useState<any>(1);

  useEffect(() => {
    console.log(reset);
    
    if (reset===0) {
      console.log('asdfadsfasdf');
      setHalf1(clearHalf)
    }
  }, [reset])
  
  useEffect(() => {
    if (half1.possessionTeam === 1) {
      setHalf1((prevHalf1) => ({ ...prevHalf1, possession1: prevHalf1.possession1 + 1 }))
    } else if (half1.possessionTeam === 2) {
      setHalf1((prevHalf1) => ({ ...prevHalf1, possession2: prevHalf1.possession2 + 1 }))
    }
  }, [time])
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
  }
  const [half1, setHalf1] = useState(clearHalf);
  const [half2, setHalf2] = useState(clearHalf);

  return (
    <Box sx={{ width: '100%', marginTop: '10px', mouse: 'pointer' }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid sx={{display: 'flex', alignItems: 'center', justifyContent: 'center'}} item xs={12}>
        <Timer half={half} getTime={(newTime: any) => getTime(newTime)} getReset={(isReset: any) => getReset(isReset)}/>
        </Grid>
        <Grid item xs={12}>
          <Item  onClick={() => setHalf((prevHalf) => (prevHalf === 1 ? 2 : 1))}>
            {half} Half
          </Item>
        </Grid>
        <Grid sx={{display: 'flex'}} item xs={6}>
          <Item onClick={()=>setHalf1((prevHalf1) => ({ ...prevHalf1, possessionTeam: prevHalf1.possessionTeam = 1}))}>
            Possession Miedź ({changeToPercentage(Number(half1.possession1/(half1.possession1 + half1.possession2)))}%)
          </Item>
        </Grid>
        <Grid sx={{display: 'flex'}} item xs={6}>
          <Item onClick={()=>setHalf1((prevHalf1) => ({ ...prevHalf1, possessionTeam: prevHalf1.possessionTeam = 2}))}>
            Possession Opponent ({changeToPercentage(Number(half1.possession2/(half1.possession1 + half1.possession2)))}%)
          </Item>
        </Grid>
        <Grid sx={{display: 'flex'}} item xs={6}>
          <Item onClick={()=>setHalf1((prevHalf1) => ({ ...prevHalf1, pass1: prevHalf1.pass1 + 1 }))}>
            Pass Miedź ({half1.pass1}) ({changeToPercentage(Number(half1.pass1/(half1.pass1 + half1.badPass1)))}%)</Item>
        </Grid>
        <Grid sx={{display: 'flex'}} item xs={6}>
          <Item onClick={()=>setHalf1((prevHalf1) => ({ ...prevHalf1, pass2: prevHalf1.pass2 + 1 }))}>
            Pass Opponent ({half1.pass2})({changeToPercentage(Number(half1.pass2/(half1.pass2 + half1.badPass2)))}%)</Item>

        </Grid>
        <Grid sx={{display: 'flex'}} item xs={6}>
          <Item onClick={()=>setHalf1((prevHalf1) => ({ ...prevHalf1, badPass1: prevHalf1.badPass1 + 1 }))}>
            Pass bad Miedź ({half1.badPass1})</Item>
        </Grid>
        <Grid sx={{display: 'flex'}} item xs={6}>
          <Item onClick={()=>setHalf1((prevHalf1) => ({ ...prevHalf1, badPass2: prevHalf1.badPass2 + 1 }))}>
            Pass bad Opponent ({half1.badPass2})</Item>
        </Grid>
        <Grid sx={{display: 'flex'}} item xs={6}>
          <Item onClick={()=>setHalf1((prevHalf1) => ({ ...prevHalf1, Tilt1: prevHalf1.Tilt1 + 1 }))}>Pass Opp. Half Miedź ({half1.Tilt1}) ({changeToPercentage(Number(half1.Tilt1/(half1.Tilt1 + half1.Tilt2)))}%)</Item>
        </Grid>
        <Grid sx={{display: 'flex'}} item xs={6}>
          <Item onClick={()=>setHalf1((prevHalf1) => ({ ...prevHalf1, Tilt2: prevHalf1.Tilt2 + 1 }))}>Pass Opp. Half Opponent ({half1.Tilt2}) ({changeToPercentage(Number(half1.Tilt2/(half1.Tilt1 + half1.Tilt2)))}%)</Item>
        </Grid>
        <Grid sx={{display: 'flex'}} item xs={6}>
          <Item onClick={()=>setHalf1((prevHalf1) => ({ ...prevHalf1, Rec1: prevHalf1.Rec1 + 1 }))}>5 sec Regain Miedź({half1.Rec1})</Item>
        </Grid>
        <Grid sx={{display: 'flex'}} item xs={6}>
          <Item onClick={()=>setHalf1((prevHalf1) => ({ ...prevHalf1, Rec2: prevHalf1.Rec2 + 1 }))}>
            5 sec Regain Opponent ({half1.Rec2})</Item>
        </Grid>
      </Grid>
    </Box>
  );
};
