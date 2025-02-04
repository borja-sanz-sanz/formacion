import { useRef } from "react";
import { usePerson } from "./PersonProvider";
import { SAVE_AGE, SAVE_NAME } from "./constants";

export const Form = () => {
  const { dispatch } = usePerson();
  const nameRef = useRef<HTMLInputElement>(null);
  const ageRef = useRef<HTMLInputElement>(null);

  return (
    <div>
      <div>
        <input placeholder="Introduce un nombre" ref={nameRef}></input>
        <button
          onClick={() =>
            dispatch({ type: SAVE_NAME, payload: nameRef.current?.value })
          }
        >
          Guardar nombre
        </button>
      </div>
      <div>
        <input placeholder="Introduce una edad" ref={ageRef}></input>
        <button
          onClick={() =>
            dispatch({ type: SAVE_AGE, payload: ageRef.current?.value })
          }
        >
          Guardar edad
        </button>
      </div>
    </div>
  );
};
