"use server";

let tasks: string[] = ["tarea 1", "tarea 2"];

export const addTasks = async (task: string) => {
  tasks.push(task);
  return tasks;
};

export const getTasks = async () => {
  console.log("getting tasks");
  return tasks;
};
