import { useContext } from "react"
import { CounterContext } from "./CounterProvider"
import { DECREMENT, INCREMENT, RESET } from "./constants"

export const Controls = () => {
    const {dispatch} = useContext(CounterContext)
    return <div>
        <button onClick={()=> dispatch(INCREMENT)}>Incrementar</button>
        <button onClick={()=> dispatch(DECREMENT)}>Decrementar</button>
        <button onClick={()=> dispatch(RESET)}>Reset</button>
    </div>
}