import { IPlayerToAdd } from "../components/AddPlayerDialog/AddPlayerDialog";

export const addNewPlayer = (player: IPlayerToAdd) => {
  return {
    type: "ADD_PLAYER",
    payload: player,
  };
};
export const removePlayer = (id: number) => {
  return {
    type: "REMOVE_PLAYER",
    payload: id,
  };
};

// const actualPlayers = {
//   playerToAdd: playerToAdd,
// };
// const reducer = (
//   state = actualPlayers,
//   action: { type: string; playerToAdd: IPlayerToAdd[] }
// ) => {
//   switch (action.type) {
//     case ADD_PLAYER:
//       return {
//         ...state,
//         playerToAdd: playerToAdd,
//       };

//     default:
//       return state;
//   }
// };

// const store = createStore(reducer);
// console.log("Initial state", store.getState());

// const unsubscribe = store.subscribe(() =>
//   console.log("state", store.getState())
// );

// store.dispatch(addNewPlayer());

// unsubscribe();
