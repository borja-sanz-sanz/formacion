"use client";
import { useRef } from "react";

export const CreateTasks = ({
  onTasksChange,
}: {
  onTasksChange: (tasks: string[]) => void;
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const clickHandler = async () => {
    const newTask = inputRef.current?.value ?? "";

    const response = await fetch("/api/tasks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ newTask }),
    });

    const data = await response.json();

    onTasksChange(data);
  };

  return (
    <div className="m-4">
      <input
        type="text"
        placeholder="nueva tarea"
        className="border border-black p-2"
        ref={inputRef}
      />
      <button
        onClick={clickHandler}
        className="bg-blue-400 rounded-sm ml-2 p-2"
      >
        Crear tarea
      </button>
    </div>
  );
};
