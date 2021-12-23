// import { AnyRecord } from "dns";
import { useState, useEffect } from "react";
import "./App.css";
import TodoList from "./componenets/TodoList";
import AddForm from "./componenets/AddForm";
import EditForm from "./componenets/EditForm";

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
  const genrateId = () => {
    let id: number = todos.length + 1;

    todos.map((item: any) => {
      if (id === item.id) {
        id = 1 + Math.floor(Math.random() * 1000);
      }
    });

    return id;
  };

  function handleFormSubmit(e: any) {
    e.preventDefault();

    if (todo !== "") {
      setTodos([
        ...todos,
        {
          id: genrateId(),

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
        <>
          <EditForm
            handleEditInputChange={handleEditInputChange}
            setIsEditing={setIsEditing}
            handleEditFormSubmit={handleEditFormSubmit}
            currentTodo={currentTodo}
          ></EditForm>
        </>
      ) : (
        <AddForm
          handleFormSubmit={handleFormSubmit}
          todo={todo}
          handleInputChange={handleInputChange}
        ></AddForm>
      )}

      <TodoList
        todos={todos}
        handleEditClick={handleEditClick}
        handleDeleteClick={handleDeleteClick}
      ></TodoList>
    </div>
  );
}
