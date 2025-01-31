import { useReducer, useRef } from "react";
import { Person } from "./types";
import { personReducer } from "./reducer";
import { CLEAR_AGE, CLEAR_NAME, SAVE_AGE, SAVE_NAME } from "./constants";

const initialState: Person = { name: "", age: "" };

export const PersonReducer = () => {
  const [person, dispath] = useReducer(personReducer, initialState);
  const nameRef = useRef<HTMLInputElement | null>(null);
  const ageRef = useRef<HTMLInputElement | null>(null);

  const handleClearName = () => {
    dispath({ type: CLEAR_NAME, payload: undefined });
    if (nameRef.current) {
      nameRef.current.value = "";
    }
  };

  const handleClearAge = () => {
    dispath({ type: CLEAR_AGE, payload: undefined });
    if(ageRef.current){
        ageRef.current.value = ""
    }
  }

  return (
    <div>
      <h1>Person Reducer: </h1>
      <div style={{ marginBottom: "10px" }}>
        <input placeholder="Introduce un nombre" ref={nameRef}></input>
        <button
          onClick={() =>
            dispath({ type: SAVE_NAME, payload: nameRef.current?.value })
          }
        >
          Guardar nombre
        </button>
        <button onClick={handleClearName}>Limpiar nombre</button>
      </div>
      <div>
        <input placeholder="Introduce una edad" ref={ageRef}></input>
        <button
          onClick={() =>
            dispath({ type: SAVE_AGE, payload: ageRef.current?.value })
          }
        >
          Guardar edad
        </button>
        <button
          onClick={handleClearAge}
        >
          Limpiar edad
        </button>
      </div>
      <div>Nombre de la persona: {person.name}</div>
      <div>Edad de la persona: {person.age}</div>
    </div>
  );
};
