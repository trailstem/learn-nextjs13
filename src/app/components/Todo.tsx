"use client";
import { deleteTodo, editTodo } from "@/api";
import { Tasks } from "@/types";
import React, { useEffect, useRef, useState } from "react";

interface TodoProps {
  todo: Tasks;
}

const Todo = ({ todo }: TodoProps) => {
  const ref = useRef<HTMLInputElement>(null);

  const [isEditing, setIdEditing] = useState<boolean>(false);
  const [editedTaskTitle, setEditedTaskTitle] = useState<string>(todo.text);

  useEffect(() => {
    if (isEditing) {
      ref.current?.focus();
    }
  }, [isEditing]);

  const handleEdit = async () => {
    setIdEditing(true);
  };

  const handleSave = async () => {
    await editTodo(todo.id, editedTaskTitle);
    setIdEditing(false);
  };

  const handleDelete = async () => {
    await deleteTodo(todo.id)
    
  }

  return (
    <li
      key={todo.id}
      className="flex justify-between p-4 bg-white border-l-4 border-blue-500 rounded shadow"
    >
      {isEditing ? (
        <input
          ref={ref}
          type="text"
          className="mr-2 py-1 rounded border-gray-400 border text-black"
          value={editedTaskTitle}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setEditedTaskTitle(e.target.value)
          }
        />
      ) : (
        <span className="text-black">{todo.text}</span>
      )}

      <div>
        {isEditing ? (
          <button className="text-blue-800 mr-3" onClick={handleSave}>
            Save
          </button>
        ) : (
          <button className="text-green-500 mr-3" onClick={handleEdit}>
            Edit
          </button>
        )}

        <button className="text-red-500" onClick={handleDelete}>Delete</button>
      </div>
    </li>
  );
};

export default Todo;
