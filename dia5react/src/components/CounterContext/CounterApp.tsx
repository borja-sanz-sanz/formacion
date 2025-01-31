import { Controls } from "./Controls"
import { CounterProvider } from "./CounterProvider"
import { RenderCounter } from "./RenderCounter"

export const CounterAPP = () => {
    return <CounterProvider>
        <h1>Counter context</h1>
        <RenderCounter />
        <Controls />
    </CounterProvider>
}