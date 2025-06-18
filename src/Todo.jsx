import React from "react";

function Todo({ task, onDelete, onToggle }) {
  return (
    <li className={`todo ${task.completed ? "done" : ""}`}>
      <span onClick={onToggle}>{task.text}</span>
      <button onClick={onDelete}>❌</button>
    </li>
  );
}

export default Todo;
