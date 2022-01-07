import React, { useEffect } from "react";

const QusionFour = ({
  data,
  language,
  handleOnAnswerCompletion,
  handleOnCarrectAnswer,
  setInputAnswer,
  inputAnswer,
}: any) => {
  console.log("data 101", data);
  let qusion = "Q" + language;
  let option = "optn" + language;

  const handleOnOPtionChange = (e: any) => {
    console.log(e.target.value);
    let isValueRepited = false;
    for (let i = 0; i < inputAnswer.length; i++) {
      if (inputAnswer[i] === e.target.value) {
        isValueRepited = true;
      }
    }
    if (!isValueRepited) {
      let arr = [e.target.value, ...inputAnswer];
      setInputAnswer(arr);
    }
    if (isValueRepited) {
      let arrDelete = inputAnswer.filter((item: any) => {
        return item !== e.target.value;
      });
      console.log("popedValue", arrDelete);
      setInputAnswer(arrDelete);
    }
  };

  useEffect(() => {
    console.log(inputAnswer);

    if (inputAnswer.length != 0) {
      handleOnAnswerCompletion(data.id, true);
    } else {
      handleOnAnswerCompletion(data.id, false);
    }
  }, [inputAnswer]);
  return (
    <div>
      {data[qusion]}
      <br></br>
      {data[option].map((item: any) => {
        return (
          <div key={item}>
            <input
              type="checkbox"
              onChange={handleOnOPtionChange}
              value={item}
              checked={inputAnswer.includes(item)}
            ></input>
            {item}
          </div>
        );
      })}
    </div>
  );
};
export default QusionFour;
