import { useState } from "react";
import { Persona } from "./types";
import { PersonaCard } from "./PersonaCard";

export const FormularioPersona = () => {
  const [personaList, setPersonaList] = useState<Persona[]>([]);
  const [newPersona, setNewPersona] = useState<Persona>({ age: 0, name: "" });
  const [personToEdit, setPersonToEdit] = useState<number | null>(null)

  const handleNewPersona = () => {
    if (newPersona && personToEdit === null) {
      setPersonaList([
        ...personaList,
        { name: newPersona?.name, age: newPersona.age },
      ]);
    } else if (newPersona) {
      const newListadoPersonas = personaList.map((persona, index) => {
        if(index === personToEdit){
          return newPersona
        }
        return persona
      })

      if(newListadoPersonas){
      setPersonaList(newListadoPersonas)
      setPersonToEdit(null)
    }
    }
  };

  const handleNameChange = (event: any) => {
    setNewPersona({ ...newPersona, name: event.target.value });
  };

  const handleAgeChange = (event: any) => {
    setNewPersona({ ...newPersona, age: event.target.value });
  };

  const removePerson = (id: number) => {
    setPersonaList(personaList.filter((_, index) => index !== id));
  };

  const editPerson = (id: number) => {
      const persona = personaList.find((_, index) => index === id)
      if(persona){
      setNewPersona({name: persona?.name, age: persona?.age})
      setPersonToEdit(id)
    }
  };

  return (
    <>
      <h1>Formulario persona</h1>
      <div>
        <input
          placeholder="Nombre persona"
          value={newPersona.name}
          onChange={(event) => handleNameChange(event)}
        ></input>
        <input
          placeholder="Edad persona"
          value={newPersona.age}
          onChange={(event) => handleAgeChange(event)}
        ></input>
      </div>
      <button onClick={handleNewPersona}>{personToEdit !== null ? 'Editar persona' : 'Añadir persona'}</button>

      {personaList.map((persona, index) => {
        return (
          <PersonaCard
            key={`persona-${index}`} 
            persona={persona}
            removePerson={removePerson}
            editPerson={editPerson}
            id={index}
          />
        );
      })}
    </>
  );
};
