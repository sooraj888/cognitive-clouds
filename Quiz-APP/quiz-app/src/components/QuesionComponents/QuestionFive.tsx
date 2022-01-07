import React, { useEffect } from "react";

const QuestionFive = ({
  data,
  language,
  handleOnAnswerCompletion,
  setInputAnswer,
  inputAnswer,
  handleOnCarrectAnswer,
}: any) => {
  let count = -1;
  let quesion = "Q" + language;
  let option = "optn" + language;
  let answerArr = "ans" + language;
  let isAnswerCorrect = false;

  const handleOnRefreshClickedOPtion = () => {
    setInputAnswer([]);
  };
  useEffect(() => {
    console.log("ans-5-", inputAnswer);
    console.log("answer", data[answerArr]);

    if (inputAnswer.length == 4) {
      handleOnAnswerCompletion(data.id, true);
    } else {
      handleOnAnswerCompletion(data.id, false);
    }

    if (inputAnswer.length == 4) {
      for (let i = 0; i < inputAnswer.length; i++) {
        console.log("ccrAns", inputAnswer[i], data[answerArr][i]);
        if (inputAnswer[i] === data[answerArr][i]) {
        } else {
          isAnswerCorrect = true;
        }
      }
      if (!isAnswerCorrect) {
        handleOnCarrectAnswer(data.id, true);
      } else {
        handleOnCarrectAnswer(data.id, false);
      }
    }
  }, [inputAnswer]);

  const handleOnSelectMatch = (e: any) => {
    console.log(e.target.value, e);
    setInputAnswer([...inputAnswer, e.target.value]);
  };

  return (
    <div>
      {data[quesion]}
      <button onClick={handleOnRefreshClickedOPtion}>refresh Quseion</button>
      {data[option].map((item: any) => {
        // console.log("item", item[0], item[1]);
        count += 1;
        return (
          <div key={item[0]}>
            <span>{item[0]}</span>
            <span className="spaceBtweenMatchs"></span>
            <span className="mactchedvalue">
              {inputAnswer[count] != null ? inputAnswer[count] : ""}
            </span>
            <input
              onClick={handleOnSelectMatch}
              type="button"
              value={item[1]}
              disabled={inputAnswer.includes(item[1]) ? true : false}
            ></input>
          </div>
        );
      })}
    </div>
  );
};

export default QuestionFive;
