import { useContext } from "react"
import { AuthContext } from "./AuthProvider"

export const LoginState = () => {
    const {user, isLogged} = useContext(AuthContext)

    return <div>
        {isLogged() && <h1>Logueado como: {user}</h1>}
        {!isLogged() && <h1>No se ha iniciado sesión</h1>}
    </div>
}