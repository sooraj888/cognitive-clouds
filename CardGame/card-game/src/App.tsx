import React, { useState } from "react";

import "./App.css";

function App() {
  const [playerName, setPlayerName] = useState("");
  const [enteredNumber, setEnterdNumber] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleOnInputFormSubmit = (e: any) => {
    e.preventDefault();

    if (parseInt(enteredNumber) <= 9 && parseInt(enteredNumber) >= 1) {
      console.log("submited");
      setPlayerName("");
      setEnterdNumber("");
      setErrorMessage("");
    }
  };

  const handleOnNumberChange = (e: any) => {
    setEnterdNumber(e.target.value);
    if (parseInt(e.target.value) <= 9 && parseInt(e.target.value) >= 1 || e.target.value==0) {
      setErrorMessage("");
    } else {
      setErrorMessage("please enter the number between 1 to 9 ");
    }
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
          required
          onChange={handleOnNameChange}
          placeholder="Enter your name"
        ></input>
        <br></br>

        <input
          value={enteredNumber}
          name="numberInput"
          type="text"
          onChange={handleOnNumberChange}
          required
          placeholder="Enter a number between 1 to 9"
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
