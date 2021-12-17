import React from "react";
import AddIcon from "@mui/icons-material/Add";
import s from "../Components/Container.module.css";
import TodoList from "./TodoList";

function Container() {
  let jsonObj;
  let textod =
    '{ "employees" : [' +
    '{ "firstName":"John" , "lastName":"Doe" },' +
    '{ "firstName":"Anna" , "lastName":"Smith" },' +
    '{ "firstName":"Peter" , "lastName":"Jones" },' +
    '{"dsa":"ads"} ]}';

  let storageValue = localStorage.getItem("names");

  const handleAddTodoBtn = (e: any) => {
    jsonObj = JSON.parse(textod).employees;

    localStorage.setItem("names", JSON.stringify(jsonObj));
    console.log("json obj sdaadasd", jsonObj);

    // let jsO = JSON.parse("storageValue");
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
      <TodoList jsonObj={jsonObj} prop="this is from container "></TodoList>

      <div className={s.containerBody}>ggfdg </div>
      <div className={s.containerBody}>{storageValue} </div>
    </div>
  );
}

export default Container;
