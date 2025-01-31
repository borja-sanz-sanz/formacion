import { createContext, useState } from "react";

type AuthContextType = {
  user: string | null;
  isLogged: () => boolean;
  logIn: (user: string) => void;
  logOut: () => void;
};

export const AuthContext = createContext<AuthContextType>({
  user: "",
  isLogged: () => false,
  logIn: () => {},
  logOut: () => {},
});

type AuthProvider = {
  children: React.ReactNode;
};

export const AuthProvider = ({ children }: AuthProvider) => {
  const [user, setUser] = useState<string | null>(null);

  const isLogged = () => {
    return user !== null;
  };

  const logIn = (user: string) => {
    setUser(user);
  };

  const logOut = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, isLogged, logIn, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};
