import { createContext, useReducer } from "react"
import { CounterContextProviderProps, CounterContextType, State } from "./types"
import { counterReducer } from "./reducer"

export const CounterContext = createContext<CounterContextType>(
    {state: {count: 1}, dispatch: () => {}}
)

const initialValue: State = {count: 0}

export const CounterProvider = ({children}: CounterContextProviderProps) => {

    const [state, dispatch] = useReducer(counterReducer, initialValue)


    return <CounterContext.Provider value={{state, dispatch}}>
        {children}
    </CounterContext.Provider>

}


//input de nombre y botones de nombre un componente
//input de edad y botones de edad un componente
// mostrar valores del estado: otro componente