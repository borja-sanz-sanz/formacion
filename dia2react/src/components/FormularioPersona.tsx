import { useState } from "react";
import { Persona } from "./types";

export const FormularioPersona = () => {
  const [personaList, setPersonaList] = useState<Persona[]>([]);
  const [newPersona, setNewPersona] = useState<Persona>({ age: 0, name: "" });

  const handleNewPersona = () => {
    if (newPersona) {
      setPersonaList([
        ...personaList,
        { name: newPersona?.name, age: newPersona.age },
      ]);
    }
  };

  const handleNameChange = (event: any) => {
    setNewPersona({ ...newPersona, name: event.target.value });
  };

  const handleAgeChange = (event: any) => {
    setNewPersona({ ...newPersona, age: event.target.value });
  };

  return (
    <>
      <h1>Formulario persona</h1>
      <div>
        <input
          placeholder="Nombre persona"
          onChange={(event) => handleNameChange(event)}
        ></input>
        <input
          placeholder="Edad persona"
          onChange={(event) => handleAgeChange(event)}
        ></input>
      </div>
      <button onClick={handleNewPersona}>Añadir persona</button>

      {personaList.map((persona, index) => {
        return <div key={`persona-${index}`}>
            Nombre: {persona.name} edad: {persona.age}
        </div>
      })}
    </>
  );
};
