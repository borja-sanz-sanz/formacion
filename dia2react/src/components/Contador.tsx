import { useState } from "react";

//restar contador - 1
//reset contador = 0

export const Contador = () => {
    const [contador, setContador] = useState(0)

    const handleIncrement = () => {
        setContador(contador + 1)
    }

    const handleDecrement = () => {
        setContador(contador - 1)
    }

    const handleReset = () => {
        setContador(0)
    }

    return <>
    <div>Contador: {contador}</div>
    <button onClick={handleIncrement}>Incrementar</button>
    <button onClick={handleDecrement}>Restar</button>
    <button onClick={handleReset}>Resetear</button>
    </>
}