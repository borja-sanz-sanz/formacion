import { useMemo, useState } from "react";

export const Memo = () => {
  const [numbers, setNumbers] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  const [count, setCount] = useState(0);

  const memoizedEvenNumbers = useMemo(() => {
    console.log("Calculando numeros pares");
    return numbers.filter((num) => num % 2 === 0);
  }, [numbers]);

  console.log("Memo se renderiza");

  return (
    <div>
      <h3>Número pasres: {memoizedEvenNumbers.join(", ")}</h3>
      <button
        onClick={() => setNumbers([...numbers, numbers[numbers.length -1] + 1])}
      >
        Añadir elemento al array {numbers[numbers.length - 1] + 1}
      </button>
      <button onClick={() => setCount((count) => count + 1)}>
        Contador {count}
      </button>
    </div>
  );
};
