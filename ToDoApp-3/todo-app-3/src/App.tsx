import { useEffect, useState } from "react";
import "./App.css";
import DeleteIcon from "@mui/icons-material/Delete";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

function App() {
  const [isEditing, setIsEditing] = useState<any>(false);

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
        {
          id: todoList.length + Math.floor(Math.random() * 100000),
          text: todo.trim(),
          toggle: false,
        },
      ]);
    }
    setTodo("");
  };
  const habndleInputChange = (e: any) => {
    setTodo(e.target.value);
  };
  const handleDelete = (id: any) => {
    // console.log(id);
    const deletedTodoItem = todoList.filter((todoItem: any) => {
      return todoItem.id !== id;
    });
    setTodoList(deletedTodoItem);
  };
  const handleOnCheckBoxChange = (chkkedTodoItem: any) => {
    let updatedCheckBoxTodo: any;
    if (chkkedTodoItem.toggle) {
      updatedCheckBoxTodo = { ...chkkedTodoItem, toggle: false };
    } else {
      updatedCheckBoxTodo = { ...chkkedTodoItem, toggle: true };
    }

    const updatedTodoList = todoList.map((todoItem: any) => {
      return todoItem.id === chkkedTodoItem.id ? updatedCheckBoxTodo : todoItem;
    });

    setTodoList(updatedTodoList);
  };

  const handleEditFormSubmit = (e: any) => {
    e.preventDefault();
    handleUpdateTodo(currentTodo.id, currentTodo);
  };

  const handleUpdateTodo = (id: any, updateTodo: any) => {
    const updateTodoItem = todoList.map((todoItem: any) => {
      return todoItem.id === id ? updateTodo : todoItem;
    });
    // console.log("updateTodoItem", updateTodoItem);
    setIsEditing(false);
    setTodoList(updateTodoItem);
  };

  const handleEditClick = (selectedTodoItem: any) => {
    setIsEditing(true);
    setCurrentTodo({ ...selectedTodoItem });
  };
  const handleEditInputchange = (e: any) => {
    setCurrentTodo({ ...currentTodo, text: e.target.value });
  };
  return (
    <div className="App">
      {isEditing ? (
        <>
          <form onSubmit={handleEditFormSubmit}>
            <h1>Edit Todo</h1>
            <label htmlFor="editTodo">Edit Todo : </label>
            <input
              type="text"
              value={currentTodo.text}
              name="editTodo"
              onChange={handleEditInputchange}
              placeholder="Edit todo"
            ></input>
            <button type="submit">Update</button>
            <button
              className="cancelbutton"
              onClick={() => setIsEditing(false)}
            >
              Cancel
            </button>
          </form>
        </>
      ) : (
        <>
          <form onSubmit={handleFormOnSubmit}>
            <div>
              <h1>Todo List</h1>
            </div>
            <input
              name="todo"
              type="text"
              placeholder="Add a new todo"
              className="inputTodo"
              onChange={habndleInputChange}
              value={todo}
            ></input>
            <button type="submit">Add</button>
          </form>
          <div className="todo-list">
            {todoList.map((todoItem: any) => {
              return (
                <div key={todoItem.id} className="todoElement">
                  <input
                    type="checkbox"
                    checked={todoItem?.toggle}
                    onChange={() => handleOnCheckBoxChange(todoItem)}
                    className="checkBox"
                  ></input>
                  {todoItem?.toggle === true ? (
                    <span className="completd">{todoItem.text}</span>
                  ) : (
                    <span className="incompleted">{todoItem.text}</span>
                  )}

                  <button
                    className="editButton"
                    onClick={() => handleEditClick(todoItem)}
                  >
                    <ModeEditIcon></ModeEditIcon>
                  </button>
                  <button
                    onClick={() => handleDelete(todoItem.id)}
                    className="deleteButton"
                  >
                    <DeleteIcon></DeleteIcon>
                  </button>
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

//9740862131
