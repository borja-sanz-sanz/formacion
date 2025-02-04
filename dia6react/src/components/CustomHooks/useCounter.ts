import { useState } from "react"

export const useCounter = (initialValue: number) => {
    const [count, setCount] = useState(initialValue)

    const handleIncrement = () => {
        setCount((count) => count +1)
    }

    const handleDecrement = () => {
        setCount((count) => count -1)
    }

    const handleReset = () => {
        setCount(0)
    }

    return {count, handleIncrement, handleDecrement, handleReset}
}