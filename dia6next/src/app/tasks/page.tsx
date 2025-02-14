import { CreateTasks } from "./_components/CreateTasks";
import { TaskList } from "./_components/TaskList";

export default async function Page() {
  const response = await fetch("http://localhost:3000/api/tasks");
  const data = await response.json();

  return (
    <div>
      <h1 className="font-bold text-5xl">Listado de tareas</h1>
      <TaskList tasks={data} />
    </div>
  );
}
