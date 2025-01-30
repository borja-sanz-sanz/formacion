import { useRef, useState } from "react"

export const UseRefValues = () => {
    const [count, setCount ] = useState(0)
    const previousCountRef = useRef(count)
    const secondCountRef = useRef(count)
    const thirdCountRef = useRef(count)

    console.log('UseRefValues se renderiza')

    const handleIncrement = () => {
        thirdCountRef.current = secondCountRef.current
        secondCountRef.current = previousCountRef.current
        previousCountRef.current = count
        setCount((count ) => count + 1)
    }

    return <div>
        <p>Valor actual: {count}</p>
        <p>Valor previo: {previousCountRef.current}</p>
        <p>Segundo Valor previo: {secondCountRef.current}</p>
        <p>Tercer Valor previo: {thirdCountRef.current}</p>
        <button onClick={handleIncrement}>Incrementar contador</button>
    </div>
}