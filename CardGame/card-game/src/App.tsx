import React, { useEffect, useState } from "react";

import "./App.css";

function App() {
  const [playerName, setPlayerName] = useState("");
  const [enteredNumber, setEnterdNumber] = useState<number>(NaN);

  const handleOnInputFormSubmit = (e: any) => {
    e.preventDefault();
    console.log("submited");

    setPlayerName("");
    setEnterdNumber(NaN);
  };

  const handleOnNumberChange = (e: any) => {
    setEnterdNumber(parseInt(e.target.value));
  };
  const handleOnNameChange = (e: any) => {
    setPlayerName(e.target.value);
  };

  return (
    <div className="App">
      <h1>Card game</h1>
      <form onSubmit={handleOnInputFormSubmit}>
        <input
          value={playerName}
          type="text"
          autoComplete="off"
          onChange={handleOnNameChange}
          placeholder="Enter your name"
          required
        ></input>
        <br></br>
        <input
          value={enteredNumber || ""}
          type="number"
          onChange={handleOnNumberChange}
          required
          autoComplete="off"
          placeholder="Enter a number between 1 to 9"
          min="1"
          max="9"
        ></input>
        <br />
        <button type="submit">Start</button>
      </form>
    </div>
  );
}

export default App;
