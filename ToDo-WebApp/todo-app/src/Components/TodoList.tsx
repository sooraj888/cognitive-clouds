import React from "react";
import styles from "../Components/TodoList.module.css";
const TodoList = ({ jsonObj }: any) => {
  return (
    <div>
      {jsonObj.map((items: any) => {
        return <div className={styles.iems}>{items?.firstName}</div>;
      })}
    </div>
  );
};

export default TodoList;
