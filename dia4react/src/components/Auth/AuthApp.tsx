import { AuthProvider } from "./AuthProvider";
import { Login } from "./Login";
import { LoginState } from "./LoginState";

export const AuthApp = () => {
  return (
    <>
      <AuthProvider>
        <Login />
        <LoginState />
      </AuthProvider>
    </>
  );
};
