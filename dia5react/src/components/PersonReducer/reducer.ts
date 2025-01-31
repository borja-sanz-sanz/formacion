import { CLEAR_AGE, CLEAR_NAME, SAVE_AGE, SAVE_NAME } from "./constants";
import { Person } from "./types";

export const personReducer = (
  state: Person,
  action: { type: string; payload: string | undefined }
) => {
  switch (action.type) {
    case SAVE_NAME:
      return { ...state, name: action.payload ?? "" };
    case CLEAR_NAME:
      return { ...state, name: "" };
    case SAVE_AGE:
      return { ...state, age: action.payload ?? "" };
    case CLEAR_AGE:
      return { ...state, age: "" };

    default:
      return state;
  }
};
