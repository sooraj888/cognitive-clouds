import React, { useEffect, useState } from "react";
import { json } from "stream/consumers";

const QusionOne = ({
  data,
  lanhuage,
  handleOnAnswerCompletion,
  setInputAnswer,
  inputAnswer,
}: any) => {
  // console.log(data, lanhuage);
  let qusion = "Q" + lanhuage;
  let ans = "ans" + lanhuage;

  const handleAnswerChange = (e: any) => {
    setInputAnswer(e.target.value);
    // console.log(data[ans]);

    if (data[ans].toUpperCase() === e.target.value.toUpperCase()) {
      console.log("caorrect answer");
    }
  };
  useEffect(() => {
    console.log("inputAns", inputAnswer);
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
