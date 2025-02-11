import { ReactNode } from "react";
import { Client } from "./Client";

export const Server = ({ children }: { children: ReactNode }) => {
  console.log("Server component");
  return <>Server</>;
};

//https://jsonplaceholder.typicode.com/posts -- desde el servidor
// crear un server component que obtenga los posts
// una card llamada PostCard para renderizar sus datos
// que incluya un botón que muestre una alerta con el nombre de la card
