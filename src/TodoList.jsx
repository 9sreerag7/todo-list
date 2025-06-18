import React, { useState } from "react";
import Todo from "./Todo";

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  const handleAdd = () => {
    if (input.trim() !== "") {
      setTasks([...tasks, { text: input, completed: false }]);
      setInput("");
    }
  };

  const handleDelete = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  const toggleComplete = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  };

  return (
    <div className="todo-list">
      <input
        type="text"
        placeholder="Enter a task..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>
      <ul>
        {tasks.map((task, index) => (
          <Todo
            key={index}
            task={task}
            onDelete={() => handleDelete(index)}
            onToggle={() => toggleComplete(index)}
          />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
