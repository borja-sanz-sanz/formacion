import { ReactNode } from "react";
import { Character } from "../../shared/types";
import { ADD_CHARACTER, REMOVE_CHARACTER } from "./constants";

export type ActionType = {
  type: typeof ADD_CHARACTER | typeof REMOVE_CHARACTER;
  payload: Character;
};

export type CharacterProviderProps = {
  children: ReactNode;
};

export type State = {
  favouriteCharacters: Character[];
};
