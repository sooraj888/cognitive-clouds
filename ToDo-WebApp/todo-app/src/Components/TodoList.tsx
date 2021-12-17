import React from "react";
import styles from "../Components/TodoList.module.css";
const TodoList = ({ jsonObj, prop }: any) => {
  const arr = ["sa", "asd", "bb", "cc", "dd"];
  console.log("this message is from TodoList", jsonObj);

  return (
    <div>
      {arr.map((item: any) => (
        <div className={styles.iems}>{item}</div>
      ))}
      {/* {jsonObj.map((items:any)=>(<div>sad</div>))}
     <div className={styles.iems}>{}</div> */}
      <div className={styles.iems}>{"asda "}this sada</div>
      <div className={styles.iems}>{prop}</div>
    </div>
  );
};

export default TodoList;
