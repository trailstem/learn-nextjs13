import { Tasks } from "./types";

export const getAllTodos = async (): Promise<Tasks[]> => {
  const res = await fetch(`http://localhost:3001/tasks`, {
    cache: "no-store", //SSR
  });
  const todos = await res.json();
  return todos;
};
