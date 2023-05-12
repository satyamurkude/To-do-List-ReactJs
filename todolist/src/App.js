// App.js
import React, { useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todo) {
      setTodos([...todos, todo]);
      setTodo("");
    }
  };

  const handleDelete = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const handleComplete = (index) => {
    const newTodos = [...todos];
    newTodos[index] = <s>{todos[index]}</s>;
    setTodos(newTodos);
  };

  return (
    <div className="container">
      <h1>To-Do List</h1>
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter a to-do"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
      <ul className="todo-list">
        {todos.map((todo, index) => (
          <li key={index} className="todo">
            <span onClick={() => handleComplete(index)}>{todo}</span>
            <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
