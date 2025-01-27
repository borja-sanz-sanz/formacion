import { Trash } from "lucide-react"

type TaskCardProps = {
    task: string,
    id: number,
    removeTask: (id: number) => void
}

export const TaskCard = ({task, id, removeTask}: TaskCardProps) => {

    const handleClick = () => {
        removeTask(id)
    }


    return <li>
        <div>Nombre de la tarea: {task}
        <button onClick={handleClick}><Trash /></button></div>
    </li>

}


//listado de personas
//persona = {nombre: string, edad: number}
//acciones
//añadir persona
//editar persona
//eliminar persona