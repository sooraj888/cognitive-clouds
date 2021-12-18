import React from "react";
import styles from "../Components/TodoList.module.css";
import DeleteIcon from "@mui/icons-material/Delete";

const TodoList = ({ listInLocalStorage }: any) => {
  let data = JSON.parse(listInLocalStorage);

  console.log("109.1 strig data", listInLocalStorage);
  console.log("109-11:54am", data);

  return (
    <div>
      {data?.map((items: any) => {
        return (
          <>
            <div className={styles.iems}>
              <span>
                {/* <input type="checkbox" id="switch" className={styles.checkbox}/>
                <label htmlFor="switch" className={styles.toggle} /> */}
              </span>
              {items?.firstName}
              <span>
                <button className={styles.deleteButton}>
                  <DeleteIcon></DeleteIcon>
                </button>
              </span>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default TodoList;
