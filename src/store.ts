import { createSlice } from "@reduxjs/toolkit";

const defaultState = [
    {
      name: 'Aaron Ramsdale',
      number: 1,
      isGoalkeeper: true
    },
    {
      name: 'Matt Turner',
      number: 32,
      isGoalkeeper: true
    },
  ];
const slice = createSlice({
  name: "players",
  initialState: defaultState,
  reducers: {
    addPlayer: (state:any, {payload}) => {
      state.push(payload);
    },
    updatePlayer: (state, { payload }) => {
      state.map((player: any) => {
        if (player.id === payload.id) {
          return {
            ...player,
            message: payload.name,
          };
        }
        return player;
      });
    },
    deletePlayer: (state, { payload }) => {
      state.splice(state.findIndex(({ number }) => number === payload), 1);      
    },
    removeAllPlayers: (state) => {
      state = [];
    },
  },
});
export const { addPlayer, updatePlayer, deletePlayer, removeAllPlayers } =
  slice.actions;
export default slice.reducer;
