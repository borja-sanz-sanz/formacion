import { useContext } from "react"
import { usePerson } from "./PersonProvider"


export const PersonData = () => {
    const {name, age} = usePerson()

    return <div>
        <p>Nombre: {name}</p>
        <p>Age: {age}</p>
    </div>
}