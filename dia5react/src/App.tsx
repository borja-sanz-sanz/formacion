import { CounterAPP } from "./components/CounterContext/CounterApp"
import { PersonReducer } from "./components/PersonReducer/PersonReducer"
import { Reducer } from "./components/Reducer"


function App() {
 return <>
 <Reducer />
 <PersonReducer />
 <CounterAPP />
 </>
}

export default App
