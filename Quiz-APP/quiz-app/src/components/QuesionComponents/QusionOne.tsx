import React, { useEffect, useState } from "react";
import { json } from "stream/consumers";

const QusionOne = ({
  data,
  language,
  handleOnAnswerCompletion,
  setInputAnswer,
  inputAnswer,
  handleOnCarrectAnswer,
}: any) => {
  // console.log(data, lanhuage);
  let qusion = "Q" + language;
  let ans = "ans" + language;

  const handleAnswerChange = (e: any) => {
    setInputAnswer(e.target.value);
    console.log(data[ans]);

    if (
      data[ans].toUpperCase().trim() === e.target.value.toUpperCase().trim()
    ) {
      handleOnCarrectAnswer(data.id, true);
      console.log("caorrect answer");
    } else {
      handleOnCarrectAnswer(data.id, false);
    }
  };
  useEffect(() => {
    // console.log("inputAns", inputAnswer);
    if (inputAnswer.trim() != "") {
      handleOnAnswerCompletion(1, true);
    } else if (inputAnswer.trim() === "") {
      handleOnAnswerCompletion(1, false);
    }
  }, [inputAnswer]);
  return (
    <div>
      {data?.[qusion]}
      <br></br>
      <input
        type="text"
        value={inputAnswer}
        className="AnsBox"
        onChange={handleAnswerChange}
      ></input>
    </div>
  );
};

export default QusionOne;
