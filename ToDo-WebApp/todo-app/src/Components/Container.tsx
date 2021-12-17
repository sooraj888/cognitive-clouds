import React from "react";
import AddIcon from "@mui/icons-material/Add";
import s from "../Components/Container.module.css";
import TodoList from "./TodoList";

function Container() {
  let textod =
    '{ "employees" : [' +
    '{ "firstName":"John" , "lastName":"Doe" },' +
    '{ "firstName":"Anna" , "lastName":"Smith" },' +
    '{ "firstName":"Peter" , "lastName":"Jones" },' +
    '{ "firstName":"Peter" , "lastName":"Jones" },' +
    '{"firstName":"Peter" , "lastName":"Jones"} ]}';

  let jsonObj = JSON.parse(textod).employees;
  console.log("107", JSON.parse(textod));
  localStorage.setItem("names", JSON.stringify(jsonObj));

  const handleAddTodoBtn = (e: any) => {
    console.log("105 json obj sdaadasd", jsonObj);
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
      <TodoList jsonObj={jsonObj}></TodoList>
    </div>
  );
}

export default Container;
