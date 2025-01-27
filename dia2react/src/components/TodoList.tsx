import { Fragment, useState } from "react";
import { TaskCard } from "./TaskCard";

export const TodoList = () => {
  const [todoList, setTodoList] = useState<string[]>([]);
  const [newTask, setNewTask] = useState("");

  const handleInputChange = (event: any) => {
    console.log(event);
    setNewTask(event.target.value);
  };

  const handleSetTaks = () => {
    setTodoList([...todoList, newTask]);
  };

  const removeTask = (id: number) => {
    // ! = =
    setTodoList(todoList.filter((_, index) => index !== id));
  };

  return (
    <>
      <h1>Listado Tareas</h1>
      <div>nombre tarea: {newTask}</div>
      <input
        type="text"
        placeholder="Nombre de la tarea"
        onChange={(e) => handleInputChange(e)}
      ></input>
      <button onClick={() => handleSetTaks()}>Añadir tarea</button>

      <h2>Lista de tareas:</h2>
      <ul>
        {todoList.map((task, index) => (
          <Fragment key={`task-${index}`}>
           {/*  <TaskCard
              task={task}
              id={index}
              removeTask={removeTask}
              key={`taks-${index}`}
            /> */}
            {TaskCard({task, id: index, removeTask})}
          </Fragment>
        ))}
      </ul>
    </>
  );
};
