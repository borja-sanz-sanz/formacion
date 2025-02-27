import { useCounter } from "./CounterProvider";

export const Increment = () => {
  const {
    actions: { increment },
  } = useCounter();

  return (
    <button onClick={increment} className="p-4 m-4 bg-amber-300 rounded-sm">
      Increment
    </button>
  );
};
