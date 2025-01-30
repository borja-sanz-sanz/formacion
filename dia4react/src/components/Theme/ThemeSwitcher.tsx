import { useContext } from "react"
import { ThemeContext } from "./ThemeProvider"

export const ThemeSwitcher = () => {
    const {theme, toggleTheme} = useContext(ThemeContext)

    return <div>
        <p>El tema actual es: {theme}</p>
        <button onClick={toggleTheme}>Cambiar tema</button>
    </div>
}