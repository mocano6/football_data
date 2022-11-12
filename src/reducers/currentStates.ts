const data = {
  currentId: null,
};
const actions = {
  setID: "SET_ID",
};

interface IAction {
  type: string;
  payload: any;
}

export const currentStates = (state = data, action: IAction) => {
  switch (action.type) {
    case actions.setID:
      const newState = {
        currentId: action.payload,
      };
      return newState;

    default:
      return state;
  }
};
