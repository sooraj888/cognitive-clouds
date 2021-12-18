import React from "react";
import AddIcon from "@mui/icons-material/Add";
import s from "../Components/Container.module.css";
import TodoList from "./TodoList";

function Container() {
  let textonj =
    ' [{"firstName":"sssssssss","lastName":""},{"firstName":"John","lastName":"Doe"},{"firstName":"Anna","lastName":"Smith"},{"firstName":"Peter","lastName":"Jones"}]';

  console.log("111 simple string", textonj);

  let jsonObj = JSON.parse(textonj);

  localStorage.setItem("names", JSON.stringify(textonj));
  
  let listInLocalStorage = localStorage.getItem("names");

  const handleAddTodoBtn = (e: any) => {
    // console.log("105 json obj ", jsonObj);
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
      {/* Todo-list  */}
      <TodoList listInLocalStorage={textonj}></TodoList>
    </div>
  );
}

export default Container;
