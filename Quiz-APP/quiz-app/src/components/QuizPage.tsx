import React, { useEffect, useState } from "react";
import CircleIcon from "@mui/icons-material/Circle";
import styles from "./QuizPage.module.css";

const QuizPage = ({ selectedLaguage, data }: any) => {
  const [arrOfManageQusion, setArrOfManageQusion] = useState<any>([]);
  const arrOfQuesionVisibility: any = [];
  data.map((item: any) => {
    arrOfQuesionVisibility[item.id - 1] = {
      visibility: false,
      Ans: false,
      completion: false,
      id: item.id,
    };
  });

  const handleOnQuesiinBtnClick = (id: any) => {
    let arr = arrOfManageQusion.map((item: any) => {
      if (item.id == id) {
        item.visibility = true;
      } else {
        item.visibility = false;
      }

      return item;
    });
    // console.log(arr);
    setArrOfManageQusion(arr);
  };

  useEffect(() => {
    arrOfQuesionVisibility[0].visibility = true;

    setArrOfManageQusion(arrOfQuesionVisibility);
  }, []);

  return (
    <div>
      <div className={styles.container}>
        {data.map((item: any) => {
          // console.log(item);
          return (
            <button
              key={item.id}
              className={styles.circle}
              onClick={() => handleOnQuesiinBtnClick(item.id)}
            >
              {item.id}
            </button>
          );
        })}
      </div>

      {arrOfManageQusion[0]?.visibility ? <>quesio1</> : <>false</>}
      {arrOfManageQusion[1]?.visibility ? <>qn2</> : <>false</>}
      {arrOfManageQusion[2]?.visibility ? <>quesio3</> : <>false</>}
    </div>
  );
};

export default QuizPage;
