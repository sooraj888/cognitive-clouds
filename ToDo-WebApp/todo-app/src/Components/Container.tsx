import React from "react";
import AddIcon from "@mui/icons-material/Add";
import s from "../Components/Container.module.css";
import TodoList from "./TodoList";

function Container() {
  let textod;
  let jsonObj;
  let objJson;
  const handleAddTodoBtn = (e: any) => {
    localStorage.setItem("rememberMe", "jsonObjad");
    textod =
      '{ "employees" : [' +
      '{ "firstName":"John" , "lastName":"Doe" },' +
      '{ "firstName":"Anna" , "lastName":"Smith" },' +
      '{ "firstName":"Peter" , "lastName":"Jones" },' +
      '{"dsa":"ads"} ]}';
    jsonObj = JSON.parse(textod);

   
    console.log("json obj", jsonObj.employees);
    objJson = jsonObj.employees;
    localStorage.setItem("names", JSON.stringify(objJson));
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
      <TodoList jsonObj={objJson}></TodoList>
      <div>isdfs</div>
    </div>
  );
}

export default Container;
