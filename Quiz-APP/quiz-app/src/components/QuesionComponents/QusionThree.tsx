import React, { useEffect } from "react";

//this only componentcan be used for (2nd  and 3 quesion ) multiple choice quesion

const QusionThree = ({
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
  let count = 0;

  const handleAnswerChange = (e: any) => {
    // console.log("value", e.target.value);
    setInputAnswer(e.target.value);
    // console.log(data[ans]);
    localStorage.setItem("yseOrNo", e.target.value);

    if (data[ans] === e.target.value) {
      handleOnCarrectAnswer(data.id, true);
      //   console.log("caorrect answer");
    } else {
      handleOnCarrectAnswer(data.id, false);
    }
  };
  useEffect(() => {
    // console.log("inputAns", inputAnswer);
    if (inputAnswer != "") {
      handleOnAnswerCompletion(data.id, true);
    } else if (inputAnswer === "") {
      handleOnAnswerCompletion(data.id, false);
    }
  }, [inputAnswer]);
  //   console.log("option", data[option][0], "option", option);
  return (
    <div>
      {data?.[qusion]}
      <br></br>

      {console.log("data 75", data[option])}
      {data[option].map((item: any) => {
        count += 1;
        return (
          <span key={item}>
            <input
              name="option"
              type="radio"
              value={item}
              onChange={handleAnswerChange}
              checked={inputAnswer == item ? true : false}
            ></input>
            {item}
          </span>
        );
      })}
    </div>
  );
};

export default QusionThree;
