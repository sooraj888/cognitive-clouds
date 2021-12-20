import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [isEditing, setIsEditing] = useState<any>(true);

  const [currentTodo, setCurrentTodo] = useState<any>({});

  const [todoList, setTodoList] = useState<any>(() => {
    const savedTodoList = localStorage.getItem("todoDataList");
    if (savedTodoList) {
      return JSON.parse(savedTodoList);
    } else {
      return [];
    }
  });
  const [todo, setTodo] = useState<any>("");

  useEffect(() => {
    localStorage.setItem("todoDataList", JSON.stringify(todoList));
  }, [todoList]);

  const handleFormOnSubmit = (e: any) => {
    e.preventDefault();

    if (todo !== "") {
      setTodoList([
        ...todoList,
        { id: todoList.length + 1, text: todo.trim(), toggle: false },
      ]);
    }
    setTodo("");
  };
  const habndleInputChange = (e: any) => {
    setTodo(e.target.value);
  };
  const handleDelete = (id: any) => {
    console.log(id);
    const deletedTodoItem = todoList.filter((todoItem: any) => {
      return todoItem.id !== id;
    });
    setTodoList(deletedTodoItem);
  };
  const handleOnCheckBoxChange = (id: any) => {
    console.log("checked", id);
  };

  const handleEditInputChange = (e: any) => {
    setCurrentTodo({ ...currentTodo, text: e.target.value });
  };

  const handleEditTodo = () => {};
  return (
    <div className="App">
      {isEditing ? (
        <>
          <form onSubmit={handleEditTodo}>
            <h1>Edit Todo</h1>
            <label htmlFor="editTodo">Edit Todo : </label>
            <input
              name="editTodo"
              placeholder="edit todo"
              type="text"
              value={currentTodo.text}
              onChange={handleEditInputChange}
            ></input>
          </form>
        </>
      ) : (
        <>
          <form onSubmit={handleFormOnSubmit}>
            <input
              name="todo"
              type="text"
              placeholder="Add a new todo"
              className="inputTodo"
              onChange={habndleInputChange}
              value={todo}
            ></input>
          </form>
          <div className="todo-list">
            {todoList.map((todoItem: any) => {
              return (
                <div key={todoItem.id}>
                  <input
                    type="checkbox"
                    checked={todoItem.toggle}
                    onChange={() => handleOnCheckBoxChange(todoItem.id)}
                  ></input>
                  {todoItem.text}
                  <button onClick={() => handleDelete(todoItem.id)}>X</button>
                </div>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}

export default App;
