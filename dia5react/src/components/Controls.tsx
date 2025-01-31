type ControlProps = {
    increment: () => void
    decrement: () => void
    reset: () => void
}

export const Controls = ({increment, decrement, reset}: ControlProps) => {
    return <div>
        <button onClick={increment}>incrementar</button>
        <button onClick={decrement}>decrementar</button>
        <button onClick={reset}>reset</button>

    </div>
}