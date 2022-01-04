import React, { useState } from "react";
import CircleIcon from "@mui/icons-material/Circle";
import styles from "./QuizPage.module.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

const QuizPage = ({ selectedLaguage, data }: any) => {
  console.log(data);
  let a = false;
  const [aa, setaa] = useState(false);
  return (
    <div>
      <div className={styles.container}>
        {data.map((item: any) => {
          console.log(item);
          return (
            <button
              key={item.id}
              className={styles.circle}
              onClick={() => {
                setaa(true);
              }}
            >
              {item.id}
            </button>
          );
        })}
      </div>
      {aa ? <>true</> : <>false</>}
    </div>
  );
};

export default QuizPage;
