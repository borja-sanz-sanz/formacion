import { useMemo, useState } from "react"

export const SumMemo = () => {
    const [numbers, setNumbers] = useState([1,2,3,4])
    const [count, setCount] = useState(0)

    const memoizedSum = useMemo(() => {
        return numbers.reduce((acc, number) => {
            return acc + number
        })
    
    }, [numbers])

    return <div>
        <h3>Suma: {memoizedSum}</h3>
        <button
        onClick={() => setNumbers([...numbers, numbers[numbers.length -1] + 1])}
      >
        Añadir elemento al array {numbers[numbers.length - 1] + 1}
      </button>
        <button onClick={() => setCount((count) => count + 1)}>Contador {count}</button>
    </div>
}