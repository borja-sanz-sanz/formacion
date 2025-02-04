import { useCallback, useState } from "react";

export const Callback = () => {
  const [count, setCount] = useState(0);
  const [secondCount, setSecondCount] = useState(0);

  const delayedIncrement = useCallback(() =>{
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000)}, []);

    console.log('renderizando componente')

  return (
    <div>
      <p>Contador: {count}</p>
      <button onClick={() => delayedIncrement()}>Delayed increment</button>
      <button onClick={() => setSecondCount((secondCount) => secondCount + 1)}>
        Increment second count {secondCount}
      </button>
    </div>
  );
};
