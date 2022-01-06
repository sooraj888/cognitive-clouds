import { Language } from "@mui/icons-material";
import React, { useEffect } from "react";

const QusionTwo = ({
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
  let option = "optn" + language;

  const handleAnswerChange = (e: any) => {
    console.log("value", e.target.value);
    setInputAnswer(e.target.value);
    console.log(data[ans]);
    localStorage.setItem("yseOrNo", e.target.value);

    if (data[ans] === e.target.value) {
      handleOnCarrectAnswer(data.id, true);
      console.log("caorrect answer");
    } else {
      handleOnCarrectAnswer(data.id, false);
    }
    console.log("1010101 0", localStorage.getItem("yesOrno"));
  };
  useEffect(() => {
    // console.log("inputAns", inputAnswer);
    if (inputAnswer != "") {
      handleOnAnswerCompletion(data.id, true);
    } else if (inputAnswer === "") {
      handleOnAnswerCompletion(data.id, false);
    }
  }, [inputAnswer]);
  console.log("option", data[option][0], "option", option);
  return (
    <div>
      {data?.[qusion]}
      <br></br>
      <input
        name="yesOrNO"
        type="radio"
        value={data[option][0]}
        onChange={handleAnswerChange}
        checked={inputAnswer == data[option][0] ? true : false}
      ></input>
      {data[option][0]}
      <input
        name="yesOrNO"
        type="radio"
        value={data[option][1]}
        onChange={handleAnswerChange}
        checked={inputAnswer == data[option][1] ? true : false}
      ></input>
      {data[option][1]}
    </div>
  );
};

export default QusionTwo;
