import React, { useEffect, useState } from "react";

import "./App.css";

function App() {
  const [playerName, setPlayerName] = useState("");
  const [enteredNumber, setEnterdNumber] = useState<number>(NaN);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (enteredNumber > 0 && enteredNumber < 10) {
      setErrorMessage("");
    } else if (enteredNumber > 9 || enteredNumber < 1) {
      setErrorMessage("please entert number between 1 to 9 only");
    }
  }, [enteredNumber]);

  const handleOnInputFormSubmit = (e: any) => {
    e.preventDefault();
    if (enteredNumber > 0 && enteredNumber < 10) {
      console.log("submited");
    } else {
      console.log("not submited");
    }
  };

  const handleOnNumberChange = (e: any) => {
    setEnterdNumber(parseInt(e.target.value));
  };
  const handleOnNameChange = (e: any) => {
    setPlayerName(e.target.value);
  };

  return (
    <div className="App">
      <h1>card game</h1>
      <form onSubmit={handleOnInputFormSubmit}>
        <input
          value={playerName}
          name="nameInput"
          type="text"
          autoComplete="off"
          onChange={handleOnNameChange}
          placeholder="Enter your name"
          required
        ></input>
        <br></br>

        <input
          value={enteredNumber || ""}
          name="numberInput"
          type="number"
          onChange={handleOnNumberChange}
          required
          autoComplete="off"
          placeholder="Enter a number between 1 to 9"
          min="1"
          max="9"
        ></input>
        <br></br>
        <label htmlFor="numberInput" className="errorMessage">
          {errorMessage}
        </label>
        <br></br>

        <button type="submit">play</button>
      </form>
    </div>
  );
}

export default App;
