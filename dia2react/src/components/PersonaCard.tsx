import { Pencil, Trash } from "lucide-react"
import { Persona } from "./types"

type PersonaCardProps = {
    persona: Persona,
    removePerson: (id: number) => void,
    editPerson: (id: number) => void,
    id: number
}

export const PersonaCard = ({persona, removePerson, editPerson, id}: PersonaCardProps) => {
    return <div>
        <p>Nombre: {persona.name}</p>
        <p>Edad: {persona.age}</p>
        <button onClick={() => removePerson(id)}><Trash /></button>
        <button onClick={() => editPerson(id)}><Pencil /></button>
    </div>
}