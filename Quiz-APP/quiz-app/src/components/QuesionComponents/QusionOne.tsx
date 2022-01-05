import React, { useState } from "react";
import { json } from "stream/consumers";

const QusionOne = ({
  data,
  lanhuage,
  setArrOfManageQusion,
  arrOfManageQusion,
}: any) => {
  console.log(data, lanhuage);
  let qusion = "Q" + lanhuage;
  let ans = "ans" + lanhuage;
  const [inputAnswer, setInputAnswer] = useState("");
  const handleAnswerChange = (e: any) => {
    setInputAnswer(e.target.value);
    // console.log(data[ans]);

    if (data[ans].toUpperCase() === e.target.value.toUpperCase()) {
      console.log("caorrect answer");
    }
  };
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
