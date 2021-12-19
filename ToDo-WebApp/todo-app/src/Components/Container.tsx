import React from "react";
import AddIcon from "@mui/icons-material/Add";
import s from "../Components/Container.module.css";
import TodoList from "./TodoList";

function Container() {
  let data: any;
  let data2: any;
  if (localStorage.getItem("data") == null) {
    localStorage.setItem("data", JSON.parse("[]"));
  } else {
    data = localStorage.getItem("data");
  }

  const handleAddTodoBtn = () => {
    data2 = localStorage.getItem("data");

    console.log("data from localSttroage", data);

    localStorage.setItem("data", JSON.stringify(data));

    if (data.length === 0) {
      data = JSON.parse("[]");
    } else {
      data = JSON.parse(data2);
    }

    data[data.length] = JSON.parse('{"sad":"sda3"}');
    localStorage.setItem("data", JSON.stringify(data));

    // for (let i = 0; i < data.length; i++) {
    //   console.log("data", data[i]);
    // }
  };
  return (
    <div className={s.containerBody}>
      {/* headding */}
      <div className={s.containerTitle}>
        <button className={s.addButton} onClick={handleAddTodoBtn}>
          <AddIcon></AddIcon>
        </button>
        <h1 className={s.titleOfComponent}>Todo List</h1>
        <div></div>
      </div>

      <TodoList></TodoList>
    </div>
  );
}

export default Container;
