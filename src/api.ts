import { Tasks } from "./types";

export const getAllTodos = async (): Promise<Tasks[]> => {
  const res = await fetch(`http://localhost:3001/tasks`, {
    cache: "no-store", //SSR
  });
  const todos = await res.json();
  return todos;
};

export const addTodo = async (todo: Tasks): Promise<Tasks[]> => {
  const res = await fetch(`http://localhost:3001/tasks`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(todo),
  });
  const newTodos = await res.json();
  return newTodos;
};

export const editTodo = async (
  id: string,
  newText: string
): Promise<Tasks[]> => {
  const res = await fetch(`http://localhost:3001/tasks/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ text: newText }),
  });
  const updatedTodos = await res.json();
  return updatedTodos;
};

export const deleteTodo = async (id: string): Promise<Tasks[]> => {
  const res = await fetch(`http://localhost:3001/tasks/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const deleteTodos = await res.json();
  return deleteTodos;
};
