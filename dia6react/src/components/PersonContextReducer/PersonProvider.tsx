import {
  createContext,
  memo,
  ReactNode,
  useContext,
  useMemo,
  useReducer,
} from "react";
import { personReducer } from "./personReducer";
import { ActionType } from "./types";

type PersonContextType = {
  name: string;
  age: number;
  dispatch: React.Dispatch<ActionType>;
};

const PersonContext = createContext<PersonContextType>({
  name: "",
  age: 0,
  dispatch: () => {},
});

export const usePerson = () => useContext(PersonContext);

type PersonProviderProps = {
  children: ReactNode;
};

const initalState = { name: "", age: 0 };
export const PersonProvider = ({ children }: PersonProviderProps) => {
  const [state, dispatch] = useReducer(personReducer, initalState);

  const memoizedValues = useMemo(() => {
    return { state, dispatch };
  }, [state, dispatch]);

  return (
    <PersonContext.Provider
      value={{
        name: memoizedValues.state.name,
        age: memoizedValues.state.age,
        dispatch: memoizedValues.dispatch,
      }}
    >
      {children}
    </PersonContext.Provider>
  );
};
