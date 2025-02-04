import { SAVE_AGE, SAVE_NAME } from "./constants";
import { ActionType, State } from "./types";

export const personReducer = (state: State, action: ActionType) => {
  switch (action.type) {
    case SAVE_NAME:
      return { ...state, name: action.payload ?? "" };
    case SAVE_AGE:
      return { ...state, age: Number(action.payload ?? '0')  };
    default:
      return state;
  }
};
