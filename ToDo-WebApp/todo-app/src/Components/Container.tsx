import React from "react";
import AddIcon from "@mui/icons-material/Add";
import s from "../Components/Container.module.css";
import TodoList from "./TodoList";
import { json } from "node:stream/consumers";

function Container() {
  let data: any;
  if (localStorage.getItem("data") == null) {
    localStorage.setItem("data", JSON.parse("[]"));
  }

  const handleAddTodoBtn = () => {
    console.log("hi");
    data = localStorage.getItem("data");
    console.log("data fetch", data);
    console.log("17 fson parsed data", data);

    data = JSON.parse('[{"sad":"asaaa1"},{"sad":"sa2"}]');

    



    // for (let i = 0; i < data.length; i++) {
    //   console.log("data is", data[i]);
    // }

    //' + JSON.stringify(data) + '
    // data[data.length] = JSON.parse('{"sad":"sda3"}');
    // data[data.length] = JSON.parse('{"sad":"sdadsfs4"}');
    // data[data.length] = JSON.parse('{"sad":"sda5"}');

    localStorage.setItem("data", JSON.stringify(data));

    console.log("data 111", localStorage.getItem("data"));

    console.log("109-11:54am", data);

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
