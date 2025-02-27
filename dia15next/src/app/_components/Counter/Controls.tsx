import { useCounter } from "./CounterProvider";

export const Controls = () => {
  const {
    actions: { increment, decrement, reset },
  } = useCounter();
  return (
    <div className="flex">
      <button onClick={increment} className="p-3 bg-blue-300 rounded-sm m-4">
        Increment
      </button>
      <button onClick={decrement} className="p-3 bg-green-300 rounded-sm m-4">
        Decrement
      </button>
      <button onClick={reset} className="p-3 bg-red-300 rounded-sm m-4">
        Reset
      </button>
    </div>
  );
};
