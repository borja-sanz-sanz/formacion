"use client";

import { useEffect, useReducer, useRef, useState } from "react";
import { addTasks, getTasks, saveData } from "./actions";

export const List = () => {
  const [tasks, setTasks] = useState<string[]>([]);
  const taskRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const loadTasks = async () => {
      const allTasks = await getTasks();
      setTasks(allTasks);
    };

    loadTasks();
  }, []);

  const handleClick = async () => {
    if (taskRef.current?.value) {
      const newTasks = await addTasks(taskRef.current?.value);
      setTasks(newTasks);
    }
  };

  return (
    <>
      <h1>Lista de tareas</h1>
      <input placeholder="añadir tarea" ref={taskRef}></input>
      <button onClick={handleClick}>Añadir tarea</button>
      <ul>
        {tasks.map((task, id) => (
          <li key={`task-${id}`}>{task}</li>
        ))}
      </ul>
      <button onClick={saveData}>Insert data</button>
    </>
  );
};
