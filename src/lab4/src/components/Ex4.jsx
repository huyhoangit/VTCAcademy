import React, { useState } from "react";

const Ex4 = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const addTodo = () => {
    if (!input.trim()) return;
    setTodos([...todos, { text: input, completed: false }]);
    setInput("");
  };

  const toggleComplete = (index) => {
    setTodos((prev) =>
      prev.map((todo, i) =>
        i === index ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const clearCompleted = () => {
    setTodos((prev) => prev.filter((todo) => !todo.completed));
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Todo List</h1>
      <div className="flex mb-4">
        <input
          type="text"
          className="border p-2 flex-grow rounded"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && addTodo()}
          placeholder="Add a new task..."
        />
      </div>
      <ul>
        {todos.map((todo, index) => (
          <li key={index} className="flex items-center mb-2">
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleComplete(index)}
              className="mr-2"
            />
            <span className={todo.completed ? "line-through text-gray-500" : ""}>
              {todo.text}
            </span>
          </li>
        ))}
      </ul>
      <button
        onClick={clearCompleted}
        className="bg-red-500 text-white px-4 py-2 mt-4 rounded"
      >
        Clear Completed
      </button>
    </div>
  );
};

export default Ex4;
