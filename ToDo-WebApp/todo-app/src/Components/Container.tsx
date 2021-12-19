import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import s from "../Components/Container.module.css";
import TodoList from "./TodoList";

function Container() {
  let data: any;
  let data2: any;

  const [addingText, setAddingText] = useState("");

  if (localStorage.getItem("data") == null) {
    localStorage.setItem("data", JSON.parse("[]"));
  } else {
    data = localStorage.getItem("data");
  }

  const handleOnChangeAddText = (e: any) => {
    console.log(e.target.value);
    setAddingText(e.target.value);
  };
  const handleAddTodoBtn = () => {
    data2 = localStorage.getItem("data");

    localStorage.setItem("data", JSON.stringify(data));

    if (data.length === 0) {
      data = JSON.parse("[]");
    } else {
      data = JSON.parse(data2);
    }

    data[data.length] = JSON.parse('{"title":"' + addingText + '"}');
    localStorage.setItem("data", JSON.stringify(data));
  };
  return (
    <div className={s.containerBody}>
      {/* headding */}
      <div className={s.containerTitle}>
        <button className={s.addButton} onClick={handleAddTodoBtn}>
          <AddIcon></AddIcon>
        </button>
        <div>
          <input
            className={s.addingTest}
            onChange={handleOnChangeAddText}
          ></input>
        </div>

        <div>
          <h1 className={s.titleOfComponent}>Todo List</h1>
        </div>
      </div>

      <TodoList></TodoList>
    </div>
  );
}

export default Container;
