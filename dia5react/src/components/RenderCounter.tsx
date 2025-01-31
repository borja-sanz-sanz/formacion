
type RenderCounterProps = {
    count: number
}

export const RenderCounter = ({count}: RenderCounterProps) => {
    return <div>Valor del contador {count}</div>
}