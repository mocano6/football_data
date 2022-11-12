import { IPlayerToAdd } from "../components/PlayerDialog/PlayerDialog";

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
export const setCurrentPlayerId = (id: number) => {
  return {
    type: "SET_ID",
    payload: id,
  };
};
