import React from "react";
import styles from "../Components/TodoList.module.css";
const TodoList = ({ jsonObj, prop }: any) => {
  console.log("this message is from TodoList", jsonObj);

  return (
    <div>
      {jsonObj.map((items: any) => {
        console.log(items);
        return <div className={styles.iems}>{items?.firstName}</div>;
      })}
      <div className={styles.iems}>{prop}</div>
    </div>
  );
};

export default TodoList;
