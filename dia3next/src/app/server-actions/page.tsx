import { Client } from "./_components/Client";
import { Server } from "./_components/Server";

export default function Page() {
  return (
    <>
      <h1>Server Actions page</h1>
      <p>
        <Client />
      </p>
      <Server />
    </>
  );
}

// let tasks: string[] = ['tarea 1']
// este listado solamente esta en el servidor
// desde el servidor se van a exponer dos funciones
// getTasks y addTask
// mostra en el navegador el listado de tareas y añadir nuevas tareas con un input
