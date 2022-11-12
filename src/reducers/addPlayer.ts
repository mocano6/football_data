const players = [
  {
    id: 1,
    name: "Ryan Matthew",
    number: 33,
    isGoalkeeper: true,
  },
];
const actions = {
  addPlayer: "ADD_PLAYER",
  removePlayer: "REMOVE_PLAYER",
};
export const addPlayer = (state = players, action: any) => {
  switch (action.type) {
    case actions.addPlayer:
      const newState = [...state, action.payload];
      return newState;

    case actions.removePlayer:
      return (state = state.filter((player) => player.id !== action.payload));

    default:
      return state;
  }
};
