import { createContext, useContext, useMemo, useReducer } from "react";
import { Character } from "../../shared/types";

import { ActionType, CharacterProviderProps, State } from "./types";
import { characterReducer } from "./characterReducer";

const CharacterContext = createContext<{
  state: State;
  dispatch: React.Dispatch<ActionType>;
}>({
  state: { favouriteCharacters: [] },
  dispatch: () => {},
});

export const useCharacters = () => useContext(CharacterContext);

export const CharacterProvider = ({ children }: CharacterProviderProps) => {
  const [state, dispatch] = useReducer(characterReducer, {
    favouriteCharacters: [],
  });

  const memoizedValues = useMemo(() => {
    return { state, dispatch };
  }, [state, dispatch]);

  return (
    <CharacterContext.Provider
      value={{ state: memoizedValues.state, dispatch: memoizedValues.dispatch }}
    >
      {children}
    </CharacterContext.Provider>
  );
};
