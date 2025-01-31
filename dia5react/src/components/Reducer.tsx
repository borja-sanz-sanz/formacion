import { useReducer } from "react";
import {
  COUNTER_DECREMENT,
  COUNTER_INCREMENT,
  COUNTER_RESET,
} from "./constants";
import { RenderCounter } from "./RenderCounter";
import { Controls } from "./Controls";

function reducer(state: { count: number }, action: string) {
  switch (action) {
    case COUNTER_INCREMENT:
      return { count: state.count + 1 };
    case COUNTER_DECREMENT:
      return { count: state.count - 1 };
    case COUNTER_RESET:
      return { count: 0 };
    default:
      return state;
  }
}

const initialState = { count: 0 };

export const Reducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      {/* <h1>Valor del contador {state.count}</h1>
      <button onClick={() => dispatch(COUNTER_INCREMENT)}>Incrementar</button>
      <button onClick={() => dispatch(COUNTER_DECREMENT)}>Decrementar</button>
      <button onClick={() => dispatch(COUNTER_RESET)}>Reset</button> */}
      <RenderCounter count={state.count}></RenderCounter>
      <Controls
        increment={() => dispatch(COUNTER_INCREMENT)}
        decrement={() => dispatch(COUNTER_DECREMENT)}
        reset={() => dispatch(COUNTER_RESET)}
      ></Controls>
    </div>
  );
};

//Input para nombre y boton de guardar nombre boton limpiar nombre
// Input para edad y boton para guardar edad boton limpiar edad
//Acciones guardarnombre, guardadedad, limpiarnombre limpiar edad
// mostrar el nombre y la edad en el html
