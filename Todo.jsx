import React from "react";

export default function Todo({ todo, toggleComplete, deleteTodo }) {
  return (
    <li className={`todo ${todo.completed ? "completed" : ""}`}>
      <span onClick={() => toggleComplete(todo.id)}>{todo.text}</span>
      <button onClick={() => deleteTodo(todo.id)}>❌</button>
    </li>
  );
}
