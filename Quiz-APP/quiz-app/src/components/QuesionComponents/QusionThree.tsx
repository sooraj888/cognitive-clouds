import React, { useEffect } from "react";

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
      {/* <input
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
      <input
        name="yesOrNO"
        type="radio"
        value={data[option][2]}
        onChange={handleAnswerChange}
        checked={inputAnswer == data[option][2] ? true : false}
      ></input>
      {data[option][2]}
      <input
        name="yesOrNO"
        type="radio"
        value={data[option][3]}
        onChange={handleAnswerChange}
        checked={inputAnswer == data[option][3] ? true : false}
      ></input>
      {data[option][3]} */}

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
