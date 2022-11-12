import { addPlayer } from "./addPlayer";
import { currentStates } from "./currentStates";
import { combineReducers } from "redux";

export const allReducers = combineReducers({
  addPlayer,
  currentStates,
});
