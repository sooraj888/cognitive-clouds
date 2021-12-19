// import { AnyRecord } from "dns";
import { useState, useEffect } from "react";
import "./App.css";

export default function App() {
  const [isEditing, setIsEditing] = useState(false);

  const [currentTodo, setCurrentTodo] = useState<any>({});

  const [todos, setTodos] = useState<any>(() => {
    const savedTodos = localStorage.getItem("todos");

    if (savedTodos) {
      return JSON.parse(savedTodos);
    } else {
      return [];
    }
  });

  const [todo, setTodo] = useState<any>("");

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  function handleInputChange(e: any) {
    setTodo(e.target.value);
  }

  function handleFormSubmit(e: any) {
    e.preventDefault();

    if (todo !== "") {
      setTodos([
        ...todos,
        {
          id: todos.length + 1,

          text: todo.trim(),
        },
      ]);
    }

    setTodo("");
  }

  function handleDeleteClick(id: any) {
    const removeItem = todos.filter((todo: any) => {
      return todo.id !== id;
    });

    setTodos(removeItem);
  }
  function handleEditInputChange(e: any) {
    setCurrentTodo({ ...currentTodo, text: e.target.value });
    console.log(currentTodo);
  }

  function handleEditClick(todo: any) {
    setIsEditing(true);

    setCurrentTodo({ ...todo });
  }
  function handleUpdateTodo(id: any, updatedTodo: any) {
    const updatedItem = todos.map((todo: any) => {
      return todo.id === id ? updatedTodo : todo;
    });

    setIsEditing(false);

    setTodos(updatedItem);
  }
  function handleEditFormSubmit(e: any) {
    e.preventDefault();

    handleUpdateTodo(currentTodo.id, currentTodo);
  }
  return (
    <div className="App">
      {isEditing ? (
        <form onSubmit={handleEditFormSubmit}>
          <h2>Edit Todo</h2>

          <label htmlFor="editTodo">Edit todo: </label>

          <input
            name="editTodo"
            type="text"
            placeholder="Edit todo"
            value={currentTodo.text}
            onChange={handleEditInputChange}
          />

          <button type="submit">Update</button>

          <button onClick={() => setIsEditing(false)}>Cancel</button>
        </form>
      ) : (
        <form onSubmit={handleFormSubmit}>
          <input
            name="todo"
            type="text"
            placeholder="Create a new todo"
            value={todo}
            onChange={handleInputChange}
          />
        </form>
      )}
      <div className="todo-list">
        {todos.map((todo: any) => (
          <div key={todo.id} className="list">
            <div className="todo-text">{todo.text}</div>
            <button onClick={() => handleEditClick(todo)}>Edit</button>
            <button onClick={() => handleDeleteClick(todo.id)}>X</button>
          </div>
        ))}
      </div>
    </div>
  );
}
