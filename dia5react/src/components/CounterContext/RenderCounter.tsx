import { useContext } from "react"
import { CounterContext } from "./CounterProvider"

export const RenderCounter = () => {
    const {state} = useContext(CounterContext)

    return <div>Estado del contador: {state.count}</div>
}