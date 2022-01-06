import React, { useEffect, useState } from "react";
import CircleIcon from "@mui/icons-material/Circle";
import styles from "./QuizPage.module.css";
import QusionOne from "./QuesionComponents/QusionOne";
import data from "./LanguageData";
import QusionTwo from "./QuesionComponents/QusionTwo";

const QuizPage = ({ selectedLaguage, data }: any) => {
  const [inputAnswer1, setInputAnswer1] = useState<any>("");
  const [inputAnswer2, setInputAnswer2] = useState<any>("");

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

  const handleOnAnswerCompletion = (id: any, completion: any) => {
    let arr = arrOfManageQusion.map((item: any) => {
      if (item.id == id) {
        item.completion = completion;
      }

      return item;
    });
    // console.log(arr);
    setArrOfManageQusion(arr);
  };

  const handleOnCarrectAnswer = (id: any, correctAnswer: any) => {
    let arr = arrOfManageQusion.map((item: any) => {
      if (item.id == id) {
        item.Ans = correctAnswer;
      }
      return item;
    });
    // console.log(arr);
    setArrOfManageQusion(arr);
  };
  // console.log(data[0]);
  // handleOnAnswerCompletion(1, true);
  useEffect(() => {
    arrOfQuesionVisibility[0].visibility = true;

    setArrOfManageQusion(arrOfQuesionVisibility);
  }, []);

  useEffect(() => {
    console.log(arrOfManageQusion);
  }, [arrOfManageQusion]);

  return (
    <div>
      <div className={styles.container}>
        {data.map((item: any) => {
          // console.log(item);
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
            language={selectedLaguage}
            handleOnAnswerCompletion={handleOnAnswerCompletion}
            setInputAnswer={setInputAnswer1}
            inputAnswer={inputAnswer1}
            handleOnCarrectAnswer={handleOnCarrectAnswer}
          ></QusionOne>
        </div>
      ) : (
        <></>
      )}
      {arrOfManageQusion[1]?.visibility ? (
        <div>
          <QusionTwo
            data={data[1]}
            language={selectedLaguage}
            handleOnAnswerCompletion={handleOnAnswerCompletion}
            setInputAnswer={setInputAnswer2}
            inputAnswer={inputAnswer2}
            handleOnCarrectAnswer={handleOnCarrectAnswer}
          ></QusionTwo>
        </div>
      ) : (
        <></>
      )}
      {arrOfManageQusion[2]?.visibility ? <div>quesio3</div> : <></>}
      {arrOfManageQusion[3]?.visibility ? <div>quesio4</div> : <></>}
      {arrOfManageQusion[4]?.visibility ? <div>quesio5</div> : <></>}
    </div>
  );
};

export default QuizPage;
