import { useParams } from "react-router"

export const Products = () => {
    const {indetifier} = useParams()
    return <h1>Products: {indetifier} </h1>
}