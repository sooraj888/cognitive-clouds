import React, { useState } from "react";
import styles from "../Components/TodoList.module.css";
import DeleteIcon from "@mui/icons-material/Delete";

const TodoList = () => {
  let data: any;
  let data2: any = localStorage.getItem("data");

  if (data2.length === 0) {
    data = JSON.parse("[]");
  } else {
    data = JSON.parse(data2);
  }
  const [editedTeaxt, setEditedText] = useState("");

  const handleEdit = (e: any) => {
    setEditedText(e.target.value);
  };
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
              <input value={items?.title} onChange={handleEdit}></input>
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
