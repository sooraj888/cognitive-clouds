import React, { useEffect, useState } from "react";
import CircleIcon from "@mui/icons-material/Circle";
import styles from "./QuizPage.module.css";
import QusionOne from "./QuesionComponents/QusionOne";
import data from "./LanguageData";

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
  // console.log(data[0]);

  return (
    <div>
      <div className={styles.container}>
        {data.map((item: any) => {
          console.log(item);
          return (
            <button
              key={item.id}
              className={
                arrOfManageQusion[item.id - 1]?.completion
                  ? styles.circleRed
                  : styles.circleGray
              }
              onClick={() => handleOnQuesiinBtnClick(item.id)}
            >
              {item.id}
            </button>
          );
        })}
      </div>

      {arrOfManageQusion[0]?.visibility ? (
        <div>
          <QusionOne
            data={data[0]}
            lanhuage={selectedLaguage}
            arrOfManageQusion={arrOfManageQusion}
            setArrOfManageQusion={setArrOfManageQusion}
          ></QusionOne>
        </div>
      ) : (
        <></>
      )}
      {arrOfManageQusion[1]?.visibility ? <div>qn2</div> : <></>}
      {arrOfManageQusion[2]?.visibility ? <div>quesio3</div> : <></>}
      {arrOfManageQusion[3]?.visibility ? <div>quesio4</div> : <></>}
      {arrOfManageQusion[4]?.visibility ? <div>quesio5</div> : <></>}
    </div>
  );
};

export default QuizPage;
