import { Persona } from "../types";
import { MayorDeEdad } from "./MayorDeEdad";
import { PersonaCard } from "./PersonaCard";

export const Personas = () => {
  const personas: Persona[] = [
    { nombre: "Nombre 1", age: 12 },
    { nombre: "Nombre 2", age: 25 },
    { nombre: "Nombre 3", age: 14 },
    { nombre: "Nombre 4", age: 40 },
  ];

  const mostrarEdad = (age: number) => {
    alert(`La edad es ${age}`);
  };

  return (
    <div>
      {personas.map((persona, index) => {
        return (
          <PersonaCard
            key={index}
            persona={persona}
            mostrarEdad={mostrarEdad}
          >
            <MayorDeEdad edad={persona.age} />
          </PersonaCard>
        );
      })}
    </div>
  );
};
