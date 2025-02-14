"use client";

import { use, useState } from "react";
import { CreateTasks } from "./CreateTasks";

export const TaskList = ({ tasks }: { tasks: string[] }) => {
  const [tasksState, setTasksState] = useState<string[]>(tasks);

  return (
    <>
      <CreateTasks
        onTasksChange={function (tasks) {
          setTasksState(tasks);
        }}
      ></CreateTasks>
      <ul>
        {tasksState?.map((task: string, index: number) => (
          <li key={`task-${index}`}>{task}</li>
        ))}
      </ul>
    </>
  );
};
