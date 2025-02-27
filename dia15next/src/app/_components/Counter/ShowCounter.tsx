import { useCounter } from "./CounterProvider";

export const ShowCounter = () => {
  const {
    state: { counter },
  } = useCounter();
  return <div>El valor del contador es: {counter}</div>;
};
