import { useCounter } from "./useCounter";
import { useWindowWith } from "./useWindowWidth";

export const Counter = () => {
  const { count, handleDecrement, handleIncrement, handleReset } =
    useCounter(0);
    const windowWidth = useWindowWith()

  return (
    <div>
        <p>{windowWidth}</p>
      <button onClick={handleIncrement}>Incrementar</button>
      <button onClick={handleDecrement}>Decrementar</button>
      <button onClick={handleReset}>Resetear</button>
      <p>Valor del contador: {count}</p>
    </div>
  );
};
