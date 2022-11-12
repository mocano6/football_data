import { IPlayerToAdd } from "../components/PlayerDialog/PlayerDialog";

const players = [
  {
    id: 33,
    name: "Ryan Matthew",
    number: 33,
    isGoalkeeper: true,
  },
  {
    id: 1,
    name: "Aaron Ramsdale",
    number: 1,
    isGoalkeeper: true,
  },
  {
    id: 9,
    name: "Gabriel Jesus",
    number: 9,
    isGoalkeeper: false,
  },
];
const actions = {
  addPlayer: "ADD_PLAYER",
  removePlayer: "REMOVE_PLAYER",
};
interface IAction {
  type: string;
  payload: Object | number;
}
export const addPlayer = (state = players, action: IAction) => {
  switch (action.type) {
    case actions.addPlayer:
      const newState = [...state, action.payload];
      return newState;

    case actions.removePlayer:
      return (state = state.filter(
        (player: IPlayerToAdd) => player.id !== action.payload
      ));

    default:
      return state;
  }
};
