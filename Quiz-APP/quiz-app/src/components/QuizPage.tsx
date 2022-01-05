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
    };
  });

  const handleOnQuesiinBtnClick = (id: any) => {
    console.log(arrOfManageQusion);
    let arr = arrOfManageQusion.map((item: any) => {
      return item;
    });
    console.log(arr);
  };

  useEffect(() => {
    arrOfQuesionVisibility[0].visibility = true;

    console.log("arrOfQuesionVisibility", arrOfQuesionVisibility);
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
              onClick={() => handleOnQuesiinBtnClick(item.id - 1)}
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
