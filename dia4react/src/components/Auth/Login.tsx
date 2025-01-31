import { useContext, useRef } from "react"
import { AuthContext } from "./AuthProvider"

export const Login = () => {
    const userRef = useRef<HTMLInputElement | null>(null)
    const {logIn, isLogged, logOut} = useContext(AuthContext)

    const handleLoginClick = () => {
        if(userRef.current){
            logIn(userRef.current.value)
        }
    }

    return <div>
        <br></br>
        {!isLogged() &&<input placeholder="nombre de usuario" ref={userRef} /> }
        {!isLogged() && <button onClick={handleLoginClick}>Iniciar sesión</button>}
        {isLogged() && <button onClick={logOut}>Cerrar Sesión</button>}
        <br></br>
        Esta logueado: {JSON.stringify(isLogged())}
    </div>
}