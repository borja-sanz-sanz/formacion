import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

const CounterContext = createContext<{
  state: { counter: number };
  actions: {
    increment: () => void;
    decrement: () => void;
    reset: () => void;
  };
} | null>(null);

type CounterProviderProps = {
  children: ReactNode;
};

export const useCounter = () => {
  const context = useContext(CounterContext);
  if (!context) {
    throw new Error("useCounter must be used within a CounterProvider");
  }
  return context;
};

export const CounterProvider = ({ children }: CounterProviderProps) => {
  const [counter, setCounter] = useState(0);

  const increment = useCallback(
    () => setCounter(counter + 1),
    [setCounter, counter]
  );
  const decrement = useCallback(
    () => setCounter(counter - 1),
    [setCounter, counter]
  );
  const reset = useCallback(() => setCounter(0), [setCounter]);

  const memoizedValues = useMemo(() => {
    return { counter, increment, decrement, reset };
  }, [counter, increment, decrement, reset]);

  return (
    <CounterContext.Provider
      value={{
        state: { counter: memoizedValues.counter },
        actions: {
          increment: memoizedValues.increment,
          decrement: memoizedValues.decrement,
          reset: memoizedValues.reset,
        },
      }}
    >
      {children}
    </CounterContext.Provider>
  );
};
