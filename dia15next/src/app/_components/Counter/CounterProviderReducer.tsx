import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useReducer,
  useState,
} from "react";

const CounterContextReducer = createContext<{
  state: { counter: number };
  dispatch: React.Dispatch<typeof INCREMENT | typeof DECREMENT | typeof RESET>;
} | null>(null);

type CounterProviderProps = {
  children: ReactNode;
};

export const useCounterReducer = () => {
  const context = useContext(CounterContextReducer);
  if (!context) {
    throw new Error(
      "useCounterReducer must be used within a CounterProviderReducer"
    );
  }
  return context;
};

export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const RESET = "RESET";

const reducer = (
  state: number,
  action: typeof INCREMENT | typeof DECREMENT | typeof RESET
) => {
  switch (action) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    case RESET:
      return 0;
  }
};

export const CounterProviderReducer = ({ children }: CounterProviderProps) => {
  const [state, dispatch] = useReducer(reducer, 0);

  const memoizedValues = useMemo(() => {
    return { state, dispatch };
  }, [state, dispatch]);

  return (
    <CounterContextReducer.Provider
      value={{
        state: { counter: memoizedValues.state },
        dispatch: memoizedValues.dispatch,
      }}
    >
      {children}
    </CounterContextReducer.Provider>
  );
};
