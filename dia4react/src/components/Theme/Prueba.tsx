import { useContext } from "react"
import { ThemeContext } from "./ThemeProvider"

export const Prueba = () => {
    const {theme} = useContext(ThemeContext)
    return <>Prueba: {theme}</>
}