import { ReactNode } from "react";
import { Persona } from "../types";

type PersonaCardProps = {
  persona: Persona;
  mostrarEdad: (age: number) => void;
  children: ReactNode
};

export const PersonaCard = ({ persona, mostrarEdad, children }: PersonaCardProps) => {
  return (
    <div>
      Nombre: {persona.nombre}
      <button onClick={() => mostrarEdad(persona.age)}>Mostrar edad</button>
      <div>{children}</div>
    </div>
  );
};
