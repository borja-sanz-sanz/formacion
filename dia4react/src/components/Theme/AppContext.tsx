import { Prueba } from "./Prueba";
import { ThemeProvider } from "./ThemeProvider";
import { ThemeSwitcher } from "./ThemeSwitcher";

export const AppContext = () => {
  return (
    <ThemeProvider>
      <ThemeSwitcher></ThemeSwitcher>
      <Prueba />
    </ThemeProvider>

  /*   <AuthProvider>
        <Login></Login> o logout
        <LoginState>
            Estas logueado o no estas logueado
        </LoginState>
    </AuthProvider> */
  );
};
