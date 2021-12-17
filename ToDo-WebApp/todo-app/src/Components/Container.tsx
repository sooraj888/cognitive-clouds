import React from "react";
import AddIcon from "@mui/icons-material/Add";
import s from "../Components/Container.module.css";
import TodoList from "./TodoList";
import { FaxRounded } from "@mui/icons-material";

function Container() {
  const handleAddTodoBtn = (e: any) => {
    console.log("clicking");
  };

  return (
    <div className={s.containerBody}>
      {/* headding */}
      <div className={s.containerTitle}>
        <button className={s.addButton} onClick={handleAddTodoBtn}>
          <AddIcon></AddIcon>
        </button>
        <h1 className={s.titleOfComponent}>Todo List</h1>
      </div>
      {/* Todo-list  */}
      <TodoList></TodoList>
      <div>isdfs</div>
    </div>
  );
}

export default Container;
