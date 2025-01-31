import { DECREMENT, INCREMENT, RESET } from "./constants"

export type State = {
    count: number
}

export type CounterContextType = {
    state: State
    dispatch: React.Dispatch<ActionType>
}

export type CounterContextProviderProps = {
    children: React.ReactNode
}

export type ActionType = typeof INCREMENT | typeof DECREMENT | typeof RESET