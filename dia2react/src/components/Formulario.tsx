import { useState } from "react";

export const Formulario = () => {
  const [name, setName] = useState<string>("");

  const handleChange = (e: any) => {
    setName(e.target.value)
  }
 

  return (
    <div>
      Formulario
      <div>
        <input type="text" placeholder="Escribe tu nombre"
        onChange={(e) => handleChange(e)}></input>
      </div>
      Tu nombre es: {name}
    </div>
  );
};

/**
 * Input - Placeholder "añadir tarea"
 * Button - "añadir tarea"
 * Listado de tareas
 */
