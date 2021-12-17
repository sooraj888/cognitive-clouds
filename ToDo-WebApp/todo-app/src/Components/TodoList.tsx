import React from "react";
import styles from "../Components/TodoList.module.css"
const TodoList = () => {
  const arr = ["sa", "asd", "bb", "cc", "dd"];

  return (
    <div>
    
      {arr.map((item: any) => (
        <div className={styles.iems}>{item}</div>
      
      ))}
    </div>
  );
};

export default TodoList;
