import React from "react";
import styles from "../Components/TodoList.module.css";
import DeleteIcon from "@mui/icons-material/Delete";

const TodoList = () => {
  let data;
  
  if (data == null) {
    data = JSON.parse('[{"sad":"asaaa"},{"sad":"sa"}]');
  }

  data[data.length] = JSON.parse('{"sad":"sda"}');
  data[data.length + 1] = JSON.parse('{"sad":"sda"}');
  console.log("109-11:54am", data);

  for (let i = 0; i < data.length; i++) {
    console.log("data", data[i]);
  }

  return (
    <div>
      {data?.map((items: any) => {
        return (
          <>
            <div className={styles.iems}>
              <span>
                {/* <input
                  type="checkbox"
                  id="switch"
                  className={styles.checkbox}
                /> */}
                <label htmlFor="switch" className={styles.toggle} />
              </span>
              {items?.sad}
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
