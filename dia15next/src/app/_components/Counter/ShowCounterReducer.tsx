import { useCounterReducer } from "./CounterProviderReducer";

export const ShowCounterReducer = () => {
  const {
    state: { counter },
  } = useCounterReducer();
  return <div>El valor del contador es: {counter}</div>;
};
