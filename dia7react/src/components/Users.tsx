import { useParams } from "react-router"

export const Users = () => {

    const {id} = useParams()
    return <h1>Users {id}</h1>
}